export async function GET() {
  const username = "sahilmishra03"; // your username

  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
        badges {
          name
        }
        userCalendar {
          submissionCalendar
        }
      }
    }
  `;

  const res = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Referer: "https://leetcode.com",
    },
    body: JSON.stringify({
      query,
      variables: { username },
    }),
    next: { revalidate: 86400 }, // cache for 1 day
  });

  const data = await res.json();

  const stats = data.data.matchedUser;

  // ✅ Total solved
  const totalSolved = stats.submitStats.acSubmissionNum.find(
    (d: { difficulty: string; count: number }) => d.difficulty === "All"
  )?.count;

  // ✅ Badges count
  const badgesCount = stats.badges.length;

  // ✅ Calculate Max Streak
  const calendar = JSON.parse(stats.userCalendar.submissionCalendar);
  const dates = Object.keys(calendar)
    .map((ts) => new Date(parseInt(ts) * 1000))
    .sort((a, b) => a.getTime() - b.getTime());

  let maxStreak = 0;
  let currentStreak = 0;

  for (let i = 0; i < dates.length; i++) {
    if (calendar[Math.floor(dates[i].getTime() / 1000)] > 0) {
      currentStreak++;
      maxStreak = Math.max(maxStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  }

  return Response.json({
    totalSolved,
    badgesCount,
    maxStreak,
  });
}

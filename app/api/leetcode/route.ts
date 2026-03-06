export const dynamic = "force-dynamic"; // Prevents Next.js from statically caching the route

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
    // Lowered to 1 hour (3600 seconds) so stats update more frequently.
    // Change to `cache: "no-store"` if you want real-time updates on every single refresh.
    next: { revalidate: 3600 },
  });

  const data = await res.json();
  const stats = data.data.matchedUser;

  // Total solved
  const totalSolved = stats.submitStats.acSubmissionNum.find(
    (d: { difficulty: string; count: number }) => d.difficulty === "All"
  )?.count;

  // ✅ Badges count
  const badgesCount = stats.badges.length;

  // ✅ Calculate Max Streak properly
  const calendar = JSON.parse(stats.userCalendar.submissionCalendar);
  const dates = Object.keys(calendar)
    .map((ts) => new Date(parseInt(ts) * 1000))
    .sort((a, b) => a.getTime() - b.getTime());

  let maxStreak = 0;
  let currentStreak = dates.length > 0 ? 1 : 0;

  for (let i = 1; i < dates.length; i++) {
    // Calculate the difference in days between consecutive submissions
    const diffInDays = Math.round(
      (dates[i].getTime() - dates[i - 1].getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffInDays === 1) {
      // Consecutive day submission
      currentStreak++;
    } else if (diffInDays > 1) {
      // Streak broken, reset to 1
      currentStreak = 1;
    }

    maxStreak = Math.max(maxStreak, currentStreak);
  }

  // Catch the edge case for arrays with only 1 item
  maxStreak = Math.max(maxStreak, currentStreak);

  return Response.json({
    totalSolved,
    badgesCount,
    maxStreak,
  });
}

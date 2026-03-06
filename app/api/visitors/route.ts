import { cookies } from "next/headers";

import { Redis } from "@upstash/redis";
import { mkdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

let redis: Redis | null = null;

// Only initialize Redis if environment variables are present
if (
  process.env.UPSTASH_REDIS_REST_URL &&
  process.env.UPSTASH_REDIS_REST_TOKEN
) {
  try {
    redis = Redis.fromEnv();
  } catch {
    console.warn("Redis initialization failed, using fallback mode");
  }
}

// Local file-based fallback for development
async function getLocalVisitorCount(isNewVisitor: boolean): Promise<number> {
  try {
    const dataDir = join(process.cwd(), "data");
    const counterFile = join(dataDir, "visitors.json");

    // Ensure data directory exists
    await mkdir(dataDir, { recursive: true });

    // Read current count
    const fileContent = await readFile(counterFile, "utf-8");
    const data = JSON.parse(fileContent);

    // Only increment if this is a new visitor
    const newCount = isNewVisitor ? data.count + 1 : data.count;

    // Write updated count only if incremented
    if (isNewVisitor) {
      await writeFile(
        counterFile,
        JSON.stringify({ count: newCount }),
        "utf-8"
      );
    }

    return newCount;
  } catch {
    // If file doesn't exist or any error occurs, create it with initial count
    const dataDir = join(process.cwd(), "data");
    const counterFile = join(dataDir, "visitors.json");

    await mkdir(dataDir, { recursive: true });
    const initialCount = isNewVisitor ? 131 : 130; // Start from 130, increment to 131 for first visitor
    await writeFile(
      counterFile,
      JSON.stringify({ count: initialCount }),
      "utf-8"
    );

    return initialCount;
  }
}

export async function GET() {
  const cookieStore = await cookies();
  const visitorCookie = cookieStore.get("portfolio_visitor");

  // Check if this is a new visitor
  const isNewVisitor = !visitorCookie;

  // Use Redis if available (production)
  if (redis) {
    try {
      let views = await redis.get<number>("views");

      // First time initialization
      if (views === null) {
        await redis.set("views", 130);
        views = 130;
      }

      // Increment visitor count only for new visitors
      if (isNewVisitor) {
        views = await redis.incr("views");
      }

      const response = Response.json({ views });

      // Set cookie for new visitors (expires in 1 year)
      if (isNewVisitor) {
        response.headers.set(
          "Set-Cookie",
          "portfolio_visitor=true; Path=/; HttpOnly; SameSite=Lax; Max-Age=31536000"
        );
      }

      return response;
    } catch (error) {
      console.error("Redis error, falling back to local storage:", error);
    }
  }

  // Use local file-based storage (development/fallback)
  const views = await getLocalVisitorCount(isNewVisitor);
  const response = Response.json({ views });

  // Set cookie for new visitors (expires in 1 year)
  if (isNewVisitor) {
    response.headers.set(
      "Set-Cookie",
      "portfolio_visitor=true; Path=/; HttpOnly; SameSite=Lax; Max-Age=31536000"
    );
  }

  return response;
}

import { Redis } from "@upstash/redis";

let redis: Redis | null = null;

// Only initialize Redis if environment variables are present
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  try {
    redis = Redis.fromEnv();
  } catch (error) {
    console.warn("Redis initialization failed, using fallback mode");
  }
}

export async function GET() {
  // Fallback behavior when Redis is not configured
  if (!redis) {
    return Response.json({ views: 125 });
  }

  try {
    let views = await redis.get<number>("views");

    // First time initialization
    if (views === null) {
      await redis.set("views", 125);
      views = 125;
    }

    // Increment visitor count
    views = await redis.incr("views");

    return Response.json({ views });
  } catch (error) {
    console.error("Redis error:", error);
    return Response.json({ views: 125 });
  }
}
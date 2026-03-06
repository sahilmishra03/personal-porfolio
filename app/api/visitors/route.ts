import { cookies } from "next/headers";
import { mkdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

// File-based visitor counter for all environments
async function getVisitorCount(isNewVisitor: boolean): Promise<number> {
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

  // Use file-based storage
  const views = await getVisitorCount(isNewVisitor);
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

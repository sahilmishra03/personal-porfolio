import Link from "next/link";

import { ArrowLeft, Home } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mb-8">
          <h1 className="mb-4 text-6xl font-bold text-gray-900 dark:text-white">
            404
          </h1>
          <h2 className="mb-2 text-2xl font-semibold text-gray-700 dark:text-gray-300">
            Project Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            The project you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-white transition-colors hover:bg-gray-800 hover:underline"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-6 py-3 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
          >
            <Home size={18} />
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

import { Metadata } from "next";

import PageTransition from "@/components/PageTransition/PageTransition";
import Resources from "@/components/Resources/Resources";

export const metadata: Metadata = {
  title: "Resources | Sahil Mishra",
  description: "Learning resources and tools I use for development",
  keywords: [
    "Sahil Mishra",
    "Resources",
    "Learning",
    "Development Tools",
    "DSA",
    "Flutter",
    "Backend",
  ],
  authors: [{ name: "Sahil Mishra" }],
  creator: "Sahil Mishra",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Resources | Sahil Mishra",
    description: "Learning resources and tools I use for development",
    siteName: "Sahil Mishra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | Sahil Mishra",
    description: "Learning resources and tools I use for development",
  },
};

const ResourcesPage = () => {
  return (
    <PageTransition>
      <div className="mx-auto min-h-screen max-w-[720px] px-8 md:px-0">
        <div className="pt-24 pb-16">
          <Resources />
        </div>
      </div>
    </PageTransition>
  );
};

export default ResourcesPage;

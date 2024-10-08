import { DocumentCardList } from "@/components";
import type { Metadata } from "next";
import { fetchDocuments } from "@/contentful/portfolioDocuments";
import { draftMode } from "next/headers";

//------------------------

export const metadata: Metadata = {
  title: "Documents page | Portfolio ",
  description:
    "Documents page for Daniel portfolio where one can find links to diplomas and certificates page. Also a link to CV is available as well as the packages names I am used to work with in my projects",

  openGraph: {
    title: "Daniel's Portfolio, Documents page",
    description:
      "Documents page for Daniel portfolio where one can find links to diplomas and certificates page. Also a link to CV is available as well as the packages names I am used to work with in my projects",
    url: "https://daniel-portfolio-next-ts-contentful.vercel.app/projects",
    siteName: "daniel's portfolio",
    images: [
      {
        url: "https://daniel-portfolio-next-ts-contentful.vercel.app/all-projects.png", // Image for Open Graph previews
        width: 1200,
        height: 630,
        alt: "image showing website documents' page",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image", // 'summary', 'summary_large_image', etc.
    title: "Daniel's Portfolio, Documents page",
    description:
      "Documents page for Daniel portfolio where one can find links to diplomas and certificates page. Also a link to CV is available as well as the packages names I am used to work with in my projects",
    // images: ["https://yourwebsite.com/twitter-image.jpg"], // Twitter-specific image
    images: [
      "https://daniel-portfolio-next-ts-contentful.vercel.app/all-projects.png",
    ], // Twitter-specific image
  },
};

//------------------------

export default async function AllDocumentsPage() {
  const allDocuments = await fetchDocuments({
    preview: draftMode().isEnabled,
  });

  return (
    <main>
      <section className="projects-page">
        <DocumentCardList
          title={"All Documents"}
          documents={allDocuments}
          showItemNumber={false}
          certificates={false}
          diplomas={false}
        />
      </section>
    </main>
  );
}

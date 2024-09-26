import { DocumentCardList } from "@/components";
import type { Metadata } from "next";
import { fetchDocuments } from "@/contentful/portfolioDocuments";
import { draftMode } from "next/headers";

//------------------------

export const metadata: Metadata = {
  title: "Documents | Portfolio ",
  description:
    "Projects page for Daniel portfolio where one can find fullstack, frontend, backend and mobile projects, with link to hosted CDN",
};

//------------------------

export default async function DocumentsPage() {
  const allDocuments = await fetchDocuments({
    preview: draftMode().isEnabled,
  });

  return (
    <main>
      <section className="projects-page">
        <DocumentCardList
          documents={allDocuments}
          showLinkToDiploma={false}
          showItemNumber={false}
          title={"All Documents"}
        />
      </section>
    </main>
  );
}

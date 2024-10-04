import { DocumentCardList } from "@/components";
import type { Metadata } from "next";
import { fetchDocuments } from "@/contentful/portfolioDocuments";
import { draftMode } from "next/headers";

//------------------------

export const metadata: Metadata = {
  title: "Documents page | Portfolio ",
  description:
    "Documents page for Daniel portfolio where one can find fullstack, frontend, backend and mobile projects, with link to hosted CDN",
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
          title={"All Documents"}
          documents={allDocuments}
          showLinkToDiploma={false}
          showItemNumber={false}
        />
      </section>
    </main>
  );
}

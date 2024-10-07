import { DocumentCardList } from "@/components";
import type { Metadata } from "next";
import { fetchDocuments } from "@/contentful/portfolioDocuments";
import { draftMode } from "next/headers";

//------------------------

export const metadata: Metadata = {
  title: "Documents page | Portfolio ",
  description:
    "Documents page for Daniel portfolio where one can find links to diplomas and certificates page. Also a link to CV is available as well as the packages names I am used to work with in my projects",
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
          showItemNumber={false}
          certificates={false}
          diplomas={false}
        />
      </section>
    </main>
  );
}

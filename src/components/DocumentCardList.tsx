/**
 * This component renders indirectly many documents.
 * It accepts 3 arguments and 2 sub components
 * */

import { Title, DocumentCard } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { IDocument } from "@/contentful/portfolioDocuments";

type TypeProps = {
  title: string;
  showItemNumber?: boolean;
  documents: IDocument[];
  certificates: boolean;
  diplomas: boolean;
};

export default function DocumentCardList({
  title,
  documents,
  showItemNumber,
  certificates,
  diplomas,
}: TypeProps) {
  return (
    <section className="section documents">
      <Title title={title} />

      <div className="section-center documents-center">
        {documents.map((document, index) => (
          <DocumentCard
            key={document.slug}
            index={index}
            document={document}
            showItemNumber={showItemNumber}
          />
        ))}
      </div>

      <div className="document-btn-container">
        {(certificates || diplomas) && (
          <Link
            href="/documents"
            className="btn center-btn"
            aria-label="navigate back to documents page"
          >
            go back
          </Link>
        )}
        <Link
          href={`#${title}`}
          className="btn center-btn"
          aria-label="navigate to the top of the page"
        >
          to the top
        </Link>
      </div>
    </section>
  );
}

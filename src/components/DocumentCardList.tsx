import { Title, DocumentCard } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { IDocument } from "@/contentful/portfolioDocuments";

type TypeDocumentsProps = {
  title: string;
  showLinkToCertificates?: boolean;
  showLinkToDiploma?: boolean;
  showItemNumber?: boolean;
  documents: IDocument[];
};

export default function DocumentCardList({
  title,
  documents,
  showItemNumber,
  showLinkToCertificates,
  showLinkToDiploma,
}: TypeDocumentsProps) {
  return (
    <section className="section projects">
      <Title title={title} />

      <div className="section-center projects-center">
        {documents.map((document, index) => (
          <DocumentCard
            key={document.slug}
            index={index}
            document={document}
            showItemNumber={showItemNumber}
          />
        ))}
      </div>

      {showLinkToCertificates && (
        <Link href="/documents/certificates" className="btn center-btn">
          all certificates
        </Link>
      )}
      {showLinkToDiploma && (
        <Link href="/documents/diploma" className="btn center-btn">
          all diploma
        </Link>
      )}
    </section>
  );
}

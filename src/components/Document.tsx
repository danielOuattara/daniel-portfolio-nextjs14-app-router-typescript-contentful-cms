import Image from "next/image";
import Link from "next/link";
import { IDocument } from "@/contentful/portfolioDocuments";
import { FaMedal } from "react-icons/fa6";

export default function Document({
  singleDocument,
}: {
  singleDocument: IDocument;
}) {
  return (
    <main className="project-template-page">
      <h2>{singleDocument.category}</h2>
      <h3>{singleDocument.title}</h3>
      <p>Date: {singleDocument.date}</p>
      <p>Origin: {singleDocument.origin}</p>

      {singleDocument.category === "certificates" && (
        <a
          href={singleDocument.verification_url}
          target="_blank"
          rel="noreferrer"
          aria-label="link to verify certificate "
        >
          <span className="span-verify">
            Verify The Certificate <FaMedal />
          </span>
        </a>
      )}

      <div>
        <Image
          src={`https:${singleDocument.image?.src}`}
          alt={singleDocument.title}
          width={singleDocument.image?.width}
          height={singleDocument.image?.height}
          className="document-img"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <Link href="/documents" className="btn">
        back
      </Link>
    </main>
  );
}

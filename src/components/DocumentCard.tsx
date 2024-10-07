import Image from "next/image";
import Link from "next/link";
import { slugger } from "@/utilities/slugger";
import { FaGithubSquare } from "react-icons/fa";
import { HiAtSymbol } from "react-icons/hi";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { IDocument } from "@/contentful/portfolioDocuments";

type TypeSingleDocumentProps = {
  index: number;
  document: IDocument;
  showItemNumber?: boolean;
};

export default function DocumentCard({
  index,
  document,
  showItemNumber,
}: TypeSingleDocumentProps) {
  return (
    <article className="project" id={`${document.slug}`}>
      <Link
        href={`/documents/${slugger(document.category)}/${document.slug}`}
        className="document-img-wrapper"
      >
        <Image
          src={`https:${document.image?.src}`}
          alt={document.title}
          className="document-img"
          width={400}
          height={300}
          priority
          loading="eager"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </Link>

      <div className="document-info">
        <Link
          href={`/documents/${slugger(document.category)}/${document.slug}`}
          className="project-slug"
        >
          <h3 className="document-title">
            <span>
              {" "}
              {showItemNumber && (
                <span className="project-number">#{index + 1}</span>
              )}
            </span>
            &nbsp;
            <span>
              {" "}
              {document.title} &nbsp;
              <BsBoxArrowInUpRight className="goto project-number" />
            </span>
          </h3>
        </Link>
      </div>
    </article>
  );
}

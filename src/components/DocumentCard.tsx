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
    <article className="project">
      <div className="document-img-wrapper">
        <Image
          src={`https:${document.image?.src}`}
          alt={document.title}
          className="document-img"
          width={400}
          height={300}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div className="document-info">
        <Link
          href={`/documents/${slugger(document.title)}`}
          className="project-slug"
        >
          <h3>
            {showItemNumber && (
              <span className="project-number">#{index + 1}</span>
            )}
            {document.title} &nbsp;
            <BsBoxArrowInUpRight className="goto project-number" />
          </h3>
        </Link>

        {/* <p className="project-desc">
          {project.description.description.slice(0, 85) + "..."}
        </p> */}

        {/* <div className="project-stack">
          {project.technologies.map((techno) => (
            <span key={techno}>{techno}</span>
          ))}
        </div> */}

        {/* <div className="project-links">
          <a href={project.url_github} target="_blank" rel="noreferrer">
            <FaGithubSquare className="project-icon" />
          </a>

          <a href={project.url_website} target="_blank" rel="noreferrer">
            <HiAtSymbol className="project-icon" />
          </a>
        </div> */}
      </div>
    </article>
  );
}

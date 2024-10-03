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
        back to documents
      </Link>
    </main>
  );
}

/* 
  title: string;
  slug: string;
  category: "certificates" | "diplomas";
  verification_url: string;
  origin: string;
  date: string;
  image: IContentImage | null;

  ----------------------------------------




  return (
        <article className="project">
          <div className="project-info">
            <Link
              href={`/documents/${singleDocument.slug}`}
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

            <p>{singleDocument.verification_url}</p>

            <p className="project-desc">
          {project.description.description.slice(0, 85) + "..."}
        </p>

            <div className="project-stack">
          {project.technologies.map((techno) => (
            <span key={techno}>{techno}</span>
          ))}
        </div>

            <div className="project-links">
          <a href={project.url_github} target="_blank" rel="noreferrer">
            <FaGithubSquare className="project-icon" />
          </a>

          <a href={project.url_website} target="_blank" rel="noreferrer">
            <HiAtSymbol className="project-icon" />
          </a>
        </div>
          </div>
        </article>
      );

*/

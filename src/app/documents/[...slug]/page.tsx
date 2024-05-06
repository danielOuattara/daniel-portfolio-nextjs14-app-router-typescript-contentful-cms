/* 
slug[0] = category name
slug[1] = project name slugged

*/
import Link from "next/link";
import Image from "next/image";
import {
  fetchDocuments,
  // fetchDocumentsByCategory,
  fetchSingleDocument,
} from "@/contentful/portfolioDocuments";
import { draftMode } from "next/headers";
import { Documents } from "@/components";

type Params = {
  params: {
    slug: string[];
  };
};

export default async function ParamsPage({ params: { slug } }: Params) {
  if (slug.length === 1) {
    const allProjectsByCategory = await fetchDocuments({
      preview: draftMode().isEnabled,
      category: slug[0] as "certificates" | "diplomas",
    });

    return (
      <main>
        <section className="projects-page">
          <Documents
            title={`${slug[0]}`}
            documents={allProjectsByCategory}
            showItemNumber={true}
            showLinkToCertificates={slug[0] === "diplomas" ? true : false}
            showLinkToDiploma={slug[0] === "certificates" ? true : false}
          />
        </section>
      </main>
    );
  }

  if (slug.length === 2) {
    const singleDocument = await fetchSingleDocument({
      preview: draftMode().isEnabled,
      slug: slug[1],
    });

    return (
      <article className="project">
        <Image
          alt={singleDocument.title}
          src={`https://${singleDocument.image?.src}`}
          className="project-img"
        />

        <div className="project-info">
          <Link
            href={`/documents/${singleDocument.slug}`}
            className="project-slug"
          >
            {/* <h3>
              {showItemNumber && (
                <span className="project-number">#{index + 1}</span>
              )}
              {document.title} &nbsp;
              <BsBoxArrowInUpRight className="goto project-number" />
            </h3> */}
          </Link>

          <p>{singleDocument.verification_url}</p>

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
}

/* 
slug[0] = document category name : "certificates" | "diplomas"
slug[1] = document name slugged

*/

import { draftMode } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import {
  fetchDocuments,
  // fetchDocumentsByCategory,
  fetchSingleDocument,
} from "@/contentful/portfolioDocuments";
import { DocumentCardList } from "@/components";

type Params = {
  params: {
    slug: string[];
  };
};

export default async function ParamsPage({ params }: Params) {
  const isDraftMode = draftMode().isEnabled;
  const [categorySlug, documentNameSlug] = params.slug;

  if (categorySlug) {
    const allProjectsByCategory = await fetchDocuments({
      preview: isDraftMode,
      category: categorySlug as "certificates" | "diplomas",
    });

    return (
      <main>
        <section className="documents-page">
          <DocumentCardList
            title={`${categorySlug}`}
            documents={allProjectsByCategory}
            showItemNumber={true}
            showLinkToCertificates={categorySlug === "diplomas" ? true : false}
            showLinkToDiploma={categorySlug === "certificates" ? true : false}
          />
        </section>
      </main>
    );
  }

  if (categorySlug && documentNameSlug) {
    const singleDocument = await fetchSingleDocument({
      preview: isDraftMode,
      slug: documentNameSlug,
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

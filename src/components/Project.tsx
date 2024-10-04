import Image from "next/image";
import Link from "next/link";
import { IProject } from "@/contentful/portfolioProjects";
import { FaGithubSquare } from "react-icons/fa";
import { HiAtSymbol } from "react-icons/hi";

export default function Project({
  singleProject,
}: {
  singleProject: IProject;
}) {
  return (
    <main className="project-template-page">
      <h2>{singleProject.category} project</h2>
      <h3>{singleProject.title}</h3>
      <div>
        <div className="project-template-img-container">
          <Image
            src={`https:${singleProject.featured_image?.src}`}
            alt={singleProject.title}
            width={singleProject.featured_image?.width}
            height={singleProject.featured_image?.height}
            className="project-template-img"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>

        <div className="project-stack">
          {singleProject.technologies.slice(0, 4).map((techno) => (
            <span key={techno}>{techno}</span>
          ))}
        </div>
      </div>

      <p>{singleProject.description}</p>

      <div className="project-links">
        <Link href={`/projects/${singleProject.category}`} className="btn">
          &lt; back
        </Link>
        <a
          href={singleProject.url_github}
          target="_blank"
          rel="noreferrer"
          aria-label="Link to project website"
        >
          <FaGithubSquare className="project-icon" />
        </a>
        <a href={singleProject.url_website} target="_blank" rel="noreferrer">
          <HiAtSymbol className="project-icon" />
        </a>
      </div>
    </main>
  );
}

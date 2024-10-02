import Image from "next/image";
import Link from "next/link";
import { IProject } from "@/contentful/portfolioProjects";

export default function Project({
  singleProject,
}: {
  singleProject: IProject;
}) {
  return (
    <main className="project-template-page">
      <h2>{singleProject.title}</h2>
      <p>{singleProject.description}</p>
      <a href={singleProject.url_website} target="_blank" rel="noreferrer">
        <Image
          src={`https:${singleProject.featured_image?.src}`}
          alt={singleProject.title}
          width={singleProject.featured_image?.width}
          height={singleProject.featured_image?.height}
          className="project-img"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </a>
      <Link href="/projects" className="btn">
        back to projects
      </Link>
    </main>
  );
}

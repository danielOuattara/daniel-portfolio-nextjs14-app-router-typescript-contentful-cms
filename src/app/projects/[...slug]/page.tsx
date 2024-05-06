/* 
slug[0] = category name
slug[1] = project name slugged

*/
import Link from "next/link";
import Image from "next/image";
import {
  fetchProjects,
  // fetchProjectsByCategory,
  fetchSingleProject,
} from "@/contentful/portfolioProjects";
import { draftMode } from "next/headers";
import { Projects } from "@/components";

type Params = {
  params: {
    slug: string[];
  };
};

export default async function ParamsPage({ params: { slug } }: Params) {
  if (slug.length === 1) {
    const allProjectsByCategory = await fetchProjects({
      preview: draftMode().isEnabled,
      category: slug[0] as "backend" | "frontend" | "fullstack" | "mobile",
    });

    return (
      <main>
        <section className="projects-page">
          <Projects
            title={`${slug[0]} projects`}
            projects={allProjectsByCategory}
          />
        </section>
      </main>
    );
  }

  if (slug.length === 2) {
    const singleProject = await fetchSingleProject({
      preview: draftMode().isEnabled,
      slug: slug[1],
    });

    return (
      <main className="project-template-page">
        <h2>{singleProject.title}</h2>
        <p>{singleProject.description}</p>
        <a href={singleProject.url_website} target="_blank" rel="noreferrer">
          <Image
            src={`https://${singleProject.featured_image?.src}`}
            alt={singleProject.title}
            width={singleProject.featured_image?.width}
            height={singleProject.featured_image?.height}
            className="project-img"
          />
        </a>
        <Link href="/projects" className="btn">
          back to projects
        </Link>
      </main>
    );
  }
}

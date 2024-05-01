import { Projects } from "@/components";
import type { Metadata } from "next";
import { fetchAllProjects } from "@/contentful/portfolioProjects";
import { draftMode } from "next/headers";

export const metadata: Metadata = {
  title: "Projects | Portfolio ",
  description:
    "Projects page for Daniel portfolio where one can find fullstack, frontend, backend and mobile projects, with link to hosted CDN",
};

export default async function ProjectsPage() {
  const allProjects = await fetchAllProjects({
    preview: draftMode().isEnabled,
  });

  return (
    <main>
      <section className="projects-page">
        <Projects title="all projects" projects={allProjects} />
      </section>
    </main>
  );
}

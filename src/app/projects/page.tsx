import { Hero, Projects, Services } from "@/components";
import type { Metadata } from "next";
import { fetchAllProjects } from "@/contentful/portfolioProjects";
import { draftMode } from "next/headers";

export const metadata: Metadata = {
  title: "Home page",
  description:
    "Home page for Daniel portfolio where skills for fullstack wed development are presented as projects",
};

export default async function ProjectsPage() {
  const allProjects = await fetchAllProjects({
    preview: draftMode().isEnabled,
  });

  // console.log("allProjects.length = ", allProjects.length);
  // console.log("allProjects = ", allProjects);

  return (
    <main>
      <section className="projects-page">
        <Projects title="all projects" projects={allProjects} />
      </section>
    </main>
  );
}

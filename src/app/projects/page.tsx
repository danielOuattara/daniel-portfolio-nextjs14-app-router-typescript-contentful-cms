import { ProjectCardList } from "@/components";
import type { Metadata } from "next";
import { fetchProjects } from "@/contentful/portfolioProjects";
import { draftMode } from "next/headers";

//------------------------

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const allProjects = await fetchProjects({ preview: false });
  return allProjects.map((post) => ({ slug: post.slug }));
}

//------------------------

export const metadata: Metadata = {
  title: "Projects | Portfolio ",
  description:
    "Projects page for Daniel portfolio where one can find fullstack, frontend, backend and mobile projects, with link to hosted CDN",
};

//------------------------

export default async function AllProjectsPage() {
  const allProjects = await fetchProjects({
    preview: draftMode().isEnabled,
  });

  return (
    <main>
      <section className="projects-page">
        <ProjectCardList
          title="all projects"
          projects={allProjects}
          showNumbering={true}
        />
      </section>
    </main>
  );
}

import { Hero, ProjectCardList, Services } from "@/components";
import type { Metadata } from "next";
import { fetchProjects } from "@/contentful/portfolioProjects";
import { draftMode } from "next/headers";

//------------------------------

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const allProjects = await fetchProjects({ preview: false });
  return allProjects.map((post) => ({ slug: post.slug }));
}

//------------------------------

export const metadata: Metadata = {
  title: "Home page",
  description:
    "Home page for Daniel portfolio where skills for fullstack wed development are presented as projects",
};

//------------------------------

export default async function HomePage() {
  const featuredProjects = await fetchProjects({
    preview: draftMode().isEnabled,
    featured: true,
  });

  return (
    <main>
      <Hero />
      <Services />
      <ProjectCardList
        title="featured projects"
        showLinkToProjects={true}
        showNumbering={false}
        projects={featuredProjects}
      />
    </main>
  );
}

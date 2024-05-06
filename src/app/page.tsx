import { Hero, Projects, Services } from "@/components";
import type { Metadata } from "next";
import { fetchProjects } from "@/contentful/portfolioProjects";
import { draftMode } from "next/headers";

export const metadata: Metadata = {
  title: "Home page",
  description:
    "Home page for Daniel portfolio where skills for fullstack wed development are presented as projects",
};

export default async function Home() {
  const featuredProjects = await fetchProjects({
    preview: draftMode().isEnabled,
    featured: true,
  });

  return (
    <main>
      <Hero />
      <Services />
      <Projects
        title="featured projects"
        showLinkToProjects={true}
        projects={featuredProjects}
      />
    </main>
  );
}

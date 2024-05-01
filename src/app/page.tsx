import { Hero, Projects, Services } from "@/components";
import type { Metadata } from "next";
import { fetchFeaturedProjects } from "@/contentful/portfolioProjects";
import { draftMode } from "next/headers";

export const metadata: Metadata = {
  title: "Home page",
  description:
    "Home page for Daniel portfolio where skills for fullstack wed development are presented as projects",
};

export default async function Home() {
  const featuredProjects = await fetchFeaturedProjects({
    preview: draftMode().isEnabled,
  });

  // console.log("featuredProjects.length = ", featuredProjects.length);
  // console.log("featuredProjects = ", featuredProjects);

  return (
    <main>
      <h1>Home page</h1>
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

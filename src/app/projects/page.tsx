import { ProjectCardList } from "@/components";
import type { Metadata } from "next";
import { fetchProjects } from "@/contentful/portfolioProjects";
import { draftMode } from "next/headers";

//------------------------

export const metadata: Metadata = {
  title: "Projects page | Portfolio ",
  description:
    "Projects page for Daniel portfolio where one can find fullstack, frontend, backend and mobile projects, with link to hosted CDN",

  openGraph: {
    title: "Daniel's Portfolio, Projects page",
    description:
      "Projects page for Daniel portfolio where skills for fullstack web development are presented as projects. In this page one can find all websites, representing projects. Frontend, Backend, FullStack, Mobile",
    url: "https://daniel-portfolio-next-ts-contentful.vercel.app/projects",
    siteName: "daniel's portfolio",
    images: [
      {
        url: "https://daniel-portfolio-next-ts-contentful.vercel.app/all-projects.png", // Image for Open Graph previews
        width: 1200,
        height: 630,
        alt: "image showing website projects' page",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image", // 'summary', 'summary_large_image', etc.
    title: "Daniel's Portfolio, FullStack Developer",
    description:
      "Projects page for Daniel portfolio where skills for fullstack web development are presented as projects. In this page one can find all websites, representing projects. Frontend, Backend, FullStack, Mobile",
    // images: ["https://yourwebsite.com/twitter-image.jpg"], // Twitter-specific image
    images: [
      "https://daniel-portfolio-next-ts-contentful.vercel.app/all-projects.png",
    ], // Twitter-specific image
  },
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

// slug[0] = project category name: "backend" | "frontend" | "fullstack" | "mobile"
// slug[1] = project name slugged

import { draftMode } from "next/headers";
import {
  fetchProjects,
  fetchSingleProject,
} from "@/contentful/portfolioProjects";
import { Project, ProjectCardList } from "@/components";
import { notFound } from "next/navigation";

type Params = {
  params: {
    slug: string[];
  };
};

type CategorySlugType = "backend" | "frontend" | "fullstack" | "mobile";

//----

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  const categories: CategorySlugType[] = [
    "backend",
    "frontend",
    "fullstack",
    "mobile",
  ];

  let paths: { slug: string[] }[] = [];

  for (const category of categories) {
    const projects = await fetchProjects({ category });

    projects.forEach((project) => {
      paths.push({ slug: [category, project.slug] });
    });
  }

  // Return array of objects with slug arrays
  return paths;
}

//----

export default async function ProjectSlugPage({ params }: Params) {
  const isDraftMode = draftMode().isEnabled;

  const slugArray = Array.isArray(params?.slug) ? params.slug : [params?.slug];
  const [categorySlug, projectNameSlug] = slugArray;

  try {
    if (!categorySlug) {
      notFound();
    }

    if (categorySlug && projectNameSlug) {
      // Fetch & render a single project from a category
      const singleProject = await fetchSingleProject({
        preview: isDraftMode,
        slug: projectNameSlug,
      });

      if (!singleProject) {
        notFound();
      }

      return <Project singleProject={singleProject} />;
    }

    // Fetch & render all projects by category
    const projectsByCategory = await fetchProjects({
      preview: isDraftMode,
      category: categorySlug as CategorySlugType,
    });

    if (projectsByCategory.length === 0) {
      notFound();
    }

    return (
      <main>
        <section className="projects-page">
          <ProjectCardList
            title={`${categorySlug} projects`}
            projects={projectsByCategory}
            showNumbering={false}
          />
        </section>
      </main>
    );
  } catch (error) {
    console.error("An error occurred:", error);
    notFound();
  }
}

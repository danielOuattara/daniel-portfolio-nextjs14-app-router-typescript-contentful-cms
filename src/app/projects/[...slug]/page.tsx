// slug[0] = project category name: "backend" | "frontend" | "fullstack" | "mobile"
// slug[1] = project name slugged

import { draftMode } from "next/headers";
import {
  fetchProjects,
  fetchSingleProject,
} from "@/contentful/portfolioProjects";
import { Project, ProjectCardList } from "@/components";
import { notFound } from "next/navigation";
import Link from "next/link";

type Params = {
  params: {
    slug: string[];
  };
};

type CategorySlugType = "backend" | "frontend" | "fullstack" | "mobile";

export default async function ParamsPage({ params }: Params) {
  const isDraftMode = draftMode().isEnabled;
  const [categorySlug, projectNameSlug] = params.slug;

  try {
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

    if (categorySlug) {
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
          {/* <Link href="/projects" className="btn">
            &lt; back to projects
          </Link> */}
        </main>
      );
    } else {
      notFound();
    }
  } catch (error) {
    console.error("An error occurred:", error);
    notFound();
  }
}

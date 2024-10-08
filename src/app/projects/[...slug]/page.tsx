// slug[0] = project category name: "backend" | "frontend" | "fullstack" | "mobile"
// slug[1] = project name slugged

import { draftMode } from "next/headers";
import {
  fetchProjects,
  fetchSingleProject,
} from "@/contentful/portfolioProjects";
import { Project, ProjectCardList } from "@/components";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";

//----

type Params = {
  params: {
    slug: string[];
  };
  searchParams?: { [key: string]: string | string[] | undefined };
};

type CategorySlugType = "backend" | "frontend" | "fullstack" | "mobile";

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

export async function generateMetadata(
  { params, searchParams }: Params,
  parent: ResolvingMetadata,
): Promise<Metadata | undefined> {
  const isDraftMode = draftMode().isEnabled;
  const slugArray = Array.isArray(params?.slug) ? params.slug : [params?.slug];
  const [categorySlug, projectNameSlug] = slugArray;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  try {
    if (!categorySlug) {
      return undefined;
    }
    if (categorySlug && projectNameSlug) {
      // Fetch & render a single project from a category
      const singleProject = await fetchSingleProject({
        preview: isDraftMode,
        slug: projectNameSlug,
      });

      if (!singleProject) {
        return undefined;
      }

      return {
        openGraph: {
          title: singleProject.title,
          description: `${singleProject.description}`,
          url: `https://daniel-portfolio-next-ts-contentful.vercel.app/${singleProject.category}/${singleProject.slug}`,
          siteName: "daniel's portfolio",
          images: [
            {
              url: `https:${singleProject.featured_image?.src}`,
              width: 1200,
              height: 630,
              alt: `https:${singleProject.title}`,
            },
            ...previousImages,
          ],
          locale: "en_US",
          type: "website",
        },
        twitter: {
          card: "summary_large_image", // 'summary', 'summary_large_image', etc.
          title: singleProject.title,
          description: `${singleProject.description}`,
          site: "daniel's portfolio",
          images: [
            // Twitter-specific image
            {
              url: `https:${singleProject.featured_image?.src}`,
              width: 1200,
              height: 630,
              alt: singleProject.title,
            },
          ],
        },
      };
    }

    // Fetch & render all projects by category
    const projectsByCategory = await fetchProjects({
      preview: isDraftMode,
      category: categorySlug as CategorySlugType,
    });

    if (projectsByCategory.length === 0) {
      return undefined;
    }

    return {
      openGraph: {
        title: `${categorySlug} projects`,
        description: `List of all ${projectsByCategory} website`,
        url: `https://daniel-portfolio-next-ts-contentful.vercel.app/${projectsByCategory}-projects.png`,
        siteName: "daniel's portfolio",
        images: [
          {
            url: `https://daniel-portfolio-next-ts-contentful.vercel.app/${projectsByCategory}-projects.png`,
            width: 1200,
            height: 630,
            alt: `https:${projectsByCategory}`,
          },
          ...previousImages,
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image", // 'summary', 'summary_large_image', etc.
        title: `${categorySlug} projects`,
        description: `List of all ${projectsByCategory} website`,
        site: "daniel's portfolio",
        images: [
          {
            url: `https://daniel-portfolio-next-ts-contentful.vercel.app/${projectsByCategory}`,
            width: 1200,
            height: 630,
            alt: `https:${projectsByCategory}`,
          },
        ], // Twitter-specific image
      },
    };
  } catch (error) {
    return;
  }
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
    notFound();
  }
}

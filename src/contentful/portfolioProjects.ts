/**-------------------------------------------------------------------------------
 * Next, let's create a little helper for fetching one or multiple project(s):
 */

import { TypePortfolioProjectsSkeleton } from "./types";
import { Entry } from "contentful";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import contentfulClient from "./contentfulClients";
import { IContentImage, parseContentfulContentImage } from "./contentImage";

type TypeProjectEntry = Entry<TypePortfolioProjectsSkeleton, undefined, string>;

/**-------------------------------------------------------------------------------
 * A simplified version of project interface:
 * we don't need all the data that Contentful gives us.
 */

export interface IProject {
  title: string;
  slug: string;
  category: "backend" | "frontend" | "fullstack" | "mobile";
  level: "advanced" | "beginner" | "intermediate";
  description: string;
  featured: boolean;
  url_website: string;
  url_github: string;
  technologies: string[];
  featured_image: IContentImage | null;
  // images_list: IContentImage[] | null; // TODO
}

/**-------------------------------------------------------------------------------
 * A function to transform a Contentful project
 * into a project that matches our interface IProject.
 */

export function parseContentfulProject(
  projectEntry: TypeProjectEntry,
): IProject {
  return {
    title: projectEntry.fields.title,
    slug: projectEntry.fields.slug,
    category: projectEntry.fields.category,
    level: projectEntry.fields.level,
    description: projectEntry.fields.description,
    featured: projectEntry.fields.featured,
    url_website: projectEntry.fields.url_website,
    url_github: projectEntry.fields.url_github,
    technologies: projectEntry.fields.technologies,
    featured_image: parseContentfulContentImage(
      projectEntry.fields.featured_image,
    ),
    // images_list: parseContentfulContentImage(projectEntry.fields.images_list)[] || null,
  };
}

/**-------------------------------------------------------------------------------
 * A function to fetch projects.
 * Optionally it uses the Contentful content preview.
 */

interface IFetchProjects {
  preview: boolean;
  featured?: boolean;
  category?: "backend" | "frontend" | "fullstack" | "mobile";
}

export async function fetchProjects({
  preview,
  featured,
  category,
}: IFetchProjects): Promise<IProject[]> {
  const contentful = contentfulClient({ preview });

  const rawProjectsResult =
    await contentful.getEntries<TypePortfolioProjectsSkeleton>({
      content_type: "portfolioProjects",
      include: 2,
      order: ["fields.title"],
      "fields.featured": featured,
      "fields.category": category,
    });

  return rawProjectsResult.items.map(
    (rawProject) => parseContentfulProject(rawProject) as IProject,
  );
}

/**-------------------------------------------------------------------------------
 * A function to fetch a single project by its title or slug.
 * Optionally uses the Contentful content preview.
 */
interface IFetchSingleProject {
  preview: boolean;
  title?: string;
  slug?: string;
}

export async function fetchSingleProject({
  preview,
  title,
  slug,
}: IFetchSingleProject): Promise<IProject> {
  const contentful = contentfulClient({ preview });

  const rawProjectResult =
    await contentful.getEntries<TypePortfolioProjectsSkeleton>({
      content_type: "portfolioProjects",
      "fields.title": title ?? "",
      "fields.slug": slug ?? "",
      include: 2,
    });

  return parseContentfulProject(rawProjectResult.items[0]) as IProject;
}

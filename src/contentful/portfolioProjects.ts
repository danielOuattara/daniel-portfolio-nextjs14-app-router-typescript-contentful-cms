/**-------------------------------------------------------------------------------
 * Next, let's create a little helper for fetching one or multiple project(s):
 */

import { TypePortfolioDanielSkeleton } from "./types";
import { Entry } from "contentful";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import contentfulClient from "./contentfulClients";
import { IContentImage, parseContentfulContentImage } from "./contentImage";

type TProjectEntry = Entry<TypePortfolioDanielSkeleton, undefined, string>;

/**-------------------------------------------------------------------------------
 * A simplified version of project interface:
 * we don't need all the data that Contentful gives us.
 */

export interface IProject {
  title: string;
  category: "backend" | "frontend" | "fullstack" | "mobile";
  level: "advanced" | "beginner" | "intermediate";
  description: string;
  featured: boolean;
  url_website: string;
  url_github: string;
  technologies: string[];
  featured_image: IContentImage | null;
  //   images_list: IContentImage | null; // TODO
}

/**-------------------------------------------------------------------------------
 * A function to transform a Contentful project
 * into a project that matches our interface IProject.
 */

export function parseContentfulProject(
  projectEntry?: TProjectEntry,
): IProject | null {
  if (!projectEntry) {
    return null;
  }
  return {
    title: projectEntry.fields.title,
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
 * A function to fetch featured projects.
 * Optionally it uses the Contentful content preview.
 */

interface IFetchProjects {
  preview: boolean;
}

export async function fetchFeaturedProjects({
  preview,
}: IFetchProjects): Promise<IProject[]> {
  const contentful = contentfulClient({ preview });

  const rawProjectsResult =
    await contentful.getEntries<TypePortfolioDanielSkeleton>({
      content_type: "portfolioDaniel",
      include: 2,
      order: ["fields.title"],
      "fields.featured": true,
    });

  return rawProjectsResult.items.map(
    (blogPost) => parseContentfulProject(blogPost) as IProject,
  );
}

/**-------------------------------------------------------------------------------
 * A function to fetch featured projects.
 * Optionally it uses the Contentful content preview.
 */

interface IFetchProjects {
  preview: boolean;
}

export async function fetchAllProjects({
  preview,
}: IFetchProjects): Promise<IProject[]> {
  const contentful = contentfulClient({ preview });

  const rawProjectsResult =
    await contentful.getEntries<TypePortfolioDanielSkeleton>({
      content_type: "portfolioDaniel",
      include: 2,
      order: ["fields.title"],
    });

  return rawProjectsResult.items.map(
    (blogPost) => parseContentfulProject(blogPost) as IProject,
  );
}

/**-------------------------------------------------------------------------------
 * A function to fetch a single project by its title.
 * Optionally uses the Contentful content preview.
 */
interface IFetchSingleBlogPost {
  preview: boolean;
  title: string;
}

export async function fetchSingleBlogPost({
  preview,
  title,
}: IFetchSingleBlogPost): Promise<IProject | null> {
  const contentful = contentfulClient({ preview });

  const rawBlogPostResult =
    await contentful.getEntries<TypePortfolioDanielSkeleton>({
      content_type: "portfolioDaniel",
      "fields.title": title,
      include: 2,
    });

  return parseContentfulProject(rawBlogPostResult.items[0]) as IProject;
}

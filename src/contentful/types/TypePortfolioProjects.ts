import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypePortfolioProjectsFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  category: EntryFieldTypes.Symbol<
    "backend" | "frontend" | "fullstack" | "mobile"
  >;
  level: EntryFieldTypes.Symbol<"advanced" | "beginner" | "intermediate">;
  description: EntryFieldTypes.Text;
  featured: EntryFieldTypes.Boolean;
  url_website: EntryFieldTypes.Symbol;
  url_github: EntryFieldTypes.Symbol;
  technologies: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  featured_image: EntryFieldTypes.AssetLink;
  images_list?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypePortfolioProjectsSkeleton = EntrySkeletonType<
  TypePortfolioProjectsFields,
  "portfolioProjects"
>;

export type TypePortfolioProjects<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypePortfolioProjectsSkeleton, Modifiers, Locales>;

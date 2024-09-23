import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypePortfolioDocumentsFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  category: EntryFieldTypes.Symbol<"certificates" | "diplomas">;
  verification_url: EntryFieldTypes.Symbol;
  origin: EntryFieldTypes.Symbol;
  date: EntryFieldTypes.Date;
  image: EntryFieldTypes.AssetLink;
}

export type TypePortfolioDocumentsSkeleton = EntrySkeletonType<
  TypePortfolioDocumentsFields,
  "portfolioDocuments"
>;

export type TypePortfolioDocuments<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypePortfolioDocumentsSkeleton, Modifiers, Locales>;

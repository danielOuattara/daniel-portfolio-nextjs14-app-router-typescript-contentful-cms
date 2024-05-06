import { TypePortfolioDocumentsSkeleton } from "./types";
import { Entry } from "contentful";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import contentfulClient from "./contentfulClients";
import { IContentImage, parseContentfulContentImage } from "./contentImage";
import { parseContentfulProject } from "./portfolioProjects";

type TypeDocumentEntry = Entry<
  TypePortfolioDocumentsSkeleton,
  undefined,
  string
>;

/* 
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    category: EntryFieldTypes.Symbol<"certificates" | "diplomas">;
    verification_url: EntryFieldTypes.Symbol;
    origin: EntryFieldTypes.Symbol;
    date: EntryFieldTypes.Date;
    image: EntryFieldTypes.AssetLink;

*/

/**-------------------------------------------------------------------------------
 * A simplified version of document interface:
 * we don't need all the data that Contentful gives us.
 */

export interface IDocument {
  title: string;
  slug: string;
  category: "certificates" | "diplomas";
  verification_url: string;
  origin: string;
  date: string;
  image: IContentImage | null;
}

/**-------------------------------------------------------------------------------
 * A function to transform a Contentful document
 * into a document that matches our interface IDocument.
 */

export function parseContentfulDocument(
  documentEntry: TypeDocumentEntry,
): IDocument {
  return {
    title: documentEntry.fields.title,
    slug: documentEntry.fields.slug,
    category: documentEntry.fields.category,
    verification_url: documentEntry.fields.verification_url,
    origin: documentEntry.fields.origin,
    date: documentEntry.fields.date,
    image: parseContentfulContentImage(documentEntry.fields.image),
  };
}

/**-------------------------------------------------------------------------------
 * A function to fetch documents.
 * Optionally it uses the Contentful content preview.
 */

interface IFetchDocuments {
  preview: boolean;
  category?: "certificates" | "diplomas";
}

export async function fetchDocuments({
  preview,
  category,
}: IFetchDocuments): Promise<IDocument[]> {
  const contentful = contentfulClient({ preview });

  const rawDocumentsResult =
    await contentful.getEntries<TypePortfolioDocumentsSkeleton>({
      content_type: "portfolioDocuments",
      include: 2,
      order: ["-fields.title"],
      "fields.category": category,
    });

  return rawDocumentsResult.items.map(
    (rawDocument) => parseContentfulDocument(rawDocument) as IDocument,
  );
}

/**-------------------------------------------------------------------------------
 * A function to fetch a single document by its title or slug.
 * Optionally uses the Contentful content preview.
 */

interface IFetchSingleDocument {
  preview: boolean;
  title?: string;
  slug?: string;
}

export async function fetchSingleDocument({
  preview,
  title,
  slug,
}: IFetchSingleDocument): Promise<IDocument> {
  const contentful = contentfulClient({ preview });

  const rawDocumentResult =
    await contentful.getEntries<TypePortfolioDocumentsSkeleton>({
      content_type: "portfolioDocuments",
      "fields.title": title ?? "",
      "fields.slug": slug ?? "",
      include: 2,
    });

  return parseContentfulDocument(rawDocumentResult.items[0]) as IDocument;
}

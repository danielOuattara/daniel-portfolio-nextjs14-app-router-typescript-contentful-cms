import { TypePortfolioDocumentsSkeleton } from "./types";
import { Entry } from "contentful";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import contentfulClient from "./contentfulClient";
import { IContentImage, parseContentfulContentImage } from "./contentImage";
import { parseContentfulProject } from "./portfolioProjects";

type TypeDocumentEntry = Entry<
  TypePortfolioDocumentsSkeleton,
  undefined,
  string
>;

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
 * into a document that matches our interface 'IDocument'.
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
 * A function to fetch all the documents.
 * Optionally it uses the Contentful content preview.
 */

interface IFetchDocumentsOptions {
  preview?: boolean;
  category?: "certificates" | "diplomas";
}

export async function fetchDocuments({
  preview,
  category,
}: IFetchDocumentsOptions): Promise<IDocument[]> {
  const contentful = contentfulClient({ preview });

  const rawDocumentsResult =
    await contentful.getEntries<TypePortfolioDocumentsSkeleton>({
      content_type: "portfolioDocuments",
      include: 2,
      order: ["-fields.date"],
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

interface IFetchSingleDocumentOptions {
  preview: boolean;
  title?: string;
  slug?: string;
}

export async function fetchSingleDocument({
  preview,
  title,
  slug,
}: IFetchSingleDocumentOptions): Promise<IDocument> {
  const contentful = contentfulClient({ preview });

  const rawDocumentResult =
    await contentful.getEntries<TypePortfolioDocumentsSkeleton>({
      content_type: "portfolioDocuments",
      include: 2,
      "fields.title": title ?? "",
      "fields.slug": slug ?? "",
    });

  return parseContentfulDocument(rawDocumentResult.items[0]) as IDocument;
}

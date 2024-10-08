// slug[0] = document category name : "certificates" | "diplomas"
//slug[1] = document name slugged

import { draftMode } from "next/headers";
import {
  fetchDocuments,
  fetchSingleDocument,
} from "@/contentful/portfolioDocuments";
import { Document, DocumentCardList } from "@/components";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";

type Params = {
  params: {
    slug: string[];
  };
  searchParams?: { [key: string]: string | string[] | undefined };
};

type CategorySlugType = "certificates" | "diplomas";

//------

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  const categories: CategorySlugType[] = ["certificates", "diplomas"];

  let paths: { slug: string[] }[] = [];

  for (const category of categories) {
    const documents = await fetchDocuments({ category });

    documents.forEach((project) => {
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
  const [categorySlug, documentNameSlug] = slugArray;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  try {
    if (!categorySlug) {
      return undefined;
    }
    if (categorySlug && documentNameSlug) {
      // Fetch & render a single document from a category
      const singleDocument = await fetchSingleDocument({
        preview: isDraftMode,
        slug: documentNameSlug,
      });

      if (!singleDocument) {
        return undefined;
      }

      return {
        openGraph: {
          title: singleDocument.title,
          description: `${categorySlug}: ${singleDocument.title}`,
          url: `https://daniel-portfolio-next-ts-contentful.vercel.app/${singleDocument.category}/${singleDocument.slug}`,
          siteName: "daniel's portfolio",
          images: [
            {
              url: `https:${singleDocument.image?.src}`,
              width: 1200,
              height: 630,
              alt: `https:${singleDocument.title}`,
            },
            ...previousImages,
          ],
          locale: "en_US",
          type: "website",
        },

        twitter: {
          card: "summary_large_image", // 'summary', 'summary_large_image', etc.
          title: singleDocument.title,
          description: `${categorySlug}: ${singleDocument.title}`,
          site: "daniel's portfolio",
          images: [
            // Twitter-specific image
            {
              url: `https:${singleDocument.image?.src}`,
              width: 1200,
              height: 630,
              alt: singleDocument.title,
            },
          ],
        },
      };
    }

    // Fetch & render documents by category
    const documentsByCategory = await fetchDocuments({
      preview: isDraftMode,
      category: categorySlug as CategorySlugType,
    });

    if (documentsByCategory.length === 0) {
      return undefined;
    }

    return {
      openGraph: {
        title: `${categorySlug} documents`,
        description: `List of all ${categorySlug}`,
        url: `https://daniel-portfolio-next-ts-contentful.vercel.app/${categorySlug}-projects.png`,
        siteName: "daniel's portfolio",
        images: [
          {
            url: `https://daniel-portfolio-next-ts-contentful.vercel.app/${categorySlug}-projects.png`,
            width: 1200,
            height: 630,
            alt: categorySlug,
          },
          ...previousImages,
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image", // 'summary', 'summary_large_image', etc.
        title: `${categorySlug} projects`,
        description: `List of all ${categorySlug} `,
        site: "daniel's portfolio",
        images: [
          {
            url: `https://daniel-portfolio-next-ts-contentful.vercel.app/${categorySlug}`,
            width: 1200,
            height: 630,
            alt: categorySlug,
          },
        ], // Twitter-specific image
      },
    };
  } catch (error) {
    return;
  }
}

//------

export default async function DocumentSlugPage({ params }: Params) {
  const isDraftMode = draftMode().isEnabled;
  const [categorySlug, documentNameSlug] = params.slug;

  try {
    if (!categorySlug) {
      notFound();
    }

    if (categorySlug && documentNameSlug) {
      // Fetch & render a single document from a category
      const singleDocument = await fetchSingleDocument({
        preview: isDraftMode,
        slug: documentNameSlug,
      });

      if (!singleDocument) {
        notFound();
      }

      return <Document singleDocument={singleDocument} />;
    }

    // Fetch & render all documents by category
    const documentsByCategory = await fetchDocuments({
      preview: isDraftMode,
      category: categorySlug as "certificates" | "diplomas",
    });

    return (
      <main>
        <section className="documents-page">
          <DocumentCardList
            title={`${categorySlug}`}
            documents={documentsByCategory}
            showItemNumber={true}
            certificates={categorySlug === "certificates" ? true : false}
            diplomas={categorySlug === "diplomas" ? true : false}
          />
        </section>
      </main>
    );
  } catch (error) {
    console.error("An error occurred:", error);
    notFound();
  }
}

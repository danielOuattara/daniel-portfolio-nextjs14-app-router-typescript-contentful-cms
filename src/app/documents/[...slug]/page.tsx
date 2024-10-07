// slug[0] = document category name : "certificates" | "diplomas"
//slug[1] = document name slugged

import { draftMode } from "next/headers";
import {
  fetchDocuments,
  fetchSingleDocument,
} from "@/contentful/portfolioDocuments";
import { Document, DocumentCardList } from "@/components";
import { notFound } from "next/navigation";

type Params = {
  params: {
    slug: string[];
  };
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
    const allProjectsByCategory = await fetchDocuments({
      preview: isDraftMode,
      category: categorySlug as "certificates" | "diplomas",
    });

    return (
      <main>
        <section className="documents-page">
          <DocumentCardList
            title={`${categorySlug}`}
            documents={allProjectsByCategory}
            showItemNumber={true}
            showLinkToCertificates={categorySlug === "diplomas" ? true : false}
            showLinkToDiploma={categorySlug === "certificates" ? true : false}
          />
        </section>
      </main>
    );
  } catch (error) {
    console.error("An error occurred:", error);
    notFound();
  }
}

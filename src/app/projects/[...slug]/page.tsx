import { fetchProjectsByCategory } from "@/contentful/portfolioProjects";
import { draftMode } from "next/headers";
import { Projects } from "@/components";

type Params = {
  params: {
    slug: string[] | undefined;
  };
};

export default async function ParamsPage({ params: { slug } }: Params) {
  console.log(slug);

  if (slug?.length === 1) {
    const allProjectsByCategory = await fetchProjectsByCategory({
      preview: draftMode().isEnabled,
      category: slug[0],
    });

    return (
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={allProjectsByCategory} />
        </section>
      </main>
    );
  }

  if (slug?.length === 2) {
    return (
      <h2>
        viewing page for {slug[0]} and {slug[1]}
      </h2>
    );
  }
}

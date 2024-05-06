import { Title, Project } from "./index";
import Link from "next/link";
import { IProject } from "@/contentful/portfolioProjects";

type TypeProjectsProps = {
  title: string;
  showLinkToProjects?: boolean;
  projects: IProject[];
};

export default function Projects({
  title,
  projects,
  showLinkToProjects,
}: TypeProjectsProps) {
  return (
    <section className="section projects">
      <Title title={title} />

      <div className="section-center projects-center">
        {projects.map((project, index) => (
          <Project key={project.slug} index={index} project={project} />
        ))}
      </div>

      {showLinkToProjects && (
        <Link href="/projects" className="btn center-btn">
          go to projects
        </Link>
      )}
    </section>
  );
}

/**
 * This component renders indirectly many projects.
 * It accepts 3 arguments and 2 sub components
 * */

import { Title, ProjectCard } from "./index";
import Link from "next/link";
import { IProject } from "@/contentful/portfolioProjects";

type TypeProjectsProps = {
  title: string;
  showLinkToProjects?: boolean;
  projects: IProject[];
};

export default function ProjectCardList({
  title,
  projects,
  showLinkToProjects,
}: TypeProjectsProps) {
  return (
    <section className="section projects">
      <Title title={title} />

      <div className="section-center projects-center">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} index={index} project={project} />
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

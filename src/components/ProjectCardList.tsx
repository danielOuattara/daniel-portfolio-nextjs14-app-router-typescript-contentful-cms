/**
 * This component renders indirectly many projects.
 * It accepts 4 arguments and 2 sub components
 * */

import { Title, ProjectCard } from "./index";
import Link from "next/link";
import { IProject } from "@/contentful/portfolioProjects";

type TypeProps = {
  title: string;
  showLinkToProjects?: boolean;
  projects: IProject[];
  showNumbering: boolean;
};

export default function ProjectCardList({
  title,
  projects,
  showLinkToProjects,
  showNumbering,
}: TypeProps) {
  return (
    <section className="section projects">
      <Title title={title} />

      <div className="section-center projects-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            index={index}
            project={project}
            showNumbering={showNumbering}
          />
        ))}
      </div>

      {showLinkToProjects && (
        <Link href="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  );
}

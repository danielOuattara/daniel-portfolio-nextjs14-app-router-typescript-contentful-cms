import { Title, Project } from "./index";
import Link from "next/link";
import Image from "next/image";
import { IProject } from "@/contentful/portfolioProjects";

type TypeProjectsProp = {
  title: string;
  showLinkToProjects?: boolean;
  projects: IProject[];
};

export default function Projects({
  title,
  projects,
  showLinkToProjects,
}: TypeProjectsProp) {
  return (
    <section className="section projects">
      <Title title={title} />

      <div className="section-center projects-center">
        {projects.map((project, index) => (
          <Project key={project.title} index={index} project={project} />
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

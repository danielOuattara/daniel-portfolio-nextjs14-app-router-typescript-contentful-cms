import { Title, ProjectCard } from "./index";
import Link from "next/link";
import { IProject } from "@/contentful/portfolioProjects";

type TypeProps = {
  title: string;
  showLinkToProjects?: boolean;
  projects: IProject[];
  showNumbering: boolean;
  frontend: boolean;
  backend: boolean;
  fullstack: boolean;
  mobile: boolean;
  onHomePage: boolean;
};

export default function ProjectCardList({
  title,
  projects,
  showLinkToProjects,
  showNumbering,
  frontend,
  backend,
  fullstack,
  mobile,
  onHomePage,
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

      <div className="document-btn-container">
        {(backend || frontend || fullstack || mobile) && (
          <Link
            href="/projects"
            className="btn center-btn"
            aria-label="navigate back to projects page"
          >
            go back
          </Link>
        )}

        {!onHomePage && (
          <Link
            href={`#${title}`}
            className="btn center-btn"
            aria-label="navigate to the top of the page"
          >
            to the top
          </Link>
        )}
      </div>
    </section>
  );
}

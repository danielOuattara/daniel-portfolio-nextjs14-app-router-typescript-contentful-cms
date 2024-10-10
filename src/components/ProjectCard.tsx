import Image from "next/image";
import { FaGithubSquare } from "react-icons/fa";
import { HiAtSymbol } from "react-icons/hi";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import Link from "next/link";
import { IProject } from "@/contentful/portfolioProjects";
import { slugger } from "@/utilities/slugger";

type TypeSingleProjectProps = {
  index: number;
  project: IProject;
  showNumbering: boolean;
  onHomepage: boolean;
};

export default function ProjectCard({
  index,
  project,
  showNumbering,
  onHomepage,
}: TypeSingleProjectProps) {
  return (
    <article className="project" id={`${project.slug}`}>
      <Link
        href={`/projects/${slugger(project.category)}/${project.slug}`}
        className="project-img-wrapper"
      >
        <Image
          src={`https:${project.featured_image?.src}`}
          alt={project.title}
          className="project-img"
          width={400}
          height={300}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </Link>

      <div className="project-info">
        <Link
          href={`/projects/${slugger(project.category)}/${project.slug}`}
          className="project-slug"
        >
          <h3>
            #&nbsp;{project.title}
            &nbsp;
            {showNumbering && (
              <BsBoxArrowInUpRight className="goto project-number" />
            )}
          </h3>
        </Link>

        <p className="project-desc">
          {project.description.slice(0, 85) + "..."}
        </p>

        {!onHomepage && (
          <p>
            Category:
            <span className="project-level">{project.category}</span>
            &nbsp; Level:
            <span className="project-level">{project.level}</span>
          </p>
        )}

        <div className="project-stack">
          {project.technologies.slice(0, 4).map((techno) => (
            <span key={techno}>{techno}</span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.url_github}
            target="_blank"
            rel="noreferrer"
            aria-label="Link to github resource"
          >
            <FaGithubSquare className="project-icon" />
          </a>

          <a
            href={project.url_website}
            target="_blank"
            rel="noreferrer"
            aria-label="Link to project website"
          >
            <HiAtSymbol className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  );
}

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
};

export default function ProjectCard({
  index,
  project,
  showNumbering,
}: TypeSingleProjectProps) {
  return (
    <article className="project">
      <Image
        src={`https://${project.featured_image?.src}`}
        width={project.featured_image?.width}
        alt={project.title}
        height={project.featured_image?.height}
        style={{
          maxWidth: "100%",
          height: "auto",
          // objectFit: "cover",
        }}
        className="project-img"
      />

      <div className="project-info">
        <Link
          href={`/projects/${slugger(project.category)}/${project.slug}`}
          // href={`/projects/${slugger(project.category)}/${slugger(
          //   project.title,
          // )}`}
          className="project-slug"
        >
          <h3>
            {showNumbering && (
              <span className="project-number">#{index + 1}</span>
            )}
            &nbsp;
            {project.title}
            &nbsp;
            {showNumbering && (
              <BsBoxArrowInUpRight className="goto project-number" />
            )}
          </h3>
        </Link>

        {/* <p className="project-desc">
          {project.description.slice(0, 85) + "..."}
        </p> */}

        <div className="project-stack">
          {project.technologies.map((techno) => (
            <span key={techno}>{techno}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.url_github} target="_blank" rel="noreferrer">
            <FaGithubSquare className="project-icon" />
          </a>

          <a href={project.url_website} target="_blank" rel="noreferrer">
            <HiAtSymbol className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  );
}

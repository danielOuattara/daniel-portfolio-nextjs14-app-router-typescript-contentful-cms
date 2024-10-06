import { Title } from "@/components";
import { siteMetadata } from "../../../siteMetadata";
import Image from "next/image";
import HeroImage from "./../../assets/images/about-me-image.svg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About page | Portfolio",
  description:
    "About page for Daniel portfolio where skills for fullstack wed development are presented as projects",
};

export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="section-center about-center">
        <Image
          src={HeroImage}
          alt="about me"
          className="hero-img"
          style={{
            maxWidth: "100%",
            height: "auto",
            // objectFit: "cover",
          }}
        />
        <article className="about-text">
          <Title title={"about"} />

          <p>
            I am a passionate full-stack developer with extensive experience in
            web and mobile application development. Over the years, I have honed
            my skills in a wide array of technologies including TypeScript,
            JavaScript, Python, Node.js, React, Next.js, and Nest.js, allowing
            me to build robust and scalable applications. My development
            philosophy emphasizes strategic planning and organization, ensuring
            that each project is approached with methodical precision, from the
            planning and coding phases to rigorous testing and iteration.
          </p>

          <p>
            With a background in engineering and years of hands-on experience in
            fields such as education, agroecology, and energy, I have cultivated
            a versatile skill set that spans backend and frontend development,
            database management, and DevOps practices. I am deeply committed to
            continuous learning, regularly engaging in professional development
            through online courses and certifications to stay up to date with
            the latest industry trends.
          </p>

          <p>
            Collaboration is at the heart of my work ethic, and I thrive in
            agile, Scrum-based environments where teamwork and communication are
            paramount. I enjoy working with teams to bring ideas to life.
            Whether working independently or as part of a team, I am always
            eager to tackle new challenges and contribute to innovative
            solutions.
          </p>

          <p>
            My goal is always to deliver high-quality, user-centric solutions
            that meet business objectives.
          </p>
          <div className="about-stack">
            {siteMetadata.aboutMe.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

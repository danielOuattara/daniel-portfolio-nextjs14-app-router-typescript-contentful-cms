import { Title } from "@/components";
import { siteMetadata } from "../../../siteMetadata";
import Image from "next/image";
import HeroImage from "./../../assets/images/about-me-image.svg";
import type { Metadata } from "next";
import { LiaCertificateSolid } from "react-icons/lia";

export const metadata: Metadata = {
  title: "About page | Portfolio",
  description:
    "About page for Daniel portfolio where skills for fullstack wed development are presented as projects",

  openGraph: {
    title: "Daniel's Portfolio, FullStack Developer",
    description:
      "About page for Daniel portfolio where skills for fullstack wed development are presented as projects",
    url: "https://daniel-portfolio-next-ts-contentful.vercel.app/about",
    siteName: "daniel's portfolio",
    images: [
      {
        url: "https://daniel-portfolio-next-ts-contentful.vercel.app/about-me.png", // Image for Open Graph previews
        width: 1200,
        height: 630,
        alt: "image showing website home page",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image", // 'summary', 'summary_large_image', etc.
    title: "Daniel's Portfolio, FullStack Developer",
    description:
      "About page for Daniel portfolio where skills for fullstack wed development are presented as projects",
    // images: ["https://yourwebsite.com/twitter-image.jpg"], // Twitter-specific image
    images: [
      "https://daniel-portfolio-next-ts-contentful.vercel.app/about-me.png",
    ], // Twitter-specific image
  },
};

export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="section-center about-center">
        <div className="about-img">
          <Image
            src={HeroImage}
            alt="about me"
            className=""
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />

          <div className="about-stack">
            {siteMetadata.aboutMe.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <article className="about-text">
          <Title title={"about me"} />

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

          <LiaCertificateSolid
            style={{ fontSize: "5rem", color: "var(--clr-primary-3)" }}
          />
        </article>
      </div>
    </section>
  );
}

import { Title } from "@/components";
import { siteMetadata } from "../../../siteMetadata";
import Image from "next/image";
import HeroImage from "./../../assets/images/about-me-image.svg";

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
          <p>{siteMetadata.aboutMe.text}</p>
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

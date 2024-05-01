import { Title } from "@/components";
import { siteMetadata } from "../../../siteMetadata";
import Image from "next/image";
import HeroImage from "./../../assets/images/hero2.svg";

export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="section-center about-center">
        <Image src={HeroImage} alt="portfolio" className="hero-img" />
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

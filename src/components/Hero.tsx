import Link from "next/link";
import { social_links } from "@/constants";
import Image from "next/image";
import HeroImg from "./../assets/images/hero2.svg";

export default function Hero() {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div className="hero-card">
            <h1>I am Daniel</h1>
            <div className="underline"></div>
            <h4> Fullstack Developer: Web & Mobile</h4>
            <Link href={"/contact"} className="btn">
              Contact
            </Link>
            <div className="social-links">
              {social_links.map((link) => (
                <a
                  href={link.url}
                  key={link.id}
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </article>
        <Image
          src={HeroImg}
          alt="portfolio"
          className="hero-img z-10"
          // width={300}
          // height={300}
        />
      </section>
    </header>
  );
}

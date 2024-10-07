import socialLinks from "@/constants/social_links";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map((link) => (
            <a
              href={link.url}
              key={link.id}
              className="social-link"
              target="_blank"
              rel="noreferrer"
              aria-label={`Link to ${link.name}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <h4>
          copyright &copy; 2019 - {new Date().getFullYear()}{" "}
          <span>Web & Mobile </span> all right reserved
        </h4>
        <p className="power-by">
          Powered using : Nextjs14 - Typescript - Contentful
        </p>
        <p>
          <a
            href="https://github.com/danielOuattara/daniel-portfolio-nextjs14-app-router-typescript-contentful-cms"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to github"
            className="github-link"
          >
            Github Source
          </a>
        </p>
      </div>
    </footer>
  );
}

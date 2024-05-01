import fullStackLogo from "./../assets/images/full_stack_logo.svg";
import { FaAlignJustify } from "react-icons/fa";
import { page_links } from "../constants";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link href="/">
            <img
              src={fullStackLogo as never as string}
              alt="fullStack Web Developer"
              className="logo"
            />
          </Link>
          <button type="button" className="toggle-btn">
            <FaAlignJustify />
          </button>
        </div>
        <div className="nav-links">
          {page_links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={link.subLinks ? "link-btn has-subLinks" : "link-btn"}
            >
              {link.page}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

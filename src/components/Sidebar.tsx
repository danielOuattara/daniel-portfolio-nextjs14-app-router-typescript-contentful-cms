import { page_links, social_links } from "../constants";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className={"sidebar show-sidebar"}>
      <button className="close-btn" type="button">
        <FaTimes />
      </button>
      <div className="side-container">
        {/* page links & sub links */}
        <ul className="sidebar-links">
          {page_links.map((link) => {
            return (
              <li key={link.id}>
                <Link href={link.url}>{link.page}</Link>
                {link.subLinks && (
                  <ul className="sidebar-subLinks">
                    {link.subLinks.map((subLink) => {
                      return (
                        <li key={subLink.id}>
                          <Link href={subLink.url}>{subLink.page}</Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {/* social links */}
        <ul className={"social-links sidebar-icons"}>
          {social_links.map((link) => (
            <li key={link.id}>
              <a href={link.url} className="social-link">
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

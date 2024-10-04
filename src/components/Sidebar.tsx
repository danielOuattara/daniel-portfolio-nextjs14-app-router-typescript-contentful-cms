"use client";

import { page_links, social_links } from "../constants";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Sidebar({ isSidebarOpen, toggleSidebar }: TypeSideBar) {
  const pathname = usePathname();
  return (
    <>
      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
      {/* Sidebar */}
      <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
        <button className="close-btn" type="button" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <div className="side-container">
          {/* page links & sub links */}
          <ul className={isSidebarOpen ? "sidebar-links" : ""}>
            {page_links.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    onClick={toggleSidebar}
                    className={` ${
                      pathname === link.url ||
                      pathname.split("/").includes(link.url)
                        ? "sidebar-active-link"
                        : ""
                    } `}
                  >
                    <span className="sidebar-icon">{link.icon}</span>
                    <span className="">{link.page}</span>
                  </Link>
                  {link.subLinks && (
                    <ul className="sidebar-subLinks">
                      {link.subLinks.map((subLink) => {
                        return (
                          <li key={subLink.id}>
                            <Link
                              href={subLink.url}
                              onClick={toggleSidebar}
                              className={` ${
                                pathname === subLink.url
                                  ? "sidebar-active-subLink"
                                  : ""
                              } `}
                            >
                              <span className="sidebar-icon">
                                {subLink.icon}
                              </span>
                              {subLink.page}
                            </Link>
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
          <ul className={isSidebarOpen ? "social-links sidebar-icons" : ""}>
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
    </>
  );
}

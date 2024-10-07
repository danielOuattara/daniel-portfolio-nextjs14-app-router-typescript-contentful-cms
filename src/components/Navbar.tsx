"use client";

import { page_links } from "../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VscCode } from "react-icons/vsc";
import { BsStack } from "react-icons/bs";

export default function Navbar(props: TypeNavbar) {
  //-----
  const pathname = usePathname();
  //-----
  const displaySubMenu = (event: React.MouseEvent<HTMLElement>) => {
    const targetElement = event.target as HTMLElement; // Type assertion
    const menuDOMRect: DOMRect = targetElement.getBoundingClientRect();
    props.setSubMenuLocation({
      subMenuCenterPosition: (menuDOMRect.left + menuDOMRect.right) / 2,
      subMenuTopPosition: menuDOMRect.bottom,
    });

    const menuPageName: string = event.currentTarget.textContent || "";
    const menuPageToShow = page_links.find(
      (item) => item.page === menuPageName,
    );

    if (menuPageToShow && menuPageToShow.subLinks) {
      props.setSubMenuPageToShow(menuPageToShow);
    }

    props.setIsSubMenuOpen(true);
  };

  //----
  const hideSubMenu = (event: React.MouseEvent<HTMLElement>) => {
    const targetElement = event.target as HTMLElement; // Type assertion
    if (!targetElement.classList.contains("has-subLinks")) {
      props.setIsSubMenuOpen(false);
    }
  };

  return (
    <nav className="navbar" onMouseOver={(event) => hideSubMenu(event)}>
      <div className="nav-center">
        <div className="nav-header">
          <Link href="/">
            <VscCode className="web-logo" />
          </Link>
          <button
            type="button"
            className="toggle-btn"
            onClick={props.toggleSidebar}
            aria-label="logo button navigate to home "
          >
            <BsStack />
          </button>
        </div>
        <div className="nav-links">
          {page_links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={` 
                ${link.subLinks ? "link-btn has-subLinks" : "link-btn"} 
                ${pathname === link.url ? "active-link" : ""} `}
              onMouseOver={(event) => link.subLinks && displaySubMenu(event)}
              onClick={() => props.setIsSubMenuOpen(false)}
              aria-label={`navigation button to ${link.page}`}
            >
              {link.page}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

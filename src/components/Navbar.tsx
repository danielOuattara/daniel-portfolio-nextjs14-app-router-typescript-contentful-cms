// import fullStackLogo from "./../assets/images/full_stack_logo.svg";
import { FaAlignJustify } from "react-icons/fa";
import { page_links } from "../constants";
import Link from "next/link";
// import Image from "next/image";
import { VscCode } from "react-icons/vsc";

export default function Navbar(props: TypeNavbar) {
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
          >
            <FaAlignJustify />
          </button>
        </div>
        <div className="nav-links">
          {page_links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={link.subLinks ? "link-btn has-subLinks" : "link-btn"}
              onMouseOver={(event) => link.subLinks && displaySubMenu(event)}
              onClick={() => props.setIsSubMenuOpen(false)}
            >
              {link.page}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

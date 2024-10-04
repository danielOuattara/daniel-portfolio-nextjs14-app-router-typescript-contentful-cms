"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Submenu({
  isSubMenuOpen,
  subMenuLocation,
  subMenuPageToShow,
  setIsSubMenuOpen,
}: TypeSubmenu) {
  const [columns, setColumns] = useState("");
  const subMenuContainerRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    subMenuPageToShow.subLinks.length <= 3
      ? setColumns("col-2")
      : setColumns("col-3");

    if (subMenuContainerRef.current) {
      subMenuContainerRef.current.style.left = `${subMenuLocation.subMenuCenterPosition}px`;
      subMenuContainerRef.current.style.top = `${subMenuLocation.subMenuTopPosition}px`;
    }
  }, [subMenuLocation, subMenuPageToShow.subLinks]);

  const hideSubMenu = () => setIsSubMenuOpen(false);

  return (
    <aside
      className={isSubMenuOpen ? "submenu show" : "submenu"}
      ref={subMenuContainerRef}
      onMouseLeave={hideSubMenu}
      style={{ border: "1px solid lightgrey" }}
    >
      <div className={` nav-subLinks submenu-center ${columns} `}>
        {subMenuPageToShow.subLinks.map((subLink, index) => {
          return (
            <Link
              key={index}
              href={subLink.url}
              className={`${
                pathname === subLink.url
                  ? "active-subLink link-btn"
                  : "link-btn"
              } `}
              onClick={() => setIsSubMenuOpen(false)}
            >
              {subLink.page}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

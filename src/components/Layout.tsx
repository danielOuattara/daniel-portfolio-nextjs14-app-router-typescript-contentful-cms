"use client";
import { useState } from "react";
import { Navbar, Sidebar, Footer, Submenu } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [subMenuLocation, setSubMenuLocation] = useState({
    subMenuCenterPosition: 0,
    subMenuTopPosition: 0,
  });
  const [subMenuPageToShow, setSubMenuPageToShow] =
    useState<TypeSubMenuPageToShow>({
      id: 0,
      url: "",
      page: "",
      subLinks: [],
    });

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <>
      <Navbar
        toggleSidebar={toggleSidebar}
        setIsSubMenuOpen={setIsSubMenuOpen}
        setSubMenuLocation={setSubMenuLocation}
        setSubMenuPageToShow={setSubMenuPageToShow}
      />
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Submenu
        isSubMenuOpen={isSubMenuOpen}
        subMenuLocation={subMenuLocation}
        subMenuPageToShow={subMenuPageToShow}
        setIsSubMenuOpen={setIsSubMenuOpen}
      />
      {children}
      <Footer />
    </>
  );
}

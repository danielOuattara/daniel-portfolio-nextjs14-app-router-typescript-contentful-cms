type TypeAboutMeQuery = {
  site: {
    siteMetadata: {
      aboutMe: {
        text: string;
        stack: Array<string>;
        image: string;
      };
    };
  };
};

type TypeSubMenuLink = {
  id: string;
  url: string;
  page: string;
};

type TypeSubMenuPageToShow = {
  id: number;
  url: string;
  page: string;
  subLinks: TypeSubMenuLink[];
};

type TypeNavbar = {
  toggleSidebar: () => void;
  setIsSubMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSubMenuLocation: React.Dispatch<
    React.SetStateAction<{
      subMenuCenterPosition: number;
      subMenuTopPosition: number;
    }>
  >;
  setSubMenuPageToShow: React.Dispatch<
    React.SetStateAction<{
      id: number;
      url: string;
      page: string;
      subLinks: TypeSubMenuLink[];
    }>
  >;
};

type TypeSideBar = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

type TypeSubmenu = {
  isSubMenuOpen: boolean;
  subMenuLocation: {
    subMenuCenterPosition: number;
    subMenuTopPosition: number;
  };
  subMenuPageToShow: {
    id: number;
    url: string;
    page: string;
    subLinks: TypeSubMenuLink[];
  };
  setIsSubMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

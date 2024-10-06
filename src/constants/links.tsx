import {
  FaHome,
  FaInfoCircle,
  FaServer,
  FaMobileAlt,
  FaEnvelopeOpenText,
  FaTools,
} from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FaSquareWebAwesome } from "react-icons/fa6";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoDocumentText } from "react-icons/io5";
import { GiDiploma } from "react-icons/gi";
import { PiCertificate } from "react-icons/pi";
import { TbFileCv } from "react-icons/tb";
import { FiPackage } from "react-icons/fi";

const page_links = [
  {
    id: 1,
    url: "/",
    page: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/about",
    page: "about",
    icon: <FaInfoCircle />,
  },
  {
    id: 3,
    url: "/services",
    page: "services",
    icon: <FaTools />,
  },
  {
    id: 4,
    url: "/projects",
    page: "projects",
    icon: <GrProjects />,
    subLinks: [
      {
        id: "4-1",
        url: "/projects/backend",
        page: "backend",
        icon: <FaServer />,
      },
      {
        id: "4-2",
        url: "/projects/frontend",
        page: "frontend",
        icon: <FaSquareWebAwesome />,
      },
      {
        id: "4-3",
        url: "/projects/fullstack",
        page: "fullstack",
        icon: <HiOutlineDesktopComputer />,
      },
      {
        id: "4-4",
        url: "/projects/mobile",
        page: "mobile",
        icon: <FaMobileAlt />,
      },
    ],
  },
  {
    id: 5,
    url: "/documents",
    page: "documents",
    icon: <IoDocumentText />,
    subLinks: [
      {
        id: "5-1",
        url: "/documents/certificates",
        page: "certificates",
        icon: <PiCertificate />,
      },
      {
        id: "5-2",
        url: "/documents/diplomas",
        page: "diplomas",
        icon: <GiDiploma />,
      },
      {
        id: "5-3",
        url: "/documents/cv",
        page: "curriculum",
        icon: <TbFileCv />,
      },
      {
        id: "5-4",
        url: "/documents/packages",
        page: "packages",
        icon: <FiPackage />,
      },
    ],
  },
  {
    id: 6,
    page: "contact",
    url: "/contact",
    icon: <FaEnvelopeOpenText />,
  },
];

export { page_links };

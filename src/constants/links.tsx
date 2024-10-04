import {
  FaHome,
  FaInfoCircle,
  FaServer,
  FaMobileAlt,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FaSquareWebAwesome } from "react-icons/fa6";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoDocumentText } from "react-icons/io5";
import { GiDiploma } from "react-icons/gi";
import { PiCertificate } from "react-icons/pi";
import { TbFileCv } from "react-icons/tb";
import { FiPackage } from "react-icons/fi";
import { MdMarkEmailRead } from "react-icons/md";

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
    url: "/projects",
    page: "projects",
    icon: <GrProjects />,
    subLinks: [
      {
        id: "3-1",
        url: "/projects/backend",
        page: "backend",
        icon: <FaServer />,
      },
      {
        id: "3-2",
        url: "/projects/frontend",
        page: "frontend",
        icon: <FaSquareWebAwesome />,
      },
      {
        id: "3-3",
        url: "/projects/fullstack",
        page: "fullstack",
        icon: <HiOutlineDesktopComputer />,
      },
      {
        id: "3-4",
        url: "/projects/mobile",
        page: "mobile",
        icon: <FaMobileAlt />,
      },
    ],
  },
  {
    id: 4,
    url: "/documents",
    page: "documents",
    icon: <IoDocumentText />,
    subLinks: [
      {
        id: "4-1",
        url: "/documents/certificates",
        page: "certificates",
        icon: <PiCertificate />,
      },
      {
        id: "4-2",
        url: "/documents/diplomas",
        page: "diplomas",
        icon: <GiDiploma />,
      },
      {
        id: "4-3",
        url: "/documents/cv",
        page: "curriculum",
        icon: <TbFileCv />,
      },
      {
        id: "4-4",
        url: "/documents/packages",
        page: "packages",
        icon: <FiPackage />,
      },
    ],
  },
  {
    id: 5,
    page: "contact",
    url: "/contact",
    icon: <FaEnvelopeOpenText />,
  },
];

export { page_links };

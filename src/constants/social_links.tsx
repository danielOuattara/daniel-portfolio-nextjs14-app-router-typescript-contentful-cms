import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
  FaMobileAlt,
} from "react-icons/fa";

import { SiMaildotru } from "react-icons/si";

const social_links = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "http://www.linkedin.com/in/daniel-b-ouattara-677146ab",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "http://www.linkedin.com/in/daniel-b-ouattara-677146ab",
  },
  {
    id: 3,
    icon: <FaDribbbleSquare className="social-icon"></FaDribbbleSquare>,
    url: "http://www.linkedin.com/in/daniel-b-ouattara-677146ab",
  },
  {
    id: 4,
    icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
    url: "http://www.linkedin.com/in/daniel-b-ouattara-677146ab",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "http://www.linkedin.com/in/daniel-b-ouattara-677146ab",
  },
  {
    id: 6,
    icon: <FaMobileAlt className="social-icon"></FaMobileAlt>,
    url: "tel:+33762429711",
  },
  {
    id: 7,
    icon: <SiMaildotru className="social-icon"></SiMaildotru>,
    url: "mailto:daniel.ouattara@gmx.com",
  },
];

export default social_links;

import React from "react";
import { FaCode, FaAndroid, FaServer } from "react-icons/fa";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { MdHealthAndSafety } from "react-icons/md";
import { GrSecure } from "react-icons/gr";

const services = [
  {
    id: 1,
    icon: (
      <>
        <FaCode className="service-icon" />
        &nbsp;
        <FaAndroid className="service-icon" />
      </>
    ),
    title: "Frontend Web & Mobile Development",
    text: `I craft responsive and dynamic user interfaces for both web and mobile platforms, ensuring seamless performance, accessibility, and user experience across all devices.`,
  },
  {
    id: 2,
    icon: (
      <>
        <GrSecure className="service-icon" />
        &nbsp;
        <FaServer className="service-icon" />
      </>
    ),
    title: "Backend Robust & Secure Architecture",
    text: `Specializing in building scalable, secure, and efficient backend systems, I design architecture that supports high-traffic applications while ensuring data integrity and performance optimization.`,
  },
  {
    id: 3,
    icon: (
      <>
        <MdHealthAndSafety className="service-icon" />
        &nbsp;
        <BsDatabaseFillCheck className="service-icon" />
      </>
    ),
    title: "Database Management",
    text: `Proficient in managing complex databases, I ensure high availability, data security, and optimized queries for performance, handling large datasets with precision and care.`,
  },
];

export default services;

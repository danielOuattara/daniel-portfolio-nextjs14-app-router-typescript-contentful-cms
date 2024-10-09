import { Title } from "@/components";
import Link from "next/link";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoIosNavigate } from "react-icons/io";

export default function CurriculumPage() {
  return (
    <section className="section section-center documents">
      <Title title="cv" />

      <div className="cv-container" style={{}}>
        <Link
          href="/Curriculum_Vitae_Daniel_Ouattara.pdf"
          target="_blank"
          rel="noreferrer"
          aria-label="download the curriculum"
          download
        >
          <span>download cv</span>
          <span>
            <FaCloudDownloadAlt />
          </span>
        </Link>

        <Link
          href="https://cv-daniel-ouattara-fullstack.vercel.app/"
          target="_blank"
          rel="noreferrer"
          aria-label="download the curriculum"
          download
        >
          <span>navigate to cv</span>
          <span>
            <IoIosNavigate />
          </span>
        </Link>
      </div>
      <div className="section-center documents-center cv-iframe-container">
        <br />
        <iframe
          src="https://cv-daniel-ouattara-fullstack.vercel.app/"
          className="responsive-iframe"
        ></iframe>
      </div>
    </section>
  );
}

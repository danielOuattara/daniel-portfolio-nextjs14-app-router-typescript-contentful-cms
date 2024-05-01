import { Title } from "./index";
import { services } from "@/constants";

export default function Services() {
  return (
    <section className="section bg-grey">
      <Title title="Services" />
      <div className="section-center services-center">
        {services.map((service) => (
          <article key={service.id} className="service">
            {service.icon}
            <h4>{service.title}</h4>
            <div className="underline"></div>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

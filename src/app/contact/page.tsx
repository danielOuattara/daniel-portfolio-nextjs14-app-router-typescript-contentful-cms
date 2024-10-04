import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact page",
  description:
    "About page for Daniel portfolio where skills for fullstack wed development are presented as projects",
};

export default function ContactPage() {
  return (
    <section className="contact-page">
      <article className="contact-form">
        <h3>stay in touch ?</h3>
        <form
          method="POST"
          action="https://formspree.io/f/mdorpabo"
          className="form contact-form"
        >
          <div className="form-group">
            <label htmlFor="name">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                className="form-control"
              />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="form-control"
              />
            </label>
            <label htmlFor="message">
              <textarea
                name="message"
                id="message"
                rows={7}
                className="form-control"
                placeholder="your message"
              ></textarea>
            </label>
          </div>
          <button type="submit" className="submit-btn btn">
            submit
          </button>
        </form>
      </article>
    </section>
  );
}

// export const Head = () => <Seo title={"Contacts"} image="/contact.png" />;

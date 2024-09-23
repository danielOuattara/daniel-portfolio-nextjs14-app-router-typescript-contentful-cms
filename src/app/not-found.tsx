import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="error-page">
      <div className="error-container">
        <h1>404</h1>
        <h3>page not found 😔</h3>
        <p style={paragraphStyles}>
          Sorry, we could not find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
        </p>
        <Link href="/" className="btn">
          back safely to home
        </Link>
      </div>
    </main>
  );
}

const paragraphStyles: React.CSSProperties = {
  marginBottom: 48,
};
const codeStyles: React.CSSProperties = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

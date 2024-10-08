export default function Title({ title }: { title: string }) {
  return (
    <div className="section-title" id={`${title}`}>
      <h1>{title || "Section Title"}</h1>
      <div className="underline"></div>
    </div>
  );
}

export default function Title({ title }: { title: string }) {
  return (
    <div className="section-title" id={`${title}`}>
      <h2>{title || "Section Title"}</h2>
      <div className="underline"></div>
    </div>
  );
}

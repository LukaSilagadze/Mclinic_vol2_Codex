export default function ServiceCard({ icon: Icon, title, text }) {
  return (
    <article className="service-card reveal-card">
      <Icon className="service-icon" />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

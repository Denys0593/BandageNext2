import "./message.scss";

export default function Message({ title }: { title: string }) {
  return <h3 className="title">{title}</h3>;
}

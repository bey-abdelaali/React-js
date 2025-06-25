import "./PostComponent.css";

export default function PostComponent({ title, body }) {
  return (
    <div className={"postClass"}>
      <h2>this is a post {title}</h2>
      <hr />
      <p>this is a post {body}</p>
    </div>
  );
}

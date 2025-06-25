import "./PostComponent.css";

export default function PostComponent({
  title = "no title",
  body = "no body",
}) {
  return (
    <div className={"postClass"}>
      <h2>{title}</h2>
      <hr style={{ margin: "10px" }} />
      <p>{body}</p>
    </div>
  );
}

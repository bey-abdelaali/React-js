import { Children } from "react";
import "./PostComponent.css";

export default function PostComponent({ title, body, children }) {
  return (
    <div className={"postClass"}>
      {children}
      <h2>{title}</h2>
      <hr style={{ margin: "10px" }} />
      <p>{body}</p>
    </div>
  );
}

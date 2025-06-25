import { Children } from "react";
import "./PostComponent.css";

export default function PostComponent({ title, body, children }) {
  return (
    <div className={"postClass"}>
      <h2>this is a post {title}</h2>
      <hr />
      <p>this is a post {body}</p>
      {children}
    </div>
  );
}

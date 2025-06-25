import "./DivComponent.css";
import TagButton from "./TagButton";
export default function DivComponent() {
  return (
    <div className={"divClass"}>
      <TagButton tag="الجديدة" />
      <TagButton tag="الاكثر قرااة">
        <div>
          <span>💻💻💻</span>
        </div>
      </TagButton>
      <TagButton
        tag="مقالات مميزة"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "40px",
        }}
      >
        {" "}
        <div>
          <span>⭐️⭐️⭐️</span>
        </div>
        <img src="/logo192.png" width={"100px"} height={"150px"}></img>
      </TagButton>
    </div>
  );
}

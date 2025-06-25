import "./DivComponent.css";
import TagButton from "./TagButton";
export default function DivComponent() {
  const BoutonTags = [
    { id: 1, tag: "الجديدة", c: "" },
    {
      id: 2,
      tag: "الاكثر قرااة",
      c: (
        <div>
          <span>💻💻💻</span>
        </div>
      ),
    },
    {
      id: 3,
      tag: "مقالات مميزة",
      c: (
        <div className="Btn">
          <span>⭐️⭐️⭐️</span>

          <img src="/logo192.png" width={"100px"} height={"150px"}></img>
        </div>
      ),
    },
  ];
  const BoutonTagLists = BoutonTags.map((BoutonTag) => {
    return (
      <TagButton key={BoutonTag.id} tag={BoutonTag.tag}>
        {BoutonTag.c}
      </TagButton>
    );
  });
  return <div className={"divClass"}>{BoutonTagLists}</div>;
}

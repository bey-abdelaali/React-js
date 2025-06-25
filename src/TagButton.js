import "./TagButton.css";

export default function TagButton({ tag, children }) {
  return (
    <button>
      {tag}
      {children}
    </button>
  );
}

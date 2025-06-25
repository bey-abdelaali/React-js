import "./TagButton.css";

export default function TagButton({ tag, children }) {
  return (
    <div>
      {tag == null || tag == "" ? (
        <div></div>
      ) : (
        <button>
          {tag}
          {children}
        </button>
      )}
    </div>
  );
}

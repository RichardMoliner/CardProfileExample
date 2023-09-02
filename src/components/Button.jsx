import "./Button.style.css"

export default function Button(link, text) {
  return (
    <button>
      <a href={link} target="_blank">
        {text}
      </a>
    </button>
  );
}

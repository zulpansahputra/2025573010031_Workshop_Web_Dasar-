import "./style.css";

// DARK MODE TOGGLE (opsional)
document.addEventListener("keydown", (e) => {
  if (e.key === "d") {
    document.documentElement.classList.toggle("dark");
  }
});

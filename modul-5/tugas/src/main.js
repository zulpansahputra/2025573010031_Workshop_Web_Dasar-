import "./style.css";

// ambil preferensi
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

const toggle = document.getElementById("theme-toggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

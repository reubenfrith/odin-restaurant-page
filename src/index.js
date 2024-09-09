import "./styles.css";
import bakery_goods_1 from "./assets/bakery_goods_1.jpg";


document.getElementById("home-btn").addEventListener("click", () => {
  import("./home").then((module) => module.default());
});

document.getElementById("menu-btn").addEventListener("click", () => {
  import("./menu").then((module) => module.default());
});

document.getElementById("about-btn").addEventListener("click", () => {
  import("./about").then((module) => module.default());
});

document.onload = import("./home").then((module) => module.default());

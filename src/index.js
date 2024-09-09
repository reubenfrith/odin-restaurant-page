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

const content = document.getElementById("content")

// add content introducing a bakery
// const bakery = document.createElement("div")
// bakery.id = "bakery"
// bakery.innerHTML = `
// <h1>Welcome to the Bakery!</h1>
// <p>Where you can find all your favorite baked goods!</p>
// ` 
// content.appendChild(bakery)

// // insert image static/baker_goods_1.jpg
// const img1 = document.createElement("img")
// img1.src = bakery_goods_1
// content.appendChild(img1)

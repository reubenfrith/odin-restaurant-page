import bakery_goods_1 from './assets/bakery_goods_1.jpg'

export default function home() {
  // add content introducing a bakery
  // clear content then add new content

  const content = document.getElementById("content")
  // clear content
  content.innerHTML = ""
  const bakery = document.createElement("div")
  bakery.id = "bakery"
  bakery.innerHTML = `
  <h1>Welcome to the Bakery!</h1>
  <p>This is the menu!</p>
  ` 
  content.appendChild(bakery)

  // insert image static/baker_goods_1.jpg
  const img1 = document.createElement("img")
  img1.src = bakery_goods_1
  content.appendChild(img1)
}
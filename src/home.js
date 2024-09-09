import bakery_goods_2 from './assets/bakery_goods_2.jpg'

export default function home() {
  // add content introducing a bakery
  const content = document.getElementById("content")
  content.innerHTML = ""
  const bakery = document.createElement("div")
  bakery.id = "bakery"
  bakery.innerHTML = `
  <h1>Welcome to the Bakery!</h1>
  <p>This is the home page!</p>
  `
  content.appendChild(bakery)
  
  // insert image 
  const img1 = document.createElement("img")
  img1.src = bakery_goods_2
  content.appendChild(img1)

}
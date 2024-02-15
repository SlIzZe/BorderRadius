const name = document.querySelector(".name")
const box = document.querySelector(".box")
const radius = document.querySelector(".radius")
const leftRadius = document.querySelector(".leftRadius")
const rightRadius = document.querySelector(".rightRadius")
const leftBottomRadius = document.querySelector(".leftBottomRadius")
const rightBottomRadius = document.querySelector(".rightBottomRadius")


box.style.height = "300px"
box.style.width = "300px"
box.style.background = "red"

//const radius = document.querySelector(".radius")

radius.addEventListener("input", () => {
  box.style.borderRadius = `${radius.value}%`
})

//const leftRadius = document.querySelector(".leftRadius")
//const rightRadius = document.querySelector(".rightRadius")

// leftRadius.addEventListener("input", () => {
//   box.style.borderTopLeftRadius = `${leftRadius.value}%`
// })
// rightRadius.addEventListener("input", () => {
//   box.style.borderTopRightRadius = `${rightRadius.value}%`
// })

function BorderRadius() {
  box.style.borderRadius = `${leftRadius.value}% ${rightRadius.value}% ${leftBottomRadius.value}% ${rightBottomRadius.value}%`;
}

leftRadius.addEventListener("input", BorderRadius)
rightRadius.addEventListener("input", BorderRadius)
leftBottomRadius.addEventListener("input", BorderRadius)
rightBottomRadius.addEventListener("input", BorderRadius)

// radius.oninput = radiusGenerator
// function radiusGenerator () {
//   console.log("sasha");
// }

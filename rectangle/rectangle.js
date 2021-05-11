document.querySelector("div")
.addEventListener("click", () => document.querySelector("div") .classList.add("disappear")
)

document.querySelector("div")
.addEventListener("animationend", function () {
    document.querySelector("div").classList.remove("disappear")
    
})
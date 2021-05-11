var numberOfBubbles = 30
for (let i = 0; i < numberOfBubbles; i++) {
    newBubble()
    
}
function newBubble() {
    let bubble = document.createElement("div")
    bubble.classList.add("bubble")
    let x = randomNumber(100)
    let delay = randomNumber(3000)
    let red = randomNumber (255)
    let green = randomNumber(255)
    let blue = randomNumber(255)
    //bubble.style.left = x+"vw"
    bubble.style.left = `${x}vw` 
    bubble.style.animationDelay = `${delay}ms`
    //bubble.style.borderColor = "rgb(" + red + "," + green + "," + blue + ")"
    bubble.style.borderColor = `rgb(${red}, ${green},${blue})`
    document.querySelector("body").appendChild(bubble)
    let size = randomNumber(3) + 1 
    bubble.style.height = bubble.style.width = `${size}em`
    

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}}
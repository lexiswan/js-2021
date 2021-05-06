var numberOfBubbles = 10
for (let i = 0; i < numberOfBubbles; i++) {
    newBubble()
    
}
function newBubble() {
    let bubble = document.createElement("div")
    bubble.classList.add("bubble")
}
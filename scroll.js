const pixelsTag = document.querySelector("div.pixels")

// When user scrolls, update the pixels tag
document.addEventListener("scroll", function() {

    const pixels = window.pageYOffset

    pixelsTag.innerHTML = pixels + 
})
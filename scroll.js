const pixelsTag = document.querySelector("div.pixels")
const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")


// When user scrolls, update the pixels tag
document.addEventListener("scroll", function() {

    const pixels = window.pageYOffset

    pixelsTag.innerHTML = pixels
})

// When user scrolls the page, progress bar will keep track of the distance
// Review video 8 for explanation
document.addEventListener("scroll", function () {
    const pixels = window.pageYOffset
    const pageHeight = bodyTag.getBoundingClientRect().height
    const totalScrollableDistance = pageHeight - window.innerHeight

    const percentage = pixels / totalScrollableDistance
    progressTag.style.width = `${100 * percentage}%`
})
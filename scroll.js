const pixelsTag = document.querySelector("div.pixels")
const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")
const sections = document.querySelectorAll("section")
const clientTag = document.querySelector("div.client")
const pageTag = document.querySelector("div.page")



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

// When user scrolls page, see how far down the page user scrolls
// Then for each section, checked whether passed and if haved...
// Update the text in the header
document.addEventListener("scroll", function () {
    const pixels = window.pageYOffset


    sections.forEach(section => {
        if (section.offsetTop - 100 <= pixels) {
            clientTag.innerHTML = section.getAttribute("data-client")
            pageTag.innerHTML =  section.getAttribute("data-page")
        }
    })
})
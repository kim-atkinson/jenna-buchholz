const pixelsTag = document.querySelector("div.pixels")
const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")
const sections = document.querySelectorAll("section")
const clientTag = document.querySelector("div.client")
const pageTag = document.querySelector("div.page")
const headerTag = document.querySelector("header")


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

            if (section.hasAttribute("data-is-dark")) {
                headerTag.classList.add("white")
                progressTag.classList.add("white")
            } else {
                headerTag.classList.remove("white")
                progressTag.classList.remove("white")
            }

        }

        
    })
})


// When user scrolls page, make parralax
// Move certain tags based on how far they are from the achor point
// Anchor point is the iddle of the section
// Ratio of the middle distance scrolled to the middle point of the anchor
document.addEventListener("scroll", function () {
    const topViewport = window.pageYOffset
    const midViewport = topViewport + (window.innerHeight / 2)

    sections.forEach(section => {
        const topSection = section.offsetTop
        const midSection = topSection + (section.offsetHeight / 2)

        const distanceToSection = midViewport - midSection
        
        const tag = section.querySelector("div.square")
        const speed = parseFloat(tag.getAttribute("data-parallax"))

        tag.style.transform = `translate(0, ${distanceToSection * speed}px)`
    })
})
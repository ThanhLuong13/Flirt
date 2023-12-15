const wrapper = document.querySelector(".wrapper")
const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Aaaaaa, I like you too!"
    gif.src = "https://media.tenor.com/th0OkZ3n3c0AAAAM/love-languages.gif"
    yesBtn.remove()
    noBtn.remove()
})

noBtn.addEventListener("mouseover", () => {
    const noBtnReact = noBtn.getBoundingClientRect()
    const maxX = window.innerWidth - noBtnReact.width
    const maxY = window.innerHeight - noBtnReact.height

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)

    noBtn.style.left = randomX + "px"
    noBtn.style.top = randomY + "px"
})
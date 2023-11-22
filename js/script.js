const accordion = document.getElementsByClassName("accordion");

console.log(accordion)

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", () => {
        accordion[i].classList.toggle("open")
    })
}
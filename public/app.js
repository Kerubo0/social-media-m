const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
dropDownMenu.classList.toggle('open')
const isOpen = dropDownMenu.classList.contains('open')

toggleBtnIcon.classList  = isOpen 
? 'fa-solid fa-xmark'
: 'fa-solid fa-bars'
}

const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

const btn = document.getElementById("btn");

btn.addEventListener("click", ()=> {
 window.location.href = "http://localhost:3000/join"
})

const btnTwo = document.getElementById("btn-2");

btnTwo.addEventListener("click", ()=> {
 window.location.href = "http://localhost:3000/join"
})

const btnThree = document.getElementById("btn-3");

btnThree.addEventListener("click", ()=> {
 window.location.href = "http://localhost:3000/join"
})

const btnFour = document.getElementById("btn-4");

btnFour.addEventListener("click", ()=> {
 window.location.href = "http://localhost:3000/join"
})

const btnFive = document.getElementById("btn-5");

btnFive.addEventListener("click", ()=> {
 window.location.href = "http://localhost:3000/join"
})
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

const actionBtn = document.getElementById("action_btn");

actionBtn.addEventListener("click", ()=> {
 window.location.href = "http://localhost:3000/join"
})

const actionBtnTwo = document.getElementById("action_btn2");

actionBtnTwo.addEventListener("click", ()=> {
 window.location.href = "http://localhost:3000/join"
})

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

const angleOne = document.getElementById("angle-one")
var dropdownMenu = document.getElementById('dropdownMenu');

  // Add click event listener to the image
  angleOne.onclick = function() {
    // Toggle the display property
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
};

// Get all elements with the class name 'angle'
var angleImages = document.querySelectorAll('.angle');

// Add click event listeners to each image
angleImages.forEach(function(image) {
    image.addEventListener('click', function() {
        // Get the corresponding dropdown menu for this image
        var dropdownMenu = this.parentElement.querySelector('.dropdown');

        // Toggle the display property of the dropdown menu
        if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
            dropdownMenu.style.display = "block";
            // Add rotation class
            image.classList.add('rotate180');
        } else {
            dropdownMenu.style.display = "none";
            // Remove rotation class
            image.classList.remove('rotate180');
        }
    });
});



var angleImages = document.querySelectorAll('.angle');
const angleElem = document.getElementById("expand_less")
 // Get the dropdown menu
 var dropdownMenu = document.getElementById('dropdownMenu');

  // Add click event listener to the expand less image
  angleElem.addEventListener('click', function() {
    // Hide the dropdown menu
    dropdownMenu.style.display = "none";

    // Show the expand more image
    //angleImages.style.display = "block";
});

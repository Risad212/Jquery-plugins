let hamburger = document.querySelector('.hamburger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function(){
    mobileNav.classList.add('open');
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');
});



// typed.js code
var typed = new Typed('.typed-text', {
    strings: ['Designer', 'Developer', 'Freelencer'],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
  });



// [Back to top Button]
//=================================
var mybutton = document.getElementById("backTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener('click', function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})
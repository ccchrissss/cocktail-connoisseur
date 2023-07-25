// ***** Them *****

$(document).ready(function(){


 $("#owl-example").owlCarousel({
    // Most important owl features
    items : 4,
    pagination : true,
    paginationSpeed : 1000,
    navigation : true,
    navigationText : ["","<i class='fa fa-angle-right'></i>"],
    slideSpeed : 800,
 });

	// $("#navigation").sticky({
	// 	topSpacing : 75,
	// });

	// $('#nav').onePageNav({
	// 	currentClass: 'current',
	// 	changeHash: false,
	// 	scrollSpeed: 15000,
	// 	scrollThreshold: 0.5,
	// 	filter: '',
	// 	easing: 'easeInOutExpo'
	// });

    //  $('#top-nav').onePageNav({
    //      currentClass: 'active',
    //      changeHash: true,
    //      scrollSpeed: 1200
    // });
//Initiat WOW JS
    new WOW().init();

});




// ***** Me *****

// function buttonScroller() {
//     let element = document.querySelector('#cocktail-picker')

//     element.scrollIntoView({behavior: "smooth"});
// }

// let cocktailPickerNav = document.querySelector('#cocktail-picker-nav')

// cocktailPickerNav.addEventListener('click', buttonScroller)

// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('scroll', myFunction)

// Get the navbar
    let navbar = document.querySelector('#hello');

    // Get the offset position of the navbar
    console.log('navbar.offsetTop: ... ', navbar.offsetTop)
    let sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
    // if (window.pageYOffset >= sticky) {
    if (window.pageYOffset >= 235) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
    }

})







// document.addEventListener('DOMContentLoaded', function() {
//     // When the event DOMContentLoaded occurs, it is safe to access the DOM
  
//     // When the user scrolls the page, execute myFunction 
//     window.addEventListener('scroll', myFunctionForSticky);
  
//     // Get the navbar
//     var navbar = document.getElementById("myTopnav");
  
//     // Get the offset position of the navbar
//     var sticky = navbar.offsetTop;
  
//     // Add the sticky class to the navbar when you reach its scroll position. 
//     // Remove "sticky" when you leave the scroll position
  
//     function myFunctionForSticky() {
//       if (window.pageYOffset >= sticky) {
//         console.log("window.pageYOffset >= sticky");
//       } else {
//         console.log("Not window.pageYOffset >= sticky");
//       }
//       if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky");
//       } else {
//         navbar.classList.remove("sticky");
//       }
//     }
  
//     /*Toggle between adding and removing the "responsive" class to topnav
//     when the user clicks on the icon*/
  
//     function myFunctionForResponsive() {
//       navbar.classList.toggle('responsive');
//     }
// })
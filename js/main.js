(function(){
	"use strict";	
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	// let hamburgerMenu = () => {
	// 	burgerCon.classList.toggle("slide-toggle");
	// 	button.classList.toggle("expanded");
	// };

	button.addEventListener("click", hamburgerMenu, false);		
})();

//Can also be written like this:
//(() => {  })();   

// Info about IIFE https://flaviocopes.com/javascript-iife/

// Get the modal
var modal = document.getElementById("popupModal");

// Get the subscribe button
var subscribeBtn = document.querySelector(".subscribe");

// Get the <span> element that closes the modal
var closeBtn = document.querySelector("#popupModal .close");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Event listener to open the modal when subscribe button is clicked
subscribeBtn.addEventListener('click', openModal);

// Event listener to close the modal when close button is clicked
closeBtn.addEventListener('click', closeModal);

// Event listener to close the modal when clicking outside the modal
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        closeModal();
    }
});
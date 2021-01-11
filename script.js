window.addEventListener("load", pageReady);
let burgersection;
let burgerknap;

// do stuff when the html is loaded
function pageReady() {
	console.log("pageReady");

	burgersection = document.querySelector("#burgersection");
	burgerknap = document.querySelector("#burgerknap");

	burgerknap.addEventListener("click", toggleBurgermenu);
}

// Show or hide burgermenu items and change icon accordingly
function toggleBurgermenu() {
	console.log("toggleBurgermenu");

	// show or hide the burgersection/menu
	burgersection.classList.toggle("hidden");

	// show the correct icon
	if (burgersection.classList.contains("hidden")) {
		burgerknap.textContent = "☰";
	} else {
		burgerknap.textContent = "✖";
	}

}

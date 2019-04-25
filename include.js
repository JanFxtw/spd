window.onscroll = function() {
	stickyNav();
};

var navbar = document.getElementById("menu");
var logo = document.getElementById("logo");
var up = document.getElementById("up");
var sticky = navbar.offsetTop;

function stickyNav() {
	if(window.innerWidth > 1200) {
		if(window.pageYOffset >= sticky) {
			navbar.classList.add("sticky");
			logo.style.display = "block";
			up.style.display = "block";
		} else {
			navbar.classList.remove("sticky");
			logo.style.display = "none";
			up.style.display = "none";
		}
	} else {
		navbar.classList.remove("sticky");
		logo.style.display = "none";
		up.style.display = "none";
	}
}

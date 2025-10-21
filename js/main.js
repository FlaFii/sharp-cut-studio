const nav = document.querySelector(".nav__items");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");
const footerYear = document.querySelector(".footer__year");
const burgerBtnIcon = document.querySelector(".burger-btn__box");
const closeBtnIcon = document.querySelector(".burger-btn__close");
const body = document.querySelector("body");

function handleNav() {
	nav.classList.toggle("nav__items--active");
	navBtn.classList.remove("burger-btn-background");
	burgerBtnIcon.classList.toggle("burger-btn__box--disabled");
	closeBtnIcon.classList.toggle("burger-btn__close--active");
	body.classList.toggle("body__scroll-block");
	handleNavItemsAnimation();
}
function handleNavItemsAnimation() {
	let delayTime = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
}
function removeNavItemsAnimation() {
	allNavItems.forEach((item) => {
		item.classList.toggle("nav-items-animation");
	});
}
function handleBurgerBtnBackground() {
	const currentScroll = window.scrollY;

	if (currentScroll >= 100) {
		navBtn.classList.add("burger-btn-background");
	} else {
		navBtn.classList.remove("burger-btn-background");
	}
}
function handleCurrentYear() {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
}

navBtn.addEventListener("click", handleNav);
document.addEventListener("DOMContentLoaded", handleCurrentYear);
window.addEventListener("scroll", handleBurgerBtnBackground);
allNavItems.forEach((item) => {
	item.addEventListener("click", () => {
		nav.classList.remove("nav__items--active");
		body.classList.toggle("body__scroll-block");
		burgerBtnIcon.classList.toggle("burger-btn__box--disabled");
		closeBtnIcon.classList.toggle("burger-btn__close--active");
		removeNavItemsAnimation();
	});
});

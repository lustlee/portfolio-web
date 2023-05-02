export const observerSection = (section) => {
	const links = document.querySelectorAll(".t");
	links.forEach((link) => {
		link.classList.remove('active');
	});
	const el = document.getElementById(section);
	el.classList.add('active');
}
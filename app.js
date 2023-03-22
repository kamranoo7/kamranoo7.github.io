const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		
	} else {
		
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

    const url = 'https://drive.google.com/file/d/1XWVlxg5P3IkNjynyTdJnIZVQOur28VoQ/view?usp=sharing';

document.getElementById('resume-button-2').addEventListener('click', () => {
  // Download the file
  const link = document.createElement('a');
  link.href = url;
  link.download = './img/img-7.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Open the file in a new tab
  window.open(url, '_blank');
})
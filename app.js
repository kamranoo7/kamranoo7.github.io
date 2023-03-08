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
// Get the resume button element by ID
const resumeButton = document.getElementById("resume-button-2");

// Add a click event listener to the button
resumeButton.addEventListener("click", function() {

  // Replace "your-resume.pdf" with the name of your PDF file
  const pdfUrl = "./img/img-7.pdf";

  // Use the fetch API to get the PDF file as a blob
  fetch(pdfUrl)
    .then(response => response.blob())
    .then(blob => {

      // Create a new URL object for the blob
      const url = URL.createObjectURL(blob);

      // Open a new browser window with the PDF file
      window.open(url);

      // Release the URL object
      URL.revokeObjectURL(url);
    })
    .catch(error => {
      console.error("Error fetching PDF file:", error);
      alert("Unable to download resume. Please try again later.");
    });
});

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
// function downloadResume() {
// // //     // Replace "resume.pdf" with the actual filename of your resume
//     var fileUrl = "./img/MD_KamranKhan_Resume.pdf";
//      var fileName = "MD_KamranKhan_Resume";
    
//     //Create a new window to open the resume file
//     var newWindow = window.open(fileUrl, "_blank");
    
//     //Use the download attribute of an anchor element to download the file
//      var downloadLink = document.createElement("a");
//      downloadLink.href = fileUrl;
//      downloadLink.download = fileName;
//      document.body.appendChild(downloadLink);
//      downloadLink.click();
    //document.body.removeChild(downloadLink);
   //}
 
// // function download(){
// //   console.log("Helllo")
// //   window.open(
// //     "https://drive.google.com/file/d/1XWVlxg5P3IkNjynyTdJnIZVQOur28VoQ/view?usp=sharing",
// //     "_blank"
// //   );
// //   // const link = document.createElement("a");
// //   // link.href = "./img/img-7.pdf";
// //   // document.body.appendChild(link);
// //   // link.click()
// //   window.open("./img/img-7.pdf")
// // }
//  var downloadButton = document.getElementById("resume-button-2");
//    downloadButton.addEventListener("click", downloadResume);
 function resume(){  
	window.open("https://drive.google.com/file/d/1RWWZ3qemRmxmj4ltd2tu5xEuxFKZ64vO/view?usp=sharing", "_blank");
 }
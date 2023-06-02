//Get the GoTop button
var theGoTopButton = document.getElementById("theGoTopBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    theGoTopButton.style.display = "block";
    } else {
    theGoTopButton.style.display = "none";
    }
}

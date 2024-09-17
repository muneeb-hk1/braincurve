// changeToggle() {
//     let a = document.getElementsByClassName('navbar-toggler-icon');
//     a.src = "../img/toggle.png";
// }


var img = document.getElementsByClassName('navbar-toggler');
img.addEventListener("click", function() {
    img.src = "img/toggle.png";
});

var img2 = document.getElementsByClassName('navbar-toggler-icon');
img2.addEventListener("click", function() {
    img.src = "img/toggle.png";
});
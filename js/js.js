document.addEventListener("DOMContentLoaded", function() {
    var contentHeight = document.querySelector(".content").offsetHeight;
    var windowHeight = window.innerHeight;
    var headerHeight = document.querySelector("header").offsetHeight;
    var footerHeight = document.querySelector("footer").offsetHeight;
    var totalHeight = headerHeight + contentHeight + footerHeight;

    if (totalHeight < windowHeight) {
        document.querySelector(".content").style.minHeight = (windowHeight - headerHeight - footerHeight ) + "px";
    }
});
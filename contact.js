// "use strict";
// navSticky


// const newContact = document.getElementById('newContact');
// const mainContent = document.getElementById("Bottom");
const mainContent = document.querySelector(".navSticky");
// let mainContent = document.getElementById("contactSection")
const navBar = document.querySelector(".mySticky");
const contactNav = document.getElementById("contactNav");
const navheight = navBar.getBoundingClientRect().height;
const waypoint = new Waypoint({
    element: mainContent,
    handler: function (direction) {
        if (direction === "down") {
            navBar.classList.toggle("navOnAnimate");
            mainContent.style.marginTop = navheight + "px";
            // contactNav.classList.add("position-fixed")
            // contactNav.classList.add("w-100")


        }
        if (direction === "up") {
            navBar.classList.toggle("navOnAnimate");
            mainContent.style.marginTop = 0 + "px";
        }
    },
});

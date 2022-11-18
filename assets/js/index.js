import video from './video.js';
import slider from './slider.js';
import accordion from './accordion.js';
import btnTop from './btn-to-top.js';

document.addEventListener("DOMContentLoaded", () => {   
    video();
    slider();
    accordion();
    btnTop();
})


// let e = document.getElementById("hero_iframe"),
//     t = document.getElementById("play_iframe");

// t.addEventListener("click", () => { 
//     let t = e.getAttribute("data-src");
//         e.setAttribute("src", t),

//     document.querySelector(".hero-buttons").style.display = "none",
//     document.querySelector(".hero-screen").style.background = "transparent"
// });

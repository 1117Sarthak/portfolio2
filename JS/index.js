// ----DARK THEME-----
function darkTheme(){

}



// -----HAMBURGER TOGGLE-----
var hamBurger = document.getElementById("menuBar");
var hamBurgerList = document.getElementById("navbar-lists")
function menu(){
    // alert("abc");
    hamBurger.classList.toggle("fa-xmark");
    // a.style.transition= 0.5;
    hamBurgerList.classList.toggle("navbar-show");
}

// ----TYPE SCRIPT-----
var typed = new Typed(".auto-type", {
    strings: ["Developer", "Influencer", "Freelencer", "Content Creator"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 100
});


// -----DOWNLOAD CV BTN-----
function downloadcv(){
    window.open("./HTML/downloadCV.html");
}



// -----OPEN EDUCATION LINKS-----
function sch() {
    window.open("https://school.careers360.com/schools/government-boys-senior-secondary-school-no-3-najafgarh-new-delhi");
}

function coll() {
    window.open("https://www.careers360.com/colleges/global-institute-of-technology-and-management-gurgaon");
}


// ----OPEN PROJECTS-----
function calculator(){
    window.open("./Calculator/index.html");
}

function weather(){
    window.open("./Weather");
}

function todoList(){
    window.open("./Todolist/index.html");
}

function foodDelivery(){
    window.open("./Food Delivery/index.html");
}

// -----SOCIAL MEDIA LINKS-----
function facebook() {
    window.open("https://www.facebook.com");
}

function twitter() {
    window.open("https://twitter.com/i/flow/login?redirect_after_login=%2FSarthak_goyal17");
}

function linkedin() {
    window.open("https://www.linkedin.com/in/sarthak-g-a80618239?original_referer=http%3A%2F%2F127.0.0.1%3A5501%2F");
}

function instagram() {
    window.open("https://www.instagram.com/");
}

function github() {
    window.open("https://github.com/1117Sarthak");
}

function contact(){
    window.open("../HTML/contact.html");
}
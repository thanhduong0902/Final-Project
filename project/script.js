const Nav_tongger = document.querySelector(".nav-toggler");
Nav_tongger.addEventListener("click", toggleNav);
function toggleNav() {
    document.querySelector(".nav-toggler").classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}
document.addEventListener("click", function (a) {
    if (a.target.closest(".nav-item")) {
        toggleNav();
    }
})
window.addEventListener("scroll", function () {
    // console.log(this.pageYOffset)
    if (this.pageYOffset > 60) {
        document.querySelector(".header").classList.add("sticky");
    }
    else {
        document.querySelector(".header").classList.remove("sticky")
    }
})
const menuTabs = document.querySelector(".menu-taps");
menuTabs.addEventListener("click", function (e) {
    if (e.target.classList.contains("menu-tap-item") && !e.target.classList.contains("active")) {
        const target = e.target.getAttribute("data-title");
        // console.log(target);
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tap-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");

    }
})

function Redirect() {
    loginForm.style.display = "inline-block";
    document.body.style.backgroundColor = "black";
    document.body.style.opacity = "0.8"
}

function thanhToan() {
    window.location = "http://127.0.0.1:5500/thanhtoan/giohang.html"
}

/* thanh toan */
function objProduct(Img, Name, Price) {
    var product = new Object();
    product.Img = Img;
    product.Name = Name;
    product.Price = Price;

    product.toJson = function () {
        var json = JSON.stringify(this);
        return json;
    }
    return product;
}
const btn = document.querySelectorAll(".order")
//console.log(btn);
var listSP = localStorage.getItem('listSP');
if (listSP == null) {
    listSP = new Array();
}

btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        var btnItem = event.target
        var product = btnItem.parentElement.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("H3").innerText
        var productPrice = product.querySelector("p").innerText
        var meal = objProduct(productImg, productName, productPrice);
        listSP.push(meal);
        var jsonSP = JSON.stringify(listSP);
        localStorage.setItem('listSP', jsonSP);
    })
})


//--------------------------------Login Form-------------------------------------------///

const loginForm = document.getElementById("loginForm")
const btnLogin = document.querySelector(".btnLogin")
const btnRegister = document.querySelector(".btnRegister")
const inputLogin = document.querySelector(".inputLogin")
const inputRegister = document.querySelector(".inputRegister")
const emailLogin = document.querySelector(".emailLogin")
const passLogin = document.querySelector(".passLogin")
const emailRgt = document.querySelector(".emailRgt")
const passRgt = document.querySelector(".passRgt")
const passRgtConfirm = document.querySelector(".passRgtConfirm")
const yourName = document.querySelector(".yourName")
const errorMess = document.getElementById("error")
const submitLogin = document.querySelector(".submitLogin")
const submitRgt = document.querySelector(".submitRgt")
const close = document.querySelector(".close")


close.onclick = (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    document.body.style.backgroundColor = "initial";
    document.body.style.opacity = "initial";
    rightInputs(passLogin);
    rightInputs(yourName);
    rightInputs(emailRgt);
    rightInputs(passRgt);
    rightInputs(passRgtConfirm);
    rightInputs(emailLogin);
    removeInputValue(passLogin);
    removeInputValue(yourName);
    removeInputValue(emailRgt);
    removeInputValue(passRgt);
    removeInputValue(passRgtConfirm);
    removeInputValue(emailLogin);
}

function removeInputValue(input) {
    if (input.value.trim() !== "") {
        input.value = ""
    }
}

btnLogin.onclick = ((e) => {
    e.preventDefault();
    inputLogin.style.display = "block";
    inputRegister.style.display = "none";
    btnLogin.style.backgroundColor = "#f36060";
    btnRegister.style.backgroundColor = "#f3f1ef";
    
})

btnRegister.onclick = ((e) => {
    e.preventDefault();
    inputRegister.style.display = "block";
    inputLogin.style.display = "none";
    btnRegister.style.backgroundColor = "#f36060"; 
    btnLogin.style.backgroundColor = "#f3f1ef";
})

inputLogin.onsubmit = function(e) {
    e.preventDefault();
    checkLoginInputs();
}

inputRegister.onsubmit = (e) => {
    e.preventDefault();
    checkRgtInputs();
}

function setError(input, message) {
    const errorMess = input.parentNode.querySelector("#error");
    errorMess.innerHTML = message;
}

function isEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

function setBlur(input) {
    input.style.border = "2px solid rgb(252, 77, 77)"
    input.style.borderRadius = "5px";
}

function removeErrorMess(input) {
    const removeErrorMess = input.parentNode.querySelector("#error");
    removeErrorMess.innerHTML = "";
    input.style.border = "2px solid black";
    input.style.borderRadius = "5px";
}

function rightInputs(input) {
    const rightInputs = input.parentNode.querySelector("#error");
    rightInputs.innerHTML = "";
    input.style.border = "2px solid black";
    input.style.borderRadius = "5px";
}

// Check Email Login
emailLogin.onblur = (e) => {
    if(emailLogin.value.trim() === "") {
        setError(emailLogin, "Please enter your Email!")
        setBlur(emailLogin)
    } else if(!isEmail(emailLogin.value.trim())) {
        setError(emailLogin, "Email is not valid")
        setBlur(emailLogin)
    } 
}

emailLogin.oninput = (e) => {
    removeErrorMess(emailLogin)
}

//Check Password Login
passLogin.onblur = (e) => {
    if(passLogin.value.trim() === "") {
        setError(passLogin, "Please enter your Password!")
        setBlur(passLogin)
    } else if(passLogin.value.trim().length <= 7) {
        setError(passLogin, "Password must be longer than 7 characters")
        setBlur(passLogin)
    } 
}

passLogin.oninput = (e) => {
    removeErrorMess(passLogin);
}

//Check Login submit
function checkLoginInputs() {
    if(emailLogin.value.trim() === "") {
        setError(emailLogin, "Please enter your Email!")
        setBlur(emailLogin)
    } else if(!isEmail(emailLogin.value.trim())) {
        setError(emailLogin, "Email is not valid")
        setBlur(emailLogin)
    } else rightInputs(emailLogin)

    if(passLogin.value.trim() === "") {
        setError(passLogin, "Please enter your Password!")
        setBlur(passLogin)
    } else if(passLogin.value.trim().length <= 7) {
        setError(passLogin, "Password must be longer than 7 characters")
        setBlur(passLogin)
    } else rightInputs(passLogin)
}


// ---------------------------------- //


//Check Name Register
yourName.onblur = (e) => {
    if(yourName.value.trim() === "") {
        setError(yourName, "Please enter your Name!")
        setBlur(yourName)
    } 
}

yourName.oninput = (e) => {
    removeErrorMess(yourName)
}

// Check Email Register
emailRgt.onblur = (e) => {
    if(emailRgt.value.trim() === "") {
        setError(emailRgt, "Please enter your Email!")
        setBlur(emailRgt)
    } else if(!isEmail(emailRgt.value.trim())) {
        setError(emailRgt, "Email is not valid")
        setBlur(emailRgt)
    } 
}

emailRgt.oninput = (e) => {
    removeErrorMess(emailRgt)
}

// Check Password Register
passRgt.onblur = (e) => {
    if(passRgt.value.trim() === "") {
        setError(passRgt, "Please enter your Password!")
        setBlur(passRgt)
    } else if(passRgt.value.trim().length <= 7) {
        setError(passRgt, "At least 7 characters!")
        setBlur(passRgt)
    } 
}

passRgt.oninput = (e) => {
    removeErrorMess(passRgt)
}

// Check Password Register Confirm
passRgtConfirm.onblur = (e) => {
    if(passRgtConfirm.value.trim() === "") {
        setError(passRgtConfirm, "Please enter your Password Confirm!")
        setBlur(passRgtConfirm)
    } else if(passRgtConfirm.value.trim() !== passRgt.value.trim()) {
        setError(passRgtConfirm, "Passwords do not match!")
        setBlur(passRgtConfirm)
    } 
}

passRgtConfirm.oninput = (e) => {
    removeErrorMess(passRgtConfirm)
}

//Check Register submit
function checkRgtInputs() {
    if(yourName.value.trim() === "") {
        setError(yourName, "Please enter your Name!")
        setBlur(yourName)
    } else rightInputs(yourName)

    if(emailRgt.value.trim() === "") {
        setError(emailRgt, "Please enter your Email!")
        setBlur(emailRgt)
    } else if(!isEmail(emailRgt.value.trim())) {
        setError(emailRgt, "Email is not valid")
        setBlur(emailRgt)
    } else rightInputs(emailRgt)

    if(passRgt.value.trim() === "") {
        setError(passRgt, "Please enter your Password!")
        setBlur(passRgt)
    } else if(passRgt.value.trim().length <= 7) {
        setError(passRgt, "At least 7 characters!")
        setBlur(passRgt)
    } else rightInputs(passRgt)

    if(passRgtConfirm.value.trim() === "") {
        setError(passRgtConfirm, "Please enter Password Confirm!")
        setBlur(passRgtConfirm)
    } else if(passRgtConfirm.value.trim() !== passRgt.value.trim()) {
        setError(passRgtConfirm, "Passwords do not match!")
        setBlur(passRgtConfirm)
    } else rightInputs(passRgtConfirm)
}

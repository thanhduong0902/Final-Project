const loginForm = document.getElementById("loginForm")
const emailLogin = document.querySelector(".emailLogin")
const passLogin = document.querySelector(".passLogin")
const emailRgt = document.querySelector(".emailRgt")
const passRgt = document.querySelector(".passRgt")
const passRgtConfirm = document.querySelector(".passRgtConfirm")
const error = document.getElementById("error")
const inputLogin = document.querySelector(".inputLogin")
const inputRegister = document.querySelector(".inputRegister")
const btnLogin = document.querySelector(".btnLogin")
const btnRegister = document.querySelector(".btnRegister")

btnRegister.innerHTML = "Hello"

btnLogin.onclick = (e) => {
    e.preventDefault();
    btnLogin.style.display = "block";
    btnRegister.style.display = "none";
    btnLogin.style.backgroundColor = "red";
}

btnRegister.onclick = (e) => {
    e.preventDefault();
    btnRegister.style.display = "block";
    btnLogin.style.display = "none";
    btnRegister.style.backgroundColor = "red";
}

inputLogin.onsubmit = function (e) {
    e.preventDefault();
    checkLoginInputs();
}

inputRegister.onsubmit = (e) => {
    e.preventDefault();
    checkRgtInputs();
}

function setError(input, message) {
    const errorMess = input.parentNode.querySelector("#error")
    errorMess.innerHTML = message
}

function isEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

function checkLoginInputs() {
    const emailLoginValue = emailLogin.value.trim()
    const passLoginValue = passLogin.value.trim()

    if (emailLoginValue === "") {
        setError(emailLogin, "Please enter your Email!")
    } else if (!isEmail(emailLoginValue)) {
        setError(emailLogin, "Email is not valid")
    }

    if (passLoginValue === "") {
        setError(passLogin, "Please enter your Password!")
    } else if (passLoginValue.length <= 7) {
        setError(passLogin, "Password must be longer than 7 characters")
    }
}

function checkRgtInputs() {
    const emailRgtValue = emailRgtLogin.value.trim()
    const passRgtValue = passRgt.value.trim()
    const passRgtConfirmValue = passRgtConfirm.value.trim()

    if (emailRgtValue === "") {
        setError(emailRgt, "Please enter your Email!")
    } else if (!isEmail(emailRgtValue)) {
        setError(emailRgt, "Email is not valid")
    }

    if (passRgtValue === "") {
        setError(passRgt, "Please enter your Password!")
    } else if (passRgtValue.length <= 7) {
        setError(passRgt, "Password must be longer than 7 characters")
    }

    if (passRgtValue !== passRgtConfirmValue) {
        setError(passRgtConfirm, "Your password and confirmation password do not match")
    } else if (passRgtConfirmValue === "") {
        setError(passRgtConfirm, "Please enter Password Confirm!")
    }
}
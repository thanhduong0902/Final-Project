const Nav_tongger = document.querySelector(".nav-toggler");
Nav_tongger.addEventListener("click", function () {
    document.querySelector(".nav").style.left = "0";
})
const close = document.querySelector(".fa-window-close");
close.addEventListener("click", function () {
    document.querySelector(".nav").style.left = "-100%";
})
document.addEventListener("click", function (a) {
    if (a.target.closest(".nav-item")) {
        document.querySelector(".nav").style.left = "-100%";
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
     let bgLoginz = document.querySelector("#bg-login");
    bgLoginz.style.display = "block";
    LoginForm.style.display = "block";
    RgtForm.style.display = "none"
}


/* thanh toan */
function objProduct(Img, Name, Price, Count) {
    var product = new Object();
    product.Img = Img;
    product.Name = Name;
    product.Price = Price;
    product.Count = Count

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

let count = 0;
btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
            var btnItem = event.target
            var product = btnItem.parentElement.parentElement
            var productImg = product.querySelector("img").src
            var productName = product.querySelector("H3").innerText
            var productPrice = product.querySelector("p").innerText
            Swal.fire({
                icon: 'success',
                title: 'The dish was added to the cart!', 
            })
            addCart(productPrice, productImg, productName)
    })
});

function addCart(productPrice, productImg, productName) {
    var addtr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".title")
        if (productT[i].innerHTML == productName) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'M??n ??n ???? c??, qu?? kh??ch c?? th??? ch???nh s??? l?????ng sau',

            })
            count--;
            return;
        }
    }
    var trcontent = '<tr><td style="display: flex; align - items: center "><img style="width: 70px; height: 50px" src="' + productImg + '" alt=""><span class="title" style="margin-left:10px;margin-top: 15px">' + productName + '</span></td><td><input style="width: 30px; outline: none;color:black " type="number" value="1" min="1"></td><td><p><span class="prices">' + productPrice + '</span><sup>??</sup></p></td><td style="cursor: pointer; "><i class="delete fas fa-trash"></i></td></tr>'
    addtr.innerHTML = trcontent;
    var cartTable = document.querySelector("tbody")

    cartTable.append(addtr)
    deleteCart()
    carttotal()
}

function carttotal() {
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value
        // console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        //console.log(productPrice)
        totalA = inputValue * productPrice * 1000

        totalC = totalC + totalA
        //totalD = totalC.toLocaleString('de-DE')

    }
    count = cartItem.length;
    var productCount = document.getElementById("count");

    productCount.innerHTML = count;
    var cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML = totalC

    inputchange()



}
//---------------------Deletet cart----------------------------
function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".delete")
        productT[i].addEventListener("click", function (event) {
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement

            cartitemR.remove()


            carttotal()

            // console.log(cartitemR)
        })
    }
}
function inputchange() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change", function () {
            carttotal()
        })

    }
}
const cartbtn = document.querySelector(".fa-times")
const cartShow = document.querySelector(".fa-concierge-bell")
cartShow.addEventListener("click", function () {

    document.querySelector(".cart").style.right = "0"
})
cartbtn.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "-100%"
})
function thanhtoan() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var photo = cartItem[i].children[0].children[0].src;
        var ten = cartItem[i].children[0].children[1].innerHTML;
        var number = cartItem[i].children[1].children[0].value;
        var gia = cartItem[i].children[2].children[0].children[0].innerHTML;
        var meal = objProduct(photo, ten, gia, number);
        listSP.push(meal)
    }
    var list = JSON.stringify(listSP);
    localStorage.setItem('listSP', list);

}

//--------------------------------Login Form-------------------------------------------///

const bgLogin = document.querySelector("#bg-login");
const LoginForm = document.querySelector(".LoginForm")
const RgtForm = document.querySelector(".RgtForm")
const mainFormLogin = document.querySelector(".mainFormLogin")
const mainFormRgt = document.querySelector(".mainFormRgt")
const emailLogin = document.querySelector(".emailLogin")
const passLogin = document.querySelector(".passLogin")
const emailRgt = document.querySelector(".emailRgt")
const passRgt = document.querySelector(".passRgt")
const passRgtConfirm = document.querySelector(".passRgtConfirm")
const yourName = document.querySelector(".yourName")
const submitLogin = document.querySelector(".submitLogin")
const submitRgt = document.querySelector(".submitRgt")
const check_boxLogin = document.querySelector(".check-box")
const iqsLogin = document.querySelector(".iqsLogin")
const iAccount = document.querySelector(".iAccount")
const closeIcon1 = document.querySelector(".close1")
const closeIcon2 = document.querySelector(".close2")

function clear() {
    removeErrorMess(passLogin);
    removeErrorMess(yourName);
    removeErrorMess(emailRgt);
    removeErrorMess(passRgt);
    removeErrorMess(passRgtConfirm);
    removeErrorMess(emailLogin);
    removeInputValue(passLogin);
    removeInputValue(yourName);
    removeInputValue(emailRgt);
    removeInputValue(passRgt);
    removeInputValue(passRgtConfirm);
    removeInputValue(emailLogin);
}

closeIcon1.onclick = (e) => {
    e.preventDefault();
    bgLogin.style.display = "none";
    clear()
}

closeIcon2.onclick = (e) => {
    e.preventDefault();
    bgLogin.style.display = "none";
    clear()
}

iqsLogin.addEventListener("click", (e) => {
    e.preventDefault();
    RgtForm.style.display = "block";
    LoginForm.style.display = "none";
    clear();
})

iAccount.addEventListener("click", (e) => {
    e.preventDefault();
    RgtForm.style.display = "none";
    LoginForm.style.display = "inline-block";
    clear();
})

function removeInputValue(input) {
    if (input.value.trim() !== "") {
        input.value = ""
    }
}

mainFormLogin.onsubmit = function(e) {
    e.preventDefault();
    checkLoginInputs();
    userActionLogin();
}

mainFormRgt.onsubmit = (e) => {
    e.preventDefault();
    checkRgtInputs();
}

function isEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

function setError(input, message) {
    input.setCustomValidity(message);
    input.nextElementSibling.style.color = "rgb(247, 75, 75)"
    // input.classList.add("wrongInput");
}

// function setBlur(input) {
//     // input.classList.add("wrongInput");
//     input.nextElementSibling.style.color = "rgb(247, 75, 75)"
// }

function removeErrorMess(input) {
    input.setCustomValidity("");
    input.nextElementSibling.style.color = "var(--main-color)";
}

const checkRgtEmail = async () => {
    const response = await fetch('https://6277293e08221c9684618066.mockapi.io/users');
    const myJson = await response.json();
    for (let i = 0; i < myJson.length; i++) {
        if(emailRgt.value.trim() == myJson[i].email) {
            setError(emailRgt, "Email is already registered!")
        }
    }
}

/*---------------------------API---------------------------*/
const userAction = async () => {
    const currentUser = {
        yourName : yourName.value.trim(),
        password : passRgt.value.trim(),
        email : emailRgt.value.trim(),
    }
    
    const response = await fetch('https://6277293e08221c9684618066.mockapi.io/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(currentUser),
    });
    const myJson = await response.json();
}



// ---------------------------------- //


//Check Name Register
yourName.onblur = (e) => {
    if(yourName.value.trim() === "") {
        setError(yourName, "Please enter your Name!");
        // setBlur(yourName)
    } 
}

yourName.oninput = (e) => {
    removeErrorMess(yourName)
}

// Check Email Register
emailRgt.onblur = (e) => {
    if(emailRgt.value.trim() === "") {
        setError(emailRgt, "Please enter your Email!")
        // setBlur(emailRgt)
    } else if(emailRgt.value.trim() !== "") {

        checkRgtEmail()
        // setBlur(emailRgt)
    } else if(!isEmail(emailRgt.value.trim())) {
        setError(emailRgt, "Email is not valid")
        // setBlur(emailRgt)
    } 
}

emailRgt.oninput = (e) => {
    removeErrorMess(emailRgt)
}

// Check Password Register
passRgt.onblur = (e) => {
    if(passRgt.value.trim() === "") {
        setError(passRgt, "Please enter your Password!")
        // setBlur(passRgt)
    } else if(passRgt.value.trim().length <= 7) {
        setError(passRgt, "At least 7 characters!")
        // setBlur(passRgt)
    } 
}

passRgt.oninput = (e) => {
    removeErrorMess(passRgt)
}

// Check Password Register Confirm
passRgtConfirm.onblur = (e) => {
    if(passRgtConfirm.value.trim() === "") {
        setError(passRgtConfirm, "Please enter your Password Confirm!")
        // setBlur(passRgtConfirm)
    } else if(passRgtConfirm.value.trim() !== passRgt.value.trim()) {
        setError(passRgtConfirm, "Passwords do not match!")
        // setBlur(passRgtConfirm)
    } 
}

passRgtConfirm.oninput = (e) => {
    removeErrorMess(passRgtConfirm)
}

//Check Register submit
function checkRgtInputs() {
    if(yourName.value.trim() === "" && 
    emailRgt.value.trim() === "" &&
    passRgt.value.trim() === "" &&  
    passRgtConfirm.value.trim() === "") {
        yourName.nextElementSibling.style.color = "rgb(247, 75, 75)";
        emailRgt.nextElementSibling.style.color = "rgb(247, 75, 75)";
        passRgt.nextElementSibling.style.color = "rgb(247, 75, 75)";
        passRgtConfirm.nextElementSibling.style.color = "rgb(247, 75, 75)";
    }

    if(yourName.value.trim() === "") {
        setError(yourName, "Please enter your Name!")
        // setBlur(yourName)
    } else removeErrorMess(yourName)

    if(emailRgt.value.trim() === "") {
        setError(emailRgt, "Please enter your Email!")
        // setBlur(emailRgt)
    } else if(!isEmail(emailRgt.value.trim())) {
        setError(emailRgt, "Email is not valid")
        // setBlur(emailRgt)
    } else if(emailRgt.value.trim() !== "") {
        checkRgtEmail()
        // setBlur(emailRgt)
    } else removeErrorMess(emailRgt)

    if(passRgt.value.trim() === "") {
        setError(passRgt, "Please enter your Password!")
        // setBlur(passRgt)
    } else if(passRgt.value.trim().length <= 7) {
        setError(passRgt, "At least 7 characters!")
        // setBlur(passRgt)
    } else removeErrorMess(passRgt)

    if(passRgtConfirm.value.trim() === "") {
        setError(passRgtConfirm, "Please enter Password Confirm!")
        // setBlur(passRgtConfirm)
    } else if(passRgtConfirm.value.trim() !== passRgt.value.trim()) {
        setError(passRgtConfirm, "Passwords do not match!")
        // setBlur(passRgtConfirm)
    } else removeErrorMess(passRgtConfirm)


    if (yourName.value.trim() !== "" && 
        emailRgt.value.trim() !== "" && isEmail(emailRgt.value.trim()) &&
        passRgt.value.trim() !== "" && passRgt.value.trim().length > 7 && 
        passRgtConfirm.value.trim() !== "" && 
        passRgtConfirm.value.trim() === passRgt.value.trim()) {
            
            userAction()
            if(mainFormRgt.onsubmit) {
                Swal.fire({
                    title: 'Successfully register!',
                    icon: "success",
                    padding: '1.5em',
                    color: '#eaa023',
                    iconColor: 'green',
                    confirmButtonColor:  '#eaa023',
                })

                RgtForm.style.display = "none"
                LoginForm.style.display = "inline-block"

                clear()
            }
    }

}



// Check Email Login---------------------------------------

emailLogin.oninput = (e) => {
    removeErrorMess(emailLogin)
}

emailLogin.onblur = (e) => {
    if(emailLogin.value.trim() === "") {
        setError(emailLogin, "Please enter your Email!")
        // setBlur(emailLogin)

    } else if(!isEmail(emailLogin.value.trim())) {
        setError(emailLogin, "Email is not valid")
        // setBlur(emailLogin)
    } 
}

// emailLogin.oninput = (e) => {
//     removeErrorMess(emailLogin)
// }

//Check Password Login
passLogin.onblur = (e) => {
    if(passLogin.value.trim() === "") {
        setError(passLogin, "Please enter your Password!")
        // setBlur(passLogin)
    } else if(passLogin.value.trim().length <= 7) {
        setError(passLogin, "Password must be longer than 7 characters")
        // setBlur(passLogin)
    } 
}

passLogin.oninput = (e) => {
    removeErrorMess(passLogin);
}

//Check Login submit
function checkLoginInputs() {
    if(emailLogin.value.trim() === "" && passLogin.value.trim() === "") {
        setError(emailLogin, "Please enter your Email!")
        setError(passLogin, "Please enter your Password!")
    } else {
        removeErrorMess(emailLogin)
        removeErrorMess(passLogin)
    }

    if(emailLogin.value.trim() === "") {
        setError(emailLogin, "Please enter your Email!")
        // submitLogin.click();
        // setBlur(emailLogin)
    } else if(!isEmail(emailLogin.value.trim())) {
        setError(emailLogin, "Email is not valid")
        // submitLogin.click();
        // setBlur(emailLogin)
    } else removeErrorMess(emailLogin)
    

    if(passLogin.value.trim() === "") {
        setError(passLogin, "Please enter your Password!")
        // submitLogin.click();
        // setBlur(passLogin)
    } else if(passLogin.value.trim().length <= 7) {
        setError(passLogin, "Password must be longer than 7 characters")
        // submitLogin.click();
        // setBlur(passLogin)
    } else removeErrorMess(passLogin)

    // if(emailLogin.value.trim() === "" && passLogin.value.trim() === "") {
    //     setError(emailLogin, "Please enter your Email!")
    //     setError(passLogin, "Please enter your Password!")
    // } else {
    //     removeErrorMess(emailLogin)
    //     removeErrorMess(passLogin)
    // }

    userActionLogin()
}


const userActionLogin = async () => {
    const response = await fetch('https://6277293e08221c9684618066.mockapi.io/users');
    const myJson = await response.json();

    if (emailLogin.value.trim() !== "" && isEmail(emailLogin.value.trim())
        && passLogin.value.trim().length > 7) {
        for (let i = 0; i < myJson.length; i++) {
            if(emailLogin.value.trim() !== myJson[i].email 
                || passLogin.value.trim() !== myJson[i].password) {
                setError(passLogin, "Wrong email or password")
                emailLogin.nextElementSibling.style.color = "rgb(247, 75, 75)"
                // setBlur(emailLogin)
                // setBlur(passLogin)
                emailLogin.oninput = (e) => {
                    removeErrorMess(emailLogin);
                    removeErrorMess(passLogin);
                }
                passLogin.oninput = (e) => {
                    removeErrorMess(passLogin);
                    removeErrorMess(emailLogin);
                }
            } else {
                removeErrorMess(passLogin)
                removeErrorMess(emailLogin)

                let checked = document.getElementById('check-box').checked; 
                if (checked){
                    localStorage.setItem('user', JSON.stringify(emailLogin.value.trim()))
                } else {
                    sessionStorage.setItem('user', JSON.stringify(emailLogin.value.trim()))
                }

                if(emailLogin.value.trim() === myJson[i].email) {
                    const userName = myJson[i].yourName
                    Swal.fire({
                        title: `Ch??o m???ng ${userName} ?????n v???i Hugo's Restaurant!`,
                        icon: "success",
                        padding: '1.5em',
                        color: '#eaa023',
                        iconColor: 'green',
                        confirmButtonColor:  '#eaa023',
                    })
                }

                bgLogin.style.display = "none";
                
                document.getElementById("Login").innerHTML = "";
                document.getElementById("Logout").style.display = "inline-block";
                
                clear()
            }
        }
    }
}

const user2 = JSON.parse(sessionStorage.getItem("user"))
const user = JSON.parse(localStorage.getItem("user"))
const checkLogin = async () => {
    const response = await fetch('https://6277293e08221c9684618066.mockapi.io/users');
    const myJson = await response.json();
    for (let i = 0; i < myJson.length; i++) {
        const userName = myJson[i].yourName
        if (user) {
            if(user == myJson[i].email) {
                const userName = myJson[i].yourName
                Swal.fire({
                    title: `Ch??o m???ng ${userName} ?????n v???i Hugo's Restaurant!`,
                    // icon: "success",
                    padding: '1.5em',
                    color: '#eaa023',
                    iconColor: 'green',
                    confirmButtonColor:  '#eaa023',
                })
            }
            document.getElementById("Login").innerHTML = "";
            document.getElementById("Logout").style.display = "inline-block";
    }
}
}

checkLogin()


/*---------------------Logout------------------*/

function Logout() {
    localStorage.removeItem("user")
    sessionStorage.removeItem("user")
    location.reload();
}
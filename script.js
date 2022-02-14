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
    bgLogin.style.display = "block";
}

function thanhToan() {
    window.location = "/Final-Project/thanhtoan/giohang.html"
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

let count = 0;
btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        var btnItem = event.target
        var product = btnItem.parentElement.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("H3").innerText
        var productPrice = product.querySelector("p").innerText
        addCart(productPrice, productImg, productName)

        var meal = objProduct(productImg, productName, productPrice);

        listSP.push(meal);

    })
})
function addCart(productPrice, productImg, productName) {
    var addtr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".title")
        if (productT[i].innerHTML == productName) {
            alert("Món ăn đã có trong đơn, quý khách có thể điều chỉnh số lượng sau")
            count--;
            return;
        }
    }
    var trcontent = '<tr><td style="display: flex; align - items: center "><img style="width: 70px; height: 50px" src="' + productImg + '" alt=""><span class="title" style="margin-left:10px;margin-top: 15px">' + productName + '</span></td><td><input style="width: 30px; outline: none; " type="number" value="1" min="1"></td><td><p><span class="prices">' + productPrice + '</span><sup>đ</sup></p></td><td style="cursor: pointer; "><span class="delete">Xóa</span></td></tr>'
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

    document.querySelector(".cart").style.left = "0"
})
cartbtn.addEventListener("click", function () {
    document.querySelector(".cart").style.left = "-100%"
})


//--------------------------------Login Form-------------------------------------------///

const bgLogin = document.querySelector("#bg-login");
const loginForm = document.getElementById("loginForm")
const btnLogin1 = document.querySelector(".btnLogin1")
const btnRegister1 = document.querySelector(".btnRegister1")
const btnLogin2 = document.querySelector(".btnLogin2")
const btnRegister2 = document.querySelector(".btnRegister2")
const mainFormLogin = document.querySelector(".mainFormLogin")
const mainFormRgt = document.querySelector(".mainFormRgt")
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
const check_boxLogin = document.querySelector(".check-box")

function clear() {
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

close.onclick = (e) => {
    e.preventDefault();
    bgLogin.style.display = "none";
    clear()
}

function removeInputValue(input) {
    if (input.value.trim() !== "") {
        input.value = ""
    }
}

btnLogin2.onclick = ((e) => {
    e.preventDefault();
    mainFormLogin.style.display = "inline-block";
    mainFormRgt.style.display = "none";
})

btnRegister1.onclick = ((e) => {
    e.preventDefault();
    mainFormRgt.style.display = "inline-block";
    mainFormLogin.style.display = "none";
})

btnLogin1.onclick = ((e) => {
    e.preventDefault();
    mainFormLogin.style.display = "inline-block";
    mainFormRgt.style.display = "none";
})

btnRegister2.onclick = ((e) => {
    e.preventDefault();
    mainFormRgt.style.display = "inline-block";
    mainFormLogin.style.display = "none";
})

mainFormLogin.onsubmit = function(e) {
    e.preventDefault();
    checkLoginInputs();
    userActionLogin();
}

mainFormRgt.onsubmit = (e) => {
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
    input.style.border = "none";
    input.style.borderBottom = "2px solid black";
    input.style.borderRadius = "0px";
}

function rightInputs(input) {
    const rightInputs = input.parentNode.querySelector("#error");
    rightInputs.innerHTML = "";
    input.style.border = "none";
    input.style.borderBottom = "2px solid black";
    input.style.borderRadius = "0px";
}

const checkRgtEmail = async () => {
    const response = await fetch('https://61ec15037ec58900177cde6c.mockapi.io/api/login/users');
    const myJson = await response.json();
    for (let i = 0; i < myJson.length; i++) {
        if(emailRgt.value.trim() === myJson[i].email) {
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
    
    const response = await fetch('https://61ec15037ec58900177cde6c.mockapi.io/api/login/users', {
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
    } else if(emailRgt.value.trim() !== "") {
        checkRgtEmail()
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


    if (yourName.value.trim() !== "" && 
        emailRgt.value.trim() !== "" && isEmail(emailRgt.value.trim()) &&
        passRgt.value.trim() !== "" && passRgt.value.trim().length > 7 || 
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
                mainFormRgt.style.display = "none"
                mainFormLogin.style.display = "inline-block"
               
                clear()
            }
    }

}



// Check Email Login---------------------------------------
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

    userActionLogin()
}


const userActionLogin = async () => {
    const response = await fetch('https://61ec15037ec58900177cde6c.mockapi.io/api/login/users');
    const myJson = await response.json();

    if (emailLogin.value.trim() !== "" && isEmail(emailLogin.value.trim())
        && passLogin.value.trim().length > 7) {
        for (let i = 0; i < myJson.length; i++) {
            if(emailLogin.value.trim() !== myJson[i].email 
                && passLogin.value.trim() !== myJson[i].password) {
                setError(passLogin, "Wrong email or password")
                setBlur(emailLogin)
                setBlur(passLogin)
                emailLogin.oninput = (e) => {
                    removeErrorMess(emailLogin)
                }
                passLogin.oninput = (e) => {
                    removeErrorMess(passLogin);
                }
            } else {
                removeErrorMess(passLogin)

                let checked = document.getElementById('check-box').checked; 
                if (checked){
                    localStorage.setItem('user', JSON.stringify(emailLogin.value.trim()))
                } else {
                    sessionStorage.setItem('user', JSON.stringify(emailLogin.value.trim()))
                }

                bgLogin.style.display = "none";
                Swal.fire({
                    title: 'Successfully login!',
                    icon: "success",
                    padding: '1.5em',
                    color: '#eaa023',
                    iconColor: 'green',
                    confirmButtonColor:  '#eaa023',
                })
                
                document.getElementById("Login").innerHTML = ""
                document.getElementById("Logout").style.display = "inline-block"
                const userName = myJson[i].yourName
                welcome.innerHTML = `Chào mừng ${userName} đến với Hugo's Restaurant!`
                
                clear()
            }
        }
    }
}

const user = localStorage.getItem("user")
const checkLogin = async () => {
    const response = await fetch('https://61ec15037ec58900177cde6c.mockapi.io/api/login/users');
    const myJson = await response.json();
    for (let i = 0; i < myJson.length; i++) {
        const userName = myJson[i].yourName
        if (user) {
            const welcome = document.getElementById("welcome")
            document.getElementById("Login").innerHTML = ""
            document.getElementById("Logout").style.display = "inline-block"
            welcome.innerHTML = `Chào mừng ${userName} đến với Hugo's Restaurant!`
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

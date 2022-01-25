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
    window.location = "http://127.0.0.1:5500/img/formLogin.html?#";
}

function thanhToan() {
    window.location = "http://127.0.0.1:5500/thanhtoan/giohang.html"
}

/* thanh toan */

const btn = document.querySelectorAll(".order")
//console.log(btn);

btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        var btnItem = event.target
        var product1 = btnItem.parentElement
        var product = product1.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("H3").innerText
        var productPrice = product.querySelector("p").innerText
        addcart(productPrice, productImg, productName)
    })
})

function addcart(productPrice, productImg, productName) {
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    var trcontent = '<tr><td style="display: flex; align - items: center; "><img style="width: 70px" src="' + productImg + '" alt=""><span class="title">' + productName + '</span></td><td><p><span class="prices">' + productPrice + '</span><sup>đ</sup></p></td><td><input style="width: 30px; outline: none; " type="number" value="1" min="1"></td><td style="cursor: pointer; "><span class="delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")

    cartTable.append(addtr)
    carttotal()
    deleteCart()


}
//---------------------totalprice----------------------------
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
        totalD = totalC.toLocaleString('de-DE')
        console.log(totalD)

    }
    var cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML = totalD

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

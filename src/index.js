"use strict"

var cuentas = [
    { nombre: "Nina", saldo: 200 },
    { nombre: "Kitzia", saldo: 500 },
    { nombre: "Jesús", saldo: 350 }
];

var cuentasUsuarios = cuentas.map((element)=>{
    return element.nombre
})
console.log(cuentasUsuarios);
var nombre1 = cuentasUsuarios[0]
var nombre2 = cuentasUsuarios[1]
var nombre3 = cuentasUsuarios[2]
document.getElementById("usuario1").value = nombre1
document.getElementById("usuario2").value = nombre2
document.getElementById("usuario3").value = nombre3

//SELECCIONAMOS LOS NODOS DE NUESTRO HTML CON JS
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnClose = document.querySelector(".close-modal")
const btnClosePass = document.querySelector(".close-password")
const btnOpen = document.querySelector(".show-modal")
const cuenta1 = document.querySelector(".cuenta1")
const btnOpen1 = document.querySelector(".button1")
const cuenta2 = document.querySelector(".cuenta2")
const btnOpen2 = document.querySelector(".button2")
const cuenta3 = document.querySelector(".cuenta3")
const btnOpen3 = document.querySelector(".button3")

//CREAMOS LAS FUNCIONES QUE CONTIENEN LA LOGICA
function openModal() {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
    return
}

function closeModal() {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
    return
}

function closePassword() {
    cuenta1.classList.add("hidden")
    overlay.classList.add("hidden")
    return
}


function openCuenta1() {
    cuenta1.classList.remove("hidden")
    overlay.classList.remove("hidden")
    return
}

function openCuenta2() {
    cuenta2.classList.remove("hidden")
    overlay.classList.remove("hidden")
    return
}

function openCuenta3() {
    cuenta3.classList.remove("hidden")
    overlay.classList.remove("hidden")
    return
}


function login() {
    var NIP = document.getElementById("password").value
if (NIP === "1234") {
    localStorage.setItem("usr", "Nina")
    window.location.assign("Movimientos.html");
    alert("Ingreso Correcto");
} else if (NIP !== "1234") {
    alert("NIP Incorrecto, intente de nuevo");
    return;
} 
}

function login2() {
    var NIP = document.getElementById("password2").value
if (NIP === "2608") {
    localStorage.setItem("usr", "Kitzia")
    window.location.assign("Movimientos.html");
    alert("Ingreso Correcto");
} else if (NIP !== "2608") {
    alert("NIP Incorrecto, intente de nuevo");
    return;
} 
}

function login3() {
    var NIP = document.getElementById("password3").value
if (NIP === "2711") {
    localStorage.setItem("usr", "Jesús")
    window.location.assign("Movimientos.html");
    alert("Ingreso Correcto");
} else if (NIP !== "2711") {
    alert("NIP Incorrecto, intente de nuevo");
    return;
} 
}


function formula1 () {
    var saldoActual
    var saldo
    var currentUsr = localStorage.getItem("usr")
    var usuarioSaldo= cuentas.map((element)=>{
        var saldo;
        if (element.nombre == currentUsr) {
            saldo = element.saldo
        }
        return saldo;
    })
    
    saldoActual=usuarioSaldo.sort()[0];
    saldo=document.getElementById("C1");
    saldo.value= saldoActual
}

function habilitarM () {
    var btnD=document.getElementById("Cant")
    btnD.disabled=false;
    document.getElementById("btnM").hidden=false
    document.getElementById("btnM").classList.add("hddvT")
} 

function habilitarR () {
    var btnD=document.getElementById("Cant")
    btnD.disabled=false;
    document.getElementById("btnR").hidden=false
    document.getElementById("btnR").classList.add("hddvT")
}

function formula2() {
    var Cantidad1=parseInt(document.getElementById("Cant").value);
    var nuevoSaldo
    var sumaSaldo
    var saldoSumado
    var currentUsr = localStorage.getItem("usr")
    var usuarioSaldo= cuentas.map((element)=>{
        var saldo;
        if (element.nombre == currentUsr) {
            saldo = element.saldo
        } 
        return saldo;
    }) 
    nuevoSaldo = usuarioSaldo.sort()[0];
    sumaSaldo = nuevoSaldo + Cantidad1
    if (sumaSaldo >= 990) {
        alert("No cumples con las reglas de negocios")
    } else {
    saldoSumado=document.getElementById("C1");
    saldoSumado.value=sumaSaldo
    document.getElementById("Cant").disabled=true
    document.getElementById("btnM").classList.remove("hddvT")
}
}


function formula3() {
    var saldoUsuario
    var restaSaldo
    var restaResult
    var Cantidad1=parseInt(document.getElementById("Cant").value);
    var usuarioSaldo= cuentas.map((element)=>{
        var saldo;
        var currentUsr = localStorage.getItem("usr")
        if (element.nombre == currentUsr) {
            saldo = element.saldo
        }
        return saldo;
    })
    saldoUsuario = usuarioSaldo.sort()[0];
    restaSaldo = saldoUsuario - Cantidad1;
    if (restaSaldo <= 10) {
        alert("No cumples con las reglas de negocios")
    } else {    
    restaResult = document.getElementById("C1")
    restaResult.value = restaSaldo;
    document.getElementById("Cant").disabled=true
    document.getElementById("btnR").classList.remove("hddvT")}
}

function logOut() {
    localStorage.removeItem("usr")
    window.location.assign("index.html");
}

//ACTIVAMOS LOS EVENTOS DE CLICK
btnOpen.addEventListener("click", openModal)
btnClose.addEventListener("click", closeModal)
btnClosePass.addEventListener("click", closePassword)
overlay.addEventListener("click", closeModal)
btnOpen1.addEventListener("click", openCuenta1)
btnOpen2.addEventListener("click", openCuenta2)
btnOpen3.addEventListener("click", openCuenta3)

// CERRAR EL MODAL, PRESIONANDO LA TECLA "ESC"
document.addEventListener("keydown", function (event) {
    if(event.key === "Escape") {
        closeModal()
    }
})

/*document.addEventListener("keydown", function (event) {
    if(event.key === "Enter") {
        login()
    }
})*/
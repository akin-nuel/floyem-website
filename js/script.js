const hamburger = document.querySelector(".ham-menu");
const menu = document.querySelector(".menu");

const firstContainer = document.querySelector(".maincontainer");
const circle1 = document.querySelector("#left");
const circle2 = document.querySelector("#right");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    menu.classList.toggle("active")
})

window.onload = function(){
    let position = 0;

    function animate(){
        position += 2;
        circle1.style.left= position + 'px' ;
        circle2.style.right= position + 'px' ;

        if (position < window.innerWidth - 300) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}

function copyText1() {
    copyTextFromDiv('numberDiv1');
}

function copyText2() {
    copyTextFromDiv('numberDiv2');
}

function copyText3() {
    copyTextFromDiv('numberDiv3');
}

function copyText(divId) {
    const textToCopy = document.getElementById(divId).innerText;
    const tempInput = document.createElement('textarea');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert("Text copied: " + textToCopy);
}

function sendMail(){
    let parms = {
        name: document.getElementById("user").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_go0noud", "template_2uc245q", parms).then(alert("Email Sent!!!"))
}
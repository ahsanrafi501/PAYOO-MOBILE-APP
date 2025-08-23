document.getElementById('login-btn').addEventListener('click', function(e){
    e.preventDefault()
    const mobileNumeber = 12345678910;
    const pinNumber = 1234;
    const inputNumber = document.getElementById('mobile-number').value;
    const inputNumberConverted = parseInt(inputNumber.trim());
    const inputPin = document.getElementById('pin-number').value;
    const inputPinConverted = parseInt(inputPin.trim());



    if(mobileNumeber === inputNumberConverted && pinNumber === inputPinConverted){
        window.location.href = "./home.html"
    }

    else{
        alert("Invalid Credentials");
    }
})
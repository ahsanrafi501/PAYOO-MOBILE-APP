const pinNumber = 1234;

// Toggling Feature

document.getElementById("addMoneyParent").style.display = "none";
document.getElementById("cashOutParent").style.display = "none";
document.getElementById("addMoneyBtnParent").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("cashOutParent").style.display = "none";
    document.getElementById("addMoneyParent").style.display = "block";
})

document.getElementById("cashOutBtnParent").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("cashOutParent").style.display = "block";
    document.getElementById("addMoneyParent").style.display = "none";
})



// Add Money Feature

document.getElementById('addMoneyBtn').addEventListener("click", function (e) {
    e.preventDefault();

    const selectedBank = document.getElementById("selectBank").value;
    const givenAccountNumber = document.getElementById("bankAccountNumber").value;
    const givenAmount = parseInt(document.getElementById("addAmount").value);
    const givenPinNumber = document.getElementById("pinNumber").value;

    const availableBalance = parseInt(document.getElementById("totalAmount").innerText);


    if (givenAccountNumber.length < 11) {
        alert("Enter a Valid account Number");
        return;
    }

    if (givenPinNumber != pinNumber) {
        alert("Enter a Valid pin Number");
        return;
    }

    const totalBalance = availableBalance + givenAmount;

    document.getElementById("totalAmount").innerText = totalBalance;
})



// Cash Out feature

document.getElementById("withdrawBtn").addEventListener("click", function (e) {
    e.preventDefault();
    const withdrawAgentNumber = document.getElementById("withdrawAgentNumber").value;

    const withdrawAmount = parseInt(document.getElementById("withdrawAddAmount").value);

    const givenPinNumber = document.getElementById("withdrawPinNumber").value;
const availableBalance = parseInt(document.getElementById("totalAmount").innerText);

    if (withdrawAgentNumber.length < 11) {
        alert("Enter Valid Agent Number");
        return;
    }

    if (givenPinNumber != pinNumber) {
        alert("Enter Valid Pin Number");
        return;
    }

    if(availableBalance > withdrawAmount){
        
    const totalBalance = availableBalance - withdrawAmount;
    document.getElementById("totalAmount").innerText = totalBalance;
    }

    else{
        alert("Invalid Amount");
    }


})
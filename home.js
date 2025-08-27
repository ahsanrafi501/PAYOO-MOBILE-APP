const pinNumber = 1234;
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



document.getElementById('addMoneyBtn').addEventListener("click", function (e) {
    e.preventDefault();

    selectedBank = document.getElementById("selectBank").value;
    givenAccountNumber = document.getElementById("bankAccountNumber").value;
    givenAmount = parseInt(document.getElementById("addAmount").value);
    givenPinNumber = document.getElementById("pinNumber").value;

    availableBalance = parseInt(document.getElementById("totalAmount").innerText);


    if (givenAccountNumber.length < 11) {
        alert("Enter a Valid account Number");
        return;
    }

    if (givenPinNumber != pinNumber) {
        alert("Enter a Valid pin Number");
        return;
    }

    totalBalance = availableBalance + givenAmount;

    document.getElementById("totalAmount").innerText = totalBalance;
})
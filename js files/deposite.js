document.getElementById("deposit-button").addEventListener('click', function () {

    const depositInput = document.getElementById("deposit-input");
    const depositMoneyString = depositInput.value;
    const depositMoney = parseFloat(depositMoneyString);
    // console.log(depositMoney);
    depositInput.value = "";

    const previousDepositString = document.getElementById("deposit");
    const previousDeposit = parseFloat(previousDepositString.innerText);
    const newDeposit = depositMoney + previousDeposit;
    previousDepositString.innerText = newDeposit;

    const previousBalanceString = document.getElementById("balance");
    const previousBalance = parseFloat(previousBalanceString.innerText);
    const newBalance = depositMoney + previousBalance;
    previousBalanceString.innerText = newBalance;


    if (previousBalanceString.innerText === "NaN") {
        alert("please provide valid amount")
    }




})

document.getElementById("reset-button").addEventListener('click', function () {

    const previousDepositString = document.getElementById("deposit");
    previousDepositString.innerText = "00";
})


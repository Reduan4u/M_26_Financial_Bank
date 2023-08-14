document.getElementById("withdraw-button").addEventListener('click', function () {

    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawMoneyString = withdrawInput.value;
    const withdrawMoney = parseFloat(withdrawMoneyString);
    // console.log(withdrawMoney);
    withdrawInput.value = "";

    const previousWithdrawString = document.getElementById("withdraw");
    const previousWithdraw = parseFloat(previousWithdrawString.innerText);
    const newWithdraw = withdrawMoney + previousWithdraw;
    previousWithdrawString.innerText = newWithdraw;

    const previousBalanceString = document.getElementById("balance");
    const previousBalance = parseFloat(previousBalanceString.innerText);
    const newBalance = previousBalance - withdrawMoney;
    previousBalanceString.innerText = newBalance;

    if (previousBalanceString.innerText === "NaN") {
        alert("please provide valid amount")
    }
    else if (withdrawMoney > previousBalance) {
        alert("You can't withdraw mre than you have")
    }
})
/* SAVE */
document.getElementById("reset-button").addEventListener('click', function () {

    const previousWithdrawString = document.getElementById("withdraw");
    previousWithdrawString.innerText = "00";
})
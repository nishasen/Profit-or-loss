const initialPrice = document.querySelector("#initial-price")
const quantityOfStock = document.querySelector("#quantity-of-stocks")
const currentPrice = document.querySelector("#current-price")
const checkButton = document.querySelector("#check-btn")
const output = document.querySelector("#output")

const showMessage = (message) => output.innerText = message;

function calculateProfitOrLoss(initial, current, quantity) {
    if(initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        lossPercentage = lossPercentage.toFixed(2);
        showMessage("Oops! You faced a loss of Rs." + loss + " and the loss percentage is " + lossPercentage + "%.")
    } else if(current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        profitPercentage = profitPercentage.toFixed(2);
        showMessage("Yay!!! You got a profit of Rs." + profit + " and the profit percentage is " + profitPercentage + "%.")
    } else {
        showMessage("Hehe! no pain no gain.")
    }
}

checkButton.addEventListener("click", function checkProfitOrLossHandler() {
    if(initialPrice.value && currentPrice.value && quantityOfStock.value){
        calculateProfitOrLoss(Number(initialPrice.value), Number(currentPrice.value), Number(quantityOfStock.value))
    } else {
        showMessage("Please enter all the inputs")
    }
})
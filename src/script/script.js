let chips = 10000;

function displayChips() {
    const balanceElement = document.getElementById('chips-total')
    balanceElement.textContent = chips
}
function decreaseBalance(amount) {
    if (chips - amount >= 0) {
        chips -= amount;
        displayChips();
    } else {
        alert("Casino Rich: У вас достаточно фишек!");
    }
}

let chips = 1000;

function displayChips() {
    const balanceElement = document.getElementById('chips-total');
    balanceElement.textContent = chips;
}

function decreaseBalance(amount) {
    if (chips - amount >= 0) {
        chips -= amount;
        displayChips();
    } else {
        alert("Casino Rich: У вас недостаточно фишек!");
    }
}

let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.play');

spinBtn.onclick = function () {
    if (chips >= 1000) {
        let rotationValue = Math.ceil(Math.random() * 3600) + 3600;
        wheel.style.transition = "transform 5s cubic-bezier(0.1, 0.8, 0.5, 1)";
        wheel.style.transform = `rotate(${rotationValue}deg)`;

        decreaseBalance(1000);
    } else {
        alert("Casino Rich: У вас недостаточно фишек для игры!");
    }
};

displayChips();

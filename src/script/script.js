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

document.getElementById("openModalBtn").addEventListener("click", function () {
    document.getElementById("winModal").classList.add("open")
})

document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("winModal").classList.remove("open")
})

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        document.getElementById("winModal").classList.remove("open")
    }
})

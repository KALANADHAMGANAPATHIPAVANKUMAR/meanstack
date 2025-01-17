const costInput = document.getElementById('cost-input');
const calculateBtn = document.getElementById('calculate-btn');
const errorMessage = document.getElementById('error-message');

calculateBtn.addEventListener('click', () => {
    const cost = parseFloat(costInput.value);

    if (cost < 0) {
        errorMessage.textContent = "Error: cost cannot be less than $0";
    } else {
        errorMessage.textContent = "";
        alert(`Total cost: $${cost.toFixed(2)}`);
    }
});

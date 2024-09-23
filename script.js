let balance = 1000;

function updateBalance() {
    document.getElementById('balance').innerText = balance.toFixed(2);
}

function deposit() {
    let amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        showAlert('Please enter a valid amount.');
        return;
    }
    balance += amount;
    updateBalance();
    clearAlert();
}

function withdraw() {
    let amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        showAlert('Please enter a valid amount.');
        return;
    }
    if (amount > balance) {
        showAlert('Insufficient balance!');
        return;
    }
    balance -= amount;
    updateBalance();
    clearAlert();
}

function showAlert(message) {
    document.getElementById('alert').innerText = message;
}

function clearAlert() {
    document.getElementById('alert').innerText = '';
}

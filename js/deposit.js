

document.getElementById('deposit-btn').addEventListener('click', function(){

    const depositValue = getInputFieldValueById('deposit-input');


    const reserveDeposit = getElementValueById('reserved-deposit');
    const deposit = reserveDeposit + depositValue;
    setElementValueById('reserved-deposit', deposit);

    const reservedBalance = getElementValueById('reserved-balance');
    const currentBalance = depositValue + reservedBalance;
    setElementValueById('reserved-balance', currentBalance);

})
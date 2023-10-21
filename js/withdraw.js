document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawValue = getInputFieldValueById('withdraw-input');

    const reserveWithdraw = getElementValueById('reserved-withdraw');
    const totalWithdraw = reserveWithdraw + withdrawValue;
    setElementValueById('reserved-withdraw', totalWithdraw);

    const previousBalance = getElementValueById('reserved-balance');
    const currentBalance = previousBalance - withdrawValue;
    setElementValueById('reserved-balance', currentBalance);
})
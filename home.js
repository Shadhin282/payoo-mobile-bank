const validPin = 1234

document.getElementById("add-money-btn").addEventListener('click', function (e) {
    e.preventDefault()
    // console.log("add money clicked.")
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById('account-number').value;
    const amount = parseInt(document.getElementById('add-amount').value);
    const pin = parseInt(document.getElementById('add-pin').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    // console.log(availableBalance)

    if (accountNumber.length < 11) {
        alert("Invalid number. kindly provide 11 digit.")
        return;
    } 

    if (pin !== validPin) {
        alert("Pin not match.")
        return;
    }
    
          const totalNewAvailableBalance = amount + availableBalance;
    // console.log(totalNewAvailableBalance)
         document.getElementById("available-balance").innerText = totalNewAvailableBalance;
    

  


})
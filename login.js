document.getElementById('loginButton').addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('login button click')
    // console.log(event)
    const mobileNumber = 12345678910;
    const pinNumber = 1234;
    const mobileNumberValue = document.getElementById('mobile-number').value;
    const mobileNumberValueConvert = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById('pin-number').value;
    const pinNumberValueConvert = parseInt(pinNumberValue)

    // console.log(mobileNumberValueConvert, pinNumberValueConvert)
    if (mobileNumberValueConvert === mobileNumber && pinNumberValueConvert === pinNumber) {
        // console.log("all values are matched");
        window.location.href = './home.html'
    } else {
        // console.log('invalid credentials');
        alert('Invalid Credentials');
    }
})
const firebaseConfig = {
    apiKey: "AIzaSyAwwfy5UM3xiHpIpyFMDdBcVtwDwx9q3ow",
    authDomain: "rivalcoder1.firebaseapp.com",
    projectId: "rivalcoder1",
    storageBucket: "rivalcoder1.appspot.com",
    messagingSenderId: "568226679853",
    appId: "1:568226679853:web:91a240bc5a0e1fe3e2fca4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// render recaptcha verifier
function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {'size': 'invisible'});
}
render();

// function for send OTP
function phoneAuth() {
    const phoneNumber = "+91" + document.getElementById('number').value;
    const appVerifier = window.recaptchaVerifier;

    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            alert('OTP Sent');
        }).catch((error) => {
            alert(error);
        });
}

// function for verifying OTP
function codeverify() {
    const code = document.getElementById('verificationcode').value;
    confirmationResult.confirm(code).then((result) => {
        alert("Hii");
        const user = result.user;
        alert("Signed up");
    }).catch((error) => {
        alert("error!!!");
    });
}

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";


// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// import { getDatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";


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
// const app = initializeApp(firebaseConfig);
// const db =getDatabase(app);
// const auth = getAuth(app);

// const db =getDatabase(initializeApp(firebaseConfig));

// Render reCAPTCHA verifier
function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible'
    });
}

render();

// Function to send OTP
function phoneAuth() {
    const phoneNumber = "+91" + document.getElementById('number').value;
    const appVerifier = window.recaptchaVerifier;

    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            alert('OTP Sent');



        }).catch((error) => {
            alert(error.message);
        });
}

// Function to verify OTP
function codeverify() {
    const code = document.getElementById('verificationcode').value;
    window.confirmationResult.confirm(code).then((result) => {
        alert("OTP Verified");


        // set(ref(db,'PhoneNumber/'+"id"),
        //   {
        //       Number:document.getElementById("number").value,
        //       pass:document.getElementById("Simple").value
        //   });
    
          alert("Login Saved !")




    }).catch((error) => {
        alert("OTP Error: " + error.message);
    });
}





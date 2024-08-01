// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
// import { getAuth, signInWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwwfy5UM3xiHpIpyFMDdBcVtwDwx9q3ow",
  authDomain: "rivalcoder1.firebaseapp.com",
  projectId: "rivalcoder1",
  storageBucket: "rivalcoder1.appspot.com",
  messagingSenderId: "568226679853",
  appId: "1:568226679853:web:91a240bc5a0e1fe3e2fca4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
auth.languageCode = 'it';

// Initialize reCAPTCHA verifier
window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
  'size': 'normal', // Change to 'invisible' if you want an invisible reCAPTCHA
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
}, auth);

// Render the reCAPTCHA widget
window.recaptchaVerifier.render().then((widgetId) => {
  window.recaptchaWidgetId = widgetId;
});

document.getElementById("signup-form").addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById("user").value;
    const password = document.getElementById("pass").value;
    const phoneNumber = document.getElementById("phone-number").value;

    if (email === "" || password === "" || phoneNumber === "") {
        alert("Please enter a valid email, password, and phone number");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Login successful");

            // Send OTP
            const appVerifier = window.recaptchaVerifier;
            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
                .then((confirmationResult) => {
                    window.confirmationResult = confirmationResult;
                    alert("OTP sent");
                }).catch((error) => {
                    console.error("Error during signInWithPhoneNumber:", error);
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Wrong information");
            console.error("Error during signInWithEmailAndPassword:", error);
        });
});

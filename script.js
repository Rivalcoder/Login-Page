import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

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
  const db =getDatabase(app);
  const auth=getAuth(app);
  document.getElementById("submit").addEventListener('click',function(e){
    e.preventDefault();
    var Email=document.getElementById("user").value
    var pass=document.getElementById("pass").value
    var name1=document.getElementById("name").value
    if(Email==""||pass=="" || name1==""){
      alert("Please enter a valid username and password")
    }else{ 
//document.getElementById("user").value
  
  // function save() {
   


      createUserWithEmailAndPassword(auth, Email, pass)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          alert("Created Succesfully!!")
          set(ref(db,'user/'+name1),
          {
              Email:document.getElementById("user").value,
              pass:document.getElementById("pass").value
          });
    
          alert("Login Saved !")
          window.location.href = "otp.html"; 
    
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Enter valid creditals")
          window.location.href = "otp.html";
          set(ref(db,'Unverified/'+name1),
          {
              Email:document.getElementById("user").value,
              pass:document.getElementById("pass").value
          });
    
        
        
          // ..
        });
     } })
    

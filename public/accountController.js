import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

async function login(){
    console.log()
    const loginData = await axios.post('/login', {   
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    });
    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBi45MAcEE383dz_1rjTDgYprVIDrCtKF8",
      authDomain: "webrtc-2f317.firebaseapp.com",
      projectId: "webrtc-2f317",
      storageBucket: "webrtc-2f317.appspot.com",
      messagingSenderId: "722504795947",
      appId: "1:722504795947:web:ddcb16a9c466bb7757e76e",
      measurementId: "G-QWZZZBN0JF"
    };
    // Initialize Firebase
    const firebase = initializeApp(firebaseConfig);
    firebase.auth().signInWithEmailAndPassword(document.getElementById("email"),document.getElementById("senha")).then(sucess => {
        console.log('OK')
        window.location.href = "public/index.html"
    }).catch(error => {
        console.log('erro')
    });
    const analytics = getAnalytics(firebase);
    
}
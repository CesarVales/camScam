
 const login = ()=>{
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

    }

    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider()

    const signInButton = document.getElementById("entrar");
    //const signOutButton = document.getElementById("signOutButton");
    //const message = document.getElementById("message");
    const userName = document.getElementById("userName");
    const userEmail = document.getElementById("email");

    //signOutButton.style.display = "none";
    //message.style.display = "none";

    const auth = getAuth();
    signInWithEmailAndPassword(auth, "cesarvales09@gmail.com", "123456")
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}
    //signOutButton.addEventListener('click', userSignOut);
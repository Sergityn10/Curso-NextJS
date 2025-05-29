import { initializeApp, getApps } from "firebase/app";
import { signInWithPopup,onAuthStateChanged, GithubAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDyh7HWpqA0zrVnEnshDRoxjtytoldKQz8",
  authDomain: "sergidev-64a19.firebaseapp.com",
  projectId: "sergidev-64a19",
  storageBucket: "sergidev-64a19.firebasestorage.app",
  messagingSenderId: "106198502257",
  appId: "1:106198502257:web:f7e512dfe0ef8916a8c4d0",
  measurementId: "G-Z8DS9T91S7"
};

initializeApp(firebaseConfig);

const auth = getAuth();

const mapUserFromFirebaseAuth = (result) => {
    const user = result.user;
    const photoURL = user.photoURL
    return {
        avatar: photoURL,
        user: user
        

    }
}

export const loginWithGithub =  () => {
    const provider = new GithubAuthProvider();
    try {

        return signInWithPopup(auth,provider).
        then((mapUserFromFirebaseAuth))
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
}

export const onAuthStateChangedOwn = (onChange)=>{
    return onAuthStateChanged(auth,result=>{
        console.log("Auth state changed:", result);
        
        onChange(result)
    })
}
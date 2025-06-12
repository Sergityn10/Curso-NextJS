import { create } from "domain";
import { initializeApp, getApps } from "firebase/app";
import { signInWithPopup,onAuthStateChanged, GithubAuthProvider, getAuth } from "firebase/auth";
import  { getFirestore, addDoc, collection, serverTimestamp, getDoc,getDocs,query,where } from "firebase/firestore"
import { server } from "typescript";

const firebaseConfig = {
  apiKey: "AIzaSyDyh7HWpqA0zrVnEnshDRoxjtytoldKQz8",
  authDomain: "sergidev-64a19.firebaseapp.com",
  projectId: "sergidev-64a19",
  storageBucket: "sergidev-64a19.firebasestorage.app",
  messagingSenderId: "106198502257",
  appId: "1:106198502257:web:f7e512dfe0ef8916a8c4d0",
  measurementId: "G-Z8DS9T91S7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore(app);

const mapUserFromFirebaseAuth = (result) => {
    const user = result.user;
    const { uid } = result;
    const { displayName, email } = result;
    const photoURL = user.photoURL
    return {
        avatar: photoURL,
        username: displayName,
        email: email,
        user: user,
        uid
        

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
        if (result) {
            onChange(result)
        }
        else{ 
            onChange(null)
            }
    })
}

export const addSergit = ({avatar, message, uid, username}) => {
    return addDoc(collection(db,"sergits"),{
        avatar,
        message, 
        uid,
        username,
        likesCount: 0,
        sharedCount: 0,
        createdAt: serverTimestamp()
    })

}

export const fetchLastestSergits = () => {
    const q = query(collection(db, "sergits"), where("username","==","Sergio Martín Ledesma"))// Last 7 days
    const querySnapshot = getDocs(q).then((snapshot) => {
        return snapshot.docs.map(doc =>{
            const data = doc.data();
            const id = doc.id;
            const createdAt = data.createdAt

            console.log("Created at:", +createdAt);
            return {
                ...data,
                id,
                createdAt: +createdAt
            }
            
        })
    })

    return querySnapshot
}
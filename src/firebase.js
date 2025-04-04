import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue} from "firebase/database";
import { getAuth, GoogleAuthProvider,signInWithPopup, signOut} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBHXwoWe9wSjgeY4HpG4R_TTweEhL4AXms",
    authDomain: "script-store-50560.firebaseapp.com",
    databaseURL: "https://script-store-50560-default-rtdb.firebaseio.com",
    projectId: "script-store-50560",
    storageBucket: "script-store-50560.appspot.com",
    messagingSenderId: "126924904241",
    appId: "1:126924904241:web:ed03652cba589ccc998210"
  };


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


// Підключення Firebase Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();



// Функція для входу через Google

const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("Увійшов:", result.user);
    return result.user;
    
  } catch (error) {
    console.error("Помилка при вході через Google:", error);
    return null;
  }
};



const logout = async () => {
  try{
    await signOut(auth);
  } catch (error) {
    console.error("Помилка при виході", error)
  }
}



export { database, ref, onValue, auth, loginWithGoogle, logout};
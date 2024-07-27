import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue} from "firebase/database"

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


export { database, ref, onValue};
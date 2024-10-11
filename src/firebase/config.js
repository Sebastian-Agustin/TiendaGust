import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC-uEyxWbhpLuMe_m0xA9-P6UNsgDQgMHM",
  authDomain: "latiendagust.firebaseapp.com",
  projectId: "latiendagust",
  storageBucket: "latiendagust.appspot.com",
  messagingSenderId: "52707704731",
  appId: "1:52707704731:web:10a40abdf60b0613aeab3e"
};

 export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID
};

// VITE_APIKEY=AIzaSyCnfRjZyUq6sLIEDj-yAN7tJtKuNfYGTO4
// VITE_AUTHDOMAIN=cars-doctor-3d632.firebaseapp.com
// VITE_PROJECTID=cars-doctor-3d632
// VITE_STORAGEBUCKET=cars-doctor-3d632.appspot.com
// VITE_MESSAGINGSENDERID=60580118373
// VITE_APPID=1:60580118373:web:747156698f570426e9eb8c

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
// FIREBASE

// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSfGa2T6T5YByoplIn53_EQLNkt9qIz6o",
  authDomain: "sacral-track-app.firebaseapp.com",
  databaseURL: "https://sacral-track-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sacral-track-app",
  storageBucket: "sacral-track-app.appspot.com",
  messagingSenderId: "402642719793",
  appId: "1:402642719793:web:64d4500797a3a3c1543110",
  measurementId: "G-QC4LGBENZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


if (typeof window !== 'undefined' && analytics.isSupported()) {
  // код инициализации аналитики
}

// Инициализация Express приложения
const expressApp = express();


// Analytics

const ua = require('universal-analytics');
const visitor = ua('UA-XXXXXXXXX-X'); // Замените 'UA-XXXXXXXXX-X' на ваш код отслеживания Google Analytics



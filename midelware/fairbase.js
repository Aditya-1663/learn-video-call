// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const initializeApp=require('firebase/app').initializeApp
const getAnalytics=require('firebase/analytics').getAnalytics
// const serviceAccount = require('./path-to-your-firebase-admin-sdk.json');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATrTp8lD20_AtQzdvSMOky_xrDNCxNN5k",
  authDomain: "chatapp-61073.firebaseapp.com",
  projectId: "chatapp-61073",
  storageBucket: "chatapp-61073.appspot.com",
  messagingSenderId: "562268762955",
  appId: "1:562268762955:web:de70c956a46059d6b56ece",
  measurementId: "G-SWLXKVMF11",
  credential: admin.credential.cert(serviceAccount),
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const bucket = admin.storage().bucket();

const destinationFilePath = '/image';
// Function to upload a file to Firebase Storage
async function uploadFileToFirebaseStorage(localFilePath) {
  try {
    // Upload the file to Firebase Storage
   const p= await bucket.upload(localFilePath, {
      destination: destinationFilePath 
    });
    const url = await bucket.file(destinationFilePath)
    console.log('File uploaded successfully.');
    return url;
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

// Example usage
const localFilePath = 'path-to-your-local-file';
// module.exports ={uploadFileToFirebaseStorage}
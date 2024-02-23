import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBXQGRo6hMHwxMLTUzpyATxRlMTqEDuTD4",
  authDomain: "strayaid-connect.firebaseapp.com",
  databaseURL: "https://strayaid-connect-default-rtdb.firebaseio.com",
  projectId: "strayaid-connect",
  storageBucket: "strayaid-connect.appspot.com",
  messagingSenderId: "117009481497",
  appId: "1:117009481497:web:05d66fd30e71293a5d8f88"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Reference to the Firebase Realtime Database
const database = firebase.database();

// Function to fetch the location data inside the 'landingpage-volunteers' document
function fetchLocationData() {
  return database.ref('landingpage-volunteers/location').once('value')
    .then(snapshot => {
      return snapshot.val();
    })
    .catch(error => {
      console.error('Error fetching location data:', error);
      throw error; // You can handle the error accordingly in your application
    });
}

// Usage
fetchLocationData().then(locationData => {
  console.log('Location data:', locationData);
}).catch(error => {
  // Handle error
});

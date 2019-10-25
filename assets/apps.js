

$(document).ready(function() {


// Web API Key
// AIzaSyABvymBW2eHUYcaSOXIoRF-iFMuRl2YDsA


var firebaseConfig = {
  apiKey: "AIzaSyABvymBW2eHUYcaSOXIoRF-iFMuRl2YDsA",
  authDomain: "exampleprojectx1.firebaseapp.com",
  databaseURL: "https://exampleprojectx1.firebaseio.com",
  projectId: "exampleprojectx1",
  storageBucket: "exampleprojectx1.appspot.com",
  messagingSenderId: "1046056285857",
  appId: "1:1046056285857:web:6ac6fa95c41346af9822e0",
  measurementId: "G-8NQE2FHXHE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.database();


console.log(firebaseConfig);

$("#button").on("click", function(event){
  console.log("hey this button is working");

  event.preventDefault();

  // grabs user input 
  var trainName = $("#trainName").val().trim();

  var entry = {
  trainName: trainName,
}
console.log(trainName);

database.ref().push(entry);
})

database.ref().on("child_added", function(childSnapshot) {
console.log(childSnapshot.val());
})





});
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAylES85vAYBdvpXTpcAiseGXquFHUZTWg",
    authDomain: "letschat-web-app-----1.firebaseapp.com",
    projectId: "letschat-web-app-----1",
    storageBucket: "letschat-web-app-----1.appspot.com",
    messagingSenderId: "883497493524",
    appId: "1:883497493524:web:c8ab6850df7def95137301"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

function addroom() {
       room_name = document.getElementById("room_name").value;

      localStorage.setItem("Roomname",room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
//Start code

//End code
});});}
getData();
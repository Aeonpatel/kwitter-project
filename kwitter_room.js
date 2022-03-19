
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCcrSpzH9IZSEA7N48IyMFW34iWMMdwhPY",
      authDomain: "kwitter-e3a6f.firebaseapp.com",
      databaseURL: "https://kwitter-e3a6f-default-rtdb.firebaseio.com",
      projectId: "kwitter-e3a6f",
      storageBucket: "kwitter-e3a6f.appspot.com",
      messagingSenderId: "693571120454",
      appId: "1:693571120454:web:98aab68e621fafa8b48947"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      
      
      function getData() 

      {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
                        Room_names = childKey;
      //start code
      console.log("Roomname -"+Room_names)
      row="<div class='roomname' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row
      //End code
      });});}
getData();
username=localStorage.getItem("username");
document.getElementById("welcome").innerHTML="welcome " + username;

function addRoom(){
  
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
}
function add123(){
console.log("123")
}
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name)
window.location="kwitter_page.html";
}
function logout(){
localStorage.removeItem("romm_name")
localStorage.removeItem("username")
window.location="index.html"
}
function Updatelike(message_id){
console.log("clicked on like button - "+message_id);
}

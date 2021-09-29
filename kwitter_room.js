var firebaseConfig = {
  apiKey: "AIzaSyCRKlZQfK9vz08P9q5rJBSp4FIF3gGKFXE",
  authDomain: "kwitter-eedb1.firebaseapp.com",
  databaseURL: "https://kwitter-eedb1-default-rtdb.firebaseio.com",
  projectId: "kwitter-eedb1",
  storageBucket: "kwitter-eedb1.appspot.com",
  messagingSenderId: "6516997834",
  appId: "1:6516997834:web:638956ccbdbadb84e97e33",
  measurementId: "G-V3QQLHE1PT"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function addroom()
  {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"; 
  }

  function getData()
  {
      firebase.database().ref("/").on('value' , function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot){childKey = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id = " + Room_names+" onclick = 'redirectToRoomName(this.id)' >#" + Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+= row;
          
      });});
    }
  getData();
  
  function redirectToRoomName(name)
  {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
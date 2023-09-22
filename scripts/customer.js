 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
 import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDq1fcL9GxuUw-JxCYNOHmK7IAx15FiD4g",
   authDomain: "ntpc-test.firebaseapp.com",
   databaseURL: "https://ntpc-test.firebaseio.com",
   projectId: "ntpc-test",
   storageBucket: "ntpc-test.appspot.com",
   messagingSenderId: "390567912142",
   appId: "1:390567912142:web:ebf686e301844d847d269f"
 };
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 //get database
 const db = getDatabase(app);

 var UUID = (function () {
   var self = {};
   var lut = []; for (var i = 0; i < 256; i++) { lut[i] = (i < 16 ? '0' : '') + (i).toString(16); }
   self.generate = function () {
     var d0 = Math.random() * 0xffffffff | 0;
     var d1 = Math.random() * 0xffffffff | 0;
     var d2 = Math.random() * 0xffffffff | 0;
     var d3 = Math.random() * 0xffffffff | 0;
     return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' +
       lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' +
       lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] +
       lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
   }
   return self;
 })();


 const sbtButton = document.querySelector('button#insertBtn');
 sbtButton.addEventListener('click', insertData);

 const val = UUID.generate();
 var uuidText = document.querySelector('input#uuid');
 uuidText.value = val;
 console.log(val);
 uuidText.disabled = true;

 const name = document.querySelector('input#name');

 function insertData() {
   //write data
   set(ref(db, 'Customers/' + val), {
     username: name.value

   });

   console.log("Data Inserted");

 }


 //read data of Students collection and document 426
 const studentsRef = ref(db, 'Students/' + "426/");
 onValue(studentsRef, (snapshot) => {
   const data = snapshot.val();
   console.log(data.fname);
 });









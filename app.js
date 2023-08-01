import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { collection, addDoc,getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyByE2tN_PsLz9wl8JS1wPUp9HRcwMw-0qI",
    authDomain: "first-352b3.firebaseapp.com",
    projectId: "first-352b3",
    storageBucket: "first-352b3.appspot.com",
    messagingSenderId: "627727661584",
    appId: "1:627727661584:web:3e87800afbdcf0fc972895",
    measurementId: "G-99CRDS20VC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

document.getElementById("second").addEventListener('click',async()=>{

    let Range=document.getElementById("range");
    let Product=document.getElementById("product");
    let Cost=document.getElementById("cost");
    let ul=document.getElementById("ul");
    
    try {
        const docRef = await addDoc(collection(db, "Customer"), {
            Range: Range.value,
            Product: Product.value,
            Cost: Cost.value,
        });
        console.log("Document written with ID: ", docRef.id);
    
        // id = docRef.id
    
    } catch (e) {
        alert("alert")
        console.error("Error adding document: ", e);
    }
    
    // console.log(id);
})
    
async function show(){
    const querySnapshot = await getDocs(collection(db, "Customer"));
    querySnapshot.forEach((doc) => {
        let total=doc.data().Range
        let cost=doc.data().Cost
        let calculate=total-cost;
        
        ul.innerHTML+= ` 
    <div class="show2">
        <h3> ${doc.data().Range} </h3>
        <h3> ${doc.data().Cost} </h3>
        <h3 class="po"> ${doc.data().Product} </h3>
        <h3 class="ca"> ${calculate} </h3>
        <div class="in">
        <i class="fa-solid fa-trash" onclick='Delete("${doc.id}")'></i>
        <i  class="fa-solid fa-pen-to-square" onclick='Edit("${doc.id}")'></i>
        </div>
    </div>`
    })
   

}

show()
// .then(()=>{
//     location.reload()
// })
// function reload(){
   
// }
// reload()







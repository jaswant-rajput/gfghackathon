// Import the functions you need from the SDKs you need
const { initializeApp } =  require("firebase/app");
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADQi7RaLWNdxvYh4puLb-zTyP8zHfMs2U",
  authDomain: "forum-58354.firebaseapp.com",
  databaseURL: "https://forum-58354-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "forum-58354",
  storageBucket: "forum-58354.appspot.com",
  messagingSenderId: "832130133306",
  appId: "1:832130133306:web:9889baaa31b06997a6f403"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

async function getQuestions(){
    const questionsCol = collection(db,"questions")
    const questionsSnapshot = await getDocs(questionsCol)
    const questionsList = questionsSnapshot.docs.map(doc => doc.data())
    return questionsList
}

async function main(){
    const questions = await getQuestions()
    console.log(questions)
}

main().catch(error => console.error(error))
const express = require("express");
const { collection, getDocs ,doc,getDoc, addDoc , deleteDoc} = require('firebase/firestore/lite');
const cors = require("cors");
const app = express();
const bcrypt=require('bcryptjs')

app.use(express.json());
app.use(cors());

const { student_collection, teacher_collection } = require("./mongo");
const { db } = require("./firebase")

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { username, password, entity } = req.body;
  try {
    if (entity == "student") {
      var check = await student_collection.findOne({ name: username });
    } else {
      var check = await teacher_collection.findOne({ name: username });
    }
    console.log(username,password)

    if (bcrypt.compareSync(password,check.password)) {
      console.log('reached')
      res.json("exists");
    } else {
      res.json("notexists");
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/signup", async (req, res) => {
  const { username, email, number, password, entity } = req.body;
  let salt=bcrypt.genSaltSync(10)
  let hash=bcrypt.hashSync(password,salt)
  const data = {
    name: username,
    email: email,
    phone: number,
    password: hash,
  };



  

  try {
    if (entity == "student") {
      var check = await student_collection.findOne({ name: username });
      
    } else {
      var check = await teacher_collection.findOne({ name: username });
      console.log(check)
    }

    if (check) {
      res.json("exists");
    } else {
      res.json("notexists");
      if (entity == "student") {
        await student_collection.insertMany([data]);
      } else {
        await teacher_collection.insertMany([data]);
      }
      console.log("Data entered");
    }
  } catch (e) {
    console.log(e);
  }
});


// Forum
const questionsCol = collection(db,"questions")


async function getQuestions(){
  const questionsSnapshot = await getDocs(questionsCol)
  const questionsList = questionsSnapshot.docs.map(doc => {
    return {id:doc.id,...doc.data()}
  })  
  return questionsList
}


async function getDocumentById(id){
  const docRef = doc(db, "questions", id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data()
  return data 
}

async function getAnswersById(id){
  const parentDocRef = doc(db, 'questions', id);

  // Get a reference to the subcollection
  const subcollectionRef = collection(parentDocRef, 'answers');
  
  // Get the documents in the subcollection
 
  try {
    const querySnapshot = await getDocs(subcollectionRef);
    const posts = [];

    querySnapshot.forEach((docSnapshot) => {
      const post = docSnapshot.data();
      posts.push(post);
    });

    
    return posts;
  } catch (error) {
    console.error('Error getting posts:', error);
  } 
}

async function addQuestion(data){
  addDoc(questionsCol,data).then(()=>{
    console.log("doc added")
    return true
  })
  .catch((error)=>{
    console.log(error)
    return false
  })
}

async function deleteQuestion(id){
  await deleteDoc(doc(db,"questions",id))
}

async function insertCommentById(id,data){
  try {
    const parentRef = doc(db,"questions",id)
    const subcollectionRef = collection(parentRef,"answers")
    addDoc(subcollectionRef,data).then(()=>{
      
      return true
    }).catch((error)=>{
      console.error(error)
      return false
    })
  }catch(err){
    console.error(err)
  }
}

app.get("/forum",async (req,res) => {
  try {
    const questions = await getQuestions()
    
    res.json(questions)
  } catch(err){
    console.error("Error retreiving questions",err)
    res.status(500).send("Internal server error")
  } 
})

app.get("/forum/:id",async(req,res)=>{
  try {
    const question = await getDocumentById(req.params.id)
    const answers = await getAnswersById(req.params.id)
    
    res.json({
      "question":question,
      "answers":answers
    })
  }
  catch(err){
    console.error("Error retrieving the forum",err)
    res.status(500).send("Internal server error")
  }
})

app.delete("/forum/:id",async(req,res)=>{
  try {
    await deleteQuestion(req.params.id)
    res.json({
      data : {
        "status":"success"
      }
    })
  }catch(err){
    console.error("Error deleting the question ,",err)
    res.status(500).send("Internal server error")
  }
})

app.post("/forum/createForum",async(req,res)=>{
  const flag = addQuestion(req.body)
  if (flag){
    res.json({status:"success"})
  }
  else {
    res.json({status:"fail"})
  }
})

app.post("/forum/:id/comments/insertComment",async(req,res)=>{

  const flag = insertCommentById(req.params.id,req.body)
  if(flag){
    res.json({status:"success"})
  }
  else {
    res.json({status:"fail"})
  }
})


let questionsData;
(async ()=>{
  questionsData = await getQuestions()
  
  app.listen(8000, () => {
    console.log("port connected");
  });
})()  

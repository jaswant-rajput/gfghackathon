const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt=require('bcryptjs')

app.use(express.json());
app.use(cors());

const { student_collection, teacher_collection } = require("./mongo");

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

app.listen(8000, () => {
  console.log("port connected");
});
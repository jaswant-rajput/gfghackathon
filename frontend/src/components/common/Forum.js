import React from 'react'
import "./index.css"
import ListOfForums from './forumComponents/ListOfForums'
function Forum() {

  // In Work 
  // const [questions,setQuestions] = React.useState([])

  // React.useEffect(()=>{
  //   const fetchData = async () =>{
  //       try {
  //         const response = await fetch("http://localhost:8000/forum");
  //         if(!response.ok){
  //           throw new Error(`Http error! Status: ${response.status}`)
  //         }
  //         const data = await response.json()
  //         setQuestions(data)
  //       }
  //       catch(err){
  //         console.error(err)
  //       }
  //   }

  //   fetchData()
  // },[])

  // console.log(questions)  


  return (
    <>
      <div className='create-post'>
        <img src='' alt="user-logo"></img>
          <div class="form-group">
            <input type="text" placeholder="Search Community" />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>        
        <button>Create Post</button>
      </div>

      <ListOfForums />
    </>
  )
}

export default Forum
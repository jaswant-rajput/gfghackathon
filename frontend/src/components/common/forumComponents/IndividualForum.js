


import React from "react";
import { useParams,useNavigate } from "react-router-dom";

const IndividualForum = ({match})=>{
    
    const [forumData,setForumData] = React.useState({})
    const [forumAnswers,setForumAnswers] = React.useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    React.useState(()=>{
        const fetchData = async()=>{
            try {
                const response = await fetch(`http://localhost:8000/forum/${id}`);
                if(!response.ok){
                    throw new Error(`Http error! Status: ${response.status}`)
                  }
                const data = await response.json()
                setForumData(data.question)
                setForumAnswers(data.answers)
                
            }catch(err){
                console.error(err)
            }
        }
        fetchData()
    },[])

    

    const handleDelete = async(id) => {
        try {
           const url = `http://localhost:8000/forum/${id}`
           const options = {
            method:"DELETE",
            headers: {
              "Content-type":"application/json"
            }
          }
          await fetch(url,options).then((response)=>{
            console.log(response)
            if (response.ok){
              console.log("Deleted")
              navigate("/forum")
            }
            else {
              console.error("Error ",response.statusText)
            }
          })
        }catch(err){
          console.error(err)
        }
      }
    

    console.log(forumAnswers)
    const answersEl = forumAnswers.map((data,index)=>{
      return <>
              <h1>{index+1} {data.answer}</h1>
              <br/>
              </>
    })
    return(
        <>
        <h1>Title : {forumData.title}</h1>
        <h1>Username : {forumData.username}</h1>
        <h1>Views : {forumData.views}</h1>
        <h1>comments : {forumData.comments}</h1>
        <button onClick={()=>handleDelete(id)}>Delete Post</button>
        
        <h1>Answers : </h1>
        {
          answersEl
        }

        <label for="answer">Add reply</label>
        <textarea type="text" id="answer"></textarea>
        <button>Submit reply</button>
        </>
    )
}

export default IndividualForum
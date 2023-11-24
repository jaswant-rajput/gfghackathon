

import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../index.css"

function ListOfForums() {

  
  const [questions,setQuestions] = React.useState([])
  const navigate = useNavigate()


  React.useEffect(()=>{
    const fetchData = async () =>{
        try {
          const response = await fetch("http://localhost:8000/forum");
          if(!response.ok){
            throw new Error(`Http error! Status: ${response.status}`)
          }
          const data = await response.json()
          setQuestions(data)
        }
        catch(err){
          console.error(err)
        }
    }

    fetchData()
  },[])

  
  const handleClick = (id) => {
    navigate(`/forum/${id}`);
  };


  return (
    <>
      {
        questions.map((question)=> (
          <div key={question.id} className='post' onClick={()=>handleClick(question.id)}>
          <img src="/bitcoin.jfif" alt="post-img"></img>
          <div className='post-content'>
            <h1>{question.title}</h1>
            <div className='tags'>
              <span>Finance</span>
              <span>Bitcoin</span>
              <span>Crypto</span>
            </div>
            <div className='post-footer'>
              <img alt="user-logo"></img>
              <p className='post-footer-username'>{question.username}</p>
              <p className='post-footer-stats'>3 weeks ago</p>
              <p className='post-footer-stats'>{question.views} Views</p>
              <p className='post-footer-stats'>{question.likes} Likes</p>
              <p>{question.comments} comments</p>
              
            </div>
          </div>
          <img alt='favourite' src=''></img>
        </div>
        ))
      }
    </>
  )
}

export default ListOfForums
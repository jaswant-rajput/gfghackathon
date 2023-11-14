import React from 'react'
import "./index.css"
import axios from "axios"
function Forum() {

  // In Work 
  const [questions,setQuestions] = React.useState([])

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

{
  //not working
}
{/* 
      {
        questions.map((question)=> (
          <div className='post'>
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
 */}
      <div className='post'>
        <img src="/bitcoin.jfif" alt="post-img"></img>
        <div className='post-content'>
          <h1>Blockchain developer best practices on innovation chain</h1>
          <div className='tags'>
            <span>Finance</span>
            <span>Bitcoin</span>
            <span>Crypto</span>
          </div>
          <div className='post-footer'>
            <img alt="user-logo"></img>
            <p className='post-footer-username'>Pavel Gvay</p>
            <p className='post-footer-stats'>3 weeks ago</p>
            <p className='post-footer-stats'>651,324 Views</p>
            <p className='post-footer-stats'>366,545 Likes</p>
            <p>56 comments</p>
          </div>
        </div>
        <img alt='favourite' src=''></img>
      </div>

      <div className='post'>
        <img src="/bitcoin.jfif" alt="post-img"></img>
        <div className='post-content'>
          <h1>Blockchain developer best practices on innovation chain</h1>
          <div className='tags'>
            <span>Finance</span>
            <span>Bitcoin</span>
            <span>Crypto</span>
          </div>
          <div className='post-footer'>
            <img alt="user-logo"></img>
            <p className='post-footer-username'>Pavel Gvay</p>
            <p className='post-footer-stats'>3 weeks ago</p>
            <p className='post-footer-stats'>651,324 Views</p>
            <p className='post-footer-stats'>366,545 Likes</p>
            <p>56 comments</p>
          </div>
        </div>
        <img alt='favourite' src=''></img>
      </div>

      
      <div className='post'>
        <img src="/bitcoin.jfif" alt="post-img"></img>
        <div className='post-content'>
          <h1>Blockchain developer best practices on innovation chain</h1>
          <div className='tags'>
            <span>Finance</span>
            <span>Bitcoin</span>
            <span>Crypto</span>
          </div>
          <div className='post-footer'>
            <img alt="user-logo"></img>
            <p className='post-footer-username'>Pavel Gvay</p>
            <p className='post-footer-stats'>3 weeks ago</p>
            <p className='post-footer-stats'>651,324 Views</p>
            <p className='post-footer-stats'>366,545 Likes</p>
            <p>56 comments</p>
          </div>
        </div>
        <img alt='favourite' src=''></img>
      </div>

      

    </>
  )
}

export default Forum
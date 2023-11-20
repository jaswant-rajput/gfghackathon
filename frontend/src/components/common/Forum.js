import React from 'react'
import "./index.css"
import ListOfForums from './forumComponents/ListOfForums'

import { useNavigate } from 'react-router-dom'

function Forum() {

  const navigate = useNavigate()

  function handleCreateForumClick(){
    navigate("/forum/createForum")
  }

  return (
    <>
      <div className='create-post'>
        <img src='' alt="user-logo"></img>
          <div class="form-group">
            <input type="text" placeholder="Search Community" />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>        
        <button onClick={handleCreateForumClick}>Create Post</button>
      </div>

      <ListOfForums />
    </>
  )
}

export default Forum
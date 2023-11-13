import React from 'react'
import "./index.css"

function Forum() {
  return (
    <>
      <div className='create-post'>
        <img src='' alt="user-logo"></img>
        <div className='create-p-container'>
          <p>Lets share whats going on your mind...</p>
        </div>
        <button>Create Post</button>
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
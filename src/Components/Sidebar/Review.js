import axios from 'axios'
import React from 'react'

function Review({ post }) {
  
  function handleDelete (e){
    
    console.log(post.id)

    axios.delete(`http://localhost:9292/reviews/${post.id}`,
    )
  }
  

  return (
    <div className=''>
      <button onClick={handleDelete} key={post.id} >{post.name} --- {post.user_review}</button>
    </div>
  )
}

export default Review
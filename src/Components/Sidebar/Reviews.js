import React,{useState, useEffect}from 'react'
import axios from 'axios'
import Review from './Review'

function Reviews() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:9292/reviews')
    .then(res => {
      console.log(res)
      setPosts(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])



  return (
    <div className='contents'>
      <h2>Reviews</h2>
      <li >
        {
          posts.map(post => <Review post={post} /> )
        }
      </li>
    </div>
  )
}


export default Reviews
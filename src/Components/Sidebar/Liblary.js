import React,{useState}from 'react'
import axios from 'axios'

function Liblary(){
  const url = "http://localhost:9292/reviews"
  const [data, setData] = useState({
    name: "",
    user_review: "",
  })

  function submit(e){
    e.preventDefault();
    axios.post(url,{
      name: data.name,
      user_review: data.user_review
    })
    .then(res =>{
      console.log(res.data)
    })
  }

  function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }


  return (
    <div className="review">
      <h2>Reviews</h2>
      <form onSubmit={(e)=> submit(e)}>
        <input onChange={(e)=>handle(e)} id="name" value={data.name} place holder="name" type="text"></input>
        <input onChange={(e)=>handle(e)} id="user_review" value={data.user_review} place holder="user_review" type="text"></input>
        <button>Submit</button>
      </form>
      <div>
        <h4 className='H4'>user reviews</h4>
        {Object.keys(data).map((key)=>{
          return(
            <ul>
              <ol><span className='Keys'>{key}</span>: {data[key]}</ol>
            </ul>
          )
        })}
      </div>
    </div>
  )
}

export default Liblary
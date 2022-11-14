import { useState } from 'react'
function Like() {
  const [inputs, setInputs] = useState([]);
  // const handleChange = (event) => {
  //     const name = event.target.name;
  //     const value = event.target.value;
  //     setInputs([...inputs, value])
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("Your review has been recorded");
    let newInputs = [...inputs, event.target.review.value]
    setInputs(newInputs)
    event.target.reset()
    alert("You have successfully logged in");
  }
  return (
    <div classname='container'>
      <form onSubmit={handleSubmit}>
        <label>Fullname:
          <input
            type="text"
            name="fullname"
          // value={inputs.username || ""}
          // onChange={handleChange}
          />
        </label><br />
        <label>Username:
          <input
            type="text"
            name="username"
          // value={inputs.username || ""}
          // onChange={handleChange}
          />
        </label><br />
        <label>Email:
          <input
            type="text"
            name="username"
          // value={inputs.username || ""}
          // onChange={handleChange}
          />
        </label><br />
        <label>Song genre:
          <input
            type="text"
            name="review"
          // value={inputs.review || ""}
          // onChange={handleChange}
          />
        </label><br />
        <button type="submit">Login</button>
      </form> <br />
    </div>
  )
}
export default Like;
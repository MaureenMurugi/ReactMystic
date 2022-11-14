import React from 'react'
import {  FaHome, FaHeart, FaGithub, FaComment } from "react-icons/fa";
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className="side">
      <Link to= '/reviewform' >Reviews <FaGithub /></Link>
      <Link to= '/home'>Home <FaHome/></Link>
      <Link to= '/login'>Log in <FaHeart/></Link>
      <Link to= '/reviews'>User Reviews <FaComment/></Link>

     </div>
  )
}

export default SideBar
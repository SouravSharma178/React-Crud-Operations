import React, { useEffect } from 'react'
import { useState } from "react";

const AddPerson = ({children,setPersonProp,editableVideo,processUpdate}) => {
const [video,setVideo] = useState({
  id:1,
  age: 30,
  name:"",
  job:""
})
function handleSubmit(e){
  e.preventDefault();
  if(editableVideo){
    processUpdate(video)
  } else{
    setPersonProp(video);
  }
  setVideo({
    id:1,
    age: 30,
    name:"",
    job:""
  })
}
function handleChange(e){
    setVideo({...video,[e.target.name]:e.target.value})
}

useEffect(()=>{
  if(editableVideo){
    setVideo(editableVideo)
  } else{
    setVideo({
      id:1,
      age: 30,
      name:"",
      job:""
    })
  }
},[editableVideo])

return (
    <div>
    <form>
    <input type="text" name="name" placeholder='title' onChange={handleChange}
    value={video.name}/>
    <input type="text" name="job" placeholder='title' onChange={handleChange}
    value={video.job}/>
    <button onClick={handleSubmit}>{editableVideo?"Edit":"Add"}</button>
    </form>
    </div>
  )
}

export default AddPerson

import React from 'react'

const Profile = ({id,name,age,job,deleteVideo,updateVideo}) => {
  return (
    <div>
    <h1>{id}{name}{age}{job}</h1>
    <button onClick={()=>deleteVideo(id)}>Delete</button>
    <button onClick={()=>updateVideo(id)}>Update</button>
    </div>
  )
}

export default Profile

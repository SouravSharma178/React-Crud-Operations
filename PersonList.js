import React from 'react'
import Profile from "./Profile"

const PersonList = ({persons,deleteVideo,updateVideo}) => {
  return (
    <div>
      {persons.map((person) => {
        return (
          <div key={Math.random()}>
            <Profile
              key={Math.random()}
              id={person.id}
              name={person.name}
              age={person.age}
              job={person.job}
              deleteVideo={deleteVideo}
              updateVideo={updateVideo}
            ></Profile>
          </div>
        );
      })}
    </div>
  )
}

export default PersonList

import "./App.css";
import mainObject from "./Components/data";
import { useState } from "react";
import AddPerson from "./Components/AddPerson";
import PersonList from "./Components/PersonList"

function App() {
  const [persons, setPersons] = useState(mainObject);
  const [editableVideo, setEditableVideo] = useState(null);

  function newPerson(value){
    setPersons([
      ...persons,{...value,id:5,age:40}
    ])
  }
function deleteVideo(id){
    console.log(id)
    setPersons(persons.filter(person=>person.id !== id))
}
function updateVideo(id){
    const obj = persons.findIndex(person=>person.id==id)
    setEditableVideo(persons[obj])
}

function processUpdate(value){
  const index = persons.findIndex(person=>person.id==value.id)
  const newPersons = [...persons];
  newPersons.splice(index,1,value)
  setPersons([...newPersons])
}

return (
<div>
<AddPerson setPersonProp={(value)=>newPerson(value)} editableVideo={editableVideo} processUpdate={processUpdate}>Add</AddPerson>
<PersonList persons={persons} deleteVideo={deleteVideo} updateVideo={updateVideo}></PersonList>
</div>
);
}

export default App;

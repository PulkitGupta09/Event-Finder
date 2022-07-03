import React,{useContext,useState} from 'react'
import eventContext from "../Context/events/EventContext"


const AddEvent = () => {
    const context = useContext(eventContext);
    const {addEvent} = context;
    const [event, setEvent] = useState({title:"",description:"", date: "",location:""})
    const handleClick = (e)=>{
      e.preventDefault();
      addEvent(event.title,event.description,event.date,event.location); 

    }
    const onChange = (e)=>{
        setEvent({...event,[e.target.name]:[e.target.value]})
    }
  return (
    <div className = "container my-3">
    <h2>Add a Event</h2>
    <form>
<div className="mb-3">
  <label htmlFor="title" className="form-label">Title</label>
  <input type="text" className="form-control" id="title" name = "title" aria-describedby="emailHelp" onChange = {onChange}/>
</div>
<div className="mb-3">
  <label htmlFor="description" className="form-label">Description</label>
  <input type="text" className="form-control" id="description"  name="description" onChange = {onChange}/>
</div>
<div className="mb-3">
  <label htmlFor="location" className="form-label">Location</label>
  <input type="text" className="form-control" id="location"  name="location" onChange = {onChange}/>
</div>
<div className="mb-3">
  <label htmlFor="date" className="form-label">Date</label>
  <input type="date" className="form-control" id="date"  name="date" onChange = {onChange}/>
</div>
<button type="submit" className="btn btn-primary" onClick={handleClick}>Add Event</button>
</form>

</div>
  )
}

export default AddEvent
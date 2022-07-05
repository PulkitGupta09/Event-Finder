import React,{useContext,useRef,useState} from 'react'
import EventItem from "./EventItem"
import AddEvent from './AddEvent';
import eventContext from "../Context/events/EventContext"

const Events = () => {
    const context = useContext(eventContext);
    const {events,editEvent} = context;
    const ref = useRef(null);
    const refClose = useRef(null);
    const [event, setEvent] = useState({etitle:"",edescription:"", edate: "",elocation:""})
    // 
   const updateEvent = (currentEvent)=>{
   ref.current.click(); 
   setEvent({id: currentEvent.id,etitle: currentEvent.title,edescription: currentEvent.description, edate: currentEvent.date,elocation: currentEvent.location});
  }
  const handleClick = (e)=>{
    e.preventDefault();
    editEvent(event.id,event.etitle,event.edescription,event.elocation,event.edate);
    refClose.current.click();

  }
  const onChange = (e)=>{
      setEvent({...event,[e.target.name]:[e.target.value]})
  }
  return (
    <>
    <AddEvent/>
<button type="button" ref = {ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Event</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
<div className="mb-3">
  <label htmlFor="title" className="form-label">Title</label>
  <input type="text" className="form-control" id="etitle" name = "etitle" value = {event.etitle} aria-describedby="emailHelp" onChange = {onChange}/>
</div>
<div className="mb-3">
  <label htmlFor="description" className="form-label">Description</label>
  <input type="text" className="form-control" id="edescription" value = {event.edescription}  name="edescription" onChange = {onChange}/>
</div>
<div className="mb-3">
  <label htmlFor="location" className="form-label">Location</label>
  <input type="text" className="form-control" id="elocation" value = {event.elocation}  name="elocation" onChange = {onChange}/>
</div>
<div className="mb-3">
  <label htmlFor="date" className="form-label">Date</label>
  <input type="date" className="form-control" id="edate" value = {event.edate}  name="edate" onChange = {onChange}/>
</div>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" ref = {refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick = {handleClick} className="btn btn-primary">Update Event</button>
      </div>
    </div>
  </div>
</div>
    <div className = "row my-3"> 
      <h2>Your Events</h2>
      {events.map((event)=>{
        return <EventItem key = {event.id} updateEvent = {updateEvent} event = {event} />
      })}
    </div>
    </>    
  )
}

export default Events
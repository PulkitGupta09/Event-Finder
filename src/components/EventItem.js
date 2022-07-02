import React,{useContext} from 'react'
import eventContext from "../Context/events/EventContext"

const EventItem = (props) => {
  const context = useContext(eventContext);
  const {deleteEvent} = context;
  const {event} = props;
  return (
    <div className = "col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{event.title}</h5>
          <p className="card-text">
            {event.description}
          </p> 
          <button className = "mx-2" onClick = {()=>{deleteEvent(event.id)}}>d</button>
          <button className = "mx-2">e</button>  
          {/* <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}} ></i> */}
          {/* <i className="fa-solid fa-pen-to-square mx-2"></i> */}
        </div>
      </div>
    </div>
  )
}

export default EventItem
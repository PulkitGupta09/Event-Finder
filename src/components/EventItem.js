import React,{useContext} from 'react'
import eventContext from "../Context/events/EventContext"

const EventItem = (props) => {
  const context = useContext(eventContext);
  const {deleteEvent} = context;
  const {event,updateEvent} = props;
  return (
    <div className = "col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title fw-semibold">{event.title}</h5>
          <p className="card-text">
            {event.description}
          </p> 
          <p className="card-text text-success">
            Event Date: {event.date}
          </p> 
          <p className="card-text text-danger text-secondary">
            {event.location}
          </p> 
          <i className="fa-solid fa-trash mx-3" onClick = {()=>{deleteEvent(event.id)}}></i>
          <i className="fa-solid fa-pen-to-square mx-2" onClick = {()=>{updateEvent(event)}}></i>
        </div>
      </div>
    </div>
  )
}

export default EventItem
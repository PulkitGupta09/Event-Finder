import React,{useContext} from 'react'
import EventItem from "./EventItem"
import AddEvent from './AddEvent';
import eventContext from "../Context/events/EventContext"

const Notes = () => {
    const context = useContext(eventContext);
    const {events} = context;
  return (
    <>
    <AddEvent/>
    <div className = "row my-3"> 
      <h2>Your Events</h2>
      {events.map((event)=>{
        return <EventItem event = {event} />
      })}
    </div>
    </>    
  )
}

export default Notes
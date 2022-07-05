import React,{useState,useContext} from 'react'
import EventItem from "./EventItem"
import eventContext from "../Context/events/EventContext"

const SearchEvent = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const context = useContext(eventContext);
    const {events} = context;
  return (
    <>
    <div className="row my-3">
        <form className="d-flex text-center" role="search">
        <input className="form-control me-2" type="search" placeholder="Enter to search event" onChange={(event)=>{setSearchTerm(event.target.value)}} aria-label="Search Events"/>
      </form>
       {events.filter((val)=>{
        // if(searchTerm === ""){
        //     return val
        // }
        // else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
        //     return val
        // }
        return (val.title.toLowerCase().includes(searchTerm.toLowerCase()));
      }).map((val)=>{
        return (
                <EventItem event = {val} />
        )
      })}
    </div>

    </>
  )
}

export default SearchEvent
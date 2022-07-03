import React from "react";
import eventContext from "./EventContext";
import { useState } from "react";

const EventState = (props)=>{
   const eventInitial = [
    {
        "id": "We Meditation",
        "name": "We Meditation",
        "title": "ONLINE : Free Meditation course - Jaipur",
        "location": "Jaipur,Rajasthan",
        "description": "Looking for peace, balance, joy, overcome stress, transform and meet other seekers? Welcome to free guided 'Sahaja Yoga' online meditation classefafdfs that help you achieve meditation benefits in quick and easy steps and discover its healing power. No prior experience needed. These classes are designed to provide experience of an in-person interactive session.",  
        "url": "https://www.eventbrite.com/e/online-free-meditation-course-jaipur-experience-the-peace-balance-tickets-196900082447?aff=ebdssbcitybrowse",
        "urlToImage": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F172483359%2F250110139773%2F1%2Foriginal.20210826-144848?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C12%2C1200%2C600&s=da909f39527410a2a3679a268500bdfe",
        "date": "2021-08-26"
      },
      {
        "id": "Arjun Suhass",
        "name": "Arjun Suhass",
        "title": "Musical Concert 2022 - Himesh Suhass Concert",
        "location":"Jaipur,Rajasthan",
        "description": "Our organizer Arjun Suhass organized a music Concert at 912, 21 Inder Prakash Building, Barakhamba Road, and our Special guest singer would be Himesh Suhass. Himesh is a versatile singer, actor and music composer of Indian origin. Suhass started his career in 2002 and has since sung many romantic hits. His recent singles include Lift Kara De, Saari Aawaz and Dhoop.",  
        "url": "https://www.eventbrite.com/e/musical-concert-2022-himesh-suhass-concert-tickets-359380285107?aff=ebdssbcitybrowse",
        "urlToImage": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F298516579%2F986674157143%2F1%2Foriginal.20220607-111922?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=d73408ca3039dd0e0d890dfa8b41ebce",
        "date": "2021-09-26"
      },
      {
        "id": "Chaiyana",
        "name": "Chaiyana",
        "title": "Summer Lovin' | Complete Negroni & Extra Dirty Cardamom Chai Coffee Class",
        "location": "Jaipur,Rajasthan",
        "description": "Date night isn’t complete without a sweet ending. We're using strawberries to make a creamy scratch-made ice cream and serving it alongside buttery, crunchy shortbread cookies with an earl grey drizzle. This dessert is a little bit sweet, a little bit salty and a 100% delicious.",  
        "url": "https://www.eventbrite.com/e/summer-lovin-complete-negroni-extra-dirty-cardamom-chai-coffee-class-tickets-235032487497?aff=ebdssbcategorybrowse",
        "urlToImage": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F212721949%2F564004206347%2F1%2Foriginal.20220114-220544?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C1338%2C8008%2C4004&s=318c46a4129a376f3cc62a81474882a9",
        "date": "2021-07-27"
      },
        {
          "id": "Cooking Raw",
          "name": "Cooking Raw",
          "title": "Strawberry Ice Cream & Earl Grey Shortbread Cookies Couples Cooking Class",
          "description": "Date night isn’t complete without a sweet ending. We're using strawberries to make a creamy scratch-made ice cream and serving it alongside buttery, crunchy shortbread cookies with an earl grey drizzle. This dessert is a little bit sweet, a little bit salty and a 100% delicious.", 
          "location": "Jaipur,Rajasthan", 
          "url": "https://www.eventbrite.com/e/strawberry-ice-cream-earl-grey-shortbread-cookies-couples-cooking-class-tickets-232418027577?aff=ebdssbcategorybrowse",
          "urlToImage": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F207214129%2F564004206347%2F1%2Foriginal.20220104-145918?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C92%2C1920%2C960&s=89d3bfd1c333e18714bc06ab2d0dc66b",
          "date": "2021-07-27"
        }
    ]
    const [events, setEvents] = useState(eventInitial)
    
    // Add a Event
    const addEvent = (title,description,date,location)=>{
        const event = {
            "id": "Cofsoking Raw",
            "name": "Cookifsng Raw",
            "title": title,
            "description": description,  
            "location": location,
            "url": "https://www.eventbrite.com/e/strawberry-ice-cream-earl-grey-shortbread-cookies-couples-cooking-class-tickets-232418027577?aff=ebdssbcategorybrowse",
            "urlToImage": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F207214129%2F564004206347%2F1%2Foriginal.20220104-145918?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C92%2C1920%2C960&s=89d3bfd1c333e18714bc06ab2d0dc66b",
            "date": date
          };
        setEvents(events.concat(event));
    }

    // Delete a Event
    const deleteEvent = (id)=>{
        const newEvents = events.filter((eventa)=>{return eventa.id!==id});
        setEvents(newEvents);
    }

    // Edit a Event
    const editEvent = ()=>{
        
    }

    return (
        <eventContext.Provider value = {{events,addEvent,deleteEvent,editEvent}}>
            {props.children}
        </eventContext.Provider> 
    )
}

export default EventState;
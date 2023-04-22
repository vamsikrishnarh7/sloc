// import React from "react"
import EventsComponent from "../components/EventsComponent";

// import PropTypes from 'prop-types'
let EventsPage = () => {
    return(
        <>
        
        <div className="events-wrapper">
            <h1 >Events</h1> 
            <EventsComponent 
                eventTitle = "Blog Challenge"
                eventDescription = "Write a blog sharing about your entire journey though tech, how you get started, what struggles did you overcome, and you can win some amazing techincal books this month!"
                imgSrc = "./images/blogging challenge.png"
                eventEntryFee = "No entry fee"
                eventTimings = "9:00 AM"
                eventDate = "May 3, 2023"
            />
        </div>
        </>
    )
}

export default EventsPage;

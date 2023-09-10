// import React from "react"
import EventsComponent from "../components/EventsComponent";

// import PropTypes from 'prop-types'
let EventsPage = () => {
    return(
        <>
        
        <div className="events-wrapper">
            <h1 >Upcoming events you shouldn't miss</h1> 
            <EventsComponent />
        </div>
        </>
    )
}

export default EventsPage;

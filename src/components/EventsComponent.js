let EventsComponent = (params) => {
    return (
        <>
        <div className="events-container">
                <img src={params.imgSrc} alt=""/>
                <div className="events-info">
                    <h2>{params.eventTitle}</h2>
                    <p>{params.eventDescription}</p>
                    <h4>{params.eventEntryFee}</h4>
                    <div className="timings">
                        <div className="time">
                            <img src="icons/clock.png" alt=""/>
                            <p>{params.eventTimings}</p>
                        </div>
                        <div className="date">
                            <img src="icons/calendar.png" alt=""/>
                            <p>{params.eventDate}</p>
                        </div>
                    </div>
                </div>
                <button className="register-btn">Register</button>
            </div>
        </>
    )
}

export default EventsComponent;
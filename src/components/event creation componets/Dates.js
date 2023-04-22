let Dates = () => {
    return(
        <>
        <div className="date-wrapper">
        <label>Registration Start</label>
        <input type="date" />
        <label>Registration End</label>
        <input type="date"/>
        <label>Event Begins</label>
        <input type="date"/>
        <label>Event Ends</label>
        <input type="date"/>

        <label>Event Timings</label>
        <input type="time"/>

        </div>
        </>
    )
}

export default Dates;

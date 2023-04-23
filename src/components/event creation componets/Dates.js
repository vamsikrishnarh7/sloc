import { useState } from "react";


const initialState = {
    regStartDate: "",
    regEndDate: "",
    eventStarts: "",
    eventEnds: "",
    eventStartTime: "",
  };
let Dates = () => {
    const [data, setData] = useState(initialState);
    const { regStartDate,regEndDate,eventStarts,eventEnds,eventStartTime } = data;
    
    let handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data)
    }

  return (
    <>
      <div className="date-wrapper">
        <label>Registration Start</label>
        <input type="date" name="regStartDate" onChange={handleChange} required/>
        <label>Registration End</label>
        <input type="date" name="regEndDate" onChange={handleChange} required />
        <label>Event Begins</label>
        <input type="date" name="eventStarts" onChange={handleChange} required />
        <label>Event Ends</label>
        <input type="date" name="eventEnds" onChange={handleChange} required />

        <label>Event Timings</label>
        <input type="time" name="eventStartTime" onChange={handleChange} required />
      </div>
    </>
  );
};

export default Dates;

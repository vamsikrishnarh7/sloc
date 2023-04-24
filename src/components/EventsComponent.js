import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { Link } from "react-router-dom";

let EventsComponent = (params) => {

    const [data,setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          let list = []
          const querySnapShot = await getDocs(collection(db,"events"));
          querySnapShot.forEach((doc) => {
            
              list.push({id:doc.id,...doc.data()});
              // console.log(updateDb);
              // console.log(updateDb.img)
          });
          setData(list);
        }
        fetchData();
      });
      
    return (
        <>
        {data.map(ele => {
            return(
                <div className="events-container">
                <img src={ele.img} alt=""/>
                <div className="events-info">
                    <h2>{ele.eventName}</h2>
                    <p>{ele.aboutEvent}</p>
                    <h4>Entry fee : {ele.entryFee}</h4>
                    <div className="timings">
                        <div className="time">
                            <img src="icons/clock.png" alt=""/>
                            <p>{ele.eventStartTime}</p>
                        </div>
                        <div className="date">
                            <img src="icons/calendar.png" alt=""/>
                            <p>{ele.eventStarts}</p>
                        </div>
                    </div>
                    <Link to={ele.regLink} ><button className="register-btn">Register</button></Link>
                </div>
                
            </div>
            )
        })}
        
        </>
    )
}

export default EventsComponent;
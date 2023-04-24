import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let Preview = () => {
    const [eventId, setEventId] = useState(localStorage.getItem("currentEventId") || null);
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
      const fetchData = async () => {
        let list = []
        const querySnapShot = await getDocs(collection(db,"events"));
        querySnapShot.forEach((doc) => {
          if(doc.id === eventId){
            list.push({id:eventId,...doc.data()});
            // console.log(updateDb);
            // console.log(updateDb.img)
          }
        });
        setData(list);
      }
      fetchData();
    },[])
    console.log(data);
    let handlePost = () => {
        localStorage.setItem('currentEventId',null);
        navigate("/events");
    }
    return(
        <>
        {data.map(ele => {
            return(
                <div className="preview-container">
                <img src={data[0].img}/>
                <h1>{data[0].eventName[0].toUpperCase()+data[0].eventName.slice(1)}</h1>
                <button onClick={handlePost}>Post</button>
            </div> 
            )
        })}       
        </>
    )
}
export default Preview;
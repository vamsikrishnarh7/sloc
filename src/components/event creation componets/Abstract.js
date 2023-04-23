import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../../firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
const initialState = {
  eventName: "",
  aboutEvent: "",
  entryFee: "",
  teamSize: "",
  regLink: "",
};

let Abstract = () => {
  const [data, setData] = useState(initialState);
  const { eventName, aboutEvent, entryFee, teamSize, regLink } = data;
  const [poster, setPoster] = useState(null);
  const [progress, setProgress] = useState(null);
  const [submit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const uploadPoster = () => {
      const name = new Date().getTime + poster.name;
      const storageRef = ref(storage, poster.name);
      const uploadTask = uploadBytesResumable(storageRef, poster);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("upload is paused");
              break;
            case "running":
              console.log("upload is running");
              break;

            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    poster && uploadPoster();
  }, [poster]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  let validate = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    await addDoc(collection(db, "events"), {
      ...data,
      timestamp : serverTimestamp()
    });
    navigate("/organize-event/dates");   
  };

  return (
    <>
      <div>
        <form onSubmit={validate} className="abstract-wrapper">
          <label>Name of the event</label>
          <input
            type="text"
            placeholder="Eg. Blogging Challenge"
            name="eventName"
            value={eventName}
            onChange={handleChange}
            required
            autoFocus
          />
          <label>About Event</label>
          <textarea
            rows="4"
            name="aboutEvent"
            value={aboutEvent}
            onChange={handleChange}
          ></textarea>
          <label>Entry fee</label>
          <input
            type="text"
            name="entryFee"
            value={entryFee}
            onChange={handleChange}
            required
          />
          <label>Max Team size</label>
          <input
            type="text"
            placeholder="Eg. 4"
            name="teamSize"
            value={teamSize}
            onChange={handleChange}
          />
          <label htmlFor="images" class="poster-upload-container">
            <h4>Upload Event poster</h4>
            <input
              type="file"
              id="images"
              accept="image/*"
              name="imageUpload"
              required
              onChange={(e) => setPoster(e.target.files[0])}
            />
          </label>
          <label>Registration form Link</label>
          <input
            type="text"
            name="regLink"
            value={regLink}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            disabled={progress != null && progress < 100}
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
};
export default Abstract;

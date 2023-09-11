import React from "react";
import StudentPost from '../components/StudentPost'

const TechClub = () => {
  return (
    <div className="posts-container">
      <h1>Tech Enthusiasts Unite!</h1>
      <StudentPost
        userProfile="14.avif"
        userName="Yashwanth Reddy"
        userDesc="Computer Science"
        postMessage="Hey I am begginer. Can anyone help me how to deploy socket.io"
      />
      <StudentPost
        userProfile="19.avif"
        userName="Vaasavii"
        userDesc="Computer Science"
        postMessage="Does anyone know why tailwind intellisense dowsn't work by itself in vite+react??"
      />
      <StudentPost
        userProfile="11.avif"
        userName="Siri"
        userDesc="ECE"
        postMessage="Hey, Siri here! Let's connect on Linkedin"
        regLink = "https://www.linkedin.com/in/durgavamsikrishna"
      />

    </div>
  );
};

export default TechClub;

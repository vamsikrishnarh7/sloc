import React from 'react'
import StudentPost from '../components/StudentPost'

const Placements = () => {
  return (
    <>
      <div className='posts-container'>
      <h1>Placements club</h1>
        <StudentPost 
            userProfile= '1.avif'
            userName = 'Madhan'
            userDesc = 'Computer Science'
            postTitle = '#interviewtips: I used to feel nervous before interviews'
            postMessage = "I used to feel extremely nervous before giving interview. To overcome that here are the few things..."
            
        />
        <StudentPost 
            userProfile= '14.avif'
            userName = 'Yashwanth Reddy'
            userDesc = 'Computer Science'
            postTitle = 'Accenture Innovation Challenge 2023'
            postMessage = 'Registration Deadline: 15 Sep 23 and Team Size: 1-4 Members.'
            regLink = 'https://unstop.com/competitions/accenture-innovation-challenge-2023-accenture-710576'

        />
        <StudentPost 
            userProfile= '6.avif'
            userName = 'Varun Kumar'
            userDesc = 'Computer Science'
            postTitle = 'Tata 1mg Hiring alert!!!'
            postMessage = "Role: SDE-1 Front-end and Back-end, Skills: ReactJS, CSS, HTML, JavaScript and Location: Bangalore/Gurgaon"
            regLink = "https://www.tata.com/careers/jobs/jobdetails?jobId=a64f836a03fe49&company=Tata%201mg&jobTitle=Software%20Development%20Engineer-%201%20-%20Frontend%20Engineer%20%7C%20Bangalore%2FGurgaon&s=08"

        />

        <img src='./icons/create.png' alt='create-a-post' className='create-post'/>
      </div>
    </>
  )
}

export default Placements

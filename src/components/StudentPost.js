import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const StudentPost = (props) => {
    const [upvote,setUpvote] = useState(0);
    const [downvote,setDownVote] = useState(0);
  return (
    <>
        <div className='post'>
            <div className='post-header'>
                <img src={"./user-avatars/"+props.userProfile} />
                <div >
                    <h4>{props.userName}</h4>
                    <p>{props.userDesc}</p>
                </div>
            </div>
            <div className='post-body'>
                <h4>{props.postTitle}</h4>
                <p>{props.postMessage}</p>
                {props.regLink && <Link to={props.regLink} ><button className='reg-link'>View</button></Link>}
            </div>
            <div className='post-footer'>
                <div className='post-vote'>
                    <img src='./icons/upvote.png' alt='upvote' onClick={()=>{setUpvote(upvote+1)}}/>
                    <p>{upvote}</p>
                </div>
                <div className='post-vote'>
                    <img src='./icons/downvote.png' alt='upvote' onClick={()=>{setDownVote(downvote+1)}}/>
                    <p>{downvote}</p>
                </div>

                <img src='./icons/chat.png' />
                
            </div>
        </div>      
    </>
  )
}

export default StudentPost

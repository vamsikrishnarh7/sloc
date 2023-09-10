import React from 'react'

const ClubComponent = () => {
  return (
    <div className='club-container'>
        <div className='club club1'>
            <div className='club-header'>
                <img src='./icons/clubs/coding.png' alt='president' />  
                <div className='club-info'>
                    <div>
                        <h3>Tech Club</h3>
                        <p>500 members </p>
                    </div>
                    <button>View</button> 
                </div>
            </div>    
            <p>Searching for your tech stack? From GitHub to GUIs this club is where it all happens</p>         
        </div> 
        <div className='club club2'>
            <div className='club-header'>
                <img src='./icons/clubs/placements.png' alt='president' />  
                <div className='club-info'>
                    <div>
                        <h3>Placements Club</h3>
                        <p>500 members</p>
                    </div>
                    <button>View</button> 
                </div>
            </div>    
            <p>Talks about Resume building, interview experiences and prep and more</p>         
        </div> 
        <div className='club club3'>
            <div className='club-header'>
                <img src='./icons/clubs/startup.png' alt='president' />  
                <div className='club-info'>
                    <div>
                        <h3>Startup Club</h3>
                        <p>500 members</p>
                    </div>
                    <button>View</button> 
                </div>
            </div>    
            <p>This is your place to newtwork and grow with fellow hustlers</p>         
        </div> 
        <div className='club club4'>
            <div className='club-header'>
                <img src='./icons/clubs/placements.png' alt='president' />  
                <div className='club-info'>
                    <div>
                        <h3>DSA Club</h3>
                        <p>500 members</p>
                    </div>
                    <button>View</button> 
                </div>
            </div>    
            <p>Discuss your appraoches and algorithms and find your DSA homie</p>         
        </div> 
        
    </div>
  )
}

export default ClubComponent

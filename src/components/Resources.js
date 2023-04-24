import React from 'react'
import Resource from './Resource';

const Resources = () => {
  return (
    <>
        <div className='resource-container'>
        <h1>Resources</h1>
        <div className='resource-wrapper'>
        <Resource 
          imgSrc='./images/resources-page/abdul-dsa.jpg'
          title="Intro to Algorithms by Adbul Bari"
        />
        <Resource 
          imgSrc='./images/resources-page/kunal git thumbnail.jpg'
          title="Git & GitHub Tutorial"
        />
        <Resource 
          imgSrc='./images/resources-page/tuf.jpg'
          title="DSA Playlist"
        />
        <Resource 
          imgSrc='./images/resources-page/harry-js.jpg'
          title="JavaScript Tutorial"
        />
        <Resource 
          imgSrc='./images/resources-page/harry-react.jpg'
          title="ReactJs Tutorial"
        />
        <Resource 
          imgSrc='./images/resources-page/kunal git thumbnail.jpg'
          title="Git & GitHub Tutorial"
        />
        <Resource 
          imgSrc='./images/resources-page/kunal git thumbnail.jpg'
          title="Git & GitHub Tutorial"
        />
        </div>
        </div>
    </>
  )
}

export default Resources;

import React from "react";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <>
      <div className="resource-container">
        <h1>Unlock your potential</h1>
        <div className="resource-wrapper">
          {/* abdul bari */}
          <div className="resource resource1">
            <img src="./images/resources-page/abdul-dsa.jpg" />
            <h2>Intro to Algorithms</h2>
            <p>by Abdul Bari</p>
            <Link to="https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O" target="_blank">
              <button>Explore</button>
            </Link>
          </div>
          {/* git and GitHub tutorial */}
          <div className="resource resource2">
            <img src="./images/resources-page/kunal git thumbnail.jpg" />
            <h2>Git and Github Tutorial</h2>
            <p>by Kunal Kushwaha</p>
            <Link to="https://youtu.be/apGV9Kg7ics?feature=shared" target="_blank">
              <button>Explore</button>
            </Link>
          </div>
          {/* DSA by striver */}
          <div className="resource resource3">
            <img src="./images/resources-page/tuf.jpg" />
            <h2>DSA</h2>
            <p>by Striver</p>
            <Link to="https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz" target="_blank">
              <button>Explore</button>
            </Link>
          </div>
          {/* Dynamic programming by Aditya varma */}
          <div className="resource resource4">
            <img src="./images/resources-page/dp-by-aditya.jpg" />
            <h2>Dynamic Programming</h2>
            <p>by Aditya Verma</p>
            <Link to="https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go" target="_blank">
              <button>Explore</button>
            </Link>
          </div>
          {/* leetcode */}
          <div className="resource resource5">
            <img src="./images/resources-page/neetcode.jpg" />
            <h2>NeetCode</h2>
            <p>LeetCode solutions</p>
            <Link to="https://www.youtube.com/@NeetCode/videos" target="_blank">
              <button>Explore</button>
            </Link>
          </div>
          {/* dbms by love babbar */}
          <div className="resource resource6">
            <img src="./images/resources-page/lovebabbar-dbms.jpg" />
            <h2>DBMS for Placements</h2>
            <p>by Love Babbar</p>
            <Link to="https://www.youtube.com/playlist?list=PLDzeHZWIZsTpukecmA2p5rhHM14bl2dHU" target="_blank">
              <button>Explore</button>
            </Link>
          </div>          
        </div>
      </div>
    </>
  );
};

export default Resources;

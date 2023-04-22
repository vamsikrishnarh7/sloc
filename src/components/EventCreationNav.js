import { Link, Outlet } from "react-router-dom";

let EventCreationNav = () => {
  return (
    <>
      <div className="event-create-navbar">
      
        <ul>
          <Link to='/organize-event/abstract' className="navlinks"><li className="nav-items">Abstract</li></Link>
          <Link to='/organize-event/dates' className="navlinks"><li className="nav-items">Dates</li></Link>
          <Link to='/organize-event/preview' className="navlinks"><li className="nav-items">Preview</li></Link>
        </ul>
      </div>
      
      <Outlet />
    </>
  );
};

export default EventCreationNav;

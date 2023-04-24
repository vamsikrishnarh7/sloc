import { Link, Outlet } from "react-router-dom";

let EventCreationNav = () => {
  return (
    <>
      <div className="event-create-navbar">
      
        <ul>
          <Link to='/sloc/organize-event/abstract' className="navlinks"><li className="nav-items">Abstract</li></Link>
          <Link to='/sloc/organize-event/preview' className="navlinks"><li className="nav-items">Preview</li></Link>
        </ul>
      </div>
      
      <Outlet />
    </>
  );
};

export default EventCreationNav;

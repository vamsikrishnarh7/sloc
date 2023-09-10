import { Link } from "react-router-dom";

let Nav = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="container navbar-container">
            <div className="nav-left">
              <img src="./images/SLOC logo.png" alt="" className="site-logo" />
              <span className="site-title">SLOC</span>
            </div>

            <div className="nav-right">
              <ul className="nav-items-list">
                <li className="nav-items nav-item1">
                  <Link to="/" className="navlinks">
                    Home
                  </Link>
                </li>
                <li className="nav-items nav-item1">
                  <Link to="/resources" className="navlinks">
                    Resources
                  </Link>
                </li>
                <li className="nav-items nav-item2">
                  <Link to="/events" className="navlinks">
                    Events
                  </Link>
                </li>
                <li className="nav-items nav-item3">
                  <Link to="/clubs" className="navlinks">
                    Clubs
                  </Link>
                </li>
                <li className="nav-items nav-item3">
                  <Link to="/about" className="navlinks">
                    About us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="menu-container">
            <label className="hamburger-menu">
              <input type="checkbox" />
            </label>
            <aside className="sidebar">
              <nav>
                <ul className="nav-items-list">
                  <li className="nav-items nav-item1">
                    <Link to="/" className="navlinks">
                      Home
                    </Link>
                  </li>
                  <li className="nav-items nav-item1">
                    <Link to="/resources" className="navlinks">
                      Resources
                    </Link>
                  </li>
                  <li className="nav-items nav-item2">
                    <Link to="/events" className="navlinks">
                      Events
                    </Link>
                  </li>
                  <li className="nav-items nav-item3">
                    <Link to="/clubs" className="navlinks">
                      Clubs
                    </Link>
                  </li>
                  <li className="nav-items nav-item3">
                    <Link to="/about" className="navlinks">
                      About us
                    </Link>
                  </li>
                </ul>
              </nav>
            </aside>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Nav;

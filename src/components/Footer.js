let Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="site-info">
            <img src="./images/SLOC logo.png" alt="" />
            <p className="footer-site-title">SLOC</p>
          </div>
          <div className="community">
            <h3>Community</h3>
            <ul>
              <li>Events</li>
              <li>Blogs</li>
              <li>Resources</li>
            </ul>
          </div>
          <div className="socials">
            <h3>Socials</h3>
            <ul>
              <li>Discord</li>
              <li>Linkedin</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="contact-us">
            <h3>Get in touch</h3>
            <p>Email: getinfo@sloc.in</p>
          </div>
        </div>
        <div className="copy-rights-section">
          <p>©️Copyright SLOC 2023.</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
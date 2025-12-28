import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Vijay News Paper Agency</h3>
            <p>Your trusted news partner since day one</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Phone: 8793274753</p>
            <p>Payment: Google Pay</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#bills">Bills</a>
            <a href="#about">About</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Vijay News Paper Agency. All rights reserved.</p>
          <p className="footer-tagline">|| ओम साई राम ||</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


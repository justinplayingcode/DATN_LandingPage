import { IoLocationSharp, IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {

  const getInTouch = () => {
    return (
      <>
        <div className="footer-wrapper-section-header">GET IN TOUCH</div>
        <div className="footer-wrapper-section-content">
          <div className="footer-wrapper-section-text">
            No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor
          </div>
          <div className="footer-wrapper-section-list-item">
            <div>
              <IoLocationSharp/>
            </div>
            <div>
              <IoMail/>
            </div>
            <div>
              <FaPhoneAlt/>
            </div>
          </div>
        </div>
      </>
    )
  }

  const quickLinks = () => {
    return (
      <>
        <div className="footer-wrapper-section-header">QUICK LINKS</div>
        <div>
          
        </div>
      </>
    )
  }

  const popularLinks = () => {
    return (
      <>
        <div className="footer-wrapper-section-header">POPULAR LINKS</div>
        <div>
          
        </div>
      </>
    )
  }

  const newsLetter = () => {
    return (
      <>
        <div className="footer-wrapper-section-header">NEWSLETTER</div>
        <div>
          
        </div>
      </>
    )
  }

  return (  
    <div id="footer">
      <div className="footer-wrapper">
        <div className="footer-wrapper-section">{getInTouch()}</div>
        <div className="footer-wrapper-section">{quickLinks()}</div>
        <div className="footer-wrapper-section">{popularLinks()}</div>
        <div className="footer-wrapper-section">{newsLetter()}</div>
      </div>
    </div>
  );
}

export default Footer;
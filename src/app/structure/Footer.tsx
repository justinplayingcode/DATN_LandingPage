import { IoLocationSharp, IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  const getInTouch = () => {
    return (
      <>
        <div className="footer-wrapper-section-header">Liên hệ với chúng tôi</div>
        <div className="footer-wrapper-section-content">
          <div className="footer-wrapper-section-list-items">
            <div className="footer-wrapper-section-list-item">
              <IoLocationSharp/>
              <span>Hai Ba Trung District, Hanoi, Vietnam</span>
            </div>
            <div className="footer-wrapper-section-list-item">
              <IoMail/>
              <span>startlight.hospital@gov.vn</span>
            </div>
            <div className="footer-wrapper-section-list-item">
              <FaPhoneAlt/>
              <span>0987654321</span>
            </div>
          </div>
        </div>
      </>
    )
  }

  const newsLetter = () => {
    return (
      <>
        <div className="footer-wrapper-section-header">Đăng ký để nhận thông tin</div>
        <div className="footer-wrapper-section-newsletter">
          <div className="footer-wrapper-section-newsletter-input">
            <input placeholder="Email của bạn..."/>
            <div className="footer-wrapper-section-newsletter-input-btn">Đăng ký</div>
          </div>
        </div>
        <div className="footer-wrapper-section-newsletter">
          <div className="footer-wrapper-section-newsletter-title">Theo dõi chúng tôi</div>
          <div className="footer-wrapper-section-newsletter-icons">
            <span className="footer-wrapper-section-newsletter-icon">
              <TwitterIcon/>
            </span>
            <span className="footer-wrapper-section-newsletter-icon">
              <FacebookIcon/>
            </span>
            <span className="footer-wrapper-section-newsletter-icon">
              <LinkedInIcon/>
            </span>
            <span className="footer-wrapper-section-newsletter-icon">
              <InstagramIcon/>
            </span>
          </div>
        </div>
      </>
    )
  }

  return (  
    <div id="footer">
      <div className="footer-wrapper">
        <div className="footer-wrapper-section">{getInTouch()}</div>
        <div className="footer-wrapper-section">{newsLetter()}</div>
      </div>
    </div>
  );
}

export default Footer;
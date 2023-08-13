import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../asset/img/logo-removebg-preview.png";
import { FaArrowRightToBracket } from "react-icons/fa6";

interface INavigateItem {
  index: number;
  key: string;
  title: string;
  isActive: boolean;
}

const getSectionUrl = () => {
  const defaultUrl ='http://localhost:5173/#/'
  const lng = defaultUrl.length;
  const currentUrl = window.location.href;
  return currentUrl.substring(lng)
}

const initNavigateItems = (url: string): INavigateItem[] => {
  return [
    {
      index: 0,
      key: "/home",
      title: "Trang chủ",
      isActive: url === "home",
    },
    {
      index: 1,
      key: "/about",
      title: "Về chúng tôi",
      isActive: url === "about",
    },
    {
      index: 2,
      key: "/service",
      title: "Dịch vụ",
      isActive: url === "service",
    },
    {
      index: 3,
      key: "/news",
      title: "Tin tức",
      isActive: url === "news",
    },
    {
      index: 4,
      key: "/contact",
      title: "Liên hệ",
      isActive: url === "contact"
    }
  ]
} 
function Header() {
  const navigate = useNavigate();
  const [navigateItems, setNavigateItems] = useState<INavigateItem[]>(initNavigateItems(getSectionUrl()))

  const handleClick = (key: string, _index: number) => {
    const newNavigate = navigateItems.slice().map(( item, index) => {
      return {
        ...item,
        isActive: _index !== index ? false : true
      }
    })
    navigate(key);
    setNavigateItems(newNavigate)
  }

  const getCurrentDateString = (): string => {
    const date = new Date();
    const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const monthNames = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
    const dayOfWeek = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${dayOfWeek}, ngày ${dayOfMonth} ${month} năm ${year}`;
}

  return (  
    <div id="main-header">
      <div className="header-time">
        <div className="header-time-wrapper">
          <div className="header-time-wrapper-section">
            {getCurrentDateString()}
            <p>Giờ làm việc: 7:30 - 17:00</p>
          </div>
          <div className="header-time-wrapper-section">
            <a href="https://msstarlight.netlify.app/" target="_blank">Hệ thống khám chữa bệnh <FaArrowRightToBracket/> </a>
          </div>
        </div>
      </div>
      <div className="header-wrapper">
        <div className="icon-header d-flex align-items-center justify-content-start">
          <img className="rounded" src={logo} style={{height: 180, objectFit: "cover" }} />
        </div>
        <div className="navigate-header">
          {
            navigateItems.map((item, index) => (
              <div 
                key={index} 
                className={`navigate-header-item ${item.isActive ? "active" : ""}`}
                onClick={() => handleClick(item.key, index)}
              >
                {item.title}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Header
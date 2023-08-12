import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  console.log(currentUrl.substring(lng));
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

  return (  
    <div id="main-header">
      <div className="header-wrapper">
        <div className="icon-header"></div>
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
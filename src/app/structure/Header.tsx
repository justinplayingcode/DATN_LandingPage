import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface INavigateItem {
  index: number;
  key: string;
  title: string;
  isActive: boolean
}

const initNavigateItems: INavigateItem[] = [
  {
    index: 0,
    key: "/",
    title: "Trang chủ",
    isActive: true
  },
  {
    index: 1,
    key: "/about",
    title: "Về chúng tôi",
    isActive: false
  },
  {
    index: 2,
    key: "/service",
    title: "Dịch vụ",
    isActive: false
  },
  {
    index: 3,
    key: "/news",
    title: "Tin tức",
    isActive: false
  },
  {
    index: 4,
    key: "/contact",
    title: "Liên hệ",
    isActive: false
  },
]
function Header() {
  const navigate = useNavigate();
  const [navigateItems, setNavigateItems] = useState<INavigateItem[]>(initNavigateItems);

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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface INavigateItem {
  key: string;
  title: string;
  isActive: boolean
}

const initNavigateItems: INavigateItem[] = [
  {
    key: "/",
    title: "Trang chủ",
    isActive: true
  },
  {
    key: "/about",
    title: "Về chúng tôi",
    isActive: false
  },
  {
    key: "/service",
    title: "Dịch vụ",
    isActive: false
  },
  {
    key: "/news",
    title: "Tin tức",
    isActive: false
  },
  {
    key: "/contact",
    title: "Liên hệ",
    isActive: false
  },
]
function Header() {
  const navigate = useNavigate();
  const [navigateItems, setNavigateItems] = useState<INavigateItem[]>(initNavigateItems);

  const handleClick = (item: INavigateItem) => {

    navigate(item.key)
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
                onClick={() => handleClick(item)}

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
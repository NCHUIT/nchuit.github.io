import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 這個組件會在路由變化時自動滾動到頁面頂部
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;

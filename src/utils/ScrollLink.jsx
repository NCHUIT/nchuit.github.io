import { Link, useLocation } from "react-router-dom";

// 自定義的 Link 組件，點擊時會滾動到頁面頂部
function ScrollLink({ to, children, className, onClick, ...props }) {
  const location = useLocation();
  const isSamePath = location.pathname === to;

  const handleClick = (e) => {
    // 如果是當前頁面的連結，則阻止默認行為並手動滾動到頂部
    if (isSamePath) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // 如果不是當前頁面，則正常導航，ScrollToTop 組件會處理滾動
      // 如果有傳入 onClick 函數，則執行它
      if (onClick) onClick(e);
    }
  };

  return (
    <Link to={to} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

export default ScrollLink;

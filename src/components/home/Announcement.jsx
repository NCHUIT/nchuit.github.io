import { Link } from "react-router-dom";
import "./Announcement.css";

const Announcement = () => {
  const announcementText1 = "📢【重要公告】社課延期一週！因應期中考，Arduino 自走車課程改為 11/11 起，量化交易 Bot 課程改為 12/9 起 ( 點我查看公告 )";
  const announcementText2 = " [Important Notice] Club classes have been postponed! The Arduino Car class will start on Nov 11, and the Quant Trading Bot class on Dec 9. (Click to view announcement)";
  const announce = announcementText1 + announcementText2
  return (
    <div className="announcement-banner bg-green-800 text-white shadow-lg">
      <div className="announcement-scroll-container">
        <a href="https://www.instagram.com/p/DQdzrcdkYW0/?img_index=1" className="announcement-text">
          {announce}
        </a>
        {/* <a href="https://www.instagram.com/p/DQdzrcdkYW0/?img_index=1" className="announcement-text">
          {announcementText2}
        </a> */}
      </div>
    </div>
  );
};

export default Announcement;
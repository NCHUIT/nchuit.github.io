// iconName 代表的是 src/components/widget/CourseIcon.jsx 的 iconName
// 可以自由在 CourseIcon.jsx 中添加新的 icon

import { getImagePath } from "../utils/path.js";

const CoursesData = [
  {
    id: "alg",
    title: "程競式體驗",
    image: getImagePath("images/courses/alg.png"),
    description: [
      "想要系統性提升程式能力，卻不知道從何下手嗎？🤔準備好來一場深度的「程競式體驗」了嗎？💻✨",
      "中興資訊社（NCHUIT）下學期準備了最扎實的【程式競賽入門課程】！不管你是想提升解題實力，還是對 CPE、ICPC 等知名競賽充滿好奇，這裡就是你的最佳新手村⚔️",
    ],
    info: [
      "課程日期：3 月 12 日至 5 月 21 日（週四）",
      "課程時間：19:00 ~ 21:00（模擬賽：18:30 ~ 21:30)",
      "課程地點：中興大學雲平樓，教室請關注最新公告",
      "課程講師：賴威廷",
      [
        "相關連結：",
        {
          text: "Instagram 貼文",
          link: "https://www.instagram.com/p/DVYAgG8EQ9O/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ%3D%3D",
        },
      ],
    ],
    cardItems: [
      "經典演算法",
      "CPE + ICPC 實戰模擬賽",
      "沉浸式還原賽場",
      "實力躍進",
    ],
    iconName: "ai",
    registrationLink: "",
    color: "#4CAF50",
  },
  
];

export default CoursesData;

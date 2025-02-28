// iconName 代表的是 src/components/widget/CourseIcon.jsx 的 iconName
import { getImagePath } from "../utils/path.js";

const coursesData = [
  {
    id: "python-ecommerce",
    title: "Python 全端智能電商實戰",
    image: getImagePath("images/courses/python-ecommerce.jpg"),
    description: [
      "這門課程將將帶你用 6 堂課深入學習 Python Flask 的網站開發全流程，由前端到後端、從資料庫設計到智慧客服，實作經驗一步到位！",
      [
        "這門課將會使用 ",
        { text: "Vue", link: "https://vuejs.org/" },
        " 來開發前端界面，並且使用 ",
        { text: "Python", link: "https://www.python.org/" },
        " 和 ",
        { text: "Flask", link: "https://flask.palletsprojects.com/" },
        " 來開發後端、AI 客服、商品推薦系統。",
      ],
    ],
    info: [
      "課程日期：3/6、3/20、4/24、5/8、5/22、6/5（週四）",
      "課程時間：19:00 ~ 21:00",
      "課程地點：中興大學雲平樓，教室請關注最新公告",
      "課程講師：王智弘",
      "課程費用：完全免費！",
      [
        "相關連結：",
        {
          text: "Instagram 貼文",
          link: "https://www.instagram.com/p/DGLaguyzeOO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
      ],
    ],
    cardItems: [
      "Vue 基礎商業商品網站架設",
      "Flask + Python 商品後端架設",
      "Flask + Python + MySQL + Redis 商品資料庫架設",
      "Flask + Python 商品推薦系統設計",
      "Flask + Python 商品 AI 客服設計",
      "GCP (Docker) 雲端網頁部署",
    ],
    iconName: "ai",
    registrationLink: "https://forms.gle/YrV1dRUjjr2k6Ngc7",
    color: "#4CAF50",
  },
  {
    id: "flutter-dev",
    title: "Flutter 初學開發實戰",
    image: getImagePath("images/courses/flutter-dev.jpg"),
    description: [
      [
        "想親手打造一款屬於自己的手機 App 嗎？這學期，資訊社精心規劃的主力課程將帶你從零開始，利用六堂課學會 ",
        { text: "Flutter", link: "https://flutter.dev/" },
        " App 開發的全流程！",
      ],
    ],
    info: [
      "課程日期：2/27、3/13、4/17、5/1、5/15、5/29（週四）",
      "課程時間：19:00 ~ 21:00",
      "課程地點：中興大學雲平樓，教室請關注最新公告",
      "課程講師：王珈源",
      "課程費用：完全免費！",
      [
        "相關連結：",
        {
          text: "Instagram 貼文",
          link: "https://www.instagram.com/p/DGLZqfMTg4g/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
      ],
    ],
    cardItems: [
      "Flutter 安裝 + 認識 Dart 語言",
      "Flutter 基礎元件",
      "App 資料存取/路由/非同步/生命週期",
      "App 實作：MP3 音樂播放軟體",
    ],
    iconName: "mobile",
    registrationLink: "https://forms.gle/nAGejYUisgA8KfV18",
    color: "#2196F3",
  },
  {
    id: "cross-domain-learning",
    title: "跨域興學習",
    image: getImagePath("images/courses/cross-domain-learning.jpg"),
    description: [
      "這是資訊社這學期的其中一個主力課程，包含了 3D 列印、雷射雕刻等有趣活動！",
      "本課程旨在透過實務操作與知識分享，提升學員在多元領域的技能與素養，包括數位工具應用、科技實務操作及資訊安全意識。本課程內容豐富且循序漸進，依主題分為以下幾類：",
      "3D 列印：課程將引導同學認識 3D 列印的基本原理與應用，並透過實際操作，完成簡單的 3D 模型設計與列印。課程目的是讓學員了解此技術在製造與創意設計領域的廣泛應用。",
      "雷射雕刻：同學將學習如何使用相關設備，並設計屬於自己的雕刻作品。",
      "資訊安全與數位防護：資安宣導課程與數位詐騙防治課程將帶領學員深入了解網路安全的重要性，認識常見的詐騙手法與防護措施，增強在數位環境中的安全意識與應變能力。",
      "應用 PRO 級：PRO 級應用培訓包含多元服務性活動，將透過實際的校內服務與團體活動，增強學員的社會責任感與團隊合作能力，並結合學習與實踐，為校內創造價值。",
      "如果是有缺統合學分的同學，不妨可以考慮考慮看看！參加這個跨域興學習的同學可以獲得 1 統合學分！",
    ],
    info: [
      "課程日期：3/12 ~ 6/4（每週三）",
      "課程時間：18:30 ~ 20:30/21:30（每週 2 或 3 小時）",
      "課程地點：中興大學雲平樓，教室請關注最新公告",
      "課程講師（3D 列印/雷射雕刻）：社團幹部",
      "課程講師（資安宣導/數位詐騙防治）：外聘講師",
      "適合對象：所有有興趣/有缺統合學分的同學",
      "課程費用：完全免費，材料費由學校經費支出",
      [
        "相關連結：",
        {
          text: "Instagram 貼文",
          link: "https://www.instagram.com/p/DGLjFXvTOzu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
      ],
    ],
    cardItems: [
      "統合 1 學分",
      "3D 列印",
      "雷射雕刻",
      "資安宣導",
      "數位詐騙防治",
      "3D/軟體/硬體應用 Pro 級",
    ],
    iconName: "lightbulb",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSc5693oO1uVm1QTmPYqB2VGOpE_R6PvxcBzVHQxxg1cTKVxRg/viewform?usp=dialog",
    color: "#FF9800",
  },
];

export default coursesData;

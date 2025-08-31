// iconName 代表的是 src/components/widget/CourseIcon.jsx 的 iconName
// 可以自由在 CourseIcon.jsx 中添加新的 icon

import { getImagePath } from "../utils/path.js";

const coursesData = [
  {
    id: "auto-car",
    title: "Arduino 自走車設計",
    image: getImagePath("images/courses/coming_soon.jpg"),
    description: [
      [
        "將引導社員從零開始，親手打造一台具備基本自走功能的 ",
        { text: "Arduino", link: "https://www.arduino.cc/" },
        " 智慧小車。課程內容涵蓋基礎電子電路、",
        {
          text: "Arduino 程式設計",
          link: "https://docs.arduino.cc/built-in-examples/",
        },
        "、感測器應用與馬達控制等核心知識。學員將透過一系列的實作，循序漸進地完成一台可以避開障礙物與沿著黑線循跡的自走車，從中學習解決問題的能力，並體驗 Maker 動手做的樂趣。",
      ],
    ],
    info: [
      "課程日期：(待定中) (週四）",
      "課程時間：19:00 ~ 21:00",
      "課程地點：中興大學雲平樓，教室請關注最新公告",
      "課程講師：蔡允維(教學/Arduino秘術召喚機器人召喚圖論生成電神)",
      "課程費用：完全免費！",
      [
        "相關連結：",
        {
          text: "Instagram 貼文",
          link: "",
        },
      ],
    ],
    cardItems: [
      "從零開始組裝",
      "小車動起來 - 馬達控制",
      "循規蹈矩 - 黑線循跡",
      "賦予小車感知能力-超音波避障",
    ],
    iconName: "car",
    registrationLink: "",
    color: "#4CAF50",
  },
  {
    id: "vibe-coding",
    title: "Vibe coding - 適合所有人的 Coding 方式",
    image: getImagePath("images/courses/coming_soon.jpg"),
    description: [
      "本課程將引導學員從零開始，認識程式設計的世界。課程內容包含基礎程式概念、變數、迴圈、函式等核心知識，並透過 Vibe coding，讓你用最直覺的方式寫出程式碼。你將學會如何運用程式碼控制硬體設備，創造出獨一無二的互動裝置，體驗動手做的樂趣，並將你的創意付諸實現。",
    ],
    info: [
      "課程日期：(待定中)（週二）",
      "課程時間：19:00 ~ 21:00",
      "課程地點：中興大學雲平樓，教室請關注最新公告",
      "課程講師：侯竣奇(副社長/Pytree量子樹幹神經網路快速建構GoPython電神)",
      "課程費用：完全免費！",
      [
        "相關連結：",
        {
          text: "Instagram 貼文",
          link: "",
        },
      ],
    ],
    cardItems: [
      "從零開始認識程式語言",
      "寫出第一行程式碼",
      "打造屬於你的創意作品",
      "用程式碼賦予作品生命",
    ],
    iconName: "code",
    registrationLink: "",
    color: "#2196F3",
  },
  {
    id: "machine-learning",
    title: "機器學習",
    image: getImagePath("images/courses/coming_soon.jpg"),
    description: [
      "本課程將引導學員從零開始，探索機器學習的奧秘。課程內容涵蓋基礎數學、資料分析、監督式學習、非監督式學習等核心概念，並透過實際案例，帶領你了解如何應用機器學習模型，解決現實生活中的各種問題。你將學會如何訓練模型，讓電腦從龐大數據中自動學習並找出規律，進而做出預測或分類。不論是想了解人工智慧的運作原理，或是對數據分析感興趣，都能在本課程中獲得寶貴的知識與實戰經驗。",
    ],
    info: [
      "課程日期：(待定中)（週二）",
      "課程時間：19:00 ~ 21:00",
      "課程地點：中興大學雲平樓，教室請關注最新公告",
      "課程講師：賴威廷(教學/線段樹暴走裝弱高手隱藏無窮迴圈實力電神)",
      "課程費用：完全免費!",
      [
        "相關連結：",
        {
          text: "Instagram 貼文",
          link: "",
        },
      ],
    ],
    cardItems: [
      "讓電腦自己學習",
      "從數據中找出規律",
      "預測未來趨勢",
      "賦予機器解決問題的能力",
    ],
    iconName: "ai",
    registrationLink: "",
    color: "#FF9800",
  },
  {
    id: "commercial-bot",
    title: "量化交易 Bot",
    image: getImagePath("images/courses/coming_soon.jpg"),
    description: [
      "本課程將帶領學員進入量化交易的世界。你將學習如何運用數據分析與程式設計，將自己的交易策略自動化。課程內容涵蓋基礎交易概念、回測方法、風險管理以及 Bot 的實際建置。我們將探討如何從歷史數據中發掘可行的交易模式，並使用程式碼將這些模式轉換成能夠自動執行買賣決策的交易 Bot。透過本課程，你將學會如何打造一個專屬的自動化交易系統，有效管理交易風險，並體驗程式交易的獨特魅力。",
    ],
    info: [
      "課程日期：(待定中)（週二）",
      "課程時間：19:00 ~ 21:00",
      "課程地點：中興大學雲平樓，教室請關注最新公告",
      "課程講師：賴庭岳(社長/深度優先暗中捲完專案全知全能電神)",
      "課程費用：完全免費!",
      [
        "相關連結：",
        {
          text: "Instagram 貼文",
          link: "",
        },
      ],
    ],
    cardItems: [
      "認識自動化交易",
      "從數據中建立策略",
      "打造屬於你的交易 Bot",
      "讓 Bot 幫你執行交易",
    ],
    iconName: "chart",
    registrationLink: "",
    color: "#9500ffff",
  },
];

export default coursesData;

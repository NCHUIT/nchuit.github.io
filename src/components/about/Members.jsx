import { getImagePath } from "../../utils/path";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React from "react";

// 用於渲染包含連結的段落
const RichParagraph = ({ content }) => {
  // 如果內容是字串，直接渲染，處理換行符號
  if (typeof content === "string") {
    // 將字串中的 \n 分割成 Array，然後用 <br /> 連接
    const parts = content.split("\n");
    return (
      <p>
        {parts.map((part, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <br />}
            {part}
          </React.Fragment>
        ))}
      </p>
    );
  }

  // 如果內容是 Array（包含 text 和 link）
  if (Array.isArray(content)) {
    return (
      <p>
        {content.map((part, idx) => {
          // 如果是字串，直接渲染並處理換行符號
          if (typeof part === "string") {
            // 將字串中的 \n 分割成 Array，然後用 <br /> 連接
            const textParts = part.split("\n");
            return (
              <React.Fragment key={idx}>
                {textParts.map((textPart, textIdx) => (
                  <React.Fragment key={`${idx}-${textIdx}`}>
                    {textIdx > 0 && <br />}
                    {textPart}
                  </React.Fragment>
                ))}
              </React.Fragment>
            );
          }

          // 如果部分是 link，渲染為連結，處理換行符號
          if (part.link) {
            // 將連結文字中的 \n 分割成 Array，然後用 <br /> 連接
            const linkTextParts = part.text.split("\n");
            return (
              <React.Fragment key={idx}>
                {linkTextParts.map((textPart, textIdx) => (
                  <React.Fragment key={`${idx}-${textIdx}`}>
                    {textIdx > 0 && <br />}
                    <a
                      href={part.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {textPart}
                    </a>
                  </React.Fragment>
                ))}
              </React.Fragment>
            );
          }

          return null;
        })}
      </p>
    );
  }

  return null;
};

function Members() {
  // 幹部資料
  const members = [
    {
      id: 1,
      name: "賴庭岳",
      role: "社長",
      department: "電機資訊學院學士班",
      year: "大二",
      description: [
        "本社的靈魂人物，負責社團的日常運作與規劃。基本上是個與社團靈魂綁定的存在。",
        "程競和專案開發兼修，常用 C++/Python/JavaScript，也有做過物聯網專案。",
        "比你想像的還要電，但是因為太謙虛，事蹟被你知道的時候通常都已經捲完了。",
        [
          "Github：",
          { text: "TingYueLai", link: "https://github.com/TingYueLai" },
        ],
      ],
      image: getImagePath("images/members/tingyue.jpg"),
    },
    {
      id: 2,
      name: "侯竣奇",
      role: "副社長",
      department: "電機資訊學院學士班",
      year: "大二",
      description: [
        "雖然自稱 Golang 廚但一直用 Python 開發新專案。主要的工作是負責協助社長處理社團事務。",
        "有時候也會奴役 AI 幫自己寫網站，近期有疑似越來越愛用 Cursor 的跡象。",
        [
          "部落格：",
          { text: "Pytree's Blog\n", link: "https://blog.pytree.dev/" },
          "Youtube 頻道：",
          {
            text: "碼農交易所\n",
            link: "https://www.youtube.com/@codefarmers",
          },
          "Github：",
          {
            text: "coke5151",
            link: "https://github.com/coke5151",
          },
        ],
      ],
      image: getImagePath("images/members/junqi.webp"),
    },
    {
      id: 3,
      name: "曾崇恩",
      role: "總務",
      department: "生物產業機電工程學系",
      year: "大二",
      description: [
        ["他是我們的財政部長\n", "期末請客都靠他（X"],
        "因為請客實在太重要了我不敢亂寫，只好把介紹空著等他自己來補。",
      ],
      image: getImagePath("images/members/chongen.jpg"),
    },
    {
      id: 4,
      name: "賴威廷",
      role: "教學",
      department: "電機資訊學院學士班",
      year: "大二",
      description: [
        "演算法大佬，整天都在裝弱。口中盡是些「線段樹」、「最小生成樹」之類知乎者也的話。",
        "你真的可以看到他抱著一本很厚的演算法在啃，而且啃得很開心。",
        "負責規劃與執行社團教學活動，像是接洽及協助講師規劃課程。",
        ["Github：", { text: "eggeggwe", link: "https://github.com/eggeggwe" }],
      ],
      image: getImagePath("images/members/weiting.jpg"),
    },
    {
      id: 5,
      name: "蔡允維",
      role: "教學",
      department: "電機資訊學院學士班",
      year: "大二",
      description: [
        "雖然一直說要走電機，但是好像也很容易在程競比賽看見他的身影。",
        "擔任我們社團的 3D 列印講師，也常常打 Arduino 或機器人比賽。",
      ],
      image: getImagePath("images/members/yunwei.jpg"),
    },
    {
      id: 6,
      name: "王珈源",
      role: "網管",
      department: "電機資訊學院學士班",
      year: "大二",
      description: [
        [
          "擅長使用 ",
          { text: "Flutter", link: "https://flutter.dev/" },
          " 進行開發，不管是手機 App/電腦 Application 或是 Web 都是他的涉略範圍。",
        ],
        "除了是我們社團的網管，這學期也是 Flutter 課程的講師。雖然他總是說自己很弱，但其實私底下偷學了不少東西。",
        [
          "Github：",
          { text: "teddywang0824", link: "https://github.com/teddywang0824" },
        ],
      ],
      image: getImagePath("images/members/jiayuan.jpg"),
    },
    {
      id: 7,
      name: "鄭弘翊",
      role: "美宣",
      department: "電機資訊學院學士班",
      year: "大二",
      description: [
        "我們社團的美術擔當，你可以看到的海報大部分都是他做的，同時也會電繪及 Photoshop。",
        "Stable Diffusion 愛用者：身為「資訊」社的美宣，理所應當地很擅長結合 AI 生圖與修圖，極度高產地維持社團文宣圖的產出。",
        "除了平面設計，也疑似對 3D 建模、微處理機很感興趣。",
        [
          "Github：",
          { text: "undertaker4141", link: "https://github.com/undertaker4141" },
        ],
      ],
      image: getImagePath("images/members/hongyi.jpg"),
    },
    {
      id: 8,
      name: "鍾冠泓",
      role: "行銷",
      department: "電機資訊學院學士班",
      year: "大二",
      description: [
        "負責我們社團的行銷、Email 及宣傳文案，同時也擔任我們的剪輯師。",
        "職掌非常廣泛，其實常常會被我們抓去打輔助。比如講以不同的視角優化我們的上課方式及網站，可以說是最佳品管師。",
        [
          "Github：",
          { text: "chungkuanhung", link: "https://github.com/chungkuanhung/" },
        ],
      ],
      image: getImagePath("images/members/guanhong.jpg"),
    },
    {
      id: 9,
      name: "龔裕棠",
      role: "公關",
      department: "電機資訊學院學士班",
      year: "大二",
      description: [
        "負責處理 Facebook、Instagram 的貼文及訊息回覆。平常做事很低調。",
        "低調的人通常都是狠角色，所以我把簡介放在這邊等他自己來補！（已逃跑",
      ],
      image: getImagePath("images/members/yutang.jpg"),
    },
    {
      id: 10,
      name: "林丞佑",
      role: "小編",
      department: "電機資訊學院學士班",
      year: "大二",
      description: [
        "大家覺得一個社團的 Threads 小編需要具備什麼特質？想必是…",
        "究極活網！！！相信大家自然而然會從網路上認識他的。",
      ],
      image: getImagePath("images/members/chengyou.jpg"),
    },
  ];

  return (
    <section id="members" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">幹部介紹</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            認識我們的核心團隊成員，他們致力於推廣資訊科技並為社團的發展貢獻己力。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-10 mr-10">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-gray-50 rounded-lg shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col"
              style={{ minHeight: "450px", height: "auto" }}
            >
              <div
                className="flex items-center justify-center bg-gray-50 p-6"
                style={{
                  minHeight: "260px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LazyLoadImage
                  src={member.image}
                  alt={member.name}
                  effect="blur"
                  threshold={200}
                  className="rounded-lg"
                  wrapperClassName="flex items-center justify-center"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "85%",
                    maxHeight: "200px",
                    objectFit: "contain",
                    objectPosition: "center",
                    margin: "0 auto",
                  }}
                  onError={(e) => {
                    e.target.src = getImagePath(
                      "/images/member-placeholder.svg"
                    );
                  }}
                />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {member.role}
                  </span>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">
                    {member.department} | {member.year}
                  </p>
                </div>
                <div className="text-gray-600 space-y-3">
                  {Array.isArray(member.description) ? (
                    member.description.map((paragraph, index) => (
                      <div key={index}>
                        <RichParagraph content={paragraph} />
                      </div>
                    ))
                  ) : (
                    <RichParagraph content={member.description} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Members;

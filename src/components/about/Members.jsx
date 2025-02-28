import { getImagePath } from "../../utils/path";

function Members() {
  // 社員資料
  const members = [
    {
      id: 1,
      name: "賴庭岳",
      role: "社長",
      department: "電機資訊學院學士班",
      year: "大二",
      description: "電到不知道該寫哪個",
      image: getImagePath("/images/members/tingyue.svg"),
    },
    {
      id: 2,
      name: "侯竣奇",
      role: "副社長",
      department: "電機資訊學院學士班",
      year: "大二",
      description: "Python/Go",
      image: getImagePath("/images/members/junqi.webp"),
    },
    {
      id: 3,
      name: "曾崇恩",
      role: "總務",
      department: "電機資訊學院學士班",
      year: "大二",
      description: "超會管錢",
      image: getImagePath("/images/members/chongen.svg"),
    },
    {
      id: 4,
      name: "賴威廷",
      role: "教學",
      department: "電機資訊學院學士班",
      year: "大二",
      description: "整天抱著演算法在啃",
      image: getImagePath("/images/members/weiting.svg"),
    },
    {
      id: 5,
      name: "蔡允維",
      role: "教學",
      department: "電機資訊學院學士班",
      year: "大二",
      description: "整天抱著演算法在啃",
      image: getImagePath("/images/members/yunwei.svg"),
    },
    {
      id: 6,
      name: "王珈源",
      role: "網管",
      department: "電機資訊學院學士班",
      year: "大二",
      description: "網站及 App 開發",
      image: getImagePath("/images/members/jiayuan.svg"),
    },
    {
      id: 7,
      name: "鄭弘翊",
      role: "美宣",
      department: "電機資訊學院學士班",
      year: "大二",
      description: "平面設計",
      image: getImagePath("/images/members/hongyi.svg"),
    },
    {
      id: 8,
      name: "鍾冠泓",
      role: "行銷",
      department: "電機資訊學院學士班",
      year: "大二",
      description: "影音剪輯及文書處理",
      image: getImagePath("/images/members/guanhong.svg"),
    },
    {
      id: 9,
      name: "龔裕棠",
      role: "公關",
      department: "電機資訊學院學士班",
      year: "大二",
      description: "IG/FB 運營",
      image: getImagePath("/images/members/yutang.svg"),
    },
    {
      id: 10,
      name: "林丞佑",
      role: "小編",
      department: "電機資訊學院學士班",
      year: "大二",
      description: "Threads 運營",
      image: getImagePath("/images/members/chengyou.svg"),
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
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col"
              style={{ height: "420px" }}
            >
              <div
                className="overflow-hidden flex items-center justify-center bg-gray-50"
                style={{
                  aspectRatio: "1/1",
                  height: "250px",
                  padding: "15px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f9fafb",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      maxWidth: "90%",
                      maxHeight: "90%",
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    onError={(e) => {
                      e.target.src = getImagePath(
                        "/images/member-placeholder.svg"
                      );
                    }}
                  />
                </div>
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
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Members;

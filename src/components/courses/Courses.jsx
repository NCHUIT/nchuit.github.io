import GreenCheck from "../widget/green-check";

function Courses() {
  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            113-2 課程資訊
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            我們提供多元化的課程，橫跨軟硬體，從基礎到進階，滿足不同程度同學的需求。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 ml-10 mr-10">
          {/* 全端智能電商實戰 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl flex flex-col h-full">
            <div className="h-3 bg-green-500"></div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4 mx-auto">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
                Python 全端智能電商實戰
              </h3>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-center">
                  <GreenCheck />
                  <span className="text-gray-600">
                    Vue 基礎商業商品網站架設
                  </span>
                </li>
                <li className="flex items-center">
                  <GreenCheck />
                  <span className="text-gray-600">
                    Flask + Python 商品後端架設
                  </span>
                </li>
                <li className="flex items-center">
                  <GreenCheck />
                  <span className="text-gray-600">
                    Flast + Python + MySQL + Redis 商品資料庫架設
                  </span>
                </li>
                <li className="flex items-center">
                  <GreenCheck />
                  <span className="text-gray-600">
                    Flask + Python 商品推薦系統設計
                  </span>
                </li>
                <li className="flex items-center">
                  <GreenCheck />
                  <span className="text-gray-600">
                    Flask + Python 商品 AI 客服設計
                  </span>
                </li>
                <li className="flex items-center">
                  <GreenCheck />
                  <span className="text-gray-600">
                    GCP (Docker) 雲端網頁部署
                  </span>
                </li>
              </ul>
              <div className="text-center mt-auto">
                <a
                  href="https://www.instagram.com/p/DGLaguyzeOO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition cursor-pointer inline-block"
                >
                  課程詳情
                </a>
              </div>
            </div>
          </div>

          {/* Flutter 初學開發實戰 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl flex flex-col h-full">
            <div className="h-3 bg-green-500"></div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4 mx-auto">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
                Flutter 初學開發實戰
              </h3>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-center">
                  <GreenCheck />
                  <span className="text-gray-600">
                    Flutter 安裝 + 認識 Dart 語言
                  </span>
                </li>
                <li className="flex items-center">
                  <GreenCheck />
                  <span className="text-gray-600">Flutter 基礎元件</span>
                </li>
                <li className="flex items-center">
                  <GreenCheck />
                  <span className="text-gray-600">
                    App 資料存取/路由/非同步/生命週期
                  </span>
                </li>
                <li className="flex items-center">
                  <GreenCheck />
                  <span className="text-gray-600">
                    App 實作：MP3 音樂播放軟體
                  </span>
                </li>
              </ul>
              <div className="text-center mt-auto">
                <a
                  href="https://www.instagram.com/p/DGLZqfMTg4g/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition cursor-pointer inline-block"
                >
                  課程詳情
                </a>
              </div>
            </div>
          </div>

          {/* 跨域興學習 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl flex flex-col h-full">
            <div className="h-3 bg-green-500"></div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4 mx-auto">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
                跨域興學習
              </h3>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-center">
                  <GreenCheck />
                  <span className="text-gray-600">3D 列印</span>
                </li>
                <li className="flex items-center">
                  <GreenCheck />
                  <span className="text-gray-600">雷射雕刻</span>
                </li>
                <li className="flex items-center">
                  <GreenCheck />
                  <span className="text-gray-600">資安宣導</span>
                </li>
                <li className="flex items-center">
                  <GreenCheck />
                  <span className="text-gray-600">數位詐騙防治</span>
                </li>
                <li className="flex items-center">
                  <GreenCheck />
                  <span className="text-gray-600">3D/軟體/硬體應用 Pro 級</span>
                </li>
              </ul>
              <div className="text-center mt-auto">
                <a
                  href="https://www.instagram.com/p/DGLjFXvTOzu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition cursor-pointer inline-block"
                >
                  課程詳情
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;

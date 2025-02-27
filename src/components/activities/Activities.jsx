function Activities() {
  return (
    <section id="activities" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">活動紀錄</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            我們定期舉辦各種活動，包括技術工作坊、程式競賽、專題講座等，豐富社員的學習體驗。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl">
            <img
              src="/images/activity-1.jpg"
              alt="Python 工作坊"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  工作坊
                </span>
                <span className="text-gray-500 text-sm">2023/03/15</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Python 資料分析工作坊
              </h3>
              <p className="text-gray-600 mb-4">
                介紹 Python 在資料分析領域的應用，包括 Pandas、NumPy
                和資料視覺化工具的使用。
              </p>
              <div className="flex items-center text-green-600 font-medium">
                <span>查看詳情</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl">
            <img
              src="/images/activity-2.jpg"
              alt="網頁開發競賽"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  競賽
                </span>
                <span className="text-gray-500 text-sm">2023/05/20</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                網頁開發黑客松
              </h3>
              <p className="text-gray-600 mb-4">
                為期 24
                小時的網頁開發競賽，參賽者需要在限定時間內完成一個功能完整的網站。
              </p>
              <div className="flex items-center text-green-600 font-medium">
                <span>查看詳情</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl">
            <img
              src="/images/activity-3.jpg"
              alt="AI 講座"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  講座
                </span>
                <span className="text-gray-500 text-sm">2023/09/10</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                人工智慧與機器學習講座
              </h3>
              <p className="text-gray-600 mb-4">
                邀請業界專家分享 AI 和機器學習的最新發展趨勢及實際應用案例。
              </p>
              <div className="flex items-center text-green-600 font-medium">
                <span>查看詳情</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
            查看更多活動
          </button>
        </div>
      </div>
    </section>
  );
}

export default Activities;

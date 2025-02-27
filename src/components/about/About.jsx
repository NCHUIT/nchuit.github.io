function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">關於我們</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/about-image.svg"
              alt="About Us"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              中興大學資訊研究社
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              成立於1990年，中興大學資訊研究社是一個專注於培養學生資訊科技能力的社團。我們致力於提供多元化的程式設計課程、舉辦技術講座，以及組織各種資訊相關活動。
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              無論你是程式新手還是有經驗的開發者，我們都歡迎你加入我們的社群。在這裡，你可以與志同道合的夥伴一起學習、成長，並探索資訊科技的無限可能。
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-green-500">
                <h4 className="font-semibold text-gray-800 mb-2">技術工作坊</h4>
                <p className="text-gray-600">
                  定期舉辦各種程式語言和技術的工作坊
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-green-500">
                <h4 className="font-semibold text-gray-800 mb-2">專題製作</h4>
                <p className="text-gray-600">
                  指導學生完成各種資訊相關的專題項目
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-green-500">
                <h4 className="font-semibold text-gray-800 mb-2">程式競賽</h4>
                <p className="text-gray-600">組織校內程式競賽，提升解題能力</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-green-500">
                <h4 className="font-semibold text-gray-800 mb-2">業界交流</h4>
                <p className="text-gray-600">
                  邀請業界專家分享經驗與最新技術趨勢
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import Members from "./Members";
import { getImagePath } from "../../utils/path";

function About() {
  return (
    <>
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">關於我們</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center ml-10 mr-10">
            <div>
              <img
                src={getImagePath("/images/about-code.svg")}
                alt="About Us"
                className="rounded-lg shadow-xl w-full"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                中興大學資訊科學研習社
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                我們的目標是推廣興大的資訊風氣，使興大有更多能夠了解並且使用資訊科技的同學們，並且能夠透過本社團互相交流切磋。
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                無論你是程式新手還是有經驗的開發者/對軟體或是硬體有興趣，我們都歡迎你加入我們。在這裡，你可以與志同道合的夥伴一起學習、成長，並探索資訊科技的無限可能！
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-green-500">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    智造工作坊
                  </h4>
                  <p className="text-gray-600">
                    不定期舉辦 3D 列印、雷切等工作坊
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-green-500">
                  <h4 className="font-semibold text-gray-800 mb-2">專案開發</h4>
                  <p className="text-gray-600">
                    手機 App、網頁等各式豐富的專案社課
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-green-500">
                  <h4 className="font-semibold text-gray-800 mb-2">程式競賽</h4>
                  <p className="text-gray-600">
                    組團參加各種程式競賽，提升演算法實力
                  </p>
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
      <Members />
    </>
  );
}

export default About;

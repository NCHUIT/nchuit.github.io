import { LazyLoadImage } from "react-lazy-load-image-component";
import { getImagePath } from "../../utils/path";
import "react-lazy-load-image-component/src/effects/blur.css";

function Order() {

    return (
        <section id="laser-cutting" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* 標題區 */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">客製化鑰匙圈</h2>
                    <div className="w-24 h-1 bg-green-600 mx-auto" />
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        中興大學資訊科學研習社提供客製化鑰匙圈製作服務，有興趣的朋友歡迎向下了解更多資訊 ~
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 ml-10 mr-10">
                    {/* 作品展示 */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">作品展示</h3>
                        <div className="grid gap-10 text-center">
                            {[{
                                title: "特仕款 鑰匙圈",
                                img: "images/exhibits/chungxing.png",
                                desc: "本社團特別款，歡迎訂購!!!",
                            }, {
                                title: "客製化設計",
                                img: "images/exhibits/wood.png",
                                desc: "依照您的需求打造專屬的鑰匙圈，有皮革(上)以及實木(下)兩種選擇~",
                            }].map((item, idx) => (
                                <div key={idx} className="py-10 bg-white border-t-4 border-orange-500 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <h4 className="text-lg font-semibold text-gray-800 mb-5">{item.title}</h4>
                                    <LazyLoadImage
                                        src={getImagePath(item.img)}
                                        alt={item.title}
                                        effect="blur"
                                        className="rounded-lg w-full h-70 object-cover mb-4"
                                    />
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 價格資訊 */}
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">價格資訊</h3>
                        <div className="grid md:grid-cols-3 gap-5 mb-3">
                            <div className="bg-white  p-5 rounded-lg border-t-4 border-green-500 h-48 flex flex-col justify-center shadow hover:shadow-lg transition-shadow">
                                <h4 className="text-lg font-semibold text-gray-800 mb-3">特仕款 鑰匙圈</h4>
                                <p>特價中 !!!</p>
                                <p>30 元 / 1個</p>
                            </div>
                            <div className="bg-white  p-5 rounded-lg border-t-4 border-green-500 h-48 flex flex-col justify-center shadow hover:shadow-lg transition-shadow">
                                <h4 className="text-lg font-semibold text-gray-800 mb-3">客製化皮革鑰匙圈</h4>
                                <p>50 元 / 1個</p>
                            </div>
                            <div className="bg-white  p-5 rounded-lg border-t-4 border-green-500 h-48 flex flex-col justify-center shadow hover:shadow-lg transition-shadow">
                                <h4 className="text-lg font-semibold text-gray-800 mb-3">客製化實木鑰匙圈</h4>
                                <p>100 元 / 1個</p>
                            </div>                          
                            {/* <p className="text-sm text-gray-500 mt-6 text-center">
                                * 以上價格僅供參考，實際費用將根據您的具體需求進行估算。
                            </p> */}
                        </div>
                        {/* 預約表單 */}
                        <div className="rounded-lg shadow-xl text-center py-10">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">馬上預約</h3>
                            <p className="text-gray-600 mb-2">心動了嗎？不如馬上行動吧！</p>
                            <p className="text-gray-600 mb-6">趕快填寫表單下定吧👇</p>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLScQ9MXYWk2GF16W-NnTZAXHw9i4HtSYvsonHjattLo1mFu1wA/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors"
                            >
                                前往預約表單
                            </a>
                        </div>
                        {/* 常見問題 */}
                        <div className="mt-20 max-w-3xl mx-auto">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">常見問題 與 注意事項</h3>
                            {[
                                {
                                    q: "需要提供什麼檔案格式？",
                                    a: "除了純文字外，我們接受 PNG、JPG 等點陣圖檔案。",
                                },
                                {
                                    q: "⚠️ 小提醒：請勿上傳過於複雜的圖形檔案，若不確定是否可用，可以私訊或Email聯絡我們詢問。",
                                },
                                {
                                    q: "📢 版權提醒",
                                    a: "請確認您所提供的設計稿件擁有合法授權，避免使用未經授權的圖像、商標或角色。本社團不負責處理任何因侵權而產生的法律問題，謝謝您的理解與配合 🙏"
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-lg shadow-md mb-5">
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.q}</h4>
                                    <p className="text-gray-600">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                

                
            </div>
        </section>
    );
}

export default Order;

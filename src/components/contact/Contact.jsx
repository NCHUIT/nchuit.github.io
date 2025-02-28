import { getImagePath } from "../../utils/path";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">聯絡我們</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            有任何問題或建議嗎？歡迎隨時與我們聯繫，我們將盡快回覆您。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 ml-10 mr-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                社群媒體
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="https://www.facebook.com/nchuit.cc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"
                >
                  <svg
                    className="h-12 w-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/nchuit.cc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <svg
                    className="h-10 w-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://line.me/ti/g2/bCw9X0sudfU1pZIzIGCEZHxsoDsDzbAe8HYlQA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-500 transition-colors flex items-center group"
                >
                  <LazyLoadImage
                    src={getImagePath("images/line-app-icon-dark.svg")}
                    alt="LINE"
                    effect="blur"
                    className="h-10 w-10 object-contain transition-all duration-300 group-hover:[filter:invert(40%)_sepia(95%)_saturate(1352%)_hue-rotate(91deg)_brightness(96%)_contrast(105%)]"
                    style={{
                      aspectRatio: "1/1",
                      maxHeight: "40px",
                    }}
                  />
                </a>
                <a
                  href="https://discord.gg/t7EAre8bzh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <svg
                    className="h-10 w-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@nchuit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  <svg
                    className="h-10 w-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                加入我們
              </h3>
              <p className="text-gray-600 mb-6">
                對程式設計、網頁開發或資訊科技有興趣嗎？想要利用 3D
                列印及雷射雕刻製作屬於自己的作品嗎？加入中興大學資訊科學研習社，讓我們一起學習成長！
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeR3GEL3AgPI93930etIYxr4fReEZG9fXpB-z_xeFBJshs7zQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out"
              >
                立即入社
              </a>
            </div>
          </div>
          <div className="space-y-6 mr-10">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                聯絡資訊
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-800 font-medium">社辦地點</p>
                    <p className="text-gray-600">
                      <a
                        href="https://maps.app.goo.gl/DHaTgSHA8F698Zqg7"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        中興大學雲平樓 313 室
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-800 font-medium">電子郵件</p>
                    <p className="text-gray-600">
                      <a href="mailto:it.nchu@gmail.com">it.nchu@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                社團時間
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>每週三 18:30 後</span>
                  <span>跨域興學習</span>
                </li>
                <li className="flex justify-between">
                  <span>每週四 19:00 - 21:00</span>
                  <span>例行社課</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

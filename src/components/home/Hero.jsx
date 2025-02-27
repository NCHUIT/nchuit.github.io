function Hero() {
  return (
    <div className="bg-gradient-to-r from-green-800 to-green-600 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              探索程式的奧秘，開啟科技的未來
            </h1>
            <p className="text-xl mb-8">
              中興大學資訊研究社，帶你進入程式設計的世界，培養解決問題的能力。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#courses"
                className="bg-white text-green-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-center transition"
              >
                探索課程
              </a>
              <a
                href="#contact"
                className="bg-green-700 hover:bg-green-600 border border-white px-6 py-3 rounded-lg font-semibold text-center transition"
              >
                加入我們
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/hero-image.svg"
              alt="Programming Illustration"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

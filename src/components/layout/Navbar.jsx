import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getImagePath } from "../../utils/path";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <LazyLoadImage
                src={getImagePath("/images/nchuit-icon.webp")}
                alt="NCHU IT Logo"
                effect="blur"
                className="h-10 w-10 object-contain"
                style={{
                  aspectRatio: "1/1",
                  maxHeight: "40px",
                  maxWidth: "40px",
                  width: "auto",
                  height: "auto",
                }}
              />
            </Link>
            <Link to="/" className="font-bold text-xl">
              NCHUIT
            </Link>
          </div>

          {/* 桌面版選單 */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-green-200" : "hover:text-green-200 transition"
              }
            >
              首頁
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-green-200" : "hover:text-green-200 transition"
              }
            >
              關於我們
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive ? "text-green-200" : "hover:text-green-200 transition"
              }
            >
              課程資訊
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-green-200" : "hover:text-green-200 transition"
              }
            >
              聯絡我們
            </NavLink>
          </div>

          {/* 手機版選單按鈕 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* 手機版下拉選單 */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-3 space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block bg-green-700 px-3 py-2 rounded"
                  : "block hover:bg-green-700 px-3 py-2 rounded"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              首頁
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "block bg-green-700 px-3 py-2 rounded"
                  : "block hover:bg-green-700 px-3 py-2 rounded"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              關於我們
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? "block bg-green-700 px-3 py-2 rounded"
                  : "block hover:bg-green-700 px-3 py-2 rounded"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              課程資訊
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "block bg-green-700 px-3 py-2 rounded"
                  : "block hover:bg-green-700 px-3 py-2 rounded"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              聯絡我們
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

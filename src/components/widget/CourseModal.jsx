import React, { useEffect, useRef, useState, useCallback } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

// 自定義 lightbox 的背景樣式
const lightboxStyles = {
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(8px)",
  },
};

// 用於渲染包含 link 的段落
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
          // 如果部分是字串，直接渲染，處理換行符號
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

function CourseModal({
  isOpen,
  onClose,
  title,
  image,
  description,
  info,
  color,
  registrationLink,
}) {
  const modalRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
      setIsRendered(false);
    }, 300); // 等待動畫完成後再關閉
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // 如果 lightbox 是開啟的，不要關閉 CourseModal
        if (!lightboxOpen) {
          handleClose();
        }
      }
    };

    if (isOpen) {
      setIsRendered(true);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";

      // 讓 CourseModal 有淡入放大的效果
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, handleClose, lightboxOpen]);

  // 處理圖片點擊事件，避免 CourseModal 一起被關閉
  const handleImageClick = (e) => {
    e.stopPropagation();
    setLightboxOpen(true);
  };

  if (!isRendered) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        ref={modalRef}
        className={`bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto modal-scrollbar transition-all duration-300 ease-in-out transform ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } flex flex-col md:flex-row`}
      >
        {/* 內容容器 - 在手機上可以整體滾動 */}
        <div className="flex flex-col md:flex-row w-full">
          {/* 海報區域 */}
          <div
            className="md:w-2/5 flex items-center justify-center md:sticky md:top-0 md:h-screen md:max-h-[90vh]"
            style={{ backgroundColor: color || "#4CAF50" }}
          >
            {image ? (
              <div className="w-full h-full flex items-center justify-center p-4">
                <div className="cursor-pointer" onClick={handleImageClick}>
                  <LazyLoadImage
                    src={image}
                    alt={title}
                    effect="blur"
                    className="max-w-full max-h-full object-contain"
                    wrapperProps={{
                      style: {
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                    placeholderSrc={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'/%3E%3Cpolyline points='21 15 16 10 5 21'/%3E%3C/svg%3E`}
                  />
                </div>
              </div>
            ) : (
              <div className="w-full h-64 md:h-full flex items-center justify-center">
                <h2 className="text-white text-3xl font-bold p-6 text-center">
                  {title}
                </h2>
              </div>
            )}
          </div>

          {/* 右側資訊區域 */}
          <div className="md:w-3/5 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2 text-gray-800">
                課程說明
              </h4>
              <div className="text-gray-600 space-y-3">
                {Array.isArray(description) ? (
                  description.map((paragraph, index) => (
                    <div key={index}>
                      <RichParagraph content={paragraph} />
                    </div>
                  ))
                ) : (
                  <RichParagraph content={description} />
                )}
              </div>
            </div>

            {info && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-800">
                  課程資訊
                </h4>
                <div className="text-gray-600">
                  {typeof info === "string" ? (
                    <p>{info}</p>
                  ) : (
                    <ul className="list-disc pl-5 space-y-1">
                      {info.map((item, index) => (
                        <li key={index}>
                          {typeof item === "string" ? (
                            item
                          ) : (
                            <RichParagraph content={item} />
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}

            <div className="mt-6 mb-12 pb-8 text-center space-x-4">
              {registrationLink && (
                <a
                  href={registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold px-6 py-2 rounded-lg shadow transition hover:opacity-90 hover:shadow-md inline-block cursor-pointer"
                  style={{ backgroundColor: color || "#4CAF50" }}
                >
                  立即報名
                </a>
              )}
              <button
                onClick={handleClose}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition hover:opacity-90 hover:shadow-md cursor-pointer"
              >
                關閉
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 圖片和 lightbox */}
      {image && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={[{ src: image, alt: title }]}
          plugins={[Zoom]}
          styles={lightboxStyles}
          animation={{ fade: 300 }}
          carousel={{ finite: true }}
          zoom={{
            maxZoomPixelRatio: 5,
            zoomInMultiplier: 1.5,
            doubleTapDelay: 300,
            doubleClickDelay: 300,
            keyboardMoveDistance: 50,
            wheelZoomDistanceFactor: 200,
            pinchZoomDistanceFactor: 200,
            scrollToZoom: true,
            wheelScaleFactor: 0.2,
            zoomOutMultiplier: 0.833,
            animationDuration: 400,
          }}
          render={{
            buttonPrev: () => null,
            buttonNext: () => null,
          }}
          controller={{
            closeOnBackdropClick: true,
            closeOnPullDown: true,
          }}
          on={{
            click: ({ event }) => {
              const target = event.target;
              const isImage =
                target.tagName === "IMG" ||
                target.classList.contains("yarl__slide_image") ||
                target.closest(".yarl__slide_image");
              if (!isImage) {
                setLightboxOpen(false);
              }
            },
          }}
        />
      )}
    </div>
  );
}

export default CourseModal;

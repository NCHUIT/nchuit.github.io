/**
 * 處理圖片路徑，自動適應 base URL 的變化
 * @param {string} path - 圖片路徑，可以是絕對路徑（以 / 開頭）或相對路徑
 * @returns {string} 處理後的完整路徑
 */
export function getImagePath(path) {
  // 如果路徑以 / 開頭，則去掉開頭的 /
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  // 結合 base URL 和清理後的路徑
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}

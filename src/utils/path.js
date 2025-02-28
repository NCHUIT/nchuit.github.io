/**
 * 處理圖片路徑，自動適應 base URL 的變化
 * @param {string} path - 圖片路徑，可以是絕對路徑（以 / 開頭）或相對路徑
 * @returns {string} 處理後的完整路徑
 */
export function getImagePath(path) {
  // 如果路徑以 / 開頭，則去掉開頭的 /
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  // 獲取 base URL
  const baseUrl = import.meta.env.BASE_URL;
  // 確保 base URL 和路徑之間有一個斜線
  const separator = baseUrl.endsWith("/") ? "" : "/";
  // 結合 base URL 和清理後的路徑
  return `${baseUrl}${separator}${cleanPath}`;
}

/**
 * 獲取圖片的尺寸版本（用於響應式圖片）
 * @param {string} path - 原始圖片路徑
 * @param {number} width - 需要的圖片寬度
 * @returns {string} 處理後的圖片路徑
 */
export function getResponsiveImagePath(path, width) {
  // 這裡只是一個示例，實際上需要根據您的圖片處理服務來實現
  console.log(`請求寬度為 ${width}px 的圖片: ${path}`);
  // 如果您使用 CDN 或圖片處理服務，可以在這裡添加相應的邏輯
  return getImagePath(path);
}

/**
 * 檢查瀏覽器是否支持 WebP 格式
 * @returns {Promise<boolean>} 是否支持 WebP
 */
export async function supportsWebp() {
  if (!window.createImageBitmap) return false;

  const webpData =
    "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
  const blob = await fetch(webpData).then((r) => r.blob());

  return createImageBitmap(blob).then(
    () => true,
    () => false
  );
}

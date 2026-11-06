/**
 * Utility to resolve asset URLs dynamically across standalone Vite, Hostinger, and WordPress
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Check if running inside WordPress plugin
  if (typeof window !== 'undefined' && (window as any).LUXURY_CONFIG?.pluginUrl) {
    return `${(window as any).LUXURY_CONFIG.pluginUrl}${cleanPath}`;
  }

  // Fallback to our live Hostinger CDN assets
  return `https://clone.pallabnaiya.online/${cleanPath}`;
}

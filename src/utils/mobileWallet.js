// Mobile device detection
export const isMobileDevice = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android|iphone|ipad|ipod/i.test(userAgent.toLowerCase());
};

// Check if Phantom wallet is installed
export const isPhantomInstalled = () => {
  return window.phantom?.solana?.isPhantom || false;
};

// Build Phantom deep link URL
export const buildPhantomDeepLink = (dappURL) => {
  // Base URL for Phantom mobile app
  const baseURL = 'https://phantom.app/ul/browse';
  
  // Encode the dapp URL
  const encodedDappURL = encodeURIComponent(dappURL);
  
  // Construct the deep link URL
  return `${baseURL}/${encodedDappURL}`;
};

// Get app store links
export const getPhantomStoreLink = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  // Check if iOS
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'https://apps.apple.com/app/phantom-solana-wallet/id1598432977';
  }
  
  // Default to Android
  return 'https://play.google.com/store/apps/details?id=app.phantom';
}; 
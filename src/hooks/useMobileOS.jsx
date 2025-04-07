import { useEffect, useState } from 'react';

const getMobileOS = () => {
  const userAgent = navigator.userAgent || window.opera;

  if (/android/i.test(userAgent)) return 'Android';
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return 'iOS';
  return 'Other';
};

const useMobileOS = () => {
  const [os, setOS] = useState('Other');

  useEffect(() => {
    const detectedOS = getMobileOS();
    setOS(detectedOS);
  }, []);

  return os;
};

export default useMobileOS;

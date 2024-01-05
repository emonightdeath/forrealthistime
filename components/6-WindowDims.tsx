import { useState, useEffect } from 'react';

declare global {
  interface Window {
    myObject: any;
  }
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = global;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    global.addEventListener('resize', handleResize);
    return () => global.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

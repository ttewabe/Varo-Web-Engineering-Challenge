import React from "react";

const useScreenSize = () => {
  const getScreenSize = () => ({
    isMobile: window.innerWidth < 600,
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [screenSize, setScreenSize] = React.useState(getScreenSize());
  const handleResize = () => {
    setScreenSize(getScreenSize());
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return screenSize;
};

export default useScreenSize;

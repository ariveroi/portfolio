import React from "react";
import { LaptopApp } from "./laptop/LaptopApp.jsx";
import { MobileApp } from "./mobile/MobileApp.jsx";
import useWindowsSize from "./hooks/useWindowsSize";

function App() {
  const { width, height } = useWindowsSize();
  console.log(height);
  const isMobile = width < 768 ? true : false;
  return <>{isMobile ? <MobileApp /> : <LaptopApp />}</>;
}

export { App };

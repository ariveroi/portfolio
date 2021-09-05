import { useEffect, useState } from "react";

function useWindowsSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    function updateSize() {
      setSize({
        width: window.innerWidth,
        height: document.querySelector("#root").offsetHeight,
      });
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default useWindowsSize;

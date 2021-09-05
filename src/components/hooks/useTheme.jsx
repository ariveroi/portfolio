import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";

function useTheme(reverse = false) {
  const darkTheme = useContext(ThemeContext);
  const [theme, setTheme] = useState("#000");
  useEffect(() => {
    if (reverse) {
      darkTheme ? setTheme("#237D82") : setTheme("#fff");
    } else {
      darkTheme ? setTheme("#fff") : setTheme("#000");
    }
  }, [darkTheme]);
  return theme;
}

export default useTheme;

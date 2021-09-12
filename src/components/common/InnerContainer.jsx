import React, { useState, useEffect } from "react";

function InnerContainer(props) {
  const [loaded, setLoaded] = useState("");
  useEffect(() => {
    setLoaded("loaded");
    return () => {
      setLoaded("");
    };
  }, []);
  return <div className={`inner-container ${loaded}`}>{props.children}</div>;
}

export default InnerContainer;

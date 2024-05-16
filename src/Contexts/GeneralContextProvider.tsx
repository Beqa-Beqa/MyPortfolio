import React, { createContext, useEffect, useState } from "react";

export const GeneralContext = createContext<{
  screenWidth: number
}>({
  screenWidth: 0 
});

export const GeneralContextProvider = (props: {children: React.ReactNode}) => {
  // Screen width state
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  // Update screen width state on resize
  useEffect(() => {
    // Resize event handler
    const handleResize = () => setScreenWidth(window.innerWidth);
    // Add resize handler to resize event
    window.addEventListener("resize", handleResize);

    return () => {
      // cleanup event
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    // return context provider and provide values to other wrapped nodes.
    <GeneralContext.Provider value={{screenWidth}}>
      {props.children}
    </GeneralContext.Provider>
  );
}
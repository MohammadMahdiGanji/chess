import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";

interface propModalCheckMeet {
  isTurn: boolean;
  checkMeet: boolean;
}

export default function ModuleCheckMeet({
  isTurn,
  checkMeet,
}: propModalCheckMeet) {
  console.log(isTurn, checkMeet);

  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setToggle(true);
    }, 2000);
  }, []);

  return ReactDom.createPortal(
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 
    bg-[rgba(255,255,255,0.2)] z-90 
    flex items-center justify-center transition-all duration-1000 
   w-full ${checkMeet ? "h-full" : "h-0"}`}
    >
      
        <div 
          className={`bg-[rgba(255,255,255,0.3)]
       shadow-[0_0_10px_rgba(255,255,255,1)] 
       p-5 rounded-2xl absolute py-14 px-10 backdrop-blur-xs
       transition-all duration-500 ${checkMeet ?"top-70":"-top-50"}`}
       
        >
          {isTurn ? (
            <div className="font-bold text-2xl">شاه سفید کیش مات شد</div>
          ) : (
            <div className="font-bold text-2xl">شاه سیاه کیش مات شد</div>
          )}
        </div>
      
   
    </div>,
    document.getElementById("modal") as HTMLDivElement
  );
}

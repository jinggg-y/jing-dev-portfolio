'use client'

import { useState, useEffect } from "react";
import { BsMoonStarsFill,BsSun } from "react-icons/bs";


export default function DarkModeHandler() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [dark]);
    
    return (
        <div onClick={() => setDark(!dark)}  className="text-xl cursor-pointer">
            {dark ? <BsSun className="text-white" /> : <BsMoonStarsFill />}
        </div>
    );
    
}




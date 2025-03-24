'use client'

import { useState, useEffect } from "react";
import { BsMoonStarsFill,BsSun } from "react-icons/bs";


export default function DarkModeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [dark]);
    
    return (
        <button onClick={() => setDark(!dark)}  className="text-xl">
            {dark ? <BsSun className="text-white" /> : <BsMoonStarsFill />}
        </button>
    );
    
}




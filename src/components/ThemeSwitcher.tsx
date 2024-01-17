"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";


export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();


    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return null;
    }


    return (
        <button
            className={`w-fit right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 font-light duration-200 bg-[#F2F2F3] dark:bg-black`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "light" ? "Dark" : "Light"}
        </button>
    );
};
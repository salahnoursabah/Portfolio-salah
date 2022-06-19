import React, { useContext } from "react";
import "./BtnToggle.css"
import { ThemeContext } from "../Context/ThemeContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsFillBrightnessHighFill } from "react-icons/bs";

export default function BtnToggle() {
    const { toggleTheme, theme } =
        useContext(ThemeContext)
    return (
        <div
            onClick={toggleTheme}
            className={theme ? 'btn-toggle goLight' : 'btn-toggle'}
        >
            {theme ? <MdOutlineDarkMode /> : <BsFillBrightnessHighFill className="text-dark" />}
        </div>
    )
}
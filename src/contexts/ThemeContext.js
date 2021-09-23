import React, { createContext, useEffect, useState } from "react"
import { SettingLS } from "../components/dashboard/SettingLS"
import Helper from "../helpers/Helper"

export const ThemeContext = createContext()

export const ModeType = {
    DARK: "dark",
    LIGHT: "light",
    AUTO: "auto"
}

export default function ThemeContextProvider(props) {
    const startDarkMode = 18
    const endDarkMode = 6

    const [theme, setTheme] = useState(() => {
        return Helper.getSettingFromLocalStorage(SettingLS.Theme.mode, ModeType.LIGHT)
    })

    // const [themeValue, setThemeValue] = useState(null)

    const toggleTheme = (themePros) => {
        if (theme !== themePros) {
            setTheme(themePros)
            Helper.setSettingFromLocalStorage(SettingLS.Theme.mode, themePros)
        }


    }

    // const setAutoTheme = () => {

    // }

    const handleSaveTheme = (themeSave) => {
        Helper.setSettingFromLocalStorage(SettingLS.Theme.mode, themeSave)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, handleSaveTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
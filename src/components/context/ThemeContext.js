import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children, defaultTheme}) => {
    const [theme, setTheme] = useState(defaultTheme || "default")

    console.log("ThemeContxt", theme);

    const toggleTheme = (nextTheme) => {
        setTheme(nextTheme);
        console.log("mudou de tema", theme);
    }

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}
import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children, defaultTheme}) => {
    const [theme, setTheme] = useState(defaultTheme || "default")

    const toggleTheme = (nextTheme) => {
        setTheme(nextTheme);
    }

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}
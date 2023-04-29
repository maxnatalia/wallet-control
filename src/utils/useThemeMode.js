import { createTheme } from "@mui/material";
import { useLocalStorage } from "./useLocalStorage";

const useThemeMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("themeMode", false);

    const handleModeChange = () => {
        setDarkMode(!darkMode);
    };

    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
        },
    });

    return { darkMode, theme, handleModeChange }
};

export default useThemeMode;
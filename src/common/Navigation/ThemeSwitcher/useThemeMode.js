import { createTheme } from "@mui/material";
import { useLocalStorage } from "../../../utils/useLocalStorage";

const useThemeMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("themeMode", true);

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
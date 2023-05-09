import { Switch, Tooltip } from '@mui/material';

const ThemeSwitcher = ({ darkMode, handleModeChange }) => {
    return (
        <Tooltip title={!darkMode ? "Switch to dark mode" : "Switch to light mode"}>
            <Switch
                color="default"
                checked={darkMode}
                aria-label="theme switch"
                onChange={handleModeChange}
            />
        </Tooltip>
    )
};

export default ThemeSwitcher;
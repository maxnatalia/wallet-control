import { useState } from 'react';
import { AppBar, IconButton, Switch, Toolbar, Typography, Tooltip, Menu, MenuItem, Fade, Box } from '@mui/material'
import WalletIcon from '@mui/icons-material/Wallet';
import PaidIcon from '@mui/icons-material/Paid';
import { useTodayDate } from '../utils/useTodayDate';
import { currencyData } from '../utils/data';

const Navigation = ({ handleModeChange, darkMode, currency, handleCurrency }) => {
    const todayDate = useTodayDate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    return (
        <AppBar position="sticky" >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="wallet-icon"
                    sx={{ mr: 2 }}
                >
                    <WalletIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'block'
                        }
                    }}>
                    Wallet Control
                </Typography>
                <Tooltip
                    title="Change the currency"
                    placement="right-start">
                    <Box
                        sx={{
                            padding: {
                                xs: 0,
                                md: 2,
                            }
                        }}>
                        <IconButton
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <PaidIcon sx={{ color: "white" }} />
                        </IconButton>
                        <Typography
                            variant='h6'
                            component="span"
                        >
                            {currency}
                        </Typography>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            {currencyData.map((item) => (
                                <MenuItem
                                    key={item}
                                    onClick={() => {
                                        handleClose();
                                        handleCurrency(item);
                                    }}>
                                    {item}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Tooltip>
                <Tooltip title="Today's date">
                    <Typography
                        variant="h6"
                        component="span"
                        textAlign="center"
                        color="inherit"
                        flex={1}
                    >
                        {todayDate}
                    </Typography>
                </Tooltip>
                <Tooltip title={darkMode === "light" ? "Switch to dark mode" : "Switch to light mode"}>
                    <Switch
                        color="default"
                        checked={darkMode}
                        aria-label="theme switch"
                        onChange={handleModeChange}
                    />
                </Tooltip>
            </Toolbar>
        </AppBar >
    )
};

export default Navigation;
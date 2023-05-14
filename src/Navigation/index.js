import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import WalletIcon from '@mui/icons-material/Wallet';
import ManagementCategories from './ManagementCategories';
import ThemeSwitcher from './ThemeSwitcher';
import ChangeCurrency from './ChangeCurrency';
import Clock from './Clock';

const Navigation = ({ handleModeChange, darkMode, currency, handleCurrency, handleAddCategory, categories, setCategories, listItems }) => {

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
                    sx={{
                        mr: {
                            xs: 0,
                            md: 2
                        }
                    }}
                >
                    <WalletIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    flex={1}
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'block'
                        }
                    }}>
                    Wallet Control
                </Typography>
                <Clock />
                <ChangeCurrency currency={currency} handleCurrency={handleCurrency} />
                <ManagementCategories handleAddCategory={handleAddCategory} categories={categories} setCategories={setCategories} listItems={listItems} darkMode={darkMode} />
                <ThemeSwitcher darkMode={darkMode} handleModeChange={handleModeChange} />
            </Toolbar>
        </AppBar >
    )
};

export default Navigation;
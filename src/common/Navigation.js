import { AppBar, IconButton, Switch, Toolbar, Typography } from '@mui/material'
import WalletIcon from '@mui/icons-material/Wallet';
import { useTodayDate } from '../utils/useTodayDate';

const Navigation = () => {
    const todayDate = useTodayDate();

    return (
        <>
            <AppBar position="sticky" >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="wallet-icon"
                        sx={{ mr: 2 }}
                    >
                        <WalletIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block' } }}>
                        Wallet Control
                    </Typography>
                    <Typography variant="h6" component="span" sx={{ flexGrow: 1 }} textAlign="center" color="inherit">
                        Balance up to date - {todayDate}
                    </Typography>
                    <Switch
                        color="default"
                        defaultChecked
                        aria-label="login switch"
                    />
                </Toolbar>
            </AppBar>
        </>
    )
};

export default Navigation;
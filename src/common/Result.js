import { Box, Tooltip, Typography } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { blue, lightGreen, red } from '@mui/material/colors';
import { formatPrice } from '../utils/formatPrice';

const Result = ({ fields, totalAmount }) => {

    const { currency } = fields;
    return (
        <Tooltip title="Wallet Balance">
            <Box sx={{ backgroundColor: blue[100], p: 1, mt: 2, ml: 2, borderRadius: 2, display: "flex", alignItems: "center", position: "fixed", zIndex: 2 }}>
                <AccountBalanceWalletIcon
                    sx={{ p: 1, color: "primary.main", fontSize: { xs: 20, md: 30 } }} />
                <Typography
                    variant='h6'
                    component="span"
                    sx={{
                        fontWeight: 900,
                        fontSize: 20,
                        color: totalAmount > 0 ? lightGreen[600] : red[400],
                    }}>
                    {formatPrice(totalAmount, currency)}
                </Typography>
            </Box>
        </Tooltip>
    )
};

export default Result;
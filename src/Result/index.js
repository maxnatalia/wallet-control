import { useState } from 'react';
import { IconButton, Tooltip, Typography, Box } from '@mui/material';
import { blue, grey, lightGreen, red } from '@mui/material/colors';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { formatPrice } from '../common/utils/formatPrice';

const Result = ({ totalAmount, currency }) => {
    const [showResult, setShowResult] = useState(true);

    const handleShowResult = () => {
        setShowResult(!showResult);
    };

    return (
        <Tooltip title={!showResult ? "Show Wallet Balance" : "Hide Wallet Balance"}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: blue[100],
                p: 1,
                mt: 1,
                ml: 1,
                borderRadius: 2,
                position: "fixed",
                zIndex: 2,
                '&:hover': {
                    backgroundColor: blue[200],
                },
                '&:active': {
                    backgroundColor: blue[200],
                },
            }}>
                <IconButton
                    onClick={handleShowResult}>
                    <AccountBalanceWalletIcon sx={{ color: grey[500] }} />
                </IconButton>
                {showResult &&
                    <Typography
                        variant='h6'
                        component="span"
                        sx={{
                            fontWeight: 900,
                            color: totalAmount > 0 ? lightGreen[600] : red[400],
                        }}>
                        {formatPrice(totalAmount, currency)}
                    </Typography>
                }
            </Box>
        </Tooltip >
    )
};

export default Result;
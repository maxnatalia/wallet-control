import { useState } from 'react';
import { Button, Tooltip, Typography } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { blue, lightGreen, red } from '@mui/material/colors';
import { formatPrice } from '../../utils/formatPrice';

const Result = ({ totalAmount, currency }) => {
    const [showResult, setShowResult] = useState(false);

    const handleShowResult = () => {
        setShowResult(!showResult);
    };

    return (
        <Tooltip title={!showResult ? "Show Wallet Balance" : "Hide Wallet Balance"}>
            <Button
                onClick={handleShowResult}
                startIcon={<AccountBalanceWalletIcon />}
                sx={{
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
                }}
            >
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
            </Button>
        </Tooltip>
    )
};

export default Result;
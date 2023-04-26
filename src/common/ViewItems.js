import { useState } from "react";
import { Alert, ButtonGroup, Snackbar, Typography } from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// import CloseIcon from '@mui/icons-material/Close';
import GridViewIcon from '@mui/icons-material/GridView';
import GridView from "./GridView";
import ButtonStyled from "./ButtonStyled";
import ListView from "./ListView";

const ViewItems = ({ listItems, removeItem }) => {
    const [view, setView] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleGridView = () => {
        if (listItems.length === 0) {
            setOpen(true);
        }
        setView(true);
    };

    const handleListView = () => {
        if (listItems.length === 0) {
            setOpen(true);
        }
        setView(false);
    };

    return (
        <>
            <Typography
                variant="h3"
                textAlign={"center"}
                sx={{ m: 3 }}>
                My Wallet
            </Typography>
            <ButtonGroup variant="contained" fullWidth sx={{ mb: 4 }}>
                <ButtonStyled
                    icon={<GridViewIcon />}
                    buttonText={"Grid View"}
                    onClick={handleGridView}
                />
                <ButtonStyled
                    icon={<FormatListBulletedIcon />}
                    buttonText={"List View"}
                    onClick={handleListView}
                />
            </ButtonGroup>
            {view
                ? <GridView listItems={listItems} removeItem={removeItem} />
                : <ListView listItems={listItems} removeItem={removeItem} />
            }
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            // action={
            //     <IconButton size="small" color="red" onClick={handleClose}>
            //         <CloseIcon fontSize="small" />
            //     </IconButton>
            // }
            ><Alert severity="info">The wallet is empty. Add your first transactions to start tracking your finances</Alert>
            </Snackbar>
        </>
    )
};

export default ViewItems;
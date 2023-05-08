import { ButtonGroup, Typography } from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import GridView from "./GridView";
import ButtonStyled from "./ButtonStyled";
import ListView from "./ListView";
import { useLocalStorage } from "../utils/useLocalStorage";
import { useMessageAlert } from "./useMessageAlert";
import SearchFields from "./SearchFields";
import ClearIcon from '@mui/icons-material/Clear';
import MessageAlert from "./MessageAlert";

const ViewItems = ({
    listItems,
    removeItem,
    editItem,
    currency,
    fields,
    setFields,
    displayDataItems,
    handleClearAll
}) => {
    const { handleOpen, open, handleClose, textAlert } = useMessageAlert();
    const [view, setView] = useLocalStorage("view", false);

    const handleGridView = () => {
        if (listItems.length === 0) {
            handleOpen("Sorry, there are no items in the list to display the grid view");
        }
        setView(true);
    };

    const handleListView = () => {
        if (listItems.length === 0) {
            handleOpen("Sorry, there are no items in the list to display the list view");
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
            <SearchFields
                fields={fields}
                setFields={setFields}
                listItems={listItems}
            />
            {view
                ? <GridView removeItem={removeItem} editItem={editItem} currency={currency} displayDataItems={displayDataItems} />
                : <ListView removeItem={removeItem} editItem={editItem} currency={currency} displayDataItems={displayDataItems} />
            }
            <MessageAlert
                openMessage={open}
                handleClose={handleClose}
                textAlert={textAlert}
            />

            {listItems.length !== 0 && <ButtonStyled
                buttonText={"Clear All"}
                icon={<ClearIcon />}
                onClick={handleClearAll}
            />}
        </>
    )
};

export default ViewItems;
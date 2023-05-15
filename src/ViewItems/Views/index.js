import { ButtonGroup } from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import ClearIcon from '@mui/icons-material/Clear';
import { useLocalStorage } from "../../common/utils/useLocalStorage";
import { useMessageAlert } from "../../common/MessageAlert/useMessageAlert";
import MessageAlert from "../../common/MessageAlert";
import ButtonStyled from "../../common/ButtonStyled";
import GridView from "./GridView";
import ListView from "./ListView";

const Views = ({ listItems, removeItem, editItem, currency, handleClearAll, darkMode, filteredData }) => {
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
            <ButtonGroup variant="contained" fullWidth sx={{ mb: 4, mt: 4 }}>
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
                ? <GridView
                    removeItem={removeItem}
                    editItem={editItem}
                    currency={currency}
                    darkMode={darkMode}
                    listItems={listItems}
                    filteredData={filteredData}
                />
                : <ListView
                    removeItem={removeItem}
                    editItem={editItem}
                    currency={currency}
                    darkMode={darkMode}
                    listItems={listItems}
                    filteredData={filteredData}
                />
            }
            <MessageAlert
                openMessage={open}
                handleClose={handleClose}
                textAlert={textAlert}
            />
            {listItems.length !== 0 && filteredData.length !== 0 &&
                <ButtonStyled
                    buttonText={"Clear All"}
                    icon={<ClearIcon />}
                    onClick={handleClearAll}
                />
            }
        </>
    )
};

export default Views;
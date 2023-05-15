import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import BackspaceIcon from '@mui/icons-material/Backspace';
import InputField from "../../common/InputField";
import ButtonStyled from "../../common/ButtonStyled";
import SelectField from "../../common/SelectField";
import RadioField from "../../common/RadioField";
import MessageAlert from "../../common/MessageAlert";
import { useMessageAlert } from "../../common/MessageAlert/useMessageAlert";
import { radioData } from "../../common/utils/data";

const SearchFields = ({ darkMode, categories, fields, handleFieldChange, handleResetFilters, filteredData, listItems }) => {
    const { handleOpen, open, textAlert, handleClose } = useMessageAlert();
    const [showSearch, setShowSearch] = useState(false);

    const handleShowFilters = () => {
        setShowSearch(!showSearch);
    };

    const { searchDescription, searchCategory, searchVariant } = fields;

    useEffect(() => {
        if (filteredData.length === 0) {
            handleOpen("Sorry, no results found...");

            const timer = setTimeout(() => {
                handleClose();
            }, 1000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [filteredData, handleOpen, handleClose, listItems]);

    return (
        <>
            {!showSearch &&
                <ButtonStyled
                    buttonText={!showSearch ? "Show filters..." : "Hide filters..."}
                    icon={<FilterAltIcon />}
                    onClick={handleShowFilters}
                />
            }
            {showSearch &&
                <Box
                    sx={{
                        mt: 2,
                        mb: 2,
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: darkMode ? grey[800] : grey[200]
                    }}
                >
                    <RadioField
                        labelText={"What do you want to search?"}
                        name="searchVariant"
                        value={searchVariant}
                        options={radioData}
                        onChange={handleFieldChange}
                    />
                    <SelectField
                        helperText="Search category"
                        label="Search category"
                        name="searchCategory"
                        options={categories}
                        onChange={handleFieldChange}
                        value={searchCategory}
                    />
                    <InputField
                        helperText="Search description..."
                        label="Search description..."
                        type="text"
                        placeholder="Search description..."
                        name="searchDescription"
                        onChange={handleFieldChange}
                        value={searchDescription}
                    />
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <ButtonStyled
                            icon={<BackspaceIcon />}
                            buttonText={"Clear"}
                            onClick={handleResetFilters}
                        />
                        <ButtonStyled
                            buttonText={!showSearch ? "Show filters" : "Hide..."}
                            icon={<FilterAltOffIcon />}
                            onClick={handleShowFilters}
                        />
                    </Box>
                    <Box>
                        <Typography variant="h6" component={"p"} textAlign={"center"} mt={2} >
                            {`Found ${filteredData.length} out of ${listItems.length} result`}
                        </Typography>
                    </Box>
                </Box>}
            <MessageAlert
                openMessage={open}
                handleClose={handleClose}
                textAlert={textAlert} />
        </>
    )
};

export default SearchFields;
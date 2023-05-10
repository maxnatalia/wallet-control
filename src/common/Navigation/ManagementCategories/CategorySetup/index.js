import { useState } from 'react';
import { Box, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import Form from '../../../Form';
import InputField from '../../../InputField';
import ButtonStyled from '../../../ButtonStyled';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import MessageAlert from '../../../MessageAlert';
import { useMessageAlert } from '../../../MessageAlert/useMessageAlert';

const CategorySetup = ({ handleCloseWindow, categories, setCategories, listItems, handleAddCategory }) => {
    const { handleOpen, handleClose, open, textAlert } = useMessageAlert();
    const [valueCat, setValueCat] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!valueCat.trim()) {
            handleOpen("Please provide category name");
            return;
        }

        if (categories.map(cat => cat.toLowerCase()).includes(valueCat.trim().toLowerCase())) {
            handleOpen("The element you are trying to add already exists in the list.");
            return;
        }
        handleAddCategory(valueCat);
        setValueCat('');
    };

    const handleRemoveItem = (index) => {
        const categoryToRemove = categories[index];
        if (listItems.some(item => item.category.toLowerCase() === categoryToRemove.toLowerCase())) {
            handleOpen('This category is used in your list and cannot be removed.');
            return;
        }
        const newCategories = categories.filter((_, i) => i !== index);
        setCategories(newCategories);
    };

    return (
        <>
            <Box sx={{
                p: 2,
                backgroundColor: blue[100],
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "fixed",
                top: "200px",
                left: "10%",
                right: "10%",
                bottom: "0",
                overflowY: "auto",
                height: "60vh",
                zIndex: 2
            }}>
                <Box
                    sx={{
                        width: "80%",
                        mt: 8,
                        p: 2,
                        backgroundColor: grey[500],
                        borderRadius: 2
                    }}>
                    <IconButton
                        aria-label="cancel"
                        size="large"
                        onClick={handleCloseWindow}
                        sx={{
                            position: "absolute",
                            right: "0",
                            top: "0",
                            backgroundColor: grey[500],
                            m: 2
                        }}>
                        <CancelIcon />
                    </IconButton>
                    <Form
                        onSubmit={onFormSubmit}
                        sx={{ flexGrow: 1 }}
                    >
                        <InputField
                            helperText={"Add category"}
                            label={"Add category"}
                            type={"text"}
                            placeholder={"Add category"}
                            name={"addCategory"}
                            value={valueCat}
                            onChange={(e) => setValueCat(e.target.value)}
                        />
                        <ButtonStyled
                            type="submit"
                            icon={<LibraryAddIcon />}
                            buttonText={"Add"}
                        />
                    </Form>
                </Box>
                <List
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        width: "80%"
                    }}>
                    {categories.map((cat, index) => (
                        <ListItem
                            key={`cat-${cat}`}
                            sx={{
                                maxWidth: "200px",
                                backgroundColor: grey[500],
                                borderRadius: 2,
                                m: 1
                            }}>
                            <ListItemText primary={`${cat}`} />
                            <IconButton onClick={() => handleRemoveItem(index)}>
                                <DeleteForeverIcon sx={{ color: "white" }} />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
            </Box >
            <MessageAlert
                openMessage={open}
                handleClose={handleClose}
                textAlert={textAlert}
                severity={"error"}
            />
        </>
    )
};

export default CategorySetup;
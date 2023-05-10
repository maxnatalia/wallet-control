import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import CategoryIcon from '@mui/icons-material/Category';
import CategorySetup from "./CategorySetup";

const ManagementCategories = ({ handleAddCategory, categories, setCategories, listItems }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleCloseWindow = () => {
        setExpanded(false)
    };

    return (
        <>
            <Tooltip title="Management categories">
                <Box display={"flex"} alignItems={"center"}
                    sx={{

                        padding: {
                            xs: 0,
                            md: 2,
                        }
                    }}>
                    <IconButton aria-label="addCategory" size="large" sx={{ color: "white" }} onClick={handleExpandClick} >
                        <CategoryIcon />
                    </IconButton>
                    <Typography
                        variant='h6'
                        component="span"
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'block'
                            }
                        }}
                    >
                        Categories settings
                    </Typography>
                </Box>
            </Tooltip>
            {expanded &&
                <CategorySetup
                    handleCloseWindow={handleCloseWindow}
                    categories={categories}
                    setCategories={setCategories}
                    listItems={listItems}
                    handleAddCategory={handleAddCategory}
                />
            }
        </>
    )
};

export default ManagementCategories;
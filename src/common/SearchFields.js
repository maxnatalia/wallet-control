import { Avatar, Box } from "@mui/material";
import InputField from "./InputField";
import ButtonStyled from "./ButtonStyled";
import AllInboxIcon from '@mui/icons-material/AllInbox';
import { green, red } from "@mui/material/colors";
import { useMessageAlert } from "./useMessageAlert";
import MessageAlert from "./MessageAlert";

const SearchFields = ({ fields, setFields, listItems }) => {
    const { search } = fields;
    const { handleOpen, handleClose, open, textAlert } = useMessageAlert();

    const handleSearch = (e) => {
        setFields((prevFields) => ({
            ...prevFields,
            search: e.target.value,
        }));
    };

    const handleShowVariant = (variant) => {
        if (variant === '' && listItems.length === 0) {
            handleOpen("Sorry, No items to display in this list");
        } else if (variant === '' || listItems.some(item => item.variant === variant)) {
            setFields((prevFields) => ({ ...prevFields, variant }));
        } else {
            handleOpen(`Sorry, there are no ${variant}s to display in the list`);
        }
    };

    return (
        <Box sx={{ pb: 2 }}>
            <InputField
                helperText="Search description..."
                label="Search description..."
                type="text"
                placeholder="Search description..."
                name="search"
                onChange={handleSearch}
                value={search}
            />
            <Box
                display={"flex"}
                justifyContent={"space-around"}
                m={2}
                sx={{
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 2
                }}
            >
                <ButtonStyled
                    buttonText="Incomes"
                    onClick={() => handleShowVariant('income')}
                    icon={<Avatar sx={{ bgcolor: green[500] }}>I</Avatar>}
                />
                <ButtonStyled
                    buttonText="Expenses"
                    onClick={() => handleShowVariant('expense')}
                    icon={<Avatar sx={{ bgcolor: red[500] }}>E</Avatar>}
                />
                <ButtonStyled
                    buttonText="All Incomes/Expenses"
                    onClick={() => handleShowVariant('')}
                    icon={<AllInboxIcon />}
                />
            </Box>
            <MessageAlert
                textAlert={textAlert}
                openMessage={open}
                handleClose={handleClose}
            />
        </Box>
    )
};

export default SearchFields;
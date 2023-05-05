import { Avatar, Box } from "@mui/material";
import InputField from "./InputField";
import ButtonStyled from "./ButtonStyled";
import AllInboxIcon from '@mui/icons-material/AllInbox';
import { green, red } from "@mui/material/colors";

const SearchFields = ({ fields, handleSearch, handleShowAll, handleShowExpense, handleShowIncome }) => {
    const { search } = fields;
    return (
        <>
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
                    onClick={() => handleShowIncome()}
                    icon={<Avatar sx={{ bgcolor: green[500] }}>I</Avatar>}
                />
                <ButtonStyled
                    buttonText="Expenses"
                    onClick={() => handleShowExpense()}
                    icon={<Avatar sx={{ bgcolor: red[500] }}>E</Avatar>}
                />
                <ButtonStyled
                    buttonText="All Incomes/Expenses"
                    onClick={() => handleShowAll()}
                    icon={<AllInboxIcon />}
                />
            </Box>
        </>
    )
};

export default SearchFields;
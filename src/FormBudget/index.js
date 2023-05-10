import Form from "../common/Form";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RadioField from "../common/RadioField";
import { radioData } from "../common/utils/data";
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import ButtonStyled from "../common/ButtonStyled";
import { Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";

const FormBudget = ({ fields, handleFieldChange, handleSubmit, validationAmount, editableId, categories, darkMode }) => {
    const { description, category, variant, amount, date } = fields;

    return (
        <Box sx={{ mb: 4, mt: 6, p: 2, borderRadius: 2, backgroundColor: darkMode ? grey[800] : grey[200] }}>
            <Typography variant="h3" textAlign={"center"}>
                Manage finances
            </Typography>
            <Form onSubmit={handleSubmit}>
                <RadioField
                    name="variant"
                    value={variant}
                    options={radioData}
                    onChange={handleFieldChange}
                />
                <SelectField
                    helperText="Choose category"
                    label="Category"
                    name="category"
                    options={categories}
                    onChange={handleFieldChange}
                    value={category}
                    required
                />
                <InputField
                    helperText="Specify the expense/income name"
                    label="Specify the expense/income name"
                    type="text"
                    name="description"
                    placeholder="Specify the expense/income name"
                    value={description}
                    onChange={handleFieldChange}
                    required
                />
                <InputField
                    helperText="Enter amount"
                    label="Enter amount"
                    type="number"
                    name="amount"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={handleFieldChange}
                    onKeyDown={validationAmount}
                    required
                />
                <InputField
                    helperText="Choose the date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={handleFieldChange}
                    required
                />
                <ButtonStyled
                    buttonText={editableId === null ? "Add to list" : "Save changes"}
                    type="submit"
                    icon={<ControlPointIcon />}
                />
            </Form>
        </Box>
    )
};

export default FormBudget;
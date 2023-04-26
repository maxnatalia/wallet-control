import Form from "./Form";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RadioField from "./RadioField";
import { categoriesData, radioData, currencyData } from "../utils/data";
import InputField from "./InputField";
import SelectField from "./SelectField";
import ButtonStyled from "./ButtonStyled";
import { Typography, Box } from "@mui/material";

const FormBudget = ({ fields, handleFieldChange, handleSubmit, validationAmount }) => {
    const { description, category, variant, amount, date, currency } = fields;

    return (
        <Box>
            <Typography variant="h2" textAlign={"center"}>
                Manage your finances
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
                    options={categoriesData}
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
                <SelectField
                    helperText="Choose currency"
                    label="Currency"
                    name="currency"
                    options={currencyData}
                    onChange={handleFieldChange}
                    value={currency}
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
                <ButtonStyled buttonText={"Add to list"} type="submit" icon={<ControlPointIcon />} />
            </Form>
        </Box>
    )
};

export default FormBudget;
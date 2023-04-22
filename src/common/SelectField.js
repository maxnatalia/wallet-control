import { InputLabel, MenuItem, Select, FormHelperText, FormControl } from "@mui/material";

const SelectField = ({ label, onChange, name, value, required, options, helperText }) => {
    return (
        <FormControl>
            <InputLabel>{label}</InputLabel>
            <Select
                variant="filled"
                onChange={onChange}
                name={name}
                value={value}
                required={required}>
                {options.map((option, index) => (
                    <MenuItem
                        value={option}
                        key={`${index}-${option}`}
                    >{option}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    )
};

export default SelectField;
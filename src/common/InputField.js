import { TextField } from "@mui/material";
import FormControlStyled from "./FormControlStyled";

const InputField = ({ helperText, label, type, placeholder, name, onChange, value, required, checked, onKeyDown }) => {
    return (
        <FormControlStyled>
            <TextField
                variant="filled"
                helperText={helperText}
                label={label}
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
                required={required}
                checked={checked}
                onKeyDown={onKeyDown}
            />
        </FormControlStyled>
    )
};

export default InputField;
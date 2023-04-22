import { TextField } from "@mui/material";

const InputField = ({ helperText, label, type, placeholder, name, onChange, value, required, checked }) => {
    return (
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
            checked={checked} />
    )
};

export default InputField;
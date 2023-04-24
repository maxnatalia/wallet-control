import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from "@mui/material"

const RadioField = ({ name, options, value, onChange }) => {
    return (
        <FormControl>
            <FormLabel>What do you want to add to the list?</FormLabel>
            <RadioGroup
                row
                name={name}
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <FormControlLabel key={option.value} value={option.value} checked={value === option.value} control={<Radio />} label={option.label} required />
                ))}
            </RadioGroup>
        </FormControl>
    )
};

export default RadioField;
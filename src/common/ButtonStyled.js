import { Button } from "@mui/material";

const ButtonStyled = ({ buttonText, onClick, type, icon }) => {
    return (
        <Button
            variant="contained"
            startIcon={icon}
            type={type}
            onClick={onClick}>
            {buttonText}
        </Button>
    )
};

export default ButtonStyled;
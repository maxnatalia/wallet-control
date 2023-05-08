
import { Alert, Snackbar } from "@mui/material";

const MessageAlert = ({ textAlert, handleClose, openMessage }) => {

    return (
        <>
            <Snackbar
                open={openMessage}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert
                    severity="info"
                >
                    {textAlert}
                </Alert>
            </Snackbar>
        </>
    )
};

export default MessageAlert;
import { useState } from "react";

export const useMessageAlert = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return { open, setOpen, handleClose, handleOpen }
};
import { Card, CardContent } from '@mui/material'

const Form = ({ children, onSubmit }) => {
    return (
        <Card variant="outlined" sx={{ maxWidth: 500 }}>
            <CardContent>
                <form onSubmit={onSubmit} fullWidth>{children}</form>
            </CardContent>
        </Card>
    )
};

export default Form;
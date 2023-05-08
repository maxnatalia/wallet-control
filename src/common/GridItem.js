import { Grid, Card, CardActions, CardHeader, CardContent, Avatar, Typography } from "@mui/material";
import ButtonStyled from "./ButtonStyled";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { green, red } from '@mui/material/colors';
import { formatPrice } from "../utils/formatPrice";

const GridItem = ({ description, category, onClickRemove, onClickEdit, variant, amount, date, currency }) => {

    return (
        <Grid item xs={12} md={6}>
            <Card sx={{ mb: 2 }}>
                <CardHeader
                    avatar={variant === "expense"
                        ? <Avatar sx={{ bgcolor: red[500] }}>
                            E
                        </Avatar>
                        :
                        <Avatar sx={{ bgcolor: green[500] }}>
                            I
                        </Avatar>
                    }
                    title={
                        <Typography
                            variant="h4"
                        >
                            {category}
                        </Typography>
                    }
                    subheader={
                        <Typography
                            variant="h6"
                            component={"p"}
                        >
                            {date}
                        </Typography>
                    }
                />
                <CardContent>
                    <Typography
                        variant="h5"
                        component={"p"}
                    >
                        {formatPrice(amount, currency)} - {description}
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                    <ButtonStyled
                        buttonText={"Remove"}
                        icon={<DeleteIcon />}
                        onClick={onClickRemove}
                    />
                    <ButtonStyled
                        buttonText={"Edit description"}
                        icon={<EditIcon />}
                        onClick={onClickEdit}
                    />
                </CardActions>
            </Card>
        </Grid>
    )
};

export default GridItem;
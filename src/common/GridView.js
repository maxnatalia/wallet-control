import { Grid } from "@mui/material";
import GridItem from "./GridItem";

const GridView = ({ removeItem, editItem, currency, displayDataItems }) => {

    return (
        <Grid container spacing={2}>
            {displayDataItems.map((item) => (
                <GridItem
                    key={item.id}
                    description={item.description}
                    category={item.category}
                    variant={item.variant}
                    amount={item.amount}
                    currency={currency}
                    date={item.date}
                    onClickRemove={() => removeItem(item.id)}
                    onClickEdit={() => editItem(item.id)}
                />
            ))}
        </Grid>
    )
};

export default GridView;
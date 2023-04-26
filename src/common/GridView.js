import { Grid } from "@mui/material";
import GridItem from "./GridItem";

const GridView = ({ listItems, removeItem }) => {

    return (
        <Grid container spacing={2}>
            {listItems.map((item) => (
                <GridItem
                    key={item.id}
                    description={item.description}
                    category={item.category}
                    variant={item.variant}
                    amount={item.amount}
                    currency={item.currency}
                    date={item.date}
                    onClick={() => removeItem(item.id)}
                />
            ))}
        </Grid>
    )
};

export default GridView;
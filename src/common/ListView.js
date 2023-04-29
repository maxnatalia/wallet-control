import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Avatar } from "@mui/material";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { green, red } from "@mui/material/colors";
import { formatPrice } from "../utils/formatPrice";

const ListView = ({ listItems, removeItem, currency }) => {

    return (
        <TableContainer component={Paper} sx={{ mb: 3 }}>
            <Table sx={{ minWidth: 650 }}>
                {listItems.length !== 0 &&
                    (<TableHead>
                        <TableRow>
                            <TableCell>Category</TableCell>
                            <TableCell>Remove</TableCell>
                            <TableCell align="left">Income/Expense</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    )}
                <TableBody>
                    {listItems.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.category}
                            </TableCell>
                            <TableCell align="left">
                                <Tooltip title="Remove item">
                                    <IconButton aria-label="Remove item" onClick={() => removeItem(row.id)}>
                                        <DeleteForeverOutlinedIcon color="primary" />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                            <TableCell align="left">
                                {row.variant === "expense"
                                    ? <Avatar sx={{ bgcolor: red[500] }}>
                                        E
                                    </Avatar>
                                    :
                                    <Avatar sx={{ bgcolor: green[500] }}>
                                        I
                                    </Avatar>
                                }
                            </TableCell>
                            <TableCell align="left">{row.description}</TableCell>
                            <TableCell align="left">{row.date}</TableCell>
                            <TableCell align="left">{formatPrice(row.amount, currency)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default ListView;
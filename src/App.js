import { Typography, Box } from "@mui/material";
import InputField from "./common/InputField";
import SelectField from "./common/SelectField";
import Form from "./common/Form";

const App = () => {
  return (
    <Box>
      <Typography variant="h1">
        Wallet Control
      </Typography>
      <Box>
        <Typography variant="h3"> Form </Typography>
        <Form>
          <InputField
            helperText="Specify the expense/income name"
            label="Text label"
            type="text"
            name="item"
            placeholder="Text label"
          />
          <SelectField
            helperText="Choose category"
            label="Category"
            name="select"
            options={["raz", "dwa"]}
          />
        </Form>
      </Box>
      <Typography variant="h3">

        List
      </Typography>
    </Box>
  );
}

export default App;

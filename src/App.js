import { Container, Box, ThemeProvider } from "@mui/material";
import ViewItems from "./common/ViewItems";
import Navigation from "./common/Navigation";
import FormBudget from "./common/FormBudget";
import Result from "./common/Result";
import { useFormBudget } from "./common/useFormBudget";
import useThemeMode from "./utils/useThemeMode";

const App = () => {
  const { listItems, removeItem, fields, handleFieldChange, handleSubmit, validationAmount, totalAmount, currency, handleCurrency } = useFormBudget();
  const { darkMode, handleModeChange, theme } = useThemeMode();

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} >
        <Navigation
          darkMode={darkMode}
          handleModeChange={handleModeChange}
          currency={currency}
          handleCurrency={handleCurrency}
        />
        <Result
          totalAmount={totalAmount}
          currency={currency} />
        <Container
          maxWidth="md"
          sx={{
            backgroundColor: "background.default",
            color: "text.primary",
            borderRadius: 2,
            p: 2,
            mt: 2
          }}
        >
          <FormBudget
            listItems={listItems}
            removeItem={removeItem}
            fields={fields}
            handleFieldChange={handleFieldChange}
            handleSubmit={handleSubmit}
            validationAmount={validationAmount}
          />
          <ViewItems
            listItems={listItems}
            removeItem={removeItem}
            currency={currency}
          />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;

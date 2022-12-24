import { FormProvider } from "./contexts/FormContext";
import { Router } from "./router";

function App() {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
}

export default App;

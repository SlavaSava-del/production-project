import { createRoot } from "react-dom/client";
import App from "./App";
import ThemeProvider from "./theme/ThemeProvider";

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);

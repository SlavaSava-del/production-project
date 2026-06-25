import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import App from "./app/App";
import "@/shared/config/i18n/i18n";

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/ubuntu";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";

import { theme } from "./theme/index.js";
// optional, you can leave it out if you don’t need custom theme

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);

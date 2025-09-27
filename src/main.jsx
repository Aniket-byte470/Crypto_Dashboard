import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { theme } from "./theme/index.js";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Transaction from "./Pages/Transaction/Transaction.jsx";
import Support from "./Pages/Support/Support.jsx";

import "@fontsource/ubuntu";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/Transaction",
    element: <Transaction />,
  },
  {
    path: "/Support",
    element: <Support />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);

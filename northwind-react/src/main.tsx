import { ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { App } from "./App";
import { Theme } from "./assets";
import { CartProvider } from "./configs";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={Theme}>
        <CartProvider>
          <App />
        </CartProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import { BudgetsProvider } from "./Contexts/BudgetsContext";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import {Provider} from 'react-redux';
import {store} from './store/index';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>

      <BudgetsProvider>
      <ChakraProvider>
        <BrowserRouter>
          {" "}
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </BudgetsProvider>
    </Provider>
    
  </React.StrictMode>
);

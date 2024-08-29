import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ModalProvider from "./components/ModalProvider/ModalProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <ModalProvider>
                <App />
            </ModalProvider>
        </BrowserRouter>
    </StrictMode>
);

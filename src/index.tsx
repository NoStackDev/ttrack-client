import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const container: any = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);

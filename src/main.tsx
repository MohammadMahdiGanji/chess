// import dependency

import { createRoot } from "react-dom/client";

// import component
import App from "./app.tsx";

// import stype
import "./assets/input.css";

createRoot(document.getElementById("root")!).render(<App />);

// import dependency
import { type JSX } from "react";

// import component
import Chess from "./page/chess";

// import provider context
import { ChessContextProvider } from "./context/chess";

function App(): JSX.Element {
  return (
    <div className="text-center">
      <ChessContextProvider>
        <Chess />
      </ChessContextProvider>
    </div>
  );
}

export default App;

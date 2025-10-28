// import dependency
import { createContext, useState, type FC } from "react";

// import type
import { type SquareType } from "../type/type";

// import data
import { squares } from "../data";

// type

interface ChessContextType {
  square: SquareType[];
  setSquare: React.Dispatch<React.SetStateAction<SquareType[]>>;
  setAllCapture: React.Dispatch<React.SetStateAction<SquareType[]>>;
  allCapture: SquareType[];
}

export const ChessContext = createContext({} as ChessContextType);

export const ChessContextProvider: FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [square, setSquare] = useState<SquareType[]>(squares);
  const [allCapture, setAllCapture] = useState<SquareType[]>([]);
  return (
    <ChessContext.Provider
      value={{ square, setSquare, setAllCapture, allCapture }}
    >
      {children}
    </ChessContext.Provider>
  );
};

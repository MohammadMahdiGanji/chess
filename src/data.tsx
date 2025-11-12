// imort img
import { FaChessRook } from "react-icons/fa6";
import { FaChessKnight } from "react-icons/fa6";
import { FaChessBishop } from "react-icons/fa6";
import { FaChessQueen } from "react-icons/fa6";
import { FaChessKing } from "react-icons/fa6";
import { FaChessPawn } from "react-icons/fa6";

// import type
import { type SquareType } from "./type/type";

// types
interface initailSquareType {
  position: string;
  nut: React.ReactNode;
  name: string;
  player: "white" | "black" | "";
}

// datas
export const row: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];
export const col: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

export const squares: SquareType[] = [];

const initailSquare: initailSquareType[] = [
  { position: "A1", nut: <FaChessRook />, name: "rook", player: "white" },
  { position: "A2", nut: <FaChessKnight />, name: "knight", player: "white" },
  { position: "A3", nut: <FaChessBishop />, name: "bishop", player: "white" },
  { position: "A4", nut: <FaChessKing />, name: "king", player: "white" },
  { position: "A5", nut: <FaChessQueen />, name: "queen", player: "white" },
  { position: "A6", nut: <FaChessBishop />, name: "bishop", player: "white" },
  { position: "A7", nut: <FaChessKnight />, name: "knight", player: "white" },
  { position: "A8", nut: <FaChessRook />, name: "rook", player: "white" },
  ...col.map((p) => ({
    position: `B${p}`,
    nut: <FaChessPawn />,
    name: "pawn",
    player: "white" as const,
  })),

  { position: "H1", nut: <FaChessRook />, name: "rook", player: "black" },
  { position: "H2", nut: <FaChessKnight />, name: "knight", player: "black" },
  { position: "H3", nut: <FaChessBishop />, name: "bishop", player: "black" },
  { position: "H4", nut: <FaChessQueen />, name: "queen", player: "black" },
  { position: "H5", nut: <FaChessKing />, name: "king", player: "black" },
  { position: "H6", nut: <FaChessBishop />, name: "bishop", player: "black" },
  { position: "H7", nut: <FaChessKnight />, name: "knight", player: "black" },
  { position: "H8", nut: <FaChessRook />, name: "rook", player: "black" },
  ...col.map((p) => ({
    position: `G${p}`,
    nut: <FaChessPawn />,
    name: "pawn",
    player: "black" as const,
  })),
];

row.forEach((r) => {
  col.forEach((c) => {
    const square: SquareType = {
      id: crypto.randomUUID(),
      position: `${r}${c}`,
      pointer: false,
      name: "",
      nut: null,
      active: false,
      player: "",
      hasMoved: false,
      isCheckBlack: false,
      isCHeckWhite: false,
    };
    squares.push(square);
  });
});

squares.forEach((i) => {
  const find = initailSquare.find((item) => item.position === i.position);

  if (find) {
    i.nut = find.nut;
    i.name = find.name;
    i.player = find.player;
  }
});

// import rule
import { availableMoveRook } from "./rook";
import { avialiableBishopMove } from "./bishop";
import { availableMoveRookCheck } from "./rook";
import { avialiableBishopMoveCheck } from "./bishop";

// import type
import { type SquareType } from "../type/type";

interface AvialableMoveQueen {
  square: SquareType[];
  position: string;
}

export const avialableMoveQueen = ({
  square,
  position,
}: AvialableMoveQueen) => {
  let moveQueen = [
    ...availableMoveRook({ square, position }),
    ...avialiableBishopMove({ square, position }),
  ];

  return moveQueen;
};
export const avialableMoveQueenCheck = ({
  square,
  position,
}: AvialableMoveQueen) => {
  let moveQueen = [
    ...avialiableBishopMoveCheck({ square, position }),
    ...availableMoveRookCheck({ square, position }),
  ];
  return moveQueen;
};

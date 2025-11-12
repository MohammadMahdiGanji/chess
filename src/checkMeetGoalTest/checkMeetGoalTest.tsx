// import type
import { type SquareType } from "../type/type";

// import rule
import { kingAvailableCheck } from "../rules/king";
import { findNutMoveRoadsKingCheckAll } from "../rules/check";

interface CheckMeetGoalTestProp {
  square: SquareType[];
  isTurn: boolean;
  isCheckKing: boolean;
}

export function checkMeetGoalTest({
  square,
  isTurn,
  isCheckKing,
}: CheckMeetGoalTestProp) {
  let goal: boolean;

  if (!isCheckKing) {
    goal = false;
  } else {
    const defientMoves: string[] = [];

    square.forEach((s) => {
      defientMoves.push(
        ...findNutMoveRoadsKingCheckAll({
          square,
          position: s.position,
          name: s.name,
          hasMoved: s.hasMoved,
          player: s.player,
          isTurn: isTurn,
        })
      );
    });

    let moveKing: string[];
    if (isTurn) {
      moveKing = kingAvailableCheck({ square, player: "white" });
    } else {
      moveKing = kingAvailableCheck({ square, player: "black" });
    }

    if (isCheckKing && defientMoves.length == 0 && moveKing.length == 0) {
      goal = true;
    } else {
      goal = false;
    }
  }

  return goal;
}

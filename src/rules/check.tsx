import { type SquareType } from "../type/type";

// import ruler
import { availableCheckPawn } from "./pawn";
import { availiabelMovisKnight } from "./knight";
import { availiabelMovisKnightCheck } from "./knight";
import { availableMoveRook } from "./rook";
import { availableMoveRookCheck } from "./rook";
import { avialiableBishopMove } from "./bishop";
avialiableBishopMoveCheck;
import { avialiableBishopMoveCheck } from "./bishop";
import { avialableMoveQueen } from "./queen";
import { avialableMoveQueenCheck } from "./queen";
import { roadsNutKingCheck } from "./king";
import { findAvailableMovisPawn } from "./pawn";
import { kingAvailable } from "./king";
import { avaliableMove } from "./shared";

interface AvailableCheckProp {
  square: SquareType[];
  isTurn: boolean;
}

interface SquareCheckProp {
  square: SquareType[];
  isTurn: boolean;
  setSquare: React.Dispatch<React.SetStateAction<SquareType[]>>;
}

interface ResetCheck {
  setSquare: React.Dispatch<React.SetStateAction<SquareType[]>>;
  square: SquareType[];
}

interface CheckKing {
  square: SquareType[];
  isTurn: boolean;
  setSquare: React.Dispatch<React.SetStateAction<SquareType[]>>;
}

interface FindNutMoveRoadsKingCheckAll {
  square: SquareType[];
  isTurn: boolean;
  name: string;
}

export const availableCheck = ({ square, isTurn }: AvailableCheckProp) => {
  let squareCheck: string[] = [];
  if (isTurn) {
    // start pawn
    let pwan: SquareType[] = square.filter(
      (square) => square.name === "pawn" && square.player == "black"
    );

    let findPown: string[] = [];

    pwan.forEach((pawn) => {
      findPown.push(...availableCheckPawn({ square, position: pawn.position }));
    });
    // end pawn

    // start knght
    let knight: SquareType[] = square.filter(
      (square) => square.name === "knight" && square.player === "black"
    );

    let findKnight: string[] = [];

    knight.forEach((knight) => {
      findKnight.push(
        ...availiabelMovisKnightCheck({ square, position: knight.position })
      );
    });
    // end knght

    let rook: SquareType[] = square.filter(
      (square) => square.name == "rook" && square.player === "black"
    );

    let findRook: string[] = [];

    rook.forEach((rook) => {
      findRook.push(
        ...availableMoveRookCheck({ square, position: rook.position })
      );
    });

    let bishop: SquareType[] = square.filter(
      (square) => square.name === "bishop" && square.player === "black"
    );

    const findBishop: string[] = [];

    bishop.forEach((bishop) => {
      findBishop.push(
        ...avialiableBishopMoveCheck({ square, position: bishop.position })
      );
    });

    let queen: SquareType[] = square.filter(
      (square) => square.name === "queen" && square.player === "black"
    );

    let findQueen: string[] = [];

    queen.forEach((queen) => {
      findQueen.push(
        ...avialableMoveQueenCheck({ square, position: queen.position })
      );
    });
    squareCheck = [
      ...findPown,
      ...findKnight,
      ...findRook,
      ...findBishop,
      ...findQueen,
    ];
  } else {
    // start pawn
    let pwan: SquareType[] = square.filter(
      (square) => square.name === "pawn" && square.player == "white"
    );

    let findPown: string[] = [];

    pwan.forEach((pawn) => {
      findPown.push(...availableCheckPawn({ square, position: pawn.position }));
    });
    // end pawn

    // start knght
    let knight: SquareType[] = square.filter(
      (square) => square.name === "knight" && square.player === "white"
    );

    let findKnight: string[] = [];

    knight.forEach((knight) => {
      findKnight.push(
        ...availiabelMovisKnightCheck({ square, position: knight.position })
      );
    });
    // end knght

    let rook: SquareType[] = square.filter(
      (square) => square.name == "rook" && square.player === "white"
    );

    let findRook: string[] = [];

    rook.forEach((rook) => {
      findRook.push(
        ...availableMoveRookCheck({ square, position: rook.position })
      );
    });

    let bishop: SquareType[] = square.filter(
      (square) => square.name === "bishop" && square.player === "white"
    );

    const findBishop: string[] = [];

    bishop.forEach((bishop) => {
      findBishop.push(
        ...avialiableBishopMoveCheck({ square, position: bishop.position })
      );
    });

    let queen: SquareType[] = square.filter(
      (square) => square.name === "queen" && square.player === "white"
    );

    let findQueen: string[] = [];

    queen.forEach((queen) => {
      findQueen.push(
        ...avialableMoveQueenCheck({ square, position: queen.position })
      );
    });
    squareCheck = [
      ...findPown,
      ...findKnight,
      ...findRook,
      ...findBishop,
      ...findQueen,
    ];
  }
  let uniqueSquareCherk = [...new Set(squareCheck)];

  return uniqueSquareCherk;
};

const resetCheck = ({ square, setSquare }: ResetCheck) => {
  let newSquare: SquareType[] = [];

  square.forEach((square) => {
    square.isCHeckWhite = false;
    square.isCheckBlack = false;

    newSquare.push(square);
  });
  setSquare(newSquare);
};

export const squareCheck = ({ square, isTurn, setSquare }: SquareCheckProp) => {
  resetCheck({ square, setSquare });

  let squareCheckPosition = availableCheck({ square, isTurn });
  let newSquareCheck: SquareType[] = [];

  let squareCheck: SquareType[] = [];
  square.forEach((square) => {
    squareCheckPosition.forEach((position) => {
      if (position === square.position) {
        if (isTurn) {
          square.isCheckBlack = true;
        } else {
          square.isCHeckWhite = true;
        }
      }
    });
    newSquareCheck.push(square);
  });
  setSquare(newSquareCheck);
};

export const checkking = ({ square, isTurn, setSquare }: CheckKing) => {
  squareCheck({ setSquare, isTurn, square });
};

// export const findNutMoveRoadsKingCheckAll = ({
//   square,
//   isTurn,
//   name,
// }: FindNutMoveRoadsKingCheckAll) => {
//   const rodsKingCheck = roadsNutKingCheck({ square, isTurn });
//   let pointerNutRoadsChech: string[] = [];
//   console.log(rodsKingCheck);
//   if (isTurn) {
//     const allMoveNut = square.filter((square) => square.player == "black");
//     const allMoveNutWhite = square.filter((square) => square.player == "white");

//     // start pawn
//     if (name == "pawn") {
//       const pawnWhite = allMoveNutWhite.filter(
//         (square) => square.name == "pawn"
//       );

//       const findMovePawnWhite: string[] = [];
//       pawnWhite.forEach((pawn) => {
//         findMovePawnWhite.push(
//           ...findAvailableMovisPawn({
//             square,
//             hasMoved: pawn.hasMoved,
//             player: pawn?.player,
//             position: pawn?.position,
//           })
//         );
//       });
//       let pointerNutRoadsChechWhite: string[] = [];
//       rodsKingCheck.forEach((road) => {
//         findMovePawnWhite.forEach((position) => {
//           if (position == road) {
//             pointerNutRoadsChechWhite.push(road);
//           }
//         });
//       });

//       const pawn = allMoveNut.filter((square) => square.name == "pawn");

//       const findMovePawn: string[] = [];
//       pawn.forEach((pawn) => {
//         findMovePawn.push(
//           ...findAvailableMovisPawn({
//             square,
//             hasMoved: pawn.hasMoved,
//             player: pawn?.player,
//             position: pawn?.position,
//           })
//         );
//       });

//       rodsKingCheck.forEach((road) => {
//         findMovePawn.forEach((position) => {
//           if (position == road) {
//             pointerNutRoadsChech.push(road);
//           }
//         });
//       });
//       pointerNutRoadsChechWhite.forEach((roadWhite) => {
//         rodsKingCheck.forEach((road) => {
//           if (roadWhite == road) {
//             pawn.forEach((pawn) => {
//               if (road == pawn.position) {
//                 pointerNutRoadsChech.push(road);
//               }
//             });
//           }
//         });
//       });
//     }
//     // end pawn

//     // start bishop

//     if (name == "bishop") {
//       const bishopWhite = allMoveNutWhite.filter(
//         (square) => square.name == "bishop"
//       );
//       const findMoveBishopWhite: string[] = [];
//       bishopWhite.forEach((bishop) => {
//         findMoveBishopWhite.push(
//           ...avialiableBishopMove({
//             square,

//             position: bishop?.position,
//           })
//         );
//       });

//       let pointerNutRoadsChechWhite: string[] = [];
//       rodsKingCheck.forEach((road) => {
//         findMoveBishopWhite.forEach((position) => {
//           if (position == road) {
//             pointerNutRoadsChechWhite.push(road);
//           }
//         });
//       });

//       const bishop = allMoveNut.filter((square) => square.name == "bishop");

//       const findMoveBishop: string[] = [];
//       bishop.forEach((bishop) => {
//         findMoveBishop.push(
//           ...avialiableBishopMove({
//             square,

//             position: bishop?.position,
//           })
//         );
//       });

//       rodsKingCheck.forEach((road) => {
//         findMoveBishop.forEach((position) => {
//           if (position == road) {
//             pointerNutRoadsChech.push(road);
//           }
//         });
//       });
//       console.log(pointerNutRoadsChechWhite);
//       pointerNutRoadsChechWhite.forEach((roadWhite) => {
//         rodsKingCheck.forEach((road) => {
//           if (roadWhite == road) {
//             bishop.forEach((bishop) => {
//               if (roadWhite == bishop.position) {
//                 pointerNutRoadsChech.push(road);
//               }
//             });
//           }
//         });
//       });
//     }

//     // end bishop

//     // start knight
//     if (name == "knight") {
//       const knightWhite = allMoveNutWhite.filter(
//         (square) => square.name == "knight"
//       );

//       const findMoveKnightWhite: string[] = [];
//       knightWhite.forEach((knight) => {
//         findMoveKnightWhite.push(
//           ...availiabelMovisKnight({
//             square,

//             position: knight?.position,
//           })
//         );
//       });

//       let pointerNutRoadsChechWhite: string[] = [];
//       rodsKingCheck.forEach((road) => {
//         findMoveKnightWhite.forEach((position) => {
//           if (position == road) {
//             pointerNutRoadsChechWhite.push(road);
//           }
//         });
//       });

//       const knight = allMoveNut.filter((square) => square.name == "knight");
//       const findMoveKnight: string[] = [];
//       knight.forEach((knight) => {
//         findMoveKnight.push(
//           ...availiabelMovisKnight({
//             square,

//             position: knight?.position,
//           })
//         );
//       });

//       rodsKingCheck.forEach((road) => {
//         findMoveKnight.forEach((position) => {
//           if (position == road) {
//             pointerNutRoadsChech.push(road);
//           }
//         });
//       });
//       pointerNutRoadsChechWhite.forEach((roadWhite) => {
//         rodsKingCheck.forEach((road) => {
//           if (roadWhite == road) {
//             knight.forEach((knight) => {
//               if (road === knight.position) {
//                 pointerNutRoadsChech.push(road);
//               }
//             });
//           }
//         });
//       });
//     }

//     // end knight

//     // start rook
//     if (name == "rook") {
//       const rookWhite = allMoveNutWhite.filter(
//         (square) => square.name == "rook"
//       );
//       const findMoveRookWhite: string[] = [];
//       rookWhite.forEach((rook) => {
//         findMoveRookWhite.push(
//           ...availableMoveRook({
//             square,

//             position: rook?.position,
//           })
//         );
//       });
//       let pointerNutRoadsChechWhite: string[] = [];
//       rodsKingCheck.forEach((road) => {
//         findMoveRookWhite.forEach((position) => {
//           if (position == road) {
//             pointerNutRoadsChechWhite.push(road);
//           }
//         });
//       });

//       const rook = allMoveNut.filter((square) => square.name == "rook");
//       const findMoveRook: string[] = [];
//       rook.forEach((rook) => {
//         findMoveRook.push(
//           ...availableMoveRook({
//             square,

//             position: rook?.position,
//           })
//         );
//       });

//       rodsKingCheck.forEach((road) => {
//         findMoveRook.forEach((position) => {
//           if (position == road) {
//             pointerNutRoadsChech.push(road);
//           }
//         });
//       });

//       pointerNutRoadsChechWhite.forEach((roadWhite) => {
//         rodsKingCheck.forEach((road) => {
//           if (roadWhite == road) {
//             rook.forEach((rook) => {
//               if (road === rook.position) {
//                 pointerNutRoadsChech.push(road);
//               }
//             });
//           }
//         });
//       });
//     }
//     // end rook

//     // start queen
//     if (name == "queen") {
//       const queenWhite = allMoveNutWhite.filter(
//         (square) => square.name == "queen"
//       );
//       const findMoveQueenWhite: string[] = [];
//       queenWhite.forEach((queen) => {
//         findMoveQueenWhite.push(
//           ...avialableMoveQueen({
//             square,

//             position: queen?.position,
//           })
//         );
//       });

//       let findPointerWhite: string[] = [];
//       rodsKingCheck.forEach((road) => {
//         findMoveQueenWhite.forEach((position) => {
//           if (position == road) {
//             findPointerWhite.push(road);
//           }
//         });
//       });

//       const queen = allMoveNut.filter((square) => square.name == "queen");
//       const findMoveQueen: string[] = [];
//       queen.forEach((queen) => {
//         findMoveQueen.push(
//           ...avialableMoveQueen({
//             square,

//             position: queen?.position,
//           })
//         );
//       });

//       rodsKingCheck.forEach((road) => {
//         findMoveQueen.forEach((position) => {
//           if (position == road) {
//             pointerNutRoadsChech.push(road);
//           }
//         });
//       });

//       findMoveQueenWhite.forEach((roadWhite) => {
//         rodsKingCheck.forEach((road) => {
//           if (roadWhite == road) {
//             queen.forEach((queen) => {
//               if (road === queen.position) {
//                 pointerNutRoadsChech.push(road);
//               }
//             });
//           }
//         });
//       });
//     }

//     // end queen
//   } else {
//     const allMoveNut = square.filter((square) => square.player == "white");
//     const allMoveNutBlack = square.filter((square) => square.player == "black");

//     // start pawn
//     if (name == "pawn") {
//       const pawnBlack = allMoveNutBlack.filter(
//         (square) => square.name == "pawn"
//       );

//       const findMovePawnBlack: string[] = [];
//       pawnBlack.forEach((pawn) => {
//         findMovePawnBlack.push(
//           ...findAvailableMovisPawn({
//             square,
//             hasMoved: pawn.hasMoved,
//             player: pawn?.player,
//             position: pawn?.position,
//           })
//         );
//       });

//       let pointerNutRoadsChecBlack: string[] = [];
//       rodsKingCheck.forEach((road) => {
//         findMovePawnBlack.forEach((position) => {
//           if (position == road) {
//             pointerNutRoadsChecBlack.push(road);
//           }
//         });
//       });

//       const pawn = allMoveNut.filter((square) => square.name == "pawn");

//       const findMovePawn: string[] = [];
//       pawn.forEach((pawn) => {
//         findMovePawn.push(
//           ...findAvailableMovisPawn({
//             square,
//             hasMoved: pawn.hasMoved,
//             player: pawn?.player,
//             position: pawn?.position,
//           })
//         );
//       });

//       rodsKingCheck.forEach((road) => {
//         findMovePawn.forEach((position) => {
//           if (position == road) {
//             pointerNutRoadsChech.push(road);
//           }
//         });
//       });

//       pointerNutRoadsChecBlack.forEach((roadBlack) => {
//         rodsKingCheck.forEach((road) => {
//           if (roadBlack == road) {
//             pawn.forEach((pawn) => {
//               if (road == pawn.position) {
//                 pointerNutRoadsChech.push(road);
//               }
//             });
//           }
//         });
//       });
//     }
//     // end pawn

//     // start bishop

//     if (name == "bishop") {
//       const bishopBlack = allMoveNutBlack.filter(
//         (square) => square.name == "bishop"
//       );

//       const findMoveBishopBlack: string[] = [];
//       bishopBlack.forEach((bishop) => {
//         findMoveBishopBlack.push(
//           ...avialiableBishopMove({
//             square,

//             position: bishop?.position,
//           })
//         );
//       });

//       let pointerNutRoadsChechBlack: string[] = [];
//       rodsKingCheck.forEach((road) => {
//         findMoveBishopBlack.forEach((position) => {
//           if (position == road) {
//             pointerNutRoadsChechBlack.push(road);
//           }
//         });
//       });

//       const bishop = allMoveNut.filter((square) => square.name == "bishop");

//       const findMoveBishop: string[] = [];
//       bishop.forEach((bishop) => {
//         findMoveBishop.push(
//           ...avialiableBishopMove({
//             square,

//             position: bishop?.position,
//           })
//         );
//       });

//       rodsKingCheck.forEach((road) => {
//         findMoveBishop.forEach((position) => {
//           if (position == road) {
//             pointerNutRoadsChech.push(road);
//           }
//         });
//       });

//       pointerNutRoadsChechBlack.forEach((roadBlack) => {
//         rodsKingCheck.forEach((road) => {
//           if (roadBlack == road) {
//             bishop.forEach((bishop) => {
//               if (road == bishop.position) {
//                 pointerNutRoadsChech.push(road);
//               }
//             });
//           }
//         });
//       });
//     }

//     // end bishop

//     // start knight
//     if (name == "knight") {
//       const knightBlack = allMoveNutBlack.filter(
//         (square) => square.name == "knight"
//       );

//       const findMoveKnightBlack: string[] = [];
//       knightBlack.forEach((knight) => {
//         findMoveKnightBlack.push(
//           ...availiabelMovisKnight({
//             square,

//             position: knight?.position,
//           })
//         );
//       });

//       let pointerNutRoadsChechBlack: string[] = [];
//       rodsKingCheck.forEach((road) => {
//         findMoveKnightBlack.forEach((position) => {
//           if (position == road) {
//             pointerNutRoadsChechBlack.push(road);
//           }
//         });
//       });

//       const knight = allMoveNut.filter((square) => square.name == "knight");

//       const findMoveKnight: string[] = [];
//       knight.forEach((knight) => {
//         findMoveKnight.push(
//           ...availiabelMovisKnight({
//             square,

//             position: knight?.position,
//           })
//         );
//       });

//       rodsKingCheck.forEach((road) => {
//         findMoveKnight.forEach((position) => {
//           if (position == road) {
//             pointerNutRoadsChech.push(road);
//           }
//         });
//       });

//       pointerNutRoadsChechBlack.forEach((roadBlack) => {
//         rodsKingCheck.forEach((road) => {
//           if (roadBlack == road) {
//             knight.forEach((knight) => {
//               if (road == knight.position) {
//                 pointerNutRoadsChech.push(road);
//               }
//             });
//           }
//         });
//       });
//     }
//     // end knight

//     // start rook
//     if (name == "rook") {
//       const rookBlack = allMoveNutBlack.filter(
//         (square) => square.name == "rook"
//       );

//       const findMoveRookBlack: string[] = [];
//       rookBlack.forEach((rook) => {
//         findMoveRookBlack.push(
//           ...availableMoveRook({
//             square,

//             position: rook?.position,
//           })
//         );
//       });

//       let pointerNutRoadsChechBlack: string[] = [];
//       rodsKingCheck.forEach((road) => {
//         findMoveRookBlack.forEach((position) => {
//           if (position == road) {
//             pointerNutRoadsChechBlack.push(road);
//           }
//         });
//       });

//       const rook = allMoveNut.filter((square) => square.name == "rook");

//       const findMoveRook: string[] = [];
//       rook.forEach((rook) => {
//         findMoveRook.push(
//           ...availableMoveRook({
//             square,

//             position: rook?.position,
//           })
//         );
//       });

//       rodsKingCheck.forEach((road) => {
//         findMoveRook.forEach((position) => {
//           if (position == road) {
//             pointerNutRoadsChech.push(road);
//           }
//         });
//       });

//       pointerNutRoadsChechBlack.forEach((roadBlack) => {
//         rodsKingCheck.forEach((road) => {
//           if (roadBlack == road) {
//             rook.forEach((rook) => {
//               if (road == rook.position) {
//                 pointerNutRoadsChech.push(road);
//               }
//             });
//           }
//         });
//       });
//     }
//     // end rook

//     // start queen
//     if (name == "queen") {
//       const queenBlack = allMoveNutBlack.filter(
//         (square) => square.name == "queen"
//       );

//       const findMoveQueenBalck: string[] = [];
//       queenBlack.forEach((queen) => {
//         findMoveQueenBalck.push(
//           ...avialableMoveQueen({
//             square,

//             position: queen?.position,
//           })
//         );
//       });

//       let pointerNutRoadsChechBlack: string[] = [];
//       rodsKingCheck.forEach((road) => {
//         findMoveQueenBalck.forEach((position) => {
//           if (position == road) {
//             pointerNutRoadsChechBlack.push(road);
//           }
//         });
//       });

//       const queen = allMoveNut.filter((square) => square.name == "queen");

//       const findMoveQueen: string[] = [];
//       queen.forEach((queen) => {
//         findMoveQueen.push(
//           ...avialableMoveQueen({
//             square,

//             position: queen?.position,
//           })
//         );
//       });

//       rodsKingCheck.forEach((road) => {
//         findMoveQueen.forEach((position) => {
//           if (position == road) {
//             pointerNutRoadsChech.push(road);
//           }
//         });
//       });

//       pointerNutRoadsChechBlack.forEach((roadBlack) => {
//         rodsKingCheck.forEach((road) => {
//           if (roadBlack == road) {
//             queen.forEach((queen) => {
//               if (road == queen.position) {
//                 pointerNutRoadsChech.push(road);
//               }
//             });
//           }
//         });
//       });
//     }
//     // end queen
//   }
//   const uniquePointerNutRoadsChech = new Set(pointerNutRoadsChech);
//   pointerNutRoadsChech = [...uniquePointerNutRoadsChech];
//   return pointerNutRoadsChech;
// };

interface FindAllMoveNut {
  position: string;
  square: SquareType[];
  player: "black" | "white" | "";
  hasMoved: boolean;
  name: string;
  isTurn: boolean;
}

export const findNutMoveRoadsKingCheckAll = ({
  position,
  square,
  player,
  hasMoved,
  name,
  isTurn,
}: FindAllMoveNut) => {
  const roadsnutAll: string[] = roadsNutKingCheck({ square, isTurn });

  const pointerMove: string[] = [];
  switch (name) {
    case "pawn": {
      const pawn = findAvailableMovisPawn({
        square,
        hasMoved,
        player,
        position,
      });
      roadsnutAll.forEach((road) => {
        pawn.forEach((pawn) => {
          if (road == pawn) {
            pointerMove.push(road);
          }
        });
      });
      break
    }
    case "bishop": {
      const bishop = avialiableBishopMove({
        square,
        position,
      });
      roadsnutAll.forEach((road) => {
        bishop.forEach((bishop) => {
          if (road == bishop) {
            pointerMove.push(road);
          }
        });
      });
      break
    }
    case "knight": {
      const knight = availiabelMovisKnight({
        square,
        position,
      });
      roadsnutAll.forEach((road) => {
        knight.forEach((knight) => {
          if (road == knight) {
            pointerMove.push(road);
          }
        });
      });
      break
    }
    case "rook": {
      const rook = availableMoveRook({
        square,
        position,
      });
      roadsnutAll.forEach((road) => {
        rook.forEach((rook) => {
          if (road == rook) {
            pointerMove.push(road);
          }
        });
      });
      break
    }
    case "queen": {
      const queen = avialableMoveQueen({
        square,
        position,
      });
      roadsnutAll.forEach((road) => {
        queen.forEach((queen) => {
          if (road == queen) {
            pointerMove.push(road);
          }
        });
      });
    }
  }

  return pointerMove;
};

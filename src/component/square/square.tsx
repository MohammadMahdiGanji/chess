// import dependency
import { useContext, useEffect, useState, type JSX } from "react";

// import type
import { type SquareType } from "../../type/type";

// import rules
import { isPromotionPawn } from "../../rules/pawn";
import {
  activeNut,
  setPpointer,
  resetPointer,
  avaliableMove,
  moveNut,
} from "../../rules/shared";
import { nutMoveFronKing } from "../../rules/king";
import { findNutMoveRoadsKingCheck } from "../../rules/king";

// import context
import { ChessContext } from "../../context/chess";

// import component
import ModalPromotion from "../modal/modalPromotion";
// type
interface SquarePropType {
  id: string;
  position: string;
  pointer: boolean;
  name: string;
  nut: React.ReactNode;
  player: "white" | "black" | "";
  hasMoved: boolean;
  active: boolean;
  isTurn: boolean;
  setIsTurn: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckBlack: boolean;
  isCHeckWhite: boolean;
  isCheckKing: boolean;
}

export default function Square({
  id,
  position,
  pointer,
  name,
  nut,
  player,
  hasMoved,
  active,
  isTurn,
  isCheckBlack,
  isCHeckWhite,
  setIsTurn,
  isCheckKing,
}: SquarePropType): JSX.Element {
  const { square, setSquare, setAllCapture } = useContext(ChessContext);

  const [infoPawnPromotion, setInfoPawnPromotion] = useState<{
    result: boolean;
    promotion: SquareType[];
  }>();

  const positionString: string = String(position.slice(0, 1));

  useEffect(() => {}, [square]);

  const clickHandlerSquare = () => {
    if (!isCheckKing) {
      resetPointer({ square, setSquare });

      if (!pointer == true && name != "") {
        activeNut({ position, setSquare, square });
        setTimeout(() => {
          const pointerMovedAllNut = avaliableMove({
            position,
            square,
            player,
            hasMoved,
            name,
          });

          setPpointer({
            square,
            setSquare,
            pointer: pointerMovedAllNut,
            isTurn,
            player,
          });
        }, 0);
      }

      moveNut({
        position,
        setSquare,
        square,
        pointer,
        setAllCapture,
        name,
        player,
        setIsTurn,
      });
      const isPownPromotion = isPromotionPawn({ square });
      if (isPownPromotion) {
        setInfoPawnPromotion(isPownPromotion);
      }
      nutMoveFronKing(square, isTurn, player);
    } else {
      resetPointer({ square, setSquare });

      if (!pointer == true && name != "") {
        activeNut({ position, setSquare, square });
        setTimeout(() => {
          const pointerMovedAllNut = findNutMoveRoadsKingCheck({
            square,
            isTurn,
            position,
            name,
          });
          setPpointer({
            square,
            setSquare,
            pointer: pointerMovedAllNut,
            isTurn,
            player,
          });
        }, 0);
      }
      moveNut({
        position,
        setSquare,
        square,
        pointer,
        setAllCapture,
        name,
        player,
        setIsTurn,
      });
      const isPownPromotion = isPromotionPawn({ square });
      if (isPownPromotion) {
        setInfoPawnPromotion(isPownPromotion);
      }
    }
  };

  return (
    <span
      onClick={clickHandlerSquare}
      className={`w-16 h-16 
      transition-all
      duration-150
     col-span-1     
     bg-[rgba(51,200,211,0.22)]
     flex items-center justify-center
            ${
              name == "king" &&
              player == "black" &&
              isCHeckWhite == true &&
              "bg-[rgba(255,0,0,0.5)]"
            }
       ${
         name == "king" &&
         player == "white" &&
         isCheckBlack == true &&
         "bg-[rgba(255,0,0,0.5)]"
       }
     ${
       name == "king" && isCHeckWhite == true && player == "black"
         ? "bg-[#ff3434a8]"
         : name == "king" && isCheckBlack == true && player == "white"
         ? "bg-[#ff3434]"
         : pointer && name != ""
         ? "bg-[#feb1b167]"
         : ["A", "C", "E", "G"].includes(positionString)
         ? "odd:bg-[rgba(51,200,211,0.49)]"
         : "even:bg-[rgba(51,200,211,0.49)]"
     }
     ${pointer && "cursor-pointer"}
       ${pointer && name != "" && "bg-red-300"} `}
    >
      <span
        className={`text-5xl ${
          player == "white" ? "text-white" : "text-black"
        } ${nut !== "" ? "cursor-pointer" : ""}`}
      >
        {pointer && (
          <span
            className={`w-4 h-4 bg-[rgb(255,0,255)] rounded-full block ${
              pointer && name != "" ? "hidden" : "block"
            }`}
          ></span>
        )}
        {nut}
      </span>
      <ModalPromotion
        isPownPromotion={infoPawnPromotion}
        square={square}
        setSquare={setSquare}
      />
    </span>
  );
}

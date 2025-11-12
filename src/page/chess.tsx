// import dependency
import { useContext, useEffect, useState, type JSX } from "react";

//import icons
import { AiFillLike } from "react-icons/ai";

// import compoenent
import Square from "../component/square/square";
import Capture from "../component/capture/capture";

// import context
import { ChessContext } from "../context/chess";

// import rule
import { checkking } from "../rules/check";
import { checkMeetGoalTest } from "../checkMeetGoalTest/checkMeetGoalTest";
import { findNutMoveRoadsKingCheckAll } from "../rules/check";

import { kingAvailableCheck } from "../rules/king";

import ModuleCheckMeet from "../component/moduleCheckMeet";

export default function Chess(): JSX.Element {
  const { square, allCapture, setSquare } = useContext(ChessContext);
  const [isTurn, setIsTurn] = useState<boolean>(false);
  const [isCheckKing, setIsCheckKing] = useState<boolean>(false);

  useEffect(() => {
    checkking({ square, isTurn, setSquare });
  }, [isTurn]);

  useEffect(() => {
    let isCheck: boolean = false;
    const kingSquareWhite = square.find(
      (s) => s.name === "king" && s.player == "white"
    );
    const kingSquareBlack = square.find(
      (s) => s.name === "king" && s.player == "black"
    );

    if (kingSquareWhite || kingSquareBlack) {
      if (
        kingSquareBlack?.isCHeckWhite == true ||
        kingSquareWhite?.isCheckBlack == true
      ) {
        isCheck = true;
        setIsCheckKing(true);
      } else {
        isCheck = false;
        setIsCheckKing(false);
      }
    }
    if (!isCheck) return;

    let defientMoves: string[] = [];

    square.forEach((s) => {
      if (s.name == "pawn") {
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
      } else {
        defientMoves.push(
          ...findNutMoveRoadsKingCheckAll({
            square,
            position: s.position,
            name: s.name,
            hasMoved: false,
            player: s.player,
            isTurn: isTurn,
          })
        );
      }
    });

    const u = new Set(defientMoves);
    defientMoves = [...u];

    let moveKing: string[];
    if (isTurn) {
      moveKing = kingAvailableCheck({ square, player: "white" });
    } else {
      moveKing = kingAvailableCheck({ square, player: "black" });
    }

    if (isCheck && defientMoves.length == 0 && moveKing.length == 0) {
      setTimeout(() => {
        // alert("checkMeet");
      }, 10);
    }

    console.log(
      checkMeetGoalTest({ square, isTurn, isCheckKing: isCheck }),
      "test goal"
    );
  }, [square, isCheckKing, isTurn]);

  return (
    <div
      className="flex gap-10 h-screen w-full bg-black
     items-center justify-center relative overflow-hidden"
    >
      <div
        className={`self-start mt-24 grid "grid-rows-8 gap-5 grid-cols-3 mr-[700px] relative z-30`}
      >
        {allCapture.map((capture, index) => {
          if (capture.player == "white") {
            return <Capture key={`${capture.id}${index}`} {...capture} />;
          }
        })}
      </div>
      <div
        className="p-4rounded-xl shadow-[0px_0px_10px_rgb(255,255,255,1)] fixed border-[40px] z-50
      border-[rgba(255,255,255,0.01)] rounded-xl backdrop-blur-lg"
      >
        <div className="grid grid-cols-8 shadow-[0px_0px_10px_rgb(255,255,255,0.8)] rounded-xl overflow-hidden">
          {square.map((s) => (
            <Square
              key={`${s.id}-${s.position}-${s.player}-${s.name}`}
              {...s}
              isTurn={isTurn}
              setIsTurn={setIsTurn}
              isCheckKing={isCheckKing}
            />
          ))}
        </div>
      </div>

      <div
        className={`self-start mt-24 grid "grid-rows-8 gap-5 grid-cols-3 relative z-30`}
      >
        {allCapture.map((capture, index) => {
          if (capture.player == "black") {
            return (
              <Capture
                key={`${capture.position}${capture.name}${index}`}
                {...capture}
              />
            );
          }
        })}
      </div>
      <ModuleCheckMeet
        isTurn={isTurn}
        checkMeet={checkMeetGoalTest({
          square,
          isTurn,
          isCheckKing: isCheckKing,
        })}
      />

      <div className="absolute top-5 w-[200px] h-[200px]  z-0 bg-[#8dd716] left-5 rounded-full"></div>
      <div
        className="absolute top-15 w-[200px]
       h-[200px] z-10 bg-[rgba(255,255,255,0.1)]  left-20 rounded-full backdrop-blur-lg"
      ></div>
      <div
        className="absolute top-32 w-[200px]
       h-[200px] z-20 bg-[rgba(255,255,255,0.1)]  left-32 rounded-full backdrop-blur-md"
      ></div>

      <div className="absolute top-5 w-[200px] h-[200px]  z-0 bg-[#d1d716] right-5 rounded-full"></div>
      <div
        className="absolute top-15 w-[200px]
       h-[200px] z-20 bg-[rgba(255,255,255,0.1)]  right-20 rounded-full backdrop-blur-lg"
      ></div>
      <div
        className="absolute top-32 w-[200px]
       h-[200px] z-20 bg-[rgba(255,255,255,0.1)]  right-32 rounded-full backdrop-blur-md"
      ></div>

      <div className="absolute bottom-5 w-[200px] h-[200px]  z-0 bg-[#00f7ff] right-5 rounded-full"></div>
      <div
        className="absolute bottom-15 w-[200px]
       h-[200px] z-10 bg-[rgba(255,255,255,0.1)]  right-20 rounded-full backdrop-blur-lg"
      ></div>

      <div
        className="absolute bottom-32 w-[200px]
       h-[200px] z-20 bg-[rgba(255,255,255,0.1)]  right-32 rounded-full backdrop-blur-md"
      ></div>
      <div className="absolute bottom-5 w-[200px] h-[200px]  z-0 bg-[#16d7b7] left-5 rounded-full"></div>
      <div
        className="absolute bottom-15 w-[200px]
       h-[200px] z-10 bg-[rgba(255,255,255,0.1)]  left-20 rounded-full backdrop-blur-lg"
      ></div>
      <div
        className="absolute bottom-32 w-[200px]
       h-[200px] z-20 bg-[rgba(255,255,255,0.1)]  left-32 rounded-full backdrop-blur-md"
      ></div>
      <div
        className="absolute w-[200px]
       h-[200px] z-10 bg-[rgb(255,100,149)] right-[400px] top-[10px]  -z-10 rounded-full "
      ></div>

      <div
        className="absolute w-[150px]
       h-[150px] z-10 bg-[rgb(107,207,89)] left-[400px] top-[20px] rotate-12  -z-10 rounded-2xl"
      ></div>

      <div
        className="absolute w-[150px]
       h-[150px] z-10 bg-[rgb(239,239,23)] right-[430px] bottom-[40px] -rotate-12  -z-10 rounded-2xl "
      ></div>

      <div
        className="absolute w-[200px]
       h-[200px] z-10 bg-[rgb(255,0,106)] left-[400px] bottom-[20px]  -z-10 rounded-full "
      ></div>
      <div
        className="absolute w-[150px]
       h-[150px] z-10 bg-[rgb(255,111,0)] right-[430px] bottom-[280px] rotate-24  -z-10 rounded-3xl "
      ></div>
      <div
        className="absolute w-[150px]
       h-[150px] z-10 bg-[rgb(91,137,255)] left-[430px] bottom-[280px] rotate-24  -z-10 rounded-3xl "
      ></div>

      <div
        className="absolute w-[150px]
       h-[30px] z-10 bg-[rgb(255,0,255)] top-[50px] rotate-45  -z-10 rounded-3xl "
      ></div>
      <div
        className="absolute w-[150px]
       h-[30px] z-10 bg-[rgb(255,0,255)] top-[50px] -rotate-45  -z-10 rounded-3xl "
      ></div>

      <div
        className="absolute w-[150px]
       h-[30px] z-10 bg-[rgb(255,0,255)] bottom-[50px] rotate-45  -z-10 rounded-3xl "
      ></div>
      <div
        className="absolute w-[150px]
       h-[30px] z-10 bg-[rgb(255,0,255)] bottom-[50px] -rotate-45  -z-10 rounded-3xl "
      ></div>
      <div
        className="absolute w-[150px]
       h-[30px] z-10 bg-[rgb(255,0,255)] left-[200px]   -z-10 rounded-3xl "
      ></div>
      <div
        className="absolute w-[150px]
       h-[30px] z-10 bg-[rgb(255,0,255)] left-[200px] rotate-90  -z-10 rounded-3xl "
      ></div>

      <div
        className="absolute w-[150px]
       h-[30px] z-10 bg-[rgb(255,0,255)] right-[200px]   -z-10 rounded-3xl "
      ></div>
      <div
        className="absolute w-[150px]
       h-[30px] z-10 bg-[rgb(255,0,255)] right-[200px] rotate-90  -z-10 rounded-3xl "
      ></div>
      <div
        className="absolute w-[150px]
       h-[30px] z-10 bg-[rgb(255,0,200)]  right-[-80px] -rotate-24  -z-10 rounded-3xl mb-26"
      ></div>
      <div
        className="absolute w-[150px]
       h-[30px] z-10 bg-[rgb(0,255,106)] right-[-70px] -rotate-24  -z-10 rounded-3xl "
      ></div>
      <div
        className="absolute w-[150px]
       h-[30px] z-10 bg-[rgb(0,166,255)] right-[-60px] -rotate-24  -z-10 rounded-3xl mt-26"
      ></div>
      <div
        className="absolute w-[150px]
       h-[30px] z-10 bg-[rgb(255,0,200)]  left-[-100px] -rotate-24  -z-10 rounded-3xl mb-20"
      ></div>
      <div
        className="absolute w-[150px]
       h-[30px] z-10 bg-[rgb(0,255,106)] left-[-80px] -rotate-24  -z-10 rounded-3xl "
      ></div>
      <div
        className="absolute w-[150px]
       h-[30px] z-10 bg-[rgb(0,166,255)] left-[-60px] -rotate-24  -z-10 rounded-3xl mt-20"
      ></div>

      <div className="w-[100px] absolute z-20 h-[150px] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm right-[-70px] rounded-full"></div>
      <div className="w-[100px] absolute z-20 h-[150px] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm left-[-70px] rounded-full"></div>
      <span
        className={`fixed top-10 right-10 transition-all duration-300  z-100 ${
          checkMeetGoalTest({
            square,
            isTurn,
            isCheckKing,
          })
            ? "rotate-0"
            : "rotate-180"
        }`}
      >
        <AiFillLike className="text-white text-8xl" />
      </span>

      <span
        className={`fixed top-10 left-10 transition-all duration-300  z-100 ${
          checkMeetGoalTest({
            square,
            isTurn,
            isCheckKing,
          })
            ? "rotate-0"
            : "rotate-180"
        }`}
      >
        <AiFillLike className="text-white text-8xl" />
      </span>
      <span
        className={`fixed bottom-10 left-10 transition-all duration-300  z-100 ${
          checkMeetGoalTest({
            square,
            isTurn,
            isCheckKing,
          })
            ? "rotate-0"
            : "rotate-180"
        }`}
      >
        <AiFillLike className="text-white text-8xl" />
      </span>

      <span
        className={`fixed bottom-10 right-10 transition-all duration-300  z-100 ${
          checkMeetGoalTest({
            square,
            isTurn,
            isCheckKing,
          })
            ? "rotate-0"
            : "rotate-180"
        }`}
      >
        <AiFillLike className="text-white text-8xl" />
      </span>
    </div>
  );
}

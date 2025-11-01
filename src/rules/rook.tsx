// import dependency
import React from "react";

// import types
import { type SquareType } from "../type/type";

// import datas
import { row, col } from "../data";

// import rule
import { squareEmpty, squarePlayer } from "./shared";

// create type
interface AvailableMoveRookPropType {
  position: string;
  square: SquareType[];
  name: string;
  player: "white" | "black" | "";
}

export const availableMoveRook = ({
  position,

  square,
  name,
  player,
}: AvailableMoveRookPropType) => {
  const active = square.find((item) => item.active === true);

  let moveRook: string[] = [];
  if (active?.name === "rook") {
    const posionNumber = active.position.slice(1);

    let frontAllPosition: string[] = row
      .map((item) => `${item}${posionNumber}`)
      .reverse();

    const frontRich: SquareType[] = [];

    frontAllPosition.forEach((item) => {
      square.forEach((s) => {
        if (item == s.position) {
          if (s.name !== "") {
            frontRich.push(s);
          }
        }
      });
    });

    const findIndexActiveInRich = frontRich.findIndex(
      (item) => item.position === active?.position
    );

    let frontRichFind: SquareType[] = frontRich.slice(
      findIndexActiveInRich + 1,
      findIndexActiveInRich + 2
    );
    let backRichFind: SquareType[] = frontRich.slice(
      findIndexActiveInRich - 1,
      findIndexActiveInRich
    );

    let findINdexRichFront = frontAllPosition.findIndex(
      (item) => item === frontRichFind[0]?.position
    );
    let findINdexRichBack = frontAllPosition.findIndex(
      (item) => item === backRichFind[0]?.position
    );
    let findIndexActive = frontAllPosition.findIndex(
      (item) => item === active.position
    );

    if (findINdexRichFront == -1) {
      findINdexRichFront = 8;
    }

    if (findINdexRichBack == -1) {
      findINdexRichBack = -8;
    }

    let rookFront: string[] = [];

    if (active.player === "black") {
      if (frontRichFind[0]?.player === "black") {
        rookFront.push(
          ...frontAllPosition.slice(findIndexActive + 1, findINdexRichFront)
        );
      } else if (frontRichFind[0]?.player === "white") {
        rookFront.push(
          ...frontAllPosition.slice(findIndexActive + 1, findINdexRichFront + 1)
        );
      } else {
        rookFront.push(
          ...frontAllPosition.slice(findIndexActive + 1, findINdexRichFront)
        );
      }
      if (backRichFind[0]?.player === "black") {
        rookFront.push(
          ...frontAllPosition.slice(findINdexRichBack + 1, findIndexActive)
        );
      } else if (frontRichFind[0]?.player === "white") {
        rookFront.push(
          ...frontAllPosition.slice(findINdexRichBack, findIndexActive)
        );
      } else {
        rookFront.push(
          ...frontAllPosition.slice(findINdexRichBack, findIndexActive)
        );
      }
    } else {
      if (frontRichFind[0]?.player === "white") {
        rookFront.push(
          ...frontAllPosition.slice(findIndexActive + 1, findINdexRichFront)
        );
      } else if (frontRichFind[0]?.player === "black") {
        rookFront.push(
          ...frontAllPosition.slice(findIndexActive + 1, findINdexRichFront + 1)
        );
      } else {
        rookFront.push(
          ...frontAllPosition.slice(findIndexActive + 1, findINdexRichFront)
        );
      }
      if (backRichFind[0]?.player === "white") {
        rookFront.push(
          ...frontAllPosition.slice(findINdexRichBack + 1, findIndexActive)
        );
      } else if (frontRichFind[0]?.player === "black") {
        rookFront.push(
          ...frontAllPosition.slice(findINdexRichBack, findIndexActive)
        );
      } else {
        rookFront.push(
          ...frontAllPosition.slice(findINdexRichBack, findIndexActive)
        );
      }
    }

    const positionChar: string = active.position.slice(0, 1);

    const horisontPositionAll: string[] = col.map(
      (number) => `${positionChar}${number}`
    );

    const horisontRich: SquareType[] = [];

    horisontPositionAll.forEach((position) => {
      square.forEach((square) => {
        if (position === square.position) {
          if (square.name !== "") {
            horisontRich.push(square);
          }
        }
      });
    });


    const indexNutMainInRich = horisontRich.findIndex(square => square.position === active.position)

    const nutRightHorisont = horisontRich.slice(
      indexNutMainInRich + 1,
      indexNutMainInRich + 2
    );
    const nutLeftHorisont = horisontRich.slice(
      indexNutMainInRich - 1,
      indexNutMainInRich
    );

    let indexActiveHorisont = horisontPositionAll.findIndex(
      (position) => position === active.position
    );
    let indexRightNutHorisont  = horisontPositionAll.findIndex(
      (position) => position == nutRightHorisont[0]?.position
    );
    let indexLeftNutHorisont = horisontPositionAll.findIndex(
      (position) => position == nutLeftHorisont[0]?.position
    );
    console.log(nutRightHorisont)
    console.log(horisontRich)

    if(indexRightNutHorisont == -1){
      indexRightNutHorisont = 8
    }
    if(indexLeftNutHorisont == -1){
      indexLeftNutHorisont = -8
    }

    
    const rookHorisont:string [] = []

    if (active.player === "black") {
      if (nutRightHorisont[0]?.player === "black") {
        rookHorisont.push(
          ...horisontPositionAll.slice(indexActiveHorisont + 1, indexRightNutHorisont)
        );
      } else if (nutRightHorisont[0]?.player === "white") {
        rookHorisont.push(
          ...horisontPositionAll.slice(indexActiveHorisont + 1, indexRightNutHorisont + 1)
        );
        console.log(indexActiveHorisont)
        console.log(indexRightNutHorisont)
        console.log(horisontPositionAll.slice(indexActiveHorisont + 1, indexRightNutHorisont + 1))
      } else {
        rookHorisont.push(
          ...horisontPositionAll.slice(indexActiveHorisont + 1, indexRightNutHorisont)
        );
      }
      if (nutLeftHorisont[0]?.player === "black") {
        rookHorisont.push(
          ...horisontPositionAll.slice(indexLeftNutHorisont + 1, indexActiveHorisont)
        );
      } else if (nutRightHorisont[0]?.player === "white") {
        rookHorisont.push(
          ...horisontPositionAll.slice(indexLeftNutHorisont, indexActiveHorisont)
        );
      } else {
        rookHorisont.push(
          ...horisontPositionAll.slice(indexLeftNutHorisont, indexActiveHorisont)
        );
      }
    } else {
      if (nutRightHorisont[0]?.player === "white") {
        rookHorisont.push(
          ...horisontPositionAll.slice(indexActiveHorisont + 1, indexRightNutHorisont)
        );
      } else if (nutRightHorisont[0]?.player === "black") {
        rookHorisont.push(
          ...horisontPositionAll.slice(indexActiveHorisont + 1, indexRightNutHorisont + 1)
        );
      } else {
        rookHorisont.push(
          ...horisontPositionAll.slice(indexActiveHorisont + 1, indexRightNutHorisont)
        );
      }
      if (nutLeftHorisont[0]?.player === "white") {
        rookHorisont.push(
          ...horisontPositionAll.slice(indexLeftNutHorisont + 1, indexActiveHorisont)
        );
      } else if (nutRightHorisont[0]?.player === "black") {
        rookHorisont.push(
          ...horisontPositionAll.slice(indexLeftNutHorisont, indexActiveHorisont)
        );
      } else {
        rookHorisont.push(
          ...horisontPositionAll.slice(indexLeftNutHorisont, indexActiveHorisont)
        );
      }
    }

    
    moveRook = [...rookFront, ...rookHorisont];
  }

  return moveRook;
};

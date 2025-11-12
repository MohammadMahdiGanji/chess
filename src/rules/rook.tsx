// import types
import { type SquareType } from "../type/type";

// import datas
import { row, col } from "../data";

// create type
interface AvailableMoveRookPropType {
  square: SquareType[];
  position: string;
}

export const availableMoveRook = ({
  square,
  position,
}: AvailableMoveRookPropType) => {
  const active = square.find((item) => item.position === position);

  let moveRook: string[] = [];

  const posionNumber = active?.position.slice(1);

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
    (item) => item === active?.position
  );

  if (findINdexRichFront == -1) {
    findINdexRichFront = 8;
  }

  if (findINdexRichBack == -1) {
    findINdexRichBack = -8;
  }

  let rookFront: string[] = [];

  if (active?.player === "black") {
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
    } else if (backRichFind[0]?.player === "white") {
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
    } else if (backRichFind[0]?.player === "black") {
      rookFront.push(
        ...frontAllPosition.slice(findINdexRichBack, findIndexActive)
      );
    } else {
      rookFront.push(
        ...frontAllPosition.slice(findINdexRichBack, findIndexActive)
      );
    }
  }

  const positionChar: string | undefined = active?.position.slice(0, 1);

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

  const indexNutMainInRich = horisontRich.findIndex(
    (square) => square.position === active?.position
  );

  const nutRightHorisont = horisontRich.slice(
    indexNutMainInRich + 1,
    indexNutMainInRich + 2
  );
  const nutLeftHorisont = horisontRich.slice(
    indexNutMainInRich - 1,
    indexNutMainInRich
  );

  let indexActiveHorisont = horisontPositionAll.findIndex(
    (position) => position === active?.position
  );
  let indexRightNutHorisont = horisontPositionAll.findIndex(
    (position) => position == nutRightHorisont[0]?.position
  );
  let indexLeftNutHorisont = horisontPositionAll.findIndex(
    (position) => position == nutLeftHorisont[0]?.position
  );

  if (indexRightNutHorisont == -1) {
    indexRightNutHorisont = 8;
  }
  if (indexLeftNutHorisont == -1) {
    indexLeftNutHorisont = -8;
  }

  const rookHorisont: string[] = [];

  if (active?.player === "black") {
    if (nutRightHorisont[0]?.player === "black") {
      rookHorisont.push(
        ...horisontPositionAll.slice(
          indexActiveHorisont + 1,
          indexRightNutHorisont
        )
      );
    } else if (nutRightHorisont[0]?.player === "white") {
      rookHorisont.push(
        ...horisontPositionAll.slice(
          indexActiveHorisont + 1,
          indexRightNutHorisont + 1
        )
      );
    } else {
      rookHorisont.push(
        ...horisontPositionAll.slice(
          indexActiveHorisont + 1,
          indexRightNutHorisont
        )
      );
    }
    if (nutLeftHorisont[0]?.player === "black") {
      rookHorisont.push(
        ...horisontPositionAll.slice(
          indexLeftNutHorisont + 1,
          indexActiveHorisont
        )
      );
    } else if (nutLeftHorisont[0]?.player === "white") {
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
        ...horisontPositionAll.slice(
          indexActiveHorisont + 1,
          indexRightNutHorisont
        )
      );
    } else if (nutRightHorisont[0]?.player === "black") {
      rookHorisont.push(
        ...horisontPositionAll.slice(
          indexActiveHorisont + 1,
          indexRightNutHorisont + 1
        )
      );
    } else {
      rookHorisont.push(
        ...horisontPositionAll.slice(
          indexActiveHorisont + 1,
          indexRightNutHorisont
        )
      );
    }
    if (nutLeftHorisont[0]?.player === "white") {
      rookHorisont.push(
        ...horisontPositionAll.slice(
          indexLeftNutHorisont + 1,
          indexActiveHorisont
        )
      );
    } else if (nutLeftHorisont[0]?.player === "black") {
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

  return moveRook;
};

export const availableMoveRookCheck = ({
  square,
  position,
}: AvailableMoveRookPropType) => {
  const active = square.find((item) => item.position === position);

  let moveRook: string[] = [];

  const posionNumber = active?.position.slice(1);

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
    (item) => item === active?.position
  );

  if (findINdexRichFront == -1) {
    findINdexRichFront = 8;
  }

  if (findINdexRichBack == -1) {
    findINdexRichBack = -8;
  }

  let rookFront: string[] = [];

  if (active?.player === "black") {
    if (frontRichFind[0]?.player === "black") {
      rookFront.push(
        ...frontAllPosition.slice(findIndexActive + 1, findINdexRichFront + 1)
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
    if (
      frontRichFind[0]?.player === "white" &&
      frontRichFind[0]?.name === "king"
    ) {
      rookFront.push(
        ...frontAllPosition.slice(findIndexActive + 1, findINdexRichFront + 2)
      );
    }

    if (backRichFind[0]?.player === "black") {
      rookFront.push(
        ...frontAllPosition.slice(findINdexRichBack, findIndexActive)
      );
    } else if (backRichFind[0]?.player === "white") {
      rookFront.push(
        ...frontAllPosition.slice(findINdexRichBack, findIndexActive)
      );
    } else {
      rookFront.push(
        ...frontAllPosition.slice(findINdexRichBack, findIndexActive)
      );
    }
    if (
      backRichFind[0]?.player === "white" &&
      backRichFind[0]?.name === "king"
    ) {
      rookFront.push(
        ...frontAllPosition.slice(findINdexRichBack - 1, findIndexActive)
      );
    }
  } else {
    if (frontRichFind[0]?.player === "white") {
      rookFront.push(
        ...frontAllPosition.slice(findIndexActive + 1, findINdexRichFront + 1)
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
    if (
      frontRichFind[0]?.player === "black" &&
      frontRichFind[0]?.name === "king"
    ) {
      rookFront.push(
        ...frontAllPosition.slice(findIndexActive + 1, findINdexRichFront + 2)
      );
    }

    if (backRichFind[0]?.player === "white") {
      rookFront.push(
        ...frontAllPosition.slice(findINdexRichBack, findIndexActive)
      );
    } else if (backRichFind[0]?.player === "black") {
      console.log(frontAllPosition);
      rookFront.push(
        ...frontAllPosition.slice(findINdexRichBack, findIndexActive)
      );
    } else {
      rookFront.push(
        ...frontAllPosition.slice(findINdexRichBack, findIndexActive)
      );
    }

    if (
      backRichFind[0]?.player === "black" &&
      backRichFind[0]?.name === "king"
    ) {
      console.log(frontAllPosition);
      rookFront.push(
        ...frontAllPosition.slice(findINdexRichBack - 1, findIndexActive)
      );
    }
  }

  const positionChar: string | undefined = active?.position.slice(0, 1);

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

  const indexNutMainInRich = horisontRich.findIndex(
    (square) => square.position === active?.position
  );

  const nutRightHorisont = horisontRich.slice(
    indexNutMainInRich + 1,
    indexNutMainInRich + 2
  );
  const nutLeftHorisont = horisontRich.slice(
    indexNutMainInRich - 1,
    indexNutMainInRich
  );

  let indexActiveHorisont = horisontPositionAll.findIndex(
    (position) => position === active?.position
  );
  let indexRightNutHorisont = horisontPositionAll.findIndex(
    (position) => position == nutRightHorisont[0]?.position
  );
  let indexLeftNutHorisont = horisontPositionAll.findIndex(
    (position) => position == nutLeftHorisont[0]?.position
  );

  if (indexRightNutHorisont == -1) {
    indexRightNutHorisont = 8;
  }
  if (indexLeftNutHorisont == -1) {
    indexLeftNutHorisont = -8;
  }

  const rookHorisont: string[] = [];

  if (active?.player === "black") {
    if (nutRightHorisont[0]?.player === "black") {
      rookHorisont.push(
        ...horisontPositionAll.slice(
          indexActiveHorisont + 1,
          indexRightNutHorisont + 1
        )
      );
    } else if (nutRightHorisont[0]?.player === "white") {
      rookHorisont.push(
        ...horisontPositionAll.slice(
          indexActiveHorisont + 1,
          indexRightNutHorisont + 1
        )
      );
    } else {
      rookHorisont.push(
        ...horisontPositionAll.slice(
          indexActiveHorisont + 1,
          indexRightNutHorisont
        )
      );
    }
    if (
      nutRightHorisont[0]?.player === "white" &&
      nutRightHorisont[0]?.name === "king"
    ) {
      rookHorisont.push(
        ...horisontPositionAll.slice(
          indexActiveHorisont + 1,
          indexRightNutHorisont + 2
        )
      );
    }
    if (nutLeftHorisont[0]?.player === "black") {
      rookHorisont.push(
        ...horisontPositionAll.slice(indexLeftNutHorisont, indexActiveHorisont)
      );
    } else if (nutLeftHorisont[0]?.player === "white") {
      rookHorisont.push(
        ...horisontPositionAll.slice(indexLeftNutHorisont, indexActiveHorisont)
      );
    } else {
      rookHorisont.push(
        ...horisontPositionAll.slice(indexLeftNutHorisont, indexActiveHorisont)
      );
    }
    if (
      nutLeftHorisont[0]?.player === "white" &&
      nutLeftHorisont[0]?.name === "king"
    ) {
      rookHorisont.push(
        ...horisontPositionAll.slice(
          indexLeftNutHorisont - 1,
          indexActiveHorisont
        )
      );
    }
  } else {
    if (nutRightHorisont[0]?.player === "white") {
      rookHorisont.push(
        ...horisontPositionAll.slice(
          indexActiveHorisont + 1,
          indexRightNutHorisont + 1
        )
      );
    } else if (nutRightHorisont[0]?.player === "black") {
      rookHorisont.push(
        ...horisontPositionAll.slice(
          indexActiveHorisont + 1,
          indexRightNutHorisont + 1
        )
      );
    } else {
      rookHorisont.push(
        ...horisontPositionAll.slice(
          indexActiveHorisont + 1,
          indexRightNutHorisont
        )
      );
    }
    if (
      nutRightHorisont[0]?.player === "black" &&
      nutRightHorisont[0]?.name === "king"
    ) {
      rookHorisont.push(
        ...horisontPositionAll.slice(
          indexActiveHorisont + 1,
          indexRightNutHorisont + 2
        )
      );
    }
    if (nutLeftHorisont[0]?.player === "white") {
      rookHorisont.push(
        ...horisontPositionAll.slice(indexLeftNutHorisont, indexActiveHorisont)
      );
    } else if (nutLeftHorisont[0]?.player === "black") {
      rookHorisont.push(
        ...horisontPositionAll.slice(indexLeftNutHorisont, indexActiveHorisont)
      );
    } else {
      rookHorisont.push(
        ...horisontPositionAll.slice(indexLeftNutHorisont, indexActiveHorisont)
      );
    }
    if (
      nutLeftHorisont[0]?.player === "black" &&
      nutLeftHorisont[0]?.name == "king"
    ) {
      rookHorisont.push(
        ...horisontPositionAll.slice(
          indexLeftNutHorisont - 1,
          indexActiveHorisont
        )
      );
    }
  }

  moveRook = [...rookFront, ...rookHorisont];

  return moveRook;
};

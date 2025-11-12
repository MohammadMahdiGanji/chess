// import dependency

// import types
import { type SquareType } from "../type/type";

// import data

import { row, col } from "../data";

// import roule

interface AvialiableBishopMove {
  square: SquareType[];
  position: string;
}

export const avialiableBishopMove = ({
  square,
  position,
}: AvialiableBishopMove) => {
  const active = square.find((square) => square.position === position);

  let bishopMove: string[] = [];

  let rightBishop: string[] = [];

  const positionNumber = Number(active?.position.slice(1));
  const positionChar = active?.position.slice(0, 1);

  const findIndexPostionChar = row.findIndex((item) => item == positionChar);

  // back right

  let rightBackPosiction: string[] = [];

  let counterCharBakc = findIndexPostionChar;
  let counterNumberBack = positionNumber;

  while (counterNumberBack <= 8) {
    if (row[counterCharBakc]) {
      rightBackPosiction.push(`${row[counterCharBakc]}${counterNumberBack}`);
    }

    counterCharBakc++;
    counterNumberBack++;
  }

  let rightBackRich: SquareType[] = [];

  rightBackPosiction.forEach((position) => {
    square.forEach((square) => {
      if (position == square.position) {
        if (square.name !== "") {
          rightBackRich.push(square);
        }
      }
    });
  });

  const indexActiveRightBack = rightBackPosiction.findIndex(
    (position) => position === active?.position
  );
  let indexBackRightBlack = rightBackPosiction.findIndex(
    (position) => position === rightBackRich[1]?.position
  );

  if (indexBackRightBlack === -1) {
    indexBackRightBlack = rightBackPosiction.length;
  }

  let rightBack: string[] = [];

  if (active?.player === "white") {
    if (rightBackRich[1]?.player === "black") {
      rightBack.push(
        ...rightBackPosiction.slice(
          indexActiveRightBack + 1,
          indexBackRightBlack + 1
        )
      );
    } else if (rightBackRich[1]?.player === "white") {
      rightBack.push(
        ...rightBackPosiction.slice(
          indexActiveRightBack + 1,
          indexBackRightBlack
        )
      );
    } else {
      rightBack.push(
        ...rightBackPosiction.slice(
          indexActiveRightBack + 1,
          indexBackRightBlack
        )
      );
    }
  } else if (active?.player === "black") {
    if (rightBackRich[1]?.player === "white") {
      rightBack.push(
        ...rightBackPosiction.slice(
          indexActiveRightBack + 1,
          indexBackRightBlack + 1
        )
      );
    } else if (rightBackRich[1]?.player === "black") {
      rightBack.push(
        ...rightBackPosiction.slice(
          indexActiveRightBack + 1,
          indexBackRightBlack
        )
      );
    } else {
      rightBack.push(
        ...rightBackPosiction.slice(
          indexActiveRightBack + 1,
          indexBackRightBlack
        )
      );
    }
  }

  let rightFrontPosition: string[] = [];

  let counterNumberFront = positionNumber;
  let counterCharFront = findIndexPostionChar;

  while (counterNumberFront <= 8) {
    if (row[counterCharFront]) {
      rightFrontPosition.push(`${row[counterCharFront]}${counterNumberFront}`);
    }
    counterNumberFront++;
    counterCharFront--;
  }

  const rightFrontRich: SquareType[] = [];

  rightFrontPosition.forEach((position) => {
    square.forEach((square) => {
      if (position === square.position) {
        if (square.name !== "") {
          rightFrontRich.push(square);
        }
      }
    });
  });

  let indexActiveRightFront = rightFrontPosition.findIndex(
    (position) => position == active?.position
  );
  let indexFrontRightFront = rightFrontPosition.findIndex(
    (position) => position == rightFrontRich[1]?.position
  );

  if (indexFrontRightFront === -1) {
    indexFrontRightFront = rightFrontPosition.length;
  }

  const rightFront: string[] = [];
  if (active?.player === "white") {
    if (rightFrontRich[1]?.player === "white") {
      rightFront.push(
        ...rightFrontPosition.slice(
          indexActiveRightFront + 1,
          indexFrontRightFront
        )
      );
    } else if (rightFrontRich[1]?.player === "black") {
      rightFront.push(
        ...rightFrontPosition.slice(
          indexActiveRightFront + 1,
          indexFrontRightFront + 1
        )
      );
    } else {
      rightFront.push(
        ...rightFrontPosition.slice(
          indexActiveRightFront + 1,
          indexFrontRightFront
        )
      );
    }
  } else if (active?.player === "black") {
    if (rightFrontRich[1]?.player === "black") {
      rightFront.push(
        ...rightFrontPosition.slice(
          indexActiveRightFront + 1,
          indexFrontRightFront
        )
      );
    } else if (rightFrontRich[1]?.player === "white") {
      rightFront.push(
        ...rightFrontPosition.slice(
          indexActiveRightFront + 1,
          indexFrontRightFront + 1
        )
      );
    } else {
      rightFront.push(
        ...rightFrontPosition.slice(
          indexActiveRightFront + 1,
          indexFrontRightFront
        )
      );
    }
  }

  rightBishop = [...rightBack, ...rightFront];

  // left

  let leftBishop: string[] = [];

  let counterCharLeftBack = findIndexPostionChar;
  let counterNumberLeftBack = positionNumber;

  let leftBackPosition: string[] = [];
  while (counterNumberLeftBack > 0) {
    if (row[counterCharLeftBack]) {
      leftBackPosition.push(
        `${row[counterCharLeftBack]}${counterNumberLeftBack}`
      );
    }
    counterCharLeftBack++;
    counterNumberLeftBack--;
  }

  let leftBackRich: SquareType[] = [];

  leftBackPosition.forEach((position) => {
    square.forEach((square) => {
      if (position === square.position) {
        if (square.name !== "") {
          leftBackRich.push(square);
        }
      }
    });
  });

  const indexActiveLeftBack = leftBackPosition.findIndex(
    (position) => position == active?.position
  );
  let indexBackLeftBack = leftBackPosition.findIndex(
    (position) => position == leftBackRich[1]?.position
  );

  if (indexBackLeftBack === -1) {
    indexBackLeftBack = leftBackPosition.length;
  }

  let leftBack: string[] = [];

  if (active?.player === "white") {
    if (leftBackRich[1]?.player === "white") {
      leftBack.push(
        ...leftBackPosition.slice(indexActiveLeftBack + 1, indexBackLeftBack)
      );
    } else if (leftBackRich[1]?.player === "black") {
      leftBack.push(
        ...leftBackPosition.slice(
          indexActiveLeftBack + 1,
          indexBackLeftBack + 1
        )
      );
    } else {
      leftBack.push(
        ...leftBackPosition.slice(indexActiveLeftBack + 1, indexBackLeftBack)
      );
    }
  } else if (active?.player === "black") {
    if (leftBackRich[1]?.player === "black") {
      leftBack.push(
        ...leftBackPosition.slice(indexActiveLeftBack + 1, indexBackLeftBack)
      );
    } else if (leftBackRich[1]?.player === "white") {
      leftBack.push(
        ...leftBackPosition.slice(
          indexActiveLeftBack + 1,
          indexBackLeftBack + 1
        )
      );
    } else {
      leftBack.push(
        ...leftBackPosition.slice(indexActiveLeftBack + 1, indexBackLeftBack)
      );
    }
  }

  let counterNumberFrontLeft = positionNumber;
  let counterCharFrontLeft = findIndexPostionChar;

  let leftFrontPosstion: string[] = [];
  while (counterNumberFrontLeft > 0) {
    if (row[counterCharFrontLeft]) {
      leftFrontPosstion.push(
        `${row[counterCharFrontLeft]}${counterNumberFrontLeft}`
      );
    }
    counterNumberFrontLeft--;
    counterCharFrontLeft--;
  }

  let leftFrontRich: SquareType[] = [];

  leftFrontPosstion.forEach((position) => {
    square.forEach((square) => {
      if (position == square.position) {
        if (square.name !== "") {
          leftFrontRich.push(square);
        }
      }
    });
  });

  let indexAciteLeftfront = leftFrontPosstion.findIndex(
    (position) => position == active?.position
  );

  let indexforntleftFront = leftFrontPosstion.findIndex(
    (position) => position == leftFrontRich[1]?.position
  );

  if (indexforntleftFront == -1) {
    indexforntleftFront = leftFrontPosstion.length;
  }

  let leftFront: string[] = [];

  if (active?.player == "white") {
    if (leftFrontRich[1]?.player === "white") {
      leftFront.push(
        ...leftFrontPosstion.slice(indexAciteLeftfront + 1, indexforntleftFront)
      );
    } else if (leftFrontRich[1]?.player === "black") {
      leftFront.push(
        ...leftFrontPosstion.slice(
          indexAciteLeftfront + 1,
          indexforntleftFront + 1
        )
      );
    } else {
      leftFront.push(
        ...leftFrontPosstion.slice(indexAciteLeftfront + 1, indexforntleftFront)
      );
    }
  } else if (active?.player == "black") {
    if (leftFrontRich[1]?.player === "black") {
      leftFront.push(
        ...leftFrontPosstion.slice(indexAciteLeftfront + 1, indexforntleftFront)
      );
    } else if (leftFrontRich[1]?.player === "white") {
      leftFront.push(
        ...leftFrontPosstion.slice(
          indexAciteLeftfront + 1,
          indexforntleftFront + 1
        )
      );
    } else {
      leftFront.push(
        ...leftFrontPosstion.slice(indexAciteLeftfront + 1, indexforntleftFront)
      );
    }
  }
  leftBishop = [...leftBack, ...leftFront];

  bishopMove = [...rightBishop, ...leftBishop];

  return bishopMove;
};

export const avialiableBishopMoveCheck = ({
  square,
  position,
}: AvialiableBishopMove) => {
  const active = square.find((square) => square.position === position);

  let bishopMove: string[] = [];

  let rightBishop: string[] = [];

  const positionNumber = Number(active?.position.slice(1));
  const positionChar = active?.position.slice(0, 1);

  const findIndexPostionChar = row.findIndex((item) => item == positionChar);

  // back right

  let rightBackPosiction: string[] = [];

  let counterCharBakc = findIndexPostionChar;
  let counterNumberBack = positionNumber;

  while (counterNumberBack <= 8) {
    if (row[counterCharBakc]) {
      rightBackPosiction.push(`${row[counterCharBakc]}${counterNumberBack}`);
    }

    counterCharBakc++;
    counterNumberBack++;
  }

  let rightBackRich: SquareType[] = [];

  rightBackPosiction.forEach((position) => {
    square.forEach((square) => {
      if (position == square.position) {
        if (square.name !== "") {
          rightBackRich.push(square);
        }
      }
    });
  });

  const indexActiveRightBack = rightBackPosiction.findIndex(
    (position) => position === active?.position
  );
  let indexBackRightBlack = rightBackPosiction.findIndex(
    (position) => position === rightBackRich[1]?.position
  );

  if (indexBackRightBlack === -1) {
    indexBackRightBlack = rightBackPosiction.length;
  }

  let rightBack: string[] = [];

  if (active?.player === "white") {
    if (rightBackRich[1]?.player === "black") {
      rightBack.push(
        ...rightBackPosiction.slice(
          indexActiveRightBack + 1,
          indexBackRightBlack + 1
        )
      );
    } else if (rightBackRich[1]?.player === "white") {
      rightBack.push(
        ...rightBackPosiction.slice(
          indexActiveRightBack + 1,
          indexBackRightBlack + 1
        )
      );
    } else {
      rightBack.push(
        ...rightBackPosiction.slice(
          indexActiveRightBack + 1,
          indexBackRightBlack
        )
      );
    }

    if (
      rightBackRich[1]?.player == "black" &&
      rightBackRich[1]?.name == "king"
    ) {
      rightBack.push(
        ...rightBackPosiction.slice(
          indexActiveRightBack + 1,
          indexBackRightBlack + 2
        )
      );
    }
  } else if (active?.player === "black") {
    if (rightBackRich[1]?.player === "white") {
      rightBack.push(
        ...rightBackPosiction.slice(
          indexActiveRightBack + 1,
          indexBackRightBlack + 1
        )
      );
    } else if (rightBackRich[1]?.player === "black") {
      rightBack.push(
        ...rightBackPosiction.slice(
          indexActiveRightBack + 1,
          indexBackRightBlack + 1
        )
      );
    } else {
      rightBack.push(
        ...rightBackPosiction.slice(
          indexActiveRightBack + 1,
          indexBackRightBlack
        )
      );
    }

    if (
      rightBackRich[1]?.player == "white" &&
      rightBackRich[1]?.name == "king"
    ) {
      rightBack.push(
        ...rightBackPosiction.slice(
          indexActiveRightBack + 1,
          indexBackRightBlack + 2
        )
      );
    }
  }

  let rightFrontPosition: string[] = [];

  let counterNumberFront = positionNumber;
  let counterCharFront = findIndexPostionChar;

  while (counterNumberFront <= 8) {
    if (row[counterCharFront]) {
      rightFrontPosition.push(`${row[counterCharFront]}${counterNumberFront}`);
    }
    counterNumberFront++;
    counterCharFront--;
  }

  const rightFrontRich: SquareType[] = [];

  rightFrontPosition.forEach((position) => {
    square.forEach((square) => {
      if (position === square.position) {
        if (square.name !== "") {
          rightFrontRich.push(square);
        }
      }
    });
  });

  let indexActiveRightFront = rightFrontPosition.findIndex(
    (position) => position == active?.position
  );
  let indexFrontRightFront = rightFrontPosition.findIndex(
    (position) => position == rightFrontRich[1]?.position
  );

  if (indexFrontRightFront === -1) {
    indexFrontRightFront = rightFrontPosition.length;
  }

  const rightFront: string[] = [];
  if (active?.player === "white") {
    if (rightFrontRich[1]?.player === "white") {
      rightFront.push(
        ...rightFrontPosition.slice(
          indexActiveRightFront + 1,
          indexFrontRightFront + 1
        )
      );
    } else if (rightFrontRich[1]?.player === "black") {
      rightFront.push(
        ...rightFrontPosition.slice(
          indexActiveRightFront + 1,
          indexFrontRightFront + 1
        )
      );
    } else {
      rightFront.push(
        ...rightFrontPosition.slice(
          indexActiveRightFront + 1,
          indexFrontRightFront + 1
        )
      );
    }
    if (
      rightFrontRich[1]?.player == "black" &&
      rightFrontRich[1]?.name == "king"
    ) {
      rightFront.push(
        ...rightFrontPosition.slice(
          indexActiveRightFront + 1,
          indexFrontRightFront + 2
        )
      );
    }
  } else if (active?.player === "black") {
    if (rightFrontRich[1]?.player === "black") {
      rightFront.push(
        ...rightFrontPosition.slice(
          indexActiveRightFront + 1,
          indexFrontRightFront + 1
        )
      );
    } else if (rightFrontRich[1]?.player === "white") {
      rightFront.push(
        ...rightFrontPosition.slice(
          indexActiveRightFront + 1,
          indexFrontRightFront + 1
        )
      );
    } else {
      rightFront.push(
        ...rightFrontPosition.slice(
          indexActiveRightFront + 1,
          indexFrontRightFront + 1
        )
      );
    }
    if (
      rightFrontRich[1]?.player === "black" &&
      rightFrontRich[1]?.name == "king"
    ) {
      rightFront.push(
        ...rightFrontPosition.slice(
          indexActiveRightFront + 1,
          indexFrontRightFront + 2
        )
      );
    }
  }

  rightBishop = [...rightBack, ...rightFront];

  // left

  let leftBishop: string[] = [];

  let counterCharLeftBack = findIndexPostionChar;
  let counterNumberLeftBack = positionNumber;

  let leftBackPosition: string[] = [];
  while (counterNumberLeftBack > 0) {
    if (row[counterCharLeftBack]) {
      leftBackPosition.push(
        `${row[counterCharLeftBack]}${counterNumberLeftBack}`
      );
    }
    counterCharLeftBack++;
    counterNumberLeftBack--;
  }

  let leftBackRich: SquareType[] = [];

  leftBackPosition.forEach((position) => {
    square.forEach((square) => {
      if (position === square.position) {
        if (square.name !== "") {
          leftBackRich.push(square);
        }
      }
    });
  });

  const indexActiveLeftBack = leftBackPosition.findIndex(
    (position) => position == active?.position
  );
  let indexBackLeftBack = leftBackPosition.findIndex(
    (position) => position == leftBackRich[1]?.position
  );

  if (indexBackLeftBack === -1) {
    indexBackLeftBack = leftBackPosition.length;
  }

  let leftBack: string[] = [];

  if (active?.player === "white") {
    if (leftBackRich[1]?.player === "white") {
      leftBack.push(
        ...leftBackPosition.slice(
          indexActiveLeftBack + 1,
          indexBackLeftBack + 1
        )
      );
    } else if (leftBackRich[1]?.player === "black") {
      leftBack.push(
        ...leftBackPosition.slice(
          indexActiveLeftBack + 1,
          indexBackLeftBack + 1
        )
      );
    } else {
      leftBack.push(
        ...leftBackPosition.slice(indexActiveLeftBack + 1, indexBackLeftBack)
      );
    }
    if (
      leftBackRich[1]?.player === "black" &&
      leftBackRich[1]?.name == "king"
    ) {
      leftBack.push(
        ...leftBackPosition.slice(
          indexActiveLeftBack + 1,
          indexBackLeftBack + 2
        )
      );
    }
  } else if (active?.player === "black") {
    if (leftBackRich[1]?.player === "black") {
      leftBack.push(
        ...leftBackPosition.slice(
          indexActiveLeftBack + 1,
          indexBackLeftBack + 1
        )
      );
    } else if (leftBackRich[1]?.player === "white") {
      leftBack.push(
        ...leftBackPosition.slice(
          indexActiveLeftBack + 1,
          indexBackLeftBack + 1
        )
      );
    } else {
      leftBack.push(
        ...leftBackPosition.slice(indexActiveLeftBack + 1, indexBackLeftBack)
      );
    }
    if (
      leftBackRich[1]?.player === "white" &&
      leftBackRich[1]?.name == "king"
    ) {
      leftBack.push(
        ...leftBackPosition.slice(
          indexActiveLeftBack + 1,
          indexBackLeftBack + 1
        )
      );
    }
  }

  let counterNumberFrontLeft = positionNumber;
  let counterCharFrontLeft = findIndexPostionChar;

  let leftFrontPosstion: string[] = [];
  while (counterNumberFrontLeft > 0) {
    if (row[counterCharFrontLeft]) {
      leftFrontPosstion.push(
        `${row[counterCharFrontLeft]}${counterNumberFrontLeft}`
      );
    }
    counterNumberFrontLeft--;
    counterCharFrontLeft--;
  }

  let leftFrontRich: SquareType[] = [];

  leftFrontPosstion.forEach((position) => {
    square.forEach((square) => {
      if (position == square.position) {
        if (square.name !== "") {
          leftFrontRich.push(square);
        }
      }
    });
  });

  let indexAciteLeftfront = leftFrontPosstion.findIndex(
    (position) => position == active?.position
  );

  let indexforntleftFront = leftFrontPosstion.findIndex(
    (position) => position == leftFrontRich[1]?.position
  );

  if (indexforntleftFront == -1) {
    indexforntleftFront = leftFrontPosstion.length;
  }

  let leftFront: string[] = [];

  if (active?.player == "white") {
    if (leftFrontRich[1]?.player === "white") {
      leftFront.push(
        ...leftFrontPosstion.slice(
          indexAciteLeftfront + 1,
          indexforntleftFront + 1
        )
      );
    } else if (leftFrontRich[1]?.player === "black") {
      leftFront.push(
        ...leftFrontPosstion.slice(
          indexAciteLeftfront + 1,
          indexforntleftFront + 1
        )
      );
    } else {
      leftFront.push(
        ...leftFrontPosstion.slice(indexAciteLeftfront + 1, indexforntleftFront)
      );
    }
    if (
      leftFrontRich[1]?.player === "black" &&
      leftFrontRich[1]?.name == "king"
    ) {
      leftFront.push(
        ...leftFrontPosstion.slice(
          indexAciteLeftfront + 1,
          indexforntleftFront + 2
        )
      );
    }
  } else if (active?.player == "black") {
    if (leftFrontRich[1]?.player === "black") {
      leftFront.push(
        ...leftFrontPosstion.slice(
          indexAciteLeftfront + 1,
          indexforntleftFront + 1
        )
      );
    } else if (leftFrontRich[1]?.player === "white") {
      leftFront.push(
        ...leftFrontPosstion.slice(
          indexAciteLeftfront + 1,
          indexforntleftFront + 1
        )
      );
    } else {
      leftFront.push(
        ...leftFrontPosstion.slice(indexAciteLeftfront + 1, indexforntleftFront)
      );
    }
    if (
      leftFrontRich[1]?.player === "white" &&
      leftFrontRich[1]?.name == "king"
    ) {
      leftFront.push(
        ...leftFrontPosstion.slice(
          indexAciteLeftfront + 1,
          indexforntleftFront + 2
        )
      );
    }
  }

  leftBishop = [...leftBack, ...leftFront];

  bishopMove = [...rightBishop, ...leftBishop];

  return bishopMove;
};

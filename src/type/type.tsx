import React, { type SetStateAction } from "react";

export interface SquareType {
  id: string;
  position: string;
  pointer: boolean;
  name: string;
  nut: React.ReactNode;
  player: "white" | "black" | "";
  hasMoved: boolean;
  active: boolean;
  isCheckBlack: boolean;
  isCHeckWhite: boolean;
}

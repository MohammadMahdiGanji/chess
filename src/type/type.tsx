export interface SquareType {
  id: string;
  position: string;
  pointer: boolean;
  name: string;
  nut: React.ReactNode;
  player: "white" | "black" | "";
  captured: boolean;
  hasMoved: boolean;
  availableMovis: [];
  active:boolean
}

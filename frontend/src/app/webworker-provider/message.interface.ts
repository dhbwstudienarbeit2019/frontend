export interface Point {
  x: number;
  y: number;
}
export interface FunctionPoint extends Point {
  x: number;
  y: number;
  value: number;
}

export interface StartMessage {
  action: 'start' | 'abort';
  config: any;
  searchArea: {
    min: Point
    max: Point
  };
  func: string; // (x: number, y: number) => number;
}
export interface PlotMessage {
  lineData: Point[];
  surfaceData: FunctionPoint[];
}

export interface ResultMessage {
  status: 'finished' | 'error';
  info: string;
  result: Point[];
}

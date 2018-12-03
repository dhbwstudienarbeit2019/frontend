export interface Point {
  x: number;
  y: number;
}

export interface StartMessage {
  action: 'start' | 'abort';
  config: any;
  func: (point: Point) => number;
}

export interface ResultMessage {
  status: 'finished' | 'error';
  info: string;
  result: Point[];
}

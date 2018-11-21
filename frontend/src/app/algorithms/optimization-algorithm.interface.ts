export interface OptimizationAlgorithmInterface {
    readonly name: string;
    readonly description: string;
    readonly func: (x: number, y: number) => number;
}

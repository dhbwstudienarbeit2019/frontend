export interface OptimizationAlgorithmInterface {
    readonly name: string;
    readonly description: string;
    readonly func: (x: number, y: number) => number;
    readonly searchArea: {
        min: { x: number, y: number },
        max: { x: number, y: number }
    }
}

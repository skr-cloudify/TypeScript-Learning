import { Shape } from "./shape";
import { IRectangleTypes } from "./types";

export class Rectangle extends Shape {
    private readonly length: number;
    private readonly width: number;

    constructor (options: IRectangleTypes) {
        super();
        this.length = options.length;
        this.width = options.width;
    }
    area(): number {
        return this.length * this.width;
    }
}
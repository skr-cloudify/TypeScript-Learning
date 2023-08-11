import { Shape } from './shape';
import { ICircleTypes } from './types';

export class Circle extends Shape{
    private readonly radius: number;

    constructor(options: ICircleTypes) {
      super();
      this.radius = options.radius;
    }
  
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
}

const obj = new Circle({radius: 5});
console.log(obj.area());
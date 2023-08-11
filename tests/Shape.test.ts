import { Circle } from "../src/circle";
import { ICircleTypes } from '../src/types';
import { Rectangle } from "../src/rectangle";
import { IRectangleTypes } from "../src/types";
import { Shape } from "../src/shape";

describe('Circle classes', () => {
  test('Circle area', () => {
    const circleParams: ICircleTypes = { radius: 5 };
    const circle = new Circle(circleParams);
    expect(circle.area()).toBeCloseTo(78.54, 2);
  });

  test('Shape area method throws error', () => {
    const rectangleParams: IRectangleTypes = { length: 5, width: 5 };
    const rectangle = new Rectangle(rectangleParams);
    expect(() => rectangle.area()).not.toThrowError('Method not implemented');
  });
});

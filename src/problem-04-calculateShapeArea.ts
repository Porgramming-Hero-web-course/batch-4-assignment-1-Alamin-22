{
  //Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type ShapeType = Circle | Rectangle;

  let area: number;
  const calculateShapeArea = (calculateInfo: ShapeType) => {
    if (calculateInfo.shape === "circle") {
      area = 3.1416 * Math.pow(calculateInfo.radius, 2);
    }
    // for rectangle

    if (calculateInfo.shape === "rectangle") {
      area = calculateInfo.width * calculateInfo.height;
    }

    return `The area of ${calculateInfo.shape} is => ${area}`;
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

  const rectangle = calculateShapeArea({
    shape: "rectangle",
    height: 4,
    width: 6,
  });

  console.log({ circleArea }, { rectangle });
}

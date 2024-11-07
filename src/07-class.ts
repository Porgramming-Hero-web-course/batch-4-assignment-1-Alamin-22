{
  // Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

  const currentYear = new Date().getFullYear();
  class Car {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {}

    // method to calculate
    getCarAge(): string {
      return `The age of ${this.make} ${this.model} is => ${
        currentYear - this.year
      }`;
    }
  }

  const NewCar1 = new Car("Tesla", "22", 2022);
  const NewCar2 = new Car("Honda", "Civic", 2018);
  const NewCar3 = new Car("GoribErGari", "Gorib-1920", 2018);

  console.log(NewCar1.getCarAge());
  console.log(NewCar2.getCarAge());
  console.log(NewCar3.getCarAge());
}

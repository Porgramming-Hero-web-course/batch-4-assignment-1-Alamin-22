{
  // Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

  const getProperty = <T, K extends keyof T>(obj: T, propertyName: K) => {
    return obj[propertyName];
  };

  type Person = {
    name: string;
    age: number;
    isActive: boolean;
  };

  const res1 = getProperty<Person, "age">(
    { name: "Mr. Mollik", age: 21, isActive: true },
    "age"
  );
  const res2 = getProperty<Person, "name">(
    { name: "Kuddus Ali", age: 31, isActive: true },
    "name"
  );

  console.log({ res1 }, { res2 });
}

{
  // Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

  const validateKeys = <T extends object>(
    obj: T,
    keys: (keyof T)[]
  ): boolean => {
    for (let key of keys) {
      if (!(key in obj)) {
        return false;
      }
    }
    return true;
  };

  type Person = {
    name: string;
    age: number;
    email: string;
    isActive?: boolean;
  };

  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys<Person>(person, ["name", "age", "isActive"]));
}
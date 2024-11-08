# The Significance of Union (`|`) and Intersection (`&`) Types in TypeScript

<br/> <br/>

## What are Union Types (`|`)?

A **Union Type** in TypeScript allows a variable to be one of several possible types. This is useful when you want to represent a value that could be of different types. Union types work like the JavaScript **OR (`||`)** operator, where a value can be one of several options.

### Example of a Union Type:

```typescript
// Union Type (|) Example

type FrontEndDeveloper = "Wordpress Developer" | "JavaScript Developer";
type FullStackDeveloper = "Mern Stack Developer" | "Full Stack SQL Developer";

type Developer = FrontEndDeveloper | FullStackDeveloper;

const newDeveloper1: Developer = "Mern Stack Developer"; // Valid
const newDeveloper2: Developer = "Full Stack SQL Developer"; // Valid
```

## What are Intersection Types (`&`)?

An **Intersection Type** in TypeScript allows you to combine multiple types into one. This means that a variable must satisfy **all** the types it intersects. Intersection types work like the JavaScript **AND (`&&`)** operator, where a value must meet the conditions of all types involved.

Intersection Types are particularly useful when you want to create a type that combines the properties and behaviors of multiple types into a single, composite type.

### Example of an Intersection Type:

```typescript
// Intersection Type (&) Example

type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  jobTitle: string;
};

// Intersection Type
type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
  name: "Md. Al Amin Mollik",
  age: 30,
  employeeId: 12345,
  jobTitle: "Software Developer",
};

console.log(employee);
```

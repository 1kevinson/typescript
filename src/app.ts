/** @format */

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
  OWNER
}

type Person = {
  name: string,
  age: number,
  hobbies: string[],
  role: Role
}

const person : Person = {
  name: 'Kevin',
  age: 30,
  hobbies: ['sport', 'programming'],
  role: Role.ADMIN
}
 
person.hobbies.push('reading');

console.log(person);

/** @format */

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: 'Kevin',
  age: 30,
  hobbies: ['sport', 'programming'],
  role: Role.ADMIN
}
 
person.role.push('admin');

console.log(person);

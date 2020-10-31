/** @format */

enum Role {
  
}

const person: {
  name: string,
  age: number,
  hobbies: string[],
  role : [number,string]
} = {
  name: 'Kevin',
  age: 30,
  hobbies: ['sport', 'programming'],
  role: [2 , 'author']
}
 
person.role.push('admin');

console.log(person);

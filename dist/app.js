"use strict";
/** @format */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
    Role[Role["OWNER"] = 3] = "OWNER";
})(Role || (Role = {}));
var person = {
    name: 'Kevin',
    age: 30,
    hobbies: ['sport', 'programming'],
    role: Role.ADMIN
};
person.hobbies.push('reading');
console.log(person);

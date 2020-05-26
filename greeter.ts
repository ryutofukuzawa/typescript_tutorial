class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string,public lastName: string) {
    this.fullName = firstName + "" + middleInitial + "" + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: string) {
  return "Hello," + person;
}

let user = "jane User";

document.body.textContent = greeter(user);
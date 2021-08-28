class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  communicate() {
    console.log("communciating");
  }

  eat() {
    console.log("Eating");
  }

  sleep() {
    console.log("Sleeping");
  }
}

class Doctor extends Person {
  constructor(firstName, lastName, age, gender, specialization) {
    super(firstName, lastName, age, gender);
    this.specialization = specialization;
  }

  diagnose() {
    console.log("diagnosing");
  }
}

class Professor extends Person {
  constructor(firstName, lastName, age, gender, subject) {
    super(firstName, lastName, age, gender);
    this.subject = subject;
  }

  teach() {
    console.log("Teaching");
  }
}

//skipped the rest as it is too easy. LS did it using construtor and prototype
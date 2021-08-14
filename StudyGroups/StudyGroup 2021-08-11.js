//similar amount of code

/*


First question:
- Prototypical inheritance


code is not


in 129
- describe the concepts and use the code to explain the concepts
- Explain why this output this

For JS120, the exercises helped Emaon prepare better for the JS129 assessement

Testing high level knowledge and mental models in JS120


Interview
-back and forth questions
- explain concepts and use code examples
  - keep code examples very simple and as small as possible
    - the more code you have, the harder it is to debug and explain things
- common mistakes
  - don't go into much detail
  - start with important details and if the interviewr
  asks more questions then explain more
- You can ask the interviewer if they want more details or not

- code based questions and concept based questions
- code based
  - give a code and explain what is happening

- speak out loud while giving code examples

- he likes people who types up code and not copy and paste code


Question
- what is OOP and why we use it
  - encapsulation
  - abstraction
*/

// Question
// - what is OOP and why we use it
//   - encapsulation
//   - abstraction
let student = {
  name: 'sergio',
  personality: 'awesome',
  getInfo() {
    console.log(`${this.name} is ${this.personality}`);
  }
};


//What is inheritance and how it is implemented in JavaScript
//
//example: same as beofre
//added lines
let youngerStudent = Object.create(student);
youngerStudent.getInfo();
//could choose better example
//should not have built on top of this example as it is not that good
//of an example


//third question: pseudo-classical inheritance
  //he was using ES6 examples
//
















//code examples

// Intros
// JS129 Assessment
// - Assessment Format
// - Preparing for the Assessment
// Practice Questions



let student = {
  name: 'sergio',
  personality: 'awesome',
  getInfo() {
    console.log(`${this.name} is ${this.personality}`);
  }
}

let youngerStudent = Object.create(student);

youngerStudent.getInfo();

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password; 
  }
  
  getInfo() {
    
  }
  
}

class Student extends User {
  constructor(email, password, name, major) {
    super(email, password); 
    this.name = name;
    this.major = major; 
  }
}


const student = new Student('sergio@example.com', 'asdf', 'Sergio', 'Computer Science'); 
console.log(student.email); 





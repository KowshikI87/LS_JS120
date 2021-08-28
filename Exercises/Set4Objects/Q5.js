/* eslint-disable max-lines-per-function */
function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],

    info() {
      return `${this.name} is a ${year} year student`;
    },

    addCourse(course) {
      course["notes"] = [];
      this.courses.push(course);
    },

    listCourses() {
      return this.courses;
    },

    findCourse(courseCode) {
      return this.courses.find(course => course["code"] === courseCode);
    },

    addNote(courseCode, note) {
      let course = this.findCourse(courseCode);
      if (course) {
        course["notes"].push(note);
      }
    },

    updateNote(courseCode, note) {
      let course = this.findCourse(courseCode);
      if (course) {
        course["notes"] = [note];
      }
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course["notes"].length > 0) {
          console.log(`${course.name}: ${course["notes"].join('; ')}`);
        }
      });
    }
  };
}

let school = {
  students: [],
  addStudent: function(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].indexOf(year) >= 0) {
      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid Year');
      return undefined;
    }
  },

  enrollStudent: function(student, courseName, courseCode) {
    student.addCourse({name: courseName, code: courseCode});
  },

  addGrade: function(student, courseName, grade) {
    let course = student.listCourses().filter(course => {
      return course.name === courseName;
    })[0];

    if (course) {
      course.grade = grade;
    }
  },

  getReportCard: function(student) {
    student.listCourses().forEach(course => {
      if (course.grade) {
        console.log(`${course.name} : ${String(course.grade)}`);
      } else {
        console.log(`${course.name} : In progress`);
      }
    });
  },

  courseReport: function(courseName) {
    function getCourse(student, courseName) {
      return student.listCourses().filter(course => {
        return course.name === courseName;
      })[0];
    }

    let courseStudents = this.students.map(student => {
      let course = getCourse(student, courseName) || { grade: undefined };
      return { name: student.name, grade: course.grade };
    }).filter(student => student.grade);

    if (courseStudents.length > 0) {
      console.log(`= ${courseName} Grades=`);

      let average = courseStudents.reduce((total, student) => {
        console.log(`${student.name} : ${String(student.grade)}`);
        return total + student.grade;
      }, 0) / courseStudents.length;

      console.log('---');
      console.log(`Course Average: ${String(average)}`);
    }
  },
};

// Examples of created student objects with grades; methods on the
//objects are not shown here for brevity.
// The following are only showing the properties
//that aren't methods for the three objects
let foo = {
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
};

let bar = {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
};

let qux = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
  ],
};

//test not working because students
//were not created properly
school.students = [foo, bar, qux];
school.getReportCard(foo);
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');
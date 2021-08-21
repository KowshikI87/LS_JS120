/* eslint-disable max-lines-per-function */
function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${year} year student`);
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


let foo = createStudent('Foo', '1st');
foo.info();
// = "Foo is a 1st year student"

foo.listCourses();
// = [];

foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// = [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]

foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// = "Math: Fun course; Remember to study for algebra"

foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// = "Math: Fun course; Remember to study for algebra"
// = "Advance Math: Difficult subject"

foo.updateNote(101, 'Fun course');
foo.viewNotes();
// = "Math: Fun course"
// = "Advanced Math: Difficult subject"
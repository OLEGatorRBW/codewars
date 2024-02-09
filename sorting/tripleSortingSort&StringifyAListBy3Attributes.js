function sort(students) {
    students.sort((a, b) => {
    if(a.gpa != b.gpa){
      return b.gpa - a.gpa
    }
    if(a.fullName.split(' ')[1][0] != b.fullName.split(' ')[1][0]){
      return a.fullName.split(' ')[1][0].localeCompare(b.fullName.split(' ')[1][0])
    }
    return a.age - b.age;    
  })
  return students.map((e) => {
    return e.fullName
  }).join(', ')


}
class Student {
    constructor(age, gpa, fullName) {
      this.age = age;
      this.gpa = gpa;
      this.fullName = fullName;
    };
};

/*
*** Homework second Week / Hack Your Future, Javascript1, 
*   Author: Fatemeh Pakpour
*   Student Manager
*/
const class07Students = [] ;
function addStudentToClass(studentName ) {

        if (class07Students.length > 6 ){
              return  "Cannot add more students to class 07"
        } else if (studentName === "") {
              return "You must write something!"; 
        } else if (studentName === " Queen") {
            return "Queen should always get a space" ;
        } else if (removeDuplicates(studentName )){
            return" Student" + studentName +"is already in the class";
        } else {
            class07Students.push(studentName);
            return studentName + " Succeed";
            }
        }
      function getNumberOfStudents() {
            return class07Students.length;
        }
      function removeDuplicates(studentName ){
        for(let i = 0 ; i <  getNumberOfStudents(); i++){
            if(class07Students[i] == -1){
                class07Students .push(addStudentToClass()[i]) 
                class07Students.push(studentName)
            }
        }
    }
//execute code   
console.log(addStudentToClass( "Queen" )) ;
console.log(addStudentToClass( "" )) ;
console.log(addStudentToClass("Sam Snow"));
console.log(addStudentToClass("Nana Pak"));
console.log(addStudentToClass("Fafa "));
console.log(addStudentToClass("Queen"));
console.log(addStudentToClass("Shadi Goal"));
console.log(addStudentToClass("Sherry"));
console.log(addStudentToClass("Faray Cage"));
console.log(addStudentToClass("Fafa"));
console.log(addStudentToClass(""));
console.log(addStudentToClass("Benjamin Hughes"));
console.log(getNumberOfStudents()) ;


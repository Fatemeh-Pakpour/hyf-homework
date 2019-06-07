/*
*** Homework Third Week / Hack Your Future, Javascript1, 
*   Author: Fatemeh Pakpour
*   NOnoN0nOYes (Note taking app)
*/
// Save a note

const notes = [];
function addNote(content, id){
   obj ={
      content: content,
      id : id 
    };
   notes.push(obj);
} 

// Search note by id

function getNoteFromId(id){
    const found = notes.filter(element => element.id === id);
    if (!Array.isArray(found) || found.length <1){
        return "The Id is not found"
    }
    return found;
}
// Log out notes
function logOutNotesFormatted() {
    for(let i in notes){
        console.log(`The note with id ${notes[i].id} has the following note text:${notes[i].content}` )
    }   
}
// Finding index of object in the array

function functiontofindIndexByKeyValue(id) { 
   for (var i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        return i;
      }
    }
     return null;
}
// Delete notes
function deleteNote(id){
    if (getNoteFromId(id)){
        return notes.splice(functiontofindIndexByKeyValue(id), 1);  
    }
}

// Execute code
addNote("programming is fun", 1) ;
addNote("Programs must be written for people to read", 2) ;
addNote("Talk is cheap. Show me the code.", 3) ;
addNote("Teach a man to program, frustrate him for a lifetime.", 4) ;
addNote("Take positive care of your mind", 5) ;
console.log(notes);
console.log ("The content of id = 4 :") ;
console.log(getNoteFromId(4));
console.log(getNoteFromId(6));
logOutNotesFormatted();
console.log(functiontofindIndexByKeyValue(1));
console.log(deleteNote(1));
console.log("After delete the id = 1");
console.log(notes);
/*
*** Homework second Week / Hack Your Future, Javascript1, 
*   Author: Fatemeh Pakpour
*  Flight booking fullname 
*/
const formalTitle = " Dr "
let useFormalName = true;
function getFullname(firstName, lastName, useFormalName) {
    let fullname = firstName + " " + lastName;
    if (useFormalName) {
        return formalTitle + fullname;
    } else {
        return fullname;
    }
}

//Execute code

console.log ("The fullname of client is : " + " " + getFullname ("Fatemeh" ,"Pakpour" , useFormalName));

// What do we do if useFormalName is not given as an argument
/*
const formalTitle =" Dr " ;
let useFormalName = true ;
function getFullname ( firstname , lastname ){
    return  firstname + " " + lastname; 
}
    if (useFormalName ){
        console.log("The fullname of client is : " + formalTitle + " " + getFullname( "Fatemeh" ,"Pakpour" ) )      
} else {
    console.log( "The fullname of client is : "  + getFullname( "Fatemeh" ,"Pakpour" ) ) 
    }
    */
 




   
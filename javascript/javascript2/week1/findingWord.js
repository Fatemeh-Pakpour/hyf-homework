
// Array of Danish words
const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

// const shortest = danishWords.reduce((element,item) => element.length <= item.length ? element : item);

const shortest = danishWords.reduce((element,item) => {
    
if ( element.length <= item.length ){
    return element;
}
 else{
        return item;
    }
});

// Execute the code 
console.log (shortest );

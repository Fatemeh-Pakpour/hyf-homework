/*
*** Homework Third Week / Hack Your Future, Javascript1, 
*   Author: Fatemeh Pakpour
*   My favorite songsDatabase
*/
class Song {
    constructor(songId , title , artist ){
    this.songId = songId ;
    this.title = title ;
    this.artist = artist ;
  }
}

const songsDatabase = [   
new Song (1 , " When is enough too little?" , " The spies girls " ) ,
new Song (2 , " My baby" , " Soggy socks" ) ,
new Song (3 , "3 nails in wood" , " The carpenters " ),
new Song (5, " Send My Love" , " Adele " ) ,
new Song (6 , " Rolling in the Deep" , " Adele " ),
new Song (4 , " Hello " , " Adele " )  
]

// Add song to the Database 
function addSongToDatabase(songId, title, artist) {
  songsDatabase.push(new Song(songId, title, artist) );
}

// Search song by title
function getSongByTitle(title) {
  for(let i = 0 ; i < songsDatabase.length ; i++) {
    if ( songsDatabase[i].title.toUpperCase().trim() === title.toUpperCase().trim()) {
    return songsDatabase[i] ;
    } 
  }
console.log ("There is no song with this titile");
}

//  Creat a play list 
const playList = [] ;
function addSongToMyPlaylist(title) {
  return playList.push(getSongByTitle(title));
 }
 
//  remove duplicate songs from database
function removeDuplicates(prop) {
  return songsDatabase.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
}
//  Execute code section
addSongToDatabase(4 , " Hello " , " Adele " ) ;
const searchedSong1 = getSongByTitle(" akhe");
console.log("searchedSong1",searchedSong1);
const searchedSong2 = getSongByTitle("  3 Nals iN wOod");
console.log("searchedSong2",searchedSong2); 
addSongToMyPlaylist(" Hello ");
addSongToMyPlaylist(" Send My Love");
addSongToMyPlaylist(" Rolling in the Deep");
addSongToMyPlaylist(" Rolling in the Deep");
console.log ("playlist " , playList);
var removeDuplicate =removeDuplicates("title");
console.log(removeDuplicate);
console.log (songsDatabase);

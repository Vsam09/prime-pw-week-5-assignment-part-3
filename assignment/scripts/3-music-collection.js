console.log('***** Music Collection *****')
let collection = [];
function addToCollection (title, artist, yearPublished) {
  const album = {};
  album.title = title;
  album.artist = artist;
  album.yearPublished = yearPublished;
//Add the new object to the end of the `collection` array
  collection.push(album);
//Return the newly created object
    return album;
}
//Console.log each album as added using the returned value
console.log(' Added Album01', collection.album01 = addToCollection('Fire on fire', 'Sam Smith', 2018) );
console.log(' Added Album02', collection.album02 = addToCollection('No matter what', 'Calum Scott', 2018) );
console.log(' Added Album03', collection.album03 = addToCollection('You are the reason', 'Calum Scott', 2018) );
console.log(' Added Album04', collection.album04 = addToCollection('I belong to you', 'Jacob Lee', 2017) );
console.log(' Added Album05', collection.album05 = addToCollection('Talking to the moon', 'Bruno Mars', 2010) );
console.log(' Added Album06', collection.album06 = addToCollection('Five more minutes', 'Scotty McCreery', 2018) );
//After all are added, console.log the `collection` array
console.log('Collection', collection)

function showCollection( array ){
  console.log('There are albums in this array', array.length);
  for ( let items of array ){
  console.log(`${items.title} by ${items.artist} published in ${items.yearPublished}`);
  }
}
  showCollection (collection);

function findByArtist( artist ) {
  let findArtist = [];
  for (let item of collection)
    if (item.artist === artist ){
      findArtist.push(artist);
    return findArtist;
  }
    return false;
}
console.log('Find artist', findByArtist('Sam Smith') );

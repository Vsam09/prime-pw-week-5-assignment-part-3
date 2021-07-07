console.log('***** Music Collection *****')
let collection = [];
function addToCollection (title, artist, yearPublished) {
  const album = {};
  album.title = title;
  album.artist = artist;
  album.yearPublished = yearPublished;
  collection.push(album);
  return album;
}

console.log(' Added Album01', collection.album01 = addToCollection('Fire on fire', 'Sam Smith', 2018) );
console.log(' Added Album02', collection.album02 = addToCollection('No matter what', 'Calum Scott', 2018) );
console.log(' Added Album03', collection.album03 = addToCollection('You are the reason', 'Calum Scott', 2018) );
console.log(' Added Album04', collection.album04 = addToCollection('I belong to you', 'Jacob Lee', 2017) );
console.log(' Added Album05', collection.album05 = addToCollection('Talking to the moon', 'Bruno Mars', 2010) );
console.log(' Added Album06', collection.album06 = addToCollection('Five more minutes', 'Scotty McCreery', 2018) );
console.log('Collection', collection)

console.log('***** Music Collection *****')
let collection = [];
function addToCollection (title, artist, yearPublished) {
  const album = {};
  album.title = title;
  album.artist = artist;
  album.yearPublished = yearPublished;
  collection.push(album);
  return collection;
}

collection.album = addToCollection('Fire on fire', 'Sam Smith', 2020);
collection.album = addToCollection('No matter what', 'Calum Scott', 2018);
collection.album = addToCollection('You are the reason', 'Calum Scott', 2018);
collection.album = addToCollection('I belong to you', 'Jacob Lee', 2017);
collection.album = addToCollection('Talking to the moon', 'Bruno Mars', 2010);
collection.album = addToCollection('Five more minutes', 'Scotty McCreery', 2018);

console.log('Collection', collection)

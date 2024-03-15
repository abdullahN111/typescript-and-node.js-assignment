function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makeAlbum("Ali", "Light");
console.log(album);
album = makeAlbum("Atif", "Eyes");
console.log(album);
album = makeAlbum("Asim", "Blue wave");
console.log(album);

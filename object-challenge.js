// ? Take Home Challenge

let album = {
  id: 55,
  artist: "The Midnight",
  likes: 4200,
  albumInfo: {
    album1: {
      numberOfSongs: 3,
      songInfo: [
        { track: 1, songName: "Days of Thunder" },
        { track: 2, songName: "Los Angeles" },
        { track: 3, songName: "Sunset" },
      ],
    },
    album2: {
      numberOfSongs: 2,
      songInfo: [
        { track: 1, songName: "Neon Lights" },
        { track: 2, songName: "City Dreams" },
      ],
    },
  },
  isAvailable: true,
};

/* 
	* print the second song name from album1
	* add album3 inside albumInfo
	* album3 should contain:
		* numberOfSongs
		* songInfo (array of 2 song objects with track and songName properties)
		* fabricate their values to whatever you wish

	! HARD MODE: add a property called totalAlbums which should be total number of albums.
	* hint: use Object.keys() and something else
		
*/

album.albumInfo.album3 = {
  numberOfSongs: 3,
  songInfo: [
    { track: 1, songName: "Days of the Agartha" },
    { track: 2, songName: "Land Down Unda" },
    { track: 3, songName: "Agartha in Danger" },
  ],
};

album.totalAlbums = Object.keys(album.albumInfo).length;
console.log(album);
console.log(album.albumInfo.album1.songInfo[1].songName);
// console.log(album.albumInfo.album2);
// console.log(album.albumInfo.album3);
// console.log(album);

// let albums = Object.keys(album.albumInfo).length;

// let albumCounter = (album) => {
//   count = 0;
//   album.totalAlbums = count;
//   for (let i = 0; (i = Object.keys(album.albumInfo).length); i++) {
//     count += 1;
//   }
//   return album.totalAlbums;
// };
// console.log(album);
// albumCounter(album);
// console.log(album);
/*
  ? Object notes
  - the objects properties are accessed exactly like a file structure
  - objects are updated when you add properties post hawk
  - 
*/

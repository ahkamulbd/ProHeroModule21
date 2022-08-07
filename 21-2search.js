const lyrics = 'Tumi bondhu kala pakhi ami jeno ki, bosonto kale tumai bolte pari ni';
//const doesExist = lyrics.includes('pakhi');

//console.log(doesExist);     // Print : true

const searchString = 'pakhi';
const lyricsLowerCase = lyrics.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchString);

console.log(doesExist);


// Uses of indexOf

console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('bondhu'));

if (lyrics.indexOf('tumaii') !== -1) {
    console.log('exists inside the string');
}
else {
    console.log('cant find it');
}

// Uses of startsWith

console.log(lyrics.startsWith('Tumi'));

// Uses of EndsWith

const fileName = 'myBiodata.pdf';
const otherFile = 'myPic.png';

fileName.endsWith('.pdf');
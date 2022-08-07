const lyrics = 'Tumi bondhu kala pakhi ami jeno ki, bosonto kale tumai bolte pari ni. kala kala sada sada, tumi amar ki, bosonto kale tumai bolte pari ni.';
const parts = lyrics.split(' ');
console.log(parts);

const sentences = lyrics.split('.');
console.log(sentences);

const partial = lyrics.slice(5, 11);
console.log(partial);

const partial2 = lyrics.substring(5, 17);
console.log(partial2);
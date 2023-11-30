/* {
 font-size: 100%;
 font-family: Arial;
 color: purple;
}
*/

// const everythingP = document.querySelectorAll('p');
// const everythingH1 = document.querySelectorAll('h1');
// const everythingH2 = document.querySelectorAll('h2');


// console.log('e: ', everythingP, 'eH1: ', everythingH1, 'eH2: ', everythingH2);

// everythingP.forEach(el => {
//     console.log();
//     el.style.color = 'purple'
// });

// everythingH1.forEach(el => {
//     el.style.color = 'purple'
// });

// everythingH2.forEach(el => {
//     el.style.color = 'purple'
// });


const textTags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'a', 'span', 'td', 'th', 'i', 'strong', 'div', 'body']
textTags.forEach( tag => {
  const text = document.querySelectorAll(tag)
  text.forEach(el => {
    el.style.color = '#A0522D';
    el.style.fontFamily = "Papyrus, fantasy";
    el.style.backgroundColor = "#FCF5E5";
  })
});

const imgs = document.querySelectorAll('img');
  imgs.forEach(el => {
    el.style.filter = 'sepia(1)';
    el.style.border = '5px solid saddlebrown';
  });


const musicPlayer = document.createElement('audio');
musicPlayer.setAttribute('autoplay', 'autoplay');
const body = document.querySelector('body');
body.appendChild(musicPlayer);
const pirateMusic = document.createElement('source');
// pirateMusic.setAttribute('src', "https://cdn.pixabay.com/download/audio/2023/09/24/audio_70e3d3e84e.mp3?filename=pirate-tavern-full-version-167990.mp3");
pirateMusic.setAttribute('type', 'audio/mp3');
musicPlayer.appendChild(pirateMusic)
console.log('piratemusic: ', pirateMusic);
console.log('musicplayer: ', musicPlayer);

const arrSongs = ["https://cdn.pixabay.com/download/audio/2023/09/24/audio_70e3d3e84e.mp3?filename=pirate-tavern-full-version-167990.mp3", 
                  "https://cdn.pixabay.com/download/audio/2022/05/27/audio_6c19f59b3c.mp3?filename=pirate-adventures-112150.mp3",
                  "https://cdn.pixabay.com/download/audio/2022/10/20/audio_2250915409.mp3?filename=award-ceremony-nomination-solemn-winner-triumphant-victory-123485.mp3",
                  "https://cdn.pixabay.com/download/audio/2023/08/23/audio_c7e134a561.mp3?filename=pirates-163389.mp3",
                  "https://cdn.pixabay.com/audio/2023/06/08/audio_4dd160673b.mp3"
]
pirateMusic.setAttribute('src', arrSongs[Math.ceil(Math.random() * arrSongs.length)]);
document.addEventListener('click', function () {
  
    musicPlayer.play();
});
console.log(arrSongs[Math.ceil(Math.random() * arrSongs.length)]);

// // https://www.youtube.com/watch?v=QHWAzBZ2hDA

/*
<audio controls autoplay>
  <source src="horse.ogg" type="audio/ogg">
  "https://cdn.pixabay.com/download/audio/2023/09/24/audio_70e3d3e84e.mp3?filename=pirate-tavern-full-version-167990.mp3"
*/


// const musicPlayer = document.createElement('audio');
// const pirateMusic = document.createElement('source');
// pirateMusic.setAttribute('src', "https://cdn.pixabay.com/download/audio/2023/09/24/audio_70e3d3e84e.mp3?filename=pirate-tavern-full-version-167990.mp3");
// pirateMusic.setAttribute('type', 'audio/mp3');
// musicPlayer.appendChild(pirateMusic);

// document.addEventListener('click', function () {
//     musicPlayer.play();
// });

// const body = document.querySelector('body');
// body.appendChild(musicPlayer);
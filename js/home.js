let posterData = [
  {
    img: 'image/shang.jpg',
    movieName: 'SHANG-CHI AND THE LEGEND OF THE TEN RINGS',
    releaseDate: '2021, Destin Daniel Cretton',
    time: '116 min',
    movieType: 'Adventure, Action',
    bgClass: 'shangBg',
    movieDesc:
      'Shang-Chi and the Legend of the Ten Rings is an upcoming American superhero film based on the Marvel Comics character Shang-Chi. In the film, Shang-Chi is forced to confront his past after he is drawn into the Ten Rings organization.',
  },
  {
    img: 'image/spider3.jpg',
    movieName: 'SPIDER-MAN: NO WAY HOME',
    releaseDate: '2021, David Ayer',
    time: '112 min',
    movieType: 'Action, Adventure',
    bgClass: 'spiderBg',
    movieDesc:
      'Spider-Man: No Way Home is an upcoming superhero film, based on the Marvel Comics superhero of the same name. The film is a sequel to Spider-Man: Homecoming and Spider-Man: Far From Home. It is the twenty-seventh film in the Marvel Cinematic Universe and the fourth film of Phase Four.',
  },
  {
    img: 'image/doctor2.jpeg',
    movieName: 'DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS',
    releaseDate: '2022, Scott Derrickson',
    time: '117 min',
    movieType: 'Action, Adventure',
    bgClass: 'doctorBg',
    movieDesc:
      'Doctor Strange in the Multiverse of Madness is an upcoming American superhero film based on the Marvel Comics character Doctor Strange. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is intended to be the sequel to Doctor Strange (2016) and the 28th film of the Marvel Cinematic Universe (MCU)',
  },
  {
    img: 'image/thor2.jpg',
    movieName: 'THOR: LOVE AND THUNDER',
    releaseDate: '2022, Taika Waititi',
    time: '125 min',
    movieType: 'Action, Adventure, Fantasy',
    bgClass: 'thorBg',
    movieDesc:
      'Thor:Love and Thunder will be inspired by the Thor comics of star Marvel writer Jason Aaron. In that comic, Odinson loses the ability to lift Mjolnir, and Jane Foster takes on the mantle of Thor, while simultaneously battling cancer in her human hours.',
  },
  {
    img: 'image/guardians.jpg',
    movieName: 'THE GUARDIANS OF THE GALAXY VOL 3',
    releaseDate: '2023, James Gunn',
    time: '131 min',
    movieType: 'Adventure, Fantasy',
    bgClass: 'guardiansBg',
    movieDesc:
      'The Guardians of the galaxy vol 3 is an upcoming superhero film, based on the Marvel Comics superhero team of the same name. The film is a sequel to Guardians of the Galaxy, Guardians of the Galaxy Vol. 2, Avengers: Endgame, and The Guardians of the Galaxy Holiday Special, and a crossover/sequel to Thor: Love and Thunder.',
  },
];

loadPosterData(posterData);

function loadPosterData(posterData) {
  const posterClass = document.getElementById('posterData');
  let posters = '';

  for (let poster of posterData) {
    posters += `<div class="movie_card" id="bright"><div class="info_section">
        <div class="movie_header"><img class="locandina"
        src="${poster.img}" /><h4><b>${poster.movieName}</b></h4><h4>${poster.releaseDate}</h4>
        <span class="minutes">${poster.time}</span><p class="type">${poster.movieType}</p></div>
        <div class="movie_desc"><p class="text">${poster.movieDesc}</p></div></div><div class="${poster.bgClass}"></div></div>`;
  }
  posterClass.innerHTML = posters;
}

let trailerData = [
  {
    img: 'image/ironman2.jpg',
    movieName: 'Iron Man',
    year: '2008, Jon Favreau',
    rating: '7.9/10',
    link: 'https://www.youtube.com/watch?v=8ugaeA-nMTc',
  },
  {
    img: 'image/captain.jpg',
    movieName: 'Captain America The First Avenger',
    year: '2011, Joe Johnston',
    rating: '6.9/10',
    link: 'https://www.youtube.com/watch?v=JerVrbLldXw',
  },
  {
    img: 'image/thor4.jpg',
    movieName: 'Thor',
    year: '2011, Kennath branagh',
    rating: '7/10',
    link: 'https://www.youtube.com/watch?v=JOddp-nlNvQ',
  },
  {
    img: 'image/hulk2.jpg',
    movieName: 'The Incredible Hulk',
    year: '2008, Louis Leterrier',
    rating: '6.6/10',
    link: 'https://www.youtube.com/watch?v=xbqNb2PFKKA',
  },
  {
    img: 'image/Avengers.jpg',
    movieName: 'The Avengers',
    year: '2012, Joss Whedon',
    rating: '8/10',
    link: 'https://www.youtube.com/watch?v=eOrNdBpGMv8',
  },
  {
    img: 'image/guardians3.jpg',
    movieName: 'Guardians of the Galaxy',
    year: '2014, James Gunn',
    rating: '8/10',
    link: 'https://www.youtube.com/watch?v=d96cjJhvlMA',
  },
  {
    img: 'image/infinity.jpg',
    movieName: 'Avengers: Infinity War',
    year: '2018, Anthony and Joe Russo',
    rating: '8.4/10',
    link: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8',
  },
  {
    img: 'image/endgame2.jpg',
    movieName: 'Avengers: Endgame',
    year: '2019, Anthony and Joe Russo',
    rating: '8.4/10',
    link: 'https://www.youtube.com/watch?v=TcMBFSGVi1c',
  },
];

loadTrailerData(trailerData);

function loadTrailerData(trailerData) {
  const trailerClass = document.getElementById('trailerData');
  let trailers = '';

  for (let trailer of trailerData) {
    trailers += `<div class="card movie_trailer_card"><img src="${trailer.img}"
    class="card-img-top" alt="..."><div class="card-body"><a href="${trailer.link}" target="_blank"><i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom"
    title="Play Trailer"></i></a><h5 class="card-title"><b>${trailer.movieName}</b></h5><span class="movie_info"><b>${trailer.year}</b></span>
    <span class="movie_info float-right"><b>Rating : ${trailer.rating}</b></span></div></div>`;
  }
  trailerClass.innerHTML = trailers;
}

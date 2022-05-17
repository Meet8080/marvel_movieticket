let seatData = [
  {
    seat1: 'seat',
    seat2: 'seat',
    seat3: 'seat occupied',
    seat4: 'seat occupied',
    seat5: 'seat',
    seat6: 'seat',
    seat7: 'seat',
    seat8: 'seat',
    seat9: 'seat',
  },
  {
    seat1: 'seat',
    seat2: 'seat',
    seat3: 'seat',
    seat4: 'seat',
    seat5: 'seat',
    seat6: 'seat',
    seat7: 'seat',
    seat8: 'seat occupied',
    seat9: 'seat occupied',
  },
  {
    seat1: 'seat',
    seat2: 'seat',
    seat3: 'seat',
    seat4: 'seat',
    seat5: 'seat occupied',
    seat6: 'seat',
    seat7: 'seat',
    seat8: 'seat',
    seat9: 'seat',
  },
  {
    seat1: 'seat',
    seat2: 'seat',
    seat3: 'seat',
    seat4: 'seat',
    seat5: 'seat',
    seat6: 'seat',
    seat7: 'seat',
    seat8: 'seat',
    seat9: 'seat',
  },
  {
    seat1: 'seat',
    seat2: 'seat',
    seat3: 'seat',
    seat4: 'seat',
    seat5: 'seat',
    seat6: 'seat',
    seat7: 'seat',
    seat8: 'seat',
    seat9: 'seat',
  },
  {
    seat1: 'seat',
    seat2: 'seat',
    seat3: 'seat',
    seat4: 'seat',
    seat5: 'seat',
    seat6: 'seat',
    seat7: 'seat',
    seat8: 'seat',
    seat9: 'seat',
  },
];

loadSeatData(seatData);

function loadSeatData(seatData) {
  const chairClass = document.getElementById('seat-chairs');
  let seatChairs = '';

  for (let seat of seatData) {
    seatChairs += `<div class="row">
    <div class="${seat.seat1}"></div>
    <div class="${seat.seat2}"></div>
    <div class="${seat.seat3}"></div>
    <div class="${seat.seat4}"></div>
    <div class="${seat.seat5}"></div>
    <div class="${seat.seat6}"></div>
    <div class="${seat.seat7}"></div>
    <div class="${seat.seat8}"></div>
    <div class="${seat.seat9}"></div>
    </div>`;
  }
  chairClass.innerHTML = seatChairs;
}

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const bookTicket = document.getElementById('book-ticket');

populateUI();

let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  sessionStorage.setItem('selectedMovieIndex', movieIndex);
  sessionStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  sessionStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;

  setMovieData(movieSelect.selectedIndex, movieSelect.value);
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(sessionStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = sessionStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();

//book ticket
bookTicket.addEventListener('click', function book() {
  swal({
    text: 'Are you sure you want to confirm?',
    icon: 'warning',
    buttons: true,
  }).then((result) => {
    if (result) {
      window.location.replace('receipt.html');
    }
  });
});

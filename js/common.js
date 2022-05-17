loadnavbar();
loadheader();

function loadnavbar() {
  const navbar = document.getElementById('navbar');
  if (navbar !== null) {
    const navbarData = `<div class="header-name">Welcome</div>
                        <ul>
                            <li><a href="home.html">Home</a></li>
                            <li><a href="movie-trailer.html">Watch Trailer</a></li>
                            <li><a href="movie-song.html">Play Music</a></li> 
                            <li><a href="movie-ticket.html">Book Ticket</a></li>
                            <li><a href="contactus.html">Contact Us</a></li>   
                        </ul>`;
    navbar.innerHTML = navbarData;
  }
}

function loadheader() {
  const header = document.getElementById('dynamic-header');
  if (header !== null) {
    const headerData = `<div>
                            <button id="toggle" class="toggle">
                            <i class="fa fa-bars fa-2x"></i>
                            </button>
                            
                        </div>
                        <div class="containBg">
                        <h1 id= "bgColor">Marvel Movie House</h1>
                        <p>
                            We are provide a service of Online booking of Movie Ticket
                        </p>
                        <a href="movie-ticket.html" class="btn btn-danger">Book Ticket</a>
                        </div>
                        `;
    header.innerHTML = headerData;
  }
}

const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

function closeNavbar(e) {
  if (
    document.body.classList.contains('show-nav') &&
    e.target !== toggle &&
    !toggle.contains(e.target) &&
    e.target !== navbar &&
    !navbar.contains(e.target)
  ) {
    document.body.classList.toggle('show-nav');
    document.body.removeEventListener('click', closeNavbar);
  } else if (!document.body.classList.contains('show-nav')) {
    document.body.removeEventListener('click', closeNavbar);
  }
}

if (toggle !== null) {
  // Toggle nav
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
    document.body.addEventListener('click', closeNavbar);
  });
}

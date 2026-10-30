// 2.1 Accordions for FAQ
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    header.nextElementSibling.classList.toggle('active');
  });
});

// Tabs for Services
function openTab(evt, tabName) {
  document.querySelectorAll(".tabcontent").forEach(t => t.style.display = "none");
  document.getElementById(tabName).style.display = "block";
}

// Modals - Donation / Volunteer
const modal = document.getElementById("donateModal");
document.getElementById("openModal").onclick = () => modal.style.display = "block";
document.querySelector(".close").onclick = () => modal.style.display = "none";

// Animations - Fade in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('fade-in'); });
});
document.querySelectorAll('.card').forEach(card => observer.observe(card));

// Gallery Lightbox
const lightbox = document.getElementById('lightbox');
function openLightbox(src) {
  lightbox.style.display = 'flex';
  lightbox.querySelector('img').src = src;
}
function closeLightbox() { lightbox.style.display = 'none'; }

// 2.2 Dynamic Content - Events
const events = [
  { title: "Senior Bingo Day", date: "2026-11-01", category: "social" },
  { title: "Health Check-up Camp", date: "2026-11-10", category: "health" },
  { title: "Family Visit Day", date: "2026-11-15", category: "family" }
];
const eventsContainer = document.getElementById('eventsList');
if(eventsContainer){
  events.forEach(ev => {
    eventsContainer.innerHTML += `<article class="card"><h3>${ev.title}</h3><p>${ev.date} - ${ev.category}</p></article>`;
  });
}

// 2.2 Search & Filter - for services.html
function searchServices() {
  let input = document.getElementById('searchInput').value.toLowerCase();
  let cards = document.querySelectorAll('.service-card');
  cards.forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(input) ? "block" : "none";
  });
}
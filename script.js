function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// const projectCardsContainer = document.querySelector('.project-cards-container');
// const nextButton = document.getElementById('next-button');
// let currentCardIndex = 0;

// nextButton.addEventListener('click', () => {
//   const cards = projectCardsContainer.children;
//   const cardWidth = cards[0].offsetWidth + 20; // 20 is the margin right
//   const maxCardsToShow = 3;
//   const totalCards = cards.length;

//   if (currentCardIndex + maxCardsToShow < totalCards) {
//     currentCardIndex++;
//     projectCardsContainer.style.transform = `translateX(-${currentCardIndex * cardWidth}px)`;
//   }
// });

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
});
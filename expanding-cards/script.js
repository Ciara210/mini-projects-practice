// const cards = document.querySelectorAll('.cards')

// cards.forEach(card => {
//   card.addEventListener('click', () => {
//     removeActive()
//     card.classList.add('active')
//   })
// })

// function removeActive(){
//   cards.forEach(card => {
//     card.classList.remove('active')
//   })
// }

const cardsContainer = document.querySelector('.expanding-cards');

cardsContainer.addEventListener('click', (event) => {
  const clickedCard = event.target.closest('.cards');
  
  if (clickedCard) {
    removeActive();
    clickedCard.classList.add('active');
  }
});

function removeActive() {
  const activeCards = cardsContainer.querySelectorAll('.cards.active');
  
  activeCards.forEach((card) => {
    card.classList.remove('active');
  });
}
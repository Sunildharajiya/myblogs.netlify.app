const cards = document.querySelectorAll('.card');

// Add click event listener to each card
 
cards.forEach(card => {
     card.addEventListener('click', () => {
         const link = card.getAttribute('data-link');
             
     if (link) {
         window.location.href = link;
             }
      });
 });

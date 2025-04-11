document.addEventListener('DOMContentLoaded', function () {
  const container = document.createElement('div');
  container.className = 'grid-wrapper';

  const cards = document.querySelectorAll('[class^="grid-card"]');
  const parent = cards[0]?.parentNode;

  cards.forEach(card => container.appendChild(card));
  parent.appendChild(container);

  const buttons = document.querySelectorAll('a[href^="#"]');

  buttons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();

      const target = this.getAttribute('href').substring(1);

      cards.forEach(card => {
        if (target === 'all' || card.classList.contains('grid-card-' + target)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });

      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

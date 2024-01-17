const heroContainer = document.querySelector('.hero-container');

if (heroContainer) {
  heroContainer.addEventListener('click', async (e) => {
    if (e.target.classList.contains('delete')) {
      const answer = confirm('Вы точно этого хотите?');
      if (answer) {
        const { id } = e.target.dataset;
        const res = await fetch(`/api/heroes/${id}`, {
          method: 'delete',
        });
        const data = await res.json();
        if (data.message === 'success') {
          e.target.closest('.card').remove();
        } else {
          alert(data.message);
        }
      }
    }
  });
}

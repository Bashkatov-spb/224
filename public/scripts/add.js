const addForm = document.getElementById('add-hero');
console.log(document.cookie);
if (addForm) {
  addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, film, description, img } = e.target;
    const res = await fetch('/api/heroes', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        film: film.value,
        description: description.value,
        img: img.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'success') {
      document.querySelector('.hero-container').insertAdjacentHTML('beforeend', data.html);
      e.target.reset();
    } else {
      alert(data.message);
    }
  });
}

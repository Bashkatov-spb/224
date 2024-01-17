const updateForm = document.getElementById('update-hero');

if (updateForm) {
  updateForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, film, description, img } = e.target;
    const { id } = e.target.dataset;
    const res = await fetch(`/api/heroes/${id}`, {
      method: 'put',
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
      window.location.assign('/heroes');
    } else {
      alert(data.message);
    }
  });
}

const addForm = document.getElementById('add-hero');
console.log(document.cookie);
if (addForm) {
  addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, film, description, img } = e.target;

    const formData = new FormData();

    formData.append('img', img.files[0]);
    formData.append('name', name.value);
    formData.append('description', description.value);
    formData.append('film', film.value);

    const res = await fetch('/api/heroes', {
      method: 'post',
      body: formData,
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

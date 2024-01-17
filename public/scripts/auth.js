const signInForm = document.querySelector('#sign-in');
const signUpForm = document.querySelector('#sign-up');

if (signInForm) {
  signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, password } = e.target;
    const res = await fetch('/api/auth/sign-in', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'success') {
      window.location.assign('/');
    } else {
      alert(data.message);
    }
  });
}

if (signUpForm) {
  signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, password, img, rpassword } = e.target;
    const res = await fetch('/api/auth/sign-up', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        password: password.value,
        img: img.value,
        rpassword: rpassword.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'success') {
      window.location.assign('/');
    } else {
      document.querySelector('.sign-up__error').innerText = data.message;
    }
  });
}

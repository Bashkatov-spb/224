const React = require('react');
const Layout = require('./Layout');

function FormUpdatePage({ title, user, hero }) {
  return (
    <Layout title={title} user={user}>
      <div className="container">
        <form data-id={hero.id} id="update-hero">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              defaultValue={hero.name}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Description
            </label>
            <input
              defaultValue={hero.description}
              name="description"
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Film
            </label>
            <input
              defaultValue={hero.film}
              name="film"
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Image
            </label>
            <input
              defaultValue={hero.img}
              name="img"
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = FormUpdatePage;

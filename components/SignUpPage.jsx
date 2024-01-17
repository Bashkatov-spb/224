const React = require('react');
const Layout = require('./Layout');

function SignUpPage() {
  return (
    <Layout>
      <div className="container">
        <h1
          style={{ color: 'rgba(255,0,0,1)', textTransform: 'uppercase' }}
          className="sign-up__error"
        ></h1>
        <form id="sign-up">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Image
            </label>
            <input name="img" type="file" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Repeat Password
            </label>
            <input
              name="rpassword"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = SignUpPage;

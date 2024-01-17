const React = require('react');
const Layout = require('./Layout');

function HeroPage({ title, hero, user }) {
  return (
    <Layout user={user} title={title}>
      <h1>Hero page</h1>
      <div className="card" style={{ width: '18rem', margin: '20px' }}>
        <img src={hero.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{hero.name}</h5>
          <p className="card-text">{hero.description}</p>
        </div>
      </div>
    </Layout>
  );
}

module.exports = HeroPage;

const React = require('react');
const Layout = require('./Layout');
const AddHeroForm = require('./AddHeroForm');
const HeroItem = require('./HeroItem');

function HeroesListPage({ title, heroes, user }) {
  return (
    <Layout user={user} title={title}>
      <h1>Heroes Page</h1>
      <AddHeroForm />
      <div className="container hero-container" style={{ display: 'flex' }}>
        {heroes.map((hero) => (
          <HeroItem key={hero.id} hero={hero} user={user} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = HeroesListPage;

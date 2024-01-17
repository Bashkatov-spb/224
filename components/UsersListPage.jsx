const React = require('react');
const Layout = require('./Layout');

function UsersListPage({ title, user }) {
  return (
    <Layout user={user} title={title}>
      <h1>Users Page</h1>
    </Layout>
  );
}

module.exports = UsersListPage;

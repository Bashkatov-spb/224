const React = require('react');
const NavBar = require('./NavBar');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* <link rel="stylesheet" href="/css/style.css" /> */}
        <link href="/styles/bootstrap.css" rel="stylesheet" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="/styles/style.css" />
        <script defer src="/scripts/add.js" />
        <script defer src="/scripts/delete.js" />
        <script defer src="/scripts/update.js" />
        <script defer src="/scripts/like.js" />
        <script defer src="/scripts/auth.js" />
      </head>
      <body>
        <NavBar user={user} />
        {children}
      </body>
    </html>
  );
};

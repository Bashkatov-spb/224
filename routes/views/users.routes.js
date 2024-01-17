const router = require('express').Router();

const UsersListPage = require('../../components/UsersListPage');

router.get('/', (req, res) => {
  const html = res.renderComponent(UsersListPage, { title: 'Users page' });
  res.send(html);
});

module.exports = router;

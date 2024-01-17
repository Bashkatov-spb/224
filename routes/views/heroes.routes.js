const router = require('express').Router();
const FormUpdatePage = require('../../components/FormUpdatePage');
const HeroesListPage = require('../../components/HeroesListPage');

const HeroPage = require('../../components/HeroPage');
const { Hero, Like } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const heroes = await Hero.findAll({ order: [['id', 'DESC']], include: Like });
    const html = res.renderComponent(HeroesListPage, { title: ' Heroes page', heroes });
    res.send(html);
  } catch ({ message }) {
    res.json({ type: 'heroes list page', message });
  }
});

router.get('/update-form/:heroId', async (req, res) => {
  try {
    const { heroId } = req.params;
    const hero = await Hero.findOne({ where: { id: heroId } });
    const html = res.renderComponent(FormUpdatePage, { title: 'update page', hero });
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/:heroId', async (req, res) => {
  try {
    const { heroId } = req.params;
    const hero = await Hero.findOne({ where: { id: heroId } });
    const html = res.renderComponent(HeroPage, { title: ' Heroes page', hero });
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;

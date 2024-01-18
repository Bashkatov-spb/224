const router = require('express').Router();
const HeroItem = require('../../components/HeroItem');
const { Hero, Like } = require('../../db/models');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post('/', upload.single('img'), async (req, res) => {
  try {
    const { name, description, film } = req.body;

    const newFileUrl = `/img/${req.file.originalname}`;

    const hero = await Hero.create({
      name,
      description,
      film,
      img: newFileUrl,
      user_id: res.locals.user.id,
    });
    const currentHero = await Hero.findOne({ where: { id: hero.id }, include: Like });
    const html = res.renderComponent(HeroItem, { hero: currentHero }, { doctype: false });
    res.json({
      message: 'success',
      html,
    });
  } catch ({ message }) {
    res.json({ type: 'heroes router', message });
  }
});

router.delete('/:heroId', async (req, res) => {
  try {
    const { heroId } = req.params;
    const result = await Hero.destroy({ where: { id: heroId, user_id: res.locals.user.id } });
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'Не твоя, вот ты и бесишься' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put('/:heroId', async (req, res) => {
  try {
    const { heroId } = req.params;
    const { name, description, film, img } = req.body;
    console.log(req.body);
    const [result] = await Hero.update(
      { name, description, film, img },
      { where: { id: heroId, user_id: res.locals.user.id } }
    );
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'Не твоя, вот ты и бесишься' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;

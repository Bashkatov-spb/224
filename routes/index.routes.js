const express = require('express');
const router = express.Router();

const mainRouter = require('./views/main.routes');
const heroesRouter = require('./views/heroes.routes');
const usersRouter = require('./views/users.routes');
const authRouter = require('./views/auth.routes');

const apiHeroesRouter = require('./api/api.heroes.routes');
const apiFavoritesRouter = require('./api/api.favorites.routes');
const apiAuthRouter = require('./api/api.auth.routes');

router.use('/', mainRouter);
router.use('/heroes', heroesRouter);
router.use('/users', usersRouter);
router.use('/auth', authRouter);

router.use('/api/heroes', apiHeroesRouter);
router.use('/api/favorites', apiFavoritesRouter);
router.use('/api/auth', apiAuthRouter);

module.exports = router;

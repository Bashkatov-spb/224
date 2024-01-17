FROM node

WORKDIR /application

COPY package*.json ./

ENV DATABASE_URL=postgres://heroes_53fb_user:ev1dxkhYcVoElGU2Jy1I726lSpN7LVxv@dpg-cmk0j4vqd2ns73bn3rc0-a.frankfurt-postgres.render.com/heroes_53fb

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
FROM node

WORKDIR /application

ENV DATABASE_URL=postgres://heroes_53fb_user:ev1dxkhYcVoElGU2Jy1I726lSpN7LVxv@dpg-cmk0j4vqd2ns73bn3rc0-a.frankfurt-postgres.render.com/heroes_53fb
ENV NODE_ENV=production
ENV PORT=3000

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
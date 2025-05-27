import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import AdminJS from 'adminjs';
import { buildAuthenticatedRouter } from '@adminjs/express';
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import connectSessionSequelize from 'connect-session-sequelize';

import db from './db/models/index.js';
import provider from './admin/auth-provider.js';
import options from './admin/options.js';
import initializeDb from './db/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SequelizeStore = connectSessionSequelize(session.Store);
const port = process.env.PORT || 3000;

const start = async () => {
  const app = express();
  app.enable('trust proxy');
  app.use(cors({ credentials: true, origin: true }));
  app.use(express.static(join(__dirname, './public')));
  await initializeDb();
  const admin = new AdminJS(options);

  if (process.env.NODE_ENV === 'production') {
    await admin.initialize();
  } else {
    admin.watch();
  }

  const sessionStore = new SequelizeStore({
    db: db.sequelize,
    tableName: 'sessions',
  });

  sessionStore.sync();

  const router = buildAuthenticatedRouter(
    admin,
    {
      cookiePassword: process.env.COOKIE_SECRET,
      cookieName: 'adminjs',
      provider,
    },
    null,
    {
      store: sessionStore,
      secret: process.env.COOKIE_SECRET,
      saveUninitialized: true,
      resave: true,
      cookie: {
        httpOnly: process.env.NODE_ENV === 'production',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 4,
      },
      name: 'adminjs',
    },
  );

  app.use(admin.options.rootPath, router);

  app.listen(port, () => {
    console.log(`AdminJS available at http://localhost:${port}${admin.options.rootPath}`);
  });
};

start();

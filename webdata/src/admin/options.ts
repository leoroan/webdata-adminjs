import { AdminJSOptions, locales as AdminJSLocales } from 'adminjs';

// import db from '../db/models/index.js';

import componentLoader from './component-loader.js';
import empresaResource from './resources/empresa.res.js';

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  dashboard: {
    component: 'Dashboard',
  },
  branding: {
    logo: 'Pvcialogo.webp',
    favicon: 'buscar.png',
    companyName: 'MinTRP-DEVS c.o.',
    withMadeWithLove: false,
  },
  locale: {
    language: 'es',
    availableLanguages: Object.keys(AdminJSLocales),
  },
  resources: [
    empresaResource,
    // databases: [db.sequelize],
  ],
};

export default options;

import { AdminJSOptions } from 'adminjs';

import db from '../db/models/index.js';

import componentLoader from './component-loader.js';

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  branding: {
    logo: './Pvcialogo.webp',
    favicon: './buscar.png',
    companyName: 'MinTRP-DEVS c.o.',
    withMadeWithLove: false,
  },
  resources: [
    {
      resource: db.empresas,
      options: {
        navigation: { name: 'Empresas', icon: 'Home' },
      },
    },
    {
      resource: db.estados,
      options: {
        navigation: { name: 'Empresas', icon: 'Home' },
      },
    },
    // databases: [db.sequelize],
  ],
};

export default options;

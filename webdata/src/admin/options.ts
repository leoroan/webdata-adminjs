import { AdminJSOptions, locales as AdminJSLocales } from 'adminjs';

import db from '../db/models/index.js';

import componentLoader from './component-loader.js';

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
    {
      resource: db.empresas,
      options: {
        actions: {
          // showInDrawer: true,
        },
        sort: {
          sortBy: 'updatedAt',
          direction: 'desc',
        },
        properties: {
          descripcion: {
            isVisible: {
              edit: true,
              show: true,
              list: true,
              filter: true,
            },
          },
        },
        navigation: { name: 'Ministerio', icon: 'Codesandbox' },
      },
    },
    {
      resource: db.estados,
      options: {
        navigation: { name: 'Ministerio', icon: 'Codesandbox' },
      },
    },
    // databases: [db.sequelize],
  ],
};

export default options;

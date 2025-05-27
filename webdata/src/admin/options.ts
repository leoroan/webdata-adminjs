import { AdminJSOptions, locales as AdminJSLocales } from 'adminjs';

// import db from '../db/models/index.js';

import componentLoader from './component-loader.js';
import empresaResource from './resources/empresa.res.js';
import solicitudResource from './resources/solicitudes.res.js';
import estadosResource from './resources/estados.res.js';
import tipoSolicitudResource from './resources/tipoSolicitud.res.js';
import usuarioResource from './resources/usuario.res.js';
import rolesResource from './resources/roles.res.js';

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
    solicitudResource,
    estadosResource,
    tipoSolicitudResource,
    usuarioResource,
    rolesResource,
    // databases: [db.sequelize],
  ],
};

export default options;

import { AdminJSOptions } from 'adminjs';

import db from '../db/models/index.js';

import componentLoader from './component-loader.js';

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: [],
  databases: [db.sequelize],
};

export default options;

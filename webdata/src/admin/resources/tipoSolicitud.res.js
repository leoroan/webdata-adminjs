import db from '../../db/models/index.js';

const tipoSolicitudResource = {
  resource: db.tipossolicitud,
  options: {
    // navigation: { name: 'Ministerio', icon: 'Codesandbox' },
    navigation: false,
    actions: false,
    properties: false,
    sort: {
      sortBy: 'createdAt',
      direction: 'desc',
    },
  },
};

export default tipoSolicitudResource;

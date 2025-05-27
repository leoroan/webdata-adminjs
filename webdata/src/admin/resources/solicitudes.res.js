import db from '../../db/models/index.js';

const solicitudResource = {
  resource: db.solicitudes,
  options: {
    actions: {
      // showInDrawer: true,
    },
    sort: {
      sortBy: 'createdAt',
      direction: 'desc',
    },
    // properties: {
    //   descripcion: {
    //     isVisible: {
    //       edit: true,
    //       show: true,
    //       list: true,
    //       filter: true,
    //     },
    //   },
    // },
    // donde se va a "anidar" este recurso en el admin
    navigation: { name: 'Ministerio', icon: 'Codesandbox' },
  },
};

export default solicitudResource;

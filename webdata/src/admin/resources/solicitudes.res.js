import db from '../../db/models/index.js';

const solicitudResource = {
  resource: db.solicitudes,
  options: {
    actions: {
      solicitudesPorEstado: {
        actionType: 'resource',
        icon: 'View',
        isVisible: false,
        handler: async (req, res, context) => {
          const [results] = await db.sequelize.query(`
           SELECT e.nombre AS estado, COUNT(s.id) AS total
           FROM solicitudes s
           JOIN estados e ON s.estadoId = e.id
           GROUP BY e.id, e.nombre
         `);

          const output = results.map((r) => ({
            estado: r.estado,
            total: Number(r.total),
          }));
          res.json({ records: output });
        },
      },
    },
    sort: {
      sortBy: 'createdAt',
      direction: 'desc',
    },
    navigation: { name: 'Ministerio', icon: 'Codesandbox' },
  },
};

export default solicitudResource;

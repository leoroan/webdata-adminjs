import React from 'react';
import { Box, Title, Text } from '@adminjs/design-system';

import CardBox from './CardBox.jsx';
import CardBoxPorEstado from './CardBoxPorEstado.jsx';

function Dashboard() {
  // Datos mock
  const stats = [
    { label: 'Usuarios activos', value: 152 },
    { label: 'Pedidos pendientes', value: 34 },
    { label: 'Nuevos mensajes', value: 12 },
  ];

  const recentActivities = [
    { user: 'Juan P.', action: 'Creó un nuevo producto', date: '26/05/2025' },
    { user: 'Ana L.', action: 'Editó perfil', date: '25/05/2025' },
    { user: 'Carlos M.', action: 'Eliminó pedido #234', date: '24/05/2025' },
  ];

  return (
    <Box variant="grey" padding="xl" height="100%" border="1px solid rgb(152, 154, 156)">
      {/* Sección superior: estadísticas totalizadoras */}
      {/* <Box
        bg="white"
        borderRadius="xl"
        boxShadow="lg"
        padding="2xl"
        mb="xl"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        gap="xl"
        height="auto"
      >
        <CardBox title="Solicitudes" endpoint="/admin/api/resources/solicitudes/actions/list" />
        <CardBoxPorEstado />
      </Box> */}

      <Box
        bg="white"
        borderRadius="xl"
        boxShadow="card"
        padding="xl"
        mb="xl"
      >
        {/* Título general */}
        <Title mb="lg" fontSize="xl">
          Solicitudes
        </Title>

        {/* Total y breakdown en fila */}
        <Box display="flex" flexWrap="wrap" gap="xl">
          <CardBox title="Total" endpoint="/admin/api/resources/solicitudes/actions/list" />
          <CardBoxPorEstado />
        </Box>
      </Box>

      {/* Sección inferior: lista de actividades recientes (mock) */}
      <Box
        bg="white"
        borderRadius="lg"
        boxShadow="card"
        padding="xl"
        height="300px"
        overflowY="auto"
      >
        <Title mb="lg" fontSize="xl">
          Actividades recientes
        </Title>
        {recentActivities.map(({ user, action, date }, i) => (
          <Box
            key={i}
            borderBottom={i !== recentActivities.length - 1 ? '1px solid #ddd' : undefined}
            paddingY="md"
          >
            <Text fontWeight="bold">{user}</Text>
            <Text color="grey60">{action}</Text>
            <Text fontSize="sm" color="grey40">
              {date}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Dashboard;

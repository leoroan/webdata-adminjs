// import React, { useEffect, useState } from 'react';
// import { H2, Text, Box } from '@adminjs/design-system';
// import '@adminjs/design-system/styles/index.css';

// function Dashboard() {
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     fetch('/admin/api/resources/empresas/actions/list')
//       .then((res) => res.json())
//       .then((data) => setTotal(data.records.length));
//   }, []);

//   return (
//     <Box variant="grey">
//       <H2>Dashboard</H2>
//       <Text>
//         Total de empresas:
//         {total}
//       </Text>
//     </Box>
//   );
// }

// export default Dashboard;

// import React from 'react';
// import { Box, H2, Text } from '@adminjs/design-system';

// function Dashboard() {
//   return (
//     <Box variant="grey" p="xl">
//       <H2>Dashboard con estilos</H2>
//       <Text>Si ves esto con padding, colores y tipografía bonita, está todo OK.</Text>
//     </Box>
//   );
// }

// export default Dashboard;

import React from 'react';
import {
  Box,
  H1,
  Text,
  Illustration,
  Button,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableCaption,
  Label,
} from '@adminjs/design-system';

function Dashboard() {
  return (
    <Box variant="grey" padding="xxl">
      <Box flex justifyContent="space-between" alignItems="center" mb="xl">
        <Box>
          <H1>Bienvenido al panel</H1>
          <Text color="grey60">Tu centro de administración personalizado</Text>
        </Box>
        <Illustration variant="Rocket" width={240} />
      </Box>

      <Box bg="white" boxShadow="card" borderRadius="xl" p="xl" mb="xl">
        <Box flex justifyContent="space-between" mb="lg">
          <Box>
            <Text fontSize="xl" fontWeight="bold">Estadísticas rápidas</Text>
            <Text color="grey60">Datos actualizados al instante</Text>
          </Box>
          <Button variant="primary">Actualizar</Button>
        </Box>

        <Box>
          <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="xl">
            <Box bg="grey20" p="lg" borderRadius="xl" textAlign="center">
              <Text fontSize="lg" fontWeight="bold">152</Text>
              <Text color="grey60">Usuarios activos</Text>
            </Box>
            <Box bg="grey20" p="lg" borderRadius="xl" textAlign="center">
              <Text fontSize="lg" fontWeight="bold">34</Text>
              <Text color="grey60">Pedidos pendientes</Text>
            </Box>
            <Box bg="grey20" p="lg" borderRadius="xl" textAlign="center">
              <Text fontSize="lg" fontWeight="bold">12</Text>
              <Text color="grey60">Nuevos mensajes</Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box bg="white" boxShadow="card" borderRadius="xl" p="xl">
        <Text fontSize="xl" fontWeight="bold" mb="md">Actividades recientes</Text>
        <Table>
          <TableCaption>Últimas acciones del sistema</TableCaption>
          <TableBody>
            <TableRow>
              <TableCell><Label>Usuario</Label></TableCell>
              <TableCell><Label>Acción</Label></TableCell>
              <TableCell><Label>Fecha</Label></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Juan P.</TableCell>
              <TableCell>Creó un nuevo producto</TableCell>
              <TableCell>26/05/2025</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ana L.</TableCell>
              <TableCell>Editó perfil</TableCell>
              <TableCell>25/05/2025</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Carlos M.</TableCell>
              <TableCell>Eliminó pedido #234</TableCell>
              <TableCell>24/05/2025</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}

export default Dashboard;

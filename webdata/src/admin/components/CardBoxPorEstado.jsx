import React, { useEffect, useState } from 'react';
import {
  Box, Title, Text, H3,
} from '@adminjs/design-system';

const estadoColors = {
  CREADO: 'blue100',
  INICIADO: 'green100',
  'EN TRAMITE': 'yellow100',
  FINALIZADO: 'grey80',
  BLOQUEADO: 'red100',
};

export default function CardBoxPorEstado() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/admin/api/resources/solicitudes/actions/solicitudesPorEstado')
      .then((res) => res.json())
      .then((res) => setData(res.records))
      .catch(console.error);
  }, []);

  return (
    <Box
      variant="card"
      bg="white"
      borderRadius="xl"
      boxShadow="lg"
      padding="xl"
      flex
      flexWrap="wrap"
      justifyContent="space-between"
      gap="lg"
    >
      {data.map(({ estado, total }) => (
        <Box
          key={estado}
          width="160px"
          bg={estadoColors[estado] || 'grey20'}
          borderRadius="lg"
          padding="lg"
          textAlign="center"
        >
          <Title>{total}</Title>
          <Text fontWeight="bold" fontSize="sm">{estado}</Text>
        </Box>
      ))}
    </Box>
  );
}

// CardBox.jsx
import React, { useEffect, useState } from 'react';
import { Box, Title, Text } from '@adminjs/design-system';

function CardBox({ title, endpoint }) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setValue(data.records?.length ?? 0);
      });
  }, [endpoint]);

  return (
    <Box
      variant="card"
      bg="grey"
      borderRadius="xl"
      boxShadow="card"
      padding="xl"
      textAlign="center"
      flex="1"
    >
      <Title>{value !== null ? value : '...'}</Title>
      <Text color="grey80">{title}</Text>
    </Box>
  );
}

export default CardBox;

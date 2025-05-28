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
      bg="white"
      boxShadow="card"
      borderRadius="xl"
      padding="xl"
      marginTop="xl"
      mb="xl"
      flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="auto"
    >
      <Title>{value !== null ? value : '...'}</Title>
      <Text color="grey60">{title}</Text>
    </Box>
  );
}

export default CardBox;

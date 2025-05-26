import React, { useEffect, useState } from 'react';
import { H2, Text, Box } from '@adminjs/design-system';

function Dashboard() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch('/admin/api/resources/empresas/actions/list')
      .then((res) => res.json())
      .then((data) => setTotal(data.records.length));
  }, []);

  return (
    <Box variant="grey">
      <H2>Dashboard</H2>
      <Text>
        Total de empresas:
        {total}
      </Text>
    </Box>
  );
}

export default Dashboard;

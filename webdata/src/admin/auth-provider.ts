import { DefaultAuthProvider } from 'adminjs';

import db from '../db/models/index.js';

import componentLoader from './component-loader.js';

const provider = new DefaultAuthProvider({
  componentLoader,
  authenticate: async ({ email, password }) => {
    const user = await db.usuarios.findOne({ where: { email } });

    if (!user) return null;

    const bcrypt = await import('bcryptjs');
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) return null;

    return {
      email: user.email,
      username: user.username,
      // role: user.role, // si querés usar roles más adelante
    };
  },
});

export default provider;

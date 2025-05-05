import { exec } from 'child_process';
import process from 'process';

const dbName = process.env.DATABASE_NAME;
const dbUser = process.env.DATABASE_USER;
const dbPass = process.env.DATABASE_PASSWORD;
const dbHost = process.env.DATABASE_HOST;
const dbPort = process.env.DATABASE_PORT;
const dbDialect = process.env.DATABASE_DIALECT;

const command = `npx sequelize-auto -d ${dbName} -u ${dbUser} -p ${dbPort} -x ${dbPass} -h ${dbHost} -e ${dbDialect} -o "./src/db/models" -l esm --useDefine`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.log(`Error ejecutando sequelize-auto: ${error.message}`);
    process.exit(1);
  }
  if (stderr) console.log(`stderr: ${stderr}`);
  console.log('Modelos actualizados correctamente.');
});

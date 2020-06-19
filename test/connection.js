import '../src/utils/dotenv';

import Connection from '../src/database/Connection';
import databaseConfig from '../src/clientes/fasb/config/database';

async function connect() {
  const db = new Connection(databaseConfig);
  const result = await db.testConnection();

  console.log(result);
}

connect();

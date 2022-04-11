import { createConnection, getConnectionOptions } from 'typeorm';

export default getConnectionOptions().then(async () => {
  const defaultOption = await getConnectionOptions();

  createConnection(
    Object.assign(defaultOption, {
      host: 'database'
    })
  );
});
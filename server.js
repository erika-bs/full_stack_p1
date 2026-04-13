const app              = require('./src/app');
const pool             = require('./src/config/mysql');
const { createTable }  = require('./src/models/artista');
const { connectMongo } = require('./src/config/mongodb');

const MAX_RETRIES = 20;
const RETRY_DELAY = 5000;

const connectWithRetry = async (fn, name, retries = MAX_RETRIES) => {
  for (let i = 1; i <= retries; i++) {
    try {
      await fn();
      console.log(`${name} conectado com sucesso!`);
      return;
    } catch (err) {
      console.log(`${name} tentativa ${i}/${retries} falhou. Aguardando ${RETRY_DELAY/1000}s...`);
      if (i === retries) throw err;
      await new Promise(res => setTimeout(res, RETRY_DELAY));
    }
  }
};

const start = async () => {
  await connectWithRetry(() => pool.query('SELECT 1'), 'MySQL');
  await createTable();

  await connectWithRetry(connectMongo, 'MongoDB');

  app.listen(3000, () => console.log('API rodando na porta 3000'));
};

start();
import pkg from 'pg';
const { Client } = pkg;

export function createConnection() {
  const client = new Client({
    user: 'mypostgres',
    host: 'host.docker.internal',
    database: '',
    password: '',
    port: 5432,
  })
  client.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
  return client;
}
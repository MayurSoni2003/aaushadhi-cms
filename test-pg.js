const { Client } = require("pg");

const client = new Client({
  host: "127.0.0.1",
  port: 5432,
  database: "aaushadhi_cms",
  user: "aaushadhi",
  password: "aaushadhi123",
});

client.connect()
  .then(() => {
    console.log("CONNECTED");
    return client.end();
  })
  .catch((err) => {
    console.error(err);
  });
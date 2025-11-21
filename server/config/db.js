
const { Pool } = require("pg");


class Database {
  constructor() {
    if (!Database.instance) {
      this.pool = new Pool({
        user: "postgres",
        host: "localhost",
        database: "focustime",
        password: "",
        port: 5432
      });

      this.init();
      Database.instance = this;
    }
    return Database.instance;
  }

  async init() {
    
    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS sessions (
        id SERIAL PRIMARY KEY,
        duration INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }

  query(text, params) {
    return this.pool.query(text, params);
  }
}

const instance = new Database();
Object.freeze(instance);

module.exports = instance;

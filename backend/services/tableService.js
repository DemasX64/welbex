const { Client } = require('pg')

class TableService {

  async getTable() {
    const client = new Client()
    await client.connect()
    const res = await client.query('SELECT * FROM Data')
    await client.end()
    return res.rows.map((row) => {
      return Object.values(row);
    });
  }
}

module.exports = new TableService()

const res = require("express/lib/response")
const tableService = require("../services/tableService");

class tableController{

  async getTable(req, res, next){
    try {
      const table = await tableService.getTable()
      return res.json(table)
    } catch (e) {
      console.log(e)
    }
  }
}
module.exports = new tableController()
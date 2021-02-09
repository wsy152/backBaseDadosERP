const knex = require("../../database");


module.exports =  {
    async index(req, res) {
        const results = await knex('usuarios')
        return res.json(results)
    }
}
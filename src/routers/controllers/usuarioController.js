const { update } = require("../../database");
const knex = require("../../database");


module.exports =  {
    async index(req, res) {
        const results = await knex('usuarios')
        return res.json(results)
    },
    async create(req, res, next){
        const {usu_name} = req.body;
        await knex('usuarios').insert({
            usu_name
        });
        try {
            const {usu_name} = req.body;
            await knex('usuarios').insert({
                usu_name
            });
            return res.status(201).send();
        } catch (error) {
            next(error);
        }
    },
    async update(req, res, next) {
        try {
            const {usu_name} = req.body;
            const {id_usu} = req.params;
            await knex('usuarios')
                .update({usu_name})
                .where({id_usu})
                return res.send();
            
        } catch (error) {
            next(error);
        }

    },
    async delete(req, res, next) {
        try {            
            const {id_usu} = req.params;
            await knex('usuarios')
                .where({id_usu})
                .del()                
                return res.send();
            
        } catch (error) {
            next(error);
        }

    }
}
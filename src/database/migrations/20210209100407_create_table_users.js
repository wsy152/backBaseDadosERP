
exports.up = function(knex) {

    return knex.schema.createTable('usuarios',function(table){
        table.increments('id_usu')
        table.text('usu_name')
        table.text('usu_password')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuarios')  
};

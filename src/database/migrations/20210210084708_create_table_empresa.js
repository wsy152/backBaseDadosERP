
exports.up = function(knex) {

    return knex.schema.createTable('empresa',function(table){
        table.increments('id_emp')
        table.text('emp_razao',150).unique()
        table.text('emp_fantasia',150)
        table.text('emp_cnpj',18).unique()        
        table.timestamps(true,true)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('rempresa')  
};

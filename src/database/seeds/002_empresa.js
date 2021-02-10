
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('empresa').del()
    .then(function () {
      // Inserts seed entries
      return knex('empresa').insert([
        { emp_razao: 'Edvaldo e Felipe S/A',emp_fantasia: 'Familia Software',emp_cnpj: '01.545.828/0001-00'}       
      ]);
    });
};

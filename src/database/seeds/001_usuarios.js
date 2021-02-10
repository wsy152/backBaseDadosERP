
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('usuarios').del()
    .then(function () {
      // Inserts seed entries
      return knex('usuarios').insert([
        { usu_name: 'Edvaldo Fernandes Santana'},
      ]);
    });
};

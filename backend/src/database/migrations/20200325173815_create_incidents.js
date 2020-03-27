exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        table.increments();  //no campo que analogo ao id da primeira coluna, quero agora que seja somente algo numero. Nao precisa ser um id criado por nós para que ninguem descubra
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
    
        table.string('ong_id').notNullable(); //coluna para armazenar qual ONG criou esse incidente
        
        table.foreign('ong_id').references('id').inTable('ongs'); //criando chave estrangeira
    });  
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};

const connection = require('../database/connection');

// Vai retornar os casos específicos de uma única ONG
module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;    //acessando os dados da ONG que está logada
    
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)   // Buscar os incidentes onde ong_id=ong_id, ou seja buscando todos os incidentes que essa ong criou
            .select('*');

        return response.json(incidents);
    }
}
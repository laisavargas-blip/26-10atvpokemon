import { pool } from "../database/knex.js";

class PokemonService {
    async getAll() {
        const res = await pool.query("SELECT * FROM pokemon");
        return res.rows;
    }
    async getById(id) {
        const res = await pool.query(
            "SELECT * FROM pokemon WHERE id = $1",
            [id]
        );
        return res.rows[0];
    }
    async create({ nome, nivel, tipo, treinador_id }) {
        const res = await pool.query(
            "INSERT INTO pokemon (nome, nivel, tipo, treinador_id) VALUES ($1, $2, $3, $4) RETURNING *",
            [nome, nivel, tipo, treinador_id]
        );
        return res.rows[0];
    }
    async delete(id) {
        const res = await pool.query(
            "DELETE FROM pokemon WHERE id = $1 RETURNING *",
            [id]
        );
        return res.rows[0];
    }
    async update(id, { nome, nivel, tipo, treinador_id }) {
        const res = await pool.query(
            "UPDATE pokemon SET nome = $1, nivel = $2, tipo = $3, treinador_id = $4 WHERE id = $5 RETURNING *",
            [nome, nivel, tipo, treinador_id, id]
        );
        return res.rows[0];
    }
    async updatePatch(id, campos) {
        const keys = Object.keys(campos);

        if (keys.length === 0) {
            throw new Error("Informe um campo para atualizar");
        }
        const queryDinamica = keys
            .map((key, index) => `${key} = $${index + 1}`)
            .join(", ");

        const valores = Object.values(campos);
        valores.push(id);

        const query = `UPDATE pokemon SET ${queryDinamica} WHERE id = $${valores.length} RETURNING *`;

        const res = await pool.query(query, valores);
        return res.rows[0];
    }
}

export const pokemonService = new PokemonService();

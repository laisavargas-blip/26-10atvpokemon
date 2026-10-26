import { knex } from "../database/knex";



class getAll = async () => {
    const res = await knex.select('*').from('pokemons');
    return res.rows;
};  
async create(pokemon) {
    const res = await knex('pokemons').insert(pokemon);
    return res.rows[0];
}


router.put("/:id", async (req, res) => {
    const pokemon = await pokemonService.update(req.params.id, req.body);
    return res.json(pokemon);
});

router.patch("/:id", async (req, res) => {
    const pokemon = await pokemonService.update(req.params.id, req.body);
    return res.json(pokemon);
});v

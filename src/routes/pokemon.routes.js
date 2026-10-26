const express = require('express');
const pokemonRoutes = express.Router();
const pokemonService = require('.../pokemon.service.js')

pokemonRoutes.get("/", async(req,res) =>{
    const pokemon =await pokemonService.getAll();
    return res.json(pokemon);
});

pokemonRoutes.post("/", async(req, res) => {
    const pokemons =await pokemonService.create(req.body);
    return res.status(201).json(pokemons);
});
export default pokemonRoutes;
import { Router } from "express";
import pokemonService from "../services/pokemon.service.js";

class PokemonController {
 async getAll(req, res) => {
    const pokemon = await pokemonService.getAll();
    return res.json(pokemon);
});
}
export const pokemonController = new PokemonController

pokemonRoutes.getById("/:id", async (req, res) => {
    const pokemon = await pokemonService.getById(req.params.id);
    return res.json(pokemon);
});

pokemonRoutes.post("/", async (req, res) => {
    const pokemon = await pokemonService.create(req.body);
    return res.status(201).json(pokemon);
});

pokemonRoutes.put("/:id", async (req, res) => {
    const pokemon = await pokemonService.update(req.body, req.params.id);
    return res.json(pokemon);
});

pokemonRoutes.delete("/:id", async (req, res) => {
    await pokemonService.delete(req.params.id);
    return res.status(204).send();
});

export const pokemonController = new PokemonController();
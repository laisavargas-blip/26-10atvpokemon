import { knex } from "../database/knex.js";
import {pokemonRoutes} from "../routes/pokemon.routes.js";

class PokemonService{
    async getAll(){
       const pokemons = await knex("pokemon").select("*");
       return pokemons;
    }
    async getById(id){
    const pokemon = await knex("pokemon").where({id}).first();
    return pokemon;
  }
   async create(pokemon){
    const [newPokemon] = await knex("pokemon").insert(pokemon).returning("*");
    return newPokemon;
  }
}  
export const pokemonService = new pokemonService();
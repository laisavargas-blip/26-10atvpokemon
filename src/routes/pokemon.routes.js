import { Router } from "express";
import pokemonService from "../services/pokemon.service.js";
import { pokemonController } from "../controller/pokemon.controller.js";

export const pokemonRoutes = Router();

pokemonRoutes.get("/", pokemonController.get);


pokemonRoutes.getById("/:id",pokemonController.getById); 
   

pokemonRoutes.post("/", pokemonController.create);
    

pokemonRoutes.put("/:id",pokemonController.put); 
 
pokemonRoutes.delete("/:id",pokemonController.delete);
   
export default pokemonRoutes;

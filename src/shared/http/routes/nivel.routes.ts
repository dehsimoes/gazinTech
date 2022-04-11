import { Router } from 'express';
/* import { CreateNivelController } from '../modules/desenv/useCases/createNivel/CreateNivelController';
import { ListNivelController } from '../modules/desenv/useCases/listNivel/ListNivelController';
import { RemoveNivelController } from '../modules/desenv/useCases/removeNivel/RemoveNivelController'; */


const nivelRoutes = Router();
/* 
const createNivelController = new CreateNivelController();
const listNivelController = new ListNivelController();
const removeNivelController = new RemoveNivelController(); */
/* 
nivelRoutes.post("/", createNivelController.handle);

nivelRoutes.get("/", listNivelController.handle);

nivelRoutes.delete("/", removeNivelController.handle) */

export { nivelRoutes };
import { Router } from 'express';
import { CreateNivelController } from '../../../modules/desenv/useCases/createNivel/CreateNivelController';
import { ListNivelController } from '../../../modules/desenv/useCases/listNivel/ListNivelController';
import { ListOneNivelController } from '../../../modules/desenv/useCases/listOneNivel/ListOneNivelController';
import { RemoveNivelController } from '../../../modules/desenv/useCases/removeNivel/RemoveNivelController';
import { UpdateNivelController } from '../../../modules/desenv/useCases/updateNivel/UpdateNivelController';
import { celebrate, Joi, Segments } from 'celebrate';


const nivelRoutes = Router();

const createController = new CreateNivelController();
const listNivelController = new ListNivelController();
const listOneNivelController = new ListOneNivelController();
const updateNivelController = new UpdateNivelController()
const removeNivelController = new RemoveNivelController();


nivelRoutes.get("/",listNivelController.list);

nivelRoutes.get(
    "/:id",
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    listOneNivelController.listOne
);


nivelRoutes.post(
    "/",
    celebrate({
        [Segments.BODY]: {
        nivel: Joi.string().required(),
        }
    }),
    createController.create 
);


nivelRoutes.put(
    "/:id",
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
        [Segments.BODY]: {
            nivel: Joi.string().required(),
        },
    }),
    updateNivelController.update
);


nivelRoutes.delete(
    "/:id",
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required(),
        },
    }),
    removeNivelController.update
);

export { nivelRoutes };
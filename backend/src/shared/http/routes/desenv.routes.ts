import { Router } from 'express';
import { CreateDesenvController } from '../../../modules/desenv/useCases/createDesenv/CreateDesenvController';
import { ListDesenvController } from '../../../modules/desenv/useCases/listDesenv/ListDesenvController';
import { ListOneDesenvController } from '../../../modules/desenv/useCases/listOneDesenv/ListOneDesenvController';
import { RemoveDesenvController } from '../../../modules/desenv/useCases/removeDesenv/RemoveDesenvController';
import { UpdateDesenvController } from '../../../modules/desenv/useCases/updateDesenv/UpdateDesenvController';
import { celebrate, Joi, Segments } from 'celebrate';
import { ListDesenvByNameController } from '../../../modules/desenv/useCases/listDesenvByName/ListDesenvByNameController';

const desenvRoutes = Router();

const createController = new CreateDesenvController();
const listDesenvController = new ListDesenvController();
const listOneDesenvController = new ListOneDesenvController();
const listDesenvByNameController = new ListDesenvByNameController();
const updateDesenvController = new UpdateDesenvController()
const removeDesenvController = new RemoveDesenvController();



desenvRoutes.get("/",listDesenvController.list);

desenvRoutes.get(
    "/:id",
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    listOneDesenvController.listOne
);

desenvRoutes.get(
    "/?nome",
    celebrate({
        [Segments.PARAMS]: {
            nome: Joi.string().required(),
        },
    }),
    listDesenvByNameController.listOne
);


desenvRoutes.post(
    "/",
    celebrate({
        [Segments.BODY]: {
        nome: Joi.string().required(),
        nivel_id: Joi.string().required(),
        sexo: Joi.string().required(),
        data_nascimento: Joi.date().required(),
        idade: Joi.number().required(),
        hobby: Joi.string().required(),
        }
    }),
    createController.create 
);


desenvRoutes.put(
    "/:id",
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
        [Segments.BODY]: {
            nome: Joi.string().required(),
            sexo: Joi.string().required(),
            nivel_id: Joi.string().required(),
            data_nascimento: Joi.date().required(),
            idade: Joi.number().required(),
            hobby: Joi.string().required(),
        },
    }),
    updateDesenvController.update
);


desenvRoutes.delete(
    "/:id",
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    removeDesenvController.update
);


export { desenvRoutes };
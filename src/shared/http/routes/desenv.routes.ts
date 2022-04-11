import { Router } from 'express';
import { CreateDesenvController } from '../../../modules/desenv/useCases/createDesenv/CreateDesenvController';
import { ListDesenvController } from '../../../modules/desenv/useCases/listDesenv/ListDesenvController';
import { ListOneDesenvController } from '../../../modules/desenv/useCases/listOneDesenv/ListOneDesenvController';
import { RemoveDesenvController } from '../../../modules/desenv/useCases/removeDesenv/RemoveDesenvController';
import { UpdateDesenvController } from '../../../modules/desenv/useCases/updateDesenv/UpdateDesenvController';


const desenvRoutes = Router();

const createController = new CreateDesenvController();
const listDesenvController = new ListDesenvController();
const listOneDesenvController = new ListOneDesenvController();
const updateDesenvController = new UpdateDesenvController()
const removeDesenvController = new RemoveDesenvController();


desenvRoutes.get("/", listDesenvController.list);
desenvRoutes.get("/:id", listOneDesenvController.listOne);
desenvRoutes.post("/", createController.create );
desenvRoutes.put("/:id", updateDesenvController.update);
desenvRoutes.delete("/:id", removeDesenvController.update)


export { desenvRoutes };
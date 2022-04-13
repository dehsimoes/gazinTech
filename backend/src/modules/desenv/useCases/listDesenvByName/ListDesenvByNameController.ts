import { Request, Response} from 'express';
import { ListOneDesenvUseCase } from './ListDesenvByNameUseCase';

class ListDesenvByNameController {
    async listOne(request: Request, response: Response): Promise<Response> {
        const {nome} = request.params;

        const listOneDev = new ListOneDesenvUseCase();

        const desenv = await listOneDev.execute( { nome });

        return response.json(desenv);
    }
}

export { ListDesenvByNameController };
import { Request, Response} from 'express';
import { ListOneDesenvUseCase } from './ListOneDesenvUseCase';

class ListOneDesenvController {
    async listOne(request: Request, response: Response): Promise<Response> {
        const {id} = request.params;

        const listOneDev = new ListOneDesenvUseCase();

        const desenv = await listOneDev.execute( { id });

        return response.json(desenv);
    }
}

export { ListOneDesenvController };
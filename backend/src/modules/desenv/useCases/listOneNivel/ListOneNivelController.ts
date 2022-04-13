import { Request, Response} from 'express';
import { ListOneNivelUseCase } from "./listOneNivelUseCase";



class ListOneNivelController {
    async listOne(request: Request, response: Response): Promise<Response> {
        const {id} = request.params;

        const listOneNivel = new ListOneNivelUseCase();

        const level = await listOneNivel.execute( { id });

        return response.json(level);
    }
}

export { ListOneNivelController };
import { Request, Response} from 'express';
import { ListNivelUseCase } from "./ListNivelUseCase";



class ListNivelController {
    async list(request: Request, response: Response): Promise<Response> {
        const listNivel = new ListNivelUseCase();

        const level = await listNivel.execute();

        return response.json(level);
    }
}

export { ListNivelController };
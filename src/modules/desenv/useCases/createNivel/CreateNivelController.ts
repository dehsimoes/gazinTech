import { Request, Response} from 'express';
import { CreateNivelUseCase } from './CreateNivelUseCase';


class CreateNivelController {
    async create(request: Request, response: Response): Promise<Response> {
        const { nivel } = request.body;

        const creatNivel = new CreateNivelUseCase();

        const level = await creatNivel.execute({
            nivel
        });

        return response.json(level);
    }
}

export { CreateNivelController }
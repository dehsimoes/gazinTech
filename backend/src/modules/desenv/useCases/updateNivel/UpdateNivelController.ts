import { Request, Response} from 'express';
import { UpdateNivelUseCase } from './UpdateNivelUseCase';


class UpdateNivelController {
    async update(request: Request, response: Response): Promise<Response> {
        const {nivel} = request.body;
        const { id } = request.params;

        const updateNivel = new UpdateNivelUseCase();

        const level = await updateNivel.execute({
            id,
            nivel
        });

        return response.json(level);
    }
}

export { UpdateNivelController }
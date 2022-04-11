import { Request, Response} from 'express';
import { RemoveNivelUseCase } from "./RemoveNivelUseCase";




class RemoveNivelController {
    async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteDesenv = new RemoveNivelUseCase();

        const level = await deleteDesenv.execute( { id });

        return response.json(level);
    }
}

export { RemoveNivelController }
import { Request, Response} from 'express';
import { RemoveDesenvUseCase } from './RemoveDesenvUseCase';


class RemoveDesenvController {
    async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteDesenv = new RemoveDesenvUseCase();

        const desenv = await deleteDesenv.execute( { id });

        return response.json(desenv);
    }
}

export { RemoveDesenvController }
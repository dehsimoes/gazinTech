import { Request, Response} from 'express';
import { ListDesenvUseCase } from './ListDesenvUseCase';


class ListDesenvController {
    async list(request: Request, response: Response): Promise<Response> {
        const listDesenv = new ListDesenvUseCase();

        const desenv = await listDesenv.execute();

        return response.json(desenv);
    }
}

export { ListDesenvController };
import { Request, Response} from 'express';
import { UpdateDesenvUseCase } from './UpdateDesenvUseCase';


class UpdateDesenvController {
    async update(request: Request, response: Response): Promise<Response> {
        const {nome, sexo, data_nascimento, idade, hobby} = request.body;
        const { id } = request.params;

        const updateDesenv = new UpdateDesenvUseCase();

        const desenv = await updateDesenv.execute({
            id,
            nome, 
            sexo, 
            data_nascimento, 
            idade, 
            hobby
        });

        return response.json(desenv);
    }
}

export { UpdateDesenvController }
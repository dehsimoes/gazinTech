import { getCustomRepository } from "typeorm";
import AppError from "../../../../shared/errors/AppError";
import { Nivel } from "../../typeorm/entities/Nivel";
import { NivelRepository } from "../../typeorm/repositories/impl/NivelRepository";



interface IRequest {
    id: string;
}

class ListOneNivelUseCase {
   async execute({ id }: IRequest): Promise<Nivel> {
        
    const nivelRepository = getCustomRepository(NivelRepository);
 
    const level = await nivelRepository.findOne(id);

    if(!level){
        throw new AppError('Nível não encontrado', 404);
    }

    return level;
   } 
}

export { ListOneNivelUseCase };
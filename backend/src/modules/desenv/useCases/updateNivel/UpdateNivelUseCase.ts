import { getCustomRepository } from "typeorm";
import AppError from "../../../../shared/errors/AppError";
import { Nivel } from "../../typeorm/entities/Nivel";
import { NivelRepository } from "../../typeorm/repositories/impl/NivelRepository";



interface IRequest {
    id: string;
    nivel: string;
}

class UpdateNivelUseCase {
   async execute({id, nivel}: IRequest): Promise<Nivel> {
        
    const nivelRepository = getCustomRepository(NivelRepository);
 
    const level = await nivelRepository.findOne(id);

    if(!level){
        throw new AppError('Nivel não encontrado');
    }

    level.nivel = nivel;

    await nivelRepository.save(level);

    return level;
   } 
}

export { UpdateNivelUseCase };
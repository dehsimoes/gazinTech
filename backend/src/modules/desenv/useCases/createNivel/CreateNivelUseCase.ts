import { getCustomRepository } from "typeorm";
import AppError from "../../../../shared/errors/AppError";
import { Nivel } from "../../typeorm/entities/Nivel";
import { NivelRepository } from "../../typeorm/repositories/impl/NivelRepository";


interface IRequest {
    nivel: string;
}

class CreateNivelUseCase {
   async execute({ nivel }: IRequest): Promise<Nivel> {
        
    const nivelRepository = getCustomRepository(NivelRepository);

    const nivelExists = await nivelRepository.findByNivel(nivel);

    if(nivelExists) {
        throw new AppError('Nível já existe');
    }
    const level = nivelRepository.create({
        nivel,
    });

    await nivelRepository.save(level);

    return level;
   } 
}

export { CreateNivelUseCase };
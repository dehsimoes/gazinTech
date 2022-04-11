import { getCustomRepository } from "typeorm";
import AppError from "../../../../shared/errors/AppError";
import { Desenv } from "../../typeorm/entities/Desenv";
import { DesenvRepository } from "../../typeorm/repositories/impl/DesenvRepository";

interface IRequest {
    id: string;
}

class ListOneDesenvUseCase {
   async execute({ id }: IRequest): Promise<Desenv> {
        
    const desenvRepository = getCustomRepository(DesenvRepository);
 
    const desenv = await desenvRepository.findOne(id);

    if(!desenv){
        throw new AppError('Desenvolvedor não encontrado');
    }

    return desenv;
   } 
}

export { ListOneDesenvUseCase };
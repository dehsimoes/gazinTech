import { getCustomRepository } from "typeorm";
import AppError from "../../../../shared/errors/AppError";
import { Desenv } from "../../typeorm/entities/Desenv";
import { DesenvRepository } from "../../typeorm/repositories/impl/DesenvRepository";

interface IRequest {
    nome: string;
}

class ListOneDesenvUseCase {
   async execute({ nome }: IRequest): Promise<Desenv> {
        
    const desenvRepository = getCustomRepository(DesenvRepository);
 
    const desenv = await desenvRepository.findByName(nome);

    if(!desenv){
        throw new AppError('Desenvolvedor não encontrado', 404);
    }

    return desenv;
   } 
}

export { ListOneDesenvUseCase };
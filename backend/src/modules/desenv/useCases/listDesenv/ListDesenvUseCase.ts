import { getCustomRepository } from "typeorm";
import { Desenv } from "../../typeorm/entities/Desenv";
import { DesenvRepository } from "../../typeorm/repositories/impl/DesenvRepository";

class ListDesenvUseCase {
   async execute(): Promise<Desenv[]> {
        
    const desenvRepository = getCustomRepository(DesenvRepository);
 
    const desenv = await desenvRepository.find();

    return desenv;
   } 
}

export { ListDesenvUseCase };
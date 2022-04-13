import { getCustomRepository } from "typeorm";
import { Nivel } from "../../typeorm/entities/Nivel";
import { NivelRepository } from "../../typeorm/repositories/impl/NivelRepository";


class ListNivelUseCase {
    async execute(): Promise<Nivel[]> {
         
     const nivelRepository = getCustomRepository(NivelRepository);
  
     const level = await nivelRepository.find();
 
     return level;
    } 
 }
 
 export { ListNivelUseCase };
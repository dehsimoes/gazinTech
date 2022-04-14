import { getCustomRepository } from "typeorm";
import { Nivel } from "../../typeorm/entities/Nivel";
import { NivelRepository } from "../../typeorm/repositories/impl/NivelRepository";

/* Paginação 
interface IPaginateNivel {
   from: number;
   to: number;
   per_page: number;
   total: number;
   current_page: number;
   prev_page: number | null;
   next_page: number | null;
   data: Nivel[];
}

class ListNivelUseCase {
   async execute(): Promise<IPaginateNivel> {
        
    const nivelRepository = getCustomRepository(NivelRepository);
 
    const nivel = await nivelRepository.createQueryBuilder().paginate();

    return nivel as IPaginateNivel;
   }
   
} */

class ListNivelUseCase {
    async execute(): Promise<Nivel[]> {
         
     const nivelRepository = getCustomRepository(NivelRepository);
  
     const level = await nivelRepository.find();
 
     return level;
    } 
 }
 
 export { ListNivelUseCase };
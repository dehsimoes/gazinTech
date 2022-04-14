import { getCustomRepository } from "typeorm";
import { Desenv } from "../../typeorm/entities/Desenv";
import { DesenvRepository } from "../../typeorm/repositories/impl/DesenvRepository";

/* Paginação 
interface IPaginateDesenv {
   from: number;
   to: number;
   per_page: number;
   total: number;
   current_page: number;
   prev_page: number | null;
   next_page: number | null;
   data: Desenv[];
}

class ListDesenvUseCase {
   async execute(): Promise<IPaginateDesenv> {
        
    const desenvRepository = getCustomRepository(DesenvRepository);
 
    const desenv = await desenvRepository.createQueryBuilder().paginate();

    return desenv as IPaginateDesenv;
   }
   
}
 */
class ListDesenvUseCase {
async execute(): Promise<Desenv[]> {
        
   const desenvRepository = getCustomRepository(DesenvRepository);

   const desenv = await desenvRepository.find();

   return desenv;
  } 
}

export { ListDesenvUseCase };
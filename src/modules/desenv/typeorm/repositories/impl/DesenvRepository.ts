import { EntityRepository, Repository } from "typeorm";
import { Desenv } from "../../entities/Desenv";


@EntityRepository(Desenv)
export class DesenvRepository extends Repository<Desenv> {
    private repository: Repository<Desenv>;
    
    async findByName(nome: string): Promise<Desenv> {
        const desenv = await this.repository.findOne({ nome })
        return desenv;
    }
    
    
    /* async findByName(nome: string): Promise<Desenv | undefined> {
        const desenv = this.findOne({
            where: {
                nome,
            },
        });

        return desenv;
    } */
}
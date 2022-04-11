import { EntityRepository, Repository } from "typeorm";
import { Desenv } from "../../entities/Desenv";


@EntityRepository(Desenv)
export class DesenvRepository extends Repository<Desenv> {

    async findByName(nome: string): Promise<Desenv | undefined> {
        const desenv = this.findOne({
            where: {
                nome,
            },
        });

        return desenv;
    }
}
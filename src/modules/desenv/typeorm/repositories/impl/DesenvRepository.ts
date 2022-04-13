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

    async findAccNivel(nivel_id: string): Promise<Desenv> {
        const desenv = this.findOne({
            where: {
                nivel_id,
            },
        });
        return desenv;
    }

    async findByNascimento(data_nascimento: Date): Promise<Desenv> {
        const desenv = this.findOne({
            where: {
                data_nascimento,
            },
        });
        return desenv
    }

    async findBySexo(sexo: string): Promise<Desenv> {
        const desenv = this.findOne({
            where: {
                sexo,
            },
        });
        return desenv
    }

}
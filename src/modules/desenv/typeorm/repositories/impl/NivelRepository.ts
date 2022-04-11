import { EntityRepository, Repository } from "typeorm";
import { Nivel } from "../../entities/Nivel";


@EntityRepository(Nivel)
export class NivelRepository extends Repository<Nivel> {

    async findByNivel(nivel: string): Promise<Nivel | undefined> {
        const level = this.findOne({
            where: {
                nivel,
            },
        });

        return level;
    }
}
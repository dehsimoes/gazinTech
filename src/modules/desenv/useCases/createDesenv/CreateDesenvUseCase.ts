import { getCustomRepository } from "typeorm";
import AppError from "../../../../shared/errors/AppError";
import { Desenv } from "../../typeorm/entities/Desenv";
import { DesenvRepository } from "../../typeorm/repositories/impl/DesenvRepository";


interface IRequest {
    nome: string;
    sexo: string;
    nivel_id: string;
    data_nascimento: Date;
    idade: number;
    hobby: string;
}

class CreateDesenvUseCase {
   async execute({nome, nivel_id, sexo, data_nascimento, idade, hobby}: IRequest): Promise<Desenv> {
        
    const desenvRepository = getCustomRepository(DesenvRepository);

    const desenvExists = await desenvRepository.findByName(nome);

    if(desenvExists) {
        throw new AppError('Usuário já existe');
    }
    const desenv = desenvRepository.create({
        nome,
        nivel_id,
        sexo,
        data_nascimento,
        idade,
        hobby
    });

    await desenvRepository.save(desenv);

    return desenv;
   } 
}

export { CreateDesenvUseCase };
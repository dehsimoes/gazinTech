import { getCustomRepository } from "typeorm";
import AppError from "../../../../shared/errors/AppError";
import { Desenv } from "../../typeorm/entities/Desenv";
import { DesenvRepository } from "../../typeorm/repositories/impl/DesenvRepository";

interface IRequest {
    id: string;
    nome: string;
    sexo: string;
    data_nascimento: Date;
    idade: number;
    hobby: string;
}

class UpdateDesenvUseCase {
   async execute({id, nome, sexo, data_nascimento, idade, hobby}: IRequest): Promise<Desenv> {
        
    const desenvRepository = getCustomRepository(DesenvRepository);
 
    const desenv = await desenvRepository.findOne(id);

    if(!desenv){
        throw new AppError('Desenvolvedor não encontrado');
    }

    desenv.nome = nome;
    desenv.sexo = sexo;
    desenv.data_nascimento = data_nascimento;
    desenv.idade = idade;
    desenv.hobby = hobby;

    await desenvRepository.save(desenv);

    return desenv;
   } 
}

export { UpdateDesenvUseCase };
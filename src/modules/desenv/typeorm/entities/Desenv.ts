import { v4 as uuidV4} from 'uuid';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne,PrimaryColumn } from "typeorm";
import { Nivel } from './Nivel';

export enum SelectSexo {
    Masculino = "Masculino",
    Feminino = "Feminino"
} 

@Entity("desenv")
class Desenv {

    @PrimaryColumn()
    id?: String;

    @ManyToOne(type => Nivel, (nivel: Nivel) => nivel.desenvs) 
    @JoinColumn({ name: "nivel_id"})
    desenv_nivel: Nivel;
    
    @Column()
    nivel_id: String;

    @Column()
    nome: String;


    /* @Column({
        type: "enum",
        enum: SelectSexo,
    })
    sexo: SelectSexo;*/

    @Column()
    sexo: String;


    @CreateDateColumn()
    data_nascimento: Date;

    @Column("int")
    idade: Number;

    @Column()
    hobby: String;

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Desenv };
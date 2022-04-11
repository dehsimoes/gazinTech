import { v4 as uuidV4} from 'uuid';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne,PrimaryColumn } from "typeorm";
import { Nivel } from './Nivel';

//export type SelectSexo = "M" | "F";

@Entity("desenv")
class Desenv {

    @PrimaryColumn()
    id?: String;

/*     @ManyToOne(type => Nivel, nivel => nivel.desenv) 
    @JoinColumn({ name: "nivel_id"})
    desenv_nivel: Nivel; */

    @Column()
    nome: String;

/*     @Column()
    nivel_id: String; */

    /* @Column({
        type: "enum",
        enum: ["M", "F"],
        default: "ghost"
    })
    sexo: SelectSexo; */
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
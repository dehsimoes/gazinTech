import { v4 as uuidV4} from 'uuid';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Desenv } from './Desenv';

@Entity("nivel")
class Nivel {
    @PrimaryColumn()
    id?: String;

    @Column()
    nivel: String;

/*     @OneToMany(type => Desenv, (desenv: Desenv) => desenv.desenv_nivel)
    desenv: Desenv[]; */

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}


export { Nivel };
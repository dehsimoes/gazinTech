import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateDesenv1649904254178 implements MigrationInterface {

    private fkNivelId = new TableForeignKey({
        columnNames: ['nivel_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'nivel',
        onDelete: 'SET NULL'
    })

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "desenv",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar"
                    },
                    {
                        name: "nivel_id",
                        type: "uuid"
                    },
                    {
                        name: "sexo",
                        type: "varchar"
                    },
                    {
                        name: "data_nascimento",
                        type: "timestamp"
                    },
                    {
                        name: "idade",
                        type: "integer"
                    },
                    {
                        name: "hobby",
                        type: "varchar"
                    }
                ],
            })
        )

        await queryRunner.createForeignKey('desenv', this.fkNivelId)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("desenv");
    }

}

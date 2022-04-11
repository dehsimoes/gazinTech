import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDesenv1649448254942 implements MigrationInterface {

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
                  /*    {
                        name: "nivel_id",
                        type: "uuid"
                    }, */
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
                   /*  foreignKeys: [
                    {
                        name: "FKNivelDesenv",
                        referencedTableName: "nivel",
                        referencedColumnNames: ["id"],
                        columnNames: ["nivel_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ], */
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("desenv");
    }

}

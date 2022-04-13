import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateNivel1649448262184 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "nivel",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nivel",
                        type: "varchar"
                    },
                ]
                })
            )
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("nivel");
    }

}
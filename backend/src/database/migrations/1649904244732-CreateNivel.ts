import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateNivel1649904244732 implements MigrationInterface {

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

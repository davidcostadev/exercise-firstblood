import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPhoneNumberOnUser1581976641703 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE site_user
        ADD COLUMN phoneNumber varchar(15)  NOT NULL;`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `
    ALTER TABLE site_user 
    DROP COLUMN phoneNumber;`,
      undefined,
    );
  }
}

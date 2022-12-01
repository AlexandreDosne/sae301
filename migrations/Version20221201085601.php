<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221201085601 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE manifestation ADD lieu_id INT NOT NULL');
        $this->addSql('ALTER TABLE manifestation ADD CONSTRAINT FK_6F2B3F7F6AB213CC FOREIGN KEY (lieu_id) REFERENCES lieu (id)');
        $this->addSql('CREATE INDEX IDX_6F2B3F7F6AB213CC ON manifestation (lieu_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE manifestation DROP FOREIGN KEY FK_6F2B3F7F6AB213CC');
        $this->addSql('DROP INDEX IDX_6F2B3F7F6AB213CC ON manifestation');
        $this->addSql('ALTER TABLE manifestation DROP lieu_id');
    }
}

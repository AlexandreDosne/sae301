@echo off

php bin/console make:migration
php bin/console doctrine:migrations:migrate

pause
@echo off

if exist "symfony.exe" (
"symfony.exe" server:start
) else (
start https://github.com/symfony-cli/symfony-cli/releases
)

pause
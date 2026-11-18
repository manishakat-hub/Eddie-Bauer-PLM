@echo off
cd /d "%~dp0"
echo Opening Eddie Bauer FW27 Buying Board...
start "" http://127.0.0.1:4173
node --env-file-if-exists=.env server.mjs
pause

@echo off
REM ============================================================
REM  Lancement du portfolio en local
REM  Demarre un petit serveur web et ouvre le navigateur.
REM ============================================================

setlocal
cd /d "%~dp0"

set PORT=8000

echo ============================================
echo   Portfolio Mansouri - serveur local
echo ============================================
echo.

REM --- 1) Essai avec Python ---
where python >nul 2>&1
if %ERRORLEVEL%==0 (
    echo Demarrage du serveur sur http://localhost:%PORT%
    echo Appuyez sur Ctrl+C pour arreter.
    echo.
    start "" http://localhost:%PORT%/index.html
    python -m http.server %PORT%
    goto :fin
)

REM --- 2) Essai avec Node (npx http-server) ---
where npx >nul 2>&1
if %ERRORLEVEL%==0 (
    echo Demarrage du serveur Node sur http://localhost:%PORT%
    echo Appuyez sur Ctrl+C pour arreter.
    echo.
    start "" http://localhost:%PORT%/index.html
    npx --yes http-server -p %PORT% -c-1
    goto :fin
)

REM --- 3) Aucun serveur dispo : ouverture directe du fichier ---
echo Python et Node introuvables.
echo Ouverture directe du fichier index.html dans le navigateur...
start "" "%~dp0index.html"

:fin
endlocal

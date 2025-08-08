@echo off
setlocal enabledelayedexpansion

set STRAPI_PORT=1337

REM ===== Function: wait_for_port =====
:wait_for_port
echo Waiting for Strapi to launch on PORT %STRAPI_PORT%...
:wait_loop
REM Проверяем порт с помощью PowerShell
powershell -Command "try { $tcp = New-Object Net.Sockets.TcpClient('localhost', %STRAPI_PORT%); $tcp.Close(); exit 0 } catch { exit 1 }"
if errorlevel 1 (
    timeout /t 1 /nobreak >nul
    goto wait_loop
)
echo Strapi started!
goto :eof

REM ===== Launch Strapi =====
echo Launch Strapi in dev mode...
cd server
call yarn
start "Strapi" cmd /c "yarn develop"
set STRAPI_WINDOW=Strapi

REM Wait for Strapi availability
call :wait_for_port

REM ===== Launch Next.js =====
echo Launch Next.js in dev mode...
cd ..\client
call yarn
call yarn dev

REM ===== Cleanup on exit =====
echo Stopping Strapi...
taskkill /FI "WINDOWTITLE eq %STRAPI_WINDOW%" /T /F >nul 2>&1

endlocal

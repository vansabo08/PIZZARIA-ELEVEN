@echo off
rem Duplo clique para ver o site em http://localhost:5190
cd /d "%~dp0"
if not exist node_modules call npm.cmd install
call npm.cmd run dev -- --open

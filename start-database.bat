@echo off
cd /d "%~dp0"
start "Co-hosting Database" /min node server.js
echo Co-hosting database started.

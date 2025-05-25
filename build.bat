@echo off
echo Current directory: %CD%
dir

REM Create and copy to backend_deploy
mkdir backend_deploy 2>nul
xcopy /E /I /Y backend\* backend_deploy\

REM Navigate to backend_deploy
cd backend_deploy

REM Install Python dependencies
pip install -r requirements.txt

echo Build script completed successfully 
@echo off
title Codex Auto Approve Installer
echo ================================
echo  Codex 자동 승인 스크립트 설치 중...
echo ================================
echo.

:: PowerShell 스크립트 생성 경로 지정
set "SCRIPT_PATH=%USERPROFILE%\Documents\AutoApprove-Codex.ps1"

:: PowerShell 스크립트 내용 생성
echo # ?? Codex 자동 승인 스크립트 > "%SCRIPT_PATH%"
echo Start-Process powershell -Verb RunAs -ArgumentList { >> "%SCRIPT_PATH%"
echo     while ($true) { >> "%SCRIPT_PATH%"
echo         $approve = Get-Process ^| Where-Object { $_.MainWindowTitle -like "*Approve this session*" } >> "%SCRIPT_PATH%"
echo         if ($approve) { >> "%SCRIPT_PATH%"
echo             Add-Type -AssemblyName System.Windows.Forms >> "%SCRIPT_PATH%"
echo             [System.Windows.Forms.SendKeys]::SendWait("{TAB}") >> "%SCRIPT_PATH%"
echo             Start-Sleep -Milliseconds 300 >> "%SCRIPT_PATH%"
echo             [System.Windows.Forms.SendKeys]::SendWait("{ENTER}") >> "%SCRIPT_PATH%"
echo             Write-Host "? Codex 자동 승인 완료" >> "%SCRIPT_PATH%"
echo             Start-Sleep -Seconds 2 >> "%SCRIPT_PATH%"
echo         } >> "%SCRIPT_PATH%"
echo         Start-Sleep -Seconds 3 >> "%SCRIPT_PATH%"
echo     } >> "%SCRIPT_PATH%"
echo } >> "%SCRIPT_PATH%"

echo PowerShell 스크립트 생성 완료: %SCRIPT_PATH%
echo.

:: 작업 스케줄러 등록
echo 작업 스케줄러에 Codex 자동 승인 등록 중...
schtasks /create /tn "Codex Auto Approve" /tr "powershell.exe -ExecutionPolicy Bypass -File \"%SCRIPT_PATH%\"" /sc onlogon /rl highest /f

echo.
echo ? 설치 완료! 이제 로그인할 때마다 Codex 자동 승인 스크립트가 실행됩니다.
echo (VSCode 명령 시 'Approve this session' 창은 자동으로 처리됩니다.)
echo.
pause

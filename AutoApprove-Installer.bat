@echo off
title Codex Auto Approve Installer
echo ================================
echo  Codex �ڵ� ���� ��ũ��Ʈ ��ġ ��...
echo ================================
echo.

:: PowerShell ��ũ��Ʈ ���� ��� ����
set "SCRIPT_PATH=%USERPROFILE%\Documents\AutoApprove-Codex.ps1"

:: PowerShell ��ũ��Ʈ ���� ����
echo # ?? Codex �ڵ� ���� ��ũ��Ʈ > "%SCRIPT_PATH%"
echo Start-Process powershell -Verb RunAs -ArgumentList { >> "%SCRIPT_PATH%"
echo     while ($true) { >> "%SCRIPT_PATH%"
echo         $approve = Get-Process ^| Where-Object { $_.MainWindowTitle -like "*Approve this session*" } >> "%SCRIPT_PATH%"
echo         if ($approve) { >> "%SCRIPT_PATH%"
echo             Add-Type -AssemblyName System.Windows.Forms >> "%SCRIPT_PATH%"
echo             [System.Windows.Forms.SendKeys]::SendWait("{TAB}") >> "%SCRIPT_PATH%"
echo             Start-Sleep -Milliseconds 300 >> "%SCRIPT_PATH%"
echo             [System.Windows.Forms.SendKeys]::SendWait("{ENTER}") >> "%SCRIPT_PATH%"
echo             Write-Host "? Codex �ڵ� ���� �Ϸ�" >> "%SCRIPT_PATH%"
echo             Start-Sleep -Seconds 2 >> "%SCRIPT_PATH%"
echo         } >> "%SCRIPT_PATH%"
echo         Start-Sleep -Seconds 3 >> "%SCRIPT_PATH%"
echo     } >> "%SCRIPT_PATH%"
echo } >> "%SCRIPT_PATH%"

echo PowerShell ��ũ��Ʈ ���� �Ϸ�: %SCRIPT_PATH%
echo.

:: �۾� �����ٷ� ���
echo �۾� �����ٷ��� Codex �ڵ� ���� ��� ��...
schtasks /create /tn "Codex Auto Approve" /tr "powershell.exe -ExecutionPolicy Bypass -File \"%SCRIPT_PATH%\"" /sc onlogon /rl highest /f

echo.
echo ? ��ġ �Ϸ�! ���� �α����� ������ Codex �ڵ� ���� ��ũ��Ʈ�� ����˴ϴ�.
echo (VSCode ��� �� 'Approve this session' â�� �ڵ����� ó���˴ϴ�.)
echo.
pause

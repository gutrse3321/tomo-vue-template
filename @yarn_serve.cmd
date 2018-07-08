@echo off
%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit
cd /d "%~dp0"
color 0A

cmd /c yarn config list
echo:
echo ^>cd /d %cd%
cmd /k yarn serve

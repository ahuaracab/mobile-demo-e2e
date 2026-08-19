@echo off
echo ===================================
echo   Mobile E2E - Build, Install, Test
echo ===================================

set JAVA_HOME=C:\Program Files\Java\jdk-17
set ANDROID_HOME=%USERPROFILE%\android-sdk
set PATH=%USERPROFILE%\.maestro\maestro\bin;%ANDROID_HOME%\platform-tools;%JAVA_HOME%\bin;%PATH%

echo.
echo [1/4] Building release APK...
call android\gradlew.bat -p android assembleRelease
if %ERRORLEVEL% neq 0 (
    echo BUILD FAILED
    exit /b 1
)

echo.
echo [2/4] Installing on emulator...
adb install -r android\app\build\outputs\apk\release\app-release.apk
if %ERRORLEVEL% neq 0 (
    echo INSTALL FAILED - Is emulator running?
    exit /b 1
)

echo.
echo [3/4] Running E2E tests...
maestro test .maestro\
if %ERRORLEVEL% neq 0 (
    echo TESTS FAILED
    exit /b 1
)

echo.
echo [4/4] ALL TESTS PASSED!

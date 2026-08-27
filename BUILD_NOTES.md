# Building the Android APK (Capacitor wrapper)

This repo is the SafeGuard web dashboard (React/Vite/TS), wrapped as a native Android app via Capacitor.

## Prerequisites

- Node.js 20+
- JDK 21 (JDK 17 is NOT enough - Capacitor 8's Android Gradle project targets Java 21)
- Android SDK: platform-tools, platforms;android-34 (or newer), build-tools;34.0.0+
- If your npm registry is misconfigured (e.g. pointed at a mirror like registry.npmmirror.com), installs will hang forever with no error. Force the official registry via the included `.npmrc`.

## Steps

1. `npm install`
2. `npm run build` (produces `dist/`)
3. `npx cap add android` (first time only - generates the `android/` native project; not committed to this repo)
4. `npx cap copy android && npx cap sync android`
5. `cd android && ./gradlew assembleDebug` (Windows: `gradlew.bat assembleDebug`)
6. Output: `android/app/build/outputs/apk/debug/app-debug.apk`

## Notes

- App ID: `com.microbeaver.safeguard`, app name: `SafeGuard`
- This is a debug, unsigned-for-release build - fine for sideloading/testing, not for Play Store distribution (needs a release signing config).
- The app currently has no real backend wiring (location tracking, screen time, etc. are static demo UI) - it's a visual/UX prototype, not connected to the production Beaver Guardian Firebase backend.

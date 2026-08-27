# SafeGuard — Web Dashboard

**[⬇️ حمّل الـ APK (آخر نسخة)](https://github.com/tareknahas85-star/beaver-guardian-safeguard-webapp/releases/download/latest/safeguard-webapp.apk)** &nbsp;|&nbsp; **[⬇️ Download latest APK](https://github.com/tareknahas85-star/beaver-guardian-safeguard-webapp/releases/download/latest/safeguard-webapp.apk)**

![Build APK](../../actions/workflows/build.yml/badge.svg)

---

## بالعربي

بروتوتايب لوحة تحكم أبوي ويب، مبني بـ React وVite وTailwind، ومغلّف كتطبيق أندرويد عبر Capacitor. هاي الواجهة ما لها باكند حقيقي للهلق — شوفها كتجربة UI/UX قبل ما نوصلها بالـ backend الحقيقي، منفصلة عن تطبيق [beaver-guardian](https://github.com/tareknahas85-star/beaver-guardian) يلي هو المشروع الشغال فعلياً.

### شو فيها
- شاشة تتبّع الموقع
- حدود وقت الشاشة
- قيود على المحتوى
- تقرير أسبوعي للنشاط

### الحالة
مرحلة مبكرة. هاي واجهة (prototype)، مش مربوطة بأي backend حقيقي لسة. بتستخدم Gemini API لبعض الميزات الذكية بالواجهة. الـ APK يلي فوق بيتبني تلقائياً من الكود الحالي بكل push — بس هو معاينة للواجهة، مش تطبيق شغال بكامل ميزاته.

### التشغيل محلياً
**المتطلبات:** Node.js

1. `npm install`
2. حط `GEMINI_API_KEY` بملف `.env.local` (شوف `.env.example`)
3. شغّل: `npm run dev`

لتغليفه كتطبيق أندرويد يدوياً، شوف [BUILD_NOTES.md](BUILD_NOTES.md).

---

## In English

SafeGuard web dashboard prototype, built with React, Vite and Tailwind, and wrapped as a native Android app via Capacitor. This is a front-end mockup only — no real backend wired up yet. It's kept separate from the [beaver-guardian](https://github.com/tareknahas85-star/beaver-guardian) Android app, which is the actual working project.

### What it shows
- location tracking screen
- screen time limits
- content restrictions
- weekly activity report

### Status
Early stage. This is a UI prototype, not a finished product. No real backend is connected yet. It uses the Gemini API for some smart-summary features in the UI. The APK linked above is auto-built from the current code on every push — it's a UI preview, not a fully working app yet.

### Run locally
**Prerequisites:** Node.js

1. `npm install`
2. Set `GEMINI_API_KEY` in `.env.local` (see `.env.example`)
3. `npm run dev`

To build the Android wrapper manually, see [BUILD_NOTES.md](BUILD_NOTES.md).

### Built with
React, TypeScript, Vite, Tailwind CSS, Capacitor, and the Gemini API.

# SafeGuard — Web Dashboard

## بالعربي

بروتوتايب لوحة تحكم أبوي ويب، مبني بـ React وVite وTailwind، ومغلّف كتطبيق أندرويد عبر Capacitor. هاي الواجهة ما لها باكند حقيقي للهلق — شوفها كتجربة UI/UX قبل ما نوصلها بالـ backend الحقيقي.

### شو فيها
- شاشة تتبّع الموقع
- حدود وقت الشاشة
- قيود على المحتوى
- تقرير أسبوعي للنشاط

### الحالة
مرحلة مبكرة. هاي واجهة (prototype)، مش مربوطة بأي backend حقيقي لسة. بتستخدم Gemini API لبعض الميزات الذكية بالواجهة.

### التشغيل محلياً
**المتطلبات:** Node.js

1. `npm install`
2. حط `GEMINI_API_KEY` بملف `.env.local` (شوف `.env.example`)
3. شغّل: `npm run dev`

لتغليفه كتطبيق أندرويد عبر Capacitor، شوف [BUILD_NOTES.md](BUILD_NOTES.md).

---

## In English

SafeGuard web dashboard prototype, built with React, Vite and Tailwind, and wrapped as a native Android app via Capacitor. This is a front-end mockup only — no real backend wired up yet.

### What it shows
- location tracking screen
- screen time limits
- content restrictions
- weekly activity report

### Status
Early stage. This is a UI prototype, not a finished product. No real backend is connected yet — think of it as a sketch of what a parental control dashboard could look like, kept separate from the [beaver-guardian](https://github.com/tareknahas85-star/beaver-guardian) Android app, which is the actual working project. It uses the Gemini API for some smart-summary features in the UI.

### Run locally
**Prerequisites:** Node.js

1. `npm install`
2. Set `GEMINI_API_KEY` in `.env.local` (see `.env.example`)
3. `npm run dev`

To build the Android wrapper, see [BUILD_NOTES.md](BUILD_NOTES.md).

### Built with
React, TypeScript, Vite, Tailwind CSS, Capacitor, and the Gemini API.

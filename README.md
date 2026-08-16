<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" width="80" alt="Emblem of India" />
  <br/>
  <h1 align="center">MyRight Bharat: The Ultimate Citizen Legal Shield</h1>
  <p align="center">
    <strong>Empowering 1.4 Billion Citizens with AI-Driven Legal Literacy & Protection under BNSS 2024.</strong>
  </p>
</div>

---

## 🏆 The Vision (Why this wins)
In India, legal literacy is often a privilege, not a right. Citizens face intimidation during police encounters due to a lack of awareness of their fundamental rights and the recent transition to the new **Bharatiya Nyaya Sanhita (BNS)**. 

**MyRight** is not just an app; it's a **digital legal shield**. Built as a high-performance, AI-powered Progressive Web App (PWA), it demystifies complex laws, provides real-time situational guidance, and equips citizens with actionable tools—even when they have **zero internet connectivity** in a police station.

---

## 🚀 Core Features (Maximum Impact)

### 1. 🧠 AI Legal Copilot (Powered by Google Gemini)
- **What it does:** A conversational AI advisor fine-tuned to interpret the new BNSS/CrPC laws.
- **Impact:** Citizens can ask complex legal questions in plain language (e.g., *"Can the police search my car without a warrant at night?"*) and receive accurate, jurisdiction-specific advice instantly.
- **Tech:** Securely routed through Vercel Serverless Functions to protect API keys, ensuring enterprise-grade security and low-latency responses.

### 2. 📄 Automated e-FIR & Legal Draft Generator
- **What it does:** The **ComplaintBuilder** guides users through a simple wizard to capture incident details, instantly generating a legally sound, perfectly formatted **PDF draft** (using `jspdf`).
- **Impact:** Eliminates the need for expensive lawyers just to draft a basic complaint or a Zero FIR. The user can print it and submit it directly to the Duty Officer.

### 3. 🛡️ True Offline-First PWA (Zero-Internet Resilience)
- **What it does:** Aggressive caching strategies using Service Workers and Vite PWA Workbox.
- **Impact:** Police stations and rural areas often have terrible cell reception. MyRight caches all critical legal compendiums, static assets, and UI logic. If a citizen is detained and has no internet, the app's core reading and drafting tools **still work flawlessly**.

### 4. 🌙 Stealth AMOLED Dark Mode
- **What it does:** A system-aware, deeply integrated Dark Mode built with Tailwind CSS variables.
- **Impact:** Crucial for safety during late-night traffic stops. It prevents the phone screen from blinding the user or drawing unnecessary attention, while saving battery life during emergencies.

### 5. 📳 Native Haptic Feedback Integration
- **What it does:** Leverages the browser's `navigator.vibrate` API to provide physical feedback.
- **Impact:** Makes the web app feel exactly like a downloaded iOS/Android app. **Light haptics** guide UI navigation, while **Heavy burst haptics** confirm critical actions like pressing the SOS button or generating a legal document.

### 6. 📍 Geolocation & Nearest Police Station Finder
- **What it does:** Integrates with the Overpass API to instantly ping the user's GPS coordinates and list the nearest active police jurisdictions.
- **Impact:** Crucial for filing a Zero FIR or knowing exactly which jurisdiction you are currently standing in during an emergency.

### 7. 🗣️ Seamless Multilingual Accessibility
- **What it does:** Real-time UI translation (English, Hindi, etc.) without page reloads.
- **Impact:** Legal protection shouldn't be limited to English speakers. This ensures the app is accessible to the masses, democratizing legal literacy across India.

### 8. 🚨 1-Tap SOS & Emergency Strip
- **What it does:** A persistent, highly visible SOS button that immediately triggers national helplines (112) and displays a quick-reference guide on how to handle immediate intimidation.

### 9. ⚖️ D.K. Basu Arrest Guidelines & Pocket Pass
- **What it does:** A dedicated module outlining the Supreme Court's mandatory guidelines for police arrests (Right to know grounds, Right to inform a relative, etc.), alongside a printable "Citizen Pocket Pass".

### 10. 🎮 Gamified Legal Literacy (Myth Buster)
- **What it does:** An interactive quiz section that tests users on common legal misconceptions.
- **Impact:** Transforms boring legal reading into an engaging, sticky experience that encourages users to learn their rights proactively.

---

## 🏛️ Detailed System Architecture: How It Works & Helps Citizens

MyRight operates on a hybrid architecture designed specifically for reliability in high-stress, low-connectivity environments.

### 1. The PWA Offline Shell (Frontend)
When a user visits the app, **Vite PWA** and **Workbox** immediately cache the core application shell, including the React bundle, Tailwind CSS styles, and the statically compiled legal databases (like the D.K. Basu guidelines and BNS code).
- **How it helps:** If a citizen is detained in a police station lock-up where network signals are notoriously weak or blocked, the core app—including the Digital Guidebook and the e-FIR drafter—will still load in under 1 second.

### 2. Edge-Routed AI Copilot (Vercel Serverless)
When the user queries the AI (either via text or the Web Speech API mic), the request is sent to our Vercel Serverless API (`/api/chat`).
- **Stateless Execution:** The Vercel edge functions format the prompt, inject the strict constitutional system instructions (e.g., BNSS rules), and proxy the request to the Google Gemini API.
- **How it helps:** It ensures that user data and API keys are completely protected. Because the AI is heavily instructed to cite specific sections (like Article 20(3) or Section 35 BNSS), citizens receive highly authoritative guidance rather than generic AI fluff.

### 3. Client-Side Document Processing (Privacy First)
The **e-FIR & Legal Draft Generator** utilizes `jspdf` to convert the citizen's form inputs directly into a formatted PDF document.
- **Zero-Data Retention:** The processing happens 100% within the browser's memory.
- **How it helps:** Citizens can draft highly sensitive complaints without fearing that their Personally Identifiable Information (PII) is being saved on an external database.

### 4. Overpass Geolocation Layer
The `StationLocator` component uses the HTML5 Geolocation API to fetch the user's coordinates, then queries the public Overpass (OpenStreetMap) API for `amenity=police`.
- **How it helps:** Removes the panic of figuring out jurisdiction. The app instantly plots the 5 nearest active police stations, enabling the citizen to physically navigate there to file a Zero FIR.

---

## 🛠️ Technical Specifications (For the Judges)

- **Frontend:** React 19 + TypeScript + Vite for ultra-fast HMR and type safety.
- **Styling:** Tailwind CSS v4 with custom Glassmorphism (`backdrop-filter`) and fluid Framer Motion (`motion/react`) animations running at 60fps.
- **Backend/API:** Vercel Serverless Functions (`@vercel/node`) handling AI prompts, TTS, and transcriptions securely without exposing secrets.
- **AI Engine:** Google Gemini API (`@google/genai`) for advanced natural language understanding.
- **PWA/Offline:** `vite-plugin-pwa` with custom Workbox runtime caching for Google Fonts and dynamic assets.
- **Document Generation:** Client-side `jspdf` ensuring zero PII (Personally Identifiable Information) is ever sent to a server during complaint drafting.

---

## 🎤 How to Pitch This

1. **The Hook:** *"Have you ever felt a knot in your stomach when stopped by the police, even if you did nothing wrong? That fear stems from a lack of knowledge."*
2. **The Solution:** Introduce MyRight. Emphasize that it's a **PWA** because citizens shouldn't have to wait to download a 50MB app from the App Store during an emergency.
3. **The 'Wow' Moments:** 
   - Show the **Dark Mode** toggle and explain *why* it's there (nighttime safety).
   - Generate a **PDF Complaint** live on stage without internet (turn off Wi-Fi to prove the PWA works).
   - Mention the **Haptic Feedback**—invite judges to tap the SOS button on a mobile device to feel the native experience.
4. **The Impact:** *"We aren't just building an app; we are democratizing justice and enforcing accountability using AI."*


## ?? Local Setup

1. Clone the repository
2. Run `npm install`
3. Add your Gemini API key to a `.env` file: `GEMINI_API_KEY=your_key_here`
4. Run `npm run dev`


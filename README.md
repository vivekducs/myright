# Citizen Legal Rights and Police Procedure Advisor

## Overview

This project is a web application designed to act as an authoritative, calm, and practical Legal Rights and Police Procedure Advisor for Indian citizens. It empowers users with precise and actionable legal knowledge regarding police interactions, traffic enforcement (Motor Vehicles Act 1988), criminal procedures (BNSS 2023 / CrPC), penal laws (BNS 2023 / IPC), cyber forensics, and landmark Supreme Court verdicts.

The application features a modern frontend built with React, Vite, and Tailwind CSS, and a robust backend built with Express and Google Gemini AI integration.

## Features

- **Situation AI Advisor (Single Assessment):** Users can describe a situation, and the AI provides a summary of their legal standing, immediate actionable steps, actions to avoid, precise phrasing to use with officials, legal provisions, and emergency helpline numbers.
- **Multi-turn Chatbot:** An interactive legal advisory chat with role selection and search grounding for up-to-date legal verification.
- **Real-Time Voice Conversations:** A WebSocket-based live voice channel that allows users to speak with the AI counselor in real-time, receiving spoken answers citing constitutional protections and statutory sections.
- **Audio Transcription and Text-to-Speech:** Capabilities to transcribe spoken audio and generate clear, authoritative text-to-speech responses.
- **Search Grounding Legal Verification:** Verifies the latest legal rules, circulars, or Supreme Court decisions based on the user's query and state jurisdiction.

## Technology Stack

- **Frontend:** React 19, Vite, Tailwind CSS, Framer Motion, Lucide React
- **Backend:** Express, Node.js, WebSockets (ws), TSX, ESBuild
- **AI Integration:** Google GenAI SDK (gemini-3.5-flash, gemini-3.1-pro-preview, gemini-3.1-flash-live-preview)
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js (v22 or later recommended)
- A Google Gemini API Key

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   Create a `.env` file in the root directory and add the necessary details based on the `.env.example` file:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   APP_URL=your_app_url_here
   ```

### Running the Application

To start the application in development mode:

```bash
npm run dev
```

This command uses `tsx` to run the `server.ts` file, which sets up the Express API endpoints, the WebSocket server, and integrates the Vite middleware for the frontend.

The server will be available at `http://localhost:3000`.

### Building for Production

To build the frontend and backend for production:

```bash
npm run build
```

This command runs `vite build` for the frontend and uses `esbuild` to bundle the backend `server.ts` into `dist/server.cjs`.

To start the production server:

```bash
npm run start
```

## API Endpoints

- `POST /api/advisor`: Get advice for a specific situation.
- `POST /api/chat`: Multi-turn chat interface.
- `POST /api/transcribe`: Transcribe base64 audio.
- `POST /api/tts`: Generate text-to-speech audio.
- `POST /api/verify-statute`: Live legal search grounding verification.
- `GET /api/health`: Server health check.
- `WS /live`: WebSocket connection for real-time voice interaction.

## License

This project is provided as an example and is configured for internal or educational use.

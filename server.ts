import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI | null {
  if (!process.env.GEMINI_API_KEY) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoint for Citizen Police Rights Assistant
  app.post("/api/advisor", async (req, res) => {
    try {
      const { question, situationCategory, language } = req.body;

      if (!question || typeof question !== "string") {
        return res.status(400).json({ error: "A valid situation or question is required." });
      }

      const ai = getAIClient();

      if (!ai) {
        // Fallback response if API key is not configured
        return res.json({
          advice: `In situations involving Indian police: 
1. Always remain calm and respectful while firmly stating your constitutional rights under Article 21 and 22.
2. Ask the officer politely for their name, rank, and identification (Police Act).
3. If stopped for traffic checks, only a Sub-Inspector (SI) or above can seize your vehicle or issue spot fines above ₹100 in many states. Police cannot remove your car ignition keys forcefully.
4. For arrest or detention, ask for the formal Arrest Memo with grounds of arrest (D.K. Basu Guidelines).
5. You have the right to inform a family member and consult a lawyer immediately (Section 41D CrPC / Section 38 BNSS).
6. Women can only be searched by female officers and cannot be arrested between sunset and sunrise except under extraordinary magistrate orders.`,
          legalArticles: ["Article 21 (Right to Life & Liberty)", "Article 22 (Protection against arbitrary arrest)", "Section 41D CrPC / BNSS", "D.K. Basu Landmark Guidelines"],
          recommendedAction: "Ask for identification calmly, note badge numbers, insist on an official receipt for any seizure, and call 112 if in distress.",
          helpline: "112 (National Emergency Helpline) or 15100 (Free Legal Aid)",
        });
      }

      const prompt = `You are "Nyaya Mitra", an authoritative, calm, and practical Legal Rights & Police Procedure Advisor for Indian citizens.
The citizen has asked for guidance about a situation involving Indian Police:
Situation/Question: "${question}"
Category: ${situationCategory || "General Police Interaction"}
Language preference: ${language || "English with easy terms"}

Provide a structured, legally sound response based on the Constitution of India, Criminal Procedure Code (CrPC) / Bharatiya Nagarik Suraksha Sanhita (BNSS), Motor Vehicles Act, Indian Penal Code (IPC) / Bharatiya Nyaya Sanhita (BNS), and landmark Supreme Court judgments (e.g. D.K. Basu, Lalita Kumari, Arnesh Kumar).

Return a JSON object with the following schema:
{
  "summary": "Brief 1-2 sentence reassuring summary of citizen's legal standing",
  "whatToDoNow": ["Step 1", "Step 2", "Step 3", "Step 4"],
  "whatNOTToDo": ["Avoid doing X", "Avoid doing Y"],
  "exactWordsToSay": "Respectful, polite, legally sound exact sentence the citizen can say to the officer",
  "legalProvisions": [
    {"law": "Name of law/article (e.g. Article 22, Section 41B CrPC/BNSS)", "explanation": "Simple one-line explanation of what it guarantees"}
  ],
  "officerObligations": "What the police officer is legally required to do or not do in this scenario",
  "emergencyHelpline": "Relevant helpline number (e.g. 112, 1091, 1930, 15100)",
  "isUrgent": true or false
}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.2,
        },
      });

      const responseText = response.text || "{}";
      const parsed = JSON.parse(responseText);
      return res.json(parsed);
    } catch (err: any) {
      console.error("AI advisor error:", err);
      return res.status(500).json({
        error: "Failed to generate legal guidance",
        details: err?.message,
      });
    }
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Citizen Police Rights App running on port ${PORT}`);
  });
}

startServer();

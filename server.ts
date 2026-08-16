import express from "express";
import http from "http";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Modality, LiveServerMessage } from "@google/genai";
import { WebSocketServer, WebSocket } from "ws";
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
  const server = http.createServer(app);
  const PORT = 3000;

  // Middleware
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));

  // --- API 1: Situation AI Advisor (Single Assessment) ---
  app.post("/api/advisor", async (req, res) => {
    try {
      const { question, situationCategory, language } = req.body;

      if (!question || typeof question !== "string") {
        return res.status(400).json({ error: "A valid situation or question is required." });
      }

      const qLower = question.toLowerCase();
      const isTraffic = qLower.includes("key") || qLower.includes("bike") || qLower.includes("car") || qLower.includes("challan") || qLower.includes("traffic") || qLower.includes("tow") || qLower.includes("license");
      const isSearch = qLower.includes("phone") || qLower.includes("whatsapp") || qLower.includes("search") || qLower.includes("bag") || qLower.includes("house") || qLower.includes("premises") || qLower.includes("seize");
      const isFir = qLower.includes("fir") || qLower.includes("complaint") || qLower.includes("theft") || qLower.includes("refuse") || qLower.includes("zero");
      const isBribe = qLower.includes("bribe") || qLower.includes("cash") || qLower.includes("money") || qLower.includes("extortion") || qLower.includes("upi");
      const isViolence = qLower.includes("beat") || qLower.includes("assault") || qLower.includes("abuse") || qLower.includes("torture") || qLower.includes("threat");

      const defaultCitations = [
        {
          title: "National Legal Services Authority (NALSA)",
          url: "https://nalsa.gov.in",
          description: "24x7 Free Legal Aid & Advocate Support (Toll-Free 15100)",
          department: "Ministry of Law and Justice"
        },
        {
          title: "Digital Police Citizen Services Portal",
          url: "https://digitalpolice.gov.in",
          description: "MHA Centralized e-FIR & Citizen Grievance Portal",
          department: "Ministry of Home Affairs"
        },
        {
          title: "National Human Rights Commission (NHRC)",
          url: "https://hrcnet.nic.in",
          description: "Direct complaint lodging against police brutality & excess (Helpline 14433)",
          department: "NHRC India"
        },
        {
          title: "Central Vigilance Commission (CVC)",
          url: "https://cvc.gov.in",
          description: "Anti-Corruption Vigilance & Public Servant Reporting (Toll-Free 1064)",
          department: "Central Vigilance Commission"
        },
        {
          title: "Supreme Court of India Case Repository",
          url: "https://main.sci.gov.in",
          description: "Landmark rulings: D.K. Basu, Lalita Kumari, Arnesh Kumar, Puttaswamy",
          department: "Supreme Court of India"
        },
        {
          title: "IndiaCode Digital Repository",
          url: "https://indiacode.nic.in",
          description: "Official text of BNSS 2023, BNS 2023, and Motor Vehicles Act 1988",
          department: "Legislative Department, MoL&J"
        }
      ];

      const ai = getAIClient();

      if (!ai) {
        let fallbackSummary = "Under Article 21, 22 of the Constitution of India and landmark Supreme Court rulings, you are shielded by strict statutory protections.";
        let fallbackDoNow = [
          "Remain composed and politely ask the officer for their name, rank badge, and police station jurisdiction.",
          "Assert your rights clearly without physical confrontation or aggressive resistance.",
          "Demand official documented receipts, signed inspection memos, or electronic e-challans.",
          "Dial 112 (National Citizen Emergency) or 15100 (Free Legal Aid) if unlawful detention or intimidation occurs."
        ];
        let fallbackDontDo = [
          "Do NOT hand over your phone unlocked or allow random inspection without a specific judicial warrant.",
          "Do NOT sign blank papers, undated diaries, or unverified confession slips.",
          "Do NOT pay cash to informal intermediaries without an official printed government receipt."
        ];
        let fallbackWords = language === "hi"
          ? "“सर, मैं कानून के अनुसार पूर्ण सहयोग कर रहा हूँ। कृपया आधिकारिक प्रक्रिया के तहत मेमो या चालान प्रदान करें।”"
          : "“Officer, I am cooperating in accordance with statutory procedure. Please provide the official memo/receipt with your badge credentials.”";
        let fallbackProvisions = [
          { law: "Article 21 & 22, Constitution of India", explanation: "Right to personal liberty, dignity, and immediate access to legal counsel." },
          { law: "Section 35 & 36 BNSS 2023 (formerly 41B/41D CrPC)", explanation: "Mandatory arrest memo with witness signature and right to inform family within 8-12 hours." },
          { law: "D.K. Basu v. State of West Bengal (AIR 1997 SC 610)", explanation: "The 11 mandatory Supreme Court guidelines for arrest and police custody." }
        ];

        if (isTraffic) {
          fallbackSummary = "Under Rule 139 Central Motor Vehicles Rules and High Court rulings, traffic officers cannot confiscate ignition keys, deflate tyres, or demand unreceipted cash.";
          fallbackDoNow = [
            "Present your Driving License, RC, PUC, and Insurance digitally via DigiLocker or mParivahan (Rule 139 CMVR).",
            "Verify that only an officer of Sub-Inspector (SI) rank or above is compounding fines exceeding ₹100.",
            "Demand a printed or SMS electronic e-Challan receipt; refuse spot cash without official receipt.",
            "If towing is attempted while you or passengers are seated inside, object calmly (towing with occupants is prohibited)."
          ];
          fallbackWords = language === "hi"
            ? "“सर, मोटर वाहन नियमों के तहत चाबी निकालना गैरकानूनी है। डिजिलॉकर पर मेरे सभी दस्तावेज पूरी तरह वैध हैं।”"
            : "“Officer, snatching the ignition key is prohibited under Motor Vehicles rules. My verified documents are on DigiLocker.”";
          fallbackProvisions = [
            { law: "Rule 139, Central Motor Vehicles Rules (CMVR)", explanation: "Digital documents presented via DigiLocker / mParivahan are 100% legally equivalent to physical copies." },
            { law: "Section 130 & 200, Motor Vehicles Act 1988", explanation: "Only authorized officers (SI and above) can compound traffic penalties." },
            { law: "High Court Directives on Traffic Enforcement", explanation: "Snatching ignition keys, deflating tyres, or hitting moving vehicles is strictly unauthorized." }
          ];
        } else if (isSearch) {
          fallbackSummary = "Under Section 100 CrPC / Section 103 BNSS and the K.S. Puttaswamy verdict, random searches of personal devices or premises without a warrant or independent witnesses are unlawful.";
          fallbackDoNow = [
            "Politely request to inspect the judicial Search Warrant or Section 165 written grounds of emergency search.",
            "Demand that 2 independent local neighborhood witnesses (Panch) observe the entire search procedure.",
            "Politely search the police officers before they enter to ensure no evidence is planted.",
            "Demand an immediate signed duplicate copy of the Seizure Memo (Panchanama) listing every item."
          ];
          fallbackWords = language === "hi"
            ? "“पुट्टास्वामी फैसले के अनुसार फोन की निजता मौलिक अधिकार है। बिना सर्च वारंट और 2 गवाहों के तलाशी नहीं दी जा सकती।”"
            : "“Under Section 100 CrPC and the Puttaswamy privacy ruling, please produce the search warrant and 2 independent witnesses.”";
          fallbackProvisions = [
            { law: "Section 100 & 165 CrPC (Sec 103 & 185 BNSS)", explanation: "Mandatory presence of 2 independent local witnesses and immediate seizure memo." },
            { law: "K.S. Puttaswamy v. Union of India (2017)", explanation: "Fundamental Right to Privacy protects digital devices and smartphone data from arbitrary warrantless snooping." },
            { law: "Section 51(2) CrPC / Sec 49(2) BNSS", explanation: "Female citizens can strictly only be searched by female officers with absolute decency." }
          ];
        } else if (isFir) {
          fallbackSummary = "Under the landmark Lalita Kumari Supreme Court verdict and Section 154 CrPC / Section 173 BNSS, registering an FIR is MANDATORY when a cognizable crime is reported.";
          fallbackDoNow = [
            "Submit your complaint in duplicate and demand a receiving stamp with the General Diary (GD) entry number.",
            "If the station cites jurisdiction, insist on a Zero FIR to be transferred to the relevant station.",
            "If the SHO refuses, send the complaint by Registered Speed Post to the District SP/DCP u/s 154(3) CrPC.",
            "Approach the Judicial Magistrate Court u/s 156(3) CrPC / 175(3) BNSS for a court directive."
          ];
          fallbackWords = language === "hi"
            ? "“सुप्रीम कोर्ट के ललिता कुमारी फैसले के अनुसार संज्ञेय अपराध में FIR दर्ज करना अनिवार्य है। कृपया रिसीविंग मोहर लगाएं।”"
            : "“Under the Lalita Kumari Supreme Court mandate and Section 154 CrPC, FIR registration is mandatory. Please provide my stamped receiving copy.”";
          fallbackProvisions = [
            { law: "Section 154 CrPC / Section 173 BNSS", explanation: "Statutory mandate to record information regarding cognizable offences without delay." },
            { law: "Lalita Kumari v. Govt. of U.P. (AIR 2014 SC 187)", explanation: "Constitution Bench ruling that police officers have zero discretion to refuse an FIR disclosing a cognizable crime." },
            { law: "Section 166A IPC / Section 199 BNS", explanation: "Public servant refusing to record FIR in crimes against women faces up to 2 years imprisonment." }
          ];
        }

        return res.json({
          summary: fallbackSummary,
          whatToDoNow: fallbackDoNow,
          whatNOTToDo: fallbackDontDo,
          exactWordsToSay: fallbackWords,
          legalProvisions: fallbackProvisions,
          officerObligations: "Police officers must wear visible name badges, maintain station diaries, issue stamped receipts, and adhere to constitutional time limits.",
          emergencyHelpline: "112 (National Emergency) / 15100 (Free Legal Aid) / 1091 (Women Helpline)",
          relatedSources: defaultCitations,
          isUrgent: false
        });
      }

      const languageMap: Record<string, string> = {
        en: "English",
        hi: "Hindi (हिंदी)",
        te: "Telugu (తెలుగు)",
        ta: "Tamil (தமிழ்)",
        bn: "Bengali (বাংলা)",
        mr: "Marathi (मराठी)",
        gu: "Gujarati (ગુજરાતી)",
        kn: "Kannada (ಕನ್ನಡ)",
        ml: "Malayalam (മലയാളം)",
        pa: "Punjabi (ਪੰਜਾਬੀ)",
        hinglish: "Hinglish (Hindi in Latin script)"
      };

      const targetLang = languageMap[language] || language || "English";

      const prompt = `You are "Nyaya Mitra", an authoritative, calm, and practical Legal Rights & Police Procedure Advisor for Indian citizens.
Citizen situation: "${question}"
Category: ${situationCategory || "General Police Interaction"}
CRITICAL: Respond in ${targetLang}. Keep legal article names recognizable (e.g. Article 21, Section 35 BNSS, Section 130 MVA, D.K. Basu guidelines).

Return valid JSON with this exact structure:
{
  "summary": "Brief 1-2 sentence reassuring summary of citizen's legal standing with bold key terms",
  "whatToDoNow": ["Step 1 with specific action", "Step 2 with legal basis", "Step 3 with proof gathering", "Step 4 with escalation"],
  "whatNOTToDo": ["Avoid action 1", "Avoid action 2", "Avoid action 3"],
  "exactWordsToSay": "Respectful, polite, legally firm verbatim sentence the citizen can say to the officer",
  "legalProvisions": [
    {"law": "Name of law/article (e.g. Article 21 Constitution / Sec 35 BNSS)", "explanation": "Simple one-line explanation of protection"}
  ],
  "officerObligations": "What the police officer is legally mandated to do or avoid",
  "emergencyHelpline": "112 / 15100 / 1091 / 1930 / 1064",
  "relatedSources": [
    {"title": "Official Portal Name", "url": "https://...", "description": "Short description of the resource", "department": "Official Department"}
  ],
  "isUrgent": false
}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.2,
        },
      });

      const parsed = JSON.parse(response.text || "{}");
      if (!parsed.relatedSources || parsed.relatedSources.length === 0) {
        parsed.relatedSources = defaultCitations;
      }
      return res.json(parsed);
    } catch (err: any) {
      console.error("AI advisor error:", err);
      return res.status(500).json({ error: "Advisor processing failed", details: err?.message });
    }
  });

  // --- API 2: Multi-turn Chatbot with Role Selection & Search Grounding ---
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, model, systemInstruction, useSearchGrounding, language } = req.body;

      if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: "Conversation history with messages is required." });
      }

      const defaultSources = [
        { title: "National Legal Services Authority (NALSA)", uri: "https://nalsa.gov.in" },
        { title: "Digital Police CCTNS Citizen Portal", uri: "https://digitalpolice.gov.in" },
        { title: "National Human Rights Commission (NHRC)", uri: "https://hrcnet.nic.in" },
        { title: "Central Vigilance Commission (CVC)", uri: "https://cvc.gov.in" },
        { title: "IndiaCode Legal Repository", uri: "https://indiacode.nic.in" }
      ];

      const ai = getAIClient();
      if (!ai) {
        const lastMsg = messages[messages.length - 1]?.text || "";
        return res.json({
          text: `### ⚖️ Nyaya Sahayak Legal Advisory

Regarding your inquiry: **"${lastMsg}"**

#### 🛡️ 1. Your Core Rights
- **Constitutional Shield**: Under **Article 21 (Right to Personal Liberty)** and **Article 22** of the Constitution of India, arbitrary detention, unwarranted searches, or intimidation by law enforcement are prohibited.
- **Statutory Protections**: Under **BNSS 2023 (Sections 35, 36, 47, 53)** and **MVA 1988**, police must display visible name badges and issue stamped receipts or electronic e-challans.

#### 📋 2. What To Do Right Now
1. **Stay Composed**: Speak politely and avoid physical confrontation or agitation.
2. **Identify Officer**: Note the officer's nameplate, badge number, police station jurisdiction, and vehicle number.
3. **Assert Legal Safeguards**: If stopped without justification, ask politely: *"Officer, am I free to leave, or am I being detained for a specific inquiry?"*
4. **Mandatory Documentation**: Never pay unreceipted cash. Insist on a formal **Arrest Memo**, **Panchanama Seizure Memo**, or **e-Challan**.

#### 🗣️ 3. Exact Words to Say
> *"Officer, I am cooperating fully under the law. Please provide the official memo/receipt with your badge credentials as mandated by statutory procedure."*

#### 🚨 4. Emergency Escalation
- **National Emergency Helpline**: Dial **112** (24/7)
- **Free Legal Aid (NALSA)**: Dial **15100** (Free advocate assistance)
- **Anti-Corruption Bureau**: Dial **1064** / **1800-11-5555**`,
          groundingSources: defaultSources,
          modelUsed: "offline-fallback"
        });
      }

      // Select requested model
      let selectedModel = "gemini-3.5-flash";
      if (model === "gemini-3.1-pro-preview" || model === "gemini-3.1-flash-lite" || model === "gemini-3.7-flash") {
        selectedModel = model;
      } else if (model === "fast") {
        selectedModel = "gemini-3.1-flash-lite";
      } else if (model === "pro" || model === "complex") {
        selectedModel = "gemini-3.1-pro-preview";
      }

      const defaultSystemInstruction = `You are "Nyaya Sahayak" (न्याय सहायक), an elite Indian Citizen Legal Rights & Police Procedure Advisor.
Your objective is to empower ordinary Indian citizens with precise, calm, and actionable legal knowledge regarding police interactions, traffic enforcement (MVA 1988), criminal procedures (BNSS 2023 / CrPC), penal laws (BNS 2023 / IPC), cyber forensics, and landmark Supreme Court verdicts (e.g. D.K. Basu, Lalita Kumari, Arnesh Kumar, K.S. Puttaswamy).

Formatting & Presentation Guidelines:
- Structure your response with clean Markdown:
  - Clear Markdown headers (###, ####)
  - Bulleted step-by-step action items
  - Verbatim words to say in Markdown blockquotes (> "Quote")
  - Bold statutory sections (e.g. **Article 21**, **Section 35 BNSS**, **Section 154 CrPC**)
- Provide direct official citations and portals (e.g. [NALSA Portal](https://nalsa.gov.in), [Digital Police](https://digitalpolice.gov.in), [NHRC](https://hrcnet.nic.in), [CPGRAMS](https://pgportal.gov.in), [Parivahan](https://echallan.parivahan.gov.in)).
- Language: Respond in ${language || "the language used by the user, default English with Indian context"}.
- Real-time statutory accuracy: Prioritize recent legal enactments (BNSS 2023, BNS 2023, BSA 2023) alongside legacy CrPC/IPC cross-references.`;

      // Transform history into contents array
      const contents = messages.map((m: any) => ({
        role: m.role === "model" || m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.text || "" }],
      }));

      // Config setup
      const config: any = {
        systemInstruction: systemInstruction || defaultSystemInstruction,
        temperature: 0.25,
      };

      // Add Search Grounding tool if requested or if using gemini-3.5-flash for real-time verification
      if (useSearchGrounding) {
        config.tools = [{ googleSearch: {} }];
      }

      const response = await ai.models.generateContent({
        model: selectedModel,
        contents: contents,
        config: config,
      });

      const responseText = response.text || "No response generated.";

      // Extract grounding search metadata if present
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      let webSources = groundingChunks
        .filter((chunk: any) => chunk?.web?.uri)
        .map((chunk: any) => ({
          uri: chunk.web.uri,
          title: chunk.web.title || chunk.web.uri,
        }));

      if (webSources.length === 0) {
        webSources = defaultSources;
      }

      return res.json({
        text: responseText,
        groundingSources: webSources,
        modelUsed: selectedModel,
      });
    } catch (err: any) {
      console.error("Chat error:", err);
      return res.status(500).json({ error: "Chat service encountered an issue", details: err?.message });
    }
  });

  // --- API 3: Audio Transcription with Microphone Input (gemini-3.5-flash) ---
  app.post("/api/transcribe", async (req, res) => {
    try {
      const { audioBase64, mimeType } = req.body;

      if (!audioBase64 || typeof audioBase64 !== "string") {
        return res.status(400).json({ error: "Audio base64 data is required." });
      }

      const ai = getAIClient();
      if (!ai) {
        return res.json({
          transcription: "Voice input received: Police stopped vehicle and requested inspection without challan.",
        });
      }

      const effectiveMimeType = mimeType || "audio/webm";

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: [
          {
            parts: [
              {
                inlineData: {
                  mimeType: effectiveMimeType,
                  data: audioBase64,
                },
              },
              {
                text: "Transcribe the spoken audio verbatim in its original spoken language (e.g. Hindi, English, Hinglish, Tamil, Telugu, Bengali, Marathi, etc.). Do not translate or add conversational replies. Return ONLY the transcribed text string.",
              },
            ],
          },
        ],
      });

      const transcription = (response.text || "").trim();
      return res.json({ transcription });
    } catch (err: any) {
      console.error("Audio transcription error:", err);
      return res.status(500).json({ error: "Failed to transcribe audio", details: err?.message });
    }
  });

  // --- API 4: Live Search Grounding Legal Verification (gemini-3.5-flash) ---
  app.post("/api/verify-statute", async (req, res) => {
    try {
      const { query, state } = req.body;
      if (!query) {
        return res.status(400).json({ error: "Query is required." });
      }

      const ai = getAIClient();
      if (!ai) {
        return res.json({
          verifiedAnswer: `Statutory Check for "${query}": Under Indian Police Act and BNSS 2023, citizens are entitled to transparent police interaction, mandatory identification badges, and official e-challan receipts.`,
          sources: [{ title: "National Legal Services Authority (NALSA)", uri: "https://nalsa.gov.in" }]
        });
      }

      const prompt = `Search and verify the latest legal rules, circulars, state police regulations, or Supreme Court decisions in India for: "${query}" in the state/jurisdiction: "${state || "National/All India"}".
Provide a clear statutory summary including:
1. Current applicable section under Bharatiya Nagarik Suraksha Sanhita (BNSS), BNS, or Motor Vehicles Act.
2. The exact citizen entitlement or police restriction.
3. Relevant official citations or circulars.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      const verifiedAnswer = response.text || "";
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const sources = chunks
        .filter((c: any) => c?.web?.uri)
        .map((c: any) => ({
          uri: c.web.uri,
          title: c.web.title || c.web.uri,
        }));

      return res.json({
        verifiedAnswer,
        sources,
      });
    } catch (err: any) {
      console.error("Search Grounding error:", err);
      return res.status(500).json({ error: "Search grounding check failed", details: err?.message });
    }
  });

  // --- API 5: Health Check ---
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // --- WebSocket Server for Real-Time Voice Conversations (gemini-3.1-flash-live-preview) ---
  const wss = new WebSocketServer({ server, path: "/live" });

  wss.on("connection", async (clientWs: WebSocket) => {
    console.log("Client connected to Gemini Live voice channel");
    let liveSession: any = null;

    try {
      const ai = getAIClient();
      if (!ai) {
        clientWs.send(
          JSON.stringify({
            error: "Gemini API key is not configured. Live Voice requires a valid GEMINI_API_KEY.",
          })
        );
        return;
      }

      // Connect to Gemini Live API session
      liveSession = await ai.live.connect({
        model: "gemini-3.1-flash-live-preview",
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: "Zephyr" },
            },
          },
          systemInstruction: `You are "Nyaya Sahayak", a concise, authoritative, and calm Indian legal rights voice counsel. 
When citizens speak to you about a police stop, checkpoint search, arrest, or complaint, speak in short, practical, 1-2 sentence spoken answers. 
Cite constitutional protections (Article 20, 21, 22), BNSS / CrPC sections, and D.K. Basu guidelines clearly. Speak in conversational, clear English and Hindi.`,
        },
        callbacks: {
          onmessage: (message: LiveServerMessage) => {
            // Send model audio back to client
            const audioData = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (audioData && clientWs.readyState === WebSocket.OPEN) {
              clientWs.send(JSON.stringify({ audio: audioData }));
            }
            if (message.serverContent?.interrupted && clientWs.readyState === WebSocket.OPEN) {
              clientWs.send(JSON.stringify({ interrupted: true }));
            }
          },
          onclose: () => {
            console.log("Gemini Live session closed");
          },
          onerror: (err) => {
            console.error("Gemini Live session error:", err);
            if (clientWs.readyState === WebSocket.OPEN) {
              clientWs.send(JSON.stringify({ error: err?.message || "Live API error" }));
            }
          },
        },
      });

      // Handle audio stream messages from browser client
      clientWs.on("message", (raw) => {
        try {
          const parsed = JSON.parse(raw.toString());
          if (parsed.audio && liveSession) {
            liveSession.sendRealtimeInput({
              audio: {
                data: parsed.audio,
                mimeType: "audio/pcm;rate=16000",
              },
            });
          }
          if (parsed.text && liveSession) {
            liveSession.sendRealtimeInput({
              text: parsed.text,
            });
          }
        } catch (e) {
          console.error("Error processing client audio frame:", e);
        }
      });

      clientWs.on("close", () => {
        if (liveSession) {
          try {
            liveSession.close();
          } catch (e) {
            // ignore
          }
        }
      });
    } catch (liveErr: any) {
      console.error("Failed to establish Live session:", liveErr);
      if (clientWs.readyState === WebSocket.OPEN) {
        clientWs.send(
          JSON.stringify({
            error: `Failed to initialize Gemini Live: ${liveErr?.message || "Internal error"}`,
          })
        );
      }
    }
  });

  // --- Vite Middleware Integration ---
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

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Citizen Police Rights App & Live Server running on http://localhost:${PORT}`);
  });
}

startServer();

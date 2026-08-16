import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getAIClient } from "./_lib/ai";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

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

    const contents = messages.map((m: any) => ({
      role: m.role === "model" || m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.text || "" }],
    }));

    const config: any = {
      systemInstruction: systemInstruction || defaultSystemInstruction,
      temperature: 0.25,
    };

    if (useSearchGrounding) {
      config.tools = [{ googleSearch: {} }];
    }

    const response = await ai.models.generateContent({
      model: selectedModel,
      contents: contents,
      config: config,
    });

    const responseText = response.text || "No response generated.";

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
}

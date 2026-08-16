import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getAIClient } from "./_lib/ai";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { question, situationCategory, language } = req.body;

    if (!question || typeof question !== "string") {
      return res.status(400).json({ error: "A valid situation or question is required." });
    }

    const qLower = question.toLowerCase();
    const isTraffic = qLower.includes("key") || qLower.includes("bike") || qLower.includes("car") || qLower.includes("challan") || qLower.includes("traffic") || qLower.includes("tow") || qLower.includes("license");
    const isSearch = qLower.includes("phone") || qLower.includes("whatsapp") || qLower.includes("search") || qLower.includes("bag") || qLower.includes("house") || qLower.includes("premises") || qLower.includes("seize");
    const isFir = qLower.includes("fir") || qLower.includes("complaint") || qLower.includes("theft") || qLower.includes("refuse") || qLower.includes("zero");

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
        { law: "Section 35 & 36 BNSS 2023 (formerly 41B/41D CrPC)", explanation: "Mandatory arrest memo with witness signature and right to inform family within 8-12 hours." }
      ];

      if (isTraffic) {
        fallbackSummary = "Under Rule 139 Central Motor Vehicles Rules and High Court rulings, traffic officers cannot confiscate ignition keys, deflate tyres, or demand unreceipted cash.";
        fallbackWords = language === "hi"
          ? "“सर, मोटर वाहन नियमों के तहत चाबी निकालना गैरकानूनी है। डिजिलॉकर पर मेरे सभी दस्तावेज पूरी तरह वैध हैं।”"
          : "“Officer, snatching the ignition key is prohibited under Motor Vehicles rules. My verified documents are on DigiLocker.”";
      } else if (isSearch) {
        fallbackSummary = "Under Section 100 CrPC / Section 103 BNSS and the K.S. Puttaswamy verdict, random searches of personal devices or premises without a warrant or independent witnesses are unlawful.";
        fallbackWords = language === "hi"
          ? "“पुट्टास्वामी फैसले के अनुसार फोन की निजता मौलिक अधिकार है। बिना सर्च वारंट और 2 गवाहों के तलाशी नहीं दी जा सकती।”"
          : "“Under Section 100 CrPC and the Puttaswamy privacy ruling, please produce the search warrant and 2 independent witnesses.”";
      } else if (isFir) {
        fallbackSummary = "Under the landmark Lalita Kumari Supreme Court verdict and Section 154 CrPC / Section 173 BNSS, registering an FIR is MANDATORY when a cognizable crime is reported.";
        fallbackWords = language === "hi"
          ? "“सुप्रीम कोर्ट के ललिता कुमारी फैसले के अनुसार संज्ञेय अपराध में FIR दर्ज करना अनिवार्य है। कृपया रिसीविंग मोहर लगाएं।”"
          : "“Under the Lalita Kumari Supreme Court mandate and Section 154 CrPC, FIR registration is mandatory. Please provide my stamped receiving copy.”";
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
}

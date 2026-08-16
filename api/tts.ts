import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getAIClient } from "./_lib/ai.js";
import { Modality } from "@google/genai";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { text, voiceName } = req.body;
    if (!text || typeof text !== "string") {
      return res.status(400).json({ error: "Text string is required for TTS generation." });
    }

    const ai = getAIClient();
    if (!ai) {
      return res.status(200).json({ audioBase64: null, offline: true });
    }

    // Truncate long text for fast audio response
    const cleanText = text.replace(/[*_#`>\[\]\(\)]/g, "").slice(0, 500);

    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [{ parts: [{ text: `Say clearly in a calm, authoritative legal counselor voice: ${cleanText}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: voiceName || "Zephyr" },
          },
        },
      },
    });

    const audioBase64 = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data || null;
    return res.json({ audioBase64, mimeType: "audio/wav" });
  } catch (err: any) {
    console.error("TTS generation error:", err);
    return res.json({ audioBase64: null, error: err?.message });
  }
}

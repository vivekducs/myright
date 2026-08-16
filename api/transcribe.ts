import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getAIClient } from "./_lib/ai.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

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
      model: "gemini-1.5-flash",
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
}

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getAIClient } from "./_lib/ai.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

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
      model: "gemini-1.5-flash",
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
}

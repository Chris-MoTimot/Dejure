import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function simplifyLegalText(text: string) {
  if (!text) return "";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are Dejure, an expert legal translator. Your task is to simplify the following legal text into clear, everyday language that a non-lawyer can easily understand. 
      
      - Mantain the original meaning and legal weight.
      - Use simple words and short sentences.
      - Use bullet points if helpful.
      - Avoid jargon; if you must use a legal term, explain it briefly.
      - Response language: Indonesian (Bahasalah ke dalam Bahasa Indonesia yang santai tapi profesional).
      
      Legal Text:
      "${text}"`,
    });

    return response.text || "Gagal menyederhanakan teks. Silakan coba lagi.";
  } catch (error) {
    console.error("Error simplifying legal text:", error);
    throw new Error("Maaf, terjadi kesalahan saat memproses dokumen Anda.");
  }
}

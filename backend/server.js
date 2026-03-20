import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
});

app.post("/analyze", async (req, res) => {
    try {
        const { idea } = req.body;

        if (!idea || idea.trim().length < 15) {
            return res.status(400).json({
                error: "Please enter a meaningful idea (at least 15 characters)"
            });
        }

        const prompt = `
You are an expert planner and clarity coach.

Analyze the user's idea and return ONLY valid JSON (no explanations).

Use this EXACT structure:

{
  "Goal": "Clear, specific goal",
  "Method": "Overall approach",
  "Steps": ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"],
  "Timeline": "Realistic timeline or 'Not specified - suggest one'",
  "Missing Elements": ["Gap 1", "Gap 2", "Gap 3"],
  "Simplified Version": "One clear paragraph",
  "Actionable Next Steps": ["Next step 1", "Next step 2", "Next step 3", "Next step 4", "Next step 5"],
  "Clarity Score (0-100)": number
}

Clarity Score Calculation (be honest):
- Goal clarity (0-25)
- Steps quality (0-25)
- Timeline presence (0-20)
- Missing elements identified (0-15)
- Overall completeness (0-15)

Idea: ${idea}
`;

        const completion = await openai.chat.completions.create({
            model: "openai/gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
            response_format: { type: "json_object" },
            temperature: 0.3,
        });

        const text = completion.choices[0].message.content;
        const json = JSON.parse(text);

        // Ensure all required keys exist
        const safeResponse = {
            Goal: json.Goal || "Goal not clearly defined",
            Method: json.Method || "Approach to be decided",
            Steps: Array.isArray(json.Steps) ? json.Steps : ["Define goal", "Plan steps", "Execute", "Review"],
            Timeline: json.Timeline || "Not specified",
            "Missing Elements": Array.isArray(json["Missing Elements"]) ? json["Missing Elements"] : ["More details needed"],
            "Simplified Version": json["Simplified Version"] || idea,
            "Actionable Next Steps": Array.isArray(json["Actionable Next Steps"]) ? json["Actionable Next Steps"] : ["Start today"],
            "Clarity Score (0-100)": Math.min(100, Math.max(0, Number(json["Clarity Score (0-100)"]) || 50))
        };

        res.json(safeResponse);

    } catch (err) {
        console.error("Backend Error:", err);
        res.status(500).json({
            error: "AI analysis failed. Please try again.",
            fallback: true
        });
    }
});

app.listen(5000, () => {
    console.log("✅ KALNET Backend running at http://localhost:5000");
});
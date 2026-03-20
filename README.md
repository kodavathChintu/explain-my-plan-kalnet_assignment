📌 Explain My Plan — AI Clarity & Structuring Tool
🚀 Project Overview

A clean full-stack web application that converts messy human ideas into structured, actionable plans using AI. Built as part of the KALNET Intern Assignment, focusing on clarity, prompt design, and user experience rather than complexity.

✨ Features

Modern glassmorphism UI with smooth hover effects

AI-powered structured output (Goal, Steps, Timeline, etc.)

Missing elements detection

Simplified version of user input

Actionable next steps

Animated Clarity Score (0–100)

Before vs After comparison

PDF export functionality

Confetti animation for high clarity scores

⚙️ Setup Instructions
🔹 Backend
cd backend
npm install
npm run dev

Backend runs on: http://localhost:5000

🔹 Frontend (Vite + React + Tailwind)
cd frontend
npm install
npm run dev

Frontend runs on: http://localhost:5173

🔐 Environment Variables

Create a .env file in the backend folder:

OPENROUTER_API_KEY=your_api_key_here
🌐 Deployment

Frontend (Vercel):
https://explain-my-plan-kalnet-assignment-nsq5ppasw.vercel.app/

Backend (Render):
https://explain-my-plan-kalnet-assignment.onrender.com

🧠 Prompt Design Explanation

I designed a structured and constraint-driven prompt to ensure the AI consistently returns meaningful and usable output. The prompt strictly enforces a JSON format with predefined keys such as goal, steps, timeline, missing elements, simplified version, and actionable steps.

To improve reliability, I used a low temperature (0.3) to reduce randomness and ensure consistent responses. The prompt also explicitly instructs the AI to identify missing components and organize the plan logically.

Additionally, I embedded clear instructions for generating each section so that the output aligns closely with the assignment requirements and remains easy to display in the UI.

📊 Clarity Score Logic (Simple & Transparent)

The Clarity Score (0–100) is calculated based on four key factors:

Goal clarity → 25 points

Defined steps → 25 points

Timeline presence → 20 points

Overall completeness → 30 points

This logic is included directly in the prompt so the AI evaluates the plan consistently. The final score is displayed using an animated circular progress bar, making it visually intuitive for users.

📝 Short Note (Challenges & Approach)

One of the main challenges was ensuring the AI produced structured and consistent output instead of vague or unorganized text. Initially, responses varied a lot, which made it difficult to display them in the UI. I solved this by refining the prompt to strictly enforce a JSON format and clearly define each required field.

Another challenge was designing a simple yet meaningful clarity score. I approached this by breaking clarity into measurable components like goal, steps, timeline, and completeness, and assigning clear weights to each.

For AI prompting, I focused on clarity over complexity by giving precise instructions, limiting randomness, and guiding the model step-by-step. This resulted in more reliable and user-friendly outputs.

✅ Final Notes

This project emphasizes clear thinking, structured AI communication, and practical usability, aligning closely with the assignment goals.

# Explain My Plan — AI Clarity & Structuring Tool

## Project Overview
A clean full-stack web app that takes messy human ideas and turns them into structured, actionable plans with AI. Built in 2 days as per KALNET Intern Assignment.

## Features
- Modern glassmorphism UI with floating hover effects
- Animated Clarity Score circle
- Before vs After comparison
- PDF Export
- Confetti on high clarity

## Setup Instructions
### Backend
```bash
cd backend
npm install
npm run dev

Backend runs on http://localhost:5000
Frontend (Vite + React + Tailwind)
Bashcd frontend
npm install
npm run dev
Frontend runs on http://localhost:5173
Environment Variables
Create .env in backend folder:
textOPENROUTER_API_KEY=sk-or-v1-...
Deployment (Live Links)

Frontend: Deployed on Vercel → https://explain-my-plan-kalnet-assignment-nsq5ppasw.vercel.app/
Backend: Deployed on Render → https://explain-my-plan-kalnet-assignment.onrender.com

Prompt Design Explanation
I designed a single, highly structured prompt that forces the LLM to return only valid JSON with exact keys required by the assignment. I embedded the Clarity Score calculation logic directly inside the prompt and used response_format: { type: "json_object" } for reliability. Temperature set to 0.3 for consistent output.
Clarity Score Logic (Simple & Transparent)
The score (0–100) is calculated by the AI using these exact weights mentioned in the assignment:

Goal clarity → 25 points
Defined steps → 25 points
Timeline presence → 20 points
Overall completeness → 30 points

The logic is written clearly in the prompt so the AI follows it every time. Score is displayed as an animated circular progress bar.

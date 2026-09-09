import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";

import { connectDB } from "./config/db.js";
import { notFound, errorHandler } from "./middleware/error.middleware.js";
import authRoutes from "./routes/auth.routes.js"
import leadRoutes from "./routes/lead.routes.js"
import contactRoutes from "./routes/contact.routes.js";
import noteRoutes from "./routes/note.routes.js";
import taskRoutes from "./routes/task.routes.js";
import aiRoutes from "./routes/ai.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js"

const app = express();

/* ────────────────────────────── Middleware ────────────────────────────── */
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

/* ────────────────────────────── Routes ────────────────────────────── */
app.get("/api/health", (req, res) =>
  res.json({ success: true, status: "ok", service: "TTP CRM API" })
);
app.get('/api/test-models', async (req, res) => {
  try {
    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const models = [];
    for await (const model of await ai.models.list()) {
      models.push(model.name);
    }
    res.json(models);
  } catch (err) {
    res.json({ error: err.message });
  }
});
app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/analytics", analyticsRoutes);

/* ────────────────────────────── Error handling (last) ────────────────────────────── */
app.use(notFound);
app.use(errorHandler);

/* ────────────────────────────── Boot ────────────────────────────── */

// Connect to DB immediately
connectDB();

// Only listen locally — Vercel handles this in production
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () =>
    console.log(`🚀 TTP CRM API running on http://localhost:${PORT}`)
  );
}

export default app;
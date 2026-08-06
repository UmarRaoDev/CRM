/* Shared domain constants kept in one place so UI + filters stay in sync
   with the backend enums. */

export const LEAD_STAGES = ["New", "Qualified", "Proposal", "Won", "Lost"];

export const PIPELINE_STAGES = ["New", "Qualified", "Proposal", "Won", "Lost"];

export const LEAD_PRIORITIES = ["Low", "Medium", "High"];

export const LEAD_SOURCES = [
  "Website",
  "Referral",
  "Cold Outreach",
  "Social",
  "Event",
  "Other",
];

export const TASK_STATUSES = ["Pending", "In Progress", "Completed"];
export const TASK_PRIORITIES = ["Low", "Medium", "High"];

/** Tailwind class tokens for each lead stage (badge + kanban accents). */
export const STAGE_STYLES = {
  // Uses a neutral slate for clean incoming leads
  New: { dot: "bg-slate-400", badge: "bg-slate-50 text-slate-700", bar: "bg-slate-400" },
  
  // Uses your primary deep burgundy brand colors for active, qualified pipeline movement
  Qualified: {
    dot: "bg-brand-500",
    badge: "bg-brand-50 text-brand-700",
    bar: "bg-brand-500",
  },
  
  // Uses an elegant amber for open proposals
  Proposal: {
    dot: "bg-amber-500",
    badge: "bg-amber-50 text-amber-700",
    bar: "bg-amber-500",
  },
  
  // Kept as positive emerald green so success states are obvious to salespeople
  Won: {
    dot: "bg-emerald-500",
    badge: "bg-emerald-50 text-emerald-700",
    bar: "bg-emerald-500",
  },
  
  // Kept as a crisp error rose/red for lost deals
  Lost: { dot: "bg-rose-500", badge: "bg-rose-50 text-rose-700", bar: "bg-rose-500" },
};

export const PRIORITY_STYLES = {
  Low: "bg-slate-100 text-slate-600",
  Medium: "bg-amber-50 text-amber-700",
  High: "bg-rose-50 text-rose-700",
};

export const TASK_STATUS_STYLES = {
  Pending: "bg-slate-100 text-slate-600",
  "In Progress": "bg-amber-50 text-amber-700", // Soft warning tone for works-in-progress
  Completed: "bg-emerald-50 text-emerald-700", // Green for successfully finished tasks
};

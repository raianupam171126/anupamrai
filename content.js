/* =====================================================================
   SITE CONTENT — this is the only file you need to edit day to day.
   Add a video: upload it to YouTube, then paste the video ID
   (the part after "watch?v=") into youtubeId.
   Add a blog post: publish it on Medium / Substack / LinkedIn, then add
   an entry to "posts" with its URL and set status to "published".
   ===================================================================== */

window.SITE = {
  name: "Anupam Rai",
  role: "Marketing Analytics & Measurement Leader",
  location: "Bengaluru, India",
  headline: "I build the measurement systems that tell marketing where the next dollar should go.",
  intro:
    "14 years across marketing mix modeling, multi-touch attribution, customer analytics and BI, " +
    "now shipping production GenAI agents on Databricks. I sit between the CMO's question and the " +
    "data engineer's pipeline, and I speak both languages.",

  links: {
    email: "rai.anupam11@gmail.com",
    linkedin: "https://www.linkedin.com/in/anupam-rai/",
    github: "https://github.com/raianupam171126",
    blog: "https://raianupam171126.substack.com",
    cv: ""                                              // optional: link to a PDF of your CV
  },

  /* ---------- VIDEOS ----------
     format: "long" (16:9 demo) or "short" (9:16 YouTube Short)
     youtubeId: the part after "watch?v=" or after "/shorts/"            */
  videos: [
    {
      title: "Marketing Intelligence Agent",
      summary:
        "A B2B agent that turns one question into one recommendation using four tools: segment lookup, " +
        "CLV lookup, a survival-model CLV what-if and document search. Every number on screen comes " +
        "from a tool or a governed table.",
      tag: "CLV",
      stack: ["CLV", "Survival model", "Model Serving", "Unity Catalog"],
      format: "long",
      youtubeId: "JXOA9hTKAEo"
    },
    {
      title: "Decision loop",
      summary: "How measurement should feed the next budget decision, not just the next report.",
      tag: "Strategy",
      stack: [],
      format: "short",
      youtubeId: "wsY_sGvEo-Q"
    },
    {
      title: "Coupon uplift",
      summary: "Who should get the coupon? Uplift modeling separates persuadable customers from the ones who buy anyway.",
      tag: "Causal",
      stack: [],
      format: "short",
      youtubeId: "Q5Dn8v1w7LU"
    },
    {
      title: "Media Mix Agent",
      summary:
        "An LLM orchestrator for a D2C brand that answers budget questions by calling an MMM: channel " +
        "contribution lookups, what-if spend scenarios, and search over campaign briefs and guardrails.",
      tag: "MMM",
      stack: ["MMM", "LLM tool-calling", "RAG", "Databricks"],
      format: "long",
      youtubeId: "mZ2ViZ5FOmY"
    },
    {
      title: "Pipeline Attribution Agent",
      summary:
        "Markov chain attribution at MQL and opportunity level, with removal effect as the what-if: " +
        "what happens to pipeline if a channel disappears.",
      tag: "Attribution",
      stack: ["Markov chains", "Removal effect", "Agents"],
      format: "long",
      youtubeId: "s0D0ZABENKA"
    }
  ],

  /* ---------- PROJECTS (portfolio, links to GitHub) ---------- */
  projects: [
    {
      title: "MMM with Bayesian Optimization",
      problem: "Which channels drive revenue, where do they saturate, and how should budget be reallocated?",
      method: "Adstock + Hill saturation, Bayesian estimation, constrained budget optimizer",
      url: "https://github.com/raianupam171126"
    },
    {
      title: "Markov Chain Attribution",
      problem: "Last-touch over-credits paid search. What does each touchpoint actually contribute?",
      method: "Path transition matrix, removal effect, comparison with heuristic models",
      url: "https://github.com/raianupam171126"
    },
    {
      title: "Offer Optimization with Uplift",
      problem: "Which customers should get a coupon, and which would have bought anyway?",
      method: "X-learner and causal forest uplift, constrained optimization, holdout measurement",
      url: "https://github.com/raianupam171126/Databricks-Offer-Optimization"
    },
    {
      title: "Customer Value Intelligence Engine",
      problem: "Who are the high-value customers, and who is about to leave?",
      method: "Segmentation, propensity and CLV models on a Databricks lakehouse",
      url: "https://github.com/raianupam171126"
    }
  ],

  /* ---------- WRITING ----------
     platform: "Medium" | "Substack" | "LinkedIn"
     status:   "published" | "drafting" | "planned"          */
  posts: [
    {
      title: "Why I'm starting The Measurement Desk",
      blurb: "Fourteen years of marketing measurement, and the budget questions that still don't have easy answers.",
      topic: "Launch",
      platform: "Substack",
      date: "Sep 2026",
      url: "https://raianupam171126.substack.com/p/why-im-starting-the-measurement-desk",
      status: "published"
    },
    {
      title: "Your MMM is only as good as your last experiment",
      blurb: "Why geo-lift and holdout tests should calibrate the model, not sit in a separate deck.",
      topic: "MMM",
      platform: "Substack",
      date: "",
      url: "",
      status: "planned"
    },
    {
      title: "Last-touch attribution is a budget decision in disguise",
      blurb: "How a reporting default quietly moves money toward branded search.",
      topic: "Attribution",
      platform: "Substack",
      date: "",
      url: "",
      status: "planned"
    },
    {
      title: "Putting an LLM in front of a marketing model without letting it make up numbers",
      blurb: "The design rule behind my agent demos: every figure comes from a tool or a governed table.",
      topic: "GenAI",
      platform: "Substack",
      date: "",
      url: "",
      status: "planned"
    }
  ],

  /* ---------- ABOUT ---------- */
  experience: [
    { org: "Thoughtworks", note: "Data & AI engineering for marketing and customer analytics" },
    { org: "Acuity Knowledge Partners", note: "Led an 11-person team across data science, data engineering and BI" },
    { org: "Unisys", note: "Built the marketing analytics function from scratch; ~$400K saved and moved into ABM" },
    { org: "Focus Edumatics", note: "Delivered 25% cost savings" }
  ],
  certifications: [
    "Databricks ML Professional",
    "Databricks GenAI Engineer Associate",
    "Databricks ML Associate",
    "Databricks Data Engineer Associate",
    "Databricks Data Analyst Associate",
    "Adobe Analytics Business Practitioner Expert"
  ],
  education: [
    { degree: "MBA, Marketing & Finance", school: "IIT Roorkee", year: "2012" },
    { degree: "PG Diploma in Data Science", school: "IIIT Bangalore · 1-year program", year: "2017–18" },
    { degree: "B.Tech, Computer Science & Engineering", school: "UPTU", year: "2007" }
  ],

  speaking:
    "Open to talks, workshops and advisory work on marketing measurement, MMM, attribution and " +
    "GenAI for marketing teams."
};

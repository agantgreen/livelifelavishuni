// ═══════════════════════════════════════════════════════════════
//  LIVE LIFE LAVISH UNIVERSITY — CONTENT EDITOR FILE
//  Edit this file to update all course content in the app.
//  No coding knowledge needed — just update the text values.
// ═══════════════════════════════════════════════════════════════

const LLLU_CONTENT = {

  // ── BRANDING ────────────────────────────────────────────────
  school: {
    name: "Live Life Lavish University",
    tagline: "Activate your divine purpose, align with your design, and build a lavish life that reflects your soul.",
    shortName: "LLL U",
    emoji: "✳️",
    totalWeeks: 6,
    cohort: "Founding Circle",
    enrollmentDeadline: "June 14",
    spotsTotal: 15,
  },

  // ── PRICING TIERS ───────────────────────────────────────────
  pricing: [
    {
      tier: "Aligned",
      emoji: "✨",
      price: "$288",
      fullValue: "$444",
      discount: "35% off",
      description: "The full course experience, weekly workbook pages, rituals, and Human Design decoding. Perfect for the self-led woman ready to align.",
      includes: [
        "Full 6-week course access",
        "Weekly workbook pages",
        "Ritual guides",
        "Human Design decoding",
      ],
    },
    {
      tier: "Lavish",
      emoji: "🌸",
      price: "$333",
      fullValue: "$555",
      discount: "40% off",
      featured: true,
      description: "Includes the full course plus deep integration tools. Ideal for the woman ready for real-world alignment.",
      includes: [
        "Everything in Aligned",
        "Entrepreneurial Shadow Work Journal",
        "Human Design Activation Kit",
        "Shadow Work Masterclass",
      ],
    },
    {
      tier: "Legacy VIP",
      emoji: "🌟",
      price: "$444",
      fullValue: "$888",
      discount: "50% off",
      spotsLeft: 5,
      description: "Everything in Lavish, plus 1:1 coaching and lifetime alumni access. Only 5 spots available.",
      includes: [
        "Everything in Lavish",
        "1:1 Human Design Coaching Session ($99 value)",
        "Lifetime alumni circle access",
        "Printed Ritual Kit (shipped materials)",
      ],
    },
  ],

  // ── DAILY RITUAL PROMPTS ─────────────────────────────────────
  // Add as many as you want — the app cycles through them daily
  ritualPrompts: [
    "Where have you been hiding the version of yourself that knows she's enough?",
    "What version of you are you ready to stop apologizing for?",
    "What would you do today if you fully trusted your own authority?",
    "Where in your life are you still moving from fear instead of faith?",
    "What pattern are you finally ready to release so your purpose can breathe?",
    "Who were you before the world told you who to be?",
    "What does your most lavish life feel like in your body, right now?",
    "Where are you waiting for permission that only you can give yourself?",
    "What truth have you been softening to make others comfortable?",
    "What would change if you treated your energy as your most sacred resource?",
    "Where is your Human Design strategy asking you to slow down and respond?",
    "What part of your shadow is actually a superpower in disguise?",
  ],

  // ── MORNING RITUALS ──────────────────────────────────────────
  morningRituals: [
    { name: "Morning pages / gratitude", duration: "5 min" },
    { name: "Intention setting", duration: "3 min" },
    { name: "Today's journal prompt", duration: "10 min" },
    { name: "Module video or lesson", duration: "20 min" },
  ],

  // ── EVENING RITUALS ──────────────────────────────────────────
  eveningRituals: [
    { name: "Evening reflection", duration: "5 min" },
    { name: "Tomorrow's intention", duration: "2 min" },
    { name: "Gratitude close", duration: "2 min" },
  ],

  // ── THE 6 MODULES ────────────────────────────────────────────
  modules: [
    {
      week: 1,
      number: 1,
      emoji: "🌱",
      title: "The Lavish Mindset",
      subtitle: "Creating Space for the Life You Desire",
      theme: "Soul Truth & Spiritual Reconnection",
      description: "Remember who you really are. Identify the ways you've been hiding, shrinking, or separating from your truth.",
      topics: [
        "Releasing scarcity, shame, and survival programming",
        "Understanding your subconscious self-sabotage",
        "Anchoring into your divine identity",
      ],
      tools: [
        { name: "Inner child visualization ritual", type: "ritual" },
        { name: "Lavish Life Mindset Audit Worksheet", type: "workbook" },
        { name: "Shadow work journaling for abundance blocks", type: "journal" },
      ],
      videos: [
        { title: "Welcome to Your Lavish Life", duration: "12 min", watched: false },
        { title: "The Scarcity Code: What's Running You?", duration: "18 min", watched: false },
        { title: "Your Divine Identity Activation", duration: "15 min", watched: false },
      ],
      journalPrompts: [
        "Where in your life are you still operating from survival instead of soul?",
        "What would it feel like to fully claim your divine identity today?",
        "What scarcity story did you inherit, and how has it shaped your choices?",
      ],
    },
    {
      week: 2,
      number: 2,
      emoji: "🔮",
      title: "Who You Really Are",
      subtitle: "Owning Your Soul's Blueprint",
      theme: "Human Design Foundations",
      description: "Decode your energy type, authority, and strategy. Learn how you were uniquely designed to move, manifest, and magnetize.",
      topics: [
        "Introduction to Human Design (your type, strategy, authority)",
        "Natal chart North Node + purpose alignment",
        "Deconditioning from what 'success' should look like",
      ],
      tools: [
        { name: "Personalized HD Summary Worksheet", type: "workbook" },
        { name: "Soul Signature Activation audio", type: "ritual" },
        { name: "Embodiment practice for your type", type: "practice" },
      ],
      videos: [
        { title: "Human Design 101: Your Energetic Blueprint", duration: "22 min", watched: false },
        { title: "Reading Your Chart: Type, Strategy & Authority", duration: "25 min", watched: false },
        { title: "North Node: Your Soul's True North", duration: "16 min", watched: false },
      ],
      journalPrompts: [
        "What does your Human Design type reveal about how you've been misaligned?",
        "Where have you been trying to succeed using someone else's strategy?",
        "What conditioning are you finally ready to release?",
      ],
    },
    {
      week: 3,
      number: 3,
      emoji: "💡",
      title: "Purpose as a Path",
      subtitle: "Aligning Your Vision with Your Destiny",
      theme: "Reclaiming Purpose",
      description: "Realign with your divine mission. Whether it's a business, a message, or a way of being — this week reveals the path forward.",
      topics: [
        "Your soul's mission & why it matters now",
        "How passion, pain, and purpose intersect",
        "Identifying your 'Lavish Life Pillars' (values, vision, vibe)",
      ],
      tools: [
        { name: "Purpose Clarity Map", type: "workbook" },
        { name: "Lavish Life Mission Statement template", type: "workbook" },
        { name: "Guided journaling: Past wounds → present wisdom", type: "journal" },
      ],
      videos: [
        { title: "Your Mission Isn't an Accident", duration: "20 min", watched: false },
        { title: "The Pain → Purpose Alchemy", duration: "17 min", watched: false },
        { title: "Defining Your Lavish Life Pillars", duration: "14 min", watched: false },
      ],
      journalPrompts: [
        "What pain in your past was actually preparation for your purpose?",
        "If you could only do one thing for the rest of your life, what would it be?",
        "What are your non-negotiable Lavish Life Pillars?",
      ],
    },
    {
      week: 4,
      number: 4,
      emoji: "🧘🏽‍♀️",
      title: "Magnetic Habits & Rituals",
      subtitle: "Becoming a Channel for Ease & Flow",
      theme: "Creating a Lavish Life Ritual",
      description: "Anchor new daily rituals that nourish your mind, body, and spirit. Learn how to move in flow instead of force.",
      topics: [
        "Morning & evening ritual design",
        "Nervous system regulation for creatives & intuitives",
        "Time-blocking with your Human Design energy type",
      ],
      tools: [
        { name: "Ritual Creation Workbook", type: "workbook" },
        { name: "Energetic boundary setting exercise", type: "practice" },
        { name: "'Flow Over Force' calendar template", type: "workbook" },
      ],
      videos: [
        { title: "Rituals That Actually Work for Your Design", duration: "19 min", watched: false },
        { title: "Nervous System as Sacred Technology", duration: "21 min", watched: false },
        { title: "Designing Your Lavish Daily Flow", duration: "15 min", watched: false },
      ],
      journalPrompts: [
        "What does a day lived in flow (not force) look like for you?",
        "What habit have you been resisting that your body is actually craving?",
        "How can you design your mornings to match your energy type?",
      ],
    },
    {
      week: 5,
      number: 5,
      emoji: "🔥",
      title: "Lavish Self-Leadership",
      subtitle: "Confidence, Voice, and Visibility",
      theme: "Shadow Work & Releasing Patterns",
      description: "Unpack your emotional triggers and survival strategies. Learn how to transmute your shadows into power.",
      topics: [
        "Reclaiming your power + activating your throat center",
        "Inner authority vs. outside validation",
        "Healing the 'good girl' or 'quiet healer' archetype",
      ],
      tools: [
        { name: "Voice of the Oracle activation script", type: "ritual" },
        { name: "Confidence Codes Journal", type: "journal" },
        { name: "Visibility challenge: speak your truth on IG or podcast", type: "challenge" },
      ],
      videos: [
        { title: "Your Voice Is the Vessel", duration: "18 min", watched: false },
        { title: "Shadow Into Superpower", duration: "24 min", watched: false },
        { title: "Visible, Loud & Unapologetic", duration: "16 min", watched: false },
      ],
      journalPrompts: [
        "What have you been afraid to say out loud, and why?",
        "Where do you seek validation instead of trusting your inner authority?",
        "What would you create if you weren't afraid of being seen?",
      ],
    },
    {
      week: 6,
      number: 6,
      emoji: "🌟",
      title: "Design Your Lavish Life",
      subtitle: "Integration & Soul-Led Strategy",
      theme: "Embodying Your Future Self",
      description: "Integrate all your inner work into your outer world. Activate your next-level identity and sustain the shift.",
      topics: [
        "Creating a holistic life strategy from your purpose",
        "Integrating spirituality with systems",
        "Your 90-Day Lavish Life Plan",
      ],
      tools: [
        { name: "Lavish Life Strategy Template (PDF planner)", type: "workbook" },
        { name: "Final ceremony: 'Your Purpose Manifesto'", type: "ritual" },
        { name: "Bonus: Vision Board + Manifestation Playlist", type: "bonus" },
      ],
      videos: [
        { title: "Who You Are Now vs. Who You Were", duration: "15 min", watched: false },
        { title: "Building Your Soul-Led Strategy", duration: "22 min", watched: false },
        { title: "The Closing Ceremony", duration: "20 min", watched: false },
      ],
      journalPrompts: [
        "How have you changed since Week 1? What has shifted in your body?",
        "What is your Lavish Life non-negotiable from this day forward?",
        "Write your Purpose Manifesto: who you are, what you're here for, how you'll live.",
      ],
    },
  ],

  // ── HUMAN DESIGN DAILY INSIGHTS ─────────────────────────────
  // Rotates based on day of week
  hdInsights: [
    {
      label: "For the 6/2 Profile",
      text: "You are in your on-the-roof phase. Not hiding — consolidating. The depth you build in stillness becomes the authority you lead with.",
    },
    {
      label: "For the Manifesting Generator",
      text: "Your multi-passionate nature is not a flaw. You are designed to light up multiple paths simultaneously. Follow the response, not the obligation.",
    },
    {
      label: "Emotional Authority Reminder",
      text: "Clarity comes in waves, not in moments. You don't have to decide today. Ride the wave and let the answer rise naturally.",
    },
    {
      label: "LAX of Migration (40/37 | 35/5)",
      text: "You carry people from one version of themselves to another. Your story is not baggage — it is the bridge that others will walk across.",
    },
    {
      label: "North Node in Virgo, 3rd House",
      text: "Your growth lives in the details, the daily practice, the words you put into the world. You are here to communicate your path as you walk it.",
    },
    {
      label: "Venus in Leo, 2nd House",
      text: "Your values are royal. You are allowed to want beauty, luxury, and recognition. Receiving is part of your design.",
    },
    {
      label: "Cancer Rising",
      text: "Home is your foundation — in your body, your space, your relationships. When you feel safe, you are unstoppable.",
    },
  ],

  // ── BONUSES ──────────────────────────────────────────────────
  bonuses: [
    {
      emoji: "💌",
      name: "The Divine Downloads Vault",
      description: "Audio meditations, channeled affirmations",
    },
    {
      emoji: "🧿",
      name: "The Soulpreneur Toolkit",
      description: "Basic biz-building checklist + branding starter",
    },
    {
      emoji: "📖",
      name: "The Lavish Life Journal",
      description: "Digital or printable prompts to use alongside the course",
    },
  ],

};

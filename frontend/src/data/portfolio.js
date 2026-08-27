export const profile = {
    name: "Roshani Kamble",
    initials: "RK",
    position: "Frontend-focused Developer → Full Stack Engineering",
    specializations: ["Blockchain / Web3", "AI / ML Application Development"],
    statement:
        "Building practical software at the intersection of modern frontend engineering, full-stack development, intelligent systems and decentralized technologies.",
    location: "Pune, Maharashtra, India",
};

export const socialLinks = {
    email: "roshanikamble2002@gmail.com",
    github: "https://github.com/RoshaniBKamble",
    linkedin: "https://www.linkedin.com/in/roshani-kamble-3a8b7b259",
    resume: "/roshani-kamble-resume.pdf",
};

export const navSections = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "stack", label: "STACK" },
    { id: "work", label: "WORK" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "achievements", label: "ACHIEVEMENTS" },
    { id: "certificates", label: "CERTIFICATES" },
    { id: "buildlog", label: "BUILD LOG" },
    { id: "contact", label: "CONTACT" },
];

export const stackCategories = [
    {
        id: "frontend",
        label: "FRONTEND",
        blurb: "Primary focus — interface engineering and user experience.",
        items: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "D3.js", "Responsive Web Development", "UI/UX"],
    },
    {
        id: "fullstack",
        label: "FULL STACK / BACKEND",
        blurb: "Server-side engineering and API development.",
        items: ["Python", "FastAPI", "Django", "Flask", "Node.js", "REST APIs", "PHP", "Laravel"],
    },
    {
        id: "web3",
        label: "BLOCKCHAIN / WEB3",
        blurb: "Specialization — decentralized systems and smart contracts.",
        items: ["Solidity", "Ethereum", "Ethereum Sepolia", "Smart Contracts", "EVM", "Web3", "Decentralized Identity", "DeFi", "Hardhat"],
    },
    {
        id: "aiml",
        label: "AI / ML",
        blurb: "Applied intelligent systems and language models.",
        items: ["Python", "Machine Learning", "Deep Learning", "NLP", "RoBERTa", "LLMs", "RAG", "OCR", "Computer Vision", "Face Recognition", "LangChain", "FAISS"],
    },
    {
        id: "databases",
        label: "DATABASES",
        blurb: "Relational and document-oriented storage.",
        items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
    },
    {
        id: "tools",
        label: "TOOLS",
        blurb: "Everyday engineering environment.",
        items: ["Git", "GitHub", "GitLab", "VS Code", "Docker"],
    },
];

export const STATUS = {
    COMPLETED: { label: "COMPLETED", cls: "text-cy border-cy/40 bg-cy/10" },
    IN_DEVELOPMENT: { label: "IN DEVELOPMENT", cls: "text-viol border-viol/40 bg-viol/10" },
    PLANNED: { label: "PLANNED", cls: "text-dim border-line bg-elev" },
};

export const projects = [
    {
        id: "veritrust",
        name: "VeriTrust AI Framework",
        category: "AI × BLOCKCHAIN × FULL STACK",
        status: "IN_DEVELOPMENT",
        glyph: "VT",
        accent: "cy",
        tagline: "A modular Trust Intelligence Platform for high-risk document analysis and decision support — beginning with insurance policies, designed for future expansion.",
        problem:
            "High-risk documents such as insurance policies are dense, difficult to interpret, and hard to trust at a glance. Readers struggle to understand clauses, assess risk, and verify that a document has not been altered.",
        solution:
            "A modular pipeline that ingests a document, understands it with AI, explains clause-level risk, produces a transparent trust index, and anchors verification on-chain so every analysis leaves an immutable audit trail.",
        features: [
            "Authentication with JWT and role-based access control",
            "Document upload with OCR extraction",
            "AI document understanding with explainable clause analysis",
            "Risk scoring, trust index and recommendations",
            "Blockchain verification via SHA-256 document hashing on Ethereum Sepolia",
            "Dashboard analytics for reviewed documents",
        ],
        architecture: [
            "Authentication", "Document Upload", "OCR", "AI Understanding", "Explainable AI",
            "Clause Analysis", "Risk Score", "Trust Index", "Recommendations",
            "Blockchain Verification", "Immutable Audit Trail", "Dashboard Analytics",
        ],
        stack: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "PostgreSQL", "FAISS", "OCR", "LangChain", "RAG", "Gemini", "Ollama", "Solidity", "Hardhat", "Ethereum Sepolia", "JWT", "RBAC", "Docker"],
        decisions: [
            "Modular pipeline so each stage — OCR, analysis, scoring, verification — can be improved or replaced independently.",
            "LLM-agnostic design: runs against hosted Gemini or local models through Ollama.",
            "SHA-256 document hashing with on-chain timestamp metadata for tamper-evident verification.",
        ],
        currentStatus: "In development — the pipeline is being implemented module by module.",
        verification:
            "Architecture is designed; implementation is in progress. No production deployment, users, or accuracy claims are made.",
    },
    {
        id: "nyay-ai",
        name: "Nyay AI",
        category: "AI APPLICATION / NLP",
        status: "COMPLETED",
        glyph: "NY",
        accent: "volt",
        tagline: "A conversational AI application that answers questions about Indian law while preserving conversational context.",
        problem:
            "Legal information in India is difficult for non-lawyers to navigate — statutes and legal language are dense and inaccessible.",
        solution:
            "A conversational interface powered by a large language model that answers legal questions in plain language and maintains context across a conversation.",
        features: [
            "Conversational question answering on Indian law",
            "Context retention across multi-turn dialogue",
            "Flask-served inference backend",
        ],
        architecture: ["User Query", "Conversation Context", "LLaMA 3.1 8B Inference", "Flask API", "Response"],
        stack: ["Python", "Flask", "LLaMA 3.1 8B", "LLM", "NLP"],
        decisions: [
            "Chose a compact open model (LLaMA 3.1 8B) to keep the system self-hostable.",
            "Session-level context handling for follow-up questions.",
        ],
        currentStatus: "Completed as a technical project.",
        verification:
            "Presented as an AI application / technical project. It does not provide legal advice.",
    },
    {
        id: "resume-analyzer",
        name: "AI Resume Analyzer",
        category: "AI / ML — NLP",
        status: "COMPLETED",
        glyph: "RA",
        accent: "cy",
        tagline: "An intelligent resume–job matching system that compares resumes against job descriptions and surfaces matching and missing skills.",
        problem:
            "Screening a resume against a job description manually is slow and inconsistent — key skill gaps are easy to miss.",
        solution:
            "Semantic analysis with a RoBERTa-based NLP pipeline that matches resume content against job descriptions and reports matching and missing skills.",
        features: [
            "Resume vs. job-description semantic comparison",
            "Matching-skill and missing-skill identification",
            "NLP-based understanding beyond keyword overlap",
        ],
        architecture: ["Resume Input", "Job Description", "RoBERTa Embeddings", "Semantic Matching", "Skill Gap Report"],
        stack: ["Python", "RoBERTa", "NLP", "Machine Learning"],
        decisions: [
            "Transformer embeddings instead of keyword matching to capture semantic similarity.",
        ],
        currentStatus: "Completed as a technical project.",
        verification: "No accuracy or production-performance metrics are claimed.",
    },
    {
        id: "smart-gallery",
        name: "Smart Gallery",
        category: "AI / COMPUTER VISION",
        status: "COMPLETED",
        glyph: "SG",
        accent: "volt",
        tagline: "An AI-based image organization system that identifies and groups images containing the same person.",
        problem:
            "Large personal photo collections are unstructured — finding every photo of one person means manual searching.",
        solution:
            "Face-recognition pipeline that detects faces across the collection and automatically groups images by the person they contain.",
        features: [
            "Automatic face detection across uploaded images",
            "Grouping of images by identified person",
            "Django web interface with database-backed storage",
        ],
        architecture: ["Image Upload", "Face Detection", "Face Encoding", "Person Clustering", "Grouped Gallery"],
        stack: ["Python", "Django", "Face Recognition", "Database"],
        decisions: [
            "Face encodings stored for incremental grouping as new images arrive.",
        ],
        currentStatus: "Completed as a technical project.",
        verification: "Functionality limited to verified face-recognition grouping.",
    },
    {
        id: "chat-with-pdf",
        name: "Chat with PDF Notes",
        category: "AI / RAG",
        status: "COMPLETED",
        glyph: "PDF",
        accent: "cy",
        tagline: "A RAG-based system that lets you upload a PDF and ask questions about its content.",
        problem:
            "Long PDFs — notes, papers, documentation — are slow to search; readers want direct answers grounded in the document.",
        solution:
            "Retrieval-augmented generation: the PDF is chunked and embedded, relevant passages are retrieved for each question, and an LLM answers grounded in those passages.",
        features: [
            "PDF upload and text extraction",
            "Embedding-based passage retrieval",
            "Grounded question answering over document content",
        ],
        architecture: ["PDF Upload", "Chunking", "Embeddings", "Vector Retrieval", "LLM Answer"],
        stack: ["Python", "Flask", "Embeddings", "LLM", "RAG"],
        decisions: [
            "Retrieval grounding to keep answers tied to the actual document content.",
        ],
        currentStatus: "Completed as a technical project.",
        verification: "No performance or accuracy metrics are claimed.",
    },
];

export const projectArchive = [
    { name: "Banking System", tech: "Python · Django", note: "Accounts, deposits, withdrawals, transaction history" },
    { name: "COVID-19 Hospital Management", tech: "Python · Django", note: "Admissions, bed availability, patient status" },
    { name: "Blog Website", tech: "Python · Django", note: "Write, publish and read posts" },
    { name: "Online Tiffin Service", tech: "Python · Django", note: "Subscriptions, orders, delivery scheduling" },
    { name: "User Management", tech: "Python · Django", note: "Signup, login, profiles, Admin/User roles" },
    { name: "Bookshop", tech: "Python · Django", note: "Browse, search, cart, checkout flow" },
    { name: "Hotel Booking", tech: "PHP · Laravel", note: "Room search, date availability, reservations" },
    { name: "Doctor Appointment System", tech: "PHP · MySQL", note: "Doctor availability, slots, schedules" },
    { name: "Online Voting System", tech: "PHP · MySQL", note: "Ballot workflow" },
    { name: "Home Rental", tech: "PHP · MySQL", note: "Listings, search, filter by location and price" },
    { name: "Library Management + Barcode", tech: "PHP · MySQL", note: "Issue/return, due dates, barcode identification" },
    { name: "Vehicle Breakdown Assistance", tech: "PHP · MySQL", note: "Breakdown requests, mechanic connection" },
    { name: "Lawyer Management System", tech: "PHP · MySQL", note: "Clients, cases, appointments, dashboard" },
];

export const experience = [
    {
        role: "Web3 & Blockchain Development Trainee",
        org: "MIT World Peace University (MIT-WPU)",
        period: "Aug 2025 — Present",
        location: "Pune, Maharashtra",
        kind: "Trainee / Academic Development",
        areas: [
            "Blockchain architecture", "Decentralized identity", "Smart contracts", "Ethereum",
            "Solidity", "EVM concepts", "Web3 application workflows", "DeFi concepts",
            "Cryptographic hashing", "Blockchain-based verification",
            "Frontend integration with decentralized technologies",
        ],
    },
];

export const education = [
    {
        degree: "M.Sc. Blockchain Technology",
        institution: "MIT World Peace University (MIT-WPU)",
        place: "Pune, Maharashtra",
        period: "2025 — Present",
    },
    {
        degree: "BBA (Computer Applications)",
        institution: "Savitribai Phule Pune University",
        place: "Pune, Maharashtra",
        period: "2022 — 2025",
        detail: "CGPA 8.26 / 10",
    },
];

export const achievements = [
    {
        title: "WINNER — E.D.G.E. Mini Project",
        org: "MIT-WPU",
        description:
            "Blockchain-based identity management solution for secure digital identity sharing.",
    },
];

export const certificates = [
    {
        id: "klic",
        title: "KLiC Certificate in AI-ML Basics",
        issuer: "MKCL / KLiC",
        date: "21 January 2025",
        details: ["90% marks", "60-hour course", "5 AI-ML mini-projects"],
    },
    {
        id: "forage",
        title: "Advanced Software Engineering Job Simulation",
        issuer: "Forage",
        date: "30 November 2025",
        details: ["Advanced Data Structures", "Software Architecture", "Relational Database Design", "Data Munging"],
    },
    {
        id: "w3rust",
        title: "Web3 & Rust Foundations",
        issuer: "Lampros DAO · through Xcan",
        date: "13 April 2026",
        details: ["Certificate No. W3B-141"],
    },
];

export const buildLog = [
    {
        status: "BUILDING",
        title: "VeriTrust AI Framework",
        note: "Implementing the trust-intelligence pipeline — OCR, RAG clause analysis, trust index, blockchain verification.",
        date: "2026 — ongoing",
    },
    {
        status: "EXPERIMENTING",
        title: "Duality AI — Offroad Semantic Scene Segmentation",
        note: "Challenge exploration: synthetic desert-environment data, semantic segmentation, IoU evaluation, loss graphs and failure-case analysis.",
        date: "Challenge / technical event",
    },
    {
        status: "LEARNING",
        title: "Web3 & Rust Foundations",
        note: "Lampros DAO via Xcan — certificate W3B-141.",
        date: "Apr 2026",
    },
    {
        status: "LEARNING",
        title: "Advanced Software Engineering Job Simulation",
        note: "Forage — data structures, architecture, relational database design, data munging.",
        date: "Nov 2025",
    },
    {
        status: "LEARNING",
        title: "KLiC AI-ML Basics",
        note: "MKCL — 60-hour course, 5 AI-ML mini-projects, 90% marks.",
        date: "Jan 2025",
    },
];

export const careerTarget = {
    areas: ["Frontend Engineering", "Full Stack Development", "Blockchain / Web3", "Software Engineering", "AI / ML Applications"],
    location: "Bengaluru / Bangalore",
    status: "Open to internships, placements and entry-level software opportunities",
};

export const marqueeItems = [
    "FRONTEND ENGINEERING",
    "FULL STACK DEVELOPMENT",
    "BLOCKCHAIN / WEB3",
    "AI / ML APPLICATIONS",
    "UI / UX",
    "SMART CONTRACTS",
    "LARGE LANGUAGE MODELS",
    "BUILD → LEARN → SHIP",
];

// // This file is deprecated - projects are now loaded from projects.json
// // Import projects.json instead: import projectsData from './projects.json'

// export const ProjectsList = {
//   projects: [
//     {
//       name: "Enterprise RAG Chatbot for Financial Document Analysis",
//       description: "AI-based chatbot combining Retrieval-Augmented Generation (RAG) with financial analysis tools. Users upload documents (PDF, DOCX, TXT, CSV), and the system performs hybrid search (semantic + keyword), calculates investment metrics (IRR, NPV, fund KPIs), conducts risk analysis, and generates comprehensive due diligence reports with audit trails.",
//       intro: "Wealth management and financial analysis AI assistant that processes documents, performs calculations, and delivers intelligent insights through conversational interface. Combines document retrieval with advanced financial tools to support investment decisions and due diligence processes.",
//       problem_solved: "Financial analysis requires reviewing lengthy reports and complex spreadsheets—a time-consuming process prone to human error. This system automates document reading, duplicate detection, metric calculation (IRR, NPV, TVPI, DPI), risk scanning, stress testing, and generates analysis summaries. Saves professionals time, reduces errors, and maintains accurate audit trails for investment decisions.",
//       technologies: [
//         "Python",
//         "FastAPI",
//         "Streamlit",
//         "Groq API (LLaMA 3 70B)",
//         "Pinecone Vector Database",
//         "Sentence Transformers (all-MiniLM-L6-v2)",
//         "Hybrid Search (Semantic + BM25)",
//         "PyPDF2/PyMuPDF",
//         "NumPy",
//         "Pandas",
//         "Scikit-learn",
//         "Pydantic"
//       ],
//       technical_details: "FastAPI backend with Streamlit frontend featuring hybrid retrieval combining 384-dim dense embeddings with sparse TF-IDF vectors. **Retrieval System:** HybridRetriever with Pinecone and BM25 keyword scoring. **Financial Tools:** FundKPIExtractor, FinancialTools, AdvancedToolExecutor for IRR, NPV, TVPI, DPI, stress tests. **Document Processing:** DocumentChunker and DocumentChunkingPipeline for cleaning, sentence splitting, chunk formation. **Due Diligence:** DDQGenerator creates questionnaires from text and identifies missing info. **Benchmark Analysis:** benchmark_comparator compares fund performance against peers. **Risk Scanning:** scan_risks identifies operational, liquidity, regulatory, ESG risks. **Stress Testing:** run_stress_tests simulates market changes using Monte Carlo. **Session Management:** ConversationMemory maintains chat history across sessions. **Audit Logs:** Upload and chat logs with timestamps for traceability. **Validation:** InputGuard checks inappropriate content. Features LLM-based query routing, conversation memory, namespace-based Pinecone organization with configurable semantic/lexical alpha weighting."
//     // githubUrl: "https://github.com/FawwazRaza/QueryClip",
//       // liveLink: "https://queryclip-demo.vercel.app", // Optional
//       // image: "/images/queryclip.png", // Optional local image
//     },
//     {
//       name: "Open Journal System (OJS)",
//       description:
//         "The Open Journal System includes complete editorial and publishing workflows.\n- **User Roles and Dashboards:** Each role (admin, editor, reviewer, author, proofreader, and publisher) has its own dashboard (e.g., `admin-dashboard.php`, `reviewer-dashboard.php`, `publisher-dashboard.php`, `proofreading-dashboard.php`)\n- **Submission and Review Flow:** Authors upload manuscripts through `submit-article.php`. Editors assign reviewers using files such as `assign-reviewers.php` and `assign-third-reviewer.php`. Reviews are tracked with `review-article.php` and `view-review-feedback.php`\n- **Editorial Workflow:** Editors manage article stages through `setup_editorial_workflow.php` and `editorial-workflow-dashboard.php`. Decisions are saved in `editorial-decisions.php`\n- **Proofreading and Blind Review:** The system supports blind peer review using `setup_blind_review.php` and tracks proofreading through `start-proofreading.php`. Anonymization and reviewer logs are handled by scripts like `fix_anonymization_log.php`\n- **Email Notifications:** Automatic messages are managed by files such as `notifications.php`, `EMAIL_NOTIFICATION_GUIDE.md`, and `AUTOMATED_NOTIFICATIONS_IMPLEMENTATION_SUMMARY.md`. These send updates about review status, deadlines, and editor comments\n- **Database and Data Management:** Database connection is configured in `config/database.php`. Table creation and demo data are managed with SQL files such as `ojs_complete_schema_with_data.sql` and `initialize-data.php`\n- **OAI-PMH Metadata Export:** Implemented in `oai-pmh.php`, it allows the journal’s article metadata to be shared with Google Scholar and indexing services\n- **Security and Verification:** Users must verify emails using `verify.php`. Blind review settings and anonymization ensure reviewer privacy\n- **Statistics and Reports:** System statistics and editorial performance reports are available through `statistics.php` and `reports.php`\n- **Additional Features:** Includes sample data scripts (`test_add_sample_articles.php`), due date checkers, audit logs, and workflow testing files like `EDITORIAL_WORKFLOW_TESTING_GUIDE.md`.",
//       intro: "This is a web-based platform used to manage and publish academic journals. It allows authors to submit research articles, reviewers to give feedback, editors to manage the review process, and publishers to publish issues. The system provides all steps of journal management in one place — from submission to publication.",
//       problem_solved: "Managing research papers and reviews by email or manually can cause confusion, delays, and errors. This system solves these problems by creating one online space where all roles — author, reviewer, editor, and publisher — can work together easily. It helps universities, publishers, and journals save time and maintain accurate records.",
//       technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "XAMPP (Apache + MySQL)", "Google OAuth"], 
//       technical_details: "### \n- **Functions Implemented:*\n    - `check_user_session()` → verifies active login session\n    - `doi-functions.php` → handles DOI generation for articles\n    - `metadata-functions.php` → manages article metadata fields\n    - `seo-functions.php` → improves visibility of published articles\n    - `stats-functions.php` → calculates submission and review statistics\n- **Database Tables:** Stored in `ojs_complete_schema.sql` including users, roles, articles, reviews, and decisions\n- **Automation:** Proofreading and reviewer assignment automation scripts (`auto_fix_editorial_office.php`, `fix_reviewer_users.php`)\n- **Logging and Audit Trails:** Logs stored in `/logs` and maintained with timestamp entries for transparency\n- **Localization Support:** Multi-language support using `/languages/en.php` and `/languages/ur.php`\n- **Email Handling:** Automatic verification and role-based notifications configured via SMTP settings in PHP\n- **OAI-PMH Protocol Support:** Implements standard Dublin Core metadata export for indexers\\n**Possible Future Additions:*\\n- Add plagiarism detection using an external API\n- Integrate AI-based reviewer recommendation using article keywords\n- Include ORCID verification for authors\n- Add PDF annotation for inline review comments\n- Expand dashboard analytics using charts (Chart.js or Recharts).",
//       // githubUrl: "https://github.com/FawwazRaza/QueryClip",
//       // liveLink: "https://queryclip-demo.vercel.app", // Optional
//       // image: "/images/queryclip.png", // Optional local image
//     },
//     {
//       name: "LiveKit Voice Agent – Outbound Call System",
//       description:
//         "- The system runs on **FastAPI** and connects with **Twilio** to place real phone calls.\n- The **voice agent** uses **LiveKit** for real-time audio streaming between the user and AI.\n- The backend manages calls through functions like `make_call()`, `hangup_call()`, and `end_call()`.\n- Speech is recognized using **Deepgram** (speech-to-text), and responses are generated using **Groq LLM**. The voice output is created with **ElevenLabs** (text-to-speech).\n- The `CallRequest` and `CallResponse` classes handle request and response data such as phone numbers, caller names, company details, and meeting objectives.\n- The agent personality, greeting, and instructions are set using environment variables (`AGENT_PERSONALITY`, `AGENT_GREETING`, etc.) so the assistant can behave differently for each use case.\n- The `fastapi_backend.py` file manages API routes like `/make_call`, `/health_check`, and `/get_config`.\n- Frontend (`test_frontend.html`) allows testing call initiation directly from a browser.\n- Additional functions like `get_stt_provider()`, `get_llm_provider()`, and `get_tts_provider()` help choose which service to use for speech, language, and audio generation.\n- The `close_agent_sessions()` function ends sessions to free system resources.\n- The backend supports authentication and session control using `LIVEKIT_API_KEY`, `TWILIO_AUTH_TOKEN`, and other secure environment variables.",
//       intro: "This project is a voice-based AI calling system that can make outbound phone calls using Twilio and LiveKit. The agent can speak, listen, and respond to users in real time using speech recognition, a language model, and text-to-speech. It acts like a virtual assistant that can start phone conversations and handle meeting or service calls automatically.",
//       problem_solved: "Businesses often spend time and money on manually making phone calls for reminders, confirmations, and customer support. This system solves that problem by allowing an AI agent to make these calls automatically, respond naturally, and handle basic conversations without human help.",
//       technologies: ["Python", "FastAPI", "Twilio API", "LiveKit", "Deepgram API", "Groq API", "ElevenLabs API", "Speech-to-Text"], 
//       technical_details: "### \n- **Voice Workflow:** Converts live user speech → text (Deepgram) → response (Groq LLM) → voice (ElevenLabs)\n- **Call Control Functions:*\n    - `make_outbound_call()` – Starts a new outbound phone call\n    - `hangup_call()` – Ends an ongoing call\n    - `end_call()` – Final cleanup of session and resources\n- **Session Management:*\n    - `close_agent_sessions()` ensures the LiveKit session ends safely after a call\n    - `get_livekit_api()` manages connection to LiveKit servers\n- **Environment Variables:** Control all API keys, call duration (`RESPONSE_TIMEOUT`), voice tone (`ELEVENLABS_VOICE_ID`), and chat memory (`MAX_CONVERSATION_HISTORY`)\n- **Health Monitoring:** `/health_check` route ensures the system and services are running properly\n- **Frontend Integration:*\n    - `FRONTEND_INTEGRATION_GUIDE.md` describes how to connect the browser interface to the backend\n    - The `test_frontend.html` file includes sample buttons to trigger a call\\n**Possible Future Additions:*\\n- Add **call transcription logs** for each conversation\n- Add **sentiment analysis** to detect customer mood\n- Allow **multi-language support** using translation APIs\n- Store call recordings securely in cloud storage\n- Add **analytics dashboard** for call tracking and performance.",
//       // githubUrl: "https://github.com/FawwazRaza/QueryClip",
//       // liveLink: "https://queryclip-demo.vercel.app", // Optional
//       // image: "/images/queryclip.png", // Optional local image
//     },
//     // {
//     //   name: "",
//     //   description:
//     //     "",
//     //   intro: "",
//     //   problem_solved: "",
//     //   technologies: [], 
//     //   technical_details: "",
//     //   // githubUrl: "https://github.com/FawwazRaza/QueryClip",
//     //   // liveLink: "https://queryclip-demo.vercel.app", // Optional
//     //   // image: "/images/queryclip.png", // Optional local image
//     // },

//     {
//       name: "QueryClip",
//       description:
//         "A RAG video chatbot to deliver accurate, context-aware answers. Users can upload videos, which are split into chunks and embedded into a vector database. When a question is asked, the chatbot retrieves relevant chunks using similarity search and generates response.",
//       intro: "AI-powered video analysis chatbot that understands and answers questions about video content using advanced RAG techniques.",
//       problem_solved: "Users struggled to find specific information within long video content, requiring manual scrubbing and watching entire videos.",
//       technologies: ["Python","Streamlit","Langchain","ChromaDB","Vector Databases","ngrok","FastAPI","Groq API","Speech-to-Text","Embedding Models","Semantic Search"],
//       githubUrl: "https://github.com/FawwazRaza/QueryClip",
//       // liveLink: "https://queryclip-demo.vercel.app", // Optional
//       // image: "/images/queryclip.png", // Optional local image
//     },
//     {
//       name: "DeepFetch – RAG-Based AI Chatbot",
//       description:
//         "DeepFetch reads and processes files like PDF, Word, and Markdown. It breaks the text into smaller parts and saves them in a database for quick search. When a user asks a question, the system finds the most related text pieces and sends them to an AI model called Mistral-7B. The model then generates a response using the document content and the question. The backend uses FastAPI to handle chatbot requests, and the frontend uses Streamlit for an easy-to-use web interface.",
//       intro: "DeepFetch is an AI chatbot that can answer questions using both stored documents and an AI language model. It understands the user’s query, finds useful information from documents, and then gives a clear and accurate answer. The chatbot is built to make information search easier and faster.",
//       problem_solved: "People often have large amounts of information stored in documents but find it hard to quickly get the right answers. This project solves that problem by allowing the chatbot to first search documents and then use AI to give direct, helpful replies.",
//       technologies: ["Python", "Streamlit", "Langchain", "ChromaDB", "Vector Databases", "FastAPI", "Embedding Models", "Semantic Search"],
//       githubUrl: "https://github.com/FawwazRaza/DeepFetch_RAG_chatbot",
//       // liveLink: "https://queryclip-demo.vercel.app", // Optional
//       // image: "/images/queryclip.png", // Optional local image
//     },
//     {
//       name: "Magnum-opsem",
//       description:
//         "Magnum-opsem is a cutting-edge e-commerce platform designed for unparalleled customization and seamless user experience. Built with React, SCSS, HTML, and other modern technologies, it offers dynamic features like location-based ordering, customizable headers and footers, and an intuitive product catalog.",
//       intro: "Feature-rich e-commerce platform with advanced customization capabilities and location-aware services.",
//       problem_solved: "Traditional e-commerce solutions lacked flexibility for businesses needing location-based features and extensive UI customization.",
//       technologies: [
//         "React JS",
//         "redux",
//         "material UI",
//         "Bootstrap",
//         "SCSS",
//         "HTML",
//         "Javascript",
//         "Express Js",
//         "Node Js",
//         "CSS",
//         "Git",
//         "GitHub",
//       ],
//       githubUrl: "https://github.com/FawwazRaza/magnum-opsem",
//     },
//     {
//       name: "Advanced E-commerce Product Recommendation Chatbot",
//       description:
//         " Implemented semantic search, NLP, and location-aware product recommendations for efficient product discovery.",
//       technologies: ["Python", "OpenAI API", "ChromaDB", "FastAPI", "NumPy", "SciPy", "Langchain", "Scikit-Learn"],
//       githubUrl: "https://github.com/FawwazRaza/AI-chatbot-integrated-in-ecommerce-website",
//     },
//     {
//       name: "Medical Conversation Analysis Tool",
//       description:
//       "This project provides a comprehensive suite of tools for processing and analyzing medical conversations between doctors and patients. It leverages cutting-edge natural language processing techniques to transcribe audio, classify speaker roles, and generate concise summaries.",
//       technologies: ["Python", "Hugging face models", "speaker classification","conversation summarization","medical conversations"],
//       githubUrl: "https://github.com/FawwazRaza/Medical-Conversation-Analysis-Tool",
//     },
//     {
//       name: "EcoCommute Carpooling Solution (Sustainable Transportation, Web Development)",
//       description:
//         "EcoCommute reduces parking, traffic, and carbon emissions in universities through a carpooling platform with driver/rider profiles, ride searches, and safety options.",
//       technologies: ["Django", "Python", "HTML", "CSS", "JavaScript", "SQLite3",],
//       githubUrl: "https://github.com/FawwazRaza/Eco_commute",
//     },
//     {
//       name: "AI Projects",
//       description:
//       "AI Projects repository! This repository serves as a collection of my latest AI-related projects, showcasing various techniques, models, and applications in artificial intelligence.",
//       technologies: [
//         "LLM chain",
//         "AI",
//         "ML",
//         "Python",
//         "Pandas",
//         "Numpy",
//         "Scikit-learn",
//         "Matplotib",
//         "Hugging Face",
//         "Open-Source Models",
//       ],
//       githubUrl: "https://github.com/FawwazRaza/AI-projects",
//     },
//     {
//       name: "Web-Development-Tasks",
//       description:
//         "My portfolio is a website built with React.js and Tailwind CSS, utilizing React Router v6 to enable easy access to multiple pages. It was designed and created entirely by myself, showcasing my skills and projects. The website is responsive and visually appealing, providing a user-friendly experience.",
//       technologies: ["React JS", "Tailwind CSS", "Git", "GitHub", "HTML","CSS","Javascript",],
//       githubUrl: "https://github.com/FawwazRaza/Web-Development-Tasks",
//     },
//     {
//       name: "Tetris game",
//       description:
//       "A feature-rich Tetris game implementation using ASP.NET, offering classic gameplay with modern twists and enhanced features.",
//       technologies: ["Assembly", "Assembly 8088",],
//       githubUrl: "https://github.com/FawwazRaza/Tetris-game-assembly-language-8088-architecture",
//     },
//     {
//       name: "Gari-Gator Website",
//       description:
//       "The E-Commerce Website project is a comprehensive online shopping platform designed to offer a seamless and dynamic shopping experience similar to major e-commerce sites like Amazon. Built with ASP.NET and C#, and using MySQL for database management, this platform supports features like product browsing, user authentication, shopping cart management, and order processing.",
//       technologies: ["HTML", "CSS", "JavaScript"],
//       githubUrl: "https://github.com/FawwazRaza/DB-lab/blob/main/DB%20lab%20(SQL)/DBLABPROJECT.zip",
//     },
//     {
//       name: "Dodge 'Em Game",
//       description:
//       "Welcome to Dodge 'Em Game! Experience the thrill of classic arcade gaming with Dodge 'Em, developed by Carla Meninsky in 1980. Control a brown car, navigate a maze, collect rewards, and avoid collisions with blue opponent cars. With progressive difficulty levels, strategic gameplay, and a nostalgic feel, Dodge 'Em promises endless fun and challenge. Relive the golden age of gaming and test your maneuvering skills in this timeless classic!",
//       technologies: ["C++"],
//       githubUrl: "https://github.com/FawwazRaza/Dodge-Em-Game-c-plus-plus",
//     },
//   ],
// };








export const ProjectsList = {
   projects:[
    {
      "name": "Enterprise RAG Chatbot for Financial Document Analysis",
      "description": "AI-based chatbot combining Retrieval-Augmented Generation (RAG) with financial analysis tools. Users upload documents (PDF, DOCX, TXT, CSV), and the system performs hybrid search (semantic + keyword), calculates investment metrics (IRR, NPV, fund KPIs), conducts risk analysis, and generates comprehensive due diligence reports with audit trails.",
      "intro": "Wealth management and financial analysis AI assistant that processes documents, performs calculations, and delivers intelligent insights through conversational interface. Combines document retrieval with advanced financial tools to support investment decisions and due diligence processes.",
      "problem_solved": "Financial analysis requires reviewing lengthy reports and complex spreadsheets—a time-consuming process prone to human error. This system automates document reading, duplicate detection, metric calculation (IRR, NPV, TVPI, DPI), risk scanning, stress testing, and generates analysis summaries. Saves professionals time, reduces errors, and maintains accurate audit trails for investment decisions.",
      "technologies": [
        "Python",
        "FastAPI",
        "Streamlit",
        "Groq API (LLaMA 3 70B)",
        "Pinecone Vector Database",
        "Sentence Transformers (all-MiniLM-L6-v2)",
        "Hybrid Search (Semantic + BM25)",
        "PyPDF2/PyMuPDF",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "Pydantic"
      ],
      "technical_details": "FastAPI backend with Streamlit frontend featuring hybrid retrieval combining 384-dim dense embeddings with sparse TF-IDF vectors. **Retrieval System:** HybridRetriever with Pinecone and BM25 keyword scoring. **Financial Tools:** FundKPIExtractor, FinancialTools, AdvancedToolExecutor for IRR, NPV, TVPI, DPI, stress tests. **Document Processing:** DocumentChunker and DocumentChunkingPipeline for cleaning, sentence splitting, chunk formation. **Due Diligence:** DDQGenerator creates questionnaires from text and identifies missing info. **Benchmark Analysis:** benchmark_comparator compares fund performance against peers. **Risk Scanning:** scan_risks identifies operational, liquidity, regulatory, ESG risks. **Stress Testing:** run_stress_tests simulates market changes using Monte Carlo. **Session Management:** ConversationMemory maintains chat history across sessions. **Audit Logs:** Upload and chat logs with timestamps for traceability. **Validation:** InputGuard checks inappropriate content. Features LLM-based query routing, conversation memory, namespace-based Pinecone organization with configurable semantic/lexical alpha weighting."
    },
    {
      "name": "Open Journal System (OJS)",
      "description": "A comprehensive web-based academic journal management and publishing platform that handles the complete lifecycle of scholarly article submission, peer review, and publication. Features role-based dashboards for admin, editor, reviewer, author, proofreader, and publisher. Includes submission workflow, reviewer assignment, blind peer review, editorial decisions, proofreading, and OAI-PMH metadata export for Google Scholar integration.",
      "intro": "Full-featured digital publishing platform designed for academic institutions and scholarly journals. Provides complete editorial workflow management with support for double-blind peer review, multi-role user management, automated notifications, and metadata harvesting for academic indexing services.",
      "problem_solved": "Managing research papers and reviews manually through email causes confusion, delays, and errors. This system creates a unified online workspace where authors, reviewers, editors, and publishers collaborate efficiently. Automates the entire peer review process from submission through publication, ensures reviewer-author anonymity, handles third reviewer assignment for conflicts, tracks article versions, manages DOI registration, and enables metadata export for academic indexing. Helps universities, publishers, and journals save time and maintain accurate records.",
      "technologies": [
        "PHP 7+",
        "MySQL/MariaDB",
        "Bootstrap 5",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Font Awesome",
        "jQuery",
        "XAMPP (Apache)",
        "Google OAuth 2.0",
        "OAI-PMH Protocol",
        "Dublin Core Metadata",
        "PHPMailer"
      ],
      "technical_details": "Built on PHP/MySQL stack with clean MVC-like architecture. **User Roles:** 9+ roles including Author, Reviewer, Editor, Section Editor, Editorial Staff, Copyeditor, Layout Editor, Proofreader, Publisher, Admin—each with dedicated dashboard. **Workflow Stages:** 13-stage process (submission → office_check → eic_appraisal → section_editor_assigned → reviewer_assignment → under_review → editorial_decision → revision → copyediting → layout → proofreading → ready_for_publication → published). **Functions:** check_user_session() for auth, doi-functions.php for DOI generation, metadata-functions.php for article metadata, seo-functions.php for visibility, stats-functions.php for analytics. **Database:** Tables in ojs_complete_schema.sql for users, roles, articles, reviews, decisions. **Automation:** Proofreading and reviewer assignment scripts (auto_fix_editorial_office.php, fix_reviewer_users.php). **Blind Review:** Double-blind peer review with anonymization logging and third-reviewer conflict resolution. **Email System:** Automatic verification and role-based notifications via SMTP (notifications.php, EMAIL_NOTIFICATION_GUIDE.md). **OAI-PMH:** Standard Dublin Core metadata export endpoint (oai-pmh.php) for Google Scholar/indexers. **Localization:** Multi-language support with RTL capability (/languages/en.php, /languages/ur.php). **Security:** Email verification (verify.php), audit trails with timestamp entries in /logs."
    },
    {
      "name": "LiveKit Voice Agent – Outbound Call System",
      "description": "Full-stack AI-powered outbound calling system using LiveKit and Twilio for automated business development calls. Features real-time voice conversations with AI agents that introduce services, explore collaboration opportunities, and schedule meetings. Includes speech recognition (Deepgram), LLM responses (Groq Llama3-70B), and text-to-speech (ElevenLabs) with customizable agent personalities.",
      "intro": "Voice-based AI calling system that makes outbound phone calls using Twilio and LiveKit. The agent speaks, listens, and responds to users in real time using speech recognition, language models, and text-to-speech. Acts as a virtual assistant handling meeting or service calls automatically with natural conversation flow.",
      "problem_solved": "Businesses spend significant time and money on manual cold calling and business development outreach—a process that is time-consuming, inconsistent, and expensive. This system automates outbound calls by deploying AI agents that make professional calls, introduce company services, understand prospect needs, and schedule follow-up meetings while maintaining natural conversation flow and professional rapport. Enables 24/7 availability without human intervention.",
      "technologies": [
        "Python",
        "FastAPI",
        "React.js",
        "Tailwind CSS",
        "Twilio API",
        "LiveKit SDK",
        "Deepgram (Speech-to-Text)",
        "Groq API (Llama3-70B)",
        "ElevenLabs (Text-to-Speech)",
        "Silero VAD",
        "WebSocket",
        "Axios",
        "Docker"
      ],
      "technical_details": "Three-layer architecture: (1) **LiveKit Voice Agent** with noise cancellation, VAD, and dynamic conversation management using Deepgram STT, Groq LLM (Llama3-70B), and ElevenLabs TTS; (2) **FastAPI Backend** (fastapi_backend.py) for call dispatch, LiveKit room coordination, and SIP trunk integration with routes like /make_call, /health_check, /get_config; (3) **React Frontend** with Tailwind styling, persona presets, and call tracking (test_frontend.html). **Voice Workflow:** Converts live speech → text (Deepgram) → response (Groq LLM) → voice (ElevenLabs). **Call Control:** Functions include make_outbound_call(), hangup_call(), end_call(), close_agent_sessions() for session cleanup. **Session Management:** get_livekit_api() manages LiveKit server connections. **Configuration:** Environment variables control API keys, call duration (RESPONSE_TIMEOUT), voice tone (ELEVENLABS_VOICE_ID), agent personality (AGENT_PERSONALITY, AGENT_GREETING), and chat memory (MAX_CONVERSATION_HISTORY). **Provider Selection:** Functions get_stt_provider(), get_llm_provider(), get_tts_provider() allow service switching. **Frontend Integration:** FRONTEND_INTEGRATION_GUIDE.md describes browser-to-backend connection. Supports dynamic persona customization and environment-based provider switching for flexible deployment."
    },
    {
      "name": "QueryClip",
      "description": "AI-powered RAG video chatbot that understands and answers questions about video content. Users upload videos which are transcribed using Whisper, split into chunks with timestamps, embedded into ChromaDB vector database, and queried using semantic search. When questions are asked, relevant chunks are retrieved and AI generates context-aware responses with timestamp references.",
      "intro": "Video analysis chatbot enabling users to upload videos and instantly query content through natural language. Automatically transcribes spoken content, processes it into searchable chunks, and uses AI to provide accurate contextual answers based on video content with timestamp navigation.",
      "problem_solved": "Finding specific information within long video content requires manual scrubbing and watching entire videos—a time-consuming and frustrating process. QueryClip eliminates this by making video content instantly searchable. Users simply ask questions in natural language and receive accurate answers with timestamps, making video content accessible and searchable without watching everything.",
      "technologies": [
        "Python",
        "OpenAI Whisper (Speech-to-Text)",
        "ChromaDB (Vector Database)",
        "Sentence Transformers (all-MiniLM-L6-v2)",
        "Groq LLM API (deepseek-r1-distill-llama-70b)",
        "FastAPI",
        "Streamlit",
        "LangChain",
        "PyTorch",
        "MoviePy",
        "Pydantic",
        "Ngrok"
      ],
      "technical_details": "RAG pipeline with 7 stages: (1) **Transcription:** Whisper extracts timestamped text from MP4 audio with configurable model sizes; (2) **Chunking:** LangChain RecursiveCharacterTextSplitter (500 chars, 100 overlap) preserves timestamp metadata; (3) **Embeddings:** sentence-transformers/all-MiniLM-L6-v2 generates 384-dim vectors; (4) **Storage:** ChromaDB persistent client for semantic search; (5) **Query Routing:** qwen-qwq-32b classifies queries (greeting/unsafe/bot) before RAG; (6) **Retrieval:** Top-k retrieval with cosine similarity; (7) **Generation:** deepseek-r1-distill-llama-70b generates responses with Server-Sent Events (SSE) streaming. **Frontend:** Streamlit UI with embedded video player that jumps to relevant timestamps based on retrieved chunks. **Backend:** FastAPI server with async endpoints for video upload, transcription processing, and chat interactions. Implements conversation context management and safety filtering.",
      "githubUrl": "https://github.com/FawwazRaza/QueryClip"
    },
    {
      "name": "DeepFetch – RAG-Based AI Chatbot",
      "description": "Retrieval-Augmented Generation chatbot that processes documents (PDF, Word, Markdown), stores them in ChromaDB vector database, and generates AI responses using Mistral-7B-Instruct model. Features document chunking, semantic search, FastAPI backend, and Streamlit frontend for interactive chat interface.",
      "intro": "AI chatbot combining document retrieval with generative AI to provide accurate context-aware responses. Reads and processes files, breaks text into searchable chunks, finds relevant information using semantic search, and generates clear answers using both document content and AI reasoning.",
      "problem_solved": "People have large amounts of information in documents but struggle to quickly find the right answers. Traditional search relies on exact keywords and fails with natural language queries. DeepFetch solves this by first searching documents semantically (by meaning, not just keywords), then using AI to generate direct helpful replies based on retrieved context. Makes information search faster and more accurate.",
      "technologies": [
        "Python",
        "FastAPI",
        "Streamlit",
        "ChromaDB",
        "Mistral-7B-Instruct (4-bit quantized)",
        "Sentence Transformers (all-MiniLM-L6-v2)",
        "Hugging Face Transformers",
        "PyTorch",
        "LangChain",
        "PyMuPDF",
        "python-docx",
        "Uvicorn"
      ],
      "technical_details": "Three-stage RAG pipeline: (1) **Document Processing** (document_processor.py): Extracts text from PDFs (PyMuPDF), Word documents (python-docx), and Markdown files, chunks text, generates 384-dim embeddings using all-MiniLM-L6-v2, stores in ChromaDB persistent collection; (2) **Retrieval** (retrieval.py): Performs semantic search on ChromaDB using cosine similarity to find most relevant document chunks for user queries; (3) **Response Generation** (response_generator.py): Uses Mistral-7B-Instruct with 4-bit quantization for efficient inference, combines retrieved context with query to generate accurate responses. **Backend** (test_backend.py): FastAPI with RESTful endpoints for document upload, query processing, health checks. **Frontend** (test_frontend.py): Streamlit chat interface with document upload widget, conversation history, and real-time response streaming. Uses Context API for state management, implements session tracking, supports multi-turn conversations with memory."
    },
    {
      "name": "Magnum-opsem",
      "description": "Dynamic and customizable e-commerce platform with location-based ordering, customizable UI (headers, footers, colors, logos, icons), comprehensive product catalog, admin dashboard, and real-time cart management. Built with React frontend, Express.js backend, and MySQL database with session storage for user preferences.",
      "intro": "Feature-rich e-commerce platform designed for unparalleled customization and seamless user experience. Offers dynamic features like location-based ordering, customizable headers and footers, intuitive product catalog, secure checkout, and comprehensive admin dashboard. Empowers businesses to create personalized shopping experiences.",
      "problem_solved": "Traditional e-commerce platforms lack flexibility for businesses needing location-based features and extensive UI customization. Magnum-opsem solves this by allowing businesses to dynamically modify every aspect of their storefront—colors, logos, icons, layout positioning—without coding. Enables location-based ordering with delivery/pickup options, real-time cart management with tax and delivery calculations, and seamless checkout experience while maintaining brand identity.",
      "technologies": [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "Material UI (MUI)",
        "Bootstrap 5",
        "SCSS",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Axios",
        "React Router",
        "js-cookie",
        "3d-react-carousal",
        "CORS",
        "body-parser"
      ],
      "technical_details": "Modern full-stack architecture: **Frontend** (fagex-co/src/): React SPA with Context API for global state management, React Router for navigation, js-cookie for persisting UI customizations, Material UI and SCSS for styling. Cookie-based dynamic component positioning enables live UI customization. **Backend** (my-express-api/): Express.js REST API with MySQL database integration for categories, products, orders, and users. CRUD operations with body-parser for JSON handling and CORS for cross-origin requests. **Features:** Session storage for location-based delivery preferences, protected admin routes with authentication, real-time shopping cart with automatic tax and delivery fee calculations, dynamic image sliders (3d-react-carousal), product catalog with category filtering. **Admin Dashboard:** Manages products, categories, orders, customizes storefront appearance (colors, logos, icons, headers, footers) with live preview. **Security:** Input validation, SQL injection prevention, secure session handling."
    },
    {
      "name": "Advanced E-commerce Product Recommendation Chatbot",
      "description": "RAG-based AI chatbot for e-commerce product discovery using semantic search with OpenAI embeddings. Features intelligent query processing with grammar correction, spelling fixes, keyword extraction, and location-aware recommendations. Stores product data in ChromaDB vector database for efficient similarity search.",
      "intro": "Intelligent conversational AI chatbot integrated into e-commerce platforms helping customers discover and search for products using natural language queries. Leverages OpenAI GPT models and embeddings to provide accurate product recommendations through semantic understanding rather than exact keyword matching.",
      "problem_solved": "Traditional e-commerce search relies on exact keyword matching which fails when customers describe products in natural language or make typos. Spelling mistakes, varied descriptions, and ambiguous queries lead to poor search results and lost sales. This chatbot solves these problems by understanding user intent through semantic search, automatically correcting spelling errors, extracting relevant keywords, and matching products based on meaning rather than exact words—significantly improving product discovery and customer experience.",
      "technologies": [
        "Python",
        "Streamlit",
        "OpenAI GPT-3.5/GPT-4",
        "OpenAI Embeddings (text-embedding-3-small)",
        "LangChain",
        "ChromaDB",
        "FastAPI",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "SciPy"
      ],
      "technical_details": "RAG architecture combining semantic search with LLM capabilities: **Document Processing:** Product data (names, descriptions, categories, prices) vectorized using text-embedding-3-small embeddings. **Vector Storage:** ChromaDB persistent client stores 384-dim product embeddings with metadata for efficient cosine similarity search. **Query Preprocessing:** User queries processed with GPT-3.5-turbo for spelling/grammar correction before embedding comparison (rag.py). **Semantic Search:** Retrieves top-k similar products using cosine similarity between query embedding and product embeddings (final_Chatbot.py). **Response Generation:** GPT models generate natural language responses with product recommendations based on retrieved results. **Conversational Interface:** Streamlit frontend (app.py) with chat history, product cards, and real-time responses. **Keyword Extraction:** LangChain-based keyword extraction improves search accuracy. **Location Awareness:** Filters products by availability in user's location. **Safety:** Input validation prevents inappropriate queries."
    },
    {
      "name": "Medical Conversation Analysis Tool",
      "description": "Comprehensive NLP-powered suite for processing and analyzing medical conversations between doctors and patients. Features automated audio transcription using OpenAI Whisper, speaker classification (AI-powered with GPT-3.5 and rule-based), conversation summarization using transformer models, and medical Named Entity Recognition using Hugging Face's Medical-NER model.",
      "intro": "Tool leveraging cutting-edge natural language processing techniques to transcribe audio recordings, classify speaker roles (doctor/patient), generate concise summaries of medical dialogues, and extract medical entities. Integrates multiple AI models for comprehensive medical conversation analysis and documentation.",
      "problem_solved": "Healthcare professionals face challenges in accurately and efficiently documenting patient conversations. Manual transcription is time-consuming, speaker identification is tedious, and extracting key medical information from long conversations is difficult. This tool streamlines medical documentation by automatically transcribing doctor-patient conversations, distinguishing between speakers, extracting key medical information (symptoms, diagnoses, medications), and creating summaries. Enhances patient record accuracy, supports medical research and analysis, improves healthcare provider training and education, and saves valuable clinical time.",
      "technologies": [
        "Python",
        "OpenAI Whisper",
        "OpenAI GPT-3.5",
        "Hugging Face Transformers",
        "NLTK",
        "spaCy",
        "BERT Extractive Summarizer",
        "Medical-NER (Clinical-AI-Apollo)",
        "DistilBART",
        "Google Colab"
      ],
      "technical_details": "Multi-stage NLP pipeline: (1) **Audio Transcription:** OpenAI Whisper model with configurable sizes (tiny, base, small, medium, large) converts medical audio recordings to text with timestamps; (2) **Speaker Classification:** Dual approach using AI-powered classification (GPT-3.5 analyzes context, medical terminology, question patterns) and rule-based classification (keyword detection for medical terms, pronoun analysis for patient language); (3) **Text Summarization:** Transformer models like DistilBART and BERT Extractive Summarizer generate concise conversation summaries highlighting key points; (4) **Medical Named Entity Recognition:** Hugging Face's Clinical-AI-Apollo/Medical-NER model identifies and extracts medical terms, symptoms, diagnoses, medications, and procedures. **Implementation:** Provided as Jupyter notebook designed for Google Colab execution with step-by-step instructions. **Preprocessing:** NLTK tokenization, stopword removal, text normalization. **Post-processing:** Entity aggregation, confidence scoring, conversation flow analysis."
    },
    {
      "name": "EcoCommute Carpooling Solution",
      "description": "Sustainable carpooling platform for university communities connecting drivers and riders to share rides. Features driver and rider profile creation with car details and preferences, ride search by location and schedule, booking system with seat management, mutual rating system, reward points for regular carpooling, and gender-specific ride options for safety.",
      "intro": "Eco-friendly ride-sharing solution helping university students and staff find and offer carpool opportunities. Web-based platform with intuitive interface, role-based access (Driver/Rider), ride matching, booking management, and community features designed specifically for campus transportation needs.",
      "problem_solved": "University communities face significant transportation challenges including limited parking spaces, traffic congestion during peak hours, high commuting costs for students, and environmental concerns from individual car usage. EcoCommute addresses these by reducing parking space requirements through shared rides, decreasing traffic congestion and carbon emissions, providing cost-effective transportation alternatives, fostering community connections among university members, and promoting sustainable transportation habits. Helps universities meet sustainability goals while improving student and staff quality of life.",
      "technologies": [
        "Django",
        "Python",
        "SQLite3",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "REST API"
      ],
      "technical_details": "Full-stack web application built with Django framework: **User Management:** Custom user authentication system with session-based auth, separate Driver and Rider profiles with distinct dashboards. **Database Models:** SQLite with Django ORM defining entities: Person (base user), Driver (car details, routes, schedules), Rider (location preferences, timing), Booking (ride requests, confirmations), Route (origin, destination, waypoints), Rating (mutual feedback). **Ride Operations:** Search functionality by location, car type, timing; booking system with real-time seat availability tracking; automatic matching based on route overlap. **Rating System:** Mutual rating after ride completion affects future matching; aggregate ratings displayed on profiles. **Safety Features:** Gender-specific ride options (female-only rides), user verification, emergency contact information. **Reward System:** Point-based rewards for regular carpooling encouraging sustained usage. **Frontend:** Responsive HTML templates with Bootstrap styling, JavaScript for dynamic interactions (real-time search, booking updates). **API:** RESTful endpoints for ride CRUD operations, booking management, user profile updates."
    },
    {
      "name": "AI Projects Repository",
      "description": "Comprehensive collection of AI and Machine Learning projects showcasing various techniques, models, and applications. Includes sentiment analysis, legal document summarization, medical transcription, complete ML pipelines, audio classification, neural networks for digit recognition and recipe prediction, spam detection, speech-to-text systems, and game AI with minimax algorithm.",
      "intro": "Portfolio repository serving as collection of latest AI-related projects demonstrating expertise across NLP, computer vision, audio processing, and classical machine learning. Each project includes complete implementations with documentation covering problem statement, approach, and results.",
      "problem_solved": "Demonstrates practical applications of AI/ML across diverse domains: sentiment analysis for social media monitoring, legal document summarization for law firms, medical transcription for healthcare documentation, spam detection for email security, speech recognition for accessibility, game AI for entertainment, and neural networks for image and pattern recognition. Provides reusable templates and pipelines for common AI tasks, showcases best practices in model training and deployment, and serves as learning resource for AI/ML practitioners.",
      "technologies": [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "NLTK",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Hugging Face Transformers",
        "OpenAI API",
        "Keras",
        "spaCy"
      ],
      "technical_details": "**Projects Included:** (1) **Sentiment Analysis NLP Model:** Text classification using NLTK, TF-IDF vectorization, supervised learning for positive/negative/neutral sentiment detection; (2) **Legal Document Summarizer:** Extractive and abstractive summarization using transformer models for lengthy legal texts; (3) **Medical Transcription & Symptom Detection:** Speech-to-text with medical entity extraction using spaCy and custom NER models; (4) **Complete ML Pipeline Template:** End-to-end pipeline covering data ingestion, preprocessing, feature engineering, model training, evaluation, deployment with modular structure; (5) **Audio Conversation Classifier:** Audio feature extraction (MFCC, spectrograms), CNN-based classification for conversation types; (6) **MNIST Digit Classifier Neural Network:** Convolutional neural network achieving 99%+ accuracy on handwritten digit recognition; (7) **Spam Email Classifier:** Naive Bayes and SVM models with text preprocessing and feature extraction; (8) **Recipe Prediction Neural Network:** Multi-class classification predicting recipes from ingredient lists; (9) **Speech to Text Transcription System:** Real-time audio transcription using deep learning models; (10) **Tic Tac Toe AI with Minimax:** Game AI implementing minimax algorithm with alpha-beta pruning for optimal gameplay. Each project includes Jupyter notebooks with detailed explanations, visualizations, and performance metrics."
    }
  ]
}



















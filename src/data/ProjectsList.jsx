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



















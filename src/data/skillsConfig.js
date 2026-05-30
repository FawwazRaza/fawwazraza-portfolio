import { getSkillLogo, cdn } from '../utils/logoLoader';

// ─── Core Skills: primary technologies for building systems ──
export const coreSkills = [
  { name: 'Python', icon: getSkillLogo('Python') },
  { name: 'JavaScript', icon: getSkillLogo('JavaScript') },
  { name: 'C++', icon: getSkillLogo('C++') },
  { name: 'SQL', icon: getSkillLogo('SQL') },
  { name: 'Django', icon: getSkillLogo('Django') },
  { name: 'FastAPI', icon: getSkillLogo('FastAPI') },
  { name: 'React', icon: getSkillLogo('React') },
  { name: 'Node.js', icon: getSkillLogo('Node.js', cdn('nodejs/nodejs-original.svg')) },
  { name: 'PostgreSQL', icon: getSkillLogo('PostgreSQL') },
  { name: 'REST APIs', icon: cdn('fastapi/fastapi-original.svg') },
  { name: 'Docker', icon: cdn('docker/docker-original.svg') },
  { name: 'Git', icon: cdn('git/git-original.svg') },
];

// ─── AI/ML & Tools: AI technologies and professional tools ──
export const toolsAndTech = [
  { name: 'LLMs', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg' },
  { name: 'RAG', icon: cdn('anaconda/anaconda-original.svg') },
  { name: 'LangChain', icon: getSkillLogo('LangChain') },
  { name: 'OpenAI', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg' },
  { name: 'AI Agents', icon: getSkillLogo('LangChain') },
  { name: 'NLP', icon: cdn('python/python-original.svg') },
  { name: 'Deep Learning', icon: cdn('pytorch/pytorch-original.svg') },
  { name: 'Machine Learning', icon: cdn('tensorflow/tensorflow-original.svg') },
  { name: 'Prompt Engineering', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg' },
  { name: 'MCP', icon: getSkillLogo('Model Context Protocol') },
  { name: 'Pinecone', icon: getSkillLogo('Pinecone') },
  { name: 'ChromaDB', icon: getSkillLogo('ChromaDB') },
  { name: 'Whisper', icon: getSkillLogo('Whisper') },
  { name: 'Deepgram', icon: getSkillLogo('Deepgram') },
  { name: 'ElevenLabs', icon: getSkillLogo('Eleven Labs') },
  { name: 'LiveKit', icon: cdn('nodejs/nodejs-original.svg') },
  { name: 'Twilio', icon: getSkillLogo('Twilio') },
  { name: 'OCR', icon: cdn('python/python-original.svg') },
  { name: 'WebSockets', icon: cdn('socketio/socketio-original.svg') },
  { name: 'JWT', icon: cdn('json/json-original.svg') },
  { name: 'Microservices', icon: cdn('docker/docker-original.svg') },
  { name: 'GitHub', icon: cdn('github/github-original.svg') },
  { name: 'Postman', icon: getSkillLogo('Postman') },
  { name: 'MySQL', icon: getSkillLogo('MySQL') },
];

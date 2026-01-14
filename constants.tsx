
import { Project, ExperienceItem } from './types';

export const TECH_STACK = [
  'Python', 'SQL', 'R', 'Excel/VBA', 'Tableau', 'PowerBI', 'Git', 'Pandas', 'NumPy', 'Scikit-Learn', 'Aladdin'
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Onboarding RAG Chatbot',
    description: 'Built a full-stack application that allows users to upload documents, which are automatically chunked and stored in a vector database for semantic search. Integrated an Ollama-hosted local LLM to enable users to ask questions and receive context-aware answers based on the uploaded content.',
    image: 'https://img.freepik.com/premium-vector/robot-chat-chat-bot-logo-modern-conversation-automatic-technology-logo-design-vector-template_148524-1362.jpg?semt=ais_hybrid&w=740',
    categories: ['AI', 'Python', 'Redis'],
    githubUrl: 'https://github.com/siraj-akmal/RAG-onboarding'
  },
  {
    id: '2',
    title: 'Boston Weather Prediction',
    description: 'We built a weather prediction tool using machine learning and time series models on four years of Boston weather data. An MLP classified rainy days with 83% accuracy, while AR/MA models forecasted monthly rainfall trends. We also created an interactive website to display our findings and visualizations.',
    image: 'https://res.cloudinary.com/simpleview/image/upload/v1699908801/clients/boston-redesign/6ETOS4g0_c4045e9b-d897-4012-8d4c-4ba218d7a389.jpg',
    categories: ['Machine Learning', 'Python', 'MLP'],
    githubUrl: 'https://weather-prediction-visuals.vercel.app/'
  },
  {
    id: '3',
    title: 'AWS Finnancial Metrics Dashboard',
    description: 'Built a full data pipeline on AWS to process and visualize financial metrics from SEC filings. Used Lambda functions for ETL, storing data in S3, and created a Streamlit dashboard for interactive data exploration and visualization.',
    image: 'https://compote.slate.com/images/926e5009-c10a-48fe-b90e-fa0760f82fcd.png?width=1200&rect=680x453&offset=0x30',
    categories: ['AWS', 'Python', 'Streamlit'],
    githubUrl: 'https://drive.google.com/file/d/1bSkJN9iD7Zmn94Hxpn-D5jrgc0GpS6Ol/view'
  },
  {
    id: '4',
    title: 'MLB Player Performance',
    description: 'I built an interactive dashboard to visualize MLB player stats from the 2022 season using Python, JavaScript, HTML, and CSS. Users can compare player performance to all-time records via a warped bar graph shaped like a baseball diamond, with features like player selection, custom profiles, and dropdown options.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Major_League_Baseball_logo.svg/1024px-Major_League_Baseball_logo.svg.png',
    categories: ['HTML', 'CSS', 'JavaScript', 'Python'],
    githubUrl: 'https://drive.google.com/file/d/1onZ1Rhpgwuzp8mC9aZQ9PkwuUCowRmD0/view'
  },
  {
    id: '5',
    title: 'NBA Salary Prediction',
    description: 'Developed an interactive dashboard to predict NBA player salaries using season statistics. Built four regression models with scikit-learn, visualized results with Plotly, and deployed the app using Dash and HTML. Included a salary calculator where users input stats to receive predictions from the best-performing model.',
    image: 'https://wallpapercat.com/w/full/c/f/b/210824-1920x1080-desktop-1080p-lebron-james-background-photo.jpg',
    categories: ['Machine Learning', 'Python'],
    githubUrl: 'https://drive.google.com/file/d/1hW6szHNDbxHf2Z-tHUzBBZ7v-3KouKGu/view'
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-br',
    role: 'Cross Functional Analyst',
    company: 'BlackRock',
    period: 'Aug 2025 — Present',
    duration: 'FULL-TIME',
    description: 'Collaborating with global business heads to evaluate risk management processes and identify control gaps.',
    skills: ['Python', 'Audit', 'Automation', 'AI'],
    isCurrent: true,
    type: 'work'
  },
  {
    id: 'exp-as',
    role: 'Investment Services Co-op',
    company: 'Arrowstreet Capital L.P.',
    period: 'Jul 2024 — Dec 2024',
    duration: 'CO-OP',
    description: 'Enhanced investment operations by automating high-volume cash break resolutions and vendor KPI reporting. Utilized Python and SQL to streamline data integration workflows and ensure the regulatory accuracy of institutional account reconciliations.',
    skills: ['Python', 'SQL', 'Reconciliation', 'Automation'],
    type: 'internship'
  },
  {
    id: 'exp-neu',
    role: 'AAHM Co-Chair',
    company: 'NEU Asian American Center',
    period: 'May 2023 — May 2024',
    duration: 'LEADERSHIP',
    description: 'Orchestrated large-scale university programming through strategic budget management and multi-organizational coordination. Managed complex event logistics, contract negotiations, and fund allocations to foster community engagement.',
    skills: ['Budget Management', 'Logistics', 'Negotiation', 'Coordination'],
    type: 'work'
  },
  {
    id: 'exp-man',
    role: 'Middle Office Analyst Co-op',
    company: 'Man Group',
    period: 'Jun 2023 — Dec 2023',
    duration: 'CO-OP',
    description: 'Optimized middle-office functions through automated FX trade reconciliation and systematic NAV calculations. Leveraged Python-based analysis to support multi-billion dollar fund merger and enhance historical stock loan fee modeling.',
    skills: ['Python', 'Reconciliation', 'NAV Calculation', 'Data Analysis'],
    type: 'internship'
  },
  {
    id: 'exp-grc',
    role: 'Insights Researcher',
    company: 'Global Research & Consulting',
    period: 'Sep 2022 — May 2024',
    duration: 'RESEARCH',
    description: 'Delivered strategic advisory and technical analysis for social impact organizations and NGOs. Contributed data-backed research on corporate sustainability and international healthcare economics to a broad professional audience.',
    skills: ['Strategic Advisory', 'Tech Analysis', 'Sustainability', 'Economics'],
    type: 'work'
  }
];

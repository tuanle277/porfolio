// FILE: src/data/portfolioData.js
// Centralized data for the portfolio

export const personalInfo = {
  name: "(Kevin) Le",
  title: "BS/MS Computer Science Student | ML & Full-Stack Developer",
  location: "St. Louis, MO",
  email: "mtuan.le2024@gmail.com",
  githubUrl: "https://github.com/tuanle277",
  linkedinUrl: "https://www.linkedin.com/in/tuanle277/",
  resumeUrl: "/KevinLe-Resume-2025.pdf",
};

export const projects = [
  {
    id: "proj-meet-middle",
    title: "Meet in the Middle (Independent)",
    description:
      "Designed dynamic backend (Supabase/PostgreSQL) for real-time data sync. Developed responsive React Native frontend (NativeWind). Integrated Google Maps API for trip planning and Supabase Realtime/Socket.IO for collaboration.",
    tags: [
      "React Native",
      "Supabase",
      "PostgreSQL",
      "Google Maps API",
      "Socket.IO",
      "NativeWind",
      "Mobile App",
      "Real-time",
    ],
    liveUrl: "#",
    repoUrl: "#",
    imageUrl: "https://placehold.co/600x400/a3bffa/ffffff?text=Meet+In+Middle",
    imagesUrl: [
      "/images/MITM/screenshot_1.PNG",
      "/images/MITM/screenshot_2.PNG",
      "/images/MITM/screenshot_3.PNG",
      "/images/MITM/screenshot_4.PNG",
      "/images/MITM/screenshot_5.PNG",
      "/images/MITM/screenshot_6.PNG",
      "/images/MITM/screenshot_7.PNG",
      "/images/MITM/screenshot_8.PNG",
      "/images/MITM/screenshot_9.PNG",
    ],
    date: "Jan 2025 – Present",
  },
  {
    id: "proj-board",
    title: "Project Board Website (Independent)",
    description:
      "Built a full-stack platform (React, Django, MongoDB) enabling project sharing for 500+ users. Implemented interactive task management and real-time chat/calendar tools using Socket.IO.",
    tags: [
      "React",
      "Django",
      "MongoDB",
      "Socket.IO",
      "Full-Stack",
      "Web App",
      "Collaboration",
    ],
    liveUrl: "#",
    repoUrl: "https://github.com/tuanle277",
    imageUrl: "https://placehold.co/600x400/facc15/000000?text=Project+Board",
    date: "Sep 2024 – Present",
  },
  {
    id: "proj-hypergraph",
    title: "Hypergraph Disease Prediction",
    description:
      "Designed intra-patient hypergraph embedding system (self-supervised/contrastive learning). Built pipeline integrating GATs/Hypergraph Convolution Nets for multi-modal EHR data. Trained on Google Cloud TPU.",
    tags: [
      "Hypergraphs",
      "GNN",
      "PyTorch Geometric",
      "DGL",
      "Self-Supervised Learning",
      "Contrastive Learning",
      "EHR",
      "GCP",
      "TPU",
      "Machine Learning",
    ],
    liveUrl: "#",
    repoUrl: "#",
    imageUrl: "https://placehold.co/600x400/4ade80/ffffff?text=Hypergraph+ML",
    date: "July 2024 – Present", // Added date from CV
  },
  // Added projects from CV/Resume
  {
    id: "proj-fullstack-firebase",
    title: "Full-Stack Web App (Firebase)",
    description:
      "Built dynamic backend with Firebase Firestore (>1k docs, nested collections). Improved UI responsiveness (45%) using Material-UI & Firebase async API. Secured with Firebase Auth/Firestore rules (GDPR).",
    tags: [
      "Firebase",
      "Firestore",
      "Material-UI",
      "React",
      "Full-Stack",
      "Web App",
      "Authentication",
    ],
    liveUrl: "#",
    repoUrl: "#",
    imageUrl: "https://placehold.co/600x400/fca5a5/ffffff?text=Firebase+App",
    date: "Sep 2024 – Present", // Added date from Resume
  },
  {
    id: "proj-robotics",
    title: "Robotics Firmware Pipeline",
    description:
      "Designed interaction between sensors, cameras, motors using ROS2. Developed Spatial Mapping API within a ROS2 node for dynamic coordination. Optimized real-time communication.",
    tags: ["Robotics", "ROS2", "Firmware", "C++", "Python", "Spatial Mapping"],
    liveUrl: "#",
    repoUrl: "#",
    imageUrl: "https://placehold.co/600x400/93c5fd/ffffff?text=ROS2+Pipeline",
    date: "Sep 2024 – Present", // Added date from CV
  },
  {
    id: "proj-vietmed",
    title: "Vietmed (Vietnamese NLP Benchmark)",
    description:
      "Fine-tuned PhoBert (PyTorch/HF) achieving 90% F1 on SQUAD v2.0. Fine-tuned BartPho (TF/Keras) surpassing SOTA by 10% on custom Q&A. Processed/converted >25k Vietnamese ASR entries using Pandas, NLTK, GPT-3, Airflow.",
    tags: [
      "NLP",
      "Vietnamese",
      "PhoBert",
      "BartPho",
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "Transformers",
      "ASR",
      "GPT-3",
      "Airflow",
      "Fine-tuning",
    ],
    liveUrl: "#",
    repoUrl: "#", // Link to project/paper if available
    imageUrl: "https://placehold.co/600x400/d8b4fe/ffffff?text=Vietmed+NLP",
    date: "Oct 2023 – Jan 2024", // Added date from CV
  },
];

// You can add more data sections here as needed, e.g.:
export const skills = {
  languages: ["Python", "JavaScript", "Java", "Swift", "C++", "Go", "Rust"],
  ml_ai: [
    "TensorFlow",
    "PyTorch",
    "scikit-learn",
    "Keras",
    "Hugging Face",
    "NLP",
    "TensorFlow",
    "PyTorch",
    "scikit-learn",
    "Keras",
    "Hugging Face Transformers",
    "BERT",
    "GPT-3.5/4",
    "Deep Learning",
    "NLP",
    "GNNs (PyG, DGL)",
    "Contrastive Learning",
    "Computer Vision (implied)",
    "Data Augmentation",
    "Feature Selection",
    "Hyperparameter Tuning (Optuna, Grid/RandomizedSearch)",
    "ML Fairness/Bias (SHAP/LIME)",
    "Recommendation Systems",
    "CUDA C++ (Experience)",
    "Nvidia CUTLASS (Experience)",
    "Trax",
  ],
  data_eng: [
    "ETL",
    "Apache Spark",
    "Apache Kafka",
    "Apache Airflow",
    "Databases (MySQL, PostgreSQL, MongoDB, Supabase)",
    "Polars",
    "Pandas",
    "NumPy",
  ],
  full_stack: [
    "React",
    "Angular",
    "Vue.js",
    "Node.js",
    "Express",
    "Django",
    "Docker",
    "Kubernetes",
    "Git",
    "Linux",
  ],
  // Add more categories or specific skills
};

// Expanded experience section
export const experience = [
  {
    id: "exp-hyson",
    role: "Machine Learning Engineer",
    company: "Hy Son Lab (WashU)",
    duration: "Mar 2024 – Present",
    description:
      "Spearheaded research in augmentation-free contrastive learning for GNNs. Engineered pre-training modules (PyG, DGL) improving link prediction by 10%. Designed web scraping solutions (BeautifulSoup4, Scrapy, Selenium, Puppeteer).",
    tags: [
      "GNN",
      "Contrastive Learning",
      "PyTorch Geometric",
      "DGL",
      "Web Scraping",
      "Feature Engineering",
      "BERT",
      "Optuna",
      "Research",
    ],
  },
  {
    id: "exp-charoenphon",
    role: "Machine Learning Engineer",
    company: "Dr. Sutthirut Charoenphon (DePauw)",
    duration: "Dec 2023 – Mar 2024",
    description:
      "Architected sequential DNN for real-time recommendation (90% accuracy) using TF/Keras/NumPy/Pandas. Developed data pipeline (Python, Polars, Airflow, Kafka).",
    tags: [
      "Recommendation Systems",
      "Deep Learning",
      "TensorFlow",
      "Keras",
      "Data Pipeline",
      "Airflow",
      "Kafka",
      "Angular",
      "Docker",
      "Flask",
      "Deployment",
    ],
  },
  {
    id: "exp-mccarter",
    role: "Data Science Research Assistant",
    company: "Dr. Elliot McCarter (DePauw)",
    duration: "Sep 2023 – Dec 2023",
    description:
      "Developed language-learning materials using GPT-4/GPT-3.5. Created vocabulary generation prompts (Python, NLP). Deployed WebApp UI (Streamlit, Flask, React) for >1k users. Implemented CI/CD pipeline (GitHub Actions, Docker).",
    tags: [
      "Data Science",
      "NLP",
      "GPT-4",
      "Prompt Engineering",
      "Streamlit",
      "Flask",
      "React",
      "CI/CD",
      "Docker",
      "Research",
    ],
  },
  {
    id: "exp-vanderbilt",
    role: "Machine Learning Research Intern",
    company: "Vanderbilt University (Dr. Gautam Biswas)",
    duration: "May 2023 – Aug 2023",
    description:
      "Integrated language models (TF, PyTorch, HF). Developed algorithms for hidden layer extraction (+20% efficiency). Optimized Falcon-7B models (+15% accuracy). Fine-tuned discourse analysis models (BERT, Scikit-learn). Innovated few-shot learning prompts (GPT-3.5).",
    tags: [
      "Machine Learning",
      "Internship",
      "NLP",
      "TensorFlow",
      "PyTorch",
      "Hugging Face",
      "BERT",
      "Fine-tuning",
      "Few-shot Learning",
      "GPT-3.5",
      "Research",
    ],
  },
  {
    id: "exp-lamb",
    role: "Machine Learning Researcher",
    company: "Dr. McKenzie Lamb (DePauw)",
    duration: "Oct 2022 – Nov 2023",
    description:
      "Led ML project classifying physical activities (97% accuracy) using TF/Keras/data augmentation. Compared DWT/CWT/FFT (SciPy). Implemented feature/time-interval selection (Scikit-learn, MLxtend). Applied 3D SMOTE (Imbalanced-learn). Optimized via GridSearchCV/RandomizedSearchCV.",
    tags: [
      "Machine Learning",
      "Classification",
      "Signal Processing",
      "TensorFlow",
      "Keras",
      "SciPy",
      "Scikit-learn",
      "SMOTE",
      "Feature Engineering",
      "Research",
    ],
  },
  {
    id: "exp-rashid",
    role: "Data Science Research",
    company: "Dr. Mamumur Rashid (DePauw)",
    duration: "May 2023 – Aug 2023",
    description:
      "Conducted user preference survey (Qualtrics) for filtering methods. Proposed enhancements using watch time/activity metrics (Kafka, Elasticsearch). Designed proposal integrating TF/Scikit-learn with real-time processing (Flink) for movie recommendations (+20% personalization). Conducted EDA (Matplotlib, Seaborn, Plotly).",
    tags: [
      "Data Science",
      "Recommendation Systems",
      "User Research",
      "Qualtrics",
      "Kafka",
      "Elasticsearch",
      "Apache Flink",
      "EDA",
      "Research",
    ],
  },
  {
    id: "exp-imt",
    role: "iOS App Development Intern",
    company: "IMT Solutions",
    duration: "May 2022 – Aug 2022",
    description:
      "Delivered iOS/iPadOS features (Swift, RESTful APIs). Refactored code to MVC. Optimized Objective-C/Swift-5 code (performance, memory leaks). Used debugging/profiling tools (Instruments, Xcode Debugger).",
    tags: [
      "iOS",
      "Mobile Development",
      "Internship",
      "Swift",
      "Objective-C",
      "REST API",
      "MVC",
      "Debugging",
      "Performance Optimization",
    ],
  },
  // Added AI Recommendation System Developer role from Resume
  {
    id: "exp-depauw-recsys",
    role: "AI Recommendation System Developer",
    company: "DePauw University",
    duration: "Jan 2024 – Apr 2024", // Date from Resume
    description:
      "Built sequential DNN (90% accuracy) using structured datasets (NumPy). Developed data-gathering pipeline (Python, Polars). Deployed model to web platform (Angular, Flask, Docker, REST APIs).",
    tags: [
      "Recommendation Systems",
      "Deep Learning",
      "NumPy",
      "Python",
      "Polars",
      "Angular",
      "Flask",
      "Docker",
      "Deployment",
    ],
  },
];
// Add blog posts data (example structure)
export const blogPosts = [];

// Add idea board data (example structure)
export const ideas = [];

export const publications = [
  {
    id: "pub-aaai",
    title:
      "A Chain-of-Thought Prompting Approach with LLMs for Evaluating Students' Formative Assessment Responses in Science",
    authors: "Cohn, C.*, Hutchins, N., Le. T, & Biswas, G.",
    conference: "Proceedings of the AAAI Conference on Artificial Intelligence",
    year: 2024,
    url: "#", // Add DOI or link if available
  },
  {
    id: "pub-longboard",
    title: "Using a Smartphone Accelerometer to Classify Longboarding Motion",
    authors: "Tuan M. Le*, Evan Sartaj, Lamb, M.",
    // Assuming publication venue based on DOI prefix
    conference: "SIAM Undergraduate Research Online (SIURO)",
    year: 2024,
    url: "https://doi.org/10.1137/23S1615838", // Added DOI link
  },
];

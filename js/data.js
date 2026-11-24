// data.js - Single source of truth for portfolio content

export const heroData = {
    name: "Megha",
    title: "Product Owner Intern at Progress Software | B.Tech (Hons.) Computer Science",
    tagline: "Driven by a passion for AI/ML, NLP, deep learning, and building robust full-stack applications. Transforming complex problems into intelligent, scalable solutions.",
    stats: [
        { label: "CGPA", value: "8.37", suffix: "" },
        { label: "Class XII", value: "89.5", suffix: "%" },
        { label: "Class X", value: "96.4", suffix: "%" }
    ]
};

export const aboutData = {
    description: "I am a Computer Science student and currently a Product Owner Intern at Progress Software, with a strong foundation in building practical, user-focused solutions. My primary interests lie at the intersection of Artificial Intelligence, Machine Learning, Natural Language Processing, and Deep Learning. With a solid understanding of computer networks, product workflows, and modern development practices, I thrive on tackling technical challenges and transforming ideas into functional, real-world applications."
};

export const educationData = [
    {
        institution: "RV University",
        degree: "B.Tech (Hons.), Computer Science and Engineering",
        duration: "2023 - Present",
        metric: "CGPA 8.37"
    },
    {
        institution: "St Mary’s PU College, Chikkamagalur",
        degree: "Class XII",
        duration: "2021 - 2023",
        metric: "Score 89.5%"
    },
    {
        institution: "St Mary’s International School, Chikkamagalur",
        degree: "Class X",
        duration: "2011 - 2021",
        metric: "Score 96.4%"
    }
];

export const projectsData = [
    {
        title: "NEWSBERT — BERT-based Multi-Class News Classifier",
        description: "Built an end-to-end NLP pipeline for accurate news categorization.",
        details: [
            "Fine-tuned BERT using PyTorch and Hugging Face on the BBC news dataset.",
            "Built a complete NLP pipeline including preprocessing, tokenization, training, evaluation, and inference.",
            "Built a reusable real-time classification module."
        ],
        metric: "Achieved 96.85% test accuracy",
        tech: ["Python", "PyTorch", "Hugging Face", "BERT", "NLP"],
        links: {
            github: "#",
            demo: "#"
        }
    },
    {
        title: "Silent-Speech — EMG Communicator",
        description: "Deep learning communicator for ventilated patients translating EMG signals.",
        details: [
            "Developed a deep learning model using CNN and temporal layers to convert EMG signals into speech outputs.",
            "Processed HD-sEMG signals and applied signal preprocessing and data augmentation.",
            "Optimized the model for lightweight on-device inference using pruning and quantization.",
            "Improved interpretability using SHAP and saliency mapping for clinical usability."
        ],
        metric: "Lightweight on-device clinical usability",
        tech: ["Python", "CNN", "Deep Learning", "Signal Processing"],
        links: {
            github: "#"
        }
    },
    {
        title: "IoT Smart Locket for Women Safety",
        description: "Edge-cloud wearable device for real-time safety monitoring and alerts.",
        details: [
            "Designed an ESP32-based wearable with accelerometer, heart rate, and SpO2 sensors.",
            "Built an edge-cloud pipeline using Arduino and cloud notifications via Wi-Fi/BLE.",
            "Enabled real-time SOS alerts and OTA updates."
        ],
        metric: "Real-time SOS response mechanism",
        tech: ["ESP32", "Arduino", "IoT", "C++"],
        links: {
            demo: "#"
        }
    }
];

export const experienceData = [
    {
        role: "Product Owner Intern",
        organization: "Progress Software, Bengaluru",
        duration: "November 2026 - Present",
        highlights: [
            "Working as a Product Owner Intern at Progress Software",
            "Collaborating with cross-functional engineering and product teams to align requirements and deliverables",
            "Contributing to backlog management, feature prioritization, and Agile product workflows"
        ]
    },
    {
        role: "Project Intern",
        organization: "Broadrange AI, Illinois",
        duration: "January 2026 - Present",
        highlights: [
            "Smart Academic Assistant using LLMs",
            "Developing a retrieval-augmented generation (RAG) based academic assistant",
            "Implementing document processing, embeddings, and vector database integration",
            "Working with Python, LangChain, and scalable AI system architecture"
        ]
    },
    {
        role: "Project Intern",
        organization: "RV University, Bengaluru",
        duration: "June 2025 - July 2025",
        highlights: [
            "NEWSBERT — Multi-Class News Classification",
            "Designed and implemented a BERT-based news classification system",
            "Fine-tuned transformer models and achieved 96.85% accuracy",
            "Built a complete NLP pipeline from preprocessing to deployment-ready inference"
        ]
    },
    {
        role: "Project Intern",
        organization: "RV University, Bengaluru",
        duration: "June 2024 - July 2024",
        highlights: [
            "Stock Price Prediction using BLSTM",
            "Built a BLSTM-based stock price prediction model using historical market data",
            "Performed preprocessing, feature scaling, and sequence generation for time-series forecasting",
            "Evaluated performance using error metrics and visualized predicted vs actual prices",
            "Gained experience in deep learning and Python optimization"
        ]
    }
];

export const skillsData = [
    {
        category: "Languages",
        items: ["C", "JavaScript", "Java", "SQL", "MySQL"]
    },
    {
        category: "AI, ML & LLMs",
        items: ["Generative AI", "LLM/RAG", "LLMs", "Natural Language Processing (NLP)", "Machine Learning", "Deep Learning", "Computer Vision", "BERT"]
    },
    {
        category: "Frameworks & Libraries",
        items: ["PyTorch", "TensorFlow", "LangChain", "Scikit-Learn", "Pandas"]
    },
    {
        category: "Data, Cloud & DevOps",
        items: ["AWS", "Kubernetes", "Distributed Systems", "Data Engineering", "Data Analysis", "Power BI", "Excel"]
    },
    {
        category: "Product & Developer Tools",
        items: ["Product Management", "Agile", "Jira", "Git", "GitHub", "Google Colab", "Visual Studio Code"]
    },
    {
        category: "Relevant Courses",
        items: ["Data Structures", "Algorithms", "Computer Networks", "Artificial Intelligence"]
    }
];

export const contactData = {
    email: "megha.13.official@gmail.com",
    phone: "+91-7899529842",
    linkedin: "https://linkedin.com/in/megha-41929a2a7",
    github: "https://github.com/meghaaa13105-ctrl"
};

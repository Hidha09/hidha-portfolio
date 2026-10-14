/**
 * Portfolio Data Configuration
 * Centralized data store for Hidha C H's portfolio.
 * Modify links, project details, and contact information here.
 */

export const personalInfo = {
  name: "Hidha C H",
  role: "AI/ML Graduate | Aspiring AI Engineer",
  tagline: "Building robust machine learning pipelines, deep learning models, and intelligent vision systems for real-world impact.",
  location: "United Arab Emirates",
  locationStatus: "Available for Entry-Level Opportunities in the UAE",
  summary: "AI/ML graduate with an Integrated M.Sc. in Computer Science specialising in Artificial Intelligence and Machine Learning (Class of 2026). Passionate about turning complex data into actionable intelligence through practical machine learning, deep learning architectures, computer vision, and structured software development. Actively seeking entry-level positions in AI/ML Engineering, Python Development, Data Analytics, and Software Engineering across the UAE.",
  
  // Contact & Social Links
  // Note: Placeholders are provided for user customization without inventing fake external URLs
  contact: {
    email: "subairhidha@gmail.com",
    github: "https://github.com", // Replace with your GitHub profile URL e.g. https://github.com/your-username
    linkedin: "https://linkedin.com", // Replace with your LinkedIn profile URL e.g. https://linkedin.com/in/your-username
    locationDisplay: "Dubai / Abu Dhabi, UAE",
  },

  cvFileName: "cv.pdf", // Placed in the public/ folder
};

export const aboutData = {
  bio: [
    "I am an AI/ML Graduate with an Integrated Master of Science in Computer Science, specialising in Artificial Intelligence and Machine Learning (2021–2026). My academic journey has given me a comprehensive grounding in core computer science principles—from algorithms and data structures to mathematical foundations—coupled with specialised expertise in neural network architectures, statistical modeling, and data engineering.",
    "I believe the true value of Artificial Intelligence lies in its pragmatic application to solve high-stakes problems. Whether designing computer vision algorithms for early dermatological lesion detection, building fraud prevention classifiers for financial systems, or crafting touchless human-computer interfaces using hand-landmark tracking, I focus on precision, reproducibility, and robust system performance.",
    "Having completed my studies in 2026, I am actively seeking full-time, entry-level opportunities in the United Arab Emirates across AI/ML Engineering, Python Development, Data Analytics, and Software Engineering. I am eager to contribute to forward-thinking engineering teams, learn rapidly, and build impactful technologies."
  ],
  pillars: [
    {
      title: "Machine Learning & Modeling",
      description: "Developing supervised and unsupervised pipelines, feature engineering, cross-validation, and optimizing metrics on imbalanced datasets.",
      icon: "Brain"
    },
    {
      title: "Deep Learning & Vision",
      description: "Implementing convolutional architectures, transfer learning (VGG16), and real-time landmark tracking using MediaPipe and Keras.",
      icon: "Eye"
    },
    {
      title: "Data Analytics & SQL",
      description: "Extracting insights from structured data, relational database querying with SQL, and performing exploratory data analysis with Pandas & NumPy.",
      icon: "Database"
    },
    {
      title: "Software Engineering",
      description: "Writing clean, modular Python code, integrating models into functional interaction layers, and practicing reliable version control.",
      icon: "Code"
    }
  ]
};

export const skillsData = {
  categories: [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", highlight: true, note: "Core language for ML & data" },
        { name: "SQL", highlight: true, note: "Relational queries & data extraction" },
        { name: "C / C++", highlight: false, note: "CS fundamentals & algorithms" },
        { name: "HTML / CSS / JavaScript", highlight: false, note: "Web fundamentals & UI" },
      ]
    },
    {
      name: "Machine Learning & Statistics",
      skills: [
        { name: "Supervised Learning", highlight: true, note: "Classification & Regression" },
        { name: "Random Forest & Ensembles", highlight: true, note: "Decision trees & bagging" },
        { name: "Feature Engineering", highlight: false, note: "Scaling, encoding & imputation" },
        { name: "Model Evaluation", highlight: true, note: "Precision, Recall, ROC-AUC, F1" },
        { name: "Handling Imbalanced Data", highlight: false, note: "Resampling & cost-sensitive learning" },
        { name: "Unsupervised Learning", highlight: false, note: "Clustering & dimensionality reduction" }
      ]
    },
    {
      name: "Deep Learning & Computer Vision",
      skills: [
        { name: "Keras & TensorFlow", highlight: true, note: "Neural network modeling" },
        { name: "Convolutional Neural Networks (CNN)", highlight: true, note: "Image classification" },
        { name: "VGG16 & Transfer Learning", highlight: true, note: "Pretrained feature extraction" },
        { name: "MediaPipe", highlight: true, note: "Hand landmarks & real-time tracking" },
        { name: "OpenCV", highlight: false, note: "Image preprocessing & transformations" },
        { name: "Data Augmentation", highlight: false, note: "Image rotation, zoom, flips" }
      ]
    },
    {
      name: "Libraries, Tools & Environment",
      skills: [
        { name: "Scikit-Learn", highlight: true, note: "ML pipelines & metrics" },
        { name: "Pandas & NumPy", highlight: true, note: "Data manipulation & numerical arrays" },
        { name: "Matplotlib & Seaborn", highlight: false, note: "Data visualization & EDA" },
        { name: "Git & GitHub", highlight: true, note: "Version control & collaboration" },
        { name: "Jupyter Notebooks / VS Code", highlight: false, note: "Development environments" },
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "skin-cancer-detection",
    title: "Skin Cancer Detection via Transfer Learning",
    subtitle: "Dermatological Image Classification with VGG16 & HAM10000",
    badge: "Deep Learning & Computer Vision",
    date: "Academic Project",
    summary: "An end-to-end deep learning framework designed to assist dermatological screening by classifying pigmented skin lesions using the HAM10000 dataset and fine-tuned VGG16 architecture.",
    overview: "Skin cancer is among the most common cancers worldwide, where early detection directly correlates with clinical outcomes. This project implements a transfer learning approach leveraging the VGG16 architecture pretrained on ImageNet, adapted and fine-tuned to classify multi-class skin lesions from the diverse HAM10000 ('Human Against Machine with 10,000 training images') dataset.",
    keyHighlights: [
      "Leveraged HAM10000 benchmark dataset comprising 10,015 dermatoscopic images across distinct lesion categories.",
      "Implemented transfer learning with VGG16 as the feature extractor, fine-tuning dense classification layers with Dropout and Batch Normalization to prevent overfitting.",
      "Designed an extensive data augmentation pipeline (rotation, zoom, horizontal/vertical flips, brightness adjustments) to mitigate class imbalance.",
      "Evaluated performance using categorical cross-entropy loss, precision, recall, and confusion matrix analysis across benign and malignant classes."
    ],
    techStack: ["Python", "Keras / TensorFlow", "VGG16", "OpenCV", "HAM10000 Dataset", "NumPy", "Matplotlib"],
    methodology: [
      { step: "Data Preparation", detail: "Loaded and cleaned metadata from HAM10000; resolved class imbalance through image augmentation and targeted resampling." },
      { step: "Architecture", detail: "Utilized frozen convolutional base of VGG16, appended custom Global Average Pooling, Dense (256, ReLU), Dropout (0.5), and Softmax classification layer." },
      { step: "Training & Fine-tuning", detail: "Trained using Adam optimizer with ReduceLROnPlateau and EarlyStopping callbacks to ensure optimal convergence." },
      { step: "Diagnostic Analysis", detail: "Generated multi-class confusion matrices and classification reports highlighting per-class sensitivity and specificity." }
    ],
    githubUrl: null, // User can add their repository link
    demoUrl: null
  },
  {
    id: "bank-fraud-detection",
    title: "Bank Fraud Detection System",
    subtitle: "Imbalanced Financial Transaction Classification with Random Forest",
    badge: "Machine Learning & Analytics",
    date: "Academic Project",
    summary: "A robust machine learning classification system trained to identify fraudulent financial transactions in highly skewed datasets, achieving an evaluated accuracy of 97.39% on the test evaluation dataset.",
    overview: "Financial transaction fraud presents a classic extreme class imbalance challenge, where fraudulent instances represent a minuscule fraction of total transactions. This project analyzes transaction behaviors, engineers predictive features, and implements an optimized Random Forest classifier that achieves a confirmed 97.39% accuracy on the evaluation dataset while maintaining focused recall on fraudulent transactions.",
    metric: {
      value: "97.39%",
      label: "Model Accuracy on Evaluation Set",
      detail: "Achieved with tuned Random Forest classifier on benchmark transaction evaluation data"
    },
    keyHighlights: [
      "Tackled severe class imbalance typical of banking transactions using precision-recall optimization and stratified sampling.",
      "Conducted detailed feature analysis on transaction amounts, velocity, and time-of-day variables to capture anomalous behavior.",
      "Tuned Random Forest ensemble hyperparameters (number of estimators, max depth, min samples split) to balance variance and bias.",
      "Reported 97.39% overall test accuracy along with precision, recall, and F1-score evaluation to ensure non-fraudulent and fraudulent patterns were reliably identified."
    ],
    techStack: ["Python", "Scikit-Learn", "Random Forest", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    methodology: [
      { step: "Exploratory Analysis", detail: "Investigated transaction distribution, missing values, outliers, and skewness across transaction amounts." },
      { step: "Preprocessing & Scaling", detail: "Standardized numerical features and applied stratified train-test splits to preserve class distributions." },
      { step: "Model Training", detail: "Trained Random Forest ensemble classifier with cross-validation and hyperparameter tuning." },
      { step: "Evaluation", detail: "Validated model on hold-out evaluation dataset, verifying the 97.39% accuracy and analyzing ROC-AUC curves." }
    ],
    githubUrl: null,
    demoUrl: null
  },
  {
    id: "hand-gesture-recognition",
    title: "Real-Time Hand Gesture Keyboard Control",
    subtitle: "MediaPipe Landmarks, Keras Neural Classifier & Hold-to-Confirm Mechanism",
    badge: "Computer Vision & Human-Computer Interaction",
    date: "Academic Project",
    summary: "An interactive, touchless control system utilizing MediaPipe for real-time hand landmark extraction, a Keras classification model, a temporal correction layer, and a hold-to-confirm mechanism to reliably trigger keyboard actions.",
    overview: "Touchless interfaces frequently suffer from jitter, unintended intermediate gestures, and false triggers. This project addresses these real-world interaction challenges by combining MediaPipe's high-fidelity 21-point 3D hand landmark detection with a custom Keras classifier. Crucially, it introduces a temporal smoothing correction layer and a 'hold-to-confirm' interaction pattern that ensures actions are dispatched to the system keyboard only when a gesture is intentionally sustained.",
    keyHighlights: [
      "Real-time tracking of 21 3D hand landmarks via MediaPipe without requiring specialized depth cameras or wearable sensors.",
      "Trained a lightweight Keras neural network to classify custom hand gestures from normalized geometric landmark coordinates.",
      "Engineered an algorithmic temporal correction layer to filter out transient transitional frames and landmark flutter.",
      "Implemented a hold-to-confirm interaction mechanism: requires gestures to be stably held for a defined duration threshold before emitting keyboard keystrokes, completely preventing accidental inputs."
    ],
    techStack: ["Python", "OpenCV", "MediaPipe", "Keras / TensorFlow", "PyAutoGUI / Keyboard Controller", "NumPy"],
    methodology: [
      { step: "Landmark Extraction", detail: "Streamed webcam video feed through MediaPipe Hands to capture 21 3D landmark coordinates per frame." },
      { step: "Coordinate Normalization", detail: "Normalized relative landmark distances against the wrist reference coordinate to remain invariant to hand position and scale." },
      { step: "Classification Model", detail: "Processed coordinates through a lightweight multi-layer perceptron (Keras) yielding real-time gesture probability predictions." },
      { step: "Temporal Smoothing & Hold-to-Confirm", detail: "Accumulated frame predictions over a sliding temporal buffer; verified gesture stability across threshold frames before dispatching OS keyboard events." }
    ],
    githubUrl: null,
    demoUrl: null
  }
];

export const educationData = {
  degree: "Integrated Master of Science (M.Sc.) in Computer Science",
  specialisation: "Artificial Intelligence and Machine Learning",
  year: "Completed in 2026",
  duration: "5-Year Integrated Program (2021 – 2026)",
  overview: "A comprehensive 5-year academic degree combining foundational undergraduate computer science with advanced postgraduate research in Artificial Intelligence, Deep Learning, and Computational Statistics.",
  coreFocusAreas: [
    "Artificial Intelligence & Expert Systems",
    "Machine Learning & Statistical Pattern Recognition",
    "Deep Learning & Convolutional Neural Networks",
    "Computer Vision & Digital Image Processing",
    "Data Structures, Algorithms & Computational Complexity",
    "Database Management Systems & Advanced SQL",
    "Probability, Linear Algebra & Applied Statistics"
  ]
};

export const careerGoalData = {
  targetRoles: [
    "AI / ML Engineer (Junior / Entry-Level)",
    "Python Developer",
    "Data Analyst / Data Scientist (Associate)",
    "Software Engineer"
  ],
  targetRegion: "United Arab Emirates (Dubai, Abu Dhabi, Sharjah & wider UAE)",
  availability: "Immediately available upon completion of degree in 2026",
  relocation: "Ready to work on-site or hybrid in the UAE"
};

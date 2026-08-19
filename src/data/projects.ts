export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  problem: string;
  approach: string;
  technologies: string[];
  results: string[];
  learned: string[];
  publication?: {
    title: string;
    journal: string;
    volume: string;
    date: string;
    doi: string;
    role: string;
  };
  caseStudy: {
    problem: string;
    whyItMatters: string;
    approach: string;
    architecture: string[];
    technologyDetail: string;
    challenges: string[];
    solution: string;
    results: string[];
    learned: string[];
    futureImprovements: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "multi-hazard-weather-prediction",
    number: "01",
    title: "Multi-Hazard Weather & Disaster Prediction",
    subtitle: "Research-backed mobile application for real-time weather monitoring and disaster prediction",
    problem:
      "Communities vulnerable to natural disasters need accessible, real-time hazard information on their mobile devices — not buried in complex meteorological dashboards.",
    approach:
      "Built a cross-platform mobile application that combines multiple weather APIs, machine learning models, and GPS-based location services to deliver personalized disaster predictions and SOS functionality.",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Machine Learning",
      "Firebase",
      "GPS/Location",
      "REST APIs",
    ],
    results: [
      "Published as first author in IJARSCT (Vol. 5, Issue 9, June 2025)",
      "Real-time weather data integration with prediction capabilities",
      "SOS functionality for emergency situations",
    ],
    learned: [
      "How to translate academic research into a usable product",
      "Integrating multiple data sources into a coherent user experience",
      "The gap between a working model and a useful application",
    ],
    publication: {
      title:
        "A Multi-Hazard Weather and Disaster Prediction Mobile Application",
      journal:
        "International Journal of Advanced Research in Science, Communication and Technology (IJARSCT)",
      volume: "Vol. 5, Issue 9",
      date: "June 2025",
      doi: "10.48175/IJARSCT-28265",
      role: "Researcher & First Author",
    },
    caseStudy: {
      problem:
        "Natural disasters — floods, cyclones, heatwaves, storms — affect millions of people every year. While meteorological agencies generate predictions, this information often stays trapped in complex dashboards inaccessible to the average person. Communities in vulnerable regions need a simple, mobile-first way to receive timely hazard warnings and call for help during emergencies.",
      whyItMatters:
        "Early warning can save lives. The difference between a 30-minute warning and a 5-minute warning during a flood can determine whether a family evacuates safely or not. Making disaster prediction accessible through mobile technology directly translates to reduced human impact.",
      approach:
        "I approached this as both a research problem and a product problem. The research side involved studying multi-hazard prediction models and identifying which weather parameters matter most for different disaster types. The product side involved designing a mobile experience that presents complex meteorological data in a way that any user can understand and act on.",
      architecture: [
        "Weather APIs & Satellite Data",
        "Node.js Backend / Data Processing",
        "Machine Learning Prediction Engine",
        "Firebase (Auth, Real-time DB, Cloud Functions)",
        "React Native Mobile Application",
        "GPS-Based Location Services",
        "SOS Emergency System",
      ],
      technologyDetail:
        "The frontend was built with React Native and Expo for cross-platform deployment. The backend uses Node.js with Express for API orchestration, pulling data from multiple weather services. Firebase provides authentication, real-time database capabilities, and cloud functions for push notifications. Machine learning models process historical and real-time weather data to generate hazard predictions. GPS integration enables location-specific alerts.",
      challenges: [
        "Integrating multiple weather data sources with different formats and update frequencies",
        "Balancing prediction accuracy with the computational constraints of a mobile application",
        "Designing an interface that communicates urgency without causing unnecessary panic",
        "Ensuring the SOS system works reliably even in low-connectivity scenarios",
      ],
      solution:
        "The system uses a layered architecture where the heavy computation (ML predictions) happens server-side, while the mobile app focuses on clear data presentation and emergency response. Firebase Cloud Functions handle real-time notification delivery, and the app includes offline caching for critical safety information.",
      results: [
        "Published research paper as first author in IJARSCT",
        "Functional cross-platform mobile application with real-time data",
        "Multi-hazard prediction covering weather events, floods, and storms",
        "SOS emergency system with location sharing",
      ],
      learned: [
        "Academic research and product development require different mindsets — and combining both produces better outcomes",
        "Users don't care about your model's accuracy metrics — they care about whether they can understand and act on the information",
        "Building for emergencies requires thinking about edge cases that normal applications can ignore",
      ],
      futureImprovements: [
        "Implement offline-first architecture for regions with unreliable connectivity",
        "Add community-driven hazard reporting for ground-truth data",
        "Integrate with government emergency alert systems",
        "Expand prediction models to cover additional hazard types",
      ],
    },
  },
  {
    slug: "glof-risk-assessment",
    number: "02",
    title: "GLOF Risk Assessment System",
    subtitle: "Machine learning-powered glacial lake outburst flood risk assessment with mobile interface",
    problem:
      "Glacial Lake Outburst Floods (GLOFs) can devastate downstream communities with little warning. Current risk assessment methods are manual, slow, and inaccessible to local decision-makers.",
    approach:
      "Developed an integrated system combining multiple ML models — Random Forest, LSTM, and Bayesian Networks — to assess GLOF risk from satellite and environmental data, delivered through a mobile application for field workers and decision-makers.",
    technologies: [
      "Random Forest",
      "LSTM",
      "Bayesian Network",
      "React Native",
      "Node.js",
      "Flask",
      "Firebase",
      "AWS",
    ],
    results: [
      "Multi-model ensemble approach for robust risk scoring",
      "Mobile interface for field-accessible risk data",
      "Architecture bridging satellite data and end-user decisions",
    ],
    learned: [
      "How to select and combine ML models for different aspects of a complex problem",
      "Building systems where the end user is not a developer but a field worker",
      "The importance of explainable predictions in high-stakes scenarios",
    ],
    caseStudy: {
      problem:
        "Glacial Lake Outburst Floods are among the most destructive natural hazards in mountainous regions. As climate change accelerates glacial melting, the number of potentially dangerous glacial lakes is increasing. Current risk assessment approaches rely heavily on manual satellite imagery analysis and periodic field visits — methods that are slow, expensive, and can't provide continuous monitoring.",
      whyItMatters:
        "GLOFs can release millions of cubic meters of water within hours, destroying infrastructure and communities downstream. Continuous, automated risk assessment could provide early warnings and help governments prioritize which glacial lakes require immediate attention and mitigation measures.",
      approach:
        "I designed a system that uses three complementary ML approaches: Random Forest for feature importance and baseline risk classification, LSTM networks for temporal pattern recognition in environmental data, and Bayesian Networks for probabilistic risk modeling that accounts for uncertainty. These models feed into a unified risk scoring system accessible through a mobile application.",
      architecture: [
        "Satellite & Environmental Data Sources",
        "Data Pipeline & Preprocessing (AWS)",
        "Random Forest Classification",
        "LSTM Temporal Analysis",
        "Bayesian Network Risk Model",
        "Flask API / Risk Scoring Engine",
        "React Native Mobile Application",
        "Firebase (Auth, Database)",
      ],
      technologyDetail:
        "The ML pipeline runs on AWS infrastructure. Random Forest models handle initial feature extraction and risk classification. LSTM networks analyze time-series environmental data to detect patterns that precede outburst events. Bayesian Networks integrate outputs from both models with additional environmental variables to produce probabilistic risk scores. A Flask API serves these predictions to the React Native mobile application, which is designed for field workers with limited technical expertise.",
      challenges: [
        "Limited labeled training data for actual GLOF events",
        "Combining outputs from three different ML model architectures into a coherent risk score",
        "Designing a mobile interface for field workers operating in remote, low-connectivity areas",
        "Communicating probabilistic risk assessments to non-technical decision-makers",
      ],
      solution:
        "The ensemble approach allows each model to contribute its strengths: Random Forest handles feature importance, LSTM captures temporal dynamics, and Bayesian Networks provide uncertainty quantification. The mobile app uses a simple risk-level visualization (low/medium/high/critical) backed by the full probabilistic data for users who need more detail.",
      results: [
        "Functional multi-model ML pipeline for GLOF risk assessment",
        "Mobile application accessible to field workers",
        "Architecture supporting continuous monitoring capabilities",
        "Risk visualization system translating complex data into actionable information",
      ],
      learned: [
        "Ensemble approaches are more robust than single-model solutions for complex environmental predictions",
        "The hardest part of ML systems is often not the model but the data pipeline and user interface",
        "High-stakes predictions require uncertainty quantification — a single number isn't enough",
      ],
      futureImprovements: [
        "Integrate real-time satellite imagery processing",
        "Add collaborative features for field teams to share observations",
        "Implement model retraining pipeline as more labeled data becomes available",
        "Expand to cover additional glacial hazard types",
      ],
    },
  },
];

const EXPERIENCES = [
  {
    id: 1,
    role: "Technical Consultant (Developer)",
    company: "TechCorp Systems",
    period: "2019-06 - 2021-11",
    highlights: [
      "Consulting &amp; implementation Services to enable success on Digital Transformation initiatives",
      "Execute and complete the projects with using different languages and frameworks for both frontend and backend",
      "Projects including BPM Integration for Haitong, Open API Platform for BOC, Secure API on CA API Gateway for Prudential, e-Statement Platform for ORIX, Authorization Platform for Midland, Stock Searching Platform for Midland, Data Lake Integration for FWD"
    ]
  },
  {
    id: 2,
    role: "Analyst Programmer (DevOps)",
    company: "Hutchison Ports",
    period: "2021-11 - 2022-06",
    highlights: [
      "Implementation based on GitOps and DevOps principle &amp; maintain different products including ArgoCD, Jenkins, Kafka, EFK Stack &amp; Keycloak",
      "Complete tasks under Agile methodologies",
      "Design &amp; Implement CICD pipelines for application with Jenkins and ArgoCD",
      "Develop Helm chart with ArgoCD to deploy applications",
      "Implement Devops process with tools (Git, Maven/Gradle/Yarn/NPM, SonarQube, Jenkins, Docker, Jfrog, ArgoCD, k8s)",
      "Providing DevOps related supports to application teams"
    ]
  },
  {
    id: 3,
    role: "DevOps Engineer",
    company: "PwC (DigiQal)",
    period: "2022-06 - 2023-05",
    highlights: [
      "Design &amp; implement DevOps environment from 0 to 1 for our products",
      "Provision AWS environments for company products with Terraform based on GitOps principle",
      "Standardise application deployment files to adopt release pipeline",
      "Design &amp; implement CICD pipeline for application from scratch with Ansible and Gitlab CICD",
      "Migrate and administrate company Gitlab",
      "Design, setup, and administrate Gitlab Runner for CICD solution",
      "Migrate DNS service to Route53",
      "Support Application team deployments &amp; infrastructure requirements",
    ]
  },
  {
    id: 4,
    role: "Senior Software Engineer (DevOps and SRE)",
    company: "Prudential Hong Kong Limited",
    period: "2023-05 - Present",
    highlights: [
      "SRE enablement focused on ensuring system reliability, scalability, and operational efficiency through SRE principles and practices",
      "Support and maintain cloud infrastructure on Azure using Terraform", 
      "Containerize and migrate on-prem applications to AKS, and develop CI CD pipeline for applications further development",
      "Design and setup Confluent Cloud to enable event-driven solution for applications with Kafka",
      "Support applications SRE adoption including guidance on defining SLO, enable APM with Dynatrace, and setup Synthetic Monitoring",
      "Consolidate SRE metrics from different sources and visualize with reporting tools PowerBI to report applications availability",
      "Design and develop alerting solution for monitored incidents with using incident metrics"
    ]
  },
  {
    id: 5,
    role: "Part-time DevOps Trainer",
    company: "Kenfil Hong Kong Limited",
    period: "2025-12 - Present",
    highlights: [
      "Prepare training materials and deliver DevOps related training to corporate clients",
      "Review course outlines and update content to ensure relevance with industry trends and needs",
      "Conduct hands-on labs and practical exercises to enhance participants' understanding of DevOps tools and practices",
      "Provide support and guidance to participants during and after the training sessions"
    ]
  }
];

export default EXPERIENCES.sort((a, b) => b.id - a.id);
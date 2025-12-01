export const services = [
  {
    id: "cloud-management",
    title: "1. Cloud Management",
    techStack: ["AWS", "Azure", "Google Cloud Platform"],
    subSections: [
      {
        title: "1.1 Cloud Architecture & Design",
        items: [
          "Building robust, fault-tolerant, and scalable architecture",
          "High Availability, Auto Scaling, Multi-AZ/Region schemes",
          "Network topology design: VPC/VNet, Peering, TGW, PrivateLink",
          "Landing Zone / Control Tower / Azure Landing Zone organization"
        ]
      },
      {
        title: "1.2 Cloud Resource Management",
        items: [
          "Full service lifecycle management",
          "Cost-monitoring, rightsizing, cleanup processes",
          "Building secure Zero-Trust architecture",
          "DR/Backup strategies"
        ]
      }
    ]
  },
  {
    id: "iac",
    title: "2. Infrastructure as Code (IaC)",
    techStack: ["Terraform", "CloudFormation", "Bicep", "Pulumi"],
    subSections: [
      {
        title: "2.1 IaC Solution Design",
        items: [
          "Modular repository architecture",
          "Environment organization: DEV • QA • STAGE • PROD",
          "State management, remote backend, locking"
        ]
      },
      {
        title: "2.2 Infrastructure Deployment Automation",
        items: [
          "Pipelines and GitOps processes",
          "Policy-as-Code (OPA, AWS Config, Azure Policy)",
          "Creating repeatable environments"
        ]
      }
    ]
  },
  {
    id: "containers",
    title: "3. Container Platform Management",
    techStack: ["Kubernetes", "ECS", "Azure Container Apps", "GKE", "EKS", "AKS"],
    subSections: [
      {
        title: "3.1 Container Environment Creation & Support",
        items: [
          "EKS/AKS/GKE cluster configuration",
          "Node groups, spot-nodes, autoscaling (Cluster Autoscaler/Karpenter)",
          "Ingress controllers (ALB, NGINX, AGIC), service mesh (Istio/Linkerd)"
        ]
      },
      {
        title: "3.2 Application Containerization",
        items: [
          "Docker best practices",
          "Image optimization, hardening, security scans",
          "CI/CD for containers"
        ]
      }
    ]
  },
  {
    id: "security",
    title: "4. Security, Compliance & Certifications (DevSecOps)",
    techStack: ["PCI DSS", "SOC 2", "HIPAA", "FedRAMP", "ISO27001"],
    subSections: [
      {
        title: "4.1 Infrastructure Security",
        items: [
          "Identity & Access Management (IAM/AAD)",
          "Secrets Management (AWS Secrets Manager, Azure Key Vault, GCP Secret Manager)",
          "Network Segmentation, Zero-Trust",
          "Vulnerability assessment (Trivy, Grype, Prisma, Wiz)"
        ]
      },
      {
        title: "4.2 Compliance & Security Assessments",
        items: [
          "Preparation for PCI DSS / SOC 2 / FedRAMP audits",
          "Architectural documentation and evidence support",
          "Logs/alerts/audit for compliance requirements"
        ]
      }
    ]
  },
  {
    id: "databases",
    title: "5. Cloud Database Management",
    techStack: ["RDS", "Aurora", "Azure SQL", "PostgreSQL/MySQL", "Mongo Atlas", "BigQuery"],
    subSections: [
      {
        title: "5.1 DB Service Deployment & Configuration",
        items: [
          "HA and Multi-AZ/Region configurations",
          "Connection Pooling, Proxy layers",
          "Security best practices (encryption, audit, least privilege)"
        ]
      },
      {
        title: "5.2 Administration & Optimization",
        items: [
          "Performance Tuning",
          "Query optimization, indexing",
          "Backup configuration, PITR (Point-In-Time Recovery)",
          "Cross-cloud/engine migrations"
        ]
      }
    ]
  },
  {
    id: "cicd",
    title: "6. Release Process Management (CI/CD Engineering)",
    techStack: ["GitHub Actions", "GitLab CI", "Azure DevOps", "Jenkins", "ArgoCD", "FluxCD"],
    subSections: [
      {
        title: "6.1 CI Processes",
        items: [
          "Build pipelines, caching, matrix strategies",
          "SAST/DAST/Dependency Scanning",
          "Code quality gates"
        ]
      },
      {
        title: "6.2 CD Processes",
        items: [
          "Canary and blue/green releases",
          "GitOps releases via ArgoCD/FluxCD",
          "Release strategies for microservices and monoliths",
          "Rollback/rollforward automation"
        ]
      },
      {
        title: "6.3 Release Management as a Service",
        items: [
          "Creating release calendars",
          "Version management (semantic versioning)",
          "Release quality control"
        ]
      }
    ]
  },
  {
    id: "networking",
    title: "7. Network Engineering & Communications (Cloud Networking)",
    techStack: ["VPN", "Direct Connect", "ExpressRoute", "SD-WAN"],
    subSections: [
      {
        title: "7.1 Network Architectures",
        items: [
          "VPC/VNet structure design",
          "WAF/Firewall, NAT, routing",
          "Private communication channels between offices/datacenters/clouds"
        ]
      },
      {
        title: "7.2 On-premise Integration",
        items: [
          "Site-to-Site VPN",
          "AWS Direct Connect / Azure ExpressRoute",
          "Hybrid networking with HA-design"
        ]
      }
    ]
  },
  {
    id: "monitoring",
    title: "8. Monitoring & Observability",
    techStack: ["Grafana", "Prometheus", "Datadog", "CloudWatch", "Log Analytics", "ELK/Loki/Tempo"],
    subSections: [
      {
        title: "8.1 Monitoring-as-a-Service",
        items: [
          "Metric collection (infrastructure, applications, DB, networks)",
          "SLA/SLI/SLO configuration",
          "Dashboard unification (Grafana/Datadog)"
        ]
      },
      {
        title: "8.2 Log Management",
        items: [
          "Cloud-native logging (CloudWatch Logs, Log Analytics, GCP Logging)",
          "ELK/Loki stack",
          "Retention, archiving, reporting"
        ]
      },
      {
        title: "8.3 Tracing / APM",
        items: [
          "OpenTelemetry",
          "Jaeger/Tempo",
          "Datadog APM/Cloud APM"
        ]
      }
    ]
  },
  {
    id: "finops",
    title: "9. Cloud Cost Optimization (FinOps)",
    techStack: [],
    subSections: [
      {
        title: "9.1 Cost Optimization",
        items: [
          "Resource usage analysis",
          "Spot/Reserved/Autoscaling recommendations",
          "S3/Blob storage optimization",
          "Cost breakdowns and forecasting"
        ]
      },
      {
        title: "9.2 Billing & Reporting",
        items: [
          "Automated cost reports",
          "Budget overrun alerts"
        ]
      }
    ]
  },
  {
    id: "platform",
    title: "10. Platform Engineering (Internal Developer Platforms)",
    techStack: [],
    subSections: [
      {
        title: "10.1 Internal Platform Creation",
        items: [
          "Platform for self-service environments",
          "Service catalog: API templates, workers, cron-jobs",
          "Standardization of logging, monitoring, secrets"
        ]
      },
      {
        title: "10.2 Developer Experience (DX)",
        items: [
          "Developer onboarding automation",
          "Automated environment provisioning",
          "Shared logging and monitoring environment"
        ]
      }
    ]
  },
  {
    id: "support",
    title: "11. Support & Maintenance (SRE / DevOps Support)",
    techStack: [],
    subSections: [
      {
        title: "11.1 24/7 SRE Support",
        items: [
          "Incident Response: PagerDuty/Opsgenie",
          "Runbooks / playbooks",
          "Root-cause-analysis (RCA) and incident prevention"
        ]
      },
      {
        title: "11.2 Operational Maintenance",
        items: [
          "Environment management",
          "Patches, updates, version control",
          "Weekly reports and status briefings"
        ]
      }
    ]
  },
  {
    id: "consulting",
    title: "12. Audits, Consulting & Training",
    techStack: [],
    subSections: [
      {
        title: "12.1 Architectural Audits",
        items: [
          "Security, scalability, performance, cost",
          "Best practices review",
          "Improvement roadmap"
        ]
      },
      {
        title: "12.2 Training & Consulting",
        items: [
          "Kubernetes for teams",
          "Terraform/IaC training",
          "Cloud architect approach training"
        ]
      }
    ]
  }
];

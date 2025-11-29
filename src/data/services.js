export const services = [
  {
    id: "cloud-management",
    title: "1. Управление облачными платформами (Cloud Management)",
    techStack: ["AWS", "Azure", "Google Cloud Platform"],
    subSections: [
      {
        title: "1.1 Архитектура и дизайн облачных решений",
        items: [
          "Построение прочной, отказоустойчивой и масштабируемой архитектуры",
          "High Availability, Auto Scaling, Multi-AZ/Region схемы",
          "Проектирование сетевой топологии: VPC/VNet, Peering, TGW, PrivateLink",
          "Организация Landing Zone / Control Tower / Azure Landing Zone"
        ]
      },
      {
        title: "1.2 Управление облачными ресурсами",
        items: [
          "Полный lifecycle-менеджмент сервисов",
          "Cost-monitoring, rightsizing, cleanup процессов",
          "Построение безопасной Zero-Trust архитектуры",
          "DR/Backup стратегии"
        ]
      }
    ]
  },
  {
    id: "iac",
    title: "2. Инфраструктура как код (IaC)",
    techStack: ["Terraform", "CloudFormation", "Bicep", "Pulumi"],
    subSections: [
      {
        title: "2.1 Проектирование IaC-решений",
        items: [
          "Архитектура модульных репозиториев",
          "Организация сред: DEV • QA • STAGE • PROD",
          "Управление состоянием (state), remote backend, locking"
        ]
      },
      {
        title: "2.2 Автоматизация инфраструктурных развёртываний",
        items: [
          "Пайплайны и GitOps-процессы",
          "Policy-as-Code (OPA, AWS Config, Azure Policy)",
          "Создание repeatable окружений"
        ]
      }
    ]
  },
  {
    id: "containers",
    title: "3. Управление контейнерными платформами",
    techStack: ["Kubernetes", "ECS", "Azure Container Apps", "GKE", "EKS", "AKS"],
    subSections: [
      {
        title: "3.1 Создание и поддержка контейнерных окружений",
        items: [
          "Настройка кластеров EKS/AKS/GKE",
          "Node groups, spot-nodes, autoscaling (Cluster Autoscaler/Karpenter)",
          "Ingress-контроллеры (ALB, NGINX, AGIC), service mesh (Istio/Linkerd)"
        ]
      },
      {
        title: "3.2 Контейнеризация приложений",
        items: [
          "Docker-best-practices",
          "Оптимизация образов, hardening, security scans",
          "CI/CD для контейнеров"
        ]
      }
    ]
  },
  {
    id: "security",
    title: "4. Безопасность, комплаенс и сертификации (DevSecOps)",
    techStack: ["PCI DSS", "SOC 2", "HIPAA", "FedRAMP", "ISO27001"],
    subSections: [
      {
        title: "4.1 Инфраструктурная безопасность",
        items: [
          "Identity & Access Management (IAM/AAD)",
          "Secrets Management (AWS Secrets Manager, Azure Key Vault, GCP Secret Manager)",
          "Network Segmentation, Zero-Trust",
          "Оценка уязвимостей (Trivy, Grype, Prisma, Wiz)"
        ]
      },
      {
        title: "4.2 Compliance & Security Assessments",
        items: [
          "Подготовка к PCI DSS / SOC 2 / FedRAMP аудитам",
          "Архитектурная документация и evidence support",
          "Логи/алерты/аудит под требования compliance"
        ]
      }
    ]
  },
  {
    id: "databases",
    title: "5. Управление облачными базами данных",
    techStack: ["RDS", "Aurora", "Azure SQL", "PostgreSQL/MySQL", "Mongo Atlas", "BigQuery"],
    subSections: [
      {
        title: "5.1 Развёртывание и настройка DB-сервисов",
        items: [
          "HA и Multi-AZ/Region конфигурации",
          "Connection Pooling, Proxy слои",
          "Security best practices (encryption, audit, least privilege)"
        ]
      },
      {
        title: "5.2 Администрирование и оптимизация",
        items: [
          "Performance Tuning",
          "Query optimization, индексирование",
          "Настройка бэкапов, PITR (Point-In-Time Recovery)",
          "Миграции между облаками/движками"
        ]
      }
    ]
  },
  {
    id: "cicd",
    title: "6. Управление процессом релизов (CI/CD Engineering)",
    techStack: ["GitHub Actions", "GitLab CI", "Azure DevOps", "Jenkins", "ArgoCD", "FluxCD"],
    subSections: [
      {
        title: "6.1 CI-процессы",
        items: [
          "Build pipelines, кеширование, матричные стратегии",
          "SAST/DAST/Dependency Scanning",
          "Code quality gates"
        ]
      },
      {
        title: "6.2 CD-процессы",
        items: [
          "Канареечные и blue/green релизы",
          "GitOps-релизы через ArgoCD/FluxCD",
          "Release strategies для микросервисов и монолитов",
          "Rollback/rollforward автоматизация"
        ]
      },
      {
        title: "6.3 Release Management как услуга",
        items: [
          "Создание релиз-календарей",
          "Управление версиями (semantic versioning)",
          "Контроль качества релизов"
        ]
      }
    ]
  },
  {
    id: "networking",
    title: "7. Сетевой инжиниринг и коммуникации (Cloud Networking)",
    techStack: ["VPN", "Direct Connect", "ExpressRoute", "SD-WAN"],
    subSections: [
      {
        title: "7.1 Сетевые архитектуры",
        items: [
          "Проектирование VPC/VNet структур",
          "WAF/Firewall, NAT, маршрутизация",
          "Частные каналы связи между офисами/датацентрами/облаками"
        ]
      },
      {
        title: "7.2 Интеграция с on-premise",
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
    title: "8. Мониторинг и Observability",
    techStack: ["Grafana", "Prometheus", "Datadog", "CloudWatch", "Log Analytics", "ELK/Loki/Tempo"],
    subSections: [
      {
        title: "8.1 Monitoring-as-a-Service",
        items: [
          "Сбор метрик (инфраструктура, приложения, БД, сети)",
          "Настройка SLA/SLI/SLO",
          "Унификация dashboards (Grafana/Datadog)"
        ]
      },
      {
        title: "8.2 Log Management",
        items: [
          "Cloud-native логирование (CloudWatch Logs, Log Analytics, GCP Logging)",
          "ELK/Loki-стек",
          "Retention, архивация, отчёты"
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
    title: "9. Экономическая оптимизация облаков (FinOps)",
    techStack: [],
    subSections: [
      {
        title: "9.1 Cost Optimization",
        items: [
          "Анализ использования ресурсов",
          "Spot/Reserved/Autoscaling рекомендации",
          "Оптимизация S3/Blob storage",
          "Cost breakdowns и прогнозирование"
        ]
      },
      {
        title: "9.2 Биллинг и отчётность",
        items: [
          "Автоматические отчёты по затратам",
          "Алерты при превышении бюджета"
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
        title: "10.1 Создание внутренних платформ",
        items: [
          "Платформа для self-service окружений",
          "Каталог сервисов: шаблоны API, workers, cron-jobs",
          "Стандартизация логирования, мониторинга, секретов"
        ]
      },
      {
        title: "10.2 Developer Experience (DX)",
        items: [
          "Автоматизация onboarding разработчиков",
          "Автоматическая выдача окружений",
          "Общая среда логирования и мониторинга"
        ]
      }
    ]
  },
  {
    id: "support",
    title: "11. Поддержка и сопровождение (SRE / DevOps Support)",
    techStack: [],
    subSections: [
      {
        title: "11.1 24/7 SRE-поддержка",
        items: [
          "Incident Response: PagerDuty/Opsgenie",
          "Runbooks / playbooks",
          "Root-cause-analysis (RCA) и предотвращение инцидентов"
        ]
      },
      {
        title: "11.2 Операционное сопровождение",
        items: [
          "Управление окружениями",
          "Патчи, обновления, контроль версий",
          "Еженедельные отчёты и статус-брифинги"
        ]
      }
    ]
  },
  {
    id: "consulting",
    title: "12. Аудиты, консалтинг и обучение",
    techStack: [],
    subSections: [
      {
        title: "12.1 Архитектурные аудиты",
        items: [
          "Security, scalability, performance, cost",
          "Best practices review",
          "Roadmap улучшений"
        ]
      },
      {
        title: "12.2 Обучение и консультации",
        items: [
          "Kubernetes для команд",
          "Terraform/IaC тренинги",
          "Обучение cloud-architect подходам"
        ]
      }
    ]
  }
];

import { links } from "./links";
export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  status: string;
  description: string;
  role: string;
  technologies: string[];
  context: string;
  problem: string;
  contributions: string[];
  challenge: string;
  learned: string;
  next: string;
  flow: string[];
  liveUrl?: string;
};
export const projects: Project[] = [
  {
    slug: "college-event-management",
    number: "01",
    title: "College Event Management Information System",
    shortTitle: "The first full-stack system.",
    category: "Web systems",
    status: "Academic project",
    role: "Full-stack contributor",
    description:
      "Where I learned how interfaces, application logic, and databases fit together.",
    technologies: ["PHP", "MySQL", "React", "Node.js", "MongoDB"],
    context:
      "A college event-management project was my starting point for building complete web applications. I worked on a PHP/MySQL implementation and its evolution toward the MERN stack.",
    problem:
      "An event system needs more than a page of announcements. Data, user operations, and the interface have to work together.",
    contributions: [
      "Backend functionality for data and user operations.",
      "Responsive UI components connected to application logic.",
      "Migration and evolution from PHP/MySQL toward MERN.",
      "Version control with GitHub and an emphasis on maintainable code.",
    ],
    challenge:
      "Connecting frontend interactions with backend workflows while the application architecture evolved.",
    learned:
      "This project gave me a practical foundation in CRUD workflows, relational and document databases, and the structure of a full-stack application.",
    next: "A future improvement would be to document the migration decisions and make setup easier for other students.",
    flow: [
      "Browser interface",
      "Application logic",
      "Data & user operations",
      "Database",
    ],
  },
  {
    slug: "smart-college-event-management",
    number: "02",
    title: "Smart College Event Management System",
    shortTitle: "An event system with a little more intelligence.",
    category: "Intelligent applications",
    status: "Academic project",
    role: "Project developer",
    description:
      "Taking event discovery beyond a list, with recommendations, conversation, and feedback.",
    technologies: ["Recommendations", "Chatbot", "Ratings & reviews"],
    context:
      "After working on event-management fundamentals, I wanted to explore how a system could help people discover events that were more relevant to them.",
    problem:
      "Ordinary CRUD functionality handles records. It does less to help someone decide which event to explore or to learn from their feedback.",
    contributions: [
      "Recommendation-oriented event discovery.",
      "Chatbot functionality for conversational interaction.",
      "Ratings and reviews as part of the event experience.",
    ],
    challenge:
      "Bringing recommendations, conversation, and feedback into a coherent event-management experience.",
    learned:
      "I began thinking beyond storing and displaying information, toward the ways software can support a user’s decisions.",
    next: "A future direction is to evaluate the usefulness of recommendations with clearer user feedback.",
    flow: [
      "Event discovery",
      "Recommendations",
      "Interaction",
      "Ratings & reviews",
    ],
  },
  {
    slug: "automated-email-sorting",
    number: "03",
    title: "Automated Email Sorting System",
    shortTitle: "A little less inbox sorting.",
    category: "NLP & automation",
    status: "Academic project",
    role: "Project developer",
    description:
      "Exploring how basic NLP and machine learning can take a repetitive task off someone’s hands.",
    technologies: ["NLP", "Machine learning", "Text classification"],
    context:
      "This project was a step from web applications into automation: using the content of an email to help determine where it belongs.",
    problem:
      "Sorting messages by hand is repetitive. Text classification offers a way to automate part of that workflow.",
    contributions: [
      "Automatic email categorization using basic NLP techniques.",
      "Simple machine-learning methods to improve classification.",
      "Work on performance with larger datasets.",
    ],
    challenge:
      "Balancing useful classification with performance as the amount of email data grows.",
    learned:
      "I explored the connection between language, classification, and a practical automated workflow. Model-specific details and scores are not included here because they have not been documented for this portfolio.",
    next: "Future work could include clearer evaluation reporting and a review step for uncertain classifications.",
    flow: ["Email text", "NLP & classification", "Category", "Sorted messages"],
  },
  {
    slug: "digipaila",
    number: "04",
    title: "DigiPaila",
    shortTitle: "From a classroom to a restaurant table.",
    category: "Product engineering",
    status: "Team project",
    role: "Full-stack team contributor",
    description:
      "A restaurant QR-menu and real-time ordering platform, built together with a team.",
    technologies: ["Next.js", "Supabase", "GCP", "MERN", "Vercel"],
    liveUrl: links.digipaila,
    context:
      "I contributed as a full-stack developer on the team behind the restaurant ordering product now known as DigiPaila.",
    problem:
      "The product connects a restaurant’s digital menu with a real-time ordering workflow.",
    contributions: [
      "Full-stack contribution as part of the product team.",
      "Work in the context of a QR-menu and real-time ordering platform.",
      "Experience with modern web, database, cloud, and deployment technologies.",
    ],
    challenge:
      "Contributing to a shared product meant considering the whole user journey and coordinating work across the stack.",
    learned:
      "Team-based product work gave me a different perspective from academic projects: shared decisions, collaboration, and the practical work of developing and deploying a complete application.",
    next: "My next learning focus is to get better at documenting product decisions and understanding how people use the systems we build.",
    flow: ["Scan QR", "Browse menu", "Place order", "Restaurant workflow"],
  },
  {
    slug: "financial-statement-automation",
    number: "05",
    title: "Financial Statement Automation",
    shortTitle: "Making financial data easier to work with.",
    category: "Finance + engineering",
    status: "Currently building",
    role: "Personal project · learning finance",
    description:
      "Turning financial documents into structured information, while learning the finance behind the numbers.",
    technologies: ["Python", "FastAPI", "Next.js", "Supabase", "Vercel"],
    liveUrl: links.financialAutomation,
    context:
      "My current project brings together software automation and a growing interest in finance. I want to understand the underlying domain while building something useful around it.",
    problem:
      "Financial information often arrives in documents and spreadsheets. Making it consistent and structured is an important step before analysis.",
    contributions: [
      "Developing a workflow for financial document and data processing.",
      "Exploring normalization into structured financial information.",
      "Working toward financial statement and analysis workflows.",
    ],
    challenge:
      "Learning the meaning of financial information while designing the software that processes it. The diagram below describes the project direction, not a guarantee that every stage is complete.",
    learned:
      "This is an ongoing learning process. Engineering gives me a way to explore financial statements through data and systems, while finance gives the software a domain to serve.",
    next: "Continue developing the workflow and deepen my understanding of financial statements, validation, and analysis.",
    flow: [
      "PDF / Excel / CSV",
      "Extract & normalize",
      "Structured statements",
      "Analysis",
    ],
  },
];
export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

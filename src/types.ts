export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  tools: string[];
  keyDeliverables: string[];
  popularFor: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  clientType: string;
  category: 'Technical Manuals' | 'Marketing & Collateral' | 'Packaging & Retail' | 'E-Learning & Digital' | 'RTL & Complex Scripts';
  languages: string[];
  toolsUsed: string[];
  pageCount: string;
  turnaround: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface ScriptFamily {
  id: string;
  name: string;
  scripts: string[];
  expansionFactor: string;
  specialHandling: string[];
  sampleOriginal: string;
  sampleLocalized: string;
  fontNotes: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Process & Tools' | 'Quality & Security' | 'Pricing & Delivery';
}

export interface QuoteFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  serviceType: string;
  sourceTool: string;
  targetLanguages: string[];
  pageCount: number;
  timeline: string;
  projectDescription: string;
  hasCATFiles: boolean;
}

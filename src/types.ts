export type SupportedLanguage = 
  | 'en' 
  | 'hi' 
  | 'te' 
  | 'ta' 
  | 'bn' 
  | 'mr' 
  | 'gu' 
  | 'kn' 
  | 'ml' 
  | 'pa' 
  | 'hinglish';

export interface LanguageOption {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  speechCode: string;
  flag: string;
}

export type Category = 
  | 'all'
  | 'traffic'
  | 'arrest'
  | 'search'
  | 'fir'
  | 'women_child'
  | 'phone_privacy'
  | 'fundamental_rights'
  | 'departments';

export interface OfficialSourceLink {
  title: string;
  url: string;
  department: string;
  type: 'act' | 'portal' | 'judgement' | 'helpline' | 'form' | 'gazette';
  description?: string;
  gazetteRef?: string;
  citationRef?: string;
}

export interface LegalRight {
  id: string;
  title: string;
  category: Category;
  lawRef: string; // e.g. "Section 41B CrPC / Sec 36 BNSS" or "Article 21"
  scJudgment?: string; // Landmark Supreme Court Case
  summary: string;
  detailedExplanation?: string;
  keyPoints: string[];
  whatPoliceMustDo: string[];
  whatPoliceCannotDo: string[];
  exactDialogue: string;
  priority: 'critical' | 'high' | 'medium';
  iconName: string;
  departmentId?: string;
  officialLinks?: OfficialSourceLink[];
  sourceActName?: string;
  sourceSectionOrArticle?: string;
  sources?: string[];
  legalCitations?: string[];
  translations?: Partial<Record<SupportedLanguage, {
    title: string;
    summary: string;
    detailedExplanation?: string;
    keyPoints?: string[];
    whatPoliceMustDo?: string[];
    whatPoliceCannotDo?: string[];
    exactDialogue?: string;
  }>>;
}

export interface SituationStep {
  id: string;
  title: string;
  situation: string; // Step 1: The Situation
  category: Category;
  severity: 'critical' | 'warning' | 'info';
  legalShield: string; // Step 2: Your Rights
  summaryRights?: string[]; // Quick summary rights points for 30-sec scan
  landmarkCase?: string; // Landmark Supreme Court Precedent
  sources?: string[]; // Official primary sources, acts, and official gazettes
  legalCitations?: string[]; // Standardized statutory & constitutional legal citations
  sourceActName?: string;
  sourceSectionOrArticle?: string;
  officialLinks?: OfficialSourceLink[]; // Direct links to India Code, Supreme Court, Gazette, or Gov Portals
  immediateActions: string[]; // Step 3: What To Do Now
  doNotDo: string[]; // What NOT to do
  sayThis: string; // Exact Spoken Verbal Script
  helpline: string;
  whereToComplain?: { // Step 4: Where To Complain
    authority: string;
    steps: string[];
    helplineOrPortal: string;
    portalUrl?: string;
    actSection?: string;
  };
  fastScan30Sec?: {
    situationText: string;
    topRightText: string;
    mustDoText: string;
    complainToText: string;
  };
  detailedExplanation?: string;
  departmentId?: string;
  translations?: Partial<Record<SupportedLanguage, {
    title: string;
    situation: string;
    legalShield: string;
    summaryRights?: string[];
    immediateActions: string[];
    doNotDo: string[];
    sayThis: string;
    whereToComplain?: {
      authority: string;
      steps: string[];
      helplineOrPortal?: string;
    };
    detailedExplanation?: string;
  }>>;
}

export interface DepartmentLink {
  id: string;
  name: string;
  department: string;
  ministryOrAuthority: string;
  category: 'police' | 'traffic' | 'cyber' | 'legal_aid' | 'human_rights' | 'women_child' | 'rti_vigilance' | 'consumer';
  description: string;
  fullOverview: string;
  portalUrl: string;
  grievanceUrl?: string;
  helplineNumber?: string;
  helplineName?: string;
  servicesProvided: string[];
  keyActsGoverning: string[];
  officialSourceCitation: string;
  verifiedGovBadge: string;
  translations?: Partial<Record<SupportedLanguage, {
    name: string;
    description: string;
    fullOverview: string;
    servicesProvided?: string[];
  }>>;
}

export interface MythItem {
  id: string;
  myth: string;
  reality: string;
  explanation: string;
  lawSection: string;
  tag: string;
  officialLinks?: OfficialSourceLink[];
  translations?: Partial<Record<SupportedLanguage, {
    myth: string;
    reality: string;
    explanation: string;
    tag?: string;
  }>>;
}

export interface ScriptDialogue {
  id: string;
  scenario: string;
  category: Category;
  policeAsks: string;
  citizenResponseEnglish: string;
  citizenResponseHindi?: string;
  citizenResponses?: Partial<Record<SupportedLanguage, string>>;
  legalBasis: string;
  tip: string;
  officialLinks?: OfficialSourceLink[];
  translations?: Partial<Record<SupportedLanguage, {
    scenario: string;
    policeAsks: string;
    tip: string;
  }>>;
}

export interface DKBasuGuideline {
  num: number;
  title: string;
  desc: string;
  legalSignificance?: string;
  officialJudgementRef?: string;
  translations?: Partial<Record<SupportedLanguage, {
    title: string;
    desc: string;
  }>>;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  legalReference: string;
  translations?: Partial<Record<SupportedLanguage, {
    question: string;
    options: string[];
    explanation: string;
  }>>;
}

export interface EmergencyContact {
  name: string;
  number: string;
  description: string;
  category: string;
  available: string;
  tollFree: boolean;
  departmentUrl?: string;
}

export interface DetailPageTarget {
  type: 'situation' | 'right' | 'department' | 'dk-basu' | 'script' | 'guidebook';
  id: string;
}

export interface StatutoryProvision {
  code: string;
  section_or_article: string;
  official_title: string;
  official_source_url: string;
}

export interface GuidebookPage {
  page_number: number;
  chapter: string;
  title: string;
  icon: string;
  statutory_provisions: StatutoryProvision[];
  situation_trigger: string;
  your_rights_summary: string[];
  immediate_action_steps: string[];
  what_to_say_script: string;
  remedy_and_complaint_forum: string;
  landmark_judgments: string[];
}

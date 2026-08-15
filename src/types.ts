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
  | 'fundamental_rights';

export interface LegalRight {
  id: string;
  title: string;
  category: Category;
  lawRef: string; // e.g. "Section 41B CrPC / Sec 36 BNSS" or "Article 21"
  scJudgment?: string; // Landmark Supreme Court Case
  summary: string;
  keyPoints: string[];
  whatPoliceMustDo: string[];
  whatPoliceCannotDo: string[];
  exactDialogue: string;
  priority: 'critical' | 'high' | 'medium';
  iconName: string;
  translations?: Partial<Record<SupportedLanguage, {
    title: string;
    summary: string;
    keyPoints?: string[];
    whatPoliceMustDo?: string[];
    whatPoliceCannotDo?: string[];
    exactDialogue?: string;
  }>>;
}

export interface SituationStep {
  id: string;
  title: string;
  situation: string;
  category: Category;
  severity: 'critical' | 'warning' | 'info';
  immediateActions: string[];
  doNotDo: string[];
  legalShield: string;
  sayThis: string;
  helpline: string;
  translations?: Partial<Record<SupportedLanguage, {
    title: string;
    situation: string;
    immediateActions: string[];
    doNotDo: string[];
    legalShield: string;
    sayThis: string;
  }>>;
}

export interface MythItem {
  id: string;
  myth: string;
  reality: string;
  explanation: string;
  lawSection: string;
  tag: string;
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
}

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
  hindiTitle?: string;
  category: Category;
  lawRef: string; // e.g. "Section 41B CrPC / Sec 36 BNSS" or "Article 21"
  scJudgment?: string; // Landmark Supreme Court Case
  summary: string;
  hindiSummary?: string;
  keyPoints: string[];
  whatPoliceMustDo: string[];
  whatPoliceCannotDo: string[];
  exactDialogue: string;
  priority: 'critical' | 'high' | 'medium';
  iconName: string;
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
}

export interface MythItem {
  id: string;
  myth: string;
  reality: string;
  explanation: string;
  lawSection: string;
  tag: string;
}

export interface ScriptDialogue {
  id: string;
  scenario: string;
  category: Category;
  policeAsks: string;
  citizenResponseEnglish: string;
  citizenResponseHindi: string;
  legalBasis: string;
  tip: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  legalReference: string;
}

export interface EmergencyContact {
  name: string;
  number: string;
  description: string;
  category: string;
  available: string;
  tollFree: boolean;
}

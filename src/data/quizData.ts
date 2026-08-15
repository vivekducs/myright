import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Can a traffic police officer seize your car ignition key or deflate your tyres during a routine check?',
    options: [
      'Yes, if they suspect any minor traffic violation',
      'No, it is strictly illegal under the Motor Vehicles Act',
      'Only if they are an Inspector rank officer',
      'Yes, anywhere in India'
    ],
    correctIndex: 1,
    explanation: 'No police officer of any rank is authorized to forcefully remove vehicle keys or deflate tyres. This is an illegal practice condemned by High Courts.',
    legalReference: 'Motor Vehicles Act, 1988 & High Court directives'
  },
  {
    id: 'q2',
    question: 'Within how many hours must an arrested citizen be produced before a Judicial Magistrate in India?',
    options: [
      'Within 12 hours',
      'Within 24 hours (excluding journey time)',
      'Within 48 hours',
      'Within 7 days'
    ],
    correctIndex: 1,
    explanation: 'Under Article 22(2) of the Constitution and Section 57 CrPC, any person arrested without warrant must be produced before the nearest magistrate within 24 hours.',
    legalReference: 'Article 22(2) Constitution of India & Section 57 CrPC'
  },
  {
    id: 'q3',
    question: 'Under what conditions can a woman be arrested between sunset and sunrise (approx. 6 PM to 6 AM)?',
    options: [
      'Any time if a male Sub-Inspector is present',
      'Only with the prior written permission of a Judicial Magistrate First Class',
      'If the police station has female constables on duty',
      'Never under any circumstance'
    ],
    correctIndex: 1,
    explanation: 'Section 46(4) of the CrPC mandates that no woman shall be arrested after sunset and before sunrise except in extraordinary cases where prior written permission of a Judicial Magistrate First Class is obtained by a female officer.',
    legalReference: 'Section 46(4) CrPC (Sec 43 BNSS)'
  },
  {
    id: 'q4',
    question: 'What is a "Zero FIR" in Indian criminal procedure?',
    options: [
      'An FIR that requires zero investigation fees',
      'An FIR registered at ANY police station irrespective of territorial jurisdiction for cognizable crimes',
      'An FIR filed anonymously online without names',
      'An FIR for petty traffic offenses only'
    ],
    correctIndex: 1,
    explanation: 'A Zero FIR can be lodged at any police station across India regardless of where the crime occurred. The station registers it as FIR No. 0 and transfers the case to the competent jurisdiction.',
    legalReference: 'Section 154 CrPC & Lalita Kumari Supreme Court ruling'
  },
  {
    id: 'q5',
    question: 'Are digital driving licenses and RC stored on DigiLocker or mParivahan legally valid when stopped by traffic police?',
    options: [
      'No, original hard plastic cards are mandatory',
      'Yes, 100% legally recognized by Ministry of Road Transport',
      'Only valid in metropolitan cities',
      'Only valid during daytime'
    ],
    correctIndex: 1,
    explanation: 'Rule 139 of the Central Motor Vehicles Rules and MoRTH notifications clearly establish that digital documents on DigiLocker or mParivahan are treated on par with physical documents.',
    legalReference: 'Rule 139 CMVR / IT Act Section 9A'
  },
  {
    id: 'q6',
    question: 'Under Article 20(3) of the Indian Constitution, what protection is guaranteed to an accused citizen?',
    options: [
      'Right to travel abroad freely',
      'Protection against self-incrimination (cannot be compelled to be a witness against oneself)',
      'Right to government employment',
      'Right to free vehicle fuel'
    ],
    correctIndex: 1,
    explanation: 'Article 20(3) provides fundamental protection against self-incrimination: no person accused of any offence can be forced or coerced into giving statements or confessions against themselves.',
    legalReference: 'Article 20(3) Constitution of India'
  }
];

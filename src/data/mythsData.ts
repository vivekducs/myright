import { MythItem } from '../types';

export const MYTHS_DATA: MythItem[] = [
  {
    id: 'myth-keys',
    myth: 'Traffic police can snatch your vehicle ignition keys or hit your car.',
    reality: 'Strictly ILLEGAL.',
    explanation: 'No police officer of any rank is empowered under the Motor Vehicles Act to snatch car or bike ignition keys or physically abuse vehicles. It is an unlawful act of aggression.',
    lawSection: 'Motor Vehicles Act, 1988 & High Court directives',
    tag: 'Traffic'
  },
  {
    id: 'myth-fir-jurisdiction',
    myth: 'A police station can reject your complaint if the crime happened in another area.',
    reality: 'FALSE. "Zero FIR" is mandatory.',
    explanation: 'Any police station in India is legally obligated to register a Zero FIR for a cognizable crime and then transfer the case to the appropriate jurisdiction station.',
    lawSection: 'Section 154 CrPC / Lalita Kumari SC ruling',
    tag: 'FIR'
  },
  {
    id: 'myth-recording',
    myth: 'Recording video of police on public roads is a crime.',
    reality: 'FALSE. Public recording is legal.',
    explanation: 'Police officers are public servants carrying out public duty. Recording them in public spaces is protected under Article 19(1)(a) freedom of speech and expression, provided you do not physically obstruct their work.',
    lawSection: 'Article 19(1)(a) Constitution of India',
    tag: 'Digital Rights'
  },
  {
    id: 'myth-women-night',
    myth: 'Police can arrest women at 2 AM for normal questioning.',
    reality: 'PROHIBITED by Section 46(4) CrPC.',
    explanation: 'Women cannot be arrested between sunset and sunrise except under extraordinary situations where the police have obtained prior written permission from a Judicial Magistrate First Class.',
    lawSection: 'Section 46(4) CrPC / Sec 43 BNSS',
    tag: 'Women Rights'
  },
  {
    id: 'myth-phone-unlock',
    myth: 'Police can demand you unlock your phone during random roadside stop.',
    reality: 'FALSE. Digital Privacy is a Fundamental Right.',
    explanation: 'Under the 9-judge Supreme Court landmark Puttaswamy judgment (Article 21), your digital device is private. Police cannot casually browse your chats or photos without a formal Section 91 notice or search warrant.',
    lawSection: 'Article 21 & K.S. Puttaswamy (2017)',
    tag: 'Privacy'
  },
  {
    id: 'myth-towing',
    myth: 'Traffic cranes can tow your vehicle while you or your family are seated inside.',
    reality: 'STRICTLY ILLEGAL.',
    explanation: 'Traffic rules explicitly forbid towing any vehicle with occupants or pets seated inside. It constitutes a severe safety violation by the towing contractor and police.',
    lawSection: 'Motor Vehicles (Driving) Regulations',
    tag: 'Traffic'
  },
  {
    id: 'myth-blank-paper',
    myth: 'You must sign whatever statement the police officer writes down.',
    reality: 'NEVER SIGN BLANK OR INACCURATE PAPERS.',
    explanation: 'Under Article 20(3) and Section 162 CrPC, no citizen can be forced to sign a statement made during police investigation. Police confessions are also inadmissible in court under Sec 25 Evidence Act.',
    lawSection: 'Article 20(3) & Sec 162 CrPC',
    tag: 'Arrest'
  },
  {
    id: 'myth-digilocker',
    myth: 'Traffic police can refuse DigiLocker / mParivahan and demand physical plastic cards.',
    reality: 'FALSE. Ministry of Road Transport Circular confirms 100% legal validity.',
    explanation: 'MoRTH notification states that electronic documents stored in the DigiLocker or mParivahan app carry the exact same legal validity as physical driving license and RC books.',
    lawSection: 'Rule 139 of Central Motor Vehicles Rules',
    tag: 'Traffic'
  }
];

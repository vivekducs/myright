import { LegalRight, SituationStep, EmergencyContact } from '../types';

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    name: 'National Emergency Helpline',
    number: '112',
    description: 'Unified all-in-one emergency number for Police, Fire, Ambulance across India',
    category: 'General',
    available: '24/7',
    tollFree: true,
  },
  {
    name: 'Women Police Helpline',
    number: '1091',
    description: 'Dedicated national helpline for women in distress, harassment or unlawful detention',
    category: 'Women Safety',
    available: '24/7',
    tollFree: true,
  },
  {
    name: 'National Cyber Crime Reporting',
    number: '1930',
    description: 'Instant reporting for financial cyber frauds, online harassment, and digital threats',
    category: 'Cyber & Phone',
    available: '24/7',
    tollFree: true,
  },
  {
    name: 'NALSA Free Legal Aid Helpline',
    number: '15100',
    description: 'National Legal Services Authority - free legal counsel and advocate assistance for eligible citizens & arrested persons',
    category: 'Legal Counsel',
    available: '24/7',
    tollFree: true,
  },
  {
    name: 'Childline India',
    number: '1098',
    description: 'Emergency assistance and protection for children under 18 years',
    category: 'Children',
    available: '24/7',
    tollFree: true,
  },
  {
    name: 'NHAI Highway Emergency',
    number: '1033',
    description: 'Assistance on National Highways during harassment or vehicle breakdown',
    category: 'Traffic & Highway',
    available: '24/7',
    tollFree: true,
  }
];

export const LEGAL_RIGHTS: LegalRight[] = [
  {
    id: 'traffic-keys',
    title: 'Police Cannot Snatch Car/Bike Ignition Keys',
    hindiTitle: 'पुलिस आपकी गाड़ी की चाबी जबरन नहीं निकाल सकती',
    category: 'traffic',
    lawRef: 'Motor Vehicles Act, 1988 & State Police Acts',
    scJudgment: 'High Court & MVA Directives',
    summary: 'A police officer has no legal authority to forcefully remove the key from your vehicle’s ignition or deflate your tyres.',
    hindiSummary: 'ट्रैफिक पुलिस या कोई भी अधिकारी आपकी गाड़ी की चाबी नहीं छीन सकता और न ही पहिए की हवा निकाल सकता है।',
    keyPoints: [
      'Traffic police are not legally allowed to snatch ignition keys or physically assault the vehicle.',
      'Only an officer of the rank of Sub-Inspector (SI) or above is authorized to issue spot fines exceeding ₹100 or compound offences in most states.',
      'An Assistant Sub-Inspector (ASI) or Constable cannot confiscate your driving license on the spot without an official e-challan or seized receipt.',
      'Digital documents on DigiLocker or mParivahan are 100% legally valid (Rule 139 MVA).'
    ],
    whatPoliceMustDo: [
      'Wear a clear name badge with visible rank identification and buckle number.',
      'Produce an official e-Challan machine or government receipt book.',
      'Accept digital driving license and RC on authorized government apps (DigiLocker / mParivahan).'
    ],
    whatPoliceCannotDo: [
      'Forcefully pull out the vehicle key or hit the vehicle.',
      'Tow your car while a person or pet is seated inside.',
      'Demand payment without issuing an official printed or SMS e-challan receipt.'
    ],
    exactDialogue: '“Sir, with due respect, snatching the ignition key is illegal under the Motor Vehicles rules. Here are my verified digital documents on DigiLocker.”',
    priority: 'high',
    iconName: 'Car'
  },
  {
    id: 'dk-basu-arrest',
    title: 'The 11 D.K. Basu Arrest Guidelines',
    hindiTitle: 'गिरफ्तारी के 11 अनिवार्य डी.के. बसु नियम',
    category: 'arrest',
    lawRef: 'Supreme Court of India (D.K. Basu v. State of West Bengal, 1997) & Sec 41B CrPC / Sec 36 BNSS',
    scJudgment: 'AIR 1997 SC 610',
    summary: 'Mandatory constitutional safeguards every police officer must strictly follow before, during, and after an arrest.',
    hindiSummary: 'गिरफ्तारी के समय पुलिस को अरेस्ट मेमो बनाना, परिवार को सूचित करना और डॉक्टर से मेडिकल चेकअप कराना अनिवार्य है।',
    keyPoints: [
      'Identification: Arresting officers must wear clear, visible name tags with designations.',
      'Arrest Memo: Must prepare an official Arrest Memo at the spot, signed by at least one witness (family member or respectable local citizen) and counter-signed by the arrestee.',
      'Right to Inform Family: Police must notify a relative, friend, or nominated person within 8 to 12 hours of arrest.',
      'Medical Examination: The arrested person has the right to be medically examined at the time of arrest and every 48 hours in custody.',
      '24-Hour Magistrate Rule: Must be produced before the nearest Judicial Magistrate within 24 hours of arrest (excluding travel time).'
    ],
    whatPoliceMustDo: [
      'Hand over a copy of the formal Arrest Memo to the arrestee or family.',
      'Enter all details of arrest in the official station General Diary (GD).',
      'Inform the Police Control Room at District & State Headquarters within 12 hours.'
    ],
    whatPoliceCannotDo: [
      'Detain any citizen without issuing a formal arrest memo or registering it in the General Diary.',
      'Keep an arrested person in custody beyond 24 hours without judicial magistrate remand order.',
      'Use third-degree torture or physical abuse (strictly unconstitutional under Article 21).'
    ],
    exactDialogue: '“Under the Supreme Court’s D.K. Basu guidelines and Section 41B, please provide me with my formal Arrest Memo and allow me to make my one phone call to my family and advocate.”',
    priority: 'critical',
    iconName: 'ShieldAlert'
  },
  {
    id: 'women-arrest-sunset',
    title: 'Women Arrest & Search Protections',
    hindiTitle: 'महिलाओं की गिरफ्तारी एवं तलाशी के विशेष अधिकार',
    category: 'women_child',
    lawRef: 'Section 46(4) & Section 51(2) CrPC (Sec 43 BNSS) / Sheela Barse vs State of Maharashtra',
    scJudgment: 'Supreme Court Directive',
    summary: 'A woman cannot be arrested between sunset and sunrise except in exceptional circumstances with prior written permission of a Judicial Magistrate.',
    hindiSummary: 'सूर्यास्त के बाद और सूर्योदय से पहले किसी महिला को गिरफ्तार नहीं किया जा सकता, केवल महिला पुलिस ही तलाशी ले सकती है।',
    keyPoints: [
      'No Arrest Between Sunset & Sunrise: Police cannot arrest a woman after sunset (approx 6 PM) and before sunrise (approx 6 AM) without written prior approval of a Judicial Magistrate First Class.',
      'Female Police Officer Mandatory: A woman can only be arrested and searched by a female police officer with strict regard to decency.',
      'Male officers are strictly prohibited from touching or physically handling a female accused.',
      'Interrogation at Residence: Under Section 160 CrPC, women, children below 15, and senior citizens above 65 cannot be summoned to the police station for questioning as witnesses; they must be questioned at their residence.'
    ],
    whatPoliceMustDo: [
      'Deploy a female police officer for any search, detention, or custody.',
      'Ensure a female relative or female constable accompanies any transit.',
      'Question female witnesses at their home in presence of family.'
    ],
    whatPoliceCannotDo: [
      'Arrest a woman at night without prior written Judicial Magistrate permission.',
      'Conduct a body search of a woman using male officers.',
      'Force female witnesses to appear at the police station for interrogation.'
    ],
    exactDialogue: '“Under Section 46(4) of the CrPC and Supreme Court guidelines, a woman cannot be arrested after sunset without a Judicial Magistrate’s written order. Also, only a female officer may conduct any physical search.”',
    priority: 'critical',
    iconName: 'UserCheck'
  },
  {
    id: 'zero-fir',
    title: 'Right to File a "Zero FIR" Anywhere in India',
    hindiTitle: 'भारत में कहीं भी "जीरो एफआईआर" दर्ज कराने का अधिकार',
    category: 'fir',
    lawRef: 'Section 154 CrPC / Sec 173 BNSS & Lalita Kumari v. Govt. of UP (2014)',
    scJudgment: 'Supreme Court 5-Judge Constitution Bench',
    summary: 'A police station cannot refuse to register an FIR for a cognizable offence citing lack of territorial jurisdiction.',
    hindiSummary: 'घटना कहीं भी हुई हो, किसी भी नजदीकी थाने में जीरो FIR दर्ज कराना आपका कानूनी अधिकार है, पुलिस मना नहीं कर सकती।',
    keyPoints: [
      'Zero FIR Concept: If a cognizable crime happens, ANY police station in India is legally bound to register the FIR under number "0" and then transfer it to the jurisdictional station.',
      'Mandatory Registration: In Lalita Kumari vs Govt of UP, the Supreme Court ruled that registering an FIR is mandatory if information discloses a cognizable offence.',
      'Free Copy: The informant is entitled to receive a FREE signed copy of the registered FIR immediately.',
      'Remedy on Refusal: If an SHO refuses to file your FIR, send the complaint in writing by registered post to the Superintendent of Police (SP/DCP) under Section 154(3) CrPC, or file an application before a Magistrate under Section 156(3).'
    ],
    whatPoliceMustDo: [
      'Register Zero FIR immediately without arguing over jurisdiction boundaries.',
      'Provide a free carbon copy of the FIR bearing official police stamp and signature.',
      'Transfer the case file to the concerned police station without delaying victim relief.'
    ],
    whatPoliceCannotDo: [
      'Refuse to register an FIR on grounds of jurisdiction, late night, or lack of staff.',
      'Charge money or fees for filing an FIR or giving the official copy.',
      'Refuse to record the complaint in the complainant’s own words.'
    ],
    exactDialogue: '“Officer, under the Supreme Court’s Lalita Kumari judgment and Section 154 CrPC, registering a Zero FIR is mandatory for cognizable complaints. Please register it and hand over my free copy.”',
    priority: 'high',
    iconName: 'FileText'
  },
  {
    id: 'phone-privacy',
    title: 'Can Police Check Your Phone or WhatsApp?',
    hindiTitle: 'क्या पुलिस आपका मोबाइल या व्हाट्सएप चेक कर सकती है?',
    category: 'phone_privacy',
    lawRef: 'Article 21 (Right to Privacy - Puttaswamy Judgment), Section 91 CrPC & Sec 43/66 IT Act',
    scJudgment: 'Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)',
    summary: 'Police cannot arbitrarily stop you on the street, snatch your phone, or force you to unlock it without a specific court warrant or formal investigation order.',
    hindiSummary: 'सड़क पर या नाके पर पुलिस मनमाने ढंग से आपका फोन अनलॉक करने या पर्सनल चैट्स देखने का दबाव नहीं डाल सकती।',
    keyPoints: [
      'Right to Digital Privacy: Your smartphone contains deeply private personal data protected as a Fundamental Right under Article 21 (Puttaswamy 9-judge bench ruling).',
      'No Random Street Checks: Routine traffic or street patrolling officers have NO legal power to demand phone passwords or inspect private WhatsApp conversations.',
      'Formal Seizure Requirements: To seize a digital device, an Investigating Officer (IO) must formally issue a notice under Section 91 CrPC or have reasonable suspicion in an actively registered FIR, with a formal seizure memo (Panchanama) listing the IMEI, condition, and device hash values.',
      'Right Against Self-Incrimination: Article 20(3) of the Indian Constitution protects citizens from being compelled to be witnesses against themselves.'
    ],
    whatPoliceMustDo: [
      'Provide a formal written notice or search warrant explaining why digital evidence is required in a registered criminal case.',
      'Follow digital forensics protocols (e.g. placing phone in Faraday bag, creating hash value in presence of independent witnesses).'
    ],
    whatPoliceCannotDo: [
      'Randomly browse personal photos, social media apps, or WhatsApp messages during routine checks.',
      'Coerce or physically force a citizen to unlock biometric or PIN without legal warrants.',
      'Delete videos or photos recorded by a citizen in a public space.'
    ],
    exactDialogue: '“Sir, my phone contains protected personal communications under Article 21 (Puttaswamy privacy judgment). Unless there is a formal Section 91 notice or search warrant in a registered case, I am not obligated to unlock it.”',
    priority: 'high',
    iconName: 'Smartphone'
  },
  {
    id: 'recording-police',
    title: 'Right to Record Police in Public Spaces',
    hindiTitle: 'सार्वजनिक स्थान पर पुलिस की वीडियो रिकॉर्डिंग करने का अधिकार',
    category: 'fundamental_rights',
    lawRef: 'Article 19(1)(a) Freedom of Speech & Public Duty Accountability',
    scJudgment: 'High Court & Legal Precedents',
    summary: 'Citizens have the legal right to record audio/video of police officers performing public duties in public areas, provided it does not physically obstruct their work.',
    hindiSummary: 'पब्लिक प्लेस पर पुलिस की चेकिंग या बातचीत की वीडियो बनाना गैरकानूनी नहीं है, जब तक आप उनकी ड्यूटी में बाधा न डालें।',
    keyPoints: [
      'Public Servant Accountability: Police officers are public servants executing public duty in public spaces. Recording is protected under Article 19(1)(a).',
      'No General Law Forbids It: There is no provision in the Indian Penal Code or Police Act that criminalizes recording public police interactions.',
      'Exceptions: Restricted military or defense installations (Official Secrets Act) or security-sensitive crime scenes where recording causes physical obstruction.',
      'Protection of Footage: Police cannot snatch your phone or delete footage. Deleting evidence or snatching property without legal seizure can amount to extortion or mischief.'
    ],
    whatPoliceMustDo: [
      'Allow peaceful, non-obstructive recording by citizens or media.',
      'Maintain polite, professional conduct while on public duty.'
    ],
    whatPoliceCannotDo: [
      'Threaten false FIRs or snatch smartphones simply for recording public interactions.',
      'Forcefully format or delete media from a citizen’s mobile phone.'
    ],
    exactDialogue: '“Officer, I am standing at a safe distance without obstructing your duty. Recording in a public space is protected under Article 19(1)(a) for mutual transparency.”',
    priority: 'medium',
    iconName: 'Video'
  },
  {
    id: 'search-without-warrant',
    title: 'House Search & Body Search Rules',
    hindiTitle: 'घर की तलाशी और बॉडी सर्च के सख्त नियम',
    category: 'search',
    lawRef: 'Section 100 & Section 165 CrPC (Sec 185 BNSS)',
    scJudgment: 'Landmark Procedural Standards',
    summary: 'A police officer entering a private residence to conduct a search must follow strict statutory procedures to prevent planted evidence.',
    hindiSummary: 'घर की तलाशी से पहले पुलिस को दो स्वतंत्र गवाहों को बुलाना और तलाशी से पहले अपनी खुद की तलाशी देना आवश्यक है।',
    keyPoints: [
      'Search Warrant or Section 165: A search generally requires a warrant from a Magistrate. In emergency situations under Section 165 CrPC, the officer must record the specific reasons in writing in the station diary before entering.',
      'Independent Witnesses (Panchas): The search MUST be conducted in the presence of two or more independent and respectable inhabitants of the locality.',
      'Police Must Offer Self-Search: Before touching any belonging, the police officers themselves must allow the homeowner to search them to ensure no evidence is planted.',
      'Seizure List (Panchanama): Every single item seized must be documented on the spot in a seizure list, signed by the independent witnesses and handed to the occupant with a free copy.'
    ],
    whatPoliceMustDo: [
      'Show search warrant or recorded Section 165 grounds of belief.',
      'Allow occupants and family members to witness the search throughout.',
      'Provide a signed inventory of every single seized article on the spot.'
    ],
    whatPoliceCannotDo: [
      'Conduct a secret search without allowing the homeowner to observe.',
      'Seize items without listing them on an official Panchanama receipt.',
      'Vandalize or damage household property during the search.'
    ],
    exactDialogue: '“Please show me the search warrant or recorded Section 165 memo. We also request two independent local witnesses be called, and officers offer themselves for search before entering.”',
    priority: 'high',
    iconName: 'Home'
  },
  {
    id: 'right-to-lawyer-silence',
    title: 'Right to Legal Aid & Right to Remain Silent',
    hindiTitle: 'वकील का अधिकार और चुप रहने का मौलिक अधिकार',
    category: 'fundamental_rights',
    lawRef: 'Article 20(3), Article 22(1), Article 39A & Sec 41D CrPC (Sec 38 BNSS)',
    scJudgment: 'Nandini Satpathy v. P.L. Dani (1978)',
    summary: 'You have the constitutional right to consult an advocate of your choice and cannot be compelled to give self-incriminating statements under coercion.',
    hindiSummary: 'पूछताछ के दौरान अपने वकील से मिलने का अधिकार और खुद के खिलाफ बयान देने से इनकार करने का मौलिक अधिकार।',
    keyPoints: [
      'Right to Counsel: Under Section 41D CrPC, an arrested person is entitled to meet and consult an advocate of their choice throughout interrogation (though not sitting throughout the continuous questioning).',
      'Right to Free Legal Aid: Article 39A and NALSA Act guarantee free legal aid to anyone who cannot afford a private lawyer.',
      'Right Against Self-Incrimination: Article 20(3) protects you from being forced to confess or sign blank papers.',
      'Statements before Police: A confession made to a police officer is generally inadmissible as evidence in court under Section 25 of the Indian Evidence Act.'
    ],
    whatPoliceMustDo: [
      'Permit the arrestee to contact their lawyer immediately.',
      'Inform the Legal Services Authority (DLSA/NALSA) if the person cannot afford an advocate.'
    ],
    whatPoliceCannotDo: [
      'Force or coerce an accused to sign blank stamp papers or confessions.',
      'Deny access to legal counsel after formal arrest.'
    ],
    exactDialogue: '“Under Article 20(3) and Section 41D CrPC, I wish to exercise my right to remain silent until I consult my legal counsel.”',
    priority: 'critical',
    iconName: 'Scale'
  }
];

export const SITUATION_STEPS: SituationStep[] = [
  {
    id: 'traffic-stopped',
    title: 'Traffic Police Stopped My Vehicle',
    situation: 'You are driving and a traffic cop flags you down at a naka / intersection.',
    category: 'traffic',
    severity: 'warning',
    immediateActions: [
      'Pull over safely to the left curb, turn on hazard lights, and keep your hands visible on the steering wheel/handlebars.',
      'Politely ask the officer for their name, rank, and the specific traffic rule violation.',
      'Show your Driving License, Registration Certificate (RC), Insurance, and PUC via DigiLocker or mParivahan apps.',
      'If fined, demand an official electronic e-Challan receipt. Check that the violation code and fine amount match the central MVA table.'
    ],
    doNotDo: [
      'Do NOT offer bribes, cash without a receipt, or get into aggressive shouting matches.',
      'Do NOT allow an officer below Sub-Inspector (SI) rank to seize your vehicle or demand on-spot cash over ₹100.',
      'Do NOT leave your vehicle key inside if an officer tries to snatch it unlawfully.'
    ],
    legalShield: 'Motor Vehicles Act Rule 139 (Digital Documents) & Section 130/132 MVA.',
    sayThis: '“Good evening Officer. Please let me know what violation occurred. Here are my verified digital documents on DigiLocker.”',
    helpline: '112 or local Traffic Helpline'
  },
  {
    id: 'police-threatens-arrest',
    title: 'Police Threatening with Arrest or Detention',
    situation: 'An officer says “Come with us to the police station” or threatens to lock you up.',
    category: 'arrest',
    severity: 'critical',
    immediateActions: [
      'Stay calm. Ask firmly: “Am I being detained, arrested, or asked to assist an inquiry?”',
      'If for offences punishable by under 7 years, police must first issue a Section 41A Notice of Appearance before arresting (Arnesh Kumar judgment).',
      'If being arrested, demand the formal Arrest Memo with exact charges, date, time, and witness signature (D.K. Basu guidelines).',
      'Exercise your right to make one phone call to a family member and your legal counsel.'
    ],
    doNotDo: [
      'Do NOT physically resist, run away, or use abusive language.',
      'Do NOT sign blank papers, unread statements, or undated documents.',
      'Do NOT accept detention beyond 24 hours without being presented to a Judicial Magistrate.'
    ],
    legalShield: 'Article 22(1) & (2) Constitution of India, Section 41B & 41D CrPC, Arnesh Kumar v. State of Bihar.',
    sayThis: '“Officer, if I am being arrested, please state the grounds under Article 22(1), prepare the D.K. Basu Arrest Memo, and allow me to call my family and lawyer.”',
    helpline: '112 / 15100 (Free Legal Aid)'
  },
  {
    id: 'fir-refused',
    title: 'Police Refusing to Register My FIR',
    situation: 'You went to the police station to report a theft, assault, or cheating, but the duty officer turns you away.',
    category: 'fir',
    severity: 'warning',
    immediateActions: [
      'Remind the officer that under the Supreme Court Lalita Kumari ruling, registering an FIR is mandatory for cognizable complaints.',
      'If jurisdiction is disputed, demand a “Zero FIR”. The station must register it and transfer it later.',
      'If the SHO still refuses, send your written complaint by Registered Post / Speed Post to the District Superintendent of Police (SP) or Deputy Commissioner of Police (DCP) under Section 154(3) CrPC.',
      'Alternatively, approach a Judicial Magistrate through an advocate under Section 156(3) CrPC to order police investigation.'
    ],
    doNotDo: [
      'Do NOT leave without obtaining an acknowledgement stamp on your written complaint copy.',
      'Do NOT agree to oral informal promises without a GD (General Diary) entry number.'
    ],
    legalShield: 'Lalita Kumari v. Govt. of UP (2014) & Section 154(1)/(3) CrPC.',
    sayThis: '“Under the Supreme Court’s Lalita Kumari guidelines, you are legally bound to register an FIR for cognizable offences. If this jurisdiction is an issue, please register a Zero FIR.”',
    helpline: '112 / State Police Grievance Portal'
  },
  {
    id: 'phone-check-naka',
    title: 'Police Asking to Check My Phone & WhatsApp',
    situation: 'At a checkpost or during routine patrolling, an officer asks you to unlock your phone and hand it over.',
    category: 'phone_privacy',
    severity: 'warning',
    immediateActions: [
      'Politely state that personal digital devices are protected under the Right to Privacy (Article 21).',
      'Ask if there is an active registered FIR or court warrant authorizing the search of this device.',
      'If the officer persists, note down their badge name, vehicle number, and location.',
      'If the phone is formally seized, demand a Seizure Memo (Panchanama) with IMEI, make, physical condition, and seal hash recorded in front of independent witnesses.'
    ],
    doNotDo: [
      'Do NOT hand over your phone unlocked for casual browsing of photos and private chats.',
      'Do NOT allow police to delete your recordings or videos taken in public spaces.'
    ],
    legalShield: 'Puttaswamy v. Union of India (2017) & Article 20(3) Self-Incrimination.',
    sayThis: '“Officer, under the Supreme Court privacy ruling, personal phones cannot be checked randomly without a formal Section 91 notice or search warrant in a registered case.”',
    helpline: '1930 (Cybercrime) / 112'
  },
  {
    id: 'night-women-visit',
    title: 'Police Approaching a Woman at Night',
    situation: 'Police officers arrive after dark or attempt to detain or summon a woman to the station at night.',
    category: 'women_child',
    severity: 'critical',
    immediateActions: [
      'Check if there are female police officers present. A woman cannot be touched or arrested by male officers.',
      'Under Section 46(4) CrPC, no woman can be arrested between sunset and sunrise without a prior written order from a Judicial Magistrate First Class.',
      'If called as a witness, under Section 160 CrPC, women and children must be examined at their place of residence, not at the police station.',
      'Dial 1091 (Women Helpline) or 112 immediately if feeling unsafe or threatened.'
    ],
    doNotDo: [
      'Do NOT accompany male officers to the police station late at night without female police presence and magistrate orders.',
      'Do NOT permit physical searches by male personnel.'
    ],
    legalShield: 'Section 46(4), Section 51(2), Section 160 CrPC & National Human Rights Commission Guidelines.',
    sayThis: '“Under Section 46(4) of the CrPC, women cannot be arrested after sunset without a magistrate’s written order. Please send a female officer during daytime hours.”',
    helpline: '1091 (Women Helpline) / 112'
  }
];

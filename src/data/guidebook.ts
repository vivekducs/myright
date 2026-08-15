import { GuidebookPage } from '../types';

export const GUIDEBOOK_PAGES: GuidebookPage[] = [
  {
    page_number: 1,
    chapter: "Chapter 1: Street Stops & Roadside Questioning",
    title: "When Police Stop You on the Road",
    icon: "shield-alert",
    statutory_provisions: [
      {
        code: "Constitution of India",
        section_or_article: "Article 21",
        official_title: "Protection of Life and Personal Liberty",
        official_source_url: "https://www.indiacode.nic.in/"
      },
      {
        code: "BNSS 2023",
        section_or_article: "Section 35(3) & Section 179",
        official_title: "Notice of Appearance before Police Officer & Attendance of Witnesses",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/20063"
      },
      {
        code: "Motor Vehicles Act 1988",
        section_or_article: "Section 130 & Rule 139 CMVR",
        official_title: "Production of Driving Licence and Certificate of Registration (DigiLocker/mParivahan Validity)",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/1798"
      }
    ],
    situation_trigger: "An officer stops your vehicle or halts you on the street, demanding ID, vehicle search, or asking you to accompany them to the police station.",
    your_rights_summary: [
      "You have the right to ask for the officer's full name, rank badge, and designated police station before answering questions.",
      "Traffic police below the rank of Assistant Sub-Inspector (ASI) cannot issue spot challans or confiscate original documents.",
      "Digital driving licenses and RC documents presented via official government DigiLocker or mParivahan apps are legally valid per MoRTH notifications.",
      "Police cannot snatch your car or bike keys from the ignition during routine traffic checks.",
      "Police cannot compel you to come to a police station informally without a formal written notice under Section 35(3) BNSS.",
      "Women, children under 15, persons over 60, or individuals with disabilities cannot be summoned to the station; questioning must happen at their residence (BNSS Sec. 179(1))."
    ],
    immediate_action_steps: [
      "Remain calm, turn off your headlights, keep your hands visible, and stay inside your vehicle.",
      "Politely request the officer's identification badge and designated police station.",
      "Show digital documents on DigiLocker / mParivahan; do not hand over your physical unlocked phone.",
      "If asked to go to the police station, ask clearly: 'Am I being detained, or am I free to go? If required, please issue a formal BNSS Section 35(3) notice.'"
    ],
    what_to_say_script: "“Officer, respectfully, here are my verified documents on DigiLocker. May I note your name and police station? Am I under formal detention or free to proceed? If my presence is required at the station, please provide a written notice under Section 35(3) BNSS.”",
    remedy_and_complaint_forum: "Traffic Police Helpline (1033 / 1095) / State Police Complaints Authority (PCA) / SP Office / National Cyber Crime Portal (1930)",
    landmark_judgments: [
      "Nandini Satpathy v. P.L. Dani (1978) - Right against self-incrimination applies to roadside police questioning.",
      "Arnesh Kumar v. State of Bihar (2014) - Mandatory issuance of notice of appearance before any arbitrary custodial detention."
    ]
  },
  {
    page_number: 2,
    chapter: "Chapter 2: Arrest Procedures & Custodial Safeguards",
    title: "Your Mandatory Rights Upon Arrest",
    icon: "lock",
    statutory_provisions: [
      {
        code: "Constitution of India",
        section_or_article: "Article 22(1) & 22(2)",
        official_title: "Protection Against Arrest and Detention in Certain Cases",
        official_source_url: "https://www.indiacode.nic.in/"
      },
      {
        code: "BNSS 2023",
        section_or_article: "Sections 36, 37, 38, 47, 53, 58",
        official_title: "Arrest Memo, Designated Custody Intimation, Legal Counsel, and 24-Hour Magistrate Rule",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/20063"
      },
      {
        code: "BNSS 2023",
        section_or_article: "Section 43(5) & Section 51(2)",
        official_title: "Special Protections for Arrest of Women between Sunset & Sunrise",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/20063"
      }
    ],
    situation_trigger: "Police declare that you are under arrest, physically restrain you, or transport you to a police station lockup.",
    your_rights_summary: [
      "Right to know the full grounds of arrest immediately upon detention (Article 22(1) & BNSS Section 47).",
      "Right to a formal Arrest Memo stating date, exact time, location, signed by at least one independent witness or family member (BNSS Section 36).",
      "Right to have one relative or friend immediately notified of your arrest and designated place of custody (BNSS Section 37).",
      "Right to consult and be defended by an advocate throughout custody and interrogation (Article 22(1) & BNSS Section 38).",
      "Mandatory production before the nearest Judicial Magistrate within 24 hours (excluding transit time) (Article 22(2) & BNSS Section 58).",
      "Mandatory medical examination by an authorized medical officer immediately upon arrest to document physical condition and prevent custodial violence (BNSS Section 53).",
      "Women cannot be arrested after sunset and before sunrise except with prior written order from a Judicial Magistrate (BNSS Section 43(5))."
    ],
    immediate_action_steps: [
      "Refuse to sign blank papers; verify the exact date, time, and location recorded on the arrest memo.",
      "Demand immediate phone call to your designated family member and legal advocate.",
      "Demand an official medical check-up at a government hospital to record your physical condition.",
      "If you cannot afford a private lawyer, request the duty officer to connect you to the District Legal Services Authority (DLSA / NALSA Helpline 15100) for free state legal representation."
    ],
    what_to_say_script: "“Officer, under BNSS Section 47, please inform me of the grounds of arrest in writing and prepare an arrest memo under Section 36 with an independent witness. I am exercising my right under Section 37 to notify my family and consult my advocate under Section 38.”",
    remedy_and_complaint_forum: "Nearest Judicial Magistrate First Class (JMFC) during remand hearing / National Legal Services Authority (NALSA 15100) / National Human Rights Commission (NHRC Helpline 14433)",
    landmark_judgments: [
      "D.K. Basu v. State of West Bengal (1997) - Supreme Court's binding 11-point custodial guidelines for all police forces.",
      "Sheela Barse v. State of Maharashtra (1983) - Special safeguards for women detainees in police custody."
    ]
  },
  {
    page_number: 3,
    chapter: "Chapter 3: Search of Home, Vehicle & Digital Privacy",
    title: "Home, Vehicle & Phone Searches",
    icon: "hard-drive",
    statutory_provisions: [
      {
        code: "Constitution of India",
        section_or_article: "Article 20(3) & Article 21",
        official_title: "Right Against Forced Self-Incrimination & Fundamental Right to Privacy",
        official_source_url: "https://www.indiacode.nic.in/"
      },
      {
        code: "BNSS 2023",
        section_or_article: "Section 103, 105, 106 & 107",
        official_title: "Search Warrants, Mandatory Audio-Video Recording of Search & Seizure Memo (Panchnama)",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/20063"
      }
    ],
    situation_trigger: "Police officers arrive at your residence or inspect your vehicle and demand to search premises, seize items, or unlock your smartphone/laptop.",
    your_rights_summary: [
      "Police cannot enter or search private premises without a valid search warrant issued by a competent Magistrate, except under strict emergency circumstances recorded in writing (BNSS Section 106).",
      "Under BNSS Section 105, audio-video electronic recording (videography) of the entire search and seizure process is mandatory.",
      "The search must be conducted in the presence of at least two respectable independent local witnesses (Panchas) from the locality.",
      "A complete inventory of all seized items (Seizure Memo / Panchnama) must be prepared on the spot and a copy given to the occupant free of cost.",
      "Police cannot arbitrarily browse personal WhatsApp chats, photo galleries, or emails on your phone during routine checks without specific judicial authorization."
    ],
    immediate_action_steps: [
      "Ask the police team to show their official search warrant and identity cards before granting entry.",
      "Ensure two independent neighbors or respectable locals are present as witnesses during the search.",
      "Verify that police videography is actively recording the search as mandated by BNSS Section 105.",
      "Inspect the written Seizure Memo carefully before signing; ensure every single seized item with serial numbers is listed, and obtain your signed duplicate copy."
    ],
    what_to_say_script: "“Officer, please show me the search warrant issued by the Magistrate. Under BNSS Section 105, please ensure mandatory videography is recorded and two independent local witnesses are present. I request a copy of the Seizure Memo before any item is removed.”",
    remedy_and_complaint_forum: "Jurisdictional Chief Judicial Magistrate (CJM) / State High Court (Article 226) / State Police Complaints Authority",
    landmark_judgments: [
      "Justice K.S. Puttaswamy v. Union of India (2017) - Privacy is a protected fundamental right under Article 21.",
      "Virendra Khanna v. State of Karnataka (2021) - Safeguards and judicial protocols regarding searching digital devices."
    ]
  },
  {
    page_number: 4,
    chapter: "Chapter 4: Filing Complaints & Zero FIR Mandate",
    title: "When Police Refuse to File Your FIR",
    icon: "file-text",
    statutory_provisions: [
      {
        code: "BNSS 2023",
        section_or_article: "Section 173(1), 173(3) & 173(4)",
        official_title: "Information in Cognizable Cases (Mandatory FIR, Zero FIR & e-FIR Provisions)",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/20063"
      },
      {
        code: "BNSS 2023",
        section_or_article: "Section 175(3) & 175(4)",
        official_title: "Remedies Against Police Inaction: Representation to Superintendent of Police & Magistrate Application",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/20063"
      },
      {
        code: "BNS 2023",
        section_or_article: "Section 199",
        official_title: "Punishment for Public Servant Disobeying Law with Intent to Cause Injury (Failure to Register FIR)",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/20062"
      }
    ],
    situation_trigger: "You visit a police station to report a cognizable crime (theft, assault, cyber fraud, molestation, cheating) and the duty officer refuses to register an FIR.",
    your_rights_summary: [
      "Mandatory Registration: If your complaint discloses a cognizable offense, the police MUST register an FIR immediately without preliminary delay.",
      "Zero FIR: Police cannot refuse to register an FIR on grounds that the crime occurred outside their police station territorial jurisdiction. They must register a 'Zero FIR' and transfer it to the concerned police station.",
      "Free Copy: The informant is legally entitled to receive a copy of the registered FIR immediately, free of cost (BNSS Section 173(2)).",
      "e-FIR Option: BNSS allows electronic submission of complaints (e-FIR), which must be signed by the informant within 3 days for formal registration.",
      "Legal Penalty for Refusing: Any police officer who refuses to record information relating to specified cognizable crimes is liable for criminal prosecution under Section 199 BNS."
    ],
    immediate_action_steps: [
      "Submit your written complaint with date, time, detailed facts, and request a stamped receiving copy (acknowledgement with GD/Dairy number).",
      "If the Station House Officer (SHO) refuses, send the complaint via registered speed post or online portal to the Superintendent of Police (SP / DCP) under BNSS Section 175(3).",
      "If no action is taken within reasonable time, file an application before the Judicial Magistrate under BNSS Section 175(4) to order a police investigation.",
      "Log a grievance on the National Grievance Portal (CPGRAMS) and State Police Online Portal."
    ],
    what_to_say_script: "“Officer, as per the Supreme Court ruling in Lalita Kumari and BNSS Section 173(1), registration of FIR is mandatory for cognizable offenses. If jurisdiction is an issue, please register a Zero FIR and transfer the investigation. Please provide a stamped receiving copy of my complaint.”",
    remedy_and_complaint_forum: "Superintendent of Police (SP/DCP under BNSS 175(3)) / Judicial Magistrate (BNSS 175(4)) / CPGRAMS Portal (pgportal.gov.in) / State Human Rights Commission",
    landmark_judgments: [
      "Lalita Kumari v. Govt. of U.P. (2014) - 5-Judge Constitution Bench ruled that FIR registration is mandatory under Section 154 CrPC (now BNSS 173) if cognizable offense is disclosed.",
      "State of A.P. v. Punati Ramulu (1993) - Police cannot refuse complaint on territorial jurisdiction grounds."
    ]
  },
  {
    page_number: 5,
    chapter: "Chapter 5: Defense Against Fake Cases & Extortion",
    title: "Defense Against Fake Cases & Extortion",
    icon: "alert-octagon",
    statutory_provisions: [
      {
        code: "Constitution of India",
        section_or_article: "Article 226",
        official_title: "Power of High Courts to Issue Certain Writs (Quashing of Malicious FIRs)",
        official_source_url: "https://www.indiacode.nic.in/"
      },
      {
        code: "BNSS 2023",
        section_or_article: "Section 528",
        official_title: "Inherent Powers of the High Court to Prevent Abuse of the Process of Any Court (Old 482 CrPC)",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/20063"
      },
      {
        code: "Prevention of Corruption Act 1988",
        section_or_article: "Section 7 & Section 13",
        official_title: "Offenses Relating to Public Servant Being Bribed & Criminal Misconduct",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/1944"
      },
      {
        code: "BNS 2023",
        section_or_article: "Section 217 & Section 308",
        official_title: "Public Servant Framing Incorrect Record & Extortion Offenses",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/20062"
      }
    ],
    situation_trigger: "An officer or hostile party threatens you with a fabricated FIR, plants contraband, or demands bribes/extortion under threat of detention.",
    your_rights_summary: [
      "Demand for Bribes is a Criminal Offense: Demanding undue advantage by a public servant is punishable with imprisonment up to 7 years under the Prevention of Corruption Act.",
      "Right to Anticipatory Bail: You can apply for Anticipatory Bail (Pre-arrest bail) before the Sessions Court or High Court under BNSS Section 482 if there is reasonable apprehension of arrest in a false non-bailable case.",
      "High Court Quashing Power: Under BNSS Section 528 (equivalent to CrPC 482), the High Court has inherent powers to quash false, malicious, and fabricated FIRs to prevent abuse of the legal process.",
      "Immunity for Trap Operations: Reporting a bribe demand to the Anti-Corruption Bureau (ACB) / CBI allows authorities to set up an official legal trap with marked currency."
    ],
    immediate_action_steps: [
      "Do NOT pay bribes or submit to extortion threats.",
      "Collect and preserve documentary evidence: CCTV recordings, call records, WhatsApp messages, timestamped location data, and receipts proving alibi.",
      "Immediately file a written complaint with the state Anti-Corruption Bureau (Toll Free 1064) or Vigilance Department.",
      "Approach your advocate to draft an Anticipatory Bail application (BNSS Section 482) and a High Court Quashing Petition (BNSS Section 528).",
      "File a formal complaint before the State Police Complaints Authority (PCA) against the erring officer for professional misconduct."
    ],
    what_to_say_script: "“I do not participate in corrupt demands or unauthorized settlements. I am documenting this entire interaction, and any fabricated action will be challenged before the High Court under BNSS Section 528 alongside a complaint to the Anti-Corruption Bureau under Section 7 of the Prevention of Corruption Act.”",
    remedy_and_complaint_forum: "State Anti-Corruption Bureau (Helpline 1064 / 1800-11-0180) / CBI Anti-Corruption Branch / State Police Complaints Authority (PCA) / State High Court (BNSS 528 Quashing Petition)",
    landmark_judgments: [
      "State of Haryana v. Bhajan Lal (1992) - Supreme Court laid down 7 definitive categories where High Courts must quash malicious and frivolous FIRs.",
      "P. Chidambaram v. Directorate of Enforcement (2019) - Principles governing personal liberty and protection from arbitrary arrest."
    ]
  }
];

export const DIGITAL_GUIDEBOOK_PAGES = GUIDEBOOK_PAGES;

import { GuidebookPage } from '../types';

export const DIGITAL_GUIDEBOOK_PAGES: GuidebookPage[] = [
  {
    page_number: 1,
    chapter: "Chapter 1: Constitutional Shields & Fundamental Rights",
    title: "Your Supreme Constitutional Protections",
    icon: "scale",
    statutory_provisions: [
      {
        code: "Constitution of India",
        section_or_article: "Article 21",
        official_title: "Protection of Life and Personal Liberty",
        official_source_url: "https://www.indiacode.nic.in/"
      },
      {
        code: "Constitution of India",
        section_or_article: "Article 22(1) & 22(2)",
        official_title: "Protection Against Arbitrary Arrest and Detention",
        official_source_url: "https://www.indiacode.nic.in/"
      },
      {
        code: "Constitution of India",
        section_or_article: "Article 20(3) & Article 39A",
        official_title: "Right Against Self-Incrimination & Free Legal Aid to Poor and Indigent",
        official_source_url: "https://www.indiacode.nic.in/"
      }
    ],
    situation_trigger: "Any interaction with police or enforcement agencies where fundamental liberty, privacy, or dignity is challenged.",
    your_rights_summary: [
      "No police officer or executive can deprive you of life or liberty except according to procedure established by law (Article 21).",
      "You have an absolute right not to be compelled to be a witness against yourself or make forced confessions (Article 20(3)).",
      "Free legal representation is a constitutional entitlement, not state charity, guaranteed under Article 39A via NALSA/DLSA.",
      "You have the direct right to approach the Supreme Court (Art. 32) or High Court (Art. 226) for a Writ of Habeas Corpus if someone is illegally detained."
    ],
    immediate_action_steps: [
      "Assert your constitutional status calmly without raising your voice or displaying aggression.",
      "Ask for the statutory basis under which the officer is acting.",
      "If in detention or custody, request the Duty Magistrate or DLSA Legal Aid Advocate (Call 15100)."
    ],
    what_to_say_script: "Sir/Madam, as a citizen of India, I am entitled to protections under Article 21 and Article 22 of the Constitution. I am willing to cooperate lawfully, and I request to contact my legal counsel.",
    remedy_and_complaint_forum: "Supreme Court of India (Writ under Art. 32) / State High Court (Writ of Habeas Corpus under Art. 226) / National Legal Services Authority (NALSA Helpline 15100)",
    landmark_judgments: [
      "Maneka Gandhi v. Union of India (1978) - Personal liberty procedure must be just, fair, and reasonable.",
      "Selvi v. State of Karnataka (2010) - Involuntary narco-analysis and lie-detector tests violate Article 20(3)."
    ]
  },
  {
    page_number: 2,
    chapter: "Chapter 2: Street Stops & Roadside Questioning",
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
      }
    ],
    situation_trigger: "An officer stops your vehicle or halts you on the street and asks to search you or demands that you come to the police station informally.",
    your_rights_summary: [
      "You have the right to ask for the officer's full name, rank badge, and designated police station before answering questions.",
      "Police cannot compel you to come to a police station informally without a formal written notice under Section 35(3) BNSS.",
      "Women, children under 15, persons over 60, or individuals with disabilities cannot be summoned to the station; they must be questioned at their place of residence (BNSS Sec. 179(1)).",
      "You are under no legal obligation to unlock your mobile phone or reveal private messages without a specific warrant."
    ],
    immediate_action_steps: [
      "Remain composed, keep your hands visible, and speak politely.",
      "Ask clearly: 'Am I being detained, or am I free to go?'",
      "Do not unlock your smartphone or hand over your unlocked phone without a formal warrant or court order.",
      "Take mental or written note of the officer's name plate, vehicle number, and time."
    ],
    what_to_say_script: "Officer, may I respectfully note down your name and badge number? Am I under formal detention or free to go? If you need my formal appearance, please issue a notice under Section 35(3) of the BNSS.",
    remedy_and_complaint_forum: "Superintendent of Police (SP) / Police Complaints Authority (PCA) / State Human Rights Commission",
    landmark_judgments: [
      "Nandini Satpathy v. P.L. Dani (1978) - Right against self-incrimination applies to police interrogation.",
      "Arnesh Kumar v. State of Bihar (2014) - Strict necessity tests before arresting or compelling station presence."
    ]
  },
  {
    page_number: 3,
    chapter: "Chapter 3: Arrest Procedures & Custodial Safeguards",
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
        official_title: "Arrest Procedures, Intimation, Legal Representation, and 24-Hour Production Rule",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/20063"
      }
    ],
    situation_trigger: "Police declare you are under arrest, physically restrain you, or take you into custody.",
    your_rights_summary: [
      "Right to know the full grounds of arrest immediately (Art. 22(1), BNSS Sec. 47).",
      "Right to an Arrest Memo stating date, exact time, location, signed by an independent witness or family member (BNSS Sec. 36).",
      "Right to have one friend/relative informed immediately of your arrest location and station (BNSS Sec. 36 & 37).",
      "Right to consult and be defended by an advocate throughout custody and interrogation (Art. 22(1), BNSS Sec. 38).",
      "Mandatory production before the nearest Judicial Magistrate within 24 hours (excluding transit time) (Art. 22(2), BNSS Sec. 58).",
      "Right to a certified government medical examination upon arrest to record physical health (BNSS Sec. 53)."
    ],
    immediate_action_steps: [
      "Refuse to sign blank papers; verify the exact date, time, and location recorded on the arrest memo.",
      "Demand immediate phone call to a designated family member and an advocate.",
      "Ask for a government hospital medical check-up to document existing physical condition before entering the lockup.",
      "Request legal aid counsel (15100) if you cannot afford a private lawyer."
    ],
    what_to_say_script: "Please provide my formal grounds of arrest and prepare the arrest memo under BNSS Section 36 before taking me anywhere. I wish to inform my family and exercise my right to speak to my lawyer under BNSS Section 38.",
    remedy_and_complaint_forum: "Duty Magistrate / Judicial Magistrate First Class (JMFC) during remand hearing; National Human Rights Commission (NHRC Helpline 14433).",
    landmark_judgments: [
      "D.K. Basu v. State of West Bengal (1997) - Binding 11-point custodial guidelines for all police forces across India.",
      "Arnesh Kumar v. State of Bihar (2014) - Mandatory checklist before arrest for offenses with imprisonment up to 7 years."
    ]
  },
  {
    page_number: 4,
    chapter: "Chapter 4: Special Protections for Women, Minors & Seniors",
    title: "Safeguards for Women, Children & Elderly",
    icon: "users",
    statutory_provisions: [
      {
        code: "BNSS 2023",
        section_or_article: "Section 43(5) & Section 179(1)",
        official_title: "Arrest of Women during Sunset/Sunrise & Exemption from Police Station Summons",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/20063"
      },
      {
        code: "BNSS 2023",
        section_or_article: "Section 51(2) & Section 173(1) proviso",
        official_title: "Search of Female by Female Police Officer & Recording Statements of Sexual Offense Victims",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/20063"
      }
    ],
    situation_trigger: "A female citizen, minor child, or senior citizen is questioned, searched, or detained by police officers.",
    your_rights_summary: [
      "No woman can be arrested between sunset and sunrise (night hours) except in extraordinary circumstances with prior written permission of a Judicial Magistrate (BNSS Sec. 43(5)).",
      "A female citizen can only be arrested and physically searched by a female police officer with strict regard to decency (BNSS Sec. 51(2)).",
      "No male under 15, male above 60, woman of any age, or physically/mentally disabled person can be required to attend a police station; examination must occur at their residence (BNSS Sec. 179(1)).",
      "Children cannot be detained in police lockups or jailed; only Special Juvenile Police Units (SJPU) under the JJ Act may interact with minors."
    ],
    immediate_action_steps: [
      "If after sunset, inform the officer that Section 43(5) BNSS prohibits night arrest without Magistrate order.",
      "Ensure a female police officer is present for any physical search or custody.",
      "For minors or seniors, state that examination must occur at home under BNSS Section 179(1).",
      "Call the National Commission for Women (NCW 7827170170) or Childline (1098) immediately."
    ],
    what_to_say_script: "Under Section 43(5) and Section 179(1) of the BNSS, women cannot be arrested after sunset without a Judicial Magistrate's written permission, and must be questioned at residence. Please summon a female police officer.",
    remedy_and_complaint_forum: "National Commission for Women (NCW Helpline 7827170170) / Childline 1098 / National Commission for Protection of Child Rights (NCPCR) / State Women's Commission.",
    landmark_judgments: [
      "State of Maharashtra v. Christian Community Welfare Council (2003) - Strict protocol against night arrest of females.",
      "Sheela Barse v. State of Maharashtra (1983) - Custodial safety and separate lockups for women."
    ]
  },
  {
    page_number: 5,
    chapter: "Chapter 5: Search, Seizure & Digital Privacy",
    title: "Home, Vehicle & Phone Searches",
    icon: "hard-drive",
    statutory_provisions: [
      {
        code: "BNSS 2023",
        section_or_article: "Section 100 & Section 105",
        official_title: "Search Procedures & Mandatory Audio-Video Recording of Search/Seizure Operations",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/20063"
      },
      {
        code: "BSA 2023",
        section_or_article: "Sections 61 & 63",
        official_title: "Admissibility of Electronic Records & Mandatory Hash Value Certification",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/20062"
      }
    ],
    situation_trigger: "Officers enter your home/office, search your vehicle or baggage, or demand passwords/access to personal smartphones or laptops.",
    your_rights_summary: [
      "Mandatory audio-video recording of search and seizure operations via smartphone/bodycam is legally required (BNSS Sec. 105).",
      "Search must be executed in the presence of two independent, respectable local witnesses (Panchas) (BNSS Sec. 100(4)).",
      "A copy of the seizure list (Panchnama / Hash value list for electronics) must be prepared on the spot and given to you free of cost (BNSS Sec. 100(6)).",
      "Police cannot conduct arbitrary phone snooping or random gadget searches without written judicial authorization or reasonable suspicion of a specific crime."
    ],
    immediate_action_steps: [
      "Ask to see the formal search warrant issued by the competent Magistrate under BNSS.",
      "Ensure two neutral local witnesses are present before any lock or drawer is opened.",
      "Verify that every seized electronic item (laptop, phone, hard drive) has its serial number and cryptographic hash recorded.",
      "Obtain a signed copy of the seizure memo before the search party departs."
    ],
    what_to_say_script: "Please show the search warrant. Under BNSS Section 105, please ensure this entire search operation is video recorded, and provide me with a signed seizure memo witnessed by two independent persons before taking any device.",
    remedy_and_complaint_forum: "Jurisdictional Magistrate Court where seizure memo is submitted / High Court under BNSS Section 528 / State Cyber Grievance Cell.",
    landmark_judgments: [
      "K.S. Puttaswamy v. Union of India (2017) - Unanimous Supreme Court ruling establishing Privacy as a Fundamental Right under Art. 21.",
      "Virendra Khanna v. State of Karnataka (2021) - Safeguards on police access to electronic passwords and cloud data."
    ]
  },
  {
    page_number: 6,
    chapter: "Chapter 6: Registering Complaints & First Information Report",
    title: "When Police Refuse to File Your FIR",
    icon: "file-text",
    statutory_provisions: [
      {
        code: "BNSS 2023",
        section_or_article: "Section 173(1), 173(2), 173(4) & Section 175(3)",
        official_title: "Information in Cognizable Cases, Zero FIR, e-FIR, and Magistrate's Order to Investigate",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/20063"
      },
      {
        code: "BNS 2023",
        section_or_article: "Section 199",
        official_title: "Public Servant Disobeying Law with Intent to Cause Injury (Punishment for refusing FIR)",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/20064"
      }
    ],
    situation_trigger: "The Station House Officer (SHO) refuses to register an FIR for a serious crime or tells you to go to another police station due to territorial jurisdiction.",
    your_rights_summary: [
      "Registration of an FIR is mandatory for all cognizable offenses; police have no legal discretion to refuse (BNSS Sec. 173(1)).",
      "Zero FIR: You can file an FIR at any police station across India regardless of where the crime occurred; the station must register it and transfer it later (BNSS Sec. 173(1)).",
      "Right to receive a physical or electronic copy of the registered FIR immediately free of cost (BNSS Sec. 173(2)).",
      "Refusal to register an FIR in specified cases (especially against women or SC/ST) is a punishable criminal offense for the officer (BNS Sec. 199)."
    ],
    immediate_action_steps: [
      "Demand a Daily Diary (DD) / General Diary (GD) entry acknowledgment number for your written complaint.",
      "Send the complaint by Registered Speed Post and email directly to the Superintendent of Police (SP/DCP) under BNSS Sec. 173(4).",
      "If SP fails to act, file a Section 175(3) BNSS application before the Judicial Magistrate to compel police investigation.",
      "File online on CCTNS digital police portal (digitalpolice.gov.in)."
    ],
    what_to_say_script: "Under Section 173 of the BNSS and the Constitution Bench judgment in Lalita Kumari, you are mandated to register this FIR. If jurisdiction is elsewhere, please lodge a Zero FIR and transfer the file.",
    remedy_and_complaint_forum: "Superintendent of Police (BNSS 173(4)) → Judicial Magistrate Court (BNSS 175(3)) → CCTNS Portal (digitalpolice.gov.in).",
    landmark_judgments: [
      "Lalita Kumari v. Govt. of U.P. (2014) - Mandatory FIR registration in all cognizable offenses without preliminary inquiry.",
      "Youth Bar Association v. Union of India (2016) - Mandatory uploading of FIRs on official police websites within 24–48 hours."
    ]
  },
  {
    page_number: 7,
    chapter: "Chapter 7: Police Brutality, Assault & Extortion",
    title: "When Police Threaten, Abuse or Assault You",
    icon: "shield-x",
    statutory_provisions: [
      {
        code: "BNS 2023",
        section_or_article: "Sections 115, 118, 127 & 199",
        official_title: "Voluntarily Causing Hurt, Wrongful Confinement & Public Servant Disobeying Law",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/20064"
      },
      {
        code: "BNSS 2023",
        section_or_article: "Section 53 & Section 196",
        official_title: "Mandatory Medical Examination of Arrested Person & Magisterial Inquiry into Custodial Violence",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/20063"
      }
    ],
    situation_trigger: "An officer uses physical force, abuses you verbally, uses third-degree torture, or keeps you illegally detained without entry.",
    your_rights_summary: [
      "Police have zero legal authority to beat, slap, torture, or physically assault any citizen or accused person in custody.",
      "You have the right to demand a complete medical examination and Medico-Legal Certificate (MLC) at a government hospital (BNSS Sec. 53).",
      "During remand presentation, you have the absolute right to show all injuries directly to the Judicial Magistrate.",
      "The Supreme Court mandates CCTV coverage across all police stations (Paramvir Singh Saini guidelines)."
    ],
    immediate_action_steps: [
      "Preserve physical evidence: photograph injuries, do not wash torn clothing, and get an immediate MLC report at a civil hospital.",
      "Disclose every instance of physical violence directly to the Magistrate at your first remand appearance.",
      "File a preservation request for station CCTV footage before the 30-day overwrite cycle expires.",
      "Lodge a complaint with the State Police Complaints Authority (PCA) and NHRC (14433)."
    ],
    what_to_say_script: "I am noting your physical assault. I request an immediate medical examination under Section 53 of the BNSS and I will report this physical violence to the Judicial Magistrate during my 24-hour production.",
    remedy_and_complaint_forum: "Duty Judicial Magistrate / State Police Complaints Authority (PCA) / National Human Rights Commission (NHRC 14433) / High Court Writ.",
    landmark_judgments: [
      "Paramvir Singh Saini v. Baljit Singh (2020) - Mandatory CCTV with night vision and audio recording in all police stations.",
      "D.K. Basu v. State of West Bengal (1997) - State compensation for custodial violence and violation of Art. 21."
    ]
  },
  {
    page_number: 8,
    chapter: "Chapter 8: Bribery & Anti-Corruption Escalation",
    title: "When a Police Officer Demands a Bribe",
    icon: "banknote",
    statutory_provisions: [
      {
        code: "Prevention of Corruption Act 1988",
        section_or_article: "Section 7, 7A & Section 13",
        official_title: "Offenses relating to public servant being bribed & Criminal Misconduct",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/1987"
      },
      {
        code: "BNS 2023",
        section_or_article: "Section 201 & Section 308",
        official_title: "Public Servant Framing False Document & Extortion by Threat of Injury",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/20064"
      }
    ],
    situation_trigger: "An officer demands cash, online UPI transfer, or favors to file an FIR, grant bail, or omit your name from a chargesheet.",
    your_rights_summary: [
      "Demanding or accepting a bribe by any public servant is a non-bailable offense punishable by up to 7 years imprisonment (POCA Sec. 7).",
      "Citizens who are coerced to give a bribe are protected from prosecution if they report the incident to law enforcement within 7 days (POCA Sec. 7 Proviso).",
      "Police services (FIR copy, verification, lawful bail processing) are free citizen services by statutory mandate.",
      "You have the right to set up an Anti-Corruption Bureau (ACB / CBI) trap to catch corrupt officers red-handed."
    ],
    immediate_action_steps: [
      "Never pay the bribe. Politely stall by asking for time: 'I need to arrange the cash from the bank/family.'",
      "Do not transfer money via personal UPI unless instructed by anti-corruption investigators for sting evidence.",
      "Record audio/notes of the demand with date, time, badge number, and exact demanded amount.",
      "Contact the State Anti-Corruption Bureau (Toll-Free 1064) or CBI (Toll-Free 1800-11-2555) immediately to lay a trap."
    ],
    what_to_say_script: "I want to follow official government procedures only. Please provide the official government challan receipt or treasury portal link for any required fees.",
    remedy_and_complaint_forum: "State Anti-Corruption Bureau (Toll-Free 1064) / Central Bureau of Investigation (CBI 1800-11-2555) / Central Vigilance Commission (CVC - cvc.gov.in).",
    landmark_judgments: [
      "Neeraj Dutta v. State (Govt. of NCT of Delhi) (2023) - Demand and acceptance of illegal gratification can be proved through circumstantial evidence.",
      "P. Satyanarayana Murthy v. District Inspector of Police (2015) - Demand is an indispensable ingredient to convict under POCA."
    ]
  },
  {
    page_number: 9,
    chapter: "Chapter 9: Protection Against False Allegations & Quashing",
    title: "Defense Against Fake Cases & Malicious FIRs",
    icon: "alert-octagon",
    statutory_provisions: [
      {
        code: "BNS 2023",
        section_or_article: "Sections 217, 248 & Section 229",
        official_title: "Public Servant Framing Incorrect Records, Fabricating False Evidence & False Charge of Offense",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/20064"
      },
      {
        code: "BNSS 2023",
        section_or_article: "Section 482 & Section 528",
        official_title: "Direction for Grant of Anticipatory Bail & Inherent Powers of the High Court (Quashing of Malicious FIR)",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/20063"
      }
    ],
    situation_trigger: "An individual or police officer files a false, fabricated FIR against you to settle personal scores or extort money.",
    your_rights_summary: [
      "Fabricating false evidence or making false criminal charges carries up to 7+ years imprisonment (BNS Sec. 217, 229, 248).",
      "You have the right to apply for Anticipatory Bail before the Sessions Court or High Court to prevent illegal arrest (BNSS Sec. 482).",
      "You have the right to approach the High Court under BNSS Section 528 (formerly CrPC 482) to quash a baseless or frivolous FIR.",
      "Police must strictly adhere to the Arnesh Kumar checklist before arresting without warrant for offenses with penalty under 7 years."
    ],
    immediate_action_steps: [
      "Preserve digital alibis: Google Maps timeline, location metadata, toll plaza fastag receipts, CCTV clips, flight/train tickets, and UPI transaction logs.",
      "Apply immediately for Anticipatory Bail (BNSS Sec. 482) through an advocate before the Sessions Court.",
      "Obtain a certified copy of the FIR from the official state police web portal.",
      "File a Section 528 BNSS petition before the High Court for quashing the FIR."
    ],
    what_to_say_script: "I will strictly comply with lawful investigative procedures, but I have complete documentary and electronic alibi evidence. My legal counsel is approaching the Sessions Court for protective orders.",
    remedy_and_complaint_forum: "Sessions Court (Anticipatory Bail under BNSS 482) → High Court (Section 528 BNSS Quashing) → Police Complaints Authority (PCA).",
    landmark_judgments: [
      "State of Haryana v. Bhajan Lal (1992) - 7 Golden Principles for High Court quashing of fabricated and malicious FIRs.",
      "P. Chidambaram v. Directorate of Enforcement (2019) - Principles governing personal liberty and grant of bail."
    ]
  },
  {
    page_number: 10,
    chapter: "Chapter 10: Traffic Stops, Chalan & Vehicle Seizure",
    title: "Traffic Police Rights & Digital Documents",
    icon: "car",
    statutory_provisions: [
      {
        code: "Motor Vehicles Act 1988 (2019 Amend)",
        section_or_article: "Section 130 & Section 206",
        official_title: "Duty to Produce License & Power of Police Officer to Impound Documents",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/1798"
      },
      {
        code: "IT (Preservation of Records) Rules",
        section_or_article: "DigiLocker & mParivahan MoRTH Circular",
        official_title: "Legal Validity of Digital Driving License and RC at Par with Physical Originals",
        official_source_url: "https://parivahan.gov.in/"
      }
    ],
    situation_trigger: "Traffic police halt your two-wheeler or car at a checkpoint, demand physical documents, or snatch your ignition keys.",
    your_rights_summary: [
      "Digital Driving License and RC on DigiLocker or mParivahan app are 100% legally valid at par with physical originals (MoRTH Circular).",
      "Traffic police officers cannot physically snatch the keys from your running ignition or deflate your vehicle tyres.",
      "Only an officer of Sub-Inspector (SI) rank or above wearing official uniform and badge is authorized to issue spot cash fines.",
      "You have the right to request a physical or digital e-Challan receipt on the spot with the official officer ID."
    ],
    immediate_action_steps: [
      "Show your driving license and RC on the official DigiLocker or mParivahan mobile application.",
      "Check the rank star on the officer's shoulder (ASI = 1 star, SI = 2 stars, Inspector = 3 stars).",
      "Pay only via official government e-Challan machine or Parivahan portal (echallan.parivahan.gov.in).",
      "If the officer acts unlawfully, note their badge number and record the encounter respectfully from public space."
    ],
    what_to_say_script: "Officer, here are my driving license and RC on the official government DigiLocker app, which are legally valid under MoRTH guidelines. Please issue an electronic e-challan if there is a violation.",
    remedy_and_complaint_forum: "Traffic Police Commissionerate Grievance Cell / State e-Challan Portal (echallan.parivahan.gov.in) / Traffic Lok Adalat.",
    landmark_judgments: [
      "MoRTH Circular No. RT-11036/64/2017-MVL - Binding acceptance of electronic DigiLocker documents by all state police."
    ]
  },
  {
    page_number: 11,
    chapter: "Chapter 11: Emergency Legal Escalation & Free Legal Aid",
    title: "Free Legal Aid & National Grievance Redressal",
    icon: "phone-call",
    statutory_provisions: [
      {
        code: "Legal Services Authorities Act 1987",
        section_or_article: "Section 12",
        official_title: "Criteria for Giving Free Legal Services (NALSA / DLSA / SLSA)",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/1987"
      },
      {
        code: "Protection of Human Rights Act 1993",
        section_or_article: "Section 12",
        official_title: "Functions and Inquiries into Human Rights Violations by NHRC / SHRC",
        official_source_url: "https://www.indiacode.nic.in/handle/123456789/1993"
      }
    ],
    situation_trigger: "You or a family member is in police custody without funds, or facing severe institutional harassment without relief.",
    your_rights_summary: [
      "Free legal representation by an assigned advocate is a guaranteed statutory right for all women, children, SC/ST members, persons in custody, and low-income earners (LSA Act Sec. 12).",
      "National Legal Services Authority (NALSA) operates a 24x7 free national helpline at 15100.",
      "National Human Rights Commission (NHRC) and State Human Rights Commissions investigate police custodial torture and arbitrary confinement.",
      "Police Complaints Authority (PCA) in every state investigates serious misconduct, illegal arrests, and extortion by police officers."
    ],
    immediate_action_steps: [
      "Dial NALSA Helpline 15100 to request a Duty Legal Aid Advocate assigned to your local court / police station.",
      "Submit an online complaint to NHRC at hrcnet.nic.in (or Call 14433).",
      "File a formal grievance before the State Police Complaints Authority (PCA).",
      "File a petition under Article 226 before the State High Court if illegal detention exceeds 24 hours."
    ],
    what_to_say_script: "I request the assistance of a Legal Aid Advocate from the District Legal Services Authority (DLSA) under Section 12 of the Legal Services Authorities Act.",
    remedy_and_complaint_forum: "NALSA Helpline 15100 / NHRC Portal (hrcnet.nic.in) / State Police Complaints Authority / National Emergency 112.",
    landmark_judgments: [
      "Hussainara Khatoon v. Home Secretary, State of Bihar (1979) - Supreme Court established Right to Speedy Trial & Free Legal Aid as part of Article 21.",
      "Khatri (II) v. State of Bihar (1981) - Constitutional obligation of the state to provide free legal aid from the moment of arrest."
    ]
  }
];

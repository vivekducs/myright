import { DepartmentLink } from '../types';

export const OFFICIAL_DEPARTMENTS: DepartmentLink[] = [
  {
    id: 'mha-police',
    name: 'Ministry of Home Affairs & State Police (Digital Police)',
    department: 'Digital Police Citizen Portal',
    ministryOrAuthority: 'Ministry of Home Affairs, Government of India',
    category: 'police',
    description: 'Centralized government portal for filing online police complaints, lost property reports, tenant verification, and locating jurisdictional police stations.',
    fullOverview: 'The Digital Police Citizen Portal is operated under the Crime and Criminal Tracking Network & Systems (CCTNS) of the Ministry of Home Affairs. It provides citizens direct access to lodging police complaints, reporting lost articles, applying for police clearance certificates (PCC), domestic help / employee verification, and accessing state police portal services without visiting the station physically.',
    portalUrl: 'https://digitalpolice.gov.in',
    grievanceUrl: 'https://pgportal.gov.in',
    helplineNumber: '112',
    helplineName: 'ERSS National Emergency',
    verifiedGovBadge: 'GOV.IN VERIFIED',
    officialSourceCitation: 'CCTNS Citizen Services, Ministry of Home Affairs, Government of India',
    keyActsGoverning: [
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 / CrPC 1973',
      'Police Act, 1861 & Respective State Police Acts',
      'Right to Information Act, 2005'
    ],
    servicesProvided: [
      'Online filing of lost property/documents without visiting police station',
      'State-wise direct police portal redirect links',
      'Police Clearance Certificate (PCC) applications',
l      'Character & Tenant verification services'
    ],
    translations: {
      hi: {
        name: 'गृह मंत्रालय एवं राज्य पुलिस (डिजिटल पुलिस पोर्टल)',
        description: 'ऑनलाइन पुलिस शिकायत, गुमशुदा संपत्ति रिपोर्ट और थाना खोजने के लिए भारत सरकार का आधिकारिक पोर्टल।',
        fullOverview: 'डिजिटल पुलिस पोर्टल सीसीटीएनएस प्रोजेक्ट के तहत गृह मंत्रालय द्वारा संचालित है, जहाँ नागरिक बिना थाने जाए गुमशुदगी रिपोर्ट, पुलिस क्लीयरेंस और शिकायतें दर्ज कर सकते हैं।'
      }
    }
  },
  {L
    id: 'morth-echallan',
    name: 'Ministry of Road Transport & Highways (e-Challan & Parivahan)',
    department: 'Parivahan & e-Challan Citizen Services',
    ministryOrAuthority: 'Ministry of Road Transport and Highways (MoRTH)',
    category: 'traffic',
    description: 'Official national portal for electronic challan verification, online traffic fine settlement, DigiLocker validity checks, and Driving License/RC services.',
    fullOverview: 'e-Challan is a comprehensive digital solution for transport enforcement and citizen facilitation managed by MoRTH and NIC. Citizens can check pending challans against their vehicle registration or driving license, review photo/camera evidence, make secure online payments, and contest improper penalties. Rule 139 of the Central Motor Vehicles Rules also guarantees the legal acceptance of digital DL and RC on DigiLocker / mParivahan.',
    portalUrl: 'https://echallan.parivahan.gov.in',
    grievanceUrl: 'https://parivahan.gov.in/parivahan//en/content/grievance',
    helplineNumber: '1033',
    helplineName: 'National Highway Emergency & Help',
    verifiedGovBadge: 'PARIVAHAN.GOV.IN',
    officialSourceCitation: 'Section 133, 139, 200 & 206 of Motor Vehicles (Amendment) Act, 2019',
    keyActsGoverning: [
      'Motor Vehicles Act, 1988 (Amended 2019)',
      'Central Motor Vehicles Rules, 1989 (Rule 139 for DigiLocker validity)',
      'Information Technology Act, 2000 (Section 4)'
    ],
    servicesProvided: [
      'Check pending traffic e-challans by Vehicle No. or DL No.',
      'Instant online digital payment for compoundable traffic fines',
      'View photographic evidence for automated speed and signal cameras',
      'Download authentic payment receipts admissible in court',
      'Virtual Court online challan disposal (vcourts.gov.in)'
    ],
    translations: {
      hi: {
        name: 'सड़क परिवहन एवं राजमार्ग मंत्रालय (ई-चालान एवं परिवहन)',
        description: 'ट्रैफिक ई-चालान जांचने, ऑनलाइन भुगतान करने और ड्राइविंग लाइसेंस/आरसी के लिए आधिकारिक पोर्टल।',
        fullOverview: 'परिवहन एवं ई-चालान पोर्टल नागरिकों को बिना नकद दिए सीधे ऑनलाइन चालान भुगतान करने, फोटो प्रमाण देखने और डिजिलॉकर दस्तावेजों की वैधता जांचने की सुविधा देता है।'
      }
    }
  },
  {
    id: 'nalsa-legal-aid',
    name: 'National Legal Services Authority (NALSA)',
    department: 'National Free Legal Aid & Access to Justice Portal',
    ministryOrAuthority: 'Department of Justice, Ministry of Law & Justice',
    category: 'legal_aid',
    description: 'Constitutional authority providing free and competent legal services to arrested individuals, women, children, undertrials, and marginalized citizens under Article 39A.',
    fullOverview: 'Established under the Legal Services Authorities Act, 1987, NALSA ensures that no citizen is denied justice by reason of economic or other disabilities. Article 39A of the Constitution of India mandates free legal aid as a fundamental state duty. Every arrested individual who cannot afford a private advocate is legally entitled to a free legal aid counsel appointed by the District Legal Services Authority (DLSA).',
    portalUrl: 'https://nalsa.gov.in',
    grievanceUrl: 'https://nalsa.gov.in/lsams/nalsa_complaint.php',
    helplineNumber: '15100',
    helplineName: '24x7 NALSA National Free Legal Aid Helpline',
    verifiedGovBadge: 'NALSA.GOV.IN',
    officialSourceCitation: 'Article 39A Constitution of India & Legal Services Authorities Act, 1987',
    keyActsGoverning: [
      'Article 39A, Constitution of India (Equal Justice and Free Legal Aid)',
      'Legal Services Authorities Act, 1987',
      'Supreme Court Judgment in Khatri (II) v. State of Bihar & Suk Das v. UT of Arunachal Pradesh'
    ],
    servicesProvided: [
      'Appointment of free defence advocate for arrested and custody matters',
      'Online application for free legal aid and consultation',
      'Lok Adalat pre-litigation and settlement assistance',
      'Legal assistance for undertrial prisoners and women in distress',
      '24/7 dedicated telephone helpline on 15100'
    ],
    translations: {
      hi: {
        name: 'राष्ट्रीय विधिक सेवा प्राधिकरण (नालसा)',
        description: 'अनुच्छेद 39A के तहत गिरफ्तार व्यक्तियों, महिलाओं और जरूरतमंदों को मुफ्त सरकारी वकील और कानूनी सहायता।',
        fullOverview: 'नालसा भारत का शीर्ष कानूनी सहायता संस्थान है जो प्रत्येक नागरिक को मुफ्त वकील, जेल में कानूनी मदद और लोक अदालत के जरिए त्वरित न्याय दिलाता है।'
      }
    }
  },
  {
    id: 'cybercrime-portal',
    name: 'National Cyber Crime Reporting Portal (I4C)',
    department: 'Indian Cyber Crime Coordination Centre (I4C)',
    ministryOrAuthority: 'Cyber & Information Security Division, Ministry of Home Affairs',
    category: 'cyber',
    description: 'Specialized national portal to report cybercrimes, online financial frauds, social media harassment, unauthorized phone snooping, and identity theft.',
    fullOverview: 'The National Cyber Crime Reporting Portal allows citizens to lodge complaints pertaining to all cyber offences, with a special emphasis on cybercrimes against women & children and financial online frauds. Dialing 1930 enables Citizen Financial Cyber Fraud Reporting System (CFCFRS) to freeze defrauded bank funds in real time across the banking network.',
    portalUrl: 'https://cybercrime.gov.in',
    grievanceUrl: 'https://cybercrime.gov.in/Webform/Help_citizen.aspx',
    helplineNumber: '1930',
    helplineName: 'National Cyber Financial Fraud Helpline',
    verifiedGovBadge: 'CYBERCRIME.GOV.IN',
    officialSourceCitation: 'Information Technology Act, 2000 (Sections 43, 66, 66E, 72) & BNS 2023',
    keyActsGoverning: [
      'Information Technology Act, 2000 & IT Amendment Act, 2008',
      'Bharatiya Nyaya Sanhita (BNS), 2023 (Cyber fraud, extortion & impersonation)',
      'Digital Personal Data Protection Act, 2023'
    ],
    servicesProvided: [
      'Real-time financial freeze on defrauded funds by dialing 1930',
      'Anonymous reporting of non-consensual images and child sexual abuse material (CSAM)',
      'Tracking status of cyber complaints across jurisdictional cyber police stations',
      'Cyber safety guidelines for mobile phone privacy and two-factor authentication'
    ],
    translations: {
      hi: {
        name: 'राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल (I4C)',
        description: 'साइबर ठगी, फोन हैकिंग, ब्लैकमेल और ऑनलाइन धोखाधड़ी की तुरंत रिपोर्टिंग व 1930 पर खाता फ्रीज सुविधा।',
        fullOverview: 'गृह मंत्रालय का यह पोर्टल साइबर अपराधों, बैंक फ्रॉड और व्हाट्सएप/फोन हैकिंग के मामलों में तुरंत ऑनलाइन एफआईआर और पैसे सुरक्षित करने की सुविधा देता है।'
      }
    }
  },
  {
    id: 'nhrc-human-rights',
    name: 'National Human Rights Commission (NHRC)',
    department: 'Human Rights Net & Online Complaint System',
    ministryOrAuthority: 'Statutory Body under Protection of Human Rights Act, 1993',
    category: 'human_rights',
    description: 'Supreme statutory body for investigating custodial violence, illegal police detention, encounter deaths, police atrocities, and violations of Article 21.',
    fullOverview: 'The National Human Rights Commission (NHRC) is an autonomous statutory body with judicial powers of a civil court. Any citizen, advocate, or relative can file a complaint against police torture, illegal confinement beyond 24 hours, non-compliance of D.K. Basu guidelines, or refusal to grant medical examination upon arrest.',
    portalUrl: 'https://hrcnet.nic.in',
    grievanceUrl: 'https://nhrc.nic.in/complaints/how-to-file-complaints',
    helplineNumber: '14433',
    helplineName: 'NHRC National Citizen Helpline',
    verifiedGovBadge: 'HRCNET.NIC.IN',
    officialSourceCitation: 'Protection of Human Rights Act, 1993 & Constitution of India (Article 21)',
    keyActsGoverning: [
      'Protection of Human Rights Act, 1993',
      'Article 21, Constitution of India (Right to Life, Dignity & Fair Procedure)',
      'Supreme Court Guidelines in D.K. Basu v. State of West Bengal (1997)'
    ],
    servicesProvided: [
      'Direct online complaint registration against police misconduct and harassment',
      'Tracking case hearing, police reply notices, and compensation orders',
      'Independent investigation into custodial deaths and illegal torture',
      'Direct monitoring of police lock-ups and prison compliance'
    ],
    translations: {
      hi: {
        name: 'राष्ट्रीय मानवाधिकार आयोग (एनएचआरसी)',
        description: 'पुलिस ज्यादती, अवैध हिरासत, थाने में मारपीट और मानवाधिकार हनन की ऑनलाइन शिकायत के लिए सर्वोच्च संस्था।',
        fullOverview: 'एनएचआरसी पुलिस द्वारा अवैध हिरासत, मारपीट या डी.के. बसु नियमों के उल्लंघन पर सीधी सुनवाई करता है और अधिकारियों पर कड़ी कार्रवाई की सिफारिश करता है।'
      }
    }
  },
  {
    id: 'ncw-women-commission',
    name: 'National Commission for Women (NCW)',
    department: 'NCW 24x7 Women Helpline & Complaint Cell',
    ministryOrAuthority: 'Ministry of Women and Child Development',
    category: 'women_child',
    description: 'Apex national organization safeguarding constitutional and legal rights of women in police interactions, domestic abuse, sexual harassment, and distress.',
    fullOverview: 'The National Commission for Women (NCW) protects women’s statutory rights. It intervenes in cases where police refuse to register FIRs for sexual offenses (Section 166A IPC / BNSS), illegal night-time arrest of females, or absence of female police officers during search and custody.',
    portalUrl: 'https://ncw.nic.in',
    grievanceUrl: 'https://ncwapps.nic.in/onlinecomplaintsv2/frmUserRegistration.aspx',
    helplineNumber: '7827170170',
    helplineName: '24/7 NCW National Women Helpline',
    verifiedGovBadge: 'NCW.NIC.IN',
    officialSourceCitation: 'National Commission for Women Act, 1990 & Section 46(4) CrPC / Sec 43 BNSS',
    keyActsGoverning: [
      'National Commission for Women Act, 1990',
      'Section 46(4) CrPC / Section 43(5) BNSS (Prohibition of arrest of woman sunset to sunrise)',
      'Section 166A IPC / BNSS 199 (Punishment for officer refusing to register woman’s FIR)',
      'Protection of Women from Domestic Violence Act, 2005'
    ],
    servicesProvided: [
      'Online complaint registration for police inaction or harassment of women',
      '24/7 dedicated emergency WhatsApp & calling helpline (7827170170 & 1091)',
      'Free legal counselling and psycho-social emergency support',
      'Direct summoning of police officers in cases of gross procedural violations'
    ],
    translations: {
      hi: {
        name: 'राष्ट्रीय महिला आयोग (एनसीडब्ल्यू)',
        description: 'महिलाओं के कानूनी अधिकारों, रात में गिरफ्तारी से सुरक्षा और पुलिस द्वारा एफआईआर न लिखने पर सीधी शिकायत।',
        fullOverview: 'एनसीडब्ल्यू महिलाओं के विधिक अधिकारों की रक्षा करता है और सूर्यास्त के बाद महिला की गिरफ्तारी या महिला पुलिस की अनुपस्थिति पर त्वरित हस्तक्षेप करता है।'
      }
    }
  },
  {
    id: 'ecourts-justice',
    name: 'eCourts Mission Mode Project (Department of Justice)',
    department: 'eCourts National Judicial Data Grid (NJDG)',
    ministryOrAuthority: 'e-Committee, Supreme Court of India & Department of Justice',
    category: 'legal_aid',
    description: 'Official digital gateway to all Supreme Court, High Courts, and District/Taluka courts across India for case status, bail orders, and certified copies.',
    fullOverview: 'The eCourts Services portal and mobile app provide comprehensive digital judicial access. Citizens and undertrials can track FIR numbers, remand applications, bail hearings, interim orders, and final judgements for all district courts and high courts across India transparently.',
    portalUrl: 'https://ecourts.gov.in',
    grievanceUrl: 'https://services.ecourts.gov.in/ecourtindia_v6/',
    helplineNumber: '15100',
    helplineName: 'eCourts & Legal Aid Information',
    verifiedGovBadge: 'ECOURTS.GOV.IN',
    officialSourceCitation: 'Article 21 & 32/226, Constitution of India & eCourts Integrated Citizen Portal',
    keyActsGoverning: [
      'Constitution of India (Articles 14, 21, 22, 32, 226)',
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 / CrPC, 1973',
      'Supreme Court Rules, 2013'
    ],
    servicesProvided: [
      'Search court cases by CNR number, Case Number, FIR Number or Party Name',
      'Download authentic signed bail orders and daily court proceedings',
      'Virtual Courts for instantaneous traffic fine compounding',
      'Cause lists and upcoming hearing date reminders via SMS/Email'
    ],
    translations: {
      hi: {
        name: 'ई-कोर्ट्स राष्ट्रीय न्यायिक डेटा पोर्टल',
        description: 'देश की सभी अदालतों के केस स्टेटस, जमानत आदेश (Bail Orders) और कोर्ट की तारीखें देखने का आधिकारिक पोर्टल।',
        fullOverview: 'ई-कोर्ट्स पोर्टल पर नागरिक अपने केस, एफआईआर, रिमांड और जमानत के आदेशों की प्रमाणित कॉपी सीधे देख व डाउनलोड कर सकते हैं।'
      }
    }
  },
  {
    id: 'indiacode-legislation',
    name: 'India Code Legislative Repository (Ministry of Law & Justice)',
    department: 'Legislative Department, India Code',
    ministryOrAuthority: 'Ministry of Law and Justice, Government of India',
    category: 'legal_aid',
    description: 'Official digital repository of all Central and State Acts, the Constitution of India, BNSS, BNS, BSA, and Motor Vehicles Act in authenticated gazette form.',
    fullOverview: 'India Code is the authenticated digital repository of all Central and State legislation in India. Citizens can search, read, and download full authentic gazette texts of the Constitution of India, Bharatiya Nagarik Suraksha Sanhita (BNSS), Bharatiya Nyaya Sanhita (BNS), Bharatiya Sakshya Adhiniyam (BSA), Motor Vehicles Act, and IT Act.',
    portalUrl: 'https://www.indiacode.nic.in',
    grievanceUrl: 'https://lawmin.gov.in',
    helplineNumber: '011-23387008',
    helplineName: 'Ministry of Law Information Desk',
    verifiedGovBadge: 'INDIACODE.NIC.IN',
    officialSourceCitation: 'Authenticated Government Gazette Repository, Ministry of Law and Justice',
    keyActsGoverning: [
      'Constitution of India',
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023',
      'Bharatiya Nyaya Sanhita (BNS), 2023',
      'Bharatiya Sakshya Adhiniyam (BSA), 2023',
      'Motor Vehicles Act, 1988'
    ],
    servicesProvided: [
      'Full statutory text of all Central Acts and State Amendments',
      'Download authenticated PDFs of Constitution of India',
      'Chronological legislative tables and Gazette notification references',
      'Section-by-section search for criminal and constitutional provisions'
    ],
    translations: {
      hi: {
        name: 'इंडिया कोड विधायी रिपॉजिटरी (विधि एवं न्याय मंत्रालय)',
        description: 'भारत के संविधान, बीएनएसएस, बीएनएस, मोटर वाहन अधिनियम और सभी केंद्रीय कानूनों का आधिकारिक राजपत्र पाठ।',
        fullOverview: 'इंडिया कोड पोर्टल पर भारत सरकार के सभी प्रामाणिक कानून, संविधान की मूल धाराएं और कानूनी संशोधन मुफ्त उपलब्ध हैं।'
      }
    }
  },
  {
    id: 'rti-online',
    name: 'RTI Online Portal (DoPT / GOI)',
    department: 'Department of Personnel & Training (DoPT)',
    ministryOrAuthority: 'Ministry of Personnel, Public Grievances and Pensions',
    category: 'rti_vigilance',
    description: 'Official online portal for filing Right to Information (RTI) applications and first appeals with central government ministries and public authorities.',
    fullOverview: 'RTI Online is an initiative of the Department of Personnel and Training (DoPT) to provide a single-window web portal for citizens to submit online RTI applications and first appeals with prescribed fees (₹10) via internet banking or UPI, ensuring total transparency.',
    portalUrl: 'https://rtionline.gov.in',
    grievanceUrl: 'https://rtionline.gov.in/guidelines.php',
    helplineNumber: '011-24622461',
    helplineName: 'RTI Online Helpdesk',
    verifiedGovBadge: 'RTIONLINE.GOV.IN',
    officialSourceCitation: 'Right to Information Act, 2005 (Section 6 & 19)',
    keyActsGoverning: [
      'Right to Information Act, 2005 (Section 6 - Request for obtaining information)',
      'Right to Information Rules, 2012',
      'Supreme Court Ruling in CBSE v. Aditya Bandopadhyay (2011)'
    ],
    servicesProvided: [
      'File RTI applications online to any Central Public Authority',
      'Instant online payment of statutory ₹10 application fee',
      'Submit First Appeal online in case of non-response within 30 days',
      'Track real-time status of RTI applications and download official replies'
    ],
    translations: {
      hi: {
        name: 'आरटीआई ऑनलाइन पोर्टल (कार्मिक एवं प्रशिक्षण विभाग)',
        description: 'सूचना का अधिकार (RTI) के तहत किसी भी केंद्रीय विभाग से 10 रुपये में ऑनलाइन जानकारी प्राप्त करने का पोर्टल।',
        fullOverview: 'आरटीआई ऑनलाइन पोर्टल पर नागरिक सरकारी विभागों, पुलिस मुख्यालयों और मंत्रालयों से पारदर्शी जानकारी प्राप्त कर सकते हैं।'
      }
    }
  },
  {
    id: 'cvc-vigilance',
    name: 'Central Vigilance Commission (CVC)',
    department: 'Public Interest Disclosure & Anti-Corruption Cell',
    ministryOrAuthority: 'Apex Integrity Institution, Government of India',
    category: 'rti_vigilance',
    description: 'Supreme statutory body for filing corruption, bribe demand, and misconduct complaints against central public servants and police personnel.',
    fullOverview: 'The Central Vigilance Commission (CVC) is the apex vigilance institution free from executive control. Citizens facing extortion, illegal cash demands, or corrupt practices by public servants can submit complaints under the Public Interest Disclosure and Protection of Informers (PIDPI) resolution.',
    portalUrl: 'https://cvc.gov.in',
    grievanceUrl: 'https://portal.cvc.gov.in',
    helplineNumber: '1800-11-0180',
    helplineName: 'CVC National Anti-Corruption Toll-Free Helpline',
    verifiedGovBadge: 'CVC.GOV.IN',
    officialSourceCitation: 'Central Vigilance Commission Act, 2003 & Prevention of Corruption Act, 1988',
    keyActsGoverning: [
      'Central Vigilance Commission Act, 2003',
      'Prevention of Corruption (Amendment) Act, 2018 (Section 7, 7A)',
      'PIDPI (Whistleblower Protection) Resolution'
    ],
    servicesProvided: [
      'Online vigilance complaint filing against public servant corruption',
      'Protected whistle-blower complaint filing under PIDPI',
      'Tracking investigation progress and vigilance inquiry reports',
      'Toll-free national anti-corruption helpline (1800-11-0180)'
    ],
    translations: {
      hi: {
        name: 'केंद्रीय सतर्कता आयोग (सीवीसी)',
        description: 'सरकारी कर्मचारियों और अधिकारियों द्वारा रिश्वत मांगने या भ्रष्टाचार करने पर सीधी गोपनीय शिकायत दर्ज कराने की संस्था।',
        fullOverview: 'सीवीसी भ्रष्टाचार के खिलाफ देश का सर्वोच्च संस्थान है जहाँ नागरिक बिना किसी डर के घूसखोरी की शिकायत दर्ज करा सकते हैं।'
      }
    }
  },
  {
    id: 'consumer-helpline',
    name: 'National Consumer Helpline (NCH / e-Daakhil)',
    department: 'Department of Consumer Affairs',
    ministryOrAuthority: 'Ministry of Consumer Affairs, Food and Public Distribution',
    category: 'consumer',
    description: 'National portal and helpline for filing consumer grievances, refund disputes, unfair trade practices, and e-Daakhil online consumer court cases.',
    fullOverview: 'Managed by the Department of Consumer Affairs, NCH offers a dedicated digital grievance system for redressal of consumer complaints across e-commerce, banking, airlines, telecommunications, and civic services. With e-Daakhil, consumers can file consumer court disputes online from home.',
    portalUrl: 'https://consumerhelpline.gov.in',
    grievanceUrl: 'https://edaakhil.nic.in',
    helplineNumber: '1915',
    helplineName: 'National Consumer Toll-Free Helpline 1915',
    verifiedGovBadge: 'CONSUMERHELPLINE.GOV.IN',
    officialSourceCitation: 'Consumer Protection Act, 2019 (Sections 2(7), 35, 38)',
    keyActsGoverning: [
      'Consumer Protection Act, 2019',
      'Consumer Protection (E-Commerce) Rules, 2020',
      'Consumer Protection (Consumer Disputes Redressal Commission) Rules, 2020'
    ],
    servicesProvided: [
      'Lodge consumer complaints by phone (1915) or online portal',
      'e-Daakhil online consumer court petition filing with digital fee payment',
      'Real-time tracking of grievance resolution from registered companies',
      'Legal guidance on product warranty, deficiency of service, and refund laws'
    ],
    translations: {
      hi: {
        name: 'राष्ट्रीय उपभोक्ता हेल्पलाइन एवं ई-दाखिल',
        description: 'उपभोक्ता धोखाधड़ी, रिफंड विवाद और ई-दाखिल पोर्टल पर घर बैठे ऑनलाइन उपभोक्ता अदालत में केस दर्ज करें।',
        fullOverview: 'उपभोक्ता मामले विभाग द्वारा संचालित यह पोर्टल 1915 हेल्पलाइन और ई-दाखिल के माध्यम से उपभोक्ताओं को त्वरित न्याय दिलाता है।'
      }
    }
  }
];

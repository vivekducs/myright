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
    category: 'traffic',
    lawRef: 'Motor Vehicles Act, 1988 & State Police Acts',
    scJudgment: 'High Court & MVA Directives',
    summary: 'A police officer has no legal authority to forcefully remove the key from your vehicle’s ignition or deflate your tyres.',
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
    iconName: 'Car',
    translations: {
      hi: {
        title: 'पुलिस आपकी गाड़ी की चाबी जबरन नहीं निकाल सकती',
        summary: 'ट्रैफिक पुलिस या कोई भी अधिकारी आपकी गाड़ी की चाबी नहीं छीन सकता और न ही पहिए की हवा निकाल सकता है।',
        exactDialogue: '“सर, मोटर वाहन नियमों के तहत गाड़ी की चाबी निकालना अवैध है। डिजिलॉकर ऐप पर मेरे सभी दस्तावेज वैध हैं।”'
      },
      te: {
        title: 'పోలీసులు మీ వాహనం కీని బలవంతంగా లాక్కోలేరు',
        summary: 'మోటారు వాహనాల చట్టం ప్రకారం పోలీసు అధికారులు వాహనం కీని లాక్కోవడం లేదా టైర్ల గాలి తీయడం నిషిద్ధం.',
        exactDialogue: '“సార్, మోటారు వాహన చట్టం ప్రకారం కీ లాక్కోవడం చట్టవిరుద్ధం. నా పత్రాలను డిజిలాకర్‌లో చూపిస్తున్నాను.”'
      },
      ta: {
        title: 'காவல்துறையினர் வாகன சாவியைப் பறிக்க முடியாது',
        summary: 'மோட்டார் வாகனச் சட்டத்தின்படி சாவியைப் பிடுங்குவது அல்லது டயரில் காற்று இறக்குவது சட்டவிரோதமாகும்.',
        exactDialogue: '“ஐயா, மோட்டார் வாகனச் சட்டப்படி சாவியைப் பறிப்பது சட்டவிரோதம். டிஜிலாக்கரில் எனது ஆவணங்கள் உள்ளன.”'
      },
      bn: {
        title: 'পুলিশ গাড়ির চাবি জোর করে কেড়ে নিতে পারে না',
        summary: 'মোটর ভেহিকেল আইন অনুযায়ী কোনো পুলিশ কর্মকর্তা চাবি কাড়তে বা টায়ারের হাওয়া ছাড়তে পারেন না।',
        exactDialogue: '“স্যার, মোটর ভেহিকেল আইন অনুযায়ী চাবি কাড়া বেআইনি। ডিজিলকারে আমার বৈধ নথি রয়েছে।”'
      },
      mr: {
        title: 'पोलिस वाहनाची चावी जबरदस्तीने काढू शकत नाहीत',
        summary: 'मोटार वाहन कायद्यानुसार कोणत्याही अधिकाऱ्याला वाहनाची चावी काढण्याचा अधिकार नाही.',
        exactDialogue: '“साहेब, मोटार वाहन नियमांनुसार चावी काढणे बेकायदेशीर आहे. डिजीलॉकरवर माझी कागदपत्रे उपलब्ध आहेत.”'
      },
      gu: {
        title: 'પોલીસ વાહનની ચાવી બળજબરીથી કાઢી શકતી નથી',
        summary: 'મોટર વ્હીકલ એક્ટ મુજબ કોઈપણ અધિકારી વાહનની ચાવી ઝૂંટવી શકતા નથી.',
        exactDialogue: '“સાહેબ, મોટર વ્હીકલ નિયમો હેઠળ ચાવી કાઢવી ગેરકાયદેસર છે. ડીજીલોકર પર મારા કાગળો છે.”'
      },
      kn: {
        title: 'ಪೊಲೀಸರು ವಾಹನದ ಕೀಲಿಯನ್ನು ಬಲವಂತವಾಗಿ ಕಸಿದುಕೊಳ್ಳುವಂತಿಲ್ಲ',
        summary: 'ಮೋಟಾರು ವಾಹನ ಕಾಯ್ದೆಯಡಿ ಕೀಲಿ ಕಸಿದುಕೊಳ್ಳುವುದು ಅಥವಾ ಟೈರ್ ಗಾಳಿ ತೆಗೆಯುವುದು ನಿಷೇಧಿಸಲಾಗಿದೆ.',
        exactDialogue: '“ಸರ್, ಮೋಟಾರು ವಾಹನ ನಿಯಮಗಳ ಪ್ರಕಾರ ಕೀ ಕಸಿದುಕೊಳ್ಳುವುದು ಕಾನೂನುಬಾಹಿರ. ಡಿಜಿಲಾಕರ್‌ನಲ್ಲಿ ನನ್ನ ದಾಖಲೆಗಳಿವೆ.”'
      },
      ml: {
        title: 'പോലീസിന് വാഹനത്തിന്റെ താക്കോൽ ബലമായി എടുക്കാൻ കഴിയില്ല',
        summary: 'മോട്ടോർ വാഹന നിയമപ്രകാരം താക്കോൽ ഊരിയെടുക്കാനോ ടയറിലെ കാറ്റ് അഴിക്കാനോ പോലീസിന് അധികാരമില്ല.',
        exactDialogue: '“സാർ, മോട്ടോർ വാഹന നിയമപ്രകാരം താക്കോൽ എടുക്കുന്നത് നിയമവിരുദ്ധമാണ്. ഡിജിലോക്കറിൽ എന്റെ രേഖകളുണ്ട്.”'
      },
      pa: {
        title: 'ਪੁਲਿਸ ਗੱਡੀ ਦੀ ਚਾਬੀ ਜ਼ਬਰਦਸਤੀ ਨਹੀਂ ਖੋਹ ਸਕਦੀ',
        summary: 'ਮੋਟਰ ਵਹੀਕਲ ਐਕਟ ਅਧੀਨ ਕਿਸੇ ਪੁਲਿਸ ਅਧਿਕਾਰੀ ਨੂੰ ਚਾਬੀ ਕੱਢਣ ਦਾ ਅਧਿਕਾਰ ਨਹੀਂ ਹੈ।',
        exactDialogue: '“ਸਰ, ਮੋਟਰ ਵਹੀਕਲ ਨਿਯਮਾਂ ਤਹਿਤ ਚਾਬੀ ਖੋਹਣੀ ਗੈਰ-ਕਾਨੂੰਨੀ ਹੈ। ਡਿਜੀਲਾਕਰ \'ਤੇ ਮੇਰੇ ਦਸਤਾਵੇਜ਼ ਮੌਜੂਦ ਹਨ।”'
      },
      hinglish: {
        title: 'Police vehicle ignition keys snatch nahi kar sakti',
        summary: 'Traffic police ko vehicle key nikalna ya tyres deflate karne ka legal authority nahi hai.',
        exactDialogue: '“Sir, Motor Vehicles rules ke mutabik key snatch karna allowed nahi hai. Yeh rahe mere DigiLocker documents.”'
      }
    }
  },
  {
    id: 'dk-basu-arrest',
    title: 'The 11 D.K. Basu Arrest Guidelines',
    category: 'arrest',
    lawRef: 'Supreme Court of India (D.K. Basu v. State of West Bengal, 1997) & Sec 41B CrPC / Sec 36 BNSS',
    scJudgment: 'AIR 1997 SC 610',
    summary: 'Mandatory constitutional safeguards every police officer must strictly follow before, during, and after an arrest.',
    keyPoints: [
      'Identification: Arresting officers must wear clear, visible name tags with designations.',
      'Arrest Memo: Must prepare an official Arrest Memo at the spot, signed by at least one witness and counter-signed by the arrestee.',
      'Right to Inform Family: Police must notify a relative or friend within 8 to 12 hours of arrest.',
      'Medical Examination: Medical examination at the time of arrest and every 48 hours in custody.',
      '24-Hour Magistrate Rule: Must be produced before nearest Judicial Magistrate within 24 hours.'
    ],
    whatPoliceMustDo: [
      'Hand over a copy of the formal Arrest Memo to the arrestee or family.',
      'Enter all details of arrest in the official station General Diary (GD).',
      'Inform the Police Control Room within 12 hours.'
    ],
    whatPoliceCannotDo: [
      'Detain any citizen without issuing a formal arrest memo.',
      'Keep an person in custody beyond 24 hours without magistrate remand.',
      'Use third-degree torture or physical abuse (unconstitutional under Art 21).'
    ],
    exactDialogue: '“Under the Supreme Court’s D.K. Basu guidelines and Section 41B, please provide me with my formal Arrest Memo and allow me to make my one phone call to my family and advocate.”',
    priority: 'critical',
    iconName: 'ShieldAlert',
    translations: {
      hi: {
        title: 'गिरफ्तारी के 11 अनिवार्य डी.के. बसु नियम',
        summary: 'गिरफ्तारी के समय पुलिस को अरेस्ट मेमो बनाना, परिवार को सूचित करना और डॉक्टर से मेडिकल चेकअप कराना अनिवार्य है।',
        exactDialogue: '“डी.के. बसु गाइडलाइंस के तहत मुझे अरेस्ट मेमो की कॉपी दें और परिवार व वकील से बात करने की अनुमति दें।”'
      },
      te: {
        title: '11 తప్పనిసరి డి.కె. బసు అరెస్టు మార్గదర్శకాలు',
        summary: 'అరెస్ట్ సమయంలో మెమో తయారు చేయడం, కుటుంబానికి తెలపడం, వైద్య పరీక్షలు తప్పనిసరి.',
        exactDialogue: '“డి.కె. బసు మార్గదర్శకాల ప్రకారం నాకు అరెస్ట్ మెమో కాపీ ఇవ్వండి మరియు కుటుంబంతో మాట్లాడే అవకాశం ఇవ్వండి.”'
      },
      ta: {
        title: '11 கட்டாய டி.கே. பாசு கைது வழிகாட்டுதல்கள்',
        summary: 'கைது செய்யும் போது கைது மெமோ, குடும்பத்திற்கு தகவல் மற்றும் மருத்துவ பரிசோதனை கட்டாயமாகும்.',
        exactDialogue: '“டி.கே. பாசு விதிகளின்படி எனக்கு கைது மெமோ வழங்கி, குடும்பத்தினருடன் பேச அனுமதிக்கவும்.”'
      },
      bn: {
        title: 'ডি.কে. বসুর ১১টি বাধ্যতামূলক গ্রেপ্তার নির্দেশিকা',
        summary: 'গ্রেপ্তারের সময় অ্যারেস্ট মেমো, পরিবারকে জানানো এবং স্বাস্থ্য পরীক্ষা করানো বাধ্যতামূলক।',
        exactDialogue: '“ডি.কে. বসু নির্দেশিকা অনুযায়ী আমাকে অ্যারেস্ট মেমো দিন এবং পরিবার ও আইনজীবীর সাথে কথা বলতে দিন।”'
      },
      mr: {
        title: 'डी.के. बसू यांचे ११ अनिवार्य अटक मार्गदर्शक नियम',
        summary: 'अटकेच्या वेळी अरेस्ट मेमो तयार करणे, कुटुंबियांना कळवणे व वैद्यकीय तपासणी अनिवार्य आहे.',
        exactDialogue: '“डी.के. बसू नियमांनुसार मला अरेस्ट मेमो द्या आणि वकील व कुटुंबियांशी बोलू द्या.”'
      },
      gu: {
        title: '૧૧ ફરજિયાત ડી.કે. બસુ ધરપકડ માર્ગદર્શિકા',
        summary: 'ધરપકડ વખતે અરેસ્ટ મેમો બનાવવો અને પરિવારને જાણ કરવી ફરજિયાત છે.',
        exactDialogue: '“ડી.કે. બસુ ગાઇડલાઇન મુજબ મને અરેસ્ટ મેમો આપો અને પરિવાર સાથે વાત કરવા દો.”'
      },
      kn: {
        title: '11 ಕಡ್ಡಾಯ ಡಿ.ಕೆ. ಬಸು ಬಂಧನ ಮಾರ್ಗಸೂಚಿಗಳು',
        summary: 'ಬಂಧನದ ವೇಳೆ ಅರೆಸ್ಟ್ ಮೆಮೊ, ಕುಟುಂಬಕ್ಕೆ ಮಾಹಿತಿ ಮತ್ತು ವೈದ್ಯಕೀಯ ಪರೀಕ್ಷೆ ಕಡ್ಡಾಯ.',
        exactDialogue: '“ಡಿ.ಕೆ. ಬಸು ನಿಯಮಗಳ ಪ್ರಕಾರ ನನಗೆ ಅರೆಸ್ಟ್ ಮೆಮೊ ನೀಡಿ ಮತ್ತು ಕುಟುಂಬದೊಂದಿಗೆ ಮಾತನಾಡಲು ಅವಕಾಶ ನೀಡಿ.”'
      },
      ml: {
        title: '11 നിർബന്ധിത ഡി.കെ. ബസു അറസ്റ്റ് മാർഗ്ഗനിർദ്ദേശങ്ങൾ',
        summary: 'അറസ്റ്റ് വേളയിൽ മെമ്മോ തയ്യാറാക്കലും ബന്ധുക്കളെ അറിയിക്കലും നിർബന്ധമാണ്.',
        exactDialogue: '“ഡി.കെ. ബസു മാർഗ്ഗനിർദ്ദേശപ്രകാരം എനിക്ക് അറസ്റ്റ് മെമ്മോ നൽകുകയും കുടുംബവുമായി സംസാരിക്കാൻ അനുവദിക്കുകയും ചെയ്യുക.”'
      },
      pa: {
        title: '11 ਲਾਜ਼ਮੀ ਡੀ.ਕੇ. ਬਾਸੂ ਗ੍ਰਿਫ਼ਤਾਰੀ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼',
        summary: 'ਗ੍ਰਿਫ਼ਤਾਰੀ ਸਮੇਂ ਅਰੈਸਟ ਮੈਮੋ ਬਣਾਉਣਾ ਅਤੇ ਪਰਿਵਾਰ ਨੂੰ ਸੂਚਿਤ ਕਰਨਾ ਜ਼ਰੂਰੀ ਹੈ।',
        exactDialogue: '“ਡੀ.ਕੇ. ਬਾਸੂ ਨਿਯਮਾਂ ਅਧੀਨ ਮੈਨੂੰ ਅਰੈਸਟ ਮੈਮੋ ਦਿਓ ਅਤੇ ਪਰਿਵਾਰ ਨਾਲ ਗੱਲ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿਓ।”'
      },
      hinglish: {
        title: '11 Mandatory D.K. Basu Arrest Guidelines',
        summary: 'Arrest ke time official Arrest Memo, family intimation aur 48-hr medical checkup mandatory hai.',
        exactDialogue: '“D.K. Basu guidelines ke under mujhe formal Arrest Memo provide karein aur family se contact karne dein.”'
      }
    }
  },
  {
    id: 'women-arrest-sunset',
    title: 'Women Arrest & Search Protections',
    category: 'women_child',
    lawRef: 'Section 46(4) & Section 51(2) CrPC (Sec 43 BNSS) / Sheela Barse vs State of Maharashtra',
    scJudgment: 'Supreme Court Directive',
    summary: 'A woman cannot be arrested between sunset and sunrise except in exceptional circumstances with prior written permission of a Judicial Magistrate.',
    keyPoints: [
      'No Arrest Between Sunset & Sunrise without written prior approval of a Judicial Magistrate.',
      'Female Police Officer Mandatory: A woman can only be arrested and searched by a female officer.',
      'Male officers are strictly prohibited from touching or physically handling a female accused.',
      'Questioning at Residence: Women, children under 15, and seniors above 65 must be questioned at home (Sec 160 CrPC).'
    ],
    whatPoliceMustDo: [
      'Deploy a female police officer for any search or detention.',
      'Ensure a female relative or female constable accompanies any transit.',
      'Question female witnesses at their residence.'
    ],
    whatPoliceCannotDo: [
      'Arrest a woman at night without prior written Judicial Magistrate permission.',
      'Conduct a body search of a woman using male officers.',
      'Force female witnesses to appear at the station at odd hours.'
    ],
    exactDialogue: '“Under Section 46(4) of the CrPC and Supreme Court guidelines, a woman cannot be arrested after sunset without a Judicial Magistrate’s written order. Also, only a female officer may conduct any physical search.”',
    priority: 'critical',
    iconName: 'UserCheck',
    translations: {
      hi: {
        title: 'महिलाओं की गिरफ्तारी एवं तलाशी के विशेष अधिकार',
        summary: 'सूर्यास्त के बाद और सूर्योदय से पहले किसी महिला को गिरफ्तार नहीं किया जा सकता, केवल महिला पुलिस ही तलाशी ले सकती है।',
        exactDialogue: '“धारा 46(4) के तहत सूर्यास्त के बाद महिला की गिरफ्तारी अवैध है और केवल महिला पुलिस ही तलाशी ले सकती है।”'
      },
      te: {
        title: 'మహిళల అరెస్ట్ & తనిఖీ ప్రత్యేక హక్కులు',
        summary: 'సూర్యాస్తమయం తర్వాత మరియు సూర్యోదయానికి ముందు మహిళలను అరెస్ట్ చేయడం నిషిద్ధం. మహిళా పోలీసులే తనిఖీ చేయాలి.',
        exactDialogue: '“సెక్షన్ 46(4) ప్రకారం సూర్యాస్తమయం తర్వాత మహిళలను అరెస్ట్ చేయడానికి మేజిస్ట్రేట్ అనుమతి తప్పనిసరి.”'
      },
      ta: {
        title: 'பெண்கள் கைது & சோதனை பாதுகாப்பு உரிமைகள்',
        summary: 'சூரிய அஸ்தமனத்திற்குப் பிறகு பெண்களைக் கைது செய்ய முடியாது, பெண் காவலர்களே சோதனை செய்ய வேண்டும்.',
        exactDialogue: '“பிரிவு 46(4)-ன் படி மாஜிஸ்திரேட் உத்தரவு இல்லாமல் இரவில் பெண்களை கைது செய்ய முடியாது.”'
      },
      bn: {
        title: 'মহিলাদের গ্রেপ্তার ও তল্লাশি সংক্রান্ত বিশেষ সুরক্ষা',
        summary: 'সূর্যাস্তের পর এবং সূর্যোদয়ের আগে কোনো মহিলাকে গ্রেপ্তার করা যায় না, কেবল মহিলা পুলিশই তল্লাশি করতে পারে।',
        exactDialogue: '“ধারা ৪৬(৪) অনুযায়ী সূর্যাস্তের পর কোনো মহিলাকে ম্যাজিস্ট্রেট অনুমতি ছাড়া গ্রেপ্তার করা যায় না।”'
      },
      mr: {
        title: 'महिलांची अटक व झडती विषयक विशेष अधिकार',
        summary: 'सूर्यास्तानंतर महिलेला अटक करता येत नाही, केवळ महिला पोलिसच झडती घेऊ शकतात.',
        exactDialogue: '“कलम ४६(४) नुसार सूर्यास्तानंतर महिलेला अटक करणे बेकायदेशीर आहे.”'
      },
      gu: {
        title: 'મહિલાઓની ધરપકડ અને તપાસ અંગેના વિશેષ અધિકારો',
        summary: 'સૂર્યાસ્ત પછી મહિલાની ધરપકડ થઈ શકતી નથી, માત્ર મહિલા પોલીસ જ તપાસ કરી શકે છે.',
        exactDialogue: '“કલમ ૪૬(૪) મુજબ સૂર્યાસ્ત પછી મહિલાની ધરપકડ માટે મેજિસ્ટ્રેટની મંજૂરી જરૂરી છે.”'
      },
      kn: {
        title: 'ಮಹಿಳೆಯರ ಬಂಧನ ಮತ್ತು ಶೋಧನಾ ರಕ್ಷಣೆಗಳು',
        summary: 'ಸೂರ್ಯಾಸ್ತದ ನಂತರ ಮಹಿಳೆಯನ್ನು ಬಂಧಿಸುವಂತಿಲ್ಲ, ಮಹಿಳಾ ಪೊಲೀಸರು ಮಾತ್ರ ಶೋಧನೆ ನಡೆಸಬೇಕು.',
        exactDialogue: '“ಸೆಕ್ಷನ್ 46(4) ರ ಪ್ರಕಾರ ಸೂರ್ಯಾಸ್ತದ ನಂತರ ಮಹಿಳೆಯನ್ನು ಬಂಧಿಸಲು ಮ್ಯಾಜಿಸ್ಟ್ರೇಟ್ ಅನುಮತಿ ಅಗತ್ಯ.”'
      },
      ml: {
        title: 'സ്ത്രീകളുടെ അറസ്റ്റും പരിശോധനയും സംബന്ധിച്ച നിയമങ്ങൾ',
        summary: 'സൂര്യാസ്തമയത്തിനു ശേഷം സ്ത്രീകളെ അറസ്റ്റ് ചെയ്യാൻ പാടില്ല, വനിതാ പോലീസിനു മാത്രമേ പരിശോധിക്കാൻ അനുവാദമുള്ളൂ.',
        exactDialogue: '“സെക്ഷൻ 46(4) പ്രകാരം മജിസ്ട്രേറ്റ് ഉത്തരവില്ലാതെ രാത്രിയിൽ സ്ത്രീകളെ അറസ്റ്റ് ചെയ്യാൻ കഴിയില്ല.”'
      },
      pa: {
        title: 'ਔਰਤਾਂ ਦੀ ਗ੍ਰਿਫ਼ਤਾਰੀ ਤੇ ਤਲਾਸ਼ੀ ਸੰਬੰਧੀ ਵਿਸ਼ੇਸ਼ ਅਧਿਕਾਰ',
        summary: 'ਸੂਰਜ ਡੁੱਬਣ ਤੋਂ ਬਾਅਦ ਔਰਤ ਨੂੰ ਗ੍ਰਿਫ਼ਤਾਰ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ, ਕੇਵਲ ਮਹਿਲਾ ਪੁਲਿਸ ਹੀ ਤਲਾਸ਼ੀ ਲੈ ਸਕਦੀ ਹੈ।',
        exactDialogue: '“ਧਾਰਾ 46(4) ਤਹਿਤ ਰਾਤ ਨੂੰ ਔਰਤ ਦੀ ਗ੍ਰਿਫ਼ਤਾਰੀ ਲਈ ਮੈਜਿਸਟ੍ਰੇਟ ਦਾ ਲਿਖਤੀ ਹੁਕਮ ਲਾਜ਼ਮੀ ਹੈ।”'
      },
      hinglish: {
        title: 'Women Arrest & Search Protections',
        summary: 'Sunset ke baad aur sunrise se pehle woman ko arrest nahi kiya ja sakta without Magistrate written order.',
        exactDialogue: '“Section 46(4) CrPC ke under sunset ke baad arrest prohibition hai aur search sirf female police karegi.”'
      }
    }
  },
  {
    id: 'zero-fir',
    title: 'Right to File a "Zero FIR" Anywhere in India',
    category: 'fir',
    lawRef: 'Section 154 CrPC / Sec 173 BNSS & Lalita Kumari v. Govt. of UP (2014)',
    scJudgment: 'Supreme Court 5-Judge Constitution Bench',
    summary: 'A police station cannot refuse to register an FIR for a cognizable offence citing lack of territorial jurisdiction.',
    keyPoints: [
      'Zero FIR can be filed at ANY police station in India irrespective of where the crime occurred.',
      'Free Copy Mandatory: Informant is legally entitled to a free signed carbon copy on the spot.',
      'Mandatory Registration for Cognizable Offence (Murder, Robbery, Sexual Assault, Theft, Kidnapping).'
    ],
    whatPoliceMustDo: [
      'Register the Zero FIR immediately with FIR Number "0".',
      'Hand over a free signed copy to the complainant.',
      'Transfer the case documents to the jurisdictional police station.'
    ],
    whatPoliceCannotDo: [
      'Turn away a victim citing "it falls outside our jurisdiction".',
      'Demand money or fees for filing an FIR.'
    ],
    exactDialogue: '“Under the Lalita Kumari ruling, registering a Zero FIR is mandatory for cognizable crimes regardless of jurisdiction. Please register it and provide my free carbon copy.”',
    priority: 'critical',
    iconName: 'FileText',
    translations: {
      hi: {
        title: 'भारत में कहीं भी "जीरो एफआईआर" दर्ज कराने का अधिकार',
        summary: 'क्षेत्राधिकार की सीमा का बहाना बनाकर पुलिस संज्ञेय अपराध में एफआईआर दर्ज करने से मना नहीं कर सकती।',
        exactDialogue: '“सुप्रीम कोर्ट के आदेशानुसार आप एफआईआर से मना नहीं कर सकते। कृपया जीरो एफआईआर दर्ज करें।”'
      },
      te: {
        title: 'భారతదేశంలో ఎక్కడైనా "జీరో ఎఫ్.ఐ.ఆర్" నమోదు చేసే హక్కు',
        summary: 'పోలీస్ స్టేషన్ పరిధి లేదనే కారణంతో ఎఫ్.ఐ.ఆర్ నమోదు చేయకుండా పోలీసులు నిరాకరించలేరు.',
        exactDialogue: '“లలితా కుమారి తీర్పు ప్రకారం జీరో ఎఫ్.ఐ.ఆర్ నమోదు చేయడం తప్పనిసరి. ఉచిత కాపీ ఇవ్వండి.”'
      },
      ta: {
        title: 'இந்தியாவில் எங்கும் "ஜீரோ எஃப்.ஐ.ஆர்" பதிவு செய்யும் உரிமை',
        summary: 'எல்லை வரம்பு இல்லை என்று கூறி காவல் துறை புகாரை மறுக்க முடியாது.',
        exactDialogue: '“லலிதா குமாரி தீர்ப்பின்படி ஜீரோ எஃப்.ஐ.ஆர் பதிவு செய்து எனக்கு நகல் தரவும்.”'
      },
      bn: {
        title: 'ভারতে যেকোনো স্থানে "জিরো এফআইআর" দায়ের করার অধিকার',
        summary: 'এখতিয়ারের অজুহাত দেখিয়ে পুলিশ এফআইআর নিতে অস্বীকার করতে পারে না।',
        exactDialogue: '“সুপ্রিম কোর্টের নির্দেশ অনুযায়ী জিরো এফআইআর নথিভুক্ত করে আমাকে কপি প্রদান করুন।”'
      },
      mr: {
        title: 'भारतात कुठेही "झिरो एफआयआर" नोंदवण्याचा हक्क',
        summary: 'हद्दीचे कारण सांगून दखलपात्र गुन्ह्यात एफआयआर नोंदवण्यास पोलिस नकार देऊ शकत नाहीत.',
        exactDialogue: '“सर्वोच्च न्यायालयाच्या आदेशानुसार झिरो एफआयआर नोंदवा आणि मोफत प्रत द्या.”'
      },
      gu: {
        title: 'ભારતમાં ગમે ત્યાં "ઝીરો એફઆઈઆર" નોંધવાનો અધિકાર',
        summary: 'વિસ્તારના બહાને પોલીસ એફઆઈઆર નોંધવાનો ઇનકાર કરી શકતી નથી.',
        exactDialogue: '“લલિતા કુમારી ચુકાદા મુજબ ઝીરો એફઆઈઆર નોંધીને મને મફત નકલ આપો.”'
      },
      kn: {
        title: 'ಭಾರತದ ಎಲ್ಲಿಯಾದರೂ "ಝೀರೋ ಎಫ್‌ಐಆರ್" ದಾಖಲಿಸುವ ಹಕ್ಕು',
        summary: 'ವ್ಯಾಪ್ತಿಯಿಲ್ಲ ಎಂಬ ಕಾರಣ ನೀಡಿ ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸಲು ಪೊಲೀಸರು ನಿರಾಕರಿಸುವಂತಿಲ್ಲ.',
        exactDialogue: '“ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ಆದೇಶದಂತೆ ಝೀರೋ ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸಿ ಉಚಿತ ಪ್ರತಿ ನೀಡಿ.”'
      },
      ml: {
        title: 'ഇന്ത്യയിൽ എവിടെയും "സീറോ എഫ്.ഐ.ആർ" രജിസ്റ്റർ ചെയ്യാനുള്ള അവകാശം',
        summary: 'അതിർത്തി പരിധിയില്ലെന്ന് പറഞ്ഞ് എഫ്.ഐ.ആർ നിരസിക്കാൻ പോലീസിന് അവകാശമില്ല.',
        exactDialogue: '“ലളിത കുമാരി വിധിപ്രകാരം സീറോ എഫ്.ഐ.ആർ രജിസ്റ്റർ ചെയ്ത് സൗജന്യ പകർപ്പ് നൽകുക.”'
      },
      pa: {
        title: 'ਭਾਰਤ ਵਿੱਚ ਕਿਤੇ ਵੀ "ਜ਼ੀਰੋ ਐਫਆਈਆਰ" ਦਰਜ ਕਰਵਾਉਣ ਦਾ ਅਧਿਕਾਰ',
        summary: 'ਹੱਦਬੰਦੀ ਦੇ ਬਹਾਨੇ ਪੁਲਿਸ ਐਫਆਈਆਰ ਦਰਜ ਕਰਨ ਤੋਂ ਇਨਕਾਰ ਨਹੀਂ ਕਰ ਸਕਦੀ।',
        exactDialogue: '“ਲਲਿਤਾ ਕੁਮਾਰੀ ਫੈਸਲੇ ਅਨੁਸਾਰ ਜ਼ੀਰੋ ਐਫਆਈਆਰ ਦਰਜ ਕਰੋ ਅਤੇ ਮੈਨੂੰ ਮੁਫ਼ਤ ਕਾਪੀ ਦਿਓ।”'
      },
      hinglish: {
        title: 'Right to File "Zero FIR" Anywhere in India',
        summary: 'Jurisdiction issue bata kar police cognizable crime mein FIR refuse nahi kar sakti.',
        exactDialogue: '“Lalita Kumari ruling ke mutabik Zero FIR register karke free copy dein.”'
      }
    }
  },
  {
    id: 'right-to-lawyer',
    title: 'Right to Consult Lawyer & Right to Silence',
    category: 'arrest',
    lawRef: 'Article 20(3) & 22(1) Constitution, Section 41D CrPC / Sec 38 BNSS',
    scJudgment: 'Nandini Satpathy v. P.L. Dani (1978)',
    summary: 'Right to meet an advocate during police interrogation and protection against forced self-incrimination.',
    keyPoints: [
      'You have the fundamental right to consult a legal practitioner of your choice (Article 22(1)).',
      'Right against self-incrimination: Police cannot force you to confess or sign incriminating statements (Article 20(3)).',
      'Section 41D entitles the arrested person to meet an advocate of choice throughout interrogation, though not throughout the entire examination.',
      'NALSA 15100 provides free legal counsel for arrested citizens unable to afford private advocates.'
    ],
    whatPoliceMustDo: [
      'Allow the accused to meet their chosen advocate during interrogation.',
      'Inform the arrested person about the availability of free legal aid under NALSA.'
    ],
    whatPoliceCannotDo: [
      'Subject the person to physical torture or coercion to extract a confession.',
      'Deny reasonable access to family or legal counsel.'
    ],
    exactDialogue: '“Under Article 20(3) and Section 41D CrPC, I have the right to remain silent and consult my advocate before making any statement.”',
    priority: 'critical',
    iconName: 'Shield',
    translations: {
      hi: {
        title: 'वकील से परामर्श एवं चुप रहने का मौलिक अधिकार',
        summary: 'पूछताछ के दौरान अपने वकील से मिलने और दबाव में बयान न देने का संवैधानिक अधिकार।',
        exactDialogue: '“अनुच्छेद 20(3) और धारा 41D के तहत मुझे वकील से बात करने और चुप रहने का संवैधानिक अधिकार है।”'
      },
      te: {
        title: 'న్యాయవాదిని సంప్రదించే & మౌనంగా ఉండే ప్రాథమిక హక్కు',
        summary: 'విచారణ సమయంలో న్యాయవాదిని కలిసే మరియు బలవంతపు వాంగ్మూలం ఇవ్వకుండా ఉండే హక్కు.',
        exactDialogue: '“ఆర్టికల్ 20(3) మరియు సెక్షన్ 41D ప్రకారం న్యాయవాదితో మాట్లాడేవరకు నేను మౌనంగా ఉంటాను.”'
      },
      ta: {
        title: 'வழக்கறிஞர் உதவி & மௌனம் காக்கும் அடிப்படை உரிமை',
        summary: 'விசாரணையின் போது வழக்கறிஞரை சந்திக்கும் உரிமை மற்றும் வற்புறுத்தலுக்கு எதிராக மௌனம் காக்கும் உரிமை.',
        exactDialogue: '“பிரிவு 20(3) மற்றும் 41D-ன் கீழ் எனது வழக்கறிஞரை ஆலோசிக்கும் வரை மௌனம் காக்கிறேன்.”'
      },
      bn: {
        title: 'আইনজীবীর সহায়তা ও নীরব থাকার মৌলিক অধিকার',
        summary: 'জিজ্ঞাসাবাদের সময় আইনজীবীর সাথে কথা বলার অধিকার এবং জোরপূর্বক স্বীকারোক্তি না দেওয়ার অধিকার।',
        exactDialogue: '“২০(৩) অনুচ্ছেদ ও ৪১ডি ধারা অনুযায়ী আইনজীবীর সাথে কথা না বলা পর্যন্ত নীরব থাকার অধিকার প্রয়োগ করছি।”'
      },
      mr: {
        title: 'वकिलाची मदत व शांत राहण्याचा मूलभूत हक्क',
        summary: 'चौकशी दरम्यान वकिलाचा सल्ला घेण्याचा आणि स्वतःविरुद्ध जबानी न देण्याचा अधिकार.',
        exactDialogue: '“कलम २०(३) आणि ४१D नुसार वकिलाशी बोलल्याशिवाय मी काहीही बोलणार नाही.”'
      },
      gu: {
        title: 'વકીલની સહાય અને મૌન રહેવાનો મૂળભૂત અધિકાર',
        summary: 'પૂછપરછ વખતે વકીલની સલાહ લેવાનો અને દબાણ હેઠળ નિવેદન ન આપવાનો અધિકાર.',
        exactDialogue: '“કલમ ૨૦(૩) અને ૪૧D મુજબ મારા વકીલ સાથે વાત ન થાય ત્યાં સુધી હું મૌન રહીશ.”'
      },
      kn: {
        title: 'ವಕೀಲರ ನೆರವು ಮತ್ತು ಮೌನವಾಗಿರುವ ಮೂಲಭೂತ ಹಕ್ಕು',
        summary: 'ವಿಚಾರಣೆಯ ಸಮಯದಲ್ಲಿ ವಕೀಲರನ್ನು ಭೇಟಿ ಮಾಡುವ ಮತ್ತು ಒತ್ತಾಯದ ಹೇಳಿಕೆ ನೀಡದಿರುವ ಹಕ್ಕು.',
        exactDialogue: '“ವಿಧಿ 20(3) ಮತ್ತು 41D ಪ್ರಕಾರ ನನ್ನ ವಕೀಲರನ್ನು ಸಂಪರ್ಕಿಸುವವರೆಗೆ ನಾನು ಮೌನವಾಗಿರುತ್ತೇನೆ.”'
      },
      ml: {
        title: 'അഭിഭാഷക സഹായവും മൗനം പാലിക്കാനുള്ള മൗലികാവകാശവും',
        summary: 'ചോദ്യം ചെയ്യൽ വേളയിൽ അഭിഭാഷകനെ കാണാനുള്ള അവകാശവും നിർബന്ധിത മൊഴി നൽകാതിരിക്കാനുള്ള അവകാശവും.',
        exactDialogue: '“ആർട്ടിക്കിൾ 20(3) പ്രകാരം അഭിഭാഷകനുമായി സംസാരിക്കുന്നതുവരെ ഞാൻ മൗനം പാലിക്കുന്നു.”'
      },
      pa: {
        title: 'ਵਕੀਲ ਦੀ ਸਹਾਇਤਾ ਅਤੇ ਚੁੱਪ ਰਹਿਣ ਦਾ ਮੌਲਿਕ ਅਧਿਕਾਰ',
        summary: 'ਪੁੱਛਗਿੱਛ ਦੌਰਾਨ ਵਕੀਲ ਦੀ ਸਲਾਹ ਲੈਣ ਅਤੇ ਦਬਾਅ ਹੇਠ ਬਿਆਨ ਨਾ ਦੇਣ ਦਾ ਅਧਿਕਾਰ।',
        exactDialogue: '“ਧਾਰਾ 20(3) ਅਧੀਨ ਮੇਰੇ ਵਕੀਲ ਨਾਲ ਗੱਲ ਹੋਣ ਤੱਕ ਮੈਨੂੰ ਚੁੱਪ ਰਹਿਣ ਦਾ ਅਧਿਕਾਰ ਹੈ।”'
      },
      hinglish: {
        title: 'Right to Lawyer & Right to Remain Silent',
        summary: 'Custody interrogation mein advocate consultation aur self-incrimination se protection.',
        exactDialogue: '“Article 20(3) aur Section 41D ke under mujhe silence aur advocate consultation ka right hai.”'
      }
    }
  },
  {
    id: 'phone-privacy-right',
    title: 'Constitutional Privacy Shield for Smartphones & Laptops',
    category: 'phone_privacy',
    lawRef: 'Article 21 Constitution & K.S. Puttaswamy (Privacy Verdict, 2017)',
    scJudgment: 'Supreme Court 9-Judge Constitution Bench',
    summary: 'Police cannot arbitrarily force citizens to unlock phones, inspect WhatsApp chats, or browse gallery during random road checks without a warrant.',
    keyPoints: [
      'Right to Privacy is a Fundamental Right guaranteed under Article 21 of the Indian Constitution.',
      'A police officer cannot seize or search digital devices without reasonable suspicion tied to a registered crime or a magistrate search warrant (BNSS § 105).',
      'Mandatory Audio-Video Recording is required during search and seizure operations under BNSS Section 105.',
      'You are only required to display driving documents on DigiLocker; you do not need to hand over an unlocked phone.'
    ],
    whatPoliceMustDo: [
      'Produce a valid court search warrant or formal investigatory notice before demanding access to personal chats.',
      'Record seizure videography and prepare a formal Seizure Memo (Panchnama) with independent witnesses.'
    ],
    whatPoliceCannotDo: [
      'Arbitrarily snatch phones at barricades or nakas to read personal WhatsApp messages.',
      'Threaten citizens with detention for refusing to unlock devices without legal cause.'
    ],
    exactDialogue: '“Under Article 21 and the Puttaswamy Supreme Court ruling, personal digital data is protected. Please provide a formal search order or warrant before searching my device.”',
    priority: 'high',
    iconName: 'Smartphone',
    translations: {
      hi: {
        title: 'स्मार्टफोन और लैपटॉप की डिजिटल निजता का अधिकार',
        summary: 'पुलिस नाके पर बिना सर्च वारंट फोन अनलॉक करने या व्हाट्सएप चैट देखने के लिए बाध्य नहीं कर सकती।',
        exactDialogue: '“पुट्टास्वामी फैसले के तहत फोन की निजता मौलिक अधिकार है। बिना सर्च वारंट आप फोन चेक नहीं कर सकते।”'
      },
      te: {
        title: 'స్మార్ట్‌ఫోన్ & ల్యాప్‌టాప్ డిజిటల్ గోప్యతా హక్కు',
        summary: 'పోలీసులు వారెంట్ లేకుండా ఫోన్ అన్‌లాక్ చేయమని లేదా వాట్సాప్ తనిఖీ చేయమని బలవంతం చేయలేరు.',
        exactDialogue: '“పుట్టస్వామి తీర్పు ప్రకారం డిజిటల్ గోప్యత ప్రాథమిక హక్కు. సెర్చ్ వారెంట్ లేకుండా ఫోన్ ఇవ్వలేను.”'
      },
      ta: {
        title: 'ஸ்மார்ட்போன் மற்றும் லேப்டாப் தனிநபர் தனியுரிமை உரிமை',
        summary: 'வாரண்ட் இல்லாமல் வாட்ஸ்அப் அல்லது போனை சோதனை செய்ய காவல்துறையினர் வற்புறுத்த முடியாது.',
        exactDialogue: '“புட்டசுவாமி தீர்ப்பின்படி போன் தனியுரிமை அடிப்படை உரிமை. வாரண்ட் இல்லாமல் போனை திறக்க முடியாது.”'
      },
      bn: {
        title: 'স্মার্টফোন ও ল্যাপটপের ডিজিটাল গোপনীয়তার অধিকার',
        summary: 'ওয়ারেন্ট ছাড়া পুলিশ ফোন আনলক করতে বা হোয়াটসঅ্যাপ চ্যাট দেখতে বাধ্য করতে পারে না।',
        exactDialogue: '“পুত্তাস্বামী রায় অনুযায়ী ফোনের গোপনীয়তা মৌলিক অধিকার। ওয়ারেন্ট ছাড়া ডিভাইস চেক করা যাবে না।”'
      },
      mr: {
        title: 'स्मार्टफोन व लॅपटॉपच्या गोपनीयतेचा मूलभूत हक्क',
        summary: 'वॉरंटशिवाय पोलिस नाक्यावर फोन अनलॉक करायला किंवा व्हॉट्सॲप चॅट पाहायला सक्ती करू शकत नाहीत.',
        exactDialogue: '“पुट्टास्वामी निकालानुसार फोनची गोपनीयता मूलभूत हक्क आहे. वॉरंटशिवाय फोन दाखवणार नाही.”'
      },
      gu: {
        title: 'સ્માર્ટફોન અને લેપટોપની ડિજિટલ પ્રાઈવસીનો અધિકાર',
        summary: 'પોલીસ વોરંટ વિના ફોન અનલોક કરવા કે વોટ્સએપ ચેક કરવા દબાણ કરી શકતી નથી.',
        exactDialogue: '“પુટ્ટસ્વામી ચુકાદા મુજબ ફોનની પ્રાઈવસી મૂળભૂત અધિકાર છે. વોરંટ વિના ચેક ન કરી શકાય.”'
      },
      kn: {
        title: 'ಸ್ಮಾರ್ಟ್‌ಫೋನ್ ಮತ್ತು ಲ್ಯಾಪ್‌ಟಾಪ್ ಡಿಜಿಟಲ್ ಗೌಪ್ಯತೆಯ ಹಕ್ಕು',
        summary: 'ವಾರಂಟ್ ಇಲ್ಲದೆ ಫೋನ್ ಅನ್‌ಲಾಕ್ ಮಾಡಲು ಅಥವಾ ವಾಟ್ಸಾಪ್ ಪರಿಶೀಲಿಸಲು ಪೊಲೀಸರು ಒತ್ತಾಯಿಸುವಂತಿಲ್ಲ.',
        exactDialogue: '“ಪುಟ್ಟಸ್ವಾಮಿ ತೀರ್ಪಿನ ಪ್ರಕಾರ ಫೋನ್ ಗೌಪ್ಯತೆ ಮೂಲಭೂತ ಹಕ್ಕು. ವಾರಂಟ್ ಇಲ್ಲದೆ ತಪಾಸಣೆ ಸಾಧ್ಯವಿಲ್ಲ.”'
      },
      ml: {
        title: 'സ്മാർട്ട്‌ഫോണിന്റെയും ലാപ്ടോപ്പിന്റെയും ഡിജിറ്റൽ സ്വകാര്യതാ അവകാശം',
        summary: 'വാറന്റില്ലാതെ ഫോൺ അൺലോക്ക് ചെയ്യാനോ വാട്ട്‌സ്ആപ്പ് പരിശോധിക്കാനോ പോലീസിന് അധികാരമില്ല.',
        exactDialogue: '“പുട്ടസ്വാമി വിധിപ്രകാരം ഫോൺ സ്വകാര്യത മൗലികാവകാശമാണ്. വാറന്റില്ലാതെ പരിശോധിക്കാൻ കഴിയില്ല.”'
      },
      pa: {
        title: 'ਸਮਾਰਟਫ਼ੋਨ ਤੇ ਲੈਪਟਾਪ ਦੀ ਡਿਜੀਟਲ ਨਿੱਜਤਾ ਦਾ ਅਧਿਕਾਰ',
        summary: 'ਵਾਰੰਟ ਤੋਂ ਬਿਨਾਂ ਪੁਲਿਸ ਨਾਕੇ \'ਤੇ ਫ਼ੋਨ ਅਨਲੌਕ ਕਰਨ ਜਾਂ ਵਟਸਐਪ ਚੈਟ ਦੇਖਣ ਲਈ ਮਜਬੂਰ ਨਹੀਂ ਕਰ ਸਕਦੀ।',
        exactDialogue: '“ਪੁੱਟਾਸਵਾਮੀ ਫੈਸਲੇ ਅਨੁਸਾਰ ਫ਼ੋਨ ਦੀ ਨਿੱਜਤਾ ਮੌਲਿਕ ਅਧਿਕਾਰ ਹੈ। ਵਾਰੰਟ ਤੋਂ ਬਿਨਾਂ ਫ਼ੋਨ ਚੈੱਕ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ।”'
      },
      hinglish: {
        title: 'Smartphone & Digital Privacy Shield',
        summary: 'Without search warrant, police random checking mein phone unlock ya WhatsApp inspect nahi kar sakti.',
        exactDialogue: '“Puttaswamy ruling ke under digital privacy Article 21 fundamental right hai. Search warrant ke bina phone check nahi hoga.”'
      }
    }
  }
];

export const SITUATION_STEPS: SituationStep[] = [
  {
    id: 'police-stop-question',
    title: 'Police Stop or Question You on the Street / Naka',
    situation: 'A police officer stops you on the road, at a checkpoint, or in a public space and begins questioning you.',
    category: 'fundamental_rights',
    severity: 'warning',
    legalShield: 'Article 21 (Personal Liberty), Article 20(3) (Protection against self-incrimination), Section 41A CrPC / Sec 35(3) BNSS.',
    landmarkCase: 'Nandini Satpathy v. P.L. Dani (1978) - Right against compulsory self-incrimination during police questioning.',
    summaryRights: [
      'Right to Know Reason: You have the right to politely ask the specific reason for being stopped.',
      'Right to Officer Identification: Every officer must display a clear nameplate, designation rank, and buckle number.',
      'Right to Free Movement: If you are not detained or arrested, you cannot be held indefinitely on suspicion without reason.',
      'Right Against Verbal Abuse: Police officers are bound by State Police Conduct Rules prohibiting verbal intimidation.'
    ],
    immediateActions: [
      'Stay calm, keep your hands visible, and speak politely with composure.',
      'Ask respectfully: “Officer, may I please know why I am being stopped?”',
      'If questioned without reason, ask clearly: “Sir, am I free to leave, or am I being formally detained for an inquiry?”',
      'Provide your basic name and identity if asked, but you are not obligated to answer speculative or self-incriminating queries.',
      'Note the officer’s name, rank badge, police vehicle registration number, and exact location.'
    ],
    doNotDo: [
      'Do NOT run away, argue aggressively, or physically touch the officer.',
      'Do NOT hand over your unlocked phone or surrender your personal belongings without an official search memo.',
      'Do NOT sign any blank paper, notebook, or confession document on the spot.',
      'Do NOT pay any informal on-the-spot cash fine without an official government receipt.'
    ],
    sayThis: '“Good day Officer. May I know the reason for this inquiry? Am I being detained, or am I free to proceed?”',
    helpline: '112 (National Emergency) / 15100 (NALSA Free Legal Aid)',
    whereToComplain: {
      authority: 'Senior Superintendent of Police (SSP) / DCP & Police Complaints Authority (PCA)',
      actSection: 'Section 154(3) CrPC / Section 173(4) BNSS & Police Act Disciplinary Rules',
      steps: [
        'Note the officer’s name tag, vehicle number, date, time, and exact landmark.',
        'Submit a formal written grievance to the ACP / DCP / SP of the district in person or via Registered Post.',
        'File an online complaint on the State Police Public Grievance Portal or Central CPGRAMS portal (pgportal.gov.in).',
        'If severe harassment or illegal detention occurred, file a complaint before the State / District Police Complaints Authority (PCA).'
      ],
      helplineOrPortal: 'pgportal.gov.in / 112',
      portalUrl: 'https://pgportal.gov.in'
    },
    fastScan30Sec: {
      situationText: 'Stopped by police for questioning on the road or checkpoint.',
      topRightText: 'Right to know reason • Ask if you are free to go • Note officer name tag.',
      mustDoText: 'Stay calm. Ask “Am I free to leave or detained?”. Show ID if requested. Do not surrender unlocked phone.',
      complainToText: 'District DCP / SP office or Police Complaints Authority (PCA).'
    },
    officialLinks: [
      {
        title: 'Constitution of India - Article 21 (Personal Liberty)',
        url: 'https://legislative.gov.in/constitution-of-india',
        department: 'Ministry of Law and Justice',
        type: 'act',
        description: 'Protection of life and personal liberty of all citizens.'
      },
      {
        title: 'NALSA Legal Services Portal',
        url: 'https://nalsa.gov.in',
        department: 'National Legal Services Authority',
        type: 'portal',
        description: 'Toll-free 24x7 legal assistance 15100.'
      }
    ],
    translations: {
      hi: {
        title: 'सड़क या नाके पर पुलिस रोके या पूछताछ करे',
        situation: 'रास्ते में, नाके पर या सार्वजनिक स्थान पर पुलिसकर्मी आपको रोककर पूछताछ करने लगे।',
        legalShield: 'संविधान का अनुच्छेद 21 (व्यक्तिगत स्वतंत्रता), अनुच्छेद 20(3) एवं धारा 41A CrPC / धारा 35 BNSS।',
        immediateActions: [
          'शांत रहें, हाथ स्पष्ट रखें और विनम्रता से बात करें।',
          'अधिकारी से आदरपूर्वक पूछें: “सर, मुझे किस कारण से रोका गया है?”',
          'पूछें: “क्या मुझे जाने की अनुमति है या किसी जांच के लिए हिरासत में लिया गया है?”',
          'पहचान पूछे जाने पर नाम-पहचान बताएं, लेकिन बिना वकील किसी आरोप को स्वीकार न करें।',
          'पुलिसकर्मी का नेम-टैग, पद और गाड़ी का नंबर नोट करें।'
        ],
        doNotDo: [
          'भागने या हाथापाई करने की कोशिश न करें।',
          'अनलॉक फोन पुलिस के हाथ में न दें।',
          'कोरे कागज पर दस्तखत न करें।'
        ],
        sayThis: '“नमस्ते सर, कृपया बताएं मुझे किस कारण से रोका गया है? क्या मैं आगे जा सकता हूं या मुझे रोका गया है?”',
        whereToComplain: {
          authority: 'जिला पुलिस उपायुक्त (DCP) / पुलिस अधीक्षक (SP) एवं पुलिस शिकायत प्राधिकरण (PCA)',
          steps: [
            'पुलिसकर्मी का नाम, बैज नंबर, समय व स्थान डायरी में नोट करें।',
            'जिले के पुलिस अधीक्षक (SP/DCP) को लिखित शिकायत या रजिस्टर्ड डाक भेजें।',
            'केंद्रीय पीजी पोर्टल (pgportal.gov.in) पर ऑनलाइन शिकायत दर्ज करें।'
          ],
          helplineOrPortal: '112 / pgportal.gov.in'
        }
      }
    }
  },
  {
    id: 'arrest-detained',
    title: 'Arrested or Detained by the Police',
    situation: 'A police officer tells you “You are under arrest” or forcefully takes you to the police station.',
    category: 'arrest',
    severity: 'critical',
    legalShield: 'Article 22(1) & (2) Constitution of India, Section 41B, 41D, 50, 54, 57 CrPC (Sec 36, 38, 47, 53, 58 BNSS).',
    landmarkCase: 'D.K. Basu v. State of West Bengal (1997) & Arnesh Kumar v. State of Bihar (2014) - Mandatory Arrest Memo, family intimation within 8-12 hours, 24-hr magistrate production.',
    summaryRights: [
      'Right to Know Grounds of Arrest: Article 22(1) mandates police must clearly explain the exact offence and sections.',
      'Right to Arrest Memo: Must be prepared on the spot, signed by a witness (family/neighbor) and counter-signed by you.',
      'Right to Inform Family: Police must notify one friend or relative within 8 to 12 hours of arrest (Sec 50A CrPC).',
      'Right to Consult a Lawyer: Sec 41D CrPC entitles you to meet your advocate during interrogation.',
      '24-Hour Magistrate Production: Article 22(2) & Sec 57 CrPC mandate production before Judicial Magistrate within 24 hours.',
      'Right to Medical Checkup: Sec 54 CrPC mandates independent doctor examination to record any injuries.'
    ],
    immediateActions: [
      'Immediately ask: “Officer, what are the exact grounds of arrest under Article 22(1)?”',
      'For offences with under 7 years punishment, police must show why Section 41A Notice was not given first.',
      'Demand an official printed copy of the D.K. Basu Arrest Memo with date, time, and witness signature.',
      'Exercise your right to make one phone call to inform your family and lawyer immediately.',
      'Insist on a medical examination (MLC) by a government medical officer to record physical condition.',
      'If you cannot afford an advocate, demand free legal representation from DLSA / NALSA (Helpline 15100).'
    ],
    doNotDo: [
      'Do NOT physically resist arrest or attempt to flee.',
      'Do NOT sign blank stamp papers, empty notebooks, or confessions (inadmissible u/s 25 Evidence Act / Sec 23 BSA).',
      'Do NOT accept remaining in police lockup for more than 24 hours without being taken before a Magistrate.',
      'Do NOT permit physical torture or third-degree abuse (strictly unconstitutional under Article 21).'
    ],
    sayThis: '“Under Article 22 and Section 41B CrPC, please provide my formal Arrest Memo, notify my family, and permit me to consult my advocate.”',
    helpline: '112 / 15100 (NALSA Free Legal Counsel 24/7)',
    whereToComplain: {
      authority: 'Judicial Magistrate / District Legal Services Authority (DLSA) / State Human Rights Commission',
      actSection: 'Section 57 & 156(3) CrPC / Section 58 & 175(3) BNSS, Protection of Human Rights Act 1993',
      steps: [
        'When produced before the Judicial Magistrate within 24 hours, directly inform the Magistrate in open court of any torture, illegal detention, or denial of rights.',
        'Request the Magistrate to order an independent medical re-examination and grant immediate bail or legal aid.',
        'File a formal complaint through your advocate before the District Sessions Court or High Court under Section 482 CrPC (Sec 528 BNSS).',
        'Lodge a petition with the State Human Rights Commission (SHRC) or NHRC (nhrc.nic.in) for custodial rights violations.'
      ],
      helplineOrPortal: 'NALSA 15100 / NHRC 14433',
      portalUrl: 'https://hrcnet.nic.in'
    },
    fastScan30Sec: {
      situationText: 'Being placed under formal police arrest or taken to station lockup.',
      topRightText: 'Mandatory Arrest Memo • 1 phone call to family/lawyer • 24hr Magistrate limit • Free Legal Aid 15100.',
      mustDoText: 'Ask grounds of arrest. Demand Arrest Memo copy. Call lawyer/family. Request medical exam. Do not sign blank papers.',
      complainToText: 'Inform Judicial Magistrate directly at 24-hr production or call NALSA Helpline 15100.'
    },
    officialLinks: [
      {
        title: 'Supreme Court D.K. Basu Judgment (AIR 1997 SC 610)',
        url: 'https://main.sci.gov.in',
        department: 'Supreme Court of India',
        type: 'judgement',
        description: 'The 11 mandatory guidelines for every arrest in India.'
      },
      {
        title: 'National Legal Services Authority (NALSA)',
        url: 'https://nalsa.gov.in',
        department: 'Ministry of Law and Justice',
        type: 'portal',
        description: 'Constitutional free legal aid under Article 39A.'
      }
    ],
    translations: {
      hi: {
        title: 'पुलिस द्वारा गिरफ्तारी या हिरासत',
        situation: 'पुलिस आपको गिरफ्तार करने की बात कहे या जबरन थाने ले जाए।',
        legalShield: 'संविधान का अनुच्छेद 22, धारा 41B, 41D, 50, 54 व 57 CrPC (बीएनएसएस)।',
        immediateActions: [
          'अनुच्छेद 22(1) के तहत गिरफ्तारी का कारण और धाराएं पूछें।',
          'मौके पर गवाह के हस्ताक्षर युक्त अरेस्ट मेमो की कॉपी मांगें।',
          'परिवार और वकील को तुरंत फोन करने के अधिकार का प्रयोग करें।',
          'सरकारी अस्पताल के डॉक्टर से मेडिकल जांच (MLC) कराने की मांग करें।',
          'यदि वकील नहीं है, तो नालसा (NALSA 15100) से मुफ्त सरकारी वकील की मांग करें।'
        ],
        doNotDo: [
          'कोरे कागज या बयान पर हस्ताक्षर न करें।',
          '24 घंटे से अधिक बिना मजिस्ट्रेट पेशी के थाने में न रहें।'
        ],
        sayThis: '“डी.के. बसु दिशानिर्देश और धारा 41B के तहत मुझे अरेस्ट मेमो दें और परिवार व वकील से बात करने की अनुमति दें।”',
        whereToComplain: {
          authority: 'न्यायिक मजिस्ट्रेट (Judicial Magistrate) व जिला विधिक सेवा प्राधिकरण (DLSA)',
          steps: [
            '24 घंटे के भीतर मजिस्ट्रेट के सामने पेश होने पर किसी भी मारपीट या अवैध हिरासत की शिकायत सीधे मजिस्ट्रेट से करें।',
            'मानवाधिकार आयोग (NHRC पोर्टल hrcnet.nic.in) पर शिकायत दर्ज करें।'
          ],
          helplineOrPortal: '15100 (नालसा मुफ्त कानूनी सहायता)'
        }
      }
    }
  },
  {
    id: 'fir-refusal',
    title: 'Police Refuse to Register Your FIR',
    situation: 'You go to a police station to report a serious crime (theft, assault, fraud, harassment) and the officer refuses to lodge an FIR or sends you away.',
    category: 'fir',
    severity: 'critical',
    legalShield: 'Section 154(1) & 154(3) CrPC (Sec 173(1) & 173(4) BNSS), Section 166A IPC / Sec 199 BNS (Criminal liability of police officer).',
    landmarkCase: 'Lalita Kumari v. Govt. of U.P. (Constitution Bench, Supreme Court 2014) - Registration of FIR is MANDATORY if information discloses a cognizable offence.',
    summaryRights: [
      'Mandatory FIR Registration: Police CANNOT refuse an FIR if a cognizable crime is disclosed (Lalita Kumari mandate).',
      'Right to Zero FIR: If the crime occurred outside the station’s territorial jurisdiction, they MUST register a Zero FIR and transfer it.',
      'Right to Free Copy: Under Section 154(2) CrPC, the complainant is entitled to an immediate signed copy of the FIR completely FREE of cost.',
      'Criminal Offence for Officer: Under Section 166A IPC / Section 199 BNS, an officer refusing an FIR in crimes against women faces up to 2 years imprisonment.'
    ],
    immediateActions: [
      'Submit a typed or clearly handwritten complaint in duplicate. Ask the duty officer to stamp and sign your receiving copy with the General Diary (GD) number.',
      'If the Station House Officer (SHO) refuses, note their name, rank, date, and exact reason cited.',
      'Level 2 Escalation: Send a copy of your complaint by Registered Post / Speed Post with Acknowledgment Due (A/D) to the Superintendent of Police (SP) / DCP under Section 154(3) CrPC / Sec 173(4) BNSS.',
      'Level 3 Escalation: File a private application before the Judicial Magistrate First Class (JMFC) under Section 156(3) CrPC / Section 175(3) BNSS praying for court directions to register an FIR and investigate.',
      'File an online e-FIR / grievance on the State Police Citizen Portal or Digital Police CCTNS.'
    ],
    doNotDo: [
      'Do NOT leave the police station without taking a stamped receipt, GD entry number, or acknowledgment on your duplicate copy.',
      'Do NOT accept an informal settlement or compromise under police pressure if you wish to prosecute a cognizable crime.',
      'Do NOT pay any money; filing an FIR is 100% free under Indian law.'
    ],
    sayThis: '“Under the Supreme Court’s Lalita Kumari judgment and Section 154 CrPC, registering an FIR for a cognizable offence is mandatory. Please provide my stamped receiving copy.”',
    helpline: '112 / 1091 (Women) / 1930 (Cyber Crime FIR)',
    whereToComplain: {
      authority: 'District SP/DCP (Sec 154(3) CrPC) ➔ Judicial Magistrate (Sec 156(3) CrPC / 175(3) BNSS)',
      actSection: 'Section 154(3) & 156(3) CrPC / Section 173(4) & 175(3) BNSS, Section 166A IPC',
      steps: [
        'Step 1: Write a registered post letter with complaint copy to the District Superintendent of Police (SP) / DCP under Section 154(3) CrPC / Sec 173(4) BNSS.',
        'Step 2: If SP fails to act within a reasonable time, file an application supported by an affidavit before the Judicial Magistrate u/s 156(3) CrPC / 175(3) BNSS (supported by Priyanka Srivastava v. State of UP).',
        'Step 3: Lodge a complaint against the defaulting police officer before the Police Complaints Authority (PCA) for dereliction of duty.',
        'Step 4: For cyber crimes, register directly on cybercrime.gov.in.'
      ],
      helplineOrPortal: 'cybercrime.gov.in / digitalpolice.gov.in',
      portalUrl: 'https://digitalpolice.gov.in'
    },
    fastScan30Sec: {
      situationText: 'Police refusing or stalling the registration of an FIR for a crime.',
      topRightText: 'FIR is mandatory (Lalita Kumari) • Zero FIR anywhere • Free copy • Officer liable u/s 166A.',
      mustDoText: 'Get receiving stamp on duplicate copy. Send complaint to SP/DCP by Speed Post (Sec 154(3)). File in Magistrate Court (Sec 156(3)).',
      complainToText: 'District SP/DCP via Speed Post or Judicial Magistrate Court under Section 156(3) CrPC.'
    },
    officialLinks: [
      {
        title: 'Supreme Court Lalita Kumari Judgment (AIR 2014 SC 187)',
        url: 'https://main.sci.gov.in',
        department: 'Supreme Court of India',
        type: 'judgement',
        description: 'Constitution Bench ruling on mandatory FIR registration.'
      },
      {
        title: 'Digital Police CCTNS Citizen Portal',
        url: 'https://digitalpolice.gov.in',
        department: 'Ministry of Home Affairs',
        type: 'portal',
        description: 'Central online portal for citizen services and complaint tracking.'
      },
      {
        title: 'National Cyber Crime Reporting Portal',
        url: 'https://cybercrime.gov.in',
        department: 'MHA Cyber Division',
        type: 'portal',
        description: 'Direct FIR registration for online financial & digital crimes.'
      }
    ],
    translations: {
      hi: {
        title: 'पुलिस एफआईआर (FIR) दर्ज करने से मना करे',
        situation: 'थाने जाने पर पुलिस आपकी शिकायत दर्ज करने से इनकार करे या टरकाए।',
        legalShield: 'धारा 154(1) व 154(3) CrPC (धारा 173 BNSS), ललिता कुमारी सुप्रीम कोर्ट फैसला, धारा 166A IPC।',
        immediateActions: [
          'शिकायत की दो प्रतियों पर रिसीविंग मोहर और जीडी (GD) नंबर लें।',
          'सुप्रीम कोर्ट के ललिता कुमारी फैसले का हवाला दें (संज्ञेय अपराध में FIR अनिवार्य है)।',
          'थाना प्रभारी मना करे तो शिकायत की प्रति स्पीड पोस्ट से जिला पुलिस अधीक्षक (SP/DCP) को धारा 154(3) के तहत भेजें।',
          'वकील के जरिए न्यायिक मजिस्ट्रेट की अदालत में धारा 156(3) CrPC (धारा 175(3) BNSS) के तहत आवेदन करें।'
        ],
        doNotDo: [
          'बिना रिसीविंग लिए थाने से बाहर न आएं।',
          'एफआईआर दर्ज कराने के लिए कोई रिश्वत न दें।'
        ],
        sayThis: '“सुप्रीम कोर्ट के ललिता कुमारी फैसले के अनुसार संज्ञेय अपराध में FIR दर्ज करना अनिवार्य है। कृपया मेरी शिकायत पर रिसीविंग मोहर लगाएं।”',
        whereToComplain: {
          authority: 'पुलिस अधीक्षक (SP/DCP) एवं न्यायिक मजिस्ट्रेट न्यायालय (धारा 156(3))',
          steps: [
            '1. स्पीड पोस्ट से एसपी/डीसीपी को धारा 154(3) में शिकायत भेजें।',
            '2. न्यायिक मजिस्ट्रेट के समक्ष धारा 156(3) के तहत एफआईआर दर्ज करने का आदेश मांगें।',
            '3. पुलिस शिकायत प्राधिकरण (PCA) में संबंधित अधिकारी की शिकायत करें।'
          ],
          helplineOrPortal: 'digitalpolice.gov.in / 112'
        }
      }
    }
  },
  {
    id: 'search-seizure',
    title: 'Police Want to Search You, Your Vehicle, or Your Home',
    situation: 'Police officers arrive at your residence, office, or stop your car demanding to search your premises or seize personal belongings.',
    category: 'search',
    severity: 'warning',
    legalShield: 'Section 100 & 165 CrPC (Sec 103 & 185 BNSS), Section 51(2) CrPC / Sec 49(2) BNSS, Article 20(3) & 21.',
    landmarkCase: 'State of Punjab v. Baldev Singh (1999) & K.S. Puttaswamy v. Union of India (2017) - Mandatory presence of 2 independent local witnesses (Panch), search memo, and digital privacy.',
    summaryRights: [
      'Search Warrant or Section 165 Memo: Police must produce a judicial Search Warrant, or record reasons in writing if emergency search under Sec 165.',
      'Two Independent Local Witnesses (Panch): Search MUST be conducted in the presence of 2 respectable neighborhood inhabitants.',
      'Right to Search Police Officers First: Occupants have the legal right to pat down and search the police officers before they enter to ensure no evidence is planted.',
      'Female Search Protections: A female person can ONLY be searched by a female officer with strict decency (Sec 51(2) CrPC).',
      'Right to Free Panchanama Copy: An itemized Seizure Memo of all confiscated goods must be prepared and handed over to you immediately on the spot.'
    ],
    immediateActions: [
      'Politely ask the leading officer: “Officer, please show me the judicial Search Warrant or your Section 165 written authorization.”',
      'Demand that two independent neighbors or local residents be called as Panch witnesses to observe the entire search.',
      'Politely request the police officers to allow themselves to be searched before entering your rooms.',
      'Follow the search team through each room to keep all movements in clear sight.',
      'Demand an immediate signed duplicate copy of the Seizure Memo (Panchanama) containing serial numbers, brand, and exact condition of all seized items.'
    ],
    doNotDo: [
      'Do NOT allow search without independent witnesses present.',
      'Do NOT permit male officers to touch, frisk, or search any female family member.',
      'Do NOT sign a Panchanama that contains blank rows or unlisted items.',
      'Do NOT hand over unlocked passwords or cloud credentials without a specific court order.'
    ],
    sayThis: '“Under Section 100 CrPC, please show the search warrant, call two independent local witnesses, and provide an official signed Seizure Memo.”',
    helpline: '112 / 15100',
    whereToComplain: {
      authority: 'Jurisdictional Magistrate Court & Vigilance Branch',
      actSection: 'Section 100(7) & 165(5) CrPC / Section 103(7) & 185(5) BNSS',
      steps: [
        'File an application before the Jurisdictional Magistrate requesting a copy of the Section 165 search grounds forwarded by police.',
        'If property was seized illegally or damaged, file an application under Section 451 / 457 CrPC for return of seized property (Superdari).',
        'Lodge a vigilance complaint if items were taken without being listed on the formal Panchanama inventory.'
      ],
      helplineOrPortal: '112 / District Court Registry'
    },
    fastScan30Sec: {
      situationText: 'Police demanding to search your house, bag, or vehicle.',
      topRightText: 'Must show search warrant • 2 local witnesses required • Search police first • Signed inventory memo.',
      mustDoText: 'Ask for search warrant. Call 2 neighbors as witnesses. Inspect officers before they enter. Ensure every item is listed on receipt.',
      complainToText: 'Area Magistrate Court or SP Vigilance.'
    },
    officialLinks: [
      {
        title: 'Code of Criminal Procedure - Section 100 (Search Procedures)',
        url: 'https://indiacode.nic.in',
        department: 'Ministry of Law and Justice',
        type: 'act',
        description: 'Mandatory rules governing search of closed places and witness presence.'
      }
    ],
    translations: {
      hi: {
        title: 'घर, गाड़ी या सामान की तलाशी एवं जब्ती',
        situation: 'पुलिस आपके घर, दफ्तर या गाड़ी की तलाशी लेने पहुंचे या सामान जब्त करने लगे।',
        legalShield: 'धारा 100 व 165 CrPC (धारा 103 व 185 BNSS), पुट्टास्वामी निजता फैसला।',
        immediateActions: [
          'सर्च वारंट या धारा 165 का लिखित आदेश दिखाने को कहें।',
          'धारा 100 के तहत पड़ोस के 2 स्वतंत्र व्यक्तियों (पंच गवाह) को बुलाने की मांग करें।',
          'घर में घुसने से पहले पुलिसकर्मियों की खुद तलाशी लेने का अधिकार प्रयोग करें ताकि कोई झूठा सबूत न रखा जा सके।',
          'जब्त किए गए हर सामान की सूची (पंचनामा) पर दस्तखत लेकर तुरंत कॉपी लें।'
        ],
        doNotDo: [
          'बिना गवाहों के तलाशी न लेने दें।',
          'महिला की तलाशी पुरुष पुलिसकर्मी को न करने दें।'
        ],
        sayThis: '“धारा 100 के तहत कृपया सर्च वारंट दिखाएं, दो स्वतंत्र पड़ोसियों को गवाह बनाएं और जब्ती सूची की कॉपी दें।”',
        whereToComplain: {
          authority: 'इलाका न्यायिक मजिस्ट्रेट एवं एसपी विजिलेंस',
          steps: [
            'जब्त सामान की वापसी के लिए मजिस्ट्रेट कोर्ट में धारा 451/457 CrPC के तहत अर्जी लगाएं।'
          ],
          helplineOrPortal: '112'
        }
      }
    }
  },
  {
    id: 'police-threatens-assault',
    title: 'Police Officer Threatens, Abuses, or Assaults You',
    situation: 'A police officer uses abusive language, threatens violence or false charges, or physically assaults you or someone in custody.',
    category: 'fundamental_rights',
    severity: 'critical',
    legalShield: 'Article 21 (Right to Dignity & Life), Section 330/331 IPC (Sec 115/116 BNS - Torture for confession), Section 166A IPC (Sec 199 BNS), Section 29 Police Act, 1861.',
    landmarkCase: 'D.K. Basu v. State of West Bengal (AIR 1997 SC 610) & Prakash Singh v. Union of India (2006) - Custodial violence is a severe crime; State must compensate and prosecute guilty officers.',
    summaryRights: [
      'Absolute Ban on Police Violence: Physical beating, torture, or third-degree methods are strictly unconstitutional and criminal offences.',
      'Right to Public Video Recording: Citizens have the legal right to record police officers performing duties in public spaces as long as it does not obstruct duty.',
      'Right to Medico-Legal Examination: Mandatory medical documentation of any injury caused by police in a government hospital.',
      'Personal Criminal Liability: A police officer who assaults a citizen does not have sovereign immunity under Section 197 CrPC for criminal acts.'
    ],
    immediateActions: [
      'Prioritize personal safety: do not retaliate physically. Keep witnesses nearby.',
      'Immediately visit the nearest Government District Hospital or Primary Health Centre (PHC) and get a detailed Medico-Legal Certificate (MLC) documenting every bruise, cut, and injury.',
      'Preserve all digital evidence: take high-resolution photos of injuries with timestamp, preserve CCTV/phone footage, and audio recordings.',
      'Note the offending officer’s name, badge number, police station, vehicle number, and names of accompanying officers.',
      'Dial 112 immediately to log an official police distress call on the centralized computer server.',
      'Lodge a formal written complaint with the District SP/DCP, Police Complaints Authority, and NHRC.'
    ],
    doNotDo: [
      'Do NOT delay getting a government hospital medical examination; injury marks fade with time.',
      'Do NOT delete any video or audio recordings from your phone; back them up to cloud storage immediately.',
      'Do NOT accept monetary settlements to drop complaints of custodial brutality.'
    ],
    sayThis: '“Officer, physical assault and intimidation are punishable under Section 330 IPC and violate Article 21. I am requesting an immediate medical examination.”',
    helpline: '112 / 14433 (National Human Rights Commission NHRC)',
    whereToComplain: {
      authority: 'Police Complaints Authority (PCA) ➔ NHRC / SHRC ➔ Judicial Magistrate (Sec 200 CrPC)',
      actSection: 'Protection of Human Rights Act 1993, Section 200 & 156(3) CrPC / Section 223 & 175(3) BNSS',
      steps: [
        'Step 1: File an emergency complaint on the National Human Rights Commission (NHRC) online portal at hrcnet.nic.in or call toll-free 14433.',
        'Step 2: Submit a formal complaint before the State / District Police Complaints Authority (PCA) seeking departmental suspension and disciplinary inquiry.',
        'Step 3: File a private criminal complaint before the Judicial Magistrate under Section 200 CrPC / Section 223 BNSS against the specific officers for assault, criminal intimidation, and wrongful confinement.',
        'Step 4: File a Writ Petition under Article 226 before the High Court for independent CBI / SIT investigation and interim compensation.'
      ],
      helplineOrPortal: 'hrcnet.nic.in / Toll-Free 14433',
      portalUrl: 'https://hrcnet.nic.in'
    },
    fastScan30Sec: {
      situationText: 'Police officer threatening, beating, abusing, or committing violence.',
      topRightText: 'Torture is illegal • Right to record in public • Get hospital MLC certificate immediately.',
      mustDoText: 'Get medical checkup (MLC) at govt hospital immediately. Photograph injuries. Dial 112 to log on server. Complain to NHRC/PCA.',
      complainToText: 'NHRC (hrcnet.nic.in / 14433) and District Police Complaints Authority (PCA).'
    },
    officialLinks: [
      {
        title: 'National Human Rights Commission (NHRC) Portal',
        url: 'https://hrcnet.nic.in',
        department: 'NHRC India',
        type: 'portal',
        description: 'Direct portal for registering custodial violence & police atrocities complaints.'
      },
      {
        title: 'Central Public Grievance CPGRAMS Portal',
        url: 'https://pgportal.gov.in',
        department: 'Department of Administrative Reforms',
        type: 'portal',
        description: 'Central government citizen grievance tracking system.'
      }
    ],
    translations: {
      hi: {
        title: 'पुलिस अधिकारी द्वारा धमकी, गाली-गलौज या मारपीट',
        situation: 'पुलिसकर्मी अभद्र भाषा बोले, झूठे केस में फंसाने की धमकी दे या मारपीट करे।',
        legalShield: 'संविधान का अनुच्छेद 21, धारा 330/331 IPC (बीएनएस), पुलिस अधिनियम धारा 29।',
        immediateActions: [
          'तुरंत सरकारी अस्पताल जाकर मेडिकल (MLC) कराएं और चोटों का आधिकारिक रिकॉर्ड बनवाएं।',
          'चोटों के फोटो, वीडियो, सीसीटीवी फुटेज और ऑडियो रिकॉर्डिंग सुरक्षित रखें।',
          '112 पर कॉल करके कॉल रिकॉर्ड सरकारी सर्वर पर दर्ज कराएं।',
          'मानवाधिकार आयोग (NHRC) और पुलिस शिकायत प्राधिकरण (PCA) में शिकायत दर्ज करें।'
        ],
        doNotDo: [
          'मेडिकल कराने में देरी न करें।',
          'सबूत या रिकॉर्डिंग फोन से डिलीट न करें।'
        ],
        sayThis: '“मारपीट और धमकी कानूनन अपराध है। मैं तुरंत सरकारी डॉक्टर से अपनी मेडिकल जांच कराने की मांग करता हूं।”',
        whereToComplain: {
          authority: 'राष्ट्रीय मानवाधिकार आयोग (NHRC) एवं पुलिस शिकायत प्राधिकरण (PCA)',
          steps: [
            '1. एनएचआरसी पोर्टल (hrcnet.nic.in या हेल्पलाइन 14433) पर ऑनलाइन शिकायत करें।',
            '2. राज्य/जिला पुलिस शिकायत प्राधिकरण (PCA) में अधिकारी के निलंबन की अर्जी दें।',
            '3. मजिस्ट्रेट कोर्ट में धारा 200 CrPC के तहत आपराधिक परिवाद दर्ज करें।'
          ],
          helplineOrPortal: '14433 (NHRC) / hrcnet.nic.in'
        }
      }
    }
  },
  {
    id: 'bribe-demands',
    title: 'Police Officer Asks for a Bribe or Extortion',
    situation: 'A police officer demands cash, online UPI transfer, or gifts to register an FIR, clear a passport verification, release a vehicle, or avoid arrest.',
    category: 'fundamental_rights',
    severity: 'critical',
    legalShield: 'Prevention of Corruption Act, 1988 (Section 7, 7A & 13) & Section 384 IPC / Sec 308 BNS (Extortion).',
    landmarkCase: 'State of Maharashtra v. Balaram Bapu Patil & Central Vigilance Commission Directives - Demanding bribe by public servant is a non-bailable cognizable offence.',
    summaryRights: [
      'Bribe Demands are Illegal: Under Section 7 of the Prevention of Corruption Act, demanding undue advantage carries up to 7 years rigorous imprisonment.',
      'Protection for Whistleblowers: A citizen compelled to pay a bribe who reports the incident to law enforcement within 7 days is legally protected from prosecution.',
      'Right to Free Public Services: Services like FIR registration, MLC, post-mortem, and routine verification are completely free by law.',
      'Right to Demand Anti-Corruption Trap: Anti-Corruption Bureau (ACB) / CBI can lay a legal trap using phenolphthalein powder to catch corrupt officers red-handed.'
    ],
    immediateActions: [
      'Do NOT pay the bribe. If under acute coercion, ask for some time to arrange the funds.',
      'Discreetly note down all details: officer’s full name, rank, police station, date, time, location, exact demanded amount, and the reason claimed.',
      'If demanded via UPI / QR code or phone number, take clear screenshots and preserve the transaction handle.',
      'Immediately contact the State Anti-Corruption Bureau (ACB) or Central Bureau of Investigation (CBI) Anti-Corruption Helpline 1064.',
      'Lodge a formal vigilance complaint with the Central Vigilance Commission (CVC) or State Vigilance Directorate.'
    ],
    doNotDo: [
      'Do NOT willingly offer speed money or bribes (giving bribe is also punishable u/s 8 PC Act unless reported within 7 days).',
      'Do NOT confront the officer aggressively in the police station without backup.',
      'Do NOT pay cash to informal agents or intermediaries hanging around the station.'
    ],
    sayThis: '“Sir, demanding or paying a bribe is a non-bailable offence under Section 7 of the Prevention of Corruption Act. I will pay only the official government fee with a stamped receipt.”',
    helpline: '1064 (Anti-Corruption Toll-Free Helpline) / 1800-11-5555 (CBI)',
    whereToComplain: {
      authority: 'Anti-Corruption Bureau (ACB) / CBI Anti-Corruption Wing / Central Vigilance Commission (CVC)',
      actSection: 'Prevention of Corruption Act, 1988 (Sec 7 & 13), CVC Act 2003',
      steps: [
        'Step 1: Call National Anti-Corruption Helpline 1064 or CBI Anti-Corruption Toll-Free 1800-11-5555 / 011-24362755.',
        'Step 2: File a complaint on the Central Vigilance Commission portal at cvc.gov.in.',
        'Step 3: Meet the SP of your State Anti-Corruption Bureau (ACB) with your complaint to organize a formal trap operation.',
        'Step 4: Register an online grievance on CPGRAMS (pgportal.gov.in) under the Ministry of Home Affairs.'
      ],
      helplineOrPortal: '1064 / cvc.gov.in / cbi.gov.in',
      portalUrl: 'https://cvc.gov.in'
    },
    fastScan30Sec: {
      situationText: 'Police demanding bribe for FIR, passport, vehicle release, or bail.',
      topRightText: 'Bribe is a serious crime (PC Act Sec 7) • Free services • 7-day whistleblower protection.',
      mustDoText: 'Do NOT pay. Note officer name & exact demand. Preserve UPI/call proof. Call Anti-Corruption Helpline 1064 or CBI.',
      complainToText: 'Anti-Corruption Bureau (ACB) / CBI Helpline 1064 / CVC portal (cvc.gov.in).'
    },
    officialLinks: [
      {
        title: 'Central Vigilance Commission (CVC) Portal',
        url: 'https://cvc.gov.in',
        department: 'Government of India',
        type: 'portal',
        description: 'Official apex integrity body for reporting corruption by public servants.'
      },
      {
        title: 'Central Bureau of Investigation (CBI) - Anti Corruption',
        url: 'https://cbi.gov.in',
        department: 'CBI India',
        type: 'portal',
        description: 'Toll-free anti-corruption helpline 1064 & online complaint.'
      }
    ],
    translations: {
      hi: {
        title: 'पुलिस अधिकारी रिश्वत या पैसे मांगे',
        situation: 'एफआईआर दर्ज करने, पासपोर्ट जांच, गाड़ी छोड़ने या केस रफा-दफा करने के लिए पुलिसकर्मी रिश्वत मांगे।',
        legalShield: 'भ्रष्टाचार निवारण अधिनियम, 1988 (धारा 7 व 13) एवं धारा 384 IPC (जबरन वसूली)।',
        immediateActions: [
          'रिश्वत बिल्कुल न दें। समय मांगें।',
          'अधिकारी का नाम, पद, थाना, तारीख और मांगी गई रकम की डिटेल नोट करें।',
          'यदि फोन या यूपीआई (UPI) से मांग हो तो स्क्रीनशॉट व रिकॉर्डिंग सुरक्षित रखें।',
          'एंटी करप्शन ब्यूरो (ACB) या सीबीआई (CBI) के टोल-फ्री नंबर 1064 पर शिकायत करें।'
        ],
        doNotDo: [
          'स्वेच्छा से कोई दलाली या रिश्वत न दें।'
        ],
        sayThis: '“भ्रष्टाचार निवारण अधिनियम की धारा 7 के तहत रिश्वत मांगना गैर-जमानती अपराध है। मैं केवल आधिकारिक सरकारी रसीद पर ही फीस दूंगा।”',
        whereToComplain: {
          authority: 'एंटी करप्शन ब्यूरो (ACB) / सीबीआई (1064) एवं केंद्रीय सतर्कता आयोग (CVC)',
          steps: [
            '1. एंटी करप्शन हेल्पलाइन 1064 या सीबीआई 1800-11-5555 पर कॉल करें।',
            '2. सीवीसी (cvc.gov.in) पर ऑनलाइन शिकायत दर्ज करें।'
          ],
          helplineOrPortal: '1064 / cvc.gov.in'
        }
      }
    }
  },
  {
    id: 'where-to-complain',
    title: 'Where & How to Complain When Police Violate Your Rights',
    situation: 'Your rights have been violated by a police officer (refused FIR, illegal custody, harassment, bribery, assault) and you need the exact legal escalation ladder.',
    category: 'departments',
    severity: 'info',
    legalShield: 'Section 154(3), 156(3), 200 CrPC (Sec 173(4), 175(3), 223 BNSS), Police Act 1861, Article 226/32 Constitution of India.',
    landmarkCase: 'Prakash Singh v. Union of India (2006) 8 SCC 1 - Supreme Court directed mandatory establishment of Police Complaints Authorities (PCA) at State & District levels.',
    summaryRights: [
      'Level 1: Senior Station Officer / ACP - Immediate administrative supervisory oversight.',
      'Level 2: Superintendent of Police (SP) / DCP - Statutory petition via Registered Speed Post with A/D u/s 154(3) CrPC.',
      'Level 3: Police Complaints Authority (PCA) - Independent statutory body headed by retired Judges to investigate misconduct.',
      'Level 4: Judicial Magistrate First Class (JMFC) - Judicial orders u/s 156(3) & private criminal prosecution u/s 200 CrPC.',
      'Level 5: National / State Commissions (NHRC, NCW, NALSA) & High Court Writ u/s Article 226.'
    ],
    immediateActions: [
      'Collate all documentary proof: station diary numbers, photos, hospital MLC reports, witness contacts, audio/video clips.',
      'Draft a chronological narrative stating: Date, Time, Location, Names/Badge numbers of officers, Exact violation, and Legal remedies requested.',
      'Choose the appropriate forum according to the escalation ladder.',
      'Retain signed postal receipts, speed post tracking numbers, and online acknowledgement tokens for every submission.'
    ],
    doNotDo: [
      'Do NOT submit original documents without keeping photocopies and scanned backups.',
      'Do NOT send anonymous complaints without basic verifiable facts.',
      'Do NOT miss the statutory limitation periods for filing judicial applications.'
    ],
    sayThis: '“I am exercising my statutory right under Section 154(3) CrPC and Prakash Singh directives to file a formal grievance against misconduct before the supervisory authority.”',
    helpline: '112 / 15100 / 14433 / 1064',
    whereToComplain: {
      authority: 'The 5-Tier National Police Grievance Escalation Ladder',
      actSection: 'Constitution of India Art 226, CrPC / BNSS, Protection of Human Rights Act',
      steps: [
        'Tier 1 (Immediate): Submit written grievance to Assistant Commissioner of Police (ACP) / Sub-Divisional Police Officer (SDPO).',
        'Tier 2 (District Police Chief): Send complaint via Speed Post with A/D to the Superintendent of Police (SP) / DCP under Section 154(3) CrPC.',
        'Tier 3 (Independent Authority): File before State / District Police Complaints Authority (PCA) for serious misconduct (death, grievous hurt, rape, extortion).',
        'Tier 4 (Court of Law): File application before Judicial Magistrate u/s 156(3) CrPC / 175(3) BNSS or private criminal complaint u/s 200 CrPC.',
        'Tier 5 (Constitutional Apex): Petition National Human Rights Commission (nhrc.nic.in), National Commission for Women (ncw.nic.in), or High Court Writ under Article 226.'
      ],
      helplineOrPortal: 'pgportal.gov.in / hrcnet.nic.in / nalsa.gov.in',
      portalUrl: 'https://pgportal.gov.in'
    },
    fastScan30Sec: {
      situationText: 'Need to file a formal complaint against a police officer or station.',
      topRightText: '5-Tier Escalation: SHO ➔ SP/DCP ➔ PCA ➔ Magistrate Court ➔ NHRC / High Court.',
      mustDoText: 'Gather proofs (MLC, photos, GD receipt). Send Speed Post to SP (Sec 154(3)). File online on CPGRAMS / NHRC. Approach Magistrate.',
      complainToText: 'District SP Office, Police Complaints Authority (PCA), or Judicial Magistrate Court.'
    },
    officialLinks: [
      {
        title: 'CPGRAMS Central Public Grievance Redressal',
        url: 'https://pgportal.gov.in',
        department: 'Government of India',
        type: 'portal',
        description: 'National portal for lodging grievances against public authorities.'
      },
      {
        title: 'National Human Rights Commission (NHRC)',
        url: 'https://hrcnet.nic.in',
        department: 'NHRC India',
        type: 'portal',
        description: 'National portal for police excess and human rights complaints.'
      },
      {
        title: 'National Commission for Women (NCW)',
        url: 'http://ncw.nic.in',
        department: 'Ministry of Women and Child Development',
        type: 'portal',
        description: 'Direct portal for police non-action in crimes against women.'
      }
    ],
    translations: {
      hi: {
        title: 'पुलिस के खिलाफ कहां और कैसे शिकायत करें (पूरा रोडमैप)',
        situation: 'पुलिस ने आपके अधिकारों का हनन किया हो और आप कानूनी रूप से शिकायत दर्ज कराना चाहते हैं।',
        legalShield: 'धारा 154(3), 156(3), 200 CrPC, प्रकाश सिंह सुप्रीम कोर्ट फैसला (PCA)।',
        immediateActions: [
          'सभी सबूत (तस्वीरें, मेडिकल रिपोर्ट, रसीदें, ऑडियो-वीडियो) तैयार रखें।',
          '5-स्तरीय एस्केलेशन सीढ़ी का पालन करें: 1. डीसीपी/एसपी 2. पुलिस शिकायत प्राधिकरण 3. न्यायिक मजिस्ट्रेट 4. मानवाधिकार आयोग।'
        ],
        doNotDo: [
          'बिना रिसीविंग या स्पीड पोस्ट ट्रैकिंग के आवेदन न छोड़ें।'
        ],
        sayThis: '“मैं धारा 154(3) और सुप्रीम कोर्ट के प्रकाश सिंह फैसले के तहत वरिष्ठ अधिकारियों के समक्ष पुलिस दुर्व्यवहार की आधिकारिक शिकायत दर्ज कर रहा हूं।”',
        whereToComplain: {
          authority: '5-स्तरीय राष्ट्रीय पुलिस शिकायत निवारण प्रणाली',
          steps: [
            '1. जिला पुलिस अधीक्षक (SP/DCP) को स्पीड पोस्ट से भेजें।',
            '2. राज्य पुलिस शिकायत प्राधिकरण (PCA) में अर्जी दें।',
            '3. न्यायिक मजिस्ट्रेट कोर्ट में धारा 156(3) / 200 में केस करें।',
            '4. एनएचआरसी (hrcnet.nic.in) और पीजी पोर्टल (pgportal.gov.in) पर ऑनलाइन दर्ज करें।'
          ],
          helplineOrPortal: 'pgportal.gov.in / 14433'
        }
      }
    }
  },
  {
    id: 'traffic-stopped',
    title: 'Traffic Police Stopped My Vehicle / Ignition Keys Snatched',
    situation: 'You are driving and a traffic cop flags you down at a naka / intersection, threatens to tow your vehicle, or attempts to snatch the ignition key.',
    category: 'traffic',
    severity: 'warning',
    legalShield: 'Motor Vehicles Act, 1988 & Central Motor Vehicles Rules (Rule 139 for DigiLocker/mParivahan), State Police Manuals.',
    landmarkCase: 'High Court & MVA Directives - Police cannot snatch vehicle keys or deflate tyres; only SI-rank officers can compound spot fines.',
    summaryRights: [
      'Key Snatching is Illegal: Traffic officers have NO legal power to pull out ignition keys or deflate tyres.',
      'DigiLocker & mParivahan Valid: Rule 139 CMVR mandates electronic DL, RC, Insurance, and PUC are 100% legally recognized.',
      'Rank Authorization: Only officers of Sub-Inspector (SI) rank and above can issue spot compounding challans exceeding ₹100.',
      'No Towing with Occupants: Towing a vehicle while any person or pet is seated inside is prohibited.'
    ],
    immediateActions: [
      'Pull over safely to the left curb, switch off engine, turn on hazard lights, and remain calm.',
      'Politely ask the officer for their name, rank, and the exact traffic rule violation.',
      'Present your Driving License, RC, Insurance, and PUC digitally via DigiLocker or mParivahan apps.',
      'If a fine is imposed, demand an official electronic e-Challan receipt or court summons.'
    ],
    doNotDo: [
      'Do NOT offer informal cash without an official printed electronic receipt.',
      'Do NOT permit an officer below Sub-Inspector (SI) rank to seize your vehicle.',
      'Do NOT leave your vehicle key inside if an officer tries to snatch it unlawfully.'
    ],
    sayThis: '“Good day Officer. Under Rule 139 Central Motor Vehicles Rules, here are my verified documents on DigiLocker. Snatching ignition keys is not permissible.”',
    helpline: '112 or local State Traffic Police Control Room',
    whereToComplain: {
      authority: 'DCP Traffic & State Parivahan e-Challan Grievance Portal',
      actSection: 'Motor Vehicles Act 1988 Section 130 & Rule 139 CMVR',
      steps: [
        'Step 1: Check your e-challan status and evidence photos on the official portal: echallan.parivahan.gov.in.',
        'Step 2: Submit a dispute on the Parivahan portal if the fine was issued wrongfully or fake vehicle number was used.',
        'Step 3: If an officer snatched keys, deflated tyres, or misbehaved, file a complaint with the Deputy Commissioner of Police (Traffic).'
      ],
      helplineOrPortal: 'echallan.parivahan.gov.in / 112',
      portalUrl: 'https://echallan.parivahan.gov.in'
    },
    fastScan30Sec: {
      situationText: 'Traffic police stopped vehicle, snatched key, or demanded cash.',
      topRightText: 'Key snatching is illegal • DigiLocker 100% valid (Rule 139) • SI rank required for fine.',
      mustDoText: 'Show DigiLocker. Ask officer name & violation. Demand printed e-challan. Never pay without receipt.',
      complainToText: 'echallan.parivahan.gov.in or DCP Traffic Office.'
    },
    officialLinks: [
      {
        title: 'Ministry of Road Transport (Parivahan e-Challan)',
        url: 'https://echallan.parivahan.gov.in',
        department: 'MoRTH',
        type: 'portal',
        description: 'Verify, track, and dispute traffic challans online.'
      }
    ],
    translations: {
      hi: {
        title: 'ट्रैफिक पुलिस ने गाड़ी रोकी या चाबी छीनी',
        situation: 'ट्रैफिक पुलिस ने गाड़ी रोकी, चाबी निकालने की कोशिश की या बिना रसीद पैसे मांगे।',
        legalShield: 'मोटर वाहन नियम 139 (डिजिलॉकर मान्यता), मोटर वाहन अधिनियम 1988।',
        immediateActions: [
          'गाड़ी साइड में रोकें, अधिकारी से विनम्रता से नाम व नियम उल्लंघन का कारण पूछें।',
          'डिजिलॉकर (DigiLocker) या mParivahan ऐप पर ड्राइविंग लाइसेंस व आरसी दिखाएं।',
          'चालान होने पर अनिवार्य रूप से सरकारी ई-चालान रसीद मांगें।'
        ],
        doNotDo: [
          'बिना रसीद कोई नकद न दें।',
          'चाबी छीनने का विनम्रतापूर्वक विरोध करें।'
        ],
        sayThis: '“नमस्ते सर, डिजिलॉकर पर मेरे सभी दस्तावेज वैध हैं। मोटर वाहन नियमों के तहत चाबी निकालना अवैध है।”',
        whereToComplain: {
          authority: 'डीसीपी ट्रैफिक एवं परिवहन ई-चालान पोर्टल',
          steps: [
            'ई-चालान पोर्टल (echallan.parivahan.gov.in) पर चालान चेक व डिस्प्यूट करें।'
          ],
          helplineOrPortal: 'echallan.parivahan.gov.in / 112'
        }
      }
    }
  },
  {
    id: 'women-questioning-arrest',
    title: 'Women Summoned, Questioned, or Detained by Police',
    situation: 'A woman is being called to a police station for questioning, or police attempt to arrest a woman at night or without female officers.',
    category: 'women_child',
    severity: 'critical',
    legalShield: 'Section 160(1) & 46(4) CrPC (Sec 179(1) & 43(5) BNSS), Sheela Barse v. State of Maharashtra.',
    landmarkCase: 'Sheela Barse v. State of Maharashtra (1983) & Supreme Court Directives - No woman can be arrested between sunset and sunrise; questioning must be at home.',
    summaryRights: [
      'No Calling to Police Station: Under Section 160(1) CrPC, a woman witness cannot be required to attend any place other than her residence for questioning.',
      'Sunset to Sunrise Arrest Ban: Under Section 46(4) CrPC, no woman can be arrested after sunset (6 PM) and before sunrise (6 AM) except in exceptional circumstances with prior written permission of Judicial Magistrate.',
      'Female Officer Mandatory: Only a female police officer is authorized to arrest or physically touch a female accused.',
      'Right to Separate Lockup: Women must be kept in separate women-only lockup facilities with female wardens.'
    ],
    immediateActions: [
      'If summoned to the police station for questioning, cite Section 160(1) CrPC and state that officers may record the statement at your residence in the presence of family.',
      'If police arrive to arrest a woman after sunset, demand the written permission order of the Judicial Magistrate First Class.',
      'Insist on the presence of a female police officer for any physical custody or frisking.',
      'Exercise your right to have a family member or advocate present during questioning.',
      'In emergency distress, dial 1091 (Women Police Helpline) or 112 immediately.'
    ],
    doNotDo: [
      'Do NOT allow male police officers to physically touch or search a female citizen.',
      'Do NOT enter a police station lockup at night without a female officer present.',
      'Do NOT give unrecorded statements in isolation.'
    ],
    sayThis: '“Under Section 160(1) and Section 46(4) CrPC, women cannot be summoned to the station for witness inquiry, and cannot be arrested after sunset without a Magistrate’s prior written order.”',
    helpline: '1091 (Women Helpline) / 112 / 7827170170 (NCW 24/7)',
    whereToComplain: {
      authority: 'National Commission for Women (NCW) & Judicial Magistrate',
      actSection: 'Section 46(4) CrPC / Section 43(5) BNSS & National Commission for Women Act 1990',
      steps: [
        'Step 1: Dial 1091 Women Police Helpline or call NCW 24/7 Helpline 7827170170.',
        'Step 2: File an online complaint on the NCW portal at ncw.nic.in / ncwapps.nic.in.',
        'Step 3: File an urgent grievance before the State Commission for Women.',
        'Step 4: Bring any violation of Section 46(4) directly to the notice of the Judicial Magistrate.'
      ],
      helplineOrPortal: '1091 / ncw.nic.in',
      portalUrl: 'http://ncw.nic.in'
    },
    fastScan30Sec: {
      situationText: 'Woman called to police station, questioned, or arrested at night.',
      topRightText: 'Questioning at home only (Sec 160) • No arrest between sunset & sunrise (Sec 46(4)) • Female officer mandatory.',
      mustDoText: 'Refuse station visit if witness; demand questioning at home. If after sunset, demand Magistrate order. Dial 1091 / 112.',
      complainToText: 'National Commission for Women (ncw.nic.in / 7827170170) or 1091.'
    },
    officialLinks: [
      {
        title: 'National Commission for Women (NCW)',
        url: 'http://ncw.nic.in',
        department: 'NCW India',
        type: 'portal',
        description: 'Statutory body dedicated to protecting women’s legal and constitutional rights.'
      }
    ],
    translations: {
      hi: {
        title: 'महिलाओं की पूछताछ, समन एवं गिरफ्तारी के विशेष अधिकार',
        situation: 'महिला को पूछताछ के लिए थाने बुलाया जाए या सूर्यास्त के बाद गिरफ्तारी की कोशिश हो।',
        legalShield: 'धारा 160(1) व धारा 46(4) CrPC (धारा 179 व 43 BNSS), शीला बर्से सुप्रीम कोर्ट फैसला।',
        immediateActions: [
          'गवाह के तौर पर महिला को थाने नहीं बुलाया जा सकता; बयान घर पर ही दर्ज होगा (धारा 160(1))।',
          'सूर्यास्त के बाद (शाम 6 बजे) और सूर्योदय से पहले (सुबह 6 बजे) महिला की गिरफ्तारी वर्जित है (धारा 46(4))।',
          'महिला की गिरफ्तारी व तलाशी केवल महिला पुलिसकर्मी ही कर सकती है।',
          'आपात स्थिति में महिला हेल्पलाइन 1091 या 112 पर तुरंत कॉल करें।'
        ],
        doNotDo: [
          'पुरुष पुलिसकर्मी को हाथ न लगाने दें।',
          'सूर्यास्त के बाद बिना मजिस्ट्रेट आदेश गिरफ्तारी स्वीकार न करें।'
        ],
        sayThis: '“धारा 160 और धारा 46(4) के तहत महिला को पूछताछ के लिए थाने नहीं बुलाया जा सकता और सूर्यास्त के बाद बिना मजिस्ट्रेट अनुमति गिरफ्तारी अवैध है।”',
        whereToComplain: {
          authority: 'राष्ट्रीय महिला आयोग (NCW 7827170170) एवं इलाका मजिस्ट्रेट',
          steps: [
            '1. महिला हेल्पलाइन 1091 पर तुरंत रिपोर्ट करें।',
            '2. राष्ट्रीय महिला आयोग (ncw.nic.in) पर ऑनलाइन शिकायत दर्ज करें।'
          ],
          helplineOrPortal: '1091 / ncw.nic.in'
        }
      }
    }
  },
  {
    id: 'phone-digital-privacy',
    title: 'Police Demanding Phone / WhatsApp Unlock at Checkpoints',
    situation: 'Police officers stop you during a routine naka and forcefully demand you unlock your phone, reveal passwords, or open WhatsApp chats.',
    category: 'phone_privacy',
    severity: 'warning',
    legalShield: 'Article 21 (Fundamental Right to Privacy), Article 20(3) (Protection against self-incrimination), Section 91 & 100 CrPC.',
    landmarkCase: 'Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) 10 SCC 1 - Privacy is a fundamental constitutional right; smartphones contain intimate personal data and cannot be searched randomly without judicial warrant.',
    summaryRights: [
      'Right to Digital Privacy: Police cannot casually browse through your private phone, gallery, or chats without a specific judicial warrant or formal seizure under investigation.',
      'No Random Naka Phone Checks: Routine roadside checking does NOT give police powers to inspect private messages.',
      'Protection against Self-Incrimination: Article 20(3) protects you from being compelled to unlock encrypted devices to incriminate yourself without legal process.',
      'Mandatory Seizure Process: If a phone is seized as evidence, police must formally issue a signed Seizure Memo with Hash Value / IMEI.'
    ],
    immediateActions: [
      'Politely state that your phone contains confidential personal and professional data protected under Article 21.',
      'Ask the officer: “Officer, please show me the judicial search warrant or official investigation order under which my private device is being inspected.”',
      'If showing vehicle documents, open only the DigiLocker or mParivahan screen yourself and hold the phone in your hand without handing over the unlocked device.',
      'If the phone is forcefully taken, demand an immediate Seizure Memo stating the exact IMEI, device model, and condition.'
    ],
    doNotDo: [
      'Do NOT hand over your phone in an unlocked state with the home screen accessible.',
      'Do NOT allow officers to scroll through personal chats or photo galleries without a formal warrant.',
      'Do NOT delete or destroy files if formally seized during an active investigation.'
    ],
    sayThis: '“Under Article 21 and the Supreme Court’s Puttaswamy judgment, my phone is protected by the right to privacy. Please show a valid judicial search warrant before requesting access.”',
    helpline: '112 / 1930 (National Cyber Crime)',
    whereToComplain: {
      authority: 'District SP/DCP & State Human Rights Commission',
      actSection: 'Information Technology Act 2000 & Constitution of India Article 21',
      steps: [
        'Step 1: Note the officer’s name, rank, badge, and time of the illegal phone search.',
        'Step 2: File a formal grievance before the Superintendent of Police (SP) / DCP for violation of privacy guidelines.',
        'Step 3: If sensitive personal data was leaked, extorted, or misused, file a complaint on cybercrime.gov.in and before the State Human Rights Commission.'
      ],
      helplineOrPortal: '1930 / cybercrime.gov.in',
      portalUrl: 'https://cybercrime.gov.in'
    },
    fastScan30Sec: {
      situationText: 'Police asking you to unlock phone or read WhatsApp messages on the road.',
      topRightText: 'Phone is private (Puttaswamy Art 21) • Warrant required • Hold phone yourself for DigiLocker.',
      mustDoText: 'Politely refuse random phone unlocking. Show DigiLocker yourself. Demand judicial warrant for device search.',
      complainToText: 'DCP Office or State Human Rights Commission.'
    },
    officialLinks: [
      {
        title: 'Supreme Court Puttaswamy Privacy Judgment (2017)',
        url: 'https://main.sci.gov.in',
        department: 'Supreme Court of India',
        type: 'judgement',
        description: 'Landmark 9-Judge bench judgment declaring privacy as a fundamental right.'
      }
    ],
    translations: {
      hi: {
        title: 'नाके पर पुलिस द्वारा फोन व व्हाट्सएप अनलॉक कराने की मांग',
        situation: 'चेकपोस्ट या नाके पर पुलिस आपका फोन अनलॉक कराने, पासवर्ड मांगने या व्हाट्सएप चैट पढ़ने का दबाव बनाए।',
        legalShield: 'संविधान का अनुच्छेद 21 (निजता का मौलिक अधिकार), पुट्टास्वामी सुप्रीम कोर्ट फैसला, अनुच्छेद 20(3)।',
        immediateActions: [
          'विनम्रता से बताएं कि फोन में निजी डेटा है जो अनुच्छेद 21 के तहत सुरक्षित है।',
          'सर्च वारंट या आधिकारिक जांच आदेश की मांग करें।',
          'डिजिलॉकर में दस्तावेज दिखाने के लिए फोन हाथ में रखकर केवल दस्तावेज की स्क्रीन दिखाएं।'
        ],
        doNotDo: [
          'फोन अनलॉक करके पुलिस के हाथ में न दें।',
          'बिना वारंट निजी चैट या गैलरी न देखने दें।'
        ],
        sayThis: '“सुप्रीम कोर्ट के पुट्टास्वामी फैसले और अनुच्छेद 21 के तहत फोन की निजता मौलिक अधिकार है। बिना सर्च वारंट फोन अनलॉक करने के लिए बाध्य नहीं किया जा सकता।”',
        whereToComplain: {
          authority: 'जिला पुलिस अधीक्षक (SP/DCP) एवं राज्य मानवाधिकार आयोग',
          steps: [
            'डीसीपी कार्यालय में निजता हनन की शिकायत दर्ज करें।'
          ],
          helplineOrPortal: '112 / 1930'
        }
      }
    }
  }
];

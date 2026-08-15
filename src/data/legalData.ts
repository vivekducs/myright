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
        exactDialogue: '“Lalita Kumari ruling ke mutabik Zero FIR register karke free copy dena mandatory hai.”'
      }
    }
  },
  {
    id: 'phone-privacy-naka',
    title: 'Phone & WhatsApp Privacy at Police Checkpoints',
    category: 'phone_privacy',
    lawRef: 'Article 21 (Right to Privacy), Article 20(3) & K.S. Puttaswamy v. Union of India (2017)',
    scJudgment: 'Supreme Court 9-Judge Constitution Bench',
    summary: 'Police cannot arbitrarily force you to unlock your phone, inspect WhatsApp chats, or browse photos without a formal warrant.',
    keyPoints: [
      'Digital Privacy: Your smartphone contains personal data protected under Article 21.',
      'No Random Searches: Section 91 CrPC requires formal summons; random searching is unlawful.',
      'Right against Self-Incrimination: Article 20(3) prevents forced disclosure of passwords.',
      'Videography in Public: Citizens have the constitutional right to record police officers on duty in public spaces (Article 19(1)(a)).'
    ],
    whatPoliceMustDo: [
      'Produce a specific magistrate search warrant or Section 91 notice in an active registered FIR.',
      'Provide a formal seizure memo with IMEI number if device is taken into evidence.'
    ],
    whatPoliceCannotDo: [
      'Force citizens to unlock devices at routine nakas or traffic stops.',
      'Delete videos or photos recorded by citizens in public areas.'
    ],
    exactDialogue: '“Officer, under the 9-Judge Puttaswamy ruling, my mobile phone is protected by the constitutional Right to Privacy. Without a formal search warrant, I am not obliged to unlock it.”',
    priority: 'high',
    iconName: 'Smartphone',
    translations: {
      hi: {
        title: 'नाके पर फोन व व्हाट्सएप चैट की प्राइवेसी',
        summary: 'पुलिस बिना सर्च वारंट या केस के आपका फोन अनलॉक करने या व्हाट्सएप चैट पढ़ने के लिए बाध्य नहीं कर सकती।',
        exactDialogue: '“पुट्टास्वामी फैसले और आर्टिकल 21 के तहत मेरा फोन निजी है। बिना वारंट के मैं इसे अनलॉक करने के लिए बाध्य नहीं हूँ।”'
      },
      te: {
        title: 'పోలీస్ చెక్‌పోస్టుల వద్ద ఫోన్ & వాట్సాప్ గోప్యత',
        summary: 'వారెంట్ లేకుండా ఫోన్ అన్‌లాక్ చేయమని లేదా చాట్స్ చూపించమని పోలీసులు బలవంతం చేయలేరు.',
        exactDialogue: '“ఆర్టికల్ 21 మరియు పుట్టస్వామి తీర్పు ప్రకారం నా ఫోన్ ప్రైవేట్. వారెంట్ లేకుండా అన్‌లాక్ చేయను.”'
      },
      ta: {
        title: 'போலீஸ் சோதனையில் போன் & வாட்ஸ்அப் தனியுரிமை',
        summary: 'வாரண்ட் இல்லாமல் உங்கள் போனை திறக்கச் சொல்ல காவல்துறைக்கு அதிகாரமில்லை.',
        exactDialogue: '“பிரிவு 21-ன் படி எனது போன் தனிப்பட்டது. வாரண்ட் இல்லாமல் திறக்க முடியாது.”'
      },
      bn: {
        title: 'পুলিশ চেকপোস্টে ফোন ও হোয়াটসঅ্যাপের গোপনীয়তা',
        summary: 'পরোয়ানা ছাড়া পুলিশ ফোন আনলক করতে বা চ্যাট দেখতে বাধ্য করতে পারে না।',
        exactDialogue: '“পুট্টাস্বামী রায় অনুসারে আমার ফোন ব্যক্তিগত। ওয়ারেন্ট ছাড়া আনলক করতে বাধ্য নই।”'
      },
      mr: {
        title: 'पोलिस नाकाबंदीत फोन व व्हॉट्सॲप गोपनीयता',
        summary: 'वॉरंटशिवाय पोलिस तुमचा फोन अनलॉक करण्यास किंवा चॅट तपासण्यास सांगू शकत नाहीत.',
        exactDialogue: '“पुट्टास्वामी निकाल व कलम २१ नुसार माझा फोन खाजगी आहे.”'
      },
      gu: {
        title: 'ચેકપોસ્ટ પર ફોન અને વોટ્સએપ પ્રાઈવસી',
        summary: 'વોરંટ વિના પોલીસ તમારો ફોન અનલોક કરવા દબાણ કરી શકતી નથી.',
        exactDialogue: '“પુટ્ટાસ્વામી ચુકાદા મુજબ વોરંટ વિના ફોન અનલોક કરવા હું બંધાયેલ નથી.”'
      },
      kn: {
        title: 'ಪೊಲೀಸ್ ಚೆಕ್‌ಪೋಸ್ಟ್‌ನಲ್ಲಿ ಫೋನ್ & ವಾಟ್ಸಾಪ್ ಗೌಪ್ಯತೆ',
        summary: 'ವಾರಂಟ್ ಇಲ್ಲದೆ ಫೋನ್ ಅನ್‌ಲಾಕ್ ಮಾಡಲು ಪೊಲೀಸರು ಒತ್ತಾಯಿಸುವಂತಿಲ್ಲ.',
        exactDialogue: '“ವಿಧಿ 21 ರ ಪ್ರಕಾರ ನನ್ನ ಫೋನ್ ಖಾಸಗಿಯಾಗಿದೆ. ವಾರಂಟ್ ಇಲ್ಲದೆ ಅನ್‌ಲಾಕ್ ಮಾಡುವುದಿಲ್ಲ.”'
      },
      ml: {
        title: 'പോലീസ് പരിശോധനയിൽ ഫോൺ & വാട്ട്‌സ്ആപ്പ് സ്വകാര്യത',
        summary: 'വാറന്റില്ലാതെ ഫോൺ അൺലോക്ക് ചെയ്യാൻ പോലീസിന് നിർബന്ധിക്കാൻ കഴിയില്ല.',
        exactDialogue: '“പുട്ടസ്വാമി വിധിപ്രകാരം വാറന്റില്ലാതെ ഫോൺ അൺലോക്ക് ചെയ്യാൻ ഞാൻ ബാധ്യസ്ഥനല്ല.”'
      },
      pa: {
        title: 'ਪੁਲਿਸ ਨਾਕੇ \'ਤੇ ਫੋਨ ਤੇ ਵਟਸਐਪ ਪ੍ਰਾਈਵੇਸੀ',
        summary: 'ਬਿਨਾਂ ਵਾਰੰਟ ਦੇ ਪੁਲਿਸ ਫੋਨ ਅਨਲਾਕ ਕਰਨ ਲਈ ਮਜ਼ਬੂਰ ਨਹੀਂ ਕਰ ਸਕਦੀ।',
        exactDialogue: '“ਧਾਰਾ 21 ਅਧੀਨ ਮੇਰਾ ਫੋਨ ਨਿੱਜੀ ਹੈ। ਬਿਨਾਂ ਵਾਰੰਟ ਅਨਲਾਕ ਨਹੀਂ ਕਰਾਂਗਾ।”'
      },
      hinglish: {
        title: 'Phone & WhatsApp Privacy at Checkpoints',
        summary: 'Valid search warrant ke bina police phone unlock karne ke liye compel nahi kar sakti.',
        exactDialogue: '“Article 21 aur Puttaswamy judgment ke under phone private hai. Search warrant dikhayein.”'
      }
    }
  },
  {
    id: 'home-search-warrant',
    title: 'Home Search & Seizure Rules',
    category: 'search',
    lawRef: 'Section 100 & Section 165 CrPC (Sec 103 & 185 BNSS)',
    scJudgment: 'State of Punjab v. Baldev Singh',
    summary: 'Police cannot enter and search your home without a Search Warrant or recorded emergency grounds with two independent local witnesses.',
    keyPoints: [
      'Search Warrant or Section 165 Recording: Police must show a judicial search warrant.',
      'Two Independent Panch Witnesses (Panchanama): Search must happen in the presence of two respectable inhabitants of the locality.',
      'Personal Search of Police Officers: Occupants have the legal right to search the police officers before they enter to ensure no evidence is planted.',
      'Women in the House: Women occupants who do not appear in public must be given liberty and time to withdraw.'
    ],
    whatPoliceMustDo: [
      'Show search warrant or recorded Section 165 grounds.',
      'Allow occupants to witness the search throughout.',
      'Provide a signed inventory of every single seized article on the spot.'
    ],
    whatPoliceCannotDo: [
      'Conduct a secret search without allowing homeowner to observe.',
      'Seize items without listing on Panchanama receipt.'
    ],
    exactDialogue: '“Please show me the search warrant or recorded Section 165 memo. We also request two independent local witnesses be called, and officers offer themselves for search before entering.”',
    priority: 'high',
    iconName: 'Home',
    translations: {
      hi: {
        title: 'घर की तलाशी एवं जब्ती के कड़े नियम',
        summary: 'बिना सर्च वारंट और दो स्वतंत्र गवाहों (पंचों) के पुलिस आपके घर की तलाशी नहीं ले सकती।',
        exactDialogue: '“कृपया सर्च वारंट दिखाएं और धारा 100 के तहत दो स्वतंत्र पड़ोसियों को गवाह के रूप में बुलाएं।”'
      },
      te: {
        title: 'ఇంటి సోదాలు & స్వాధీనం నిబంధనలు',
        summary: 'సెర్చ్ వారెంట్ మరియు ఇద్దరు స్వతంత్ర సాక్షులు లేకుండా పోలీసులు ఇంటిని సోదా చేయలేరు.',
        exactDialogue: '“సెర్చ్ వారెంట్ చూపించండి మరియు సెక్షన్ 100 ప్రకారం ఇద్దరు స్థానిక సాక్షులను పిలవండి.”'
      },
      ta: {
        title: 'வீடு சோதனை & பறிமுதல் விதிகள்',
        summary: 'தேடுதல் வாரண்ட் மற்றும் இரண்டு சாட்சிகள் இல்லாமல் வீட்டில் சோதனை செய்ய முடியாது.',
        exactDialogue: '“தேடுதல் வாரண்ட்டைக் காட்டுங்கள் மற்றும் இரண்டு சாட்சிகள் முன்னிலையில் சோதனை நடத்துங்கள்.”'
      },
      bn: {
        title: 'বাড়িতে তল্লাশি ও মালামাল বাজেয়াপ্ত করার নিয়ম',
        summary: 'সার্চ ওয়ারেন্ট এবং দুজন নিরপেক্ষ সাক্ষী ছাড়া পুলিশ বাড়িতে তল্লাশি চালাতে পারে না।',
        exactDialogue: '“অনুগ্রহ করে সার্চ ওয়ারেন্ট দেখান এবং দুজন নিরপেক্ষ সাক্ষীকে ডাকুন।”'
      },
      mr: {
        title: 'घर झडती व जप्तीचे कायदेशीर नियम',
        summary: 'सर्च वॉरंट आणि दोन पंच साक्षीदारांशिवाय पोलिस घराची झडती घेऊ शकत नाहीत.',
        exactDialogue: '“सर्च वॉरंट दाखवा आणि दोन स्थानिक साक्षीदारांच्या उपस्थितीत झडती घ्या.”'
      },
      gu: {
        title: 'ઘરની તપાસ અને જપ્તીના નિયમો',
        summary: 'સર્ચ વોરંટ અને બે સ્વતંત્ર સાક્ષીઓ વિના પોલીસ ઘરમાં તપાસ કરી શકતી નથી.',
        exactDialogue: '“કૃપા કરીને સર્ચ વોરંટ બતાવો અને બે સાક્ષીઓની હાજરીમાં તપાસ કરો.”'
      },
      kn: {
        title: 'ಮನೆ ಶೋಧನೆ ಮತ್ತು ವಶಪಡಿಸಿಕೊಳ್ಳುವ ನಿಯಮಗಳು',
        summary: 'ಸರ್ಚ್ ವಾರಂಟ್ ಮತ್ತು ಇಬ್ಬರು ಸಾಕ್ಷಿಗಳಿಲ್ಲದೆ ಪೊಲೀಸರು ಮನೆ ಶೋಧಿಸುವಂತಿಲ್ಲ.',
        exactDialogue: '“ದಯವಿಟ್ಟು ಸರ್ಚ್ ವಾರಂಟ್ ತೋರಿಸಿ ಮತ್ತು ಇಬ್ಬರು ಸಾಕ್ಷಿಗಳನ್ನು ಕರೆಯಿರಿ.”'
      },
      ml: {
        title: 'വീട് പരിശോധനയും പിടിച്ചെടുക്കലും സംബന്ധിച്ച നിയമങ്ങൾ',
        summary: 'സെർച്ച് വാറന്റും രണ്ട് സാക്ഷികളും ഇല്ലാതെ പോലീസിന് വീട് പരിശോധിക്കാൻ കഴിയില്ല.',
        exactDialogue: '“സെർച്ച് വാറന്റ് കാണിക്കുക, രണ്ട് സാക്ഷികളുടെ സാന്നിധ്യത്തിൽ പരിശോധന നടത്തുക.”'
      },
      pa: {
        title: 'ਘਰ ਦੀ ਤਲਾਸ਼ੀ ਅਤੇ ਜ਼ਬਤੀ ਦੇ ਨਿਯਮ',
        summary: 'ਸਰਚ ਵਾਰੰਟ ਅਤੇ ਦੋ ਗਵਾਹਾਂ ਤੋਂ ਬਿਨਾਂ ਪੁਲਿਸ ਘਰ ਦੀ ਤਲਾਸ਼ੀ ਨਹੀਂ ਲੈ ਸਕਦੀ।',
        exactDialogue: '“ਕਿਰਪਾ ਕਰਕੇ ਸਰਚ ਵਾਰੰਟ ਦਿਖਾਓ ਅਤੇ ਦੋ ਆਜ਼ਾਦ ਗਵਾਹ ਬੁਲਾਓ।”'
      },
      hinglish: {
        title: 'Home Search & Seizure Rules',
        summary: 'Search warrant aur do independent Panch witnesses ke bina house search allowed nahi hai.',
        exactDialogue: '“Section 100 CrPC ke under search warrant aur do local witnesses ki presence required hai.”'
      }
    }
  },
  {
    id: 'right-to-lawyer-silence',
    title: 'Right to Legal Aid & Right to Remain Silent',
    category: 'fundamental_rights',
    lawRef: 'Article 20(3), Article 22(1), Article 39A & Sec 41D CrPC (Sec 38 BNSS)',
    scJudgment: 'Nandini Satpathy v. P.L. Dani (1978)',
    summary: 'You have the constitutional right to consult an advocate of your choice and cannot be compelled to give self-incriminating statements under coercion.',
    keyPoints: [
      'Right to Counsel: Under Section 41D CrPC, an arrested person is entitled to meet and consult an advocate of their choice throughout interrogation.',
      'Right to Free Legal Aid: Article 39A and NALSA Act guarantee free legal aid to anyone who cannot afford a lawyer.',
      'Right Against Self-Incrimination: Article 20(3) protects you from being forced to confess.',
      'Confession before Police: Inadmissible as evidence under Section 25 Evidence Act.'
    ],
    whatPoliceMustDo: [
      'Permit the arrestee to contact their lawyer immediately.',
      'Inform the Legal Services Authority (DLSA/NALSA) if eligible for free aid.'
    ],
    whatPoliceCannotDo: [
      'Force an accused to sign blank stamp papers or confessions.',
      'Deny access to legal counsel after formal arrest.'
    ],
    exactDialogue: '“Under Article 20(3) and Section 41D CrPC, I wish to exercise my right to remain silent until I consult my legal counsel.”',
    priority: 'critical',
    iconName: 'Scale',
    translations: {
      hi: {
        title: 'वकील का अधिकार और चुप रहने का मौलिक अधिकार',
        summary: 'पूछताछ के दौरान अपने वकील से मिलने का अधिकार और खुद के खिलाफ बयान देने से इनकार करने का मौलिक अधिकार।',
        exactDialogue: '“आर्टिकल 20(3) और धारा 41D के तहत मुझे अपने वकील से परामर्श करने का अधिकार है।”'
      },
      te: {
        title: 'న్యాయవాది సహాయం & మౌనంగా ఉండే ప్రాథమిక హక్కు',
        summary: 'విచారణలో న్యాయవాదిని సంప్రదించే హక్కు మరియు ఒత్తిడితో కూడిన వాంగ్మూలాలు ఇవ్వకుండా మౌనంగా ఉండే హక్కు.',
        exactDialogue: '“ఆర్టికల్ 20(3) మరియు సెక్షన్ 41D ప్రకారం నా న్యాయవాదితో మాట్లాడే వరకు నేను మౌనంగా ఉంటాను.”'
      },
      ta: {
        title: 'வழக்கறிஞர் உதவி & மௌனமாக இருக்கும் அடிப்படை உரிமை',
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
      'Pull over safely to the left curb, turn on hazard lights, and keep your hands visible.',
      'Politely ask the officer for their name, rank, and the specific traffic rule violation.',
      'Show your Driving License, RC, Insurance, and PUC via DigiLocker or mParivahan apps.',
      'If fined, demand an official electronic e-Challan receipt.'
    ],
    doNotDo: [
      'Do NOT offer bribes or cash without an official printed receipt.',
      'Do NOT allow an officer below Sub-Inspector (SI) rank to seize your vehicle.',
      'Do NOT leave your vehicle key inside if an officer tries to snatch it unlawfully.'
    ],
    legalShield: 'Motor Vehicles Act Rule 139 (Digital Documents) & Section 130/132 MVA.',
    sayThis: '“Good evening Officer. Please let me know what violation occurred. Here are my verified digital documents on DigiLocker.”',
    helpline: '112 or local Traffic Helpline',
    translations: {
      hi: {
        title: 'ट्रैफिक पुलिस ने गाड़ी रोकी',
        situation: 'आप सड़क पर जा रहे हैं और ट्रैफिक पुलिस ने नाके या चौराहे पर आपको रोक लिया।',
        immediateActions: [
          'गाड़ी बाईं ओर सुरक्षित रोकें और हाथ स्पष्ट रखें।',
          'अधिकारी का नाम, पद और उल्लंघन का कारण विनम्रता से पूछें।',
          'डिजिलॉकर (DigiLocker) ऐप पर लाइसेंस और आरसी दिखाएं।',
          'चालान होने पर अनिवार्य रूप से सरकारी ई-चालान रसीद मांगें।'
        ],
        doNotDo: [
          'बिना रसीद कोई नकद या रिश्वत न दें।',
          'सब-इंस्पेक्टर (SI) से नीचे के पद के पुलिसकर्मी को गाड़ी जब्त न करने दें।',
          'चाबी जबरन छीनने का विरोध विनम्रतापूर्वक कानून बताकर करें।'
        ],
        legalShield: 'केंद्रीय मोटर वाहन नियम 139 (डिजिलॉकर मान्यता) एवं धारा 130/132।',
        sayThis: '“नमस्ते सर, कृपया बताएं क्या उल्लंघन हुआ है? डिजिलॉकर पर मेरे सभी अधिकृत दस्तावेज मौजूद हैं।”'
      },
      te: {
        title: 'ట్రాఫిక్ పోలీసులు వాహనాన్ని ఆపారు',
        situation: 'మీరు ప్రయాణిస్తున్నప్పుడు ట్రాఫిక్ పోలీసులు మీ వాహనాన్ని ఆపినప్పుడు.',
        immediateActions: [
          'వాహనాన్ని ఎడమవైపు సురక్షితంగా ఆపండి, చేతులు స్పష్టంగా కనిపించేలా ఉంచండి.',
          'అధికారి పేరు, హోదా మరియు ఉల్లంఘన కారణాన్ని మర్యాదగా అడగండి.',
          'డిజిలాకర్ యాప్ ద్వారా లైసెన్స్ మరియు ఆర్సీ చూపించండి.',
          'జరిమానా విధిస్తే తప్పనిసరిగా అధికారిక ఈ-చలాన్ రసీదు అడగండి.'
        ],
        doNotDo: [
          'రసీదు లేకుండా నగదు లేదా లంచం ఇవ్వకండి.',
          'సబ్-ఇన్‌స్పెక్టర్ (SI) కంటే తక్కువ స్థాయి అధికారికి వాహనం సీజ్ చేసే అధికారం లేదు.',
          'కీ లాక్కోవడానికి ప్రయత్నిస్తే చట్టబద్ధంగా నిరసన తెలపండి.'
        ],
        legalShield: 'మోటారు వాహనాల చట్టం రూల్ 139 (డిజిటల్ పత్రాలు).',
        sayThis: '“నమస్తే సార్, ఏ నిబంధన ఉల్లంఘించానో చెప్పండి. డిజిలాకర్‌లో నా పత్రాలను చూపిస్తున్నాను.”'
      },
      ta: {
        title: 'போக்குவரத்து காவலர் வாகனத்தை நிறுத்தினார்',
        situation: 'சாலையில் செல்லும் போது போக்குவரத்து காவலர் உங்களை நிறுத்தியுள்ளார்.',
        immediateActions: [
          'வாகனத்தை இடதுபுறம் நிறுத்தி, கைகளை தெளிவாக வைக்கவும்.',
          'காவலரின் பெயர், பதவி மற்றும் விதிமீறல் காரணத்தை மரியாதையுடன் கேட்கவும்.',
          'டிஜிலாக்கர் செயலியில் உள்ள ஆவணங்களைக் காட்டவும்.',
          'அபராதம் விதிக்கப்பட்டால் அதிகாரப்பூர்வ இ-சலான் ரசீது கேட்கவும்.'
        ],
        doNotDo: [
          'ரசீது இல்லாமல் பணம் அல்லது லஞ்சம் கொடுக்காதீர்கள்.',
          'எஸ்.ஐ-க்கு குறைவான அதிகாரி வாகனத்தை பறிமுதல் செய்ய முடியாது.',
          'சாவியைப் பிடுங்க அனுமதிக்காதீர்கள்.'
        ],
        legalShield: 'மோட்டார் வாகன விதிகள் 139 (டிஜிட்டல் ஆவணங்கள்).',
        sayThis: '“வணக்கம் ஐயா, என்ன விதிமீறல் என்று கூறுங்கள். டிஜிலாக்கரில் எனது ஆவணங்கள் உள்ளன.”'
      },
      bn: {
        title: 'ট্রাফিক পুলিশ গাড়ি থামিয়েছে',
        situation: 'গাড়ি চালানোর সময় ট্রাফিক পুলিশ আপনাকে নাকা বা মোড়ে থামিয়েছে।',
        immediateActions: [
          'গাড়িটি নিরাপদে বাঁদিকে পার্ক করুন এবং হাত স্পষ্ট রাখুন।',
          'অফিসারের নাম, পদ ও আইন লঙ্ঘনের কারণ ভদ্রভাবে জানতে চান।',
          'ডিজিলকার অ্যাপে লাইসেন্স ও আরসি দেখান।',
          'জরিমানা হলে অফিসিয়াল ই-চালান রসিদ দাবি করুন।'
        ],
        doNotDo: [
          'রসিদ ছাড়া কোনো নগদ অর্থ বা ঘুষ দেবেন না।',
          'এসআই পদমর্যাদার নিচে কাউকে গাড়ি বাজেয়াপ্ত করতে দেবেন না।'
        ],
        legalShield: 'মোটর ভেহিকেল রুলস ১৩৯ (ডিজিটাল নথির বৈধতা)।',
        sayThis: '“নমস্কার স্যার, কি কারণে থামিয়েছেন জানান। ডিজিলকারে আমার সমস্ত বৈধ নথি রয়েছে।”'
      },
      mr: {
        title: 'ट्रॅफिक पोलिसांनी गाडी अडवली',
        situation: 'रस्त्याने जात असताना ट्रॅफिक पोलिसांनी तुम्हाला थांबवले.',
        immediateActions: [
          'गाडी डाव्या बाजूला सुरक्षित लावा आणि हात स्पष्ट ठेवा.',
          'अधिकाऱ्याचे नाव, हुद्दा व नियमाच्या उल्लंघनाचे कारण विचारा.',
          'डिजीलॉकर ॲपवरून लायसन्स व कागदपत्रे दाखवा.',
          'दंडाची अधिकृत ई-चलन पावती मागा.'
        ],
        doNotDo: [
          'पावतीशिवाय रोख रक्कम किंवा लाच देऊ नका.',
          'एसआय पेक्षा कमी दर्जाच्या पोलिसाला गाडी जप्त करू देऊ नका.'
        ],
        legalShield: 'मोटार वाहन नियम १३९ (डिजिटल कागदपत्रे).',
        sayThis: '“नमस्ते साहेब, काय चूक झाली ते सांगा. डिजीलॉकरवर माझी सर्व कागदपत्रे आहेत.”'
      },
      gu: {
        title: 'ટ્રાફિક પોલીસે વાહન રોક્યું',
        situation: 'ટ્રાફિક પોલીસે તમને નાકા પર રોક્યા છે.',
        immediateActions: [
          'વાહન સુરક્ષિત રીતે સાઇડમાં પાર્ક કરો.',
          'અધિકારીનું નામ અને નિયમ ભંગનું કારણ પૂછો.',
          'ડીજીલોકર એપ પર લાયસન્સ અને આરસી બતાવો.',
          'દંડ થાય તો ઈ-ચલણની પાકી રસીદ માંગો.'
        ],
        doNotDo: [
          'રસીદ વગર રોકડા રૂપિયા ન આપો.',
          'એસઆઈથી નીચેના કર્મચારીને વાહન જપ્ત ન કરવા દો.'
        ],
        legalShield: 'મોટર વ્હીકલ રુલ્સ ૧૩૯ (ડિજિટલ દસ્તાવેજો).',
        sayThis: '“નમસ્તે સાહેબ, કયા નિયમનો ભંગ થયો છે તે જણાવો. ડીજીલોકર પર મારા દસ્તાવેજો છે.”'
      },
      kn: {
        title: 'ಟ್ರಾಫಿಕ್ ಪೊಲೀಸರು ವಾಹನ ತಡೆದರು',
        situation: 'ರಸ್ತೆಯಲ್ಲಿ ಸಂಚರಿಸುವಾಗ ಪೊಲೀಸರು ನಿಮ್ಮನ್ನು ತಡೆದಿದ್ದಾರೆ.',
        immediateActions: [
          'ವಾಹನವನ್ನು ಎಡಬದಿಗೆ ನಿಲ್ಲಿಸಿ ಶಾಂತರಾಗಿರಿ.',
          'ಅಧಿಕಾರಿಯ ಹೆಸರು ಮತ್ತು ನಿಯಮ ಉಲ್ಲಂಘನೆಯ ಕಾರಣ ಕೇಳಿ.',
          'ಡಿಜಿಲಾಕರ್‌ನಲ್ಲಿ ದಾಖಲೆಗಳನ್ನು ತೋರಿಸಿ.',
          'ದಂಡ ವಿಧಿಸಿದರೆ ಇ-ಚಲನ್ ರಶೀದಿ ಕೇಳಿ.'
        ],
        doNotDo: [
          'ರಶೀದಿ ಇಲ್ಲದೆ ಹಣ ನೀಡಬೇಡಿ.',
          'ಎಸ್.ಐ ಗಿಂತ ಕೆಳಗಿನ ಅಧಿಕಾರಿ ವಾಹನ ಜಪ್ತಿ ಮಾಡುವಂತಿಲ್ಲ.'
        ],
        legalShield: 'ಮೋಟಾರು ವಾಹನ ನಿಯಮ 139 (ಡಿಜಿಟಲ್ ದಾಖಲೆಗಳು).',
        sayThis: '“ನಮಸ್ಕಾರ ಸರ್, ಏನು ತಪ್ಪಾಗಿದೆ ತಿಳಿಸಿ. ಡಿಜಿಲಾಕರ್‌ನಲ್ಲಿ ನನ್ನ ದಾಖಲೆಗಳಿವೆ.”'
      },
      ml: {
        title: 'ട്രാഫിക് പോലീസ് വാഹനം തടഞ്ഞു',
        situation: 'റോഡിൽ വെച്ച് ട്രാഫിക് പോലീസ് വാഹനം നിർത്തുമ്പോൾ.',
        immediateActions: [
          'വാഹനം സുരക്ഷിതമായി ഒതുക്കി നിർത്തുക.',
          'പോലീസിന്റെ പേരും നിയമലംഘന കാരണവും ചോദിക്കുക.',
          'ഡിജിലോക്കർ വഴി രേഖകൾ കാണിക്കുക.',
          'പിഴയടക്കാൻ ഔദ്യോഗിക ഇ-ചെല്ലാൻ ആവശ്യപ്പെടുക.'
        ],
        doNotDo: [
          'രസീത് ഇല്ലാതെ പണം നൽകരുത്.',
          'എസ്.ഐ-ക്ക് താഴെയുള്ളവർക്ക് വാഹനം പിടിച്ചെടുക്കാൻ അധികാരമില്ല.'
        ],
        legalShield: 'മോട്ടോർ വാഹന ചട്ടം 139 (ഡിജിറ്റൽ രേഖകൾ).',
        sayThis: '“നമസ്കാരം സാർ, എന്താണ് പ്രശ്നമെന്ന് വ്യക്തമാക്കൂ. ഡിജിലോക്കറിൽ എന്റെ രേഖകളുണ്ട്.”'
      },
      pa: {
        title: 'ਟ੍ਰੈਫਿਕ ਪੁਲਿਸ ਨੇ ਗੱਡੀ ਰੋਕੀ',
        situation: 'ਸੜਕ \'ਤੇ ਜਾਂਦਿਆਂ ਪੁਲਿਸ ਨੇ ਤੁਹਾਨੂੰ ਰੋਕ ਲਿਆ।',
        immediateActions: [
          'ਗੱਡੀ ਸਾਈਡ \'ਤੇ ਲਗਾਓ ਅਤੇ ਸ਼ਾਂਤ ਰਹੋ।',
          'ਅਧਿਕਾਰੀ ਦਾ ਨਾਮ ਤੇ ਨਿਯਮ ਉਲੰਘਣਾ ਦਾ ਕਾਰਨ ਪੁੱਛੋ।',
          'ਡਿਜੀਲਾਕਰ \'ਤੇ ਦਸਤਾਵੇਜ਼ ਦਿਖਾਓ।',
          'ਚਲਾਨ ਹੋਣ \'ਤੇ ਸਰਕਾਰੀ ਈ-ਚਲਾਨ ਰਸੀਦ ਮੰਗੋ।'
        ],
        doNotDo: [
          'ਬਿਨਾਂ ਰਸੀਦ ਰਿਸ਼ਵਤ ਜਾਂ ਨਕਦ ਨਾ ਦਿਓ।'
        ],
        legalShield: 'ਮੋਟਰ ਵਹੀਕਲ ਰੂਲ 139 (ਡਿਜੀਟਲ ਦਸਤਾਵੇਜ਼)।',
        sayThis: '“ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ ਸਰ, ਕਿਹੜਾ ਨਿਯਮ ਟੁੱਟਿਆ ਹੈ? ਡਿਜੀਲਾਕਰ \'ਤੇ ਮੇਰੇ ਕਾਗਜ਼ ਮੌਜੂਦ ਹਨ।”'
      },
      hinglish: {
        title: 'Traffic Police ne Gadi Roki',
        situation: 'Traffic cop ne naka par aapko flag down kiya.',
        immediateActions: [
          'Vehicle curb par safe park karein aur hands visible rakhein.',
          'Officer ka name, rank aur exact violation politely poochein.',
          'DigiLocker app par Driving License & RC present karein.',
          'Fine lagne par official printed e-challan receipt demand karein.'
        ],
        doNotDo: [
          'Bina receipt cash ya bribe na dein.',
          'SI se niche rank wale officer ko vehicle seize na karne dein.'
        ],
        legalShield: 'Rule 139 Central Motor Vehicles Rules (DigiLocker validation).',
        sayThis: '“Good evening Sir. Please batayein kya violation hua hai? DigiLocker par mere verified documents hain.”'
      }
    }
  },
  {
    id: 'police-threatens-arrest',
    title: 'Police Threatening with Arrest or Detention',
    situation: 'An officer says “Come with us to the police station” or threatens to lock you up.',
    category: 'arrest',
    severity: 'critical',
    immediateActions: [
      'Stay calm. Ask firmly: “Am I being detained, arrested, or asked to assist an inquiry?”',
      'For offences under 7 years, police must first issue a Section 41A Notice before arresting (Arnesh Kumar).',
      'If being arrested, demand the formal Arrest Memo with charges, date, time, and witness signature.',
      'Exercise your right to make one phone call to family and your legal counsel.'
    ],
    doNotDo: [
      'Do NOT physically resist, run away, or use abusive language.',
      'Do NOT sign blank papers, unread statements, or undated documents.',
      'Do NOT accept detention beyond 24 hours without Judicial Magistrate remand.'
    ],
    legalShield: 'Article 22(1) & (2) Constitution of India, Section 41B & 41D CrPC, Arnesh Kumar v. State of Bihar.',
    sayThis: '“Officer, if I am being arrested, please state the grounds under Article 22(1), prepare the D.K. Basu Arrest Memo, and allow me to call my family and lawyer.”',
    helpline: '112 / 15100 (Free Legal Aid)',
    translations: {
      hi: {
        title: 'गिरफ्तारी या थाने ले जाने की धमकी',
        situation: 'पुलिस अधिकारी कहे कि गाड़ी में बैठो, तुम्हें अभी थाने ले जा रहे हैं या लॉकअप में डालेंगे।',
        immediateActions: [
          'शांत रहें और पूछें: क्या मुझे गिरफ्तार किया जा रहा है या पूछताछ के लिए बुलाया जा रहा है?',
          '7 साल से कम सजा वाले मामलों में पहले धारा 41A का नोटिस देना अनिवार्य है (अर्नेश कुमार फैसला)।',
          'गिरफ्तारी की स्थिति में मौके पर ही आधिकारिक अरेस्ट मेमो की मांग करें।',
          'अपने परिवार और वकील को कॉल करने के अधिकार का उपयोग करें।'
        ],
        doNotDo: [
          'हाथापाई या भागने की कोशिश न करें।',
          'कोरे कागज या बिना पढ़े किसी बयान पर हस्ताक्षर न करें।',
          '24 घंटे से अधिक बिना मजिस्ट्रेट पेशी के थाने में न रहें।'
        ],
        legalShield: 'संविधान का अनुच्छेद 22, धारा 41B व 41D सीआरपीसी (बीएनएसएस)।',
        sayThis: '“सर, यदि आप गिरफ्तार कर रहे हैं तो अनुच्छेद 22(1) के तहत कारण बताएं, अरेस्ट मेमो तैयार करें और मुझे वकील से बात करने दें।”'
      },
      te: {
        title: 'అరెస్ట్ లేదా నిర్బంధ బెదిరింపు',
        situation: 'పోలీసులు స్టేషన్‌కు రమ్మని లేదా లాకప్‌లో వేస్తామని బెదిరించినప్పుడు.',
        immediateActions: [
          'శాంతంగా ఉండండి. అరెస్ట్ చేస్తున్నారా లేక విచారణకా అని స్పష్టంగా అడగండి.',
          '7 సంవత్సరాల కంటే తక్కువ శిక్ష పడే కేసుల్లో ముందుగా సెక్షన్ 41A నోటీసు ఇవ్వాలి.',
          'అరెస్ట్ మెమో తయారు చేసి కాపీ ఇవ్వాలని డిమాండ్ చేయండి.',
          'కుటుంబానికి మరియు న్యాయవాదికి ఫోన్ చేసే హక్కును ఉపయోగించండి.'
        ],
        doNotDo: [
          'ఖాళీ కాగితాలపై సంతకాలు చేయకండి.',
          '24 గంటలకు మించి మేజిస్ట్రేట్ లేకుండా కస్టడీలో ఉండకండి.'
        ],
        legalShield: 'రాజ్యాంగంలోని ఆర్టికల్ 22, సెక్షన్ 41B మరియు 41D CrPC.',
        sayThis: '“సార్, నన్ను అరెస్ట్ చేస్తే ఆర్టికల్ 22(1) ప్రకారం కారణం చెప్పండి, అరెస్ట్ మెమో తయారు చేయండి.”'
      },
      ta: {
        title: 'கைது அல்லது காவல் அச்சுறுத்தல்',
        situation: 'காவல்துறையினர் காவல் நிலையத்திற்கு வருமாறு மிரட்டும்போது.',
        immediateActions: [
          'கைது செய்வதற்கான காரணத்தை தெளிவாகக் கேட்கவும்.',
          '7 ஆண்டுகளுக்கு குறைவான வழக்குகளில் பிரிவு 41A நோட்டீஸ் அளிக்கப்பட வேண்டும்.',
          'டி.கே. பாசு கைது மெமோ தயார் செய்யக் கோருங்கள்.',
          'குடும்பத்தினருக்கு போன் செய்யும் உரிமையைப் பயன்படுத்துங்கள்.'
        ],
        doNotDo: [
          'வெற்று காகிதங்களில் கையெழுத்திடாதீர்கள்.',
          '24 மணி நேரத்திற்கு மேல் மாஜிஸ்திரேட் உத்தரவின்றி காவலில் இருக்காதீர்கள்.'
        ],
        legalShield: 'அரசியலமைப்பு பிரிவு 22 மற்றும் 41B CrPC.',
        sayThis: '“ஐயா, கைது செய்யப்பட்டால் காரணத்தை கூறி, கைது மெமோ தயார் செய்து வக்கீலுடன் பேச அனுமதியுங்கள்.”'
      },
      bn: {
        title: 'গ্রেপ্তার বা হেফাজতে নেওয়ার হুমকি',
        situation: 'পুলিশ থানায় নিয়ে যাওয়ার বা লকআপে ভরার হুমকি দিলে।',
        immediateActions: [
          'শান্ত থাকুন এবং গ্রেপ্তারের কারণ সুস্পষ্টভাবে জানতে চান।',
          '৭ বছরের কম সাজার ক্ষেত্রে ধারা ৪১এ নোটিশ দেওয়া বাধ্যতামূলক।',
          'ঘটনাস্থলে অ্যারেস্ট মেমো প্রস্তুত করার দাবি জানান।',
          'পরিবার ও আইনজীবীকে ফোন করার অধিকার প্রয়োগ করুন।'
        ],
        doNotDo: [
          'সাদা কাগজে সই করবেন না।'
        ],
        legalShield: 'সংবিধানের ২২ অনুচ্ছেদ ও ৪১বি ধারা সিআরপিসি।',
        sayThis: '“স্যার, গ্রেপ্তার করলে কারণ জানান, অ্যারেস্ট মেমো তৈরি করুন এবং আইনজীবীর সাথে কথা বলতে দিন।”'
      },
      mr: {
        title: 'अटक किंवा कोठडीची धमकी',
        situation: 'पोलिस ठाण्यात चल असे सांगून अटकेची धमकी दिल्यास.',
        immediateActions: [
          'अटकेचे कारण स्पष्टपणे विचारा.',
          '७ वर्षांखालील गुन्ह्यात कलम ४१A ची नोटीस मिळणे आवश्यक आहे.',
          'डी.के. बसू अरेस्ट मेमो तयार करण्याची मागणी करा.',
          'कुटुंबीय व वकिलाशी फोनवर बोला.'
        ],
        doNotDo: [
          'कोऱ्या कागदावर स्वाक्षरी करू नका.'
        ],
        legalShield: 'संविधान कलम २२, कलम ४१B व ४१D CrPC.',
        sayThis: '“साहेब, मला अटक करत असाल तर कारण सांगा, अरेस्ट मेमो द्या आणि वकिलांशी बोलू द्या.”'
      },
      gu: {
        title: 'ધરપકડ અથવા કસ્ટડીની ધમકી',
        situation: 'પોલીસ સ્ટેશન લઈ જવાની કે લોકઅપમાં પૂરવાની ધમકી આપે ત્યારે.',
        immediateActions: [
          'શાંત રહીને ધરપકડનું કારણ પૂછો.',
          '૭ વર્ષથી ઓછી સજા હોય તો કલમ ૪૧A ની નોટિસ જરૂરી છે.',
          'અરેસ્ટ મેમો બનાવવાની માંગણી કરો.',
          'પરિવાર અને વકીલને ફોન કરો.'
        ],
        doNotDo: [
          'ખાલી કાગળ પર સહી ન કરો.'
        ],
        legalShield: 'બંધારણની કલમ ૨૨, કલમ ૪૧B અને ૪૧D CrPC.',
        sayThis: '“સાહેબ, ધરપકડ કરતા હોવ તો કારણ જણાવો અને અરેસ્ટ મેમો બનાવી વકીલ સાથે વાત કરવા દો.”'
      },
      kn: {
        title: 'ಬಂಧನ ಅಥವಾ ಕಸ್ಟಡಿಯ ಬೆದರಿಕೆ',
        situation: 'ಪೊಲೀಸರು ಠಾಣೆಗೆ ಕರೆದೊಯ್ಯುವ ಬೆದರಿಕೆ ಹಾಕಿದಾಗ.',
        immediateActions: [
          'ಬಂಧನದ ಕಾರಣವನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಕೇಳಿ.',
          '7 ವರ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ ಶಿಕ್ಷೆಯ ಪ್ರಕರಣಗಳಲ್ಲಿ ಸೆಕ್ಷನ್ 41A ನೋಟಿಸ್ ನೀಡಬೇಕು.',
          'ಅರೆಸ್ಟ್ ಮೆಮೊ ಸಿದ್ಧಪಡಿಸಲು ಒತ್ತಾಯಿಸಿ.',
          'ಕುಟುಂಬ ಮತ್ತು ವಕೀಲರಿಗೆ ಕರೆ ಮಾಡಿ.'
        ],
        doNotDo: [
          'ಖಾಲಿ ಕಾಗದಗಳಿಗೆ ಸಹಿ ಮಾಡಬೇಡಿ.'
        ],
        legalShield: 'ಸಂವಿಧಾನದ ವಿಧಿ 22, ಸೆಕ್ಷನ್ 41B CrPC.',
        sayThis: '“ಸರ್, ಬಂಧಿಸುವುದಾದರೆ ಕಾರಣ ತಿಳಿಸಿ, ಅರೆಸ್ಟ್ ಮೆಮೊ ನೀಡಿ ಮತ್ತು ವಕೀಲರೊಂದಿಗೆ ಮಾತನಾಡಲು ಬಿಡಿ.”'
      },
      ml: {
        title: 'അറസ്റ്റ് അല്ലെങ്കിൽ കസ്റ്റഡി ഭീഷണി',
        situation: 'പോലീസ് സ്റ്റേഷനിലേക്ക് കൊണ്ടുപോകുമെന്ന് ഭീഷണിപ്പെടുത്തുമ്പോൾ.',
        immediateActions: [
          'അറസ്റ്റിന്റെ കാരണം വ്യക്തമായി ചോദിക്കുക.',
          '7 വർഷത്തിൽ താഴെ ശിക്ഷയുള്ള കേസിൽ സെക്ഷൻ 41A നോട്ടീസ് നൽകണം.',
          'അറസ്റ്റ് മെമ്മോ തയ്യാറാക്കാൻ ആവശ്യപ്പെടുക.',
          'കുടുംബത്തെയും വക്കീലിനെയും ഫോൺ ചെയ്യുക.'
        ],
        doNotDo: [
          'വെള്ളക്കടലാസിൽ ഒപ്പിടരുത്.'
        ],
        legalShield: 'ഭരണഘടന ആർട്ടിക്കിൾ 22, സെക്ഷൻ 41B CrPC.',
        sayThis: '“സാർ, അറസ്റ്റ് ചെയ്യുകയാണെങ്കിൽ കാരണം വ്യക്തമാക്കുകയും മെമ്മോ തയ്യാറാക്കുകയും ചെയ്യുക.”'
      },
      pa: {
        title: 'ਗ੍ਰਿਫ਼ਤਾਰੀ ਜਾਂ ਹਿਰਾਸਤ ਦੀ ਧਮਕੀ',
        situation: 'ਪੁਲਿਸ ਥਾਣੇ ਲੈ ਕੇ ਜਾਣ ਦੀ ਧਮਕੀ ਦੇਵੇ।',
        immediateActions: [
          'ਗ੍ਰਿਫ਼ਤਾਰੀ ਦਾ ਕਾਰਨ ਪੁੱਛੋ।',
          '7 ਸਾਲ ਤੋਂ ਘੱਟ ਸਜ਼ਾ ਵਾਲੇ ਮਾਮਲਿਆਂ \'ਚ ਧਾਰਾ 41A ਨੋਟਿਸ ਲਾਜ਼ਮੀ ਹੈ।',
          'ਅਰੈਸਟ ਮੈਮੋ ਬਣਾਉਣ ਦੀ ਮੰਗ ਕਰੋ।'
        ],
        doNotDo: [
          'ਖ਼ਾਲੀ ਕਾਗ਼ਜ਼ਾਂ \'ਤੇ ਦਸਤਖ਼ਤ ਨਾ ਕਰੋ।'
        ],
        legalShield: 'ਸੰਵਿਧਾਨ ਦੀ ਧਾਰਾ 22, ਧਾਰਾ 41B CrPC.',
        sayThis: '“ਸਰ, ਜੇਕਰ ਗ੍ਰਿਫ਼ਤਾਰ ਕਰ ਰਹੇ ਹੋ ਤਾਂ ਕਾਰਨ ਦੱਸੋ ਅਤੇ ਅਰੈਸਟ ਮੈਮੋ ਬਣਾਓ।”'
      },
      hinglish: {
        title: 'Police Arrest Threat',
        situation: 'Police officer station le jane ya custody threat de raha hai.',
        immediateActions: [
          'Calmly ask: “Am I under arrest or inquiry?”',
          '7 years se kam punishment wale cases mein Section 41A notice mandatory hai.',
          'Spot par hi formal D.K. Basu Arrest Memo demand karein.',
          'Family aur lawyer ko call karne ka right exercise karein.'
        ],
        doNotDo: [
          'Blank papers par sign na karein.',
          '24 hours se zyada without Magistrate remand na rahein.'
        ],
        legalShield: 'Article 22 Constitution, Section 41B & 41D CrPC / BNSS.',
        sayThis: '“Officer, grounds of arrest batayein, Arrest Memo banayein aur lawyer se baat karne dein.”'
      }
    }
  }
];

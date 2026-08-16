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
    sourceActName: 'Constitution of India & Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023 / CrPC 1973',
    sourceSectionOrArticle: 'Article 21 & Section 35(3) BNSS / Section 41A CrPC',
    sources: [
      'Constitution of India (Article 21 - Protection of Life and Personal Liberty)',
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 - Gazette Notification No. 46 of 2023',
      'Code of Criminal Procedure, 1973 (Act No. 2 of 1974) - Section 41A',
      'Model Police Manual - Bureau of Police Research & Development (BPR&D), Ministry of Home Affairs'
    ],
    legalCitations: [
      'Article 21, Constitution of India - Fundamental guarantee against unlawful executive restraint',
      'Article 20(3), Constitution of India - Privilege against self-incrimination during inquiry',
      'Section 35(3) BNSS 2023 / Section 41A CrPC 1973 - Notice of appearance mandatory for offences with imprisonment ≤ 7 years',
      'Nandini Satpathy v. P.L. Dani, AIR 1978 SC 1025 / (1978) 2 SCC 424 - Right to remain silent during police questioning'
    ],
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
        gazetteRef: 'Constitution of India (As modified up to 2024)',
        citationRef: 'Art. 21, Part III',
        description: 'Protection of life and personal liberty of all citizens.'
      },
      {
        title: 'India Code: Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023',
        url: 'https://www.indiacode.nic.in/handle/123456789/20063',
        department: 'Ministry of Law and Justice',
        type: 'gazette',
        gazetteRef: 'Gazette of India, Extra., Pt. II, Sec. 1, No. 46 (25 Dec 2023)',
        citationRef: 'Act No. 46 of 2023',
        description: 'Official Gazette text of BNSS Section 35 (Notice of appearance).'
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
    sourceActName: 'Constitution of India & BNSS 2023 / CrPC 1973',
    sourceSectionOrArticle: 'Article 22(1)-(2), Sections 36, 38, 47, 53, 58 BNSS 2023 / Sections 41B, 41D, 50, 54, 57 CrPC',
    sources: [
      'Constitution of India (Article 22 - Protection against Arrest and Detention)',
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 - Sections 36, 38, 47, 53, 58',
      'Code of Criminal Procedure, 1973 - Sections 41B, 41D, 50, 54, 57',
      'Legal Services Authorities Act, 1987 (Act No. 39 of 1987) - Section 12'
    ],
    legalCitations: [
      'Article 22(1), Constitution of India - Mandatory informing of grounds of arrest & right to consult counsel',
      'Article 22(2) & Section 58 BNSS / Section 57 CrPC - Mandatory judicial production before Magistrate within 24 hours',
      'Section 36 BNSS / Section 41B CrPC - Statutory requirement for signed Arrest Memo witnessed by family/respectable person',
      'Section 38 BNSS / Section 41D CrPC - Right of arrested person to meet advocate of choice during interrogation',
      'D.K. Basu v. State of West Bengal, (1997) 1 SCC 416 / AIR 1997 SC 610 - 11 mandatory constitutional arrest guidelines',
      'Arnesh Kumar v. State of Bihar, (2014) 8 SCC 273 - Strict bar against routine mechanical arrests for offences under 7 years'
    ],
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
        citationRef: '(1997) 1 SCC 416 / AIR 1997 SC 610',
        description: 'The 11 mandatory guidelines for every arrest in India.'
      },
      {
        title: 'Supreme Court Arnesh Kumar Judgment (2014)',
        url: 'https://main.sci.gov.in',
        department: 'Supreme Court of India',
        type: 'judgement',
        citationRef: '(2014) 8 SCC 273',
        description: 'Checklist and restrictions on mechanical arrests by police.'
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
    sourceActName: 'Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023 & Bharatiya Nyaya Sanhita (BNS) 2023',
    sourceSectionOrArticle: 'Section 173(1)-(4) & 175(3) BNSS 2023 / Section 154 & 156(3) CrPC, Section 199 BNS / Section 166A IPC',
    sources: [
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 - Section 173 (Information in cognizable cases & Zero FIR)',
      'Bharatiya Nyaya Sanhita (BNS), 2023 - Section 199 (Public servant disobeying direction of law)',
      'Code of Criminal Procedure, 1973 - Sections 154, 154(3), 156(3)',
      'Ministry of Home Affairs Circular No. 15011/35/2013-SC/ST-W on Mandatory Registration of Zero FIR'
    ],
    legalCitations: [
      'Section 173(1) BNSS 2023 / Section 154(1) CrPC 1973 - Mandatory registration of information in cognizable offences (Zero FIR concept codified in Sec 173(1))',
      'Section 173(4) BNSS 2023 / Section 154(3) CrPC 1973 - Statutory right to submit complaint in writing via Speed Post to District Superintendent of Police',
      'Section 175(3) BNSS 2023 / Section 156(3) CrPC 1973 - Power of Judicial Magistrate First Class to order police investigation and FIR registration',
      'Section 199 BNS 2023 / Section 166A Indian Penal Code - Up to 2 years rigorous imprisonment for police officer refusing to register FIR in crimes against women/specified offenses',
      'Lalita Kumari v. Govt. of U.P., (2014) 2 SCC 1 / AIR 2014 SC 187 (5-Judge Constitution Bench) - Mandatory FIR registration for all cognizable complaints',
      'Priyanka Srivastava v. State of U.P., (2015) 6 SCC 287 - Mandatory affidavit supporting application before Magistrate under Section 156(3)'
    ],
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
        citationRef: '(2014) 2 SCC 1 / AIR 2014 SC 187',
        description: 'Constitution Bench ruling on mandatory FIR registration.'
      },
      {
        title: 'India Code: Bharatiya Nagarik Suraksha Sanhita (BNSS) Section 173',
        url: 'https://www.indiacode.nic.in/handle/123456789/20063',
        department: 'Ministry of Law and Justice',
        type: 'gazette',
        gazetteRef: 'Gazette of India Extraordinary No. 46 of 2023',
        citationRef: 'BNSS 2023 Sec 173',
        description: 'Codified Zero FIR and digital information registration provisions.'
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
    sourceActName: 'Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023 / CrPC 1973',
    sourceSectionOrArticle: 'Sections 103, 185, 49(2) BNSS 2023 / Sections 100, 165, 51(2) CrPC',
    sources: [
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 - Sections 103, 105 & 185',
      'Code of Criminal Procedure, 1973 - Sections 100, 165 & 51(2)',
      'Constitution of India (Articles 20(3) & 21 - Privacy and protection against forced self-incrimination)'
    ],
    legalCitations: [
      'Section 103(4)-(7) BNSS 2023 / Section 100(4)-(7) CrPC - Mandatory search in presence of two or more independent and respectable local inhabitants (Panch witnesses)',
      'Section 185 BNSS 2023 / Section 165 CrPC - Mandatory recording of reasonable grounds in writing before conducting emergency search without warrant',
      'Section 49(2) BNSS 2023 / Section 51(2) CrPC - Search of female persons strictly by female officer with strict regard to decency',
      'Section 105 BNSS 2023 - Mandatory audio-video electronic recording (videography) of search and seizure operations',
      'State of Punjab v. Baldev Singh, (1999) 6 SCC 172 - Strict compliance with search safeguards is mandatory to prevent unlawful seizures',
      'K.S. Puttaswamy v. Union of India, (2017) 10 SCC 1 - Protection of personal spaces, privacy, and digital media'
    ],
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
        title: 'India Code: Code of Criminal Procedure / BNSS Section 100 & 103',
        url: 'https://indiacode.nic.in',
        department: 'Ministry of Law and Justice',
        type: 'act',
        gazetteRef: 'BNSS 2023 Sec 103 & CrPC 1973 Sec 100',
        citationRef: 'Act No. 46 of 2023',
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
    sourceActName: 'Bharatiya Nyaya Sanhita (BNS) 2023 / Indian Penal Code 1860 & Constitution of India',
    sourceSectionOrArticle: 'Article 21 Constitution, Sections 115, 116, 199 BNS 2023 / Sections 330, 331, 166A IPC',
    sources: [
      'Constitution of India (Article 21 - Right to Life, Bodily Integrity & Dignity)',
      'Bharatiya Nyaya Sanhita (BNS), 2023 - Sections 115, 116 & 199',
      'Indian Penal Code, 1860 - Sections 330, 331, 354, 506',
      'Police Act, 1861 (Act No. 5 of 1861) - Section 29 (Penalties for neglect of duty/violence)',
      'Protection of Human Rights Act, 1993 (Act No. 10 of 1994)'
    ],
    legalCitations: [
      'Article 21, Constitution of India - Absolute constitutional guarantee against torture and degrading treatment in custody',
      'Section 115 & 116 BNS 2023 / Section 330 & 331 IPC - Voluntarily causing hurt/grievous hurt to extort confession is punishable up to 10 years rigorous imprisonment',
      'Section 199 BNS 2023 / Section 166A IPC - Public servant disobeying lawful direction regarding custody and records',
      'D.K. Basu v. State of West Bengal, (1997) 1 SCC 416 - Custodial violence is an unmitigated attack on the rule of law; personal liability on errant officers',
      'Prakash Singh v. Union of India, (2006) 8 SCC 1 - Mandatory setup of Police Complaints Authority to adjudicate police misconduct'
    ],
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
        gazetteRef: 'Protection of Human Rights Act, 1993',
        citationRef: 'Act No. 10 of 1994',
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
    sourceActName: 'Prevention of Corruption Act, 1988 (Amended 2018) & Bharatiya Nyaya Sanhita 2023',
    sourceSectionOrArticle: 'Sections 7, 7A, 8, 13 Prevention of Corruption Act 1988 / Section 308 BNS / Section 384 IPC',
    sources: [
      'Prevention of Corruption Act, 1988 (Act No. 49 of 1988 as amended by Act No. 16 of 2018)',
      'Bharatiya Nyaya Sanhita (BNS), 2023 - Section 308 (Extortion)',
      'Central Vigilance Commission Act, 2003 (Act No. 45 of 2003)',
      'Delhi Special Police Establishment Act, 1946 (Governing CBI anti-corruption jurisdiction)'
    ],
    legalCitations: [
      'Section 7, Prevention of Corruption Act 1988 - Public servant obtaining or demanding undue advantage punishable with imprisonment of 3 to 7 years',
      'Section 7A, Prevention of Corruption Act 1988 - Taking undue advantage to influence public servant by corrupt or illegal means',
      'Section 8(2) Proviso, Prevention of Corruption Act - 7-day whistleblower immunity for citizens coerced to pay bribe if reported to investigating agency',
      'Section 13, Prevention of Corruption Act 1988 - Criminal misconduct by a public servant and illicit enrichment',
      'State of Maharashtra v. Balaram Bapu Patil, (1983) 2 SCC 28 - Rigorous evidentiary parameters for trap operations and anti-corruption prosecutions'
    ],
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
        gazetteRef: 'Central Vigilance Commission Act, 2003',
        citationRef: 'Act No. 45 of 2003',
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
    sourceActName: 'Code of Criminal Procedure 1973 / BNSS 2023 & Constitution of India',
    sourceSectionOrArticle: 'Articles 32 & 226 Constitution, Sections 154(3), 156(3), 200 CrPC / Sections 173(4), 175(3), 223 BNSS',
    sources: [
      'Constitution of India (Articles 32 & 226 - Constitutional Remedies and High Court Writs)',
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 - Sections 173(4), 175(3) & 223',
      'Code of Criminal Procedure, 1973 - Sections 154(3), 156(3) & 200',
      'Supreme Court Police Reform Directives in Prakash Singh v. Union of India (2006)'
    ],
    legalCitations: [
      'Section 173(4) BNSS 2023 / Section 154(3) CrPC 1973 - Remedy to send written information to Superintendent of Police',
      'Section 175(3) BNSS 2023 / Section 156(3) CrPC 1973 - Jurisdiction of Magistrate to direct investigation into cognizable offenses',
      'Section 223 BNSS 2023 / Section 200 CrPC 1973 - Examination of complainant and taking cognizance on private criminal complaint',
      'Article 226, Constitution of India - Power of High Courts to issue Writs of Habeas Corpus, Mandamus, and Certiorari against police authorities',
      'Prakash Singh v. Union of India, (2006) 8 SCC 1 - Mandatory establishment of District and State Police Complaints Authorities (PCA)'
    ],
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
    sourceActName: 'Motor Vehicles Act, 1988 (Amended 2019) & Central Motor Vehicles Rules 1989',
    sourceSectionOrArticle: 'Section 130, 132, 134, 127 MVA 1988 & Rule 139 CMVR 1989',
    sources: [
      'Motor Vehicles Act, 1988 (Act No. 59 of 1988 as amended by Act No. 32 of 2019)',
      'Central Motor Vehicles Rules, 1989 - Rule 139 (Production of licences and certificates in electronic form)',
      'Ministry of Road Transport and Highways (MoRTH) Notification RT-11036/64/2017-MVL',
      'Information Technology Act, 2000 (Section 4 - Legal recognition of electronic records)'
    ],
    legalCitations: [
      'Rule 139, Central Motor Vehicles Rules 1989 - Electronic documents presented via DigiLocker or mParivahan are at par with physical certificates',
      'Section 130, Motor Vehicles Act 1988 - Duty to produce license and certificate of registration to uniform officer',
      'Section 127, Motor Vehicles Act 1988 - Prohibition on towing or moving vehicles while driver/occupants are seated inside',
      'Section 200, Motor Vehicles Act 1988 - Compounding of offences only by authorized gazetted/sub-inspector rank officers',
      'State Police Regulations & High Court Directives - Physical key snatching or deflating tyres has zero statutory backing'
    ],
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
        gazetteRef: 'Rule 139 Central Motor Vehicles Rules, 1989',
        citationRef: 'MoRTH Notification RT-11036/64/2017-MVL',
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
    sourceActName: 'Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023 & Code of Criminal Procedure 1973',
    sourceSectionOrArticle: 'Section 43(5) & 179(1) BNSS 2023 / Section 46(4) & 160(1) CrPC',
    sources: [
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 - Sections 43(5) & 179(1)',
      'Code of Criminal Procedure, 1973 - Sections 46(4), 160(1) & 51(2)',
      'Constitution of India (Articles 14, 15(3) & 21 - Special protections for women)',
      'National Commission for Women Act, 1990 (Act No. 20 of 1990)'
    ],
    legalCitations: [
      'Section 43(5) BNSS 2023 / Section 46(4) CrPC - Absolute prohibition on arrest of women between sunset and sunrise except in exceptional circumstances with prior written permission of Judicial Magistrate First Class',
      'Section 179(1) Proviso BNSS 2023 / Section 160(1) Proviso CrPC - Strict mandate that female witnesses cannot be summoned to police station; questioning must occur at their residence',
      'Section 49(2) BNSS 2023 / Section 51(2) CrPC - Frisking and search of female person solely by female officer with strict decency',
      'Sheela Barse v. State of Maharashtra, (1983) 2 SCC 96 - Comprehensive Supreme Court guidelines on safety, separate lockups, and rights of women in police custody'
    ],
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
        gazetteRef: 'National Commission for Women Act, 1990',
        citationRef: 'Act No. 20 of 1990',
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
    sourceActName: 'Constitution of India & Bharatiya Sakshya Adhiniyam (BSA) 2023 / Indian Evidence Act 1872',
    sourceSectionOrArticle: 'Article 21 & Article 20(3) Constitution, Section 63 BSA 2023 / Section 65B IEA, Section 105 BNSS',
    sources: [
      'Constitution of India (Articles 20(3) & 21 - Protection of Personal Privacy & Self-Incrimination)',
      'Bharatiya Sakshya Adhiniyam (BSA), 2023 - Section 63 (Admissibility of electronic records and hash value integrity)',
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 - Section 105 (Audio-visual electronic recording)',
      'Information Technology Act, 2000 (Section 43 & 66 - Unauthorized access to computer systems)'
    ],
    legalCitations: [
      'Article 21, Constitution of India - Privacy is a fundamental constitutional right extending to digital storage and communication',
      'Article 20(3), Constitution of India - Right against self-incrimination protects against forced disclosure of biometric or cryptographic passcodes',
      'Section 105 BNSS 2023 - Digital seizure requires strict procedural recording, witness endorsement, and generation of cryptographic hash',
      'Justice K.S. Puttaswamy (Retd.) v. Union of India, (2017) 10 SCC 1 (9-Judge Bench) - Smartphones hold the digital persona and intimate private lives of individuals; arbitrary warrantless searches violate Article 21',
      'Virendra Khanna v. State of Karnataka, 2021 SCC OnLine Kar 5032 - Judicial guidelines on electronic device seizures and passwords'
    ],
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
        citationRef: '(2017) 10 SCC 1',
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
  },
  {
    id: 'traffic-police-checkpoints-detailed',
    title: 'Traffic Police Checkpoints (Key Snatching, Towing, Document Checks)',
    situation: 'A traffic cop stops your vehicle, attempts to forcibly pull out the car/bike keys from the ignition, threatens to tow the vehicle while you are inside, or demands physical documents despite having digital copies.',
    category: 'traffic',
    severity: 'warning',
    sourceActName: 'Motor Vehicles Act 1988 (Sec 127, 130) & Rule 139 CMVR',
    sourceSectionOrArticle: 'Section 127, 130, 200 MVA 1988 & Rule 139 Central Motor Vehicles Rules 1989',
    sources: [
      'Motor Vehicles Act, 1988 (Section 127 - Removal of motor vehicles abandoned or left unattended)',
      'Motor Vehicles Act, 1988 (Section 130 - Duty to produce licence and certificate of registration)',
      'Central Motor Vehicles Rules, 1989 - Rule 139 (Production of electronic documents)',
      'Ministry of Road Transport and Highways (MoRTH) Circular RT-11036/64/2017-MVL',
      'Information Technology Act, 2000 - Section 4 (Legal recognition of electronic records)'
    ],
    legalCitations: [
      'Section 127, Motor Vehicles Act 1988 - Expressly restricts towing or moving of motor vehicles when any person or passenger is occupying the vehicle',
      'Rule 139, Central Motor Vehicles Rules 1989 (as amended) - Production of electronic documents via DigiLocker / mParivahan has full statutory equivalence to physical documents',
      'Section 200, Motor Vehicles Act 1988 - Only officers of the rank of Assistant Sub-Inspector (ASI) / Sub-Inspector (SI) and above are legally empowered to compound fines on spot',
      'High Court & MoRTH Directives - Police officers possess no legal authority to forcefully remove ignition keys from running vehicles or deflate tyres'
    ],
    legalShield: 'Motor Vehicles Act 1988 (Sec 127, 130), IT Act Sec 4, MoRTH DigiLocker/mParivahan Notifications, State Police Conduct Rules.',
    landmarkCase: 'High Court Directives & MoRTH Circular RT-11036/64/2017-MVL - Key snatching prohibited; Sec 127 MVA bans towing occupied vehicles.',
    summaryRights: [
      'No Key Snatching: Under the Motor Vehicles Act (MVA) and state police conduct rules, traffic police have no legal authority to snatch the ignition keys of a running or stationary vehicle.',
      'Towing Safeguard: Section 127 of the Motor Vehicles Act prohibits towing a vehicle if a driver or passenger is seated inside.',
      'Digital Documents Validity: Under the Information Technology Act (Sec. 4) and Ministry of Road Transport and Highways (MoRTH) notifications, digital documents presented via DigiLocker or mParivahan carry equal legal validity to physical documents.',
      'Rank Authority for Fines: Only an officer of the rank of Assistant Sub-Inspector (ASI) or above is empowered to compound (settle) on-spot traffic fines. A head constable or constable can only record the violation.'
    ],
    immediateActions: [
      'Turn off the ignition yourself, remain seated, and roll down the window partially.',
      'Show your verified documents on DigiLocker / mParivahan on your phone screen.',
      'Ask: “Officer, what specific violation is this check for? Please show your e-challan device or official challan book.”',
      'If a constable attempts extortion or removes keys, record the incident calmly and note their name badge.'
    ],
    doNotDo: [
      'Do NOT pay informal cash bribes without an official printed or SMS e-challan receipt.',
      'Do NOT leave keys in ignition if an officer unlawfully tries to grab them.',
      'Do NOT allow towing while anyone is seated inside the vehicle (Sec 127 MVA).'
    ],
    sayThis: '“Officer, under the Motor Vehicles Act, key snatching is not permitted and my digital documents on DigiLocker are legally valid under MoRTH rules. What specific violation is this check for?”',
    helpline: '112 (National Emergency) / State Traffic Police Helpline',
    whereToComplain: {
      authority: 'Traffic Police Joint Commissioner / DCP (Traffic), State Traffic Police WhatsApp Helpline, Police Complaints Authority (PCA)',
      actSection: 'Motor Vehicles Act 1988 Section 127 & Rule 139 CMVR / IT Act Sec 4',
      steps: [
        'Step 1: Note down the officer’s name badge, rank, buckle number, and vehicle/location.',
        'Step 2: Lodge a complaint with the Joint Commissioner / DCP (Traffic) of the city or district.',
        'Step 3: Send a report to the State Traffic Police WhatsApp Helpline or Grievance portal with vehicle photo.',
        'Step 4: File a complaint with the Police Complaints Authority (PCA) if physical assault or extortion occurred.'
      ],
      helplineOrPortal: 'echallan.parivahan.gov.in / 112',
      portalUrl: 'https://echallan.parivahan.gov.in'
    },
    fastScan30Sec: {
      situationText: 'Traffic police stopping vehicle, key snatching attempt, towing threat, or rejecting digital documents.',
      topRightText: 'No Key Snatching • Sec 127 No Towing with Occupants • DigiLocker 100% Valid • ASI+ Rank for Fines.',
      mustDoText: 'Turn off ignition yourself. Show DigiLocker. Ask officer’s violation & e-challan. Record name badge if extorted.',
      complainToText: 'Joint Commissioner / DCP (Traffic), Traffic WhatsApp Helpline, or Police Complaints Authority (PCA).'
    },
    officialLinks: [
      {
        title: 'Ministry of Road Transport and Highways (MoRTH) Parivahan Portal',
        url: 'https://parivahan.gov.in',
        department: 'MoRTH, Government of India',
        type: 'portal',
        gazetteRef: 'Rule 139 Central Motor Vehicles Rules 1989',
        citationRef: 'Notification RT-11036/64/2017-MVL',
        description: 'Official portal for DigiLocker document validity & e-Challan payment.'
      }
    ],
    translations: {
      hi: {
        title: 'ट्रैफिक पुलिस चेकिंग (चाबी छीनना, टोइंग, डिजिटल दस्तावेज)',
        situation: 'ट्रैफिक पुलिस गाड़ी रोके, जबरन इग्निशन से चाबी निकाले, अंदर बैठे होने पर टो करने की धमकी दे या डिजिलॉकर अस्वीकार करे।',
        legalShield: 'मोटर वाहन अधिनियम 1988 (धारा 127, 130), आईटी एक्ट धारा 4, MoRTH डिजिलॉकर नोटिफिकेशन।',
        summaryRights: [
          'चाबी छीनना गैर-कानूनी है।',
          'सवारी अंदर होने पर टोइंग प्रतिबंधित है (धारा 127 MVA)।',
          'डिजिलॉकर/एमपरिवहन दस्तावेज पूरी तरह कानूनी रूप से मान्य हैं।',
          'केवल एएसआई या ऊपर के अधिकारी ही ऑन-स्पॉट चालान काट सकते हैं।'
        ],
        immediateActions: [
          'इग्निशन खुद बंद करें और बैठे रहें।',
          'डिजिलॉकर पर सत्यापित दस्तावेज दिखाएं।',
          'पूछें कि किस नियम उल्लंघन के लिए रोका गया है और ई-चालान डिवाइस दिखाने को कहें।',
          'यदि चाबी छीनी जाए तो अधिकारी का नाम-बैज नोट करें।'
        ],
        doNotDo: [
          'बिना रसीद कोई नकद राशि न दें।',
          'गाड़ी के अंदर किसी के बैठे रहने पर टो न करने दें।'
        ],
        sayThis: '“सर, मोटर व्हीकल एक्ट के तहत गाड़ी की चाबी निकालना अवैध है और डिजिलॉकर दस्तावेज MoRTH नियमों के तहत पूरी तरह मान्य हैं। कृपया बताएं किस नियम के तहत रोका गया है?”',
        whereToComplain: {
          authority: 'डीसीपी (ट्रैफिक), राज्य ट्रैफिक पुलिस हेल्पलाइन, पुलिस कंप्लेंट्स अथॉरिटी',
          steps: ['ट्रैफिक डीसीपी कार्यालय या परिवहन पोर्टल पर ई-चालान शिकायत दर्ज करें।'],
          helplineOrPortal: '112 / echallan.parivahan.gov.in'
        }
      }
    }
  },
  {
    id: 'informal-thana-bulana',
    title: 'Informal "Thana Bulana" (Phone Calls Summoning to Police Station)',
    situation: 'A police officer calls you on your mobile phone and orders you to appear at the police station immediately without sharing details of any FIR or complaint.',
    category: 'fundamental_rights',
    severity: 'warning',
    sourceActName: 'Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023 & Constitution of India',
    sourceSectionOrArticle: 'Section 35(3) & Section 179 BNSS 2023 / Section 41A & 160 CrPC, Article 21 Constitution',
    sources: [
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 - Section 35(3) (Notice of appearance)',
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 - Section 179 (Police officer\'s power to require attendance of witnesses)',
      'Constitution of India (Article 21 - Protection of life and personal liberty)',
      'Code of Criminal Procedure, 1973 - Section 41A & Section 160'
    ],
    legalCitations: [
      'Section 35(3) BNSS 2023 (earlier Sec 41A CrPC) - Mandatory issuance of formal written notice of appearance for any offense punishable up to 7 years imprisonment',
      'Section 179(1) Proviso BNSS 2023 (earlier Sec 160(1) CrPC) - Strictly bars summoning women, children below 15, elders above 60, or disabled persons to station for questioning',
      'Arnesh Kumar v. State of Bihar, (2014) 8 SCC 273 - Informal or threatening verbal summons without written compliance checklist violate fundamental rights and warrant disciplinary action',
      'Satender Kumar Antil v. CBI, (2022) 10 SCC 51 - Strict adherence to Section 41A / Section 35(3) statutory notice procedures'
    ],
    legalShield: 'Section 35(3) & Section 179 BNSS 2023 (earlier Sec 41A & 160 CrPC), Article 21 Constitution of India.',
    landmarkCase: 'Arnesh Kumar v. State of Bihar & Satender Kumar Antil - Mandatory formal written notice; informal verbal summons are unlawful.',
    summaryRights: [
      'Mandatory Written Notice: Police have no legal right to summon any citizen informally or over WhatsApp without issuing a formal written notice under Section 35(3) BNSS (earlier 41A CrPC) or Section 179 BNSS (witness summons).',
      'Protected Categories: Women, children under 15, individuals over 60, and persons with mental/physical disabilities cannot be summoned to the police station for questioning; they must be examined at their residence (BNSS Sec. 179(1) Proviso).',
      'Right to Details: You are entitled to know the Crime Number / GD Entry and the subject matter of the inquiry in advance.'
    ],
    immediateActions: [
      'Do not panic or immediately rush to the station alone.',
      'Ask the caller politely: “Please provide the Crime/GD entry number and serve a formal notice under Section 35(3) or Section 179 of the BNSS with date, time, and reason.”',
      'Record the phone call and note down the officer’s name, designation, and police station.',
      'If you do visit after receiving written notice, always go with an advocate or a family member.'
    ],
    doNotDo: [
      'Do NOT rush to the police station alone on a casual or threatening phone call without formal written notice.',
      'Do NOT give oral confessions or sign statements over the phone or without a witness.',
      'Do NOT let women, minors under 15, or seniors above 60 go to the station for witness inquiries.'
    ],
    sayThis: '“Officer, please provide the Crime or GD entry number and serve a formal notice under Section 35(3) or Section 179 of the BNSS with the date, time, and reason before I visit.”',
    helpline: '112 (National Emergency) / 15100 (NALSA Free Legal Aid)',
    whereToComplain: {
      authority: 'Senior Superintendent of Police (SSP) & State Police Complaints Authority (PCA)',
      actSection: 'Section 35(3) & Section 179 BNSS / State Police Conduct Rules',
      steps: [
        'Step 1: Preserve audio recording of the phone call and note caller number, date, and timestamp.',
        'Step 2: Submit a written representation to the Senior Superintendent of Police (SSP) / DCP.',
        'Step 3: If harassment continues without formal notice, lodge a complaint before the State Police Complaints Authority (PCA).'
      ],
      helplineOrPortal: 'pgportal.gov.in / SSP Office',
      portalUrl: 'https://pgportal.gov.in'
    },
    fastScan30Sec: {
      situationText: 'Police calling your mobile phone demanding you report to the police station immediately without notice.',
      topRightText: 'Mandatory Written Notice (BNSS Sec 35(3)) • Women/Minors/Seniors questioned only at residence • Go with lawyer.',
      mustDoText: 'Do not panic. Demand formal written notice with Crime/GD number. Record call. Never visit alone.',
      complainToText: 'Senior Superintendent of Police (SSP) or Police Complaints Authority (PCA).'
    },
    officialLinks: [
      {
        title: 'India Code: Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023',
        url: 'https://www.indiacode.nic.in/handle/123456789/20063',
        department: 'Ministry of Law and Justice',
        type: 'act',
        gazetteRef: 'Gazette of India, Extraordinary, Part II, Section 1 (Act No. 46 of 2023)',
        citationRef: 'BNSS 2023 Section 35(3) & Section 179',
        description: 'Statutory provisions for Notice of Appearance (Section 35(3)) and Witness Examination (Section 179).'
      }
    ],
    translations: {
      hi: {
        title: 'अनौपचारिक "थाना बुलाना" (फोन पर तुरंत थाने आने का आदेश)',
        situation: 'पुलिस अधिकारी आपके फोन पर कॉल करके बिना किसी एफआईआर या नोटिस के तुरंत थाने आने का आदेश या धमकी दे।',
        legalShield: 'धारा 35(3) व धारा 179 बीएनएसएस 2023 (पूर्व धारा 41A/160 सीआरपीसी), संविधान का अनुच्छेद 21।',
        summaryRights: [
          'बिना लिखित नोटिस किसी भी नागरिक को थाने नहीं बुलाया जा सकता (धारा 35(3) BNSS)।',
          'महिला, 15 वर्ष से कम उम्र के बच्चे और 60+ वरिष्ठ नागरिकों से केवल उनके घर पर ही पूछताछ की जा सकती है।',
          'आपको एफआईआर नंबर और पूछताछ का विषय जानने का पूरा अधिकार है।'
        ],
        immediateActions: [
          'घबराकर अकेले थाने न जाएं।',
          'कॉल करने वाले से बीएनएसएस की धारा 35(3) या 179 के तहत औपचारिक लिखित नोटिस भेजने को कहें।',
          'कॉल रिकॉर्ड करें और अधिकारी का नाम व थाना नोट करें।'
        ],
        doNotDo: [
          'केवल फोन कॉल या धमकी के आधार पर अकेले थाने न जाएं।',
          'फोन पर कोई बयान या स्वीकारोक्ति न दें।'
        ],
        sayThis: '“सर, कृपया बीएनएसएस की धारा 35(3) के तहत लिखित नोटिस भेजें जिसमें तारीख, समय और केस नंबर स्पष्ट हो।”',
        whereToComplain: {
          authority: 'वरिष्ठ पुलिस अधीक्षक (SSP) एवं राज्य पुलिस शिकायत प्राधिकरण (PCA)',
          steps: ['कॉल रिकॉर्डिंग सुरक्षित रखकर एसएसपी को लिखित शिकायत भेजें।'],
          helplineOrPortal: '112 / 15100'
        }
      }
    }
  },
  {
    id: 'forced-confessions-custody',
    title: 'Forced Confessions, Beating, and Signed Blank Papers in Custody',
    situation: 'Police detain you or a family member and use physical force, intimidation, or threats to extract a confession or make you sign blank sheets of paper.',
    category: 'arrest',
    severity: 'critical',
    sourceActName: 'Bharatiya Sakshya Adhiniyam (BSA) 2023 & Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023',
    sourceSectionOrArticle: 'Section 23 BSA 2023 / Section 25 IEA 1872, Section 53/54 & 182 BNSS 2023, Article 20(3) & 21 Constitution',
    sources: [
      'Bharatiya Sakshya Adhiniyam (BSA), 2023 - Section 23 (Confession to police officer not to be proved)',
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 - Section 53 & Section 54 (Examination of arrested person by medical officer)',
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 - Section 182 (No inducement to be offered)',
      'Constitution of India (Article 20(3) - Right against self-incrimination & Article 21 - Protection against torture)',
      'Universal Declaration of Human Rights & UN Convention Against Torture (Article 5)'
    ],
    legalCitations: [
      'Section 23 BSA 2023 (earlier Section 25 Indian Evidence Act) - Unconditional absolute bar on admitting confessions made to any police officer in evidence before a court of law',
      'Article 20(3), Constitution of India - No person accused of any offense shall be compelled to be a witness against himself (Nemo Tenetur Seipsum Accusare)',
      'Section 54 BNSS 2023 (earlier Section 54 CrPC) - Right of arrested person to immediate medical examination on judicial record documenting visible bruises, fractures, or custodial torture marks',
      'Nandini Satpathy v. P.L. Dani, (1978) 2 SCC 424 - Accused citizen holds fundamental right to silence; mental or physical coercion to extract statements is unconstitutional',
      'D.K. Basu v. State of West Bengal, (1997) 1 SCC 416 - Custodial violence is a direct strike at the rule of law; mandatory compensation and departmental prosecution of offending officers'
    ],
    legalShield: 'Section 23 Bharatiya Sakshya Adhiniyam, 2023 (BSA), Article 20(3) & 21 Constitution of India, Section 182 BNSS, Section 53/54 BNSS.',
    landmarkCase: 'Nandini Satpathy v. P.L. Dani & D.K. Basu v. State of West Bengal - Confessions to police are completely inadmissible in court; right against custodial torture.',
    summaryRights: [
      'Inadmissibility of Police Confessions: Under Section 23 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA) (earlier Section 25 Indian Evidence Act), any confession made to a police officer is completely inadmissible as evidence in court.',
      'Right to Silence: Article 20(3) of the Constitution guarantees that no person accused of an offense shall be compelled to be a witness against themselves.',
      'No Inducement or Threat: Section 182 BNSS strictly forbids police from offering inducements, threats, or promises to extract confessions.',
      'Mandatory Medical Documentation: Section 53/54 BNSS entitles the arrestee to a prompt medical examination by an independent medical officer.'
    ],
    immediateActions: [
      'If forced to sign under physical coercion, remember the confession has no evidentiary value without judicial confirmation.',
      'When produced before the Judicial Magistrate within 24 hours, immediately declare to the Magistrate that you were tortured or coerced, and show any visible injury marks.',
      'Demand a fresh medical examination under Section 53/54 BNSS to document injuries on the judicial record.',
      'Request the Magistrate to record the retraction of any coerced statement under Section 183 BNSS (earlier 164 CrPC).'
    ],
    doNotDo: [
      'Do NOT remain silent before the Judicial Magistrate about custodial torture out of fear.',
      'Do NOT sign documents willingly; if coerced, remember police confessions are inadmissible in trial.',
      'Do NOT allow 24 hours to lapse without demanding production before the Magistrate.'
    ],
    sayThis: '“Your Honour, I was subjected to physical coercion and forced to sign papers in police custody. I request an immediate medical examination under Section 54 BNSS to record these injuries on court record.”',
    helpline: '15100 (NALSA Free Legal Aid) / 14433 (NHRC Helpline)',
    whereToComplain: {
      authority: 'Judicial Magistrate during Remand Hearing, National Human Rights Commission (NHRC), High Court (Writ of Habeas Corpus / Custodial Violence)',
      actSection: 'Section 23 BSA 2023, Section 53/54 & 182 BNSS, Constitution Art 226',
      steps: [
        'Step 1: Directly inform the Judicial Magistrate in open court during the 24-hour production hearing.',
        'Step 2: Demand an order for an immediate independent medical examination at a government hospital.',
        'Step 3: File an urgent complaint on the NHRC portal (hrcnet.nic.in / Toll-Free 14433).',
        'Step 4: Approach the High Court under Article 226 for a Writ of Habeas Corpus and judicial inquiry into custodial violence.'
      ],
      helplineOrPortal: 'hrcnet.nic.in / NALSA 15100',
      portalUrl: 'https://hrcnet.nic.in'
    },
    fastScan30Sec: {
      situationText: 'Custodial torture, physical beatings, forced confessions, or forced signing of blank papers.',
      topRightText: 'Police Confessions Zero Evidence (BSA Sec 23) • Right to Silence (Art 20(3)) • 24hr Magistrate Production • Sec 54 Medical Checkup.',
      mustDoText: 'Speak directly to Magistrate during 24-hr remand. Show injuries. Demand Sec 54 independent medical checkup on record.',
      complainToText: 'Judicial Magistrate First Class (JMFC), High Court (Art 226), or NHRC (14433).'
    },
    officialLinks: [
      {
        title: 'National Human Rights Commission (NHRC) Online Portal',
        url: 'https://hrcnet.nic.in',
        department: 'NHRC, India',
        type: 'portal',
        gazetteRef: 'Protection of Human Rights Act, 1993',
        citationRef: 'Section 12 PHRA 1993',
        description: '24x7 online complaint filing portal for custodial violence and human rights abuses.'
      }
    ],
    translations: {
      hi: {
        title: 'हिरासत में जबरन कबूलनामा, मारपीट व कोरे कागज पर हस्ताक्षर',
        situation: 'पुलिस हिरासत में मारपीट, धमकी या कोरे कागजों पर जबरन दस्तखत कराकर झूठा अपराध कबूल कराने का प्रयास करे।',
        legalShield: 'धारा 23 भारतीय साक्ष्य अधिनियम 2023, अनुच्छेद 20(3) व 21, धारा 182 व 53/54 बीएनएसएस।',
        summaryRights: [
          'पुलिस को दिया गया कोई भी कबूलनामा अदालत में साक्ष्य के रूप में शून्य (मान्य नहीं) है (धारा 23 BSA)।',
          'अपने खिलाफ गवाही न देने का मौलिक अधिकार (अनुच्छेद 20(3))।',
          'हिरासत में मारपीट पर मजिस्ट्रेट से तत्काल मेडिकल जांच की मांग का अधिकार (धारा 54 BNSS)।'
        ],
        immediateActions: [
          'मजिस्ट्रेट के समक्ष 24 घंटे में पेशी के दौरान सीधे जज को बताएं कि मारपीट व जबरन दस्तखत कराए गए हैं।',
          'चोट के निशान अदालत में दिखाकर धारा 54 बीएनएसएस के तहत सरकारी डॉक्टर से मेडिकल की मांग करें।',
          'मुफ्त कानूनी सहायता वकील (15100) की मांग करें।'
        ],
        doNotDo: [
          'डर के मारे मजिस्ट्रेट के सामने चुप न रहें।',
          'हिरासत की मारपीट को बिना मेडिकल रिकॉर्ड दर्ज कराए न छोड़ें।'
        ],
        sayThis: '“माननीय जज महोदय, पुलिस हिरासत में मेरे साथ मारपीट की गई और जबरन कागजों पर दस्तखत कराए गए। धारा 54 बीएनएसएस के तहत तुरंत मेडिकल जांच कराई जाए।”',
        whereToComplain: {
          authority: 'न्यायिक मजिस्ट्रेट (JMFC) कोर्ट, राष्ट्रीय मानवाधिकार आयोग (NHRC), उच्च न्यायालय',
          steps: ['पेशी के समय मजिस्ट्रेट को मौखिक व लिखित बयान दें तथा एनएचआरसी पोर्टल पर शिकायत दर्ज कराएं।'],
          helplineOrPortal: '15100 / 14433'
        }
      }
    }
  },
  {
    id: 'night-police-entry-homes',
    title: 'Night-Time Police Entry and Raids on Private Homes',
    situation: 'Police officers knock on your door late at night or force their way inside your home without a search warrant.',
    category: 'search',
    severity: 'critical',
    sourceActName: 'Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023 & Constitution of India',
    sourceSectionOrArticle: 'Section 185, Section 43(5) & Section 103 BNSS 2023 / Section 165 & 46(4) CrPC',
    sources: [
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 - Section 185 (Search by police officer)',
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 - Section 43(5) (Arrest of female person at night)',
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 - Section 103 (Persons in charge of closed place to allow search)',
      'Constitution of India (Article 21 - Protection of Home, Dignity & Personal Liberty)'
    ],
    legalCitations: [
      'Section 185 BNSS 2023 (earlier Section 165 CrPC) - Strict prerequisite of recording written grounds of urgency before any warrantless residential search, forwarded immediately to the Judicial Magistrate',
      'Section 43(5) BNSS 2023 (earlier Section 46(4) CrPC) - Statutory embargo on arresting female citizens between sunset and sunrise without prior written magisterial sanction',
      'Section 103(2) BNSS 2023 - Search of apartments where women observe pardanashin custom requires prior notice to withdraw and female officer presence',
      'State of Maharashtra v. Christian Community Welfare Council of India, (2003) 8 SCC 546 - Supreme Court mandates on female officer presence and strict decorum during home raids'
    ],
    legalShield: 'BNSS Section 185, Section 43(5) & Section 100(3), Article 21 Constitution of India.',
    landmarkCase: 'State of Maharashtra v. Christian Community Welfare Council (2003) & K.S. Puttaswamy (2017) - Inviolability of home and strict ban on night arrest of women.',
    summaryRights: [
      'Search Warrant Requirement: Except in cases of chasing a fleeing felon or urgent hot pursuit (BNSS Sec. 185), police cannot enter private residential premises without a search warrant issued by a Magistrate.',
      'Night Arrest of Women Prohibited: Women cannot be arrested between sunset (6:00 PM) and sunrise (6:00 AM) unless extraordinary prior permission is granted in writing by a Judicial Magistrate First Class (BNSS Sec. 43(5)).',
      'Female Officer Presence: A search of an area where women reside requires the presence of a female police officer and prior notice for them to withdraw to maintain privacy (BNSS Sec. 100(3)).'
    ],
    immediateActions: [
      'Do not open the door completely; speak through a latch or safety door.',
      'Ask: “Do you have a search warrant from the Magistrate or a written authorization?”',
      'If female members are present, ask: “Is there a female officer present in uniform?”',
      'Turn on audio/video recording inside your premises. Alert neighbors and dial 112 to log an emergency verification record.'
    ],
    doNotDo: [
      'Do NOT open doors wide late at night without verifying search warrant and officer identification.',
      'Do NOT allow male officers to enter rooms where women or children are resting without female officers.',
      'Do NOT let officers search without independent local witnesses (Panchas) present.'
    ],
    sayThis: '“Officers, please show your judicial search warrant through the door. If female members are inside, under Section 43(5) and Section 100(3) BNSS, a female officer must be present.”',
    helpline: '112 (National Emergency) / 1091 (Women Helpline)',
    whereToComplain: {
      authority: 'Office of the Commissioner / SSP, Judicial Magistrate having local jurisdiction, State Human Rights Commission',
      actSection: 'BNSS Sec 185, Sec 43(5), Sec 100(3) & Protection of Human Rights Act',
      steps: [
        'Step 1: Call 112 immediately to create a recorded emergency log on the central police dispatch server.',
        'Step 2: File a formal complaint for criminal trespass and illegal entry with the Commissioner of Police / SSP.',
        'Step 3: Lodge a petition before the local Judicial Magistrate having territorial jurisdiction.',
        'Step 4: File a complaint with the State Human Rights Commission (SHRC) / National Commission for Women (NCW).'
      ],
      helplineOrPortal: '112 / hrcnet.nic.in',
      portalUrl: 'https://hrcnet.nic.in'
    },
    fastScan30Sec: {
      situationText: 'Police knocking on door late at night, raiding home without warrant, or entering where women reside.',
      topRightText: 'Warrant Required • No Night Arrest of Women (Sunset-Sunrise) • Female Officer Mandatory • Video Record.',
      mustDoText: 'Speak through latch. Demand Magistrate search warrant. Ensure female officer present. Dial 112 to log inquiry.',
      complainToText: 'Police Commissioner / SSP Office, Judicial Magistrate, or State Human Rights Commission.'
    },
    officialLinks: [
      {
        title: 'National Commission for Women (NCW) Legal Cell',
        url: 'http://ncw.nic.in',
        department: 'NCW, Government of India',
        type: 'portal',
        gazetteRef: 'National Commission for Women Act 1990',
        citationRef: 'Section 10 NCW Act',
        description: 'Direct portal for complaints regarding violation of women safety rules by law enforcement.'
      }
    ],
    translations: {
      hi: {
        title: 'रात के समय घर में पुलिस का प्रवेश या गैर-कानूनी छापा',
        situation: 'देर रात पुलिस आपके घर का दरवाजा खटखटाए, बिना सर्च वारंट घर में घुसने की कोशिश करे या महिलाओं को धमकाए।',
        legalShield: 'बीएनएसएस धारा 185, धारा 43(5), धारा 100(3), संविधान का अनुच्छेद 21।',
        summaryRights: [
          'बिना मजिस्ट्रेट सर्च वारंट के घर में घुसना गैर-कानूनी है।',
          'सूर्यास्त के बाद और सूर्योदय से पहले महिलाओं की गिरफ्तारी पर पूर्ण प्रतिबंध (धारा 43(5) BNSS)।',
          'महिला निवास स्थल की तलाशी के लिए महिला पुलिस अधिकारी की मौजूदगी अनिवार्य है।'
        ],
        immediateActions: [
          'दरवाजा पूरा न खोलें, जाली या लैच से बात करें।',
          'मजिस्ट्रेट का लिखित सर्च वारंट दिखाने को कहें।',
          'महिला पुलिस अधिकारी की मौजूदगी सुनिश्चित करें।',
          'तुरंत 112 डायल करके आपातकालीन रिकॉर्ड दर्ज कराएं।'
        ],
        doNotDo: [
          'रात में बिना वारंट व बिना महिला पुलिस के पुरुष पुलिसकर्मियों को अंदर न आने दें।',
          'पड़ोसियों या गवाहों की अनुपस्थिति में तलाशी न होने दें।'
        ],
        sayThis: '“कृपया सर्च वारंट दिखाएं। बीएनएसएस धारा 43(5) के तहत सूर्यास्त के बाद महिलाओं की गिरफ्तारी या बिना महिला पुलिस के तलाशी अवैध है।”',
        whereToComplain: {
          authority: 'पुलिस कमिश्नर / एसएसपी, न्यायिक मजिस्ट्रेट, राज्य मानवाधिकार आयोग',
          steps: ['112 पर कॉल करके रिकॉर्ड बनवाएं और एसएसपी को लिखित शिकायत दें।'],
          helplineOrPortal: '112 / 1091'
        }
      }
    }
  },
  {
    id: 'mobile-passcode-device-seizure',
    title: 'Demand for Mobile Phone Passcodes, Chats, or Laptop Seizure',
    situation: 'An officer halts you, demands that you unlock your phone, scrolls through your private WhatsApp messages/gallery, or threatens to seize your electronic devices without justification.',
    category: 'phone_privacy',
    severity: 'warning',
    sourceActName: 'Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023 & Bharatiya Sakshya Adhiniyam (BSA) 2023',
    sourceSectionOrArticle: 'Section 105 BNSS 2023, Section 63 BSA 2023, Article 21 & Article 20(3) Constitution',
    sources: [
      'Constitution of India (Articles 20(3) & 21 - Constitutional Privacy and Protection against Self-Incrimination)',
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 - Section 105 (Recording of search and seizure through audio-video electronic means)',
      'Bharatiya Sakshya Adhiniyam (BSA), 2023 - Section 63 (Admissibility of electronic records and hash value validation)',
      'Information Technology Act, 2000 - Section 66E (Violation of privacy)'
    ],
    legalCitations: [
      'Justice K.S. Puttaswamy (Retd.) v. Union of India, (2017) 10 SCC 1 - 9-Judge Constitution Bench established that digital devices contain intimate personal privacy protected under Article 21',
      'Article 20(3), Constitution of India - Constitutional protection against forced passcode disclosure without judicial warrant',
      'Section 105 BNSS 2023 - Mandatory digital recording of seizure process and delivery of inventory to occupant',
      'Virendra Khanna v. State of Karnataka, 2021 SCC OnLine Kar 5032 - Strict protocol requiring cryptographic Hash Values (SHA-256) and Panchnama for digital device custody'
    ],
    legalShield: 'Article 21 Constitution (Fundamental Right to Privacy), Article 20(3), Section 105 BNSS, Section 63 BSA 2023.',
    landmarkCase: 'Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) & Virendra Khanna v. State of Karnataka - Smartphones carry intimate digital life; warrants & hash values are mandatory.',
    summaryRights: [
      'Right to Privacy: The Supreme Court (K.S. Puttaswamy v. Union of India) recognized privacy as a Fundamental Right under Article 21.',
      'No Arbitrary Phone Checks: Police cannot casually search your personal electronic devices without a formal court warrant or a documented connection to a registered investigation.',
      'Mandatory Hash Value / Seizure Protocol: If digital devices are seized, the officer must generate and record the device’s cryptographic Hash Value and provide a copy of the seizure memo (Panchnama) to prevent data tampering (BNSS Sec. 105; BSA Sec. 63).'
    ],
    immediateActions: [
      'State firmly: “Officer, this device contains privileged personal and banking information. Under Article 21, I am not obligated to unlock it without a formal search warrant or written investigation order.”',
      'If the device is taken forcefully, demand an immediate written Seizure Memo stating the exact IMEI/Serial number, condition of device, and time of seizure signed by two local witnesses.',
      'Ensure you hold the phone yourself when presenting verified documents via DigiLocker without handing over an unlocked device.'
    ],
    doNotDo: [
      'Do NOT hand over your phone in an unlocked state or reveal social media / banking passwords casually.',
      'Do NOT surrender electronic devices without a signed seizure memo and cryptographic hash value.',
      'Do NOT tamper with or delete active evidence if a legal warrant is served.'
    ],
    sayThis: '“Officer, this device contains privileged personal and banking data. Under Article 21 and the Puttaswamy judgment, I am not obligated to unlock it without a formal search warrant.”',
    helpline: '1930 (National Cyber Crime) / 112',
    whereToComplain: {
      authority: 'Jurisdictional Magistrate Court, Chief Judicial Magistrate (CJM), High Court under Sec. 528 BNSS',
      actSection: 'BNSS Sec 105, BSA Sec 63, IT Act 2000 & Constitution Art 21',
      steps: [
        'Step 1: File an urgent application before the Chief Judicial Magistrate (CJM) / Jurisdictional Magistrate for return of seized device (Superdari).',
        'Step 2: Report unauthorized digital snooping or extortion to the Cyber Crime Cell via cybercrime.gov.in.',
        'Step 3: Approach the High Court under Section 528 BNSS (earlier 482 CrPC) against illegal electronic seizure.'
      ],
      helplineOrPortal: 'cybercrime.gov.in / 1930',
      portalUrl: 'https://cybercrime.gov.in'
    },
    fastScan30Sec: {
      situationText: 'Police asking for phone passcode, reading WhatsApp/photos, or seizing laptop/mobile without warrant.',
      topRightText: 'Fundamental Right to Privacy (Art 21) • Judicial Warrant Required • Mandatory Hash Value on Seizure • Hold phone yourself.',
      mustDoText: 'Politely refuse unlocked phone hand-over. Present DigiLocker yourself. Demand seizure memo with IMEI/Hash if seized.',
      complainToText: 'Chief Judicial Magistrate (CJM), Cyber Crime Cell (1930), or High Court.'
    },
    officialLinks: [
      {
        title: 'National Cyber Crime Reporting Portal (MHA)',
        url: 'https://cybercrime.gov.in',
        department: 'Ministry of Home Affairs',
        type: 'portal',
        gazetteRef: 'Information Technology Act, 2000',
        citationRef: 'Section 66E IT Act',
        description: 'Official national cyber portal to report digital harassment and device snooping.'
      }
    ],
    translations: {
      hi: {
        title: 'मोबाइल फोन पासवर्ड, चैट मांगना या लैपटॉप जब्त करना',
        situation: 'पुलिस फोन अनलॉक कराने, व्हाट्सएप संदेश पढ़ने, गैलरी देखने या बिना सर्च वारंट लैपटॉप/फोन जब्त करने की धमकी दे।',
        legalShield: 'अनुच्छेद 21 (पुट्टास्वामी निजता का अधिकार), अनुच्छेद 20(3), बीएनएसएस धारा 105, बीएसए धारा 63।',
        summaryRights: [
          'स्मार्टफोन की निजता संविधान के अनुच्छेद 21 के तहत सुरक्षित मौलिक अधिकार है।',
          'बिना अदालती सर्च वारंट पुलिस फोन का पासवर्ड मांगने के लिए बाध्य नहीं कर सकती।',
          'उपकरण जब्त करने पर हैश वैल्यू व दो गवाहों के हस्ताक्षर वाला जब्ती मेमो देना अनिवार्य है।'
        ],
        immediateActions: [
          'विनम्रतापूर्वक कहें कि फोन में बैंकिंग व निजी डेटा है जिसे बिना सर्च वारंट अनलॉक नहीं किया जा सकता।',
          'दस्तावेज दिखाने के लिए फोन हाथ में रखकर खुद स्क्रीन दिखाएं।',
          'जबरन फोन लेने पर तुरंत आईएमईआई नंबर और गवाहों सहित जब्ती रसीद मांगें।'
        ],
        doNotDo: [
          'फोन अनलॉक करके पुलिस के हाथ में न दें।',
          'बिना पंचनामा और हैश वैल्यू के डिवाइस जब्त न होने दें।'
        ],
        sayThis: '“सर, पुट्टास्वामी फैसले और अनुच्छेद 21 के तहत मेरा फोन निजी है। बिना आधिकारिक सर्च वारंट के मैं इसे अनलॉक करने के लिए बाध्य नहीं हूँ।”',
        whereToComplain: {
          authority: 'मुख्य न्यायिक मजिस्ट्रेट (CJM), साइबर क्राइम सेल, उच्च न्यायालय',
          steps: ['सीजेएम अदालत में फोन वापसी की अर्जी लगाएं और 1930 पर शिकायत दर्ज करें।'],
          helplineOrPortal: '1930 / cybercrime.gov.in'
        }
      }
    }
  },
  {
    id: 'landlord-tenant-civil-disputes',
    title: 'Police Intervening in Landlord-Tenant / Civil Property Disputes',
    situation: 'A landlord or business partner brings the local police to your house/shop to threaten eviction, lock the premises, or force a financial settlement without a court order.',
    category: 'fundamental_rights',
    severity: 'warning',
    sourceActName: 'Transfer of Property Act 1882 & Specific Relief Act 1963',
    sourceSectionOrArticle: 'Section 6 Specific Relief Act 1963, Section 108 Transfer of Property Act 1882, Article 300A Constitution',
    sources: [
      'Specific Relief Act, 1963 - Section 6 (Suit by person dispossessed of immovable property)',
      'Transfer of Property Act, 1882 - Section 108 & 111 (Rights and liabilities of lessor and lessee)',
      'Constitution of India (Article 300A - Persons not to be deprived of property save by authority of law)',
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 - Section 164 & 167 (Disputes as to immovable property)'
    ],
    legalCitations: [
      'Section 6, Specific Relief Act 1963 - Direct summary remedy against unlawful dispossession without following due process of civil law',
      'Article 300A, Constitution of India - Constitutional protection against arbitrary deprivation of tenancy and possession rights',
      'Bishandas v. State of Punjab, AIR 1961 SC 1570 - The State, its police, and executive officers cannot take the law into their own hands to dispossess citizens without a decree from a competent civil court',
      'Express Newspapers Pvt. Ltd. v. Union of India, (1986) 1 SCC 133 - Police intervention in civil contracts or tenant evictions is ultra vires and unlawful'
    ],
    legalShield: 'Transfer of Property Act 1882, Specific Relief Act 1963, Article 21 & 300A Constitution, Section 173 BNSS.',
    landmarkCase: 'Bishandas v. State of Punjab (1961) & Express Newspapers - Executive and police have zero power to dispossess tenants or decide title without a Civil Court decree.',
    summaryRights: [
      'Bar on Civil Jurisdiction: Police powers under the BNSS are restricted to maintaining public order and investigating criminal offenses. Police have zero authority to resolve civil disputes, enforce rent agreements, or execute evictions without a specific civil court decree.',
      'Eviction Safeguards: Eviction without due process of law violates Article 21, Article 300A, and Transfer of Property Act protections.',
      'No Forced Settlements: Police officers cannot act as collection agents or force you to sign compromise deeds at the station.'
    ],
    immediateActions: [
      'State clearly: “This is a civil matter governed by a contract/lease agreement. There is no cognizable criminal offense. Only the Civil Court has jurisdiction.”',
      'Do not sign any compromise deed or agreement under police pressure at the station.',
      'Show your rent agreement, payment receipts, or possession proof.',
      'File an immediate civil suit for permanent injunction before the Civil Court to restrain illegal dispossession.'
    ],
    doNotDo: [
      'Do NOT vacate premises or surrender keys under police intimidation without a civil court bailiff.',
      'Do NOT sign any settlement deed, promissory note, or undertaking at the police station.',
      'Do NOT pay disputed civil rent or damages to police officers.'
    ],
    sayThis: '“Officer, this is purely a civil property dispute governed by contract law. Under the law, police have no jurisdiction to evict or resolve civil matters without a competent Civil Court decree.”',
    helpline: '15100 (NALSA Legal Aid) / 112',
    whereToComplain: {
      authority: 'Civil Court (Suit for Injunction), Superintendent of Police (SP), State Police Complaints Authority (PCA)',
      actSection: 'Specific Relief Act Sec 6, Transfer of Property Act Sec 108 & Police Conduct Rules',
      steps: [
        'Step 1: File an urgent civil suit under Section 6 of the Specific Relief Act for permanent / temporary injunction against illegal dispossession.',
        'Step 2: Submit a written complaint to the Superintendent of Police (SP) / DCP against the police officers for illegal interference in civil matters.',
        'Step 3: Lodge a complaint with the Police Complaints Authority (PCA) for abuse of official position and collusion with landlords.'
      ],
      helplineOrPortal: 'District Civil Court Registry / PCA',
      portalUrl: 'https://pgportal.gov.in'
    },
    fastScan30Sec: {
      situationText: 'Landlord bringing police to evict you, lock premises, cut utilities, or enforce civil settlement.',
      topRightText: 'Police Zero Civil Jurisdiction • Only Civil Court can Evict • No Forced Station Settlements • Sec 6 Injunction.',
      mustDoText: 'Do not vacate. Show lease agreement. State civil jurisdiction only. File civil court injunction suit immediately.',
      complainToText: 'Civil Court (Injunction), District SP/DCP, or Police Complaints Authority (PCA).'
    },
    officialLinks: [
      {
        title: 'National Legal Services Authority (NALSA) Portal',
        url: 'https://nalsa.gov.in',
        department: 'Ministry of Law and Justice',
        type: 'portal',
        gazetteRef: 'Legal Services Authorities Act, 1987',
        citationRef: 'Section 12 LSA Act 1987',
        description: 'Get free civil legal assistance and duty advocates for tenant protection.'
      }
    ],
    translations: {
      hi: {
        title: 'मकान मालिक-किरायेदार विवाद व दीवानी मामलों में पुलिस का दखल',
        situation: 'मकान मालिक पुलिस लाकर जबरन घर/दुकान खाली कराने, ताला लगाने या जबरन समझौते का दबाव बनाए।',
        legalShield: 'संपत्ति अंतरण अधिनियम 1882, विनिर्दिष्ट अनुतोष अधिनियम 1963, संविधान का अनुच्छेद 21 व 300A।',
        summaryRights: [
          'पुलिस को दीवानी (सिविल) मामलों में फैसला करने या जबरन बेदखली का कोई कानूनी अधिकार नहीं है।',
          'केवल सक्षम सिविल कोर्ट के आदेश/डिक्री के बिना किसी को बेदखल नहीं किया जा सकता।',
          'थाने में जबरन समझौता पत्र पर हस्ताक्षर कराना अवैध है।'
        ],
        immediateActions: [
          'स्पष्ट कहें कि यह दीवानी अनुबंध का मामला है और पुलिस का इसमें अधिकार क्षेत्र नहीं है।',
          'किरायानामा व रसीदें दिखाएं।',
          'सिविल कोर्ट में तत्काल स्टे/इंजंक्शन (निषेधाज्ञा) का मुकदमा दायर करें।'
        ],
        doNotDo: [
          'पुलिस के दबाव में आकर चाबी न सौंपें और मकान खाली न करें।',
          'थाने में किसी समझौते या हलफनामे पर दस्तखत न करें।'
        ],
        sayThis: '“सर, यह विशुद्ध रूप से दीवानी (सिविल) संपत्ति का विवाद है। पुलिस को बिना सिविल कोर्ट आदेश के बेदखली करने का अधिकार नहीं है।”',
        whereToComplain: {
          authority: 'सिविल कोर्ट (स्टे अर्जी), पुलिस अधीक्षक (SP), पुलिस शिकायत प्राधिकरण (PCA)',
          steps: ['सिविल जज के समक्ष तुरंत इंजंक्शन का दावा करें और एसपी को पुलिस दखलंदाजी की शिकायत दें।'],
          helplineOrPortal: '15100 / 112'
        }
      }
    }
  },
  {
    id: 'moral-policing-couples',
    title: 'Harassment of Consenting Couples in Public / Moral Policing',
    situation: 'Police stop an adult couple sitting in a park, café, or hotel room, threaten to call their parents, or demand money under the pretext of "obscenity" or "public nuisance".',
    category: 'women_child',
    severity: 'warning',
    sourceActName: 'Bharatiya Nyaya Sanhita (BNS) 2023 & Constitution of India',
    sourceSectionOrArticle: 'Section 296 BNS 2023 / Section 294 IPC, Articles 19(1)(a), 19(1)(d) & 21 Constitution',
    sources: [
      'Constitution of India (Article 19(1)(a), Article 19(1)(d) & Article 21 - Personal Liberty and Privacy)',
      'Bharatiya Nyaya Sanhita (BNS), 2023 - Section 296 (Obscene acts and songs)',
      'Indian Penal Code, 1860 - Section 294',
      'National Commission for Women Act, 1990 (Act No. 20 of 1990)'
    ],
    legalCitations: [
      'Article 21, Constitution of India - The right of consenting adult citizens to choose partners and associate without state harassment is a core facet of personal liberty',
      'Section 296 BNS 2023 (earlier Section 294 IPC) - Holding hands, conversing, or sitting peacefully does not meet the legal threshold of causing annoyance or obscenity in public',
      'Shafin Jahan v. Asokan K.M. (Hadiya Case), (2018) 16 SCC 368 - Consenting adults possess absolute constitutional freedom to live their personal lives without parental or police veto',
      'Navtej Singh Johar v. Union of India, (2018) 1 SCC 1 - Constitutional morality prevails over public or police moral policing',
      'S. Khushboo v. Kanniammal, (2010) 5 SCC 600 - Consensual cohabitation and association between adults is completely legal'
    ],
    legalShield: 'Article 19(1)(a), Article 19(1)(d) & Article 21 Constitution, Section 296 BNS (earlier Sec 294 IPC).',
    landmarkCase: 'Shafin Jahan v. Asokan K.M. (Hadiya Case 2018) & Navtej Singh Johar (2018) - Consenting adults possess absolute constitutional freedom of choice, association, and privacy.',
    summaryRights: [
      'Right to Association & Liberty: Consenting adults (18+) have the constitutional right to associate freely in public or private spaces (Articles 19 and 21).',
      'Scope of Obscenity (BNS Sec. 296 / earlier IPC 294): Sitting together, talking, or holding hands in public does not constitute obscenity or a criminal offense.',
      'Hotel Privacy: Consenting adult citizens holding valid government ID can stay together in hotels/homestays without legal interference.',
      'No Moral Policing: Police have no legal power to call parents, demand marriage proof, or moral police adult citizens.'
    ],
    immediateActions: [
      'State calmly: “We are both consenting adults (18+). We are not committing any illegal act or public nuisance.”',
      'Refuse calls to family or informal financial settlements.',
      'If threatened with an obscenity charge, request the officer to cite the specific act of nuisance and note their name and badge number.',
      'Show valid government ID (Aadhaar, Voter ID, Passport) proving you are 18+.'
    ],
    doNotDo: [
      'Do NOT panic, succumb to extortion, or pay informal spot bribes.',
      'Do NOT provide phone numbers of parents or relatives under intimidation if you are an adult.',
      'Do NOT allow officers to click your pictures or record videos of you unlawfully.'
    ],
    sayThis: '“Officer, we are both consenting adults (18+) exercising our rights under Article 19 and Article 21. We are not committing any public nuisance or unlawful act.”',
    helpline: '112 (National Emergency) / 1091 (Women Helpline) / 7827170170 (NCW)',
    whereToComplain: {
      authority: 'DCP / SP of the district, State Women’s Commission (NCW / SWC), State Police Complaints Authority (PCA)',
      actSection: 'Section 296 BNS 2023, National Commission for Women Act, Police Conduct Rules',
      steps: [
        'Step 1: Note down the police station, names of officers, vehicle registration, and badge details.',
        'Step 2: File a formal written complaint with the Deputy Commissioner of Police (DCP) / Superintendent of Police (SP).',
        'Step 3: Lodge a harassment petition with the National Commission for Women (NCW) at ncw.nic.in.',
        'Step 4: File a complaint before the State Police Complaints Authority (PCA) for moral policing and intimidation.'
      ],
      helplineOrPortal: 'ncw.nic.in / 7827170170',
      portalUrl: 'http://ncw.nic.in'
    },
    fastScan30Sec: {
      situationText: 'Police harassing consenting adult couple in park/hotel, threatening to call parents, or extorting money.',
      topRightText: 'Consenting Adults (18+) Liberty (Art 21) • Sitting/Talking not Obscenity (BNS 296) • No Right to Call Parents • Hotel Stay Legal.',
      mustDoText: 'Show adult ID. State Article 21 adult consent rights. Refuse parent calls/bribes. Note officer name/badge.',
      complainToText: 'District DCP/SP, National Commission for Women (7827170170), or Police Complaints Authority.'
    },
    officialLinks: [
      {
        title: 'National Commission for Women (NCW)',
        url: 'http://ncw.nic.in',
        department: 'NCW India',
        type: 'portal',
        gazetteRef: 'National Commission for Women Act, 1990',
        citationRef: 'Act No. 20 of 1990',
        description: 'Helpline 7827170170 for complaints against moral policing and harassment of women.'
      }
    ],
    translations: {
      hi: {
        title: 'पार्क/होटल में बालिग जोड़ों का उत्पीड़न व मॉरल पुलिसिंग',
        situation: 'पार्क, कैफे या होटल में बैठे बालिग जोड़े को पुलिस रोके, माता-पिता को फोन करने की धमकी दे या अश्लीलता के नाम पर पैसे मांगे।',
        legalShield: 'संविधान का अनुच्छेद 19 व 21 (व्यक्तिगत स्वतंत्रता व निजता), बीएनएस धारा 296।',
        summaryRights: [
          '18+ बालिग नागरिकों को सार्वजनिक व निजी स्थानों पर साथ रहने व बातचीत करने की पूर्ण संवैधानिक स्वतंत्रता है।',
          'साथ बैठना या बात करना कोई अपराध या अश्लीलता नहीं है (BNS धारा 296)।',
          'बालिग नागरिकों के परिजनों को फोन करने या शादी का सबूत मांगने का पुलिस को कोई अधिकार नहीं है।'
        ],
        immediateActions: [
          'शांत रहकर बताएं कि आप दोनों बालिग (18+) हैं।',
          'आयु प्रमाण (आधार कार्ड/वोटर आईडी) दिखाएं।',
          'अवैध वसूली या परिजनों को कॉल करने से स्पष्ट मना करें और अधिकारी का नाम नोट करें।'
        ],
        doNotDo: [
          'घबराकर पैसे या रिश्वत न दें।',
          'डरकर परिजनों का नंबर न दें।'
        ],
        sayThis: '“सर, हम दोनों बालिग (18+) हैं और संविधान के अनुच्छेद 21 के तहत अपने अधिकारों का उपयोग कर रहे हैं। हम कोई गैर-कानूनी काम नहीं कर रहे हैं।”',
        whereToComplain: {
          authority: 'जिला डीसीपी/एसपी, राष्ट्रीय महिला आयोग (NCW), पुलिस शिकायत प्राधिकरण (PCA)',
          steps: ['अधिकारी का नाम-बैज नोट करके डीसीपी और महिला आयोग में लिखित शिकायत दर्ज कराएं।'],
          helplineOrPortal: '112 / 7827170170'
        }
      }
    }
  },
  {
    id: 'preventive-detention-protests',
    title: 'Preventive Detention / Lock-Up Before Protests or Elections',
    situation: 'Police detain you prior to a planned peaceful assembly, protest, or during election cycles citing "preventive measures".',
    category: 'arrest',
    severity: 'warning',
    sourceActName: 'Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023 & Constitution of India',
    sourceSectionOrArticle: 'Section 170, Section 126/128 BNSS 2023 / Section 151 & 107/116 CrPC, Article 22 Constitution',
    sources: [
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 - Section 170 (Arrest to prevent the commission of cognizable offences)',
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 - Section 126 & 128 (Security for keeping peace and good behavior)',
      'Constitution of India (Articles 19(1)(b) & 22 - Protection against arbitrary arrest and detention)',
      'Code of Criminal Procedure, 1973 - Section 151, Section 107 & Section 116'
    ],
    legalCitations: [
      'Section 170 BNSS 2023 (earlier Section 151 CrPC) - Strict limitation prohibiting detention beyond 24 hours without explicit remand from a Judicial Magistrate',
      'Article 22(1) & 22(2), Constitution of India - Constitutional guarantee of being informed of grounds of arrest, right to consult an advocate of choice, and production before Magistrate within 24 hours',
      'Ahmed Noormohmed Bhatinda v. State of Gujarat, (2015) 3 SCC 225 - Preventive detention under Section 151/170 cannot be misused to stifle legitimate democratic dissent or peaceful assemblies',
      'D.K. Basu v. State of West Bengal, (1997) 1 SCC 416 - Mandatory inspection memos, custody logs, and intimate notifications to family apply with equal rigor to preventive detentions'
    ],
    legalShield: 'Section 170 BNSS (earlier Sec 151 CrPC), Sections 126 & 128 BNSS (earlier Sec 107/116 CrPC), Article 19(1)(b) & Article 22 Constitution.',
    landmarkCase: 'Ahmed Noormohmed Bhatinda v. State of Gujarat & D.K. Basu - Preventive detention under Sec 151/170 cannot exceed 24 hours without Judicial Magistrate authorization.',
    summaryRights: [
      'Strict 24-Hour Limit: Under Section 170 BNSS (earlier 151 CrPC), preventive detention cannot exceed 24 hours unless further detention is authorized by a Judicial Magistrate.',
      'Right to Bail: Preventive detentions under Section 126/128/170 BNSS are strictly bailable; you are entitled to release immediately upon executing a personal bond.',
      'Right to Know Reasons: You must be informed of the specific anticipated cognizable offense that prompted the detention.',
      'Right to Legal Representation: Right to consult a lawyer and apply for immediate bail before the Executive Magistrate / SDM.'
    ],
    immediateActions: [
      'Ask: “Under which section am I being detained?”',
      'State your willingness to submit a personal bond for release before the Executive Magistrate.',
      'Ensure the exact time of detention is noted in the general diary (GD) to trigger the 24-hour constitutional clock.',
      'Contact your advocate or NALSA (15100) to move an immediate bail application before the SDM / Executive Magistrate.'
    ],
    doNotDo: [
      'Do NOT allow detention to exceed 24 hours without demanding production before a Magistrate.',
      'Do NOT sign bonds with unreasonable monetary sureties beyond your financial capacity.',
      'Do NOT resist peacefully or engage in aggressive physical confrontation.'
    ],
    sayThis: '“Under Section 170 of the BNSS, preventive detention is strictly bailable and cannot exceed 24 hours. I am ready to furnish a personal bond before the Executive Magistrate for my immediate release.”',
    helpline: '15100 (NALSA Free Legal Aid) / 112',
    whereToComplain: {
      authority: 'Executive Magistrate / Sub-Divisional Magistrate (SDM), High Court (Writ of Habeas Corpus under Art. 226)',
      actSection: 'Section 170 & 126 BNSS, Constitution of India Article 226',
      steps: [
        'Step 1: Submit an immediate bail and personal bond application before the Executive Magistrate / SDM.',
        'Step 2: If held beyond 24 hours without judicial order, instruct an advocate or family member to file an urgent Writ of Habeas Corpus under Article 226 in the High Court.',
        'Step 3: Lodge a complaint with the State Human Rights Commission (SHRC) for illegal preventive detention.'
      ],
      helplineOrPortal: 'Executive Magistrate Court / NALSA 15100',
      portalUrl: 'https://nalsa.gov.in'
    },
    fastScan30Sec: {
      situationText: 'Detained before protest, rally, or elections under preventive arrest sections.',
      topRightText: 'Strict 24-Hour Max Limit (BNSS Sec 170) • Right to Bail on Personal Bond • GD Time Log Essential • Free Legal Aid (15100).',
      mustDoText: 'Ask exact detention section. Offer personal bond to SDM. Ensure GD timestamp recorded. Call legal aid (15100).',
      complainToText: 'Executive Magistrate / SDM, High Court (Habeas Corpus), or State Human Rights Commission.'
    },
    officialLinks: [
      {
        title: 'National Legal Services Authority (NALSA) 24x7 Helpline',
        url: 'https://nalsa.gov.in',
        department: 'NALSA India',
        type: 'portal',
        gazetteRef: 'Legal Services Authorities Act, 1987',
        citationRef: 'Section 12 LSA Act 1987',
        description: 'Dial 15100 for instant free legal aid lawyer assistance during preventive detention.'
      }
    ],
    translations: {
      hi: {
        title: 'विरोध प्रदर्शन या चुनाव से पूर्व एहतियातन हिरासत (प्रिवेंटिव डिटेंशन)',
        situation: 'शांतिपूर्ण प्रदर्शन, रैली या चुनाव से पहले पुलिस आपको "शांति भंग" या "एहतियातन" हिरासत में ले ले।',
        legalShield: 'बीएनएसएस धारा 170 (पूर्व धारा 151 सीआरपीसी), धारा 126/128, संविधान का अनुच्छेद 19(1)(b) व 22।',
        summaryRights: [
          'एहतियातन हिरासत अधिकतम 24 घंटे से अधिक नहीं हो सकती (धारा 170 BNSS)।',
          'यह पूर्णतः जमानती है; आप पर्सनल बॉन्ड (निजी मुचलके) पर तुरंत रिहाई के हकदार हैं।',
          'कार्यपालक मजिस्ट्रेट (SDM) के समक्ष पेशी व मुफ्त विधिक सहायता (15100) का अधिकार।'
        ],
        immediateActions: [
          'पूछें कि किस धारा के तहत हिरासत में लिया गया है।',
          'एसडीएम के समक्ष पर्सनल बॉन्ड भरकर रिहाई की मांग करें।',
          'जनरल डायरी (GD) में हिरासत का सटीक समय दर्ज करवाएं।',
          'वकील या नालसा हेल्पलाइन 15100 पर संपर्क करें।'
        ],
        doNotDo: [
          '24 घंटे से अधिक बिना मजिस्ट्रेट आदेश के हिरासत में न रहें।',
          'अनुचित या अत्यधिक जमानत राशि वाले बॉन्ड पर हस्ताक्षर न करें।'
        ],
        sayThis: '“बीएनएसएस धारा 170 के तहत एहतियातन हिरासत जमानती है और 24 घंटे से अधिक नहीं हो सकती। मैं एसडीएम के समक्ष निजी मुचलका भरने के लिए तैयार हूँ।”',
        whereToComplain: {
          authority: 'उपमंडल मजिस्ट्रेट (SDM) कोर्ट, उच्च न्यायालय (हैबियस कॉर्पस याचिका), मानवाधिकार आयोग',
          steps: ['एसडीएम के समक्ष जमानत अर्जी लगाएं; 24 घंटे पार होने पर हाईकोर्ट में याचिका दाखिल करें।'],
          helplineOrPortal: '15100 / 112'
        }
      }
    }
  }
];

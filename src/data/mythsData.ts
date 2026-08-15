import { MythItem } from '../types';

export const MYTHS_DATA: MythItem[] = [
  {
    id: 'myth-keys',
    myth: 'Traffic police can snatch your vehicle ignition keys or hit your car.',
    reality: 'Strictly ILLEGAL.',
    explanation: 'No police officer of any rank is empowered under the Motor Vehicles Act to snatch car or bike ignition keys or physically abuse vehicles. It is an unlawful act of aggression.',
    lawSection: 'Motor Vehicles Act, 1988 & High Court directives',
    tag: 'Traffic',
    translations: {
      hi: {
        myth: 'ट्रैफिक पुलिस आपकी गाड़ी की चाबी निकाल सकती है या पहिये की हवा छोड़ सकती है।',
        reality: 'पूरी तरह से अवैध व गैर-कानूनी।',
        explanation: 'मोटर वाहन अधिनियम के तहत किसी भी पुलिसकर्मी को चाबी छीनने का अधिकार नहीं है।'
      },
      te: {
        myth: 'ట్రాఫిక్ పోలీసులు వాహనం కీని లాక్కోవచ్చు లేదా వాహనాన్ని కొట్టవచ్చు.',
        reality: 'పూర్తిగా చట్టవిరుద్ధం.',
        explanation: 'మోటారు వాహన చట్టం ప్రకారం ఎవరికీ కీ లాక్కోవడానికి అధికారం లేదు.'
      },
      ta: {
        myth: 'போக்குவரத்து காவலர் வாகன சாவியை பிடுங்கலாம்.',
        reality: 'முற்றிலும் சட்டவிரோதமானது.',
        explanation: 'மோட்டார் வாகனச் சட்டப்படி சாவியைப் பிடுங்குவது சட்டவிரோதம்.'
      },
      bn: {
        myth: 'ট্রাফিক পুলিশ আপনার গাড়ির চাবি কেড়ে নিতে পারে।',
        reality: 'সম্পূর্ণরূপে বেআইনি।',
        explanation: 'মোটর ভেহিকেল আইন অনুযায়ী কোনো পুলিশ কর্মকর্তা চাবি কাড়তে পারেন না।'
      },
      mr: {
        myth: 'ट्रॅफिक पोलिस वाहनाची चावी काढू शकतात.',
        reality: 'पूर्णपणे बेकायदेशीर.',
        explanation: 'मोटार वाहन कायद्यानुसार चावी काढणे बेकायदेशीर आहे.'
      },
      gu: {
        myth: 'ટ્રાફિક પોલીસ વાહનની ચાવી ઝૂંટવી શકે છે.',
        reality: 'સંપૂર્ણપણે ગેરકાયદેસર.',
        explanation: 'મોટર વ્હીકલ એક્ટ મુજબ કોઈપણ પોલીસ ચાવી કાઢી શકતી નથી.'
      },
      kn: {
        myth: 'ಟ್ರಾಫಿಕ್ ಪೊಲೀಸರು ವಾಹನದ ಕೀಲಿಯನ್ನು ಕಸಿದುಕೊಳ್ಳಬಹುದು.',
        reality: 'ಸಂಪೂರ್ಣ ಕಾನೂನುಬಾಹಿರ.',
        explanation: 'ಮೋಟಾರು ವಾಹನ ಕಾಯ್ದೆಯಡಿ ಕೀಲಿ ಕಸಿದುಕೊಳ್ಳುವುದು ನಿಷೇಧಿಸಲಾಗಿದೆ.'
      },
      ml: {
        myth: 'ട്രാഫിക് പോലീസിന് വാഹനത്തിന്റെ താക്കോൽ ഊരിയെടുക്കാം.',
        reality: 'പൂർണ്ണമായും നിയമവിരുദ്ധം.',
        explanation: 'മോട്ടോർ വാഹന നിയമപ്രകാരം താക്കോൽ എടുക്കാൻ പോലീസിന് അധികാരമില്ല.'
      },
      pa: {
        myth: 'ਟ੍ਰੈਫਿਕ ਪੁਲਿਸ ਗੱਡੀ ਦੀ ਚਾਬੀ ਖੋਹ ਸਕਦੀ ਹੈ।',
        reality: 'ਬਿਲਕੁਲ ਗੈਰ-ਕਾਨੂੰਨੀ।',
        explanation: 'ਮੋਟਰ ਵਹੀਕਲ ਐਕਟ ਅਧੀਨ ਚਾਬੀ ਕੱਢਣ ਦੀ ਮਨਾਹੀ ਹੈ।'
      },
      hinglish: {
        myth: 'Traffic police ignition key snatch kar sakti hai.',
        reality: 'Strictly ILLEGAL.',
        explanation: 'MVA rules ke mutabik key snatching complete unlawful aggression hai.'
      }
    }
  },
  {
    id: 'myth-fir-jurisdiction',
    myth: 'A police station can reject your complaint if the crime happened in another area.',
    reality: 'FALSE. "Zero FIR" is mandatory.',
    explanation: 'Any police station in India is legally obligated to register a Zero FIR for a cognizable crime and then transfer the case to the appropriate jurisdiction station.',
    lawSection: 'Section 154 CrPC / Lalita Kumari SC ruling',
    tag: 'FIR',
    translations: {
      hi: {
        myth: 'थाना यह कहकर शिकायत टाल सकता है कि घटना उनके इलाके की नहीं है।',
        reality: 'झूठ। "जीरो एफआईआर" दर्ज करना अनिवार्य है।',
        explanation: 'सुप्रीम कोर्ट के अनुसार किसी भी थाने में जीरो एफआईआर तुरंत दर्ज करानी होगी।'
      },
      te: {
        myth: 'పరిధి లేదనే కారణంతో పోలీస్ స్టేషన్ ఫిర్యాదును తిరస్కరించవచ్చు.',
        reality: 'తప్పు. "జీరో ఎఫ్.ఐ.ఆర్" నమోదు చేయడం తప్పనిసరి.',
        explanation: 'భారతదేశంలో ఎక్కడైనా జీరో ఎఫ్.ఐ.ఆర్ నమోదు చేయవచ్చు.'
      },
      ta: {
        myth: 'எல்லை இல்லை என்று கூறி காவல் துறை புகாரை நிராகரிக்கலாம்.',
        reality: 'தவறு. "ஜீரோ எஃப்.ஐ.ஆர்" பதிவு செய்வது கட்டாயம்.',
        explanation: 'எந்த காவல் நிலையத்திலும் ஜீரோ எஃப்.ஐ.ஆர் பதிவு செய்ய முடியும்.'
      },
      bn: {
        myth: 'অন্য এলাকার অপরাধ বলে পুলিশ অভিযোগ নিতে অস্বীকার করতে পারে।',
        reality: 'মিথ্যা। "জিরো এফআইআর" বাধ্যতামূলক।',
        explanation: 'ভারতের যেকোনো থানায় জিরো এফআইআর দায়ের করা যায়।'
      },
      mr: {
        myth: 'हद्दीचे कारण सांगून पोलिस तक्रार नाकारू शकतात.',
        reality: 'खोटे. "झिरो एफआयआर" अनिवार्य आहे.',
        explanation: 'कोणत्याही ठाण्यात झिरो एफआयआर नोंदवता येते.'
      },
      gu: {
        myth: 'પોલીસ વિસ્તાર બહારનો ગુનો કહીને ફરિયાદ નકારી શકે છે.',
        reality: 'ખોટું. "ઝીરો એફઆઈઆર" નોંધવી ફરજિયાત છે.',
        explanation: 'ગમે તે પોલીસ સ્ટેશનમાં ઝીરો એફઆઈઆર દાખલ થઈ શકે છે.'
      },
      kn: {
        myth: 'ವ್ಯಾಪ್ತಿಯಿಲ್ಲ ಎಂದು ಪೊಲೀಸರು ದೂರನ್ನು ತಿರಸ್ಕರಿಸಬಹುದು.',
        reality: 'ತಪ್ಪು. "ಝೀರೋ ಎಫ್‌ಐಆರ್" ದಾಖಲಿಸುವುದು ಕಡ್ಡಾಯ.',
        explanation: 'ಯಾವುದೇ ಠಾಣೆಯಲ್ಲೂ ಝೀರೋ ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸಬಹುದು.'
      },
      ml: {
        myth: 'അതിർത്തി പരിധിയില്ലെന്ന് പറഞ്ഞ് പോലീസിന് പരാതി നിരസിക്കാം.',
        reality: 'തെറ്റ്. "സീറോ എഫ്.ഐ.ആർ" നിർബന്ധമാണ്.',
        explanation: 'ഏത് സ്റ്റേഷനിലും സീറോ എഫ്.ഐ.ആർ രജിസ്റ്റർ ചെയ്യാം.'
      },
      pa: {
        myth: 'ਹੱਦਬੰਦੀ ਨਾ ਹੋਣ \'ਤੇ ਪੁਲਿਸ ਸ਼ਿਕਾਇਤ ਰੱਦ ਕਰ ਸਕਦੀ ਹੈ।',
        reality: 'ਗ਼ਲਤ। "ਜ਼ੀਰੋ ਐਫਆਈਆਰ" ਲਾਜ਼ਮੀ ਹੈ।',
        explanation: 'ਕਿਸੇ ਵੀ ਥਾਣੇ \'ਚ ਜ਼ੀਰੋ ਐਫਆਈਆਰ ਦਰਜ ਕਰਵਾਈ ਜਾ ਸਕਦੀ ਹੈ।'
      },
      hinglish: {
        myth: 'Jurisdiction issue bolkar police complaint reject kar sakti hai.',
        reality: 'FALSE. "Zero FIR" mandatory hai.',
        explanation: 'Lalita Kumari ruling ke mutabik kisi bhi station mein Zero FIR register karwana citizen ka right hai.'
      }
    }
  },
  {
    id: 'myth-recording',
    myth: 'Recording video of police on public roads is a crime.',
    reality: 'FALSE. Public recording is legal.',
    explanation: 'Police officers are public servants carrying out public duty. Recording them in public spaces is protected under Article 19(1)(a) freedom of speech and expression.',
    lawSection: 'Article 19(1)(a) Constitution of India',
    tag: 'Digital Rights',
    translations: {
      hi: {
        myth: 'सड़क पर पुलिस की वीडियो रिकॉर्डिंग करना अपराध है।',
        reality: 'झूठ। सार्वजनिक स्थान पर रिकॉर्डिंग कानूनी अधिकार है।',
        explanation: 'अनुच्छेद 19(1)(a) के तहत ड्यूटी पर तैनात पुलिसकर्मी की रिकॉर्डिंग वैध है।'
      },
      te: {
        myth: 'రహదారిపై పోలీసులను వీడియో తీయడం నేరం.',
        reality: 'తప్పు. పబ్లిక్ ప్రదేశంలో రికార్డింగ్ చేయడం చట్టబద్ధం.',
        explanation: 'ఆర్టికల్ 19(1)(a) ప్రకారం పోలీసుల విధిని రికార్డ్ చేసే హక్కు ఉంది.'
      },
      ta: {
        myth: 'பொது இடங்களில் போலீசாரை வீடியோ எடுப்பது குற்றம்.',
        reality: 'தவறு. பொது இடங்களில் வீடியோ எடுப்பது சட்டபூர்வமானது.',
        explanation: 'பிரிவு 19(1)(a)-ன் படி வீடியோ எடுப்பது அடிப்படை உரிமையாகும்.'
      },
      bn: {
        myth: 'পাবলিক রাস্তায় পুলিশের ভিডিও রেকর্ড করা অপরাধ।',
        reality: 'ভুল। ভিডিও রেকর্ডিং করা আইনি অধিকার।',
        explanation: 'সংবিধানের ১৯(১)(ক) অনুচ্ছেদ অনুযায়ী জনগণের ভিডিও করার অধিকার রয়েছে।'
      },
      mr: {
        myth: 'रस्त्यावर पोलिसांचे व्हिडिओ रेकॉर्डिंग करणे गुन्हा आहे.',
        reality: 'खोटे. सार्वजनिक ठिकाणी रेकॉर्डिंग करणे कायदेशीर आहे.',
        explanation: 'कलम १९(१)(a) नुसार पोलिसांचे रेकॉर्डिंग करण्याचा हक्क आहे.'
      },
      gu: {
        myth: 'જાહેર રસ્તા પર પોલીસનું વિડીયો રેકોર્ડિંગ કરવું ગુનો છે.',
        reality: 'ખોટું. જાહેર જગ્યાએ વિડીયો બનાવવો કાયદેસર છે.',
        explanation: 'કલમ ૧૯(૧)(a) મુજબ નાગરિકોને રેકોર્ડ કરવાનો અધિકાર છે.'
      },
      kn: {
        myth: 'ರಸ್ತೆಯಲ್ಲಿ ಪೊಲೀಸರ ವಿಡಿಯೋ ರೆಕಾರ್ಡ್ ಮಾಡುವುದು ಅಪರಾಧ.',
        reality: 'ತಪ್ಪು. ಸಾರ್ವಜನಿಕ ಸ್ಥಳದಲ್ಲಿ ರೆಕಾರ್ಡಿಂಗ್ ಕಾನೂನುಬದ್ಧ.',
        explanation: 'ವಿಧಿ 19(1)(a) ರ ಪ್ರಕಾರ ವಿಡಿಯೋ ಮಾಡುವ ಹಕ್ಕಿದೆ.'
      },
      ml: {
        myth: 'പൊതുനിരത്തിൽ പോലീസിനെ വീഡിയോ എടുക്കുന്നത് കുറ്റകരമാണ്.',
        reality: 'തെറ്റ്. വീഡിയോ റെക്കോർഡിംഗ് നിയമപരമാണ്.',
        explanation: 'ആർട്ടിക്കിൾ 19(1)(a) പ്രകാരം പൗരന്മാർക്ക് റെക്കോർഡ് ചെയ്യാനുള്ള അവകാശമുണ്ട്.'
      },
      pa: {
        myth: 'ਸੜਕ \'ਤੇ ਪੁਲਿਸ ਦੀ ਵੀਡੀਓ ਬਣਾਉਣਾ ਜੁਰਮ ਹੈ।',
        reality: 'ਗ਼ਲਤ। ਵੀਡੀਓ ਬਣਾਉਣਾ ਕਾਨੂੰਨੀ ਅਧਿਕਾਰ ਹੈ।',
        explanation: 'ਧਾਰਾ 19(1)(a) ਅਧੀਨ ਨਾਗਰਿਕਾਂ ਨੂੰ ਰਿਕਾਰਡਿੰਗ ਦਾ ਹੱਕ ਹੈ।'
      },
      hinglish: {
        myth: 'Police ki public road par video record karna crime hai.',
        reality: 'FALSE. Public recording legal hai.',
        explanation: 'Article 19(1)(a) ke under public spaces mein on-duty cops ko record karna lawful hai.'
      }
    }
  },
  {
    id: 'myth-women-night',
    myth: 'Police can arrest women at 2 AM for normal questioning.',
    reality: 'PROHIBITED by Section 46(4) CrPC.',
    explanation: 'Women cannot be arrested between sunset and sunrise except under extraordinary situations where the police have obtained prior written permission from a Judicial Magistrate First Class.',
    lawSection: 'Section 46(4) CrPC / Sec 43 BNSS',
    tag: 'Women Rights',
    translations: {
      hi: {
        myth: 'पुलिस किसी भी महिला को रात 2 बजे गिरफ्तार कर सकती है।',
        reality: 'धारा 46(4) के तहत पूरी तरह प्रतिबंधित।',
        explanation: 'सूर्यास्त के बाद और सूर्योदय से पहले मजिस्ट्रेट के लिखित आदेश के बिना महिला की गिरफ्तारी नहीं हो सकती।'
      },
      te: {
        myth: 'పోలీసులు అర్ధరాత్రి మహిళలను అరెస్ట్ చేయవచ్చు.',
        reality: 'సెక్షన్ 46(4) ప్రకారం నిషిద్ధం.',
        explanation: 'సూర్యాస్తమయం తర్వాత మేజిస్ట్రేట్ ఉత్తర్వులు లేకుండా మహిళలను అరెస్ట్ చేయలేరు.'
      },
      ta: {
        myth: 'இரவு 2 மணிக்கு பெண்களை போலீசார் கைது செய்யலாம்.',
        reality: 'பிரிவு 46(4) படி தடைசெய்யப்பட்டுள்ளது.',
        explanation: 'மாஜிஸ்திரேட் அனுமதி இல்லாமல் இரவில் பெண்களை கைது செய்ய முடியாது.'
      },
      bn: {
        myth: 'পুলিশ রাত ২টায় মহিলাদের গ্রেপ্তার করতে পারে।',
        reality: 'ধারা ৪৬(৪) অনুযায়ী নিষিদ্ধ।',
        explanation: 'সূর্যাস্তের পর ম্যাজিস্ট্রেটের লিখিত আদেশ ছাড়া কোনো মহিলাকে গ্রেপ্তার করা যায় না।'
      },
      mr: {
        myth: 'पोलिस रात्री २ वाजता महिलांना अटक करू शकतात.',
        reality: 'कलम ४६(४) नुसार सक्त मनाई आहे.',
        explanation: 'सूर्यास्तानंतर दंडाधिकाऱ्यांच्या आदेशाशिवाय महिलेला अटक करता येत नाही.'
      },
      gu: {
        myth: 'પોલીસ રાત્રે ૨ વાગ્યે મહિલાની ધરપકડ કરી શકે છે.',
        reality: 'કલમ ૪૬(૪) મુજબ પ્રતિબંધિત.',
        explanation: 'સૂર્યાસ્ત પછી મેજિસ્ટ્રેટના લેખિત ઓર્ડર વિના ધરપકડ થઈ શકતી નથી.'
      },
      kn: {
        myth: 'ಪೊಲೀಸರು ರಾತ್ರಿ 2 ಗಂಟೆಗೆ ಮಹಿಳೆಯರನ್ನು ಬಂಧಿಸಬಹುದು.',
        reality: 'ಸೆಕ್ಷನ್ 46(4) ರ ಪ್ರಕಾರ ನಿಷೇಧಿಸಲಾಗಿದೆ.',
        explanation: 'ಸೂರ್ಯಾಸ್ತದ ನಂತರ ಮ್ಯಾಜಿಸ್ಟ್ರೇಟ್ ಅನುಮತಿಯಿಲ್ಲದೆ ಬಂಧಿಸುವಂತಿಲ್ಲ.'
      },
      ml: {
        myth: 'രാത്രി 2 മണിക്ക് പോലീസിന് സ്ത്രീകളെ അറസ്റ്റ് ചെയ്യാം.',
        reality: 'സെക്ഷൻ 46(4) പ്രകാരം നിരോധിച്ചിരിക്കുന്നു.',
        explanation: 'സൂര്യാസ്തമയത്തിനു ശേഷം മജിസ്ട്രേറ്റ് ഉത്തരവില്ലാതെ സ്ത്രീകളെ അറസ്റ്റ് ചെയ്യാൻ കഴിയില്ല.'
      },
      pa: {
        myth: 'ਪੁਲਿਸ ਰਾਤ 2 ਵਜੇ ਔਰਤਾਂ ਨੂੰ ਗ੍ਰਿਫ਼ਤਾਰ ਕਰ ਸਕਦੀ ਹੈ।',
        reality: 'ਧਾਰਾ 46(4) ਤਹਿਤ ਪਾਬੰਦੀਸ਼ੁਦਾ।',
        explanation: 'ਸੂਰਜ ਡੁੱਬਣ ਤੋਂ ਬਾਅਦ ਮੈਜਿਸਟ੍ਰੇਟ ਦੇ ਹੁਕਮ ਬਿਨਾਂ ਗ੍ਰਿਫ਼ਤਾਰੀ ਨਹੀਂ ਹੋ ਸਕਦੀ।'
      },
      hinglish: {
        myth: 'Police late night women ko arrest kar sakti hai.',
        reality: 'PROHIBITED by Section 46(4) CrPC / BNSS.',
        explanation: 'Sunset to sunrise magistrate written order ke bina woman arrest illegal hai.'
      }
    }
  }
];

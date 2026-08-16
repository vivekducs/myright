import { ScriptDialogue } from '../types';

export const SCRIPTS_DATA: ScriptDialogue[] = [
  {
    id: 'script-traffic-stop',
    scenario: 'Traffic police stopped you and demands your phone or keys',
    category: 'traffic',
    policeAsks: '“Give me your keys right now and show me your phone!”',
    citizenResponseEnglish: '“Namaste Officer. With respect, snatching the ignition key is not permitted under the Motor Vehicles Act. I am happily presenting my Driving License and RC digitally through the government DigiLocker app on this screen.”',
    citizenResponseHindi: '“नमस्ते सर, मोटर व्हीकल एक्ट के तहत गाड़ी की चाबी निकालना उचित नहीं है। मैं डिजिलॉकर ऐप पर अपने सभी अधिकृत दस्तावेज आपको अभी दिखा रहा हूँ।”',
    citizenResponses: {
      en: '“Namaste Officer. With respect, snatching the ignition key is not permitted under the Motor Vehicles Act. I am happily presenting my Driving License and RC digitally through the government DigiLocker app on this screen.”',
      hi: '“नमस्ते सर, मोटर व्हीकल एक्ट के तहत गाड़ी की चाबी निकालना उचित नहीं है। मैं डिजिलॉकर ऐप पर अपने सभी अधिकृत दस्तावेज आपको अभी दिखा रहा हूँ।”',
      te: '“నమస్తే సార్. మోటారు వాహనాల చట్టం ప్రకారం వాహనం కీ లాక్కోవడం నిబంధనలకు విరుద్ధం. నేను డిజిలాకర్ యాప్ ద్వారా నా డ్రైవింగ్ లైసెన్స్ మరియు ఆర్సీని ఇప్పుడే మీకు చూపిస్తున్నాను.”',
      ta: '“வணக்கம் ஐயா. மோட்டார் வாகனச் சட்டத்தின்படி சாவியைப் பிடுங்குவது அனுமதிக்கப்படாது. டிஜிலாக்கர் செயலியில் உள்ள எனது ஓட்டுநர் உரிமம் மற்றும் ஆர்.சி-யை நான் காட்டுகிறேன்.”',
      bn: '“নমস্কার স্যার। মোটর ভেহিকল আইন অনুসারে গাড়ির চাবি কেড়ে নেওয়া নিয়মবিরুদ্ধ। আমি ডিজিলকার অ্যাপের মাধ্যমে আমার ড্রাইভিং লাইসেন্স এবং আরসি দেখাচ্ছি।”',
      mr: '“नमस्ते साहेब. मोटार वाहन कायद्यानुसार गाडीची चावी काढणे अयोग्य आहे. मी डिजीलॉकर ॲपवर माझे ड्रायव्हिंग लायसन्स आणि आरसी दाखवत आहे.”',
      gu: '“નમસ્તે સાહેબ. મોટર વ્હીકલ એક્ટ મુજબ વાહનની ચાવી કાઢવી યોગ્ય નથી. હું ડીજીલોકર એપ પર મારા તમામ કાયદેસર દસ્તાવેજો બતાવી રહ્યો છું.”',
      kn: '“ನಮಸ್ಕಾರ ಸರ್. ಮೋಟಾರು ವಾಹನ ಕಾಯ್ದೆಯಡಿ ವಾಹನದ ಕೀ ಕಸಿದುಕೊಳ್ಳುವುದು ಕಾನೂನುಬಾಹಿರ. ನಾನು ಡಿಜಿಲಾಕರ್ ಆ್ಯಪ್ ಮೂಲಕ ನನ್ನ ಲೈಸೆನ್ಸ್ ಮತ್ತು ಆರ್‌ಸಿ ತೋರಿಸುತ್ತಿದ್ದೇನೆ.”',
      ml: '“നമസ്കാരം സാർ. മോട്ടോർ വാഹന നിയമപ്രകാരം വാഹനം താക്കോൽ എടുക്കാൻ പാടില്ല. ഡിജിലോക്കർ ആപ്പ് വഴി ഞാൻ എന്റെ ഡ്രൈവിംഗ് ലൈസൻസും ആർസിയും കാണിക്കാം.”',
      pa: '“ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ ਸਰ। ਮੋਟਰ ਵਹੀਕਲ ਐਕਟ ਅਨੁਸਾਰ ਗੱਡੀ ਦੀ ਚਾਬੀ ਖੋਹਣਾ ਗੈਰ-ਕਾਨੂੰਨੀ ਹੈ। ਮੈਂ ਡਿਜੀਲਾਕਰ ਐਪ ਰਾਹੀਂ ਆਪਣੇ ਸਾਰੇ ਦਸਤਾਵੇਜ਼ ਤੁਹਾਨੂੰ ਦਿਖਾ ਰਿਹਾ ਹਾਂ।”',
      hinglish: '“Namaste Sir. Motor Vehicle Act ke under ignition key nikalna allowed nahi hai. Main DigiLocker app par verified documents aapko screen par dikha raha hoon.”',
    },
    legalBasis: 'Rule 139 Central Motor Vehicles Rules & MVA guidelines',
    tip: 'Keep your hands visible, maintain a steady polite voice, and keep hazard lights on.',
    translations: {
      hi: {
        scenario: 'ट्रैफिक पुलिस ने रोका और चाबी या फोन मांगने लगी',
        policeAsks: '“गाड़ी की चाबी निकालो और फोन दिखाओ!”',
        tip: 'हाथ स्पष्ट रखें, विनम्र स्वर में बात करें और गाड़ी की पार्किंग लाइट ऑन रखें।'
      },
      te: {
        scenario: 'ట్రాఫిక్ పోలీసులు ఆపి కీ లేదా ఫోన్ ఇవ్వమని అడిగినప్పుడు',
        policeAsks: '“కీ ఇవ్వు, నీ ఫోన్ చూపించు!”',
        tip: 'చేతులను స్పష్టంగా ఉంచండి, మర్యాదగా మాట్లాడండి.'
      },
      ta: {
        scenario: 'போக்குவரத்து காவலர் உங்களை நிறுத்தி சாவி அல்லது போன் கேட்கும்போது',
        policeAsks: '“சாவியைக் கொடு, போனை காட்டு!”',
        tip: 'கைகளை தெளிவாக வைத்து, மரியாதையுடன் பேசுங்கள்.'
      },
      bn: {
        scenario: 'ট্রাফিক পুলিশ থামিয়ে চাবি বা ফোন চাইলে',
        policeAsks: '“চাবি দাও আর ফোন দেখাও!”',
        tip: 'হাত পরিষ্কার রাখুন এবং শান্তভাবে কথা বলুন।'
      },
      mr: {
        scenario: 'ट्रॅफिक पोलिसांनी अडवून चावी किंवा फोन मागितल्यास',
        policeAsks: '“चावी द्या आणि फोन दाखवा!”',
        tip: 'शांतपणे बोला आणि वाहनाचे इंडिकेटर सुरू ठेवा.'
      },
      gu: {
        scenario: 'ટ્રાફિક પોલીસે રોકીને ચાવી કે ફોન માંગ્યો હોય ત્યારે',
        policeAsks: '“ચાવી આપી દો અને ફોન બતાવો!”',
        tip: 'હાથ ખુલ્લા રાખો અને નમ્રતાથી વાત કરો.'
      },
      kn: {
        scenario: 'ಟ್ರಾಫಿಕ್ ಪೊಲೀಸರು ತಡೆದು ಕೀ ಅಥವಾ ಫೋನ್ ಕೇಳಿದಾಗ',
        policeAsks: '“ಕೀ ಕೊಡಿ, ಫೋನ್ ತೋರಿಸಿ!”',
        tip: 'ಗೌರವಯುತವಾಗಿ ಮಾತನಾಡಿ ಮತ್ತು ಶಾಂತರಾಗಿರಿ.'
      },
      ml: {
        scenario: 'ട്രാഫിക് പോലീസ് തടഞ്ഞ് താക്കോലോ ഫോണോ ആവശ്യപ്പെടുമ്പോൾ',
        policeAsks: '“താക്കോൽ തരൂ, ഫോൺ കാണിക്കൂ!”',
        tip: 'ശാന്തമായി സംസാരിക്കുക, കൈകൾ വ്യക്തമായി കാണിക്കുക.'
      },
      pa: {
        scenario: 'ਟ੍ਰੈਫਿਕ ਪੁਲਿਸ ਨੇ ਰੋਕ ਕੇ ਚਾਬੀ ਜਾਂ ਫੋਨ ਮੰਗਿਆ',
        policeAsks: '“ਚਾਬੀ ਕੱਢੋ ਤੇ ਫੋਨ ਦਿਖਾਓ!”',
        tip: 'ਨਿਮਰਤਾ ਨਾਲ ਗੱਲ ਕਰੋ ਤੇ ਸ਼ਾਂਤ ਰਹੋ।'
      },
      hinglish: {
        scenario: 'Traffic police ne roka aur chabi ya phone mangne lagi',
        policeAsks: '“Chabi do aur phone dikhao!”',
        tip: 'Hands visible rakhein aur calm polite tone mein baat karein.'
      }
    }
  },
  {
    id: 'script-phone-privacy',
    scenario: 'Police asks you to unlock WhatsApp or photos at a checkpoint',
    category: 'phone_privacy',
    policeAsks: '“Unlock your phone, let me see your chats.”',
    citizenResponseEnglish: '“Officer, under the Supreme Court Puttaswamy judgment on Article 21, my digital communications are private. Unless you have a formal Section 91 notice or search warrant in a registered FIR, I am not obliged to unlock it.”',
    citizenResponseHindi: '“सर, सुप्रीम कोर्ट के पुट्टास्वामी फैसले और आर्टिकल 21 के तहत मेरा मोबाइल फोन व्यक्तिगत है। बिना किसी आधिकारिक सर्च वारंट या केस के मैं इसे अनलॉक करने के लिए बाध्य नहीं हूँ।”',
    citizenResponses: {
      en: '“Officer, under the Supreme Court Puttaswamy judgment on Article 21, my digital communications are private. Unless you have a formal Section 91 notice or search warrant in a registered FIR, I am not obliged to unlock it.”',
      hi: '“सर, सुप्रीम कोर्ट के पुट्टास्वामी फैसले और आर्टिकल 21 के तहत मेरा मोबाइल फोन व्यक्तिगत है। बिना किसी आधिकारिक सर्च वारंट या केस के मैं इसे अनलॉक करने के लिए बाध्य नहीं हूँ।”',
      te: '“సార్, సుప్రీం కోర్టు పుట్టస్వామి తీర్పు మరియు ఆర్టికల్ 21 ప్రకారం నా ఫోన్ ప్రైవేట్. చట్టబద్ధమైన సెక్షన్ 91 నోటీసు లేదా సెర్చ్ వారెంట్ లేకుండా ఫోన్ అన్‌లాక్ చేయాల్సిన అవసరం లేదు.”',
      ta: '“ஐயா, உச்ச நீதிமன்ற புட்டசுவாமி தீர்ப்பு மற்றும் பிரிவு 21-ன் படி எனது தொலைபேசி தனிப்பட்டதாகும். நீதிமன்ற வாரண்ட் அல்லது பிரிவு 91 நோட்டீஸ் இல்லாமல் அதை திறக்க முடியாது.”',
      bn: '“স্যার, সুপ্রিম কোর্টের পুট্টাস্বামী রায় এবং অনুচ্ছেদ ২১ অনুসারে আমার ফোন ব্যক্তিগত। আইনানুগ পরোয়ানা ছাড়া এটি আনলক করতে আমি বাধ্য নই।”',
      mr: '“साहेब, सर्वोच्च न्यायालयाच्या पुट्टास्वामी निकाल आणि कलम २१ नुसार माझा फोन वैयक्तिक आहे. सर्च वॉरंटशिवाय मी तो अनलॉक करण्यास बांधील नाही.”',
      gu: '“સાહેબ, સુપ્રીમ કોર્ટના પુટ્ટાસ્વામી ચુકાદા અને કલમ ૨૧ મુજબ મારો ફોન ખાનગી છે. કોર્ટના વોરંટ વગર હું તેને અનલોક કરવા બંધાયેલ નથી.”',
      kn: '“ಸರ್, ಸುಪ್ರೀಂ ಕೋರ್ಟ್‌ನ ಪುಟ್ಟಸ್ವಾಮಿ ತೀರ್ಪು ಮತ್ತು ವಿಧಿ 21 ರ ಪ್ರಕಾರ ನನ್ನ ಫೋನ್ ಖಾಸಗಿಯಾಗಿದೆ. ಅಧಿಕೃತ ವಾರಂಟ್ ಇಲ್ಲದೆ ನಾನು ಇದನ್ನು ಅನ್‌ಲಾಕ್ ಮಾಡಲು ಬದ್ಧನಲ್ಲ.”',
      ml: '“സാർ, സുപ്രീം കോടതി പുട്ടസ്വാമി വിധിയും ആർട്ടിക്കിൾ 21 പ്രകാരവും എന്റെ ഫോൺ സ്വകാര്യമാണ്. സെർച്ച് വാറന്റ് ഇല്ലാതെ ഇത് അൺലോക്ക് ചെയ്യാൻ ഞാൻ ബാധ്യസ്ഥനല്ല.”',
      pa: '“ਸਰ, ਸੁਪਰੀਮ ਕੋਰਟ ਦੇ ਪੁੱਟਾਸਵਾਮੀ ਫੈਸਲੇ ਅਤੇ ਧਾਰਾ 21 ਅਧੀਨ ਮੇਰਾ ਫੋਨ ਨਿੱਜੀ ਹੈ। ਬਿਨਾਂ ਵਾਰੰਟ ਦੇ ਮੈਂ ਇਸਨੂੰ ਅਨਲਾਕ ਕਰਨ ਲਈ ਪਾਬੰਦ ਨਹੀਂ ਹਾਂ।”',
      hinglish: '“Sir, Supreme Court ke Puttaswamy verdict aur Article 21 ke under mera phone private property hai. Valid search warrant ke bina unlock karna mandatory nahi hai.”',
    },
    legalBasis: 'Article 21 (Right to Privacy) & Section 91 CrPC',
    tip: 'Never shout or physically snatch the phone back. Politely request their name and rank badge.',
    translations: {
      hi: {
        scenario: 'नाके पर पुलिस फोन या व्हाट्सएप चैट अनलॉक करने को कहे',
        policeAsks: '“फोन अनलॉक करो, अपनी चैट्स दिखाओ!”',
        tip: 'गुस्सा न करें, फोन न छीनें, शांतिपूर्वक अधिकारी का नाम और बैच पूछें।'
      },
      te: {
        scenario: 'పోలీసులు మీ ఫోన్ లేదా వాట్సాప్ అన్‌లాక్ చేయమని అడిగితే',
        policeAsks: '“ఫోన్ అన్‌లాక్ చెయ్, చాట్స్ చూపించు!”',
        tip: 'కోపం తెచ్చుకోకండి, అధికారి పేరు మరియు బ్యాడ్జ్ నంబర్ అడగండి.'
      }
    }
  },
  {
    id: 'script-arrest-grounds',
    scenario: 'Police officer says “You are coming with us to the police station right now”',
    category: 'arrest',
    policeAsks: '“Sit in the police jeep, we are arresting you!”',
    citizenResponseEnglish: '“Officer, under Article 22(1) of the Constitution and Section 41B CrPC, please inform me of the specific grounds of arrest and prepare the D.K. Basu Arrest Memo with a witness signature before we leave.”',
    citizenResponseHindi: '“सर, संविधान के आर्टिकल 22(1) और डी.के. बसु गाइडलाइंस के तहत मुझे गिरफ्तारी का कारण बताएं, अरेस्ट मेमो तैयार करें और मुझे अपने परिवार व वकील से बात करने की अनुमति दें।”',
    citizenResponses: {
      en: '“Officer, under Article 22(1) of the Constitution and Section 41B CrPC, please inform me of the specific grounds of arrest and prepare the D.K. Basu Arrest Memo with a witness signature before we leave.”',
      hi: '“सर, संविधान के आर्टिकल 22(1) और डी.के. बसु गाइडलाइंस के तहत मुझे गिरफ्तारी का कारण बताएं, अरेस्ट मेमो तैयार करें और मुझे अपने परिवार व वकील से बात करने की अनुमति दें।”',
      te: '“సార్, రాజ్యాంగంలోని ఆర్టికల్ 22(1) మరియు సెక్షన్ 41B ప్రకారం అరెస్టుకు గల కారణాలు చెప్పండి, డి.కె. బసు అరెస్ట్ మెమో తయారు చేసి సాక్షుల సంతకం తీసుకోండి.”',
      ta: '“ஐயா, அரசியலமைப்பு பிரிவு 22(1) மற்றும் 41B-ன் கீழ் கைதிற்கான காரணத்தை தெரிவிக்கவும், டி.கே. பாசு கைது மெமோவை தயார் செய்யவும்.”',
      bn: '“স্যার, সংবিধানের ২২(১) অনুচ্ছেদ এবং ৪১বি ধারা অনুসারে গ্রেপ্তারের কারণ জানান এবং ডি.কে. বসু অ্যারেস্ট মেমো প্রস্তুত করুন।”',
      mr: '“साहेब, संविधानाचे कलम २२(१) आणि डी.के. बसू नियमांनुसार मला अटकेचे कारण सांगा आणि साक्षीदाराच्या सहीसह अरेस्ट मेमो तयार करा.”',
      gu: '“સાહેબ, બંધારણની કલમ ૨૨(૧) અને ડી.કે. બસુ ગાઇડલાઇન મુજબ મને ધરપકડનું કારણ જણાવો અને અરેસ્ટ મેમો તૈયાર કરો.”',
      kn: '“ಸರ್, ಸಂವಿಧಾನದ ವಿಧಿ 22(1) ಮತ್ತು ಡಿ.ಕೆ. ಬಸು ನಿಯಮಗಳ ಪ್ರಕಾರ ಬಂಧನದ ಕಾರಣ ತಿಳಿಸಿ ಮತ್ತು ಅರೆಸ್ಟ್ ಮೆಮೊ ತಯಾರಿಸಿ.”',
      ml: '“സാർ, ഭരണഘടനയിലെ ആർട്ടിക്കിൾ 22(1) പ്രകാരം അറസ്റ്റിന്റെ കാരണം വ്യക്തമാക്കുകയും ഡി.കെ. ബസു അറസ്റ്റ് മെമ്മോ തയ്യാറാക്കുകയും ചെയ്യുക.”',
      pa: '“ਸਰ, ਸੰਵਿਧਾਨ ਦੀ ਧਾਰਾ 22(1) ਤਹਿਤ ਗ੍ਰਿਫ਼ਤਾਰੀ ਦਾ ਕਾਰਨ ਦੱਸੋ ਅਤੇ ਡੀ.ਕੇ. ਬਾਸੂ ਅਰੈਸਟ ਮੈਮੋ ਤਿਆਰ ਕਰੋ।”',
      hinglish: '“Sir, Article 22(1) aur Section 41B CrPC ke under please grounds of arrest batayein aur D.K. Basu Arrest Memo witness ke saath prepare karein.”',
    },
    legalBasis: 'Article 22(1), Section 41B CrPC & D.K. Basu Landmark Ruling',
    tip: 'Do not run or physically resist. Demand the memo and note badge numbers.',
    translations: {
      hi: {
        scenario: 'पुलिस कहे कि चलो अभी थाने चलो, तुम्हें गिरफ्तार कर रहे हैं',
        policeAsks: '“गाड़ी में बैठो, तुम्हें अरेस्ट कर रहे हैं!”',
        tip: 'भागने या हाथापाई की कोशिश न करें। शांति से अरेस्ट मेमो और कानूनी नोटिस की मांग करें।'
      }
    }
  },
  {
    id: 'script-fir-refusal',
    scenario: 'Duty officer at the police station refuses to file your FIR',
    category: 'fir',
    policeAsks: '“This is not our jurisdiction / We will not write an FIR for this.”',
    citizenResponseEnglish: '“Sir, under the Supreme Court’s 5-Judge Constitution Bench ruling in Lalita Kumari v. Govt of UP, registering an FIR is mandatory for cognizable complaints. If jurisdiction is an issue, please register a Zero FIR and provide me a signed carbon copy.”',
    citizenResponseHindi: '“सर, सुप्रीम कोर्ट के ललिता कुमारी फैसले के अनुसार संज्ञेय अपराध में एफआईआर दर्ज करना अनिवार्य है। यदि यह आपका क्षेत्राधिकार नहीं है, तो कृपया ‘जीरो एफआईआर’ दर्ज करें और मुझे उसकी फ्री कॉपी दें।”',
    citizenResponses: {
      en: '“Sir, under the Supreme Court’s 5-Judge Constitution Bench ruling in Lalita Kumari v. Govt of UP, registering an FIR is mandatory for cognizable complaints. If jurisdiction is an issue, please register a Zero FIR and provide me a signed carbon copy.”',
      hi: '“सर, सुप्रीम कोर्ट के ललिता कुमारी फैसले के अनुसार संज्ञेय अपराध में एफआईआर दर्ज करना अनिवार्य है। यदि यह आपका क्षेत्राधिकार नहीं है, तो कृपया ‘जीरो एफआईआर’ दर्ज करें और मुझे उसकी फ्री कॉपी दें।”',
      te: '“సార్, లలితా కుమారి వర్సెస్ యూపీ కేసులో సుప్రీం కోర్టు తీర్పు ప్రకారం ఎఫ్.ఐ.ఆర్ నమోదు చేయడం తప్పనిసరి. పరిధి సమస్య అయితే జీరో ఎఫ్.ఐ.ఆర్ నమోదు చేసి కాపీ ఇవ్వండి.”',
      ta: '“ஐயா, உச்ச நீதிமன்ற லலிதா குமாரி தீர்ப்பின்படி எஃப்.ஐ.ஆர் பதிவு செய்வது கட்டாயமாகும். வரம்பு சிக்கல் இருந்தால் ஜீரோ எஃப்.ஐ.ஆர் பதிவு செய்து நகல் தரவும்.”',
      bn: '“স্যার, সুপ্রিম কোর্টের ললিতা কুমারী রায় অনুযায়ী এফআইআর দায়ের করা বাধ্যতামূলক। এখতিয়ার সমস্যা হলে জিরো এফআইআর নথিভুক্ত করুন।”',
      mr: '“साहेब, सर्वोच्च न्यायालयाच्या ललिता कुमारी निकालानुसार दखलपात्र गुन्ह्यात एफआयआर नोंदवणे बंधनकारक आहे. अधिकारक्षेत्र नसल्यास झिरो एफआयआर नोंदवा.”',
      gu: '“સાહેબ, સુપ્રીમ કોર્ટના લલિતા કુમારી ચુકાદા મુજબ એફઆઈઆર નોંધવી ફરજિયાત છે. જો વિસ્તારનો પ્રશ્ન હોય તો ઝીરો એફઆઈઆર નોંધીને કોપી આપો.”',
      kn: '“ಸರ್, ಲಲಿತಾ ಕುಮಾರಿ ತೀರ್ಪಿನ ಪ್ರಕಾರ ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸುವುದು ಕಡ್ಡಾಯ. ವ್ಯಾಪ್ತಿಯ ಸಮಸ್ಯೆಯಿದ್ದರೆ ಝೀರೋ ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸಿ ಪ್ರತಿ ನೀಡಿ.”',
      ml: '“സാർ, സുപ്രീം കോടതി ലളിത കുമാരി വിധിപ്രകാരം എഫ്.ഐ.ആർ രജിസ്റ്റർ ചെയ്യൽ നിർബന്ധമാണ്. പരിധി പ്രശ്നമാണെങ്കിൽ സീറോ എഫ്.ഐ.ആർ രജിസ്റ്റർ ചെയ്യുക.”',
      pa: '“ਸਰ, ਸੁਪਰੀਮ ਕੋਰਟ ਦੇ ਲਲਿਤਾ ਕੁਮਾਰੀ ਫੈਸਲੇ ਅਨੁਸਾਰ ਐਫਆਈਆਰ ਦਰਜ ਕਰਨਾ ਲਾਜ਼ਮੀ ਹੈ। ਜੇਕਰ ਹੱਦਬੰਦੀ ਦਾ ਮਾਮਲਾ ਹੈ ਤਾਂ ਜ਼ੀਰੋ ਐਫਆਈਆਰ ਦਰਜ ਕਰੋ।”',
      hinglish: '“Sir, Supreme Court ke Lalita Kumari judgement ke mutabik cognizable offence mein FIR register karna mandatory hai. Jurisdiction issue hai toh Zero FIR file karein.”',
    },
    legalBasis: 'Section 154 CrPC & Lalita Kumari v. Govt. of UP (2014)',
    tip: 'Carry two printed copies of your complaint and get an acknowledgment stamp on one copy.',
    translations: {
      hi: {
        scenario: 'थाने में अधिकारी एफआईआर लिखने से मना कर दे',
        policeAsks: '“यह हमारे इलाके का मामला नहीं है, हम एफआईआर नहीं लिखेंगे।”',
        tip: 'शिकायत की दो कॉपियां ले जाएं और एक कॉपी पर रिसीविंग मोहर जरूर लें।'
      }
    }
  },
  {
    id: 'script-recording-public',
    scenario: 'Police officer threatens you: “Put that camera away or I will file a case!”',
    category: 'fundamental_rights',
    policeAsks: '“Stop recording! Who gave you permission to film the police?”',
    citizenResponseEnglish: '“Officer, I am standing at a safe distance on a public road without obstructing your lawful duty. Recording public servants in public spaces is protected under Article 19(1)(a) for mutual transparency.”',
    citizenResponseHindi: '“सर, मैं सुरक्षित दूरी से रिकॉर्ड कर रहा हूँ और आपकी ड्यूटी में कोई बाधा नहीं डाल रहा। सार्वजनिक स्थान पर रिकॉर्डिंग आर्टिकल 19(1)(a) के तहत नागरिक का अधिकार है।”',
    citizenResponses: {
      en: '“Officer, I am standing at a safe distance on a public road without obstructing your lawful duty. Recording public servants in public spaces is protected under Article 19(1)(a) for mutual transparency.”',
      hi: '“सर, मैं सुरक्षित दूरी से रिकॉर्ड कर रहा हूँ और आपकी ड्यूटी में कोई बाधा नहीं डाल रहा। सार्वजनिक स्थान पर रिकॉर्डिंग आर्टिकल 19(1)(a) के तहत नागरिक का अधिकार है।”',
      te: '“సార్, నేను సురక్షితమైన దూరం నుండి రికార్డ్ చేస్తున్నాను, మీ విధులకు ఆటంకం కలిగించడం లేదు. పబ్లిక్ స్థలంలో రికార్డింగ్ చేయడం ఆర్టికల్ 19(1)(a) కింద అనుమతించబడింది.”',
      ta: '“ஐயா, பொது இடத்தில் உங்கள் பணிக்கு இடையூறு இல்லாமல் தூரத்திலிருந்து பதிவு செய்வது அரசியலமைப்பு பிரிவு 19(1)(a)-ன் கீழ் அனுமதிக்கப்பட்ட உரிமை.”',
      bn: '“স্যার, আমি নিরাপদ দূরত্ব থেকে ভিডিও করছি এবং আপনার কাজে বাধা দিচ্ছি না। ১৯(১)(ক) অনুচ্ছেদ অনুযায়ী এটি নাগরিকের অধিকার।”',
      mr: '“साहेब, मी सुरक्षित अंतरावरून चित्रीकरण करत असून तुमच्या कामात अडथळा आणत नाही. कलम १९(१)(a) नुसार हे कायदेशीर आहे.”',
      gu: '“સાહેબ, હું સુરક્ષિત અંતરેથી રેકોર્ડિંગ કરું છું અને તમારી ફરજમાં દખલ કરતો નથી. કલમ ૧૯(૧)(a) હેઠળ આ નાગરિકનો અધિકાર છે.”',
      kn: '“ಸರ್, ನಾನು ಸುರಕ್ಷಿತ ದೂರದಿಂದ ರೆಕಾರ್ಡ್ ಮಾಡುತ್ತಿದ್ದೇನೆ ಮತ್ತು ನಿಮ್ಮ ಕರ್ತವ್ಯಕ್ಕೆ ಅಡ್ಡಿಪಡಿಸುತ್ತಿಲ್ಲ. ವಿಧಿ 19(1)(a) ಅಡಿಯಲ್ಲಿ ಇದು ಕಾನೂನುಬದ್ಧ.”',
      ml: '“സാർ, സുരക്ഷിതമായ അകലത്തിൽ നിന്നാണ് ഞാൻ റെക്കോർഡ് ചെയ്യുന്നത്, നിങ്ങളുടെ ഡ്യൂട്ടി തടസ്സപ്പെടുത്തുന്നില്ല. ആർട്ടിക്കിൾ 19(1)(a) പ്രകാരം ഇത് അനുവദനീയമാണ്.”',
      pa: '“ਸਰ, ਮੈਂ ਸੁਰੱਖਿਅਤ ਦੂਰੀ ਤੋਂ ਰਿਕਾਰਡਿੰਗ ਕਰ ਰਿਹਾ ਹਾਂ ਤੇ ਤੁਹਾਡੇ ਕੰਮ ਵਿੱਚ ਕੋਈ ਰੁਕਾਵਟ ਨਹੀਂ ਪਾ ਰਿਹਾ। ਧਾਰਾ 19(1)(a) ਤਹਿਤ ਇਹ ਜਾਇਜ਼ ਹੈ।”',
      hinglish: '“Sir, main safe distance se bina obstruction ke record kar raha hoon. Public servant ko public space mein record karna Article 19(1)(a) ke under protected hai.”',
    },
    legalBasis: 'Article 19(1)(a) Freedom of Speech & Public Servant Transparency',
    tip: 'Never enter the officer’s personal space or block traffic.',
    translations: {
      hi: {
        scenario: 'पुलिस अधिकारी वीडियो बनाने पर केस करने की धमकी दे',
        policeAsks: '“कैमरा बंद करो! पुलिस की वीडियो बनाने की हिम्मत कैसे हुई?”',
        tip: 'ऑफिसर के बिल्कुल पास न जाएं, ट्रैफिक न रोकें, सुरक्षित दूरी से रिकॉर्ड करें।'
      }
    }
  },
  {
    id: 'script-home-search',
    scenario: 'Police arrive at your doorstep demanding to search the premises',
    category: 'search',
    policeAsks: '“Open the door, we are searching your house right now!”',
    citizenResponseEnglish: '“Good day Officer. Please show the Search Warrant issued by the Magistrate, or the Section 165 CrPC recording of emergency grounds. We also request two independent neighbors as Panch witnesses, and that officers allow a personal search before entering.”',
    citizenResponseHindi: '“सर, कृपया मजिस्ट्रेट द्वारा जारी सर्च वारंट दिखाएं। धारा 100 सीआरपीसी के तहत दो स्थानीय स्वतंत्र गवाहों की मौजूदगी में और आपकी तलाशी के बाद ही घर की तलाशी शुरू की जा सकती है।”',
    citizenResponses: {
      en: '“Good day Officer. Please show the Search Warrant issued by the Magistrate, or the Section 165 CrPC recording of emergency grounds. We also request two independent neighbors as Panch witnesses, and that officers allow a personal search before entering.”',
      hi: '“सर, कृपया मजिस्ट्रेट द्वारा जारी सर्च वारंट दिखाएं। धारा 100 सीआरपीसी के तहत दो स्थानीय स्वतंत्र गवाहों की मौजूदगी में और आपकी तलाशी के बाद ही घर की तलाशी शुरू की जा सकती है।”',
      te: '“సార్, దయచేసి సెర్చ్ వారెంట్ చూపించండి. సెక్షన్ 100 CrPC ప్రకారం ఇద్దరు స్వతంత్ర సాక్షుల సమక్షంలో మాత్రమే ఇంటి సోదాలు జరగాలి.”',
      ta: '“ஐயா, தயவுசெய்து நீதிமன்ற தேடுதல் வாரண்ட்டைக் காட்டுங்கள். பிரிவு 100-ன் படி இரண்டு உள்ளூர் சாட்சிகள் முன்னிலையில் மட்டுமே சோதனை செய்ய முடியும்.”',
      bn: '“স্যার, অনুগ্রহ করে সার্চ ওয়ারেন্ট দেখান। ধারা ১০০ সিআরপিসি অনুযায়ী দুজন স্বাধীন সাক্ষীর উপস্থিতিতে তল্লাশি করতে হবে।”',
      mr: '“साहेब, कृपया सर्च वॉरंट दाखवा. कलम १०० नुसार दोन स्थानिक पंच साक्षीदारांच्या उपस्थितीतच घराची झडती घेता येईल.”',
      gu: '“સાહેબ, કૃપા કરીને સર્ચ વોરંટ બતાવો. કલમ ૧૦૦ મુજબ બે સ્વતંત્ર સાક્ષીઓની હાજરીમાં જ તપાસ થઈ શકે છે.”',
      kn: '“ಸರ್, ದಯವಿಟ್ಟು ಸರ್ಚ್ ವಾರಂಟ್ ತೋರಿಸಿ. ಸೆಕ್ಷನ್ 100 ರ ಪ್ರಕಾರ ಇಬ್ಬರು ಸ್ವತಂತ್ರ ಸಾಕ್ಷಿಗಳ ಸಮ್ಮುಖದಲ್ಲಿ ಮಾತ್ರ ಶೋಧನೆ ನಡೆಸಬಹುದು.”',
      ml: '“സാർ, ദയവായി സെർച്ച് വാറന്റ് കാണിക്കുക. സെക്ഷൻ 100 പ്രകാരം രണ്ട് സാക്ഷികളുടെ സാന്നിധ്യത്തിൽ മാത്രമേ വീട് പരിശോധിക്കാൻ പാടുള്ളൂ.”',
      pa: '“ਸਰ, ਕਿਰਪਾ ਕਰਕੇ ਸਰਚ ਵਾਰੰਟ ਦਿਖਾਓ। ਧਾਰਾ 100 ਅਨੁਸਾਰ ਦੋ ਆਜ਼ਾਦ ਗਵਾਹਾਂ ਦੀ ਹਾਜ਼ਰੀ ਵਿੱਚ ਹੀ ਤਲਾਸ਼ੀ ਹੋ ਸਕਦੀ ਹੈ।”',
      hinglish: '“Sir, please Magistrate dwara issued Search Warrant dikhayein. Section 100 CrPC ke under do independent witnesses ki presence mandatory hai.”',
    },
    legalBasis: 'Section 100 & Section 165 CrPC',
    tip: 'Keep calm and ensure a Panchanama inventory list is made for every single article touched.',
    translations: {
      hi: {
        scenario: 'पुलिस घर का दरवाजा खटखटाकर तुरंत तलाशी लेने को कहे',
        policeAsks: '“दरवाजा खोलो, हम अभी तुम्हारे घर की तलाशी लेंगे!”',
        tip: 'घबराएं नहीं, स्वतंत्र पड़ोसियों को बुलाएं और हर वस्तु की जब्ती सूची (Panchanama) बनवाएं।'
      }
    }
  },
  {
    id: 'script-traffic-key-snatch',
    scenario: 'Traffic cop reaches inside vehicle to snatch your ignition key or threatens to tow while you are seated',
    category: 'traffic',
    policeAsks: '“Switch off the engine! Give me the keys or I will tow your vehicle right now!”',
    citizenResponseEnglish: '“Officer, under the Motor Vehicles Act and police conduct rules, police have no legal authority to snatch keys from a vehicle or tow while an occupant is seated inside (Sec 127 MVA). Here are my valid digital documents on DigiLocker/mParivahan.”',
    citizenResponseHindi: '“सर, मोटर वाहन अधिनियम और पुलिस आचरण नियमों के अनुसार आप गाड़ी की चाबी नहीं छीन सकते और न ही अंदर बैठे व्यक्ति के साथ गाड़ी टो कर सकते हैं। मैं डिजीलॉकर पर वैध दस्तावेज दिखा रहा हूँ।”',
    citizenResponses: {
      en: '“Officer, under the Motor Vehicles Act and police conduct rules, police have no legal authority to snatch keys from a vehicle or tow while an occupant is seated inside (Sec 127 MVA). Here are my valid digital documents on DigiLocker/mParivahan.”',
      hi: '“सर, मोटर वाहन अधिनियम और पुलिस आचरण नियमों के अनुसार आप गाड़ी की चाबी नहीं छीन सकते और न ही अंदर बैठे व्यक्ति के साथ गाड़ी टो कर सकते हैं। मैं डिजीलॉकर पर वैध दस्तावेज दिखा रहा हूँ।”',
      te: '“సార్, మోటార్ వెహికల్ యాక్ట్ ప్రకారం వాహనం కీ లాక్కోవడం లేదా లోపల కూర్చున్నప్పుడు టో చేయడం చట్టవిరుద్ధం. నేను డిజిలాకర్‌లో పత్రాలు చూపిస్తున్నాను.”',
      ta: '“ஐயா, மோட்டார் வாகனச் சட்டப்படி சாவியைப் பறிக்கவோ அல்லது ஆட்கள் உள்ளே இருக்கும்போது வண்டியை இழுத்துச் செல்லவோ உங்களுக்கு அதிகாரமில்லை.”',
      bn: '“স্যার, মোটর ভেহিকল আইন অনুযায়ী গাড়ির চাবি কেড়ে নেওয়া বা ভেতরে চালক থাকা অবস্থায় টো করা বেআইনি। আমি ডিজিলকার দেখাচ্ছি।”',
      mr: '“साहेब, मोटार वाहन कायद्यानुसार गाडीची चावी हिसकावून घेणे किंवा आत बसलेले असताना टो करणे बेकायदेशीर आहे. मी डिजीलाँकरवर कागदपत्रे दाखवत आहे.”',
      gu: '“સાહેબ, મોટર વ્હીકલ એક્ટ મુજબ વાહનની ચાવી છીનવી લેવી કે અંદર બેઠા હોઈએ ત્યારે ટો કરવું ગેરકાયદેસર છે.”',
      kn: '“ಸರ್, ಮೋಟಾರು ವಾಹನ ಕಾಯ್ದೆಯಡಿ ಕೀ ಕಿತ್ತುಕೊಳ್ಳುವುದು ಅಥವಾ ಒಳಗೆ ಕುಳಿತಿರುವಾಗ ವಾಹನ ಟೋ ಮಾಡುವುದು ಅಕ್ರಮ. ನಾನು ಡಿಜಿಲಾಕರ್‌ನಲ್ಲಿ ದಾಖಲೆ ತೋರಿಸುತ್ತಿದ್ದೇನೆ.”',
      ml: '“സാർ, മോട്ടോർ വാഹന നിയമപ്രകാരം താക്കോൽ ഊരിയെടുക്കാനോ ആളുകൾ ഉള്ളിലിരിക്കുമ്പോൾ വാഹനം ടോ ചെയ്യാനോ പാടില്ല.”',
      pa: '“ਸਰ, ਮੋਟਰ ਵਹੀਕਲ ਐਕਟ ਅਨੁਸਾਰ ਚਾਬੀ ਖੋਹਣਾ ਜਾਂ ਅੰਦਰ ਬੈਠੇ ਹੋਣ ਵੇਲੇ ਗੱਡੀ ਟੋਅ ਕਰਨਾ ਗੈਰ-ਕਾਨੂੰਨੀ ਹੈ।”',
      hinglish: '“Sir, Motor Vehicles Act ke under key snatch karna aur seated person ke sath tow karna strictly prohibited hai. Main DigiLocker documents verify karwa raha hoon.”',
    },
    legalBasis: 'Motor Vehicles Act Section 127, IT Act Sec 4 & MoRTH Circulars',
    tip: 'Keep your car windows rolled up with a 2-inch crack to communicate calmly.',
    translations: {
      hi: {
        scenario: 'ट्रैफिक पुलिस गाड़ी की चाबी निकाले या अंदर बैठे गाड़ी टो करने की धमकी दे',
        policeAsks: '“गाड़ी बंद करो, चाबी दो वरना अभी गाड़ी क्रेन से उठवा दूंगा!”',
        tip: 'खिड़की को केवल 2 इंच खोलकर बात करें और डिजीलॉकर से कागजात दिखाएं।'
      }
    }
  },
  {
    id: 'script-informal-summons',
    scenario: 'Police officer calls you on phone: “Come to the police station immediately or face consequences”',
    category: 'arrest',
    policeAsks: '“Tu kal subah 10 baje thane aa, warna ghar se utha lenge!”',
    citizenResponseEnglish: '“Officer, under Section 35(3) of the Bharatiya Nagarik Suraksha Sanhita (BNSS) / Section 41A CrPC, please issue a written Notice of Appearance specifying the matter and GD/FIR number. I will gladly appear with my legal counsel upon receiving the formal notice.”',
    citizenResponseHindi: '“सर, बीएनएसएस की धारा 35(3) (पूर्व 41A) के तहत कृपया मुझे लिखित नोटिस (Notice of Appearance) और एफआईआर/जीडी नंबर भेजें। औपचारिक नोटिस मिलते ही मैं अपने वकील के साथ उपस्थित हो जाऊंगा।”',
    citizenResponses: {
      en: '“Officer, under Section 35(3) of the Bharatiya Nagarik Suraksha Sanhita (BNSS) / Section 41A CrPC, please issue a written Notice of Appearance specifying the matter and GD/FIR number. I will gladly appear with my legal counsel upon receiving the formal notice.”',
      hi: '“सर, बीएनएसएस की धारा 35(3) (पूर्व 41A) के तहत कृपया मुझे लिखित नोटिस (Notice of Appearance) और एफआईआर/जीडी नंबर भेजें। औपचारिक नोटिस मिलते ही मैं अपने वकील के साथ उपस्थित हो जाऊंगा।”',
      te: '“సార్, BNSS సెక్షన్ 35(3) కింద రాతపూర్వక నోటీసు పంపండి. అధికారిక నోటీసు అందిన వెంటనే నేను న్యాయవాదితో కలిసి హాజరవుతాను.”',
      ta: '“ஐயா, சட்டப்படி பிரிவு 35(3) BNSS-ன் கீழ் எழுத்துப்பூர்வமான முறையான நோட்டீஸ் அனுப்பவும். அதன் பிறகு வழக்கறிஞருடன் நேரில் வருகிறேன்.”',
      bn: '“স্যার, বিএনএসএস ধারা ৩৫(৩) অনুযায়ী আমাকে লিখিত নোটিশ পাঠান। লিখিত নোটিশ পেলে আমি আমার আইনজীবীর সাথে উপস্থিত হব।”',
      mr: '“साहेब, BNSS कलम ३५(३) नुसार मला लेखी नोटीस पाठवा. औपचारिक नोटीस मिळाल्यावर मी माझ्या वकीलासह उपस्थित राहीन.”',
      gu: '“સાહેબ, કલમ ૩૫(૩) હેઠળ લેખિત નોટિસ મોકલો. નોટિસ મળ્યા પછી હું મારા વકીલ સાથે હાજર થઈશ.”',
      kn: '“ಸರ್, ಬಿಎನ್‌ಎಸ್‌ಎಸ್ ಸೆಕ್ಷನ್ 35(3) ಅಡಿಯಲ್ಲಿ ಲಿಖಿತ ನೋಟಿಸ್ ಕಳುಹಿಸಿ. ನೋಟಿಸ್ ಸಿಕ್ಕ ನಂತರ ನನ್ನ ವಕೀಲರೊಂದಿಗೆ ಬರುತ್ತೇನೆ.”',
      ml: '“സാർ, ബിഎൻഎസ്എസ് സെക്ഷൻ 35(3) പ്രകാരം രേഖാമൂലമുള്ള നോട്ടീസ് അയക്കുക. ഔദ്യോഗിക നോട്ടീസ് കിട്ടിയാൽ അഭിഭാഷകനോടൊപ്പം ഹാജരാകാം.”',
      pa: '“ਸਰ, BNSS ਦੀ ਧਾਰਾ 35(3) ਅਧੀਨ ਲਿਖਤੀ ਨੋਟਿਸ ਭੇਜੋ। ਨੋਟਿਸ ਮਿਲਣ ਤੇ ਮੈਂ ਵਕੀਲ ਨਾਲ ਹਾਜ਼ਰ ਹੋਵਾਂਗਾ।”',
      hinglish: '“Sir, Section 35(3) BNSS ke under formal written Notice of Appearance aur FIR/GD number issue karein. Formal notice aate hi main lawyer ke saath present ho jaunga.”',
    },
    legalBasis: 'Section 35(3) BNSS 2023 & Arnesh Kumar Guidelines',
    tip: 'Never go alone to a police station on an unrecorded verbal phone summons.',
    translations: {
      hi: {
        scenario: 'पुलिस फोन करके धमकाए कि तुरंत थाने हाजिर हो जाओ',
        policeAsks: '“थाने आओ तुरंत, नहीं तो घर से उठा लेंगे!”',
        tip: 'फोन कॉल पर कभी अकेले थाने न जाएं। हमेशा लिखित नोटिस 35(3) BNSS की मांग करें।'
      }
    }
  },
  {
    id: 'script-coerced-blank-paper',
    scenario: 'Police officers threaten you to sign blank papers or pre-typed self-incriminating confessions',
    category: 'fundamental_rights',
    policeAsks: '“Sign this confession paper right now or we will send you to jail!”',
    citizenResponseEnglish: '“Officer, under Article 20(3) of the Constitution and Section 23 of Bharatiya Sakshya Adhiniyam (BSA), no person can be compelled to be a witness against themselves, and police confessions are inadmissible in court. I reserve my right to consult my advocate.”',
    citizenResponseHindi: '“सर, संविधान के आर्टिकल 20(3) और भारतीय साक्ष्य अधिनियम की धारा 23 के तहत किसी को खुद के खिलाफ गवाही या सादे कागज पर दस्तखत के लिए मजबूर नहीं किया जा सकता। मैं केवल अपने वकील की मौजूदगी में ही बयान दूंगा।”',
    citizenResponses: {
      en: '“Officer, under Article 20(3) of the Constitution and Section 23 of Bharatiya Sakshya Adhiniyam (BSA), no person can be compelled to be a witness against themselves, and police confessions are inadmissible in court. I reserve my right to consult my advocate.”',
      hi: '“सर, संविधान के आर्टिकल 20(3) और भारतीय साक्ष्य अधिनियम की धारा 23 के तहत किसी को खुद के खिलाफ गवाही या सादे कागज पर दस्तखत के लिए मजबूर नहीं किया जा सकता। मैं केवल अपने वकील की मौजूदगी में ही बयान दूंगा।”',
      te: '“సార్, రాజ్యాంగంలోని ఆర్టికల్ 20(3) ప్రకారం పోలీసుల ముందు ఇచ్చే ఒప్పుకోలు చెల్లదు. నేను న్యాయవాది సమక్షంలో మాత్రమే సంతకం చేస్తాను.”',
      ta: '“ஐயா, அரசியலமைப்பு பிரிவு 20(3)-ன் படி ஒப்புதல் வாக்குமூலத்தில் கட்டாயப்படுத்தி கையெழுத்து வாங்க முடியாது. நீதிமன்றத்தில் இது செல்லாது.”',
      bn: '“স্যার, সংবিধানের ২০(৩) অনুচ্ছেদ অনুযায়ী পুলিশি জবানবন্দি আদালতে অগ্রহণযোগ্য। আমি আইনজীবীর উপস্থিতি ছাড়া স্বাক্ষর করব না।”',
      mr: '“साहेब, कलम २०(३) नुसार कोऱ्या कागदावर स्वाक्षरी करण्यास सक्ती करता येत नाही. मी केवळ माझ्या वकिलांच्या उपस्थितीतच साक्ष देईन.”',
      gu: '“સાહેબ, બંધારણની કલમ ૨૦(૩) મુજબ કોઈને પોતાની વિરુદ્ધ કબૂલાત કરવા દબાણ કરી શકાતું નથી.”',
      kn: '“ಸರ್, ವಿಧಿ 20(3) ರ ಪ್ರಕಾರ ಪೊಲೀಸ್ ಎದುರು ನೀಡುವ ಹೇಳಿಕೆ ನ್ಯಾಯಾಲಯದಲ್ಲಿ ಮಾನ್ಯವಲ್ಲ. ವಕೀಲರಿಲ್ಲದೆ ನಾನು ಸಹಿ ಹಾಕುವುದಿಲ್ಲ.”',
      ml: '“സാർ, ഭരണഘടനയുടെ ആർട്ടിക്കിൾ 20(3) പ്രകാരം സ്വയം കുറ്റസമ്മതം നടത്താൻ നിർബന്ധിക്കാൻ കഴിയില്ല.”',
      pa: '“ਸਰ, ਧਾਰਾ 20(3) ਅਧੀਨ ਪੁਲਿਸ ਹਿਰਾਸਤ ਵਿੱਚ ਲਿਆ ਬਿਆਨ ਅਦਾਲਤ ਵਿੱਚ ਜਾਇਜ਼ ਨਹੀਂ ਹੈ।”',
      hinglish: '“Sir, Article 20(3) and Section 23 BSA ke under forced confession inadmissible hai. Main advocate ke absence mein blank paper par sign nahi karunga.”',
    },
    legalBasis: 'Article 20(3) Constitution & Section 23 Bharatiya Sakshya Adhiniyam (BSA)',
    tip: 'If forced under duress, immediately retract the statement before the Judicial Magistrate within 24 hours.',
    translations: {
      hi: {
        scenario: 'पुलिस सादे कागज पर या जुर्म कबूलने के लिए जबरन हस्ताक्षर कराने का दबाव बनाए',
        policeAsks: '“इस कागज पर दस्तखत कर, नहीं तो अंदर कर देंगे!”',
        tip: 'मजिस्ट्रेट के सामने पहली पेशी पर ही चिल्लाकर बताएं कि दस्तखत जबरन लिए गए थे।'
      }
    }
  },
  {
    id: 'script-moral-policing',
    scenario: 'Police harass consenting adult couple in public park or hotel and threaten to call parents',
    category: 'women_child',
    policeAsks: '“Who is this with you? Are you married? Give me your parents phone number!”',
    citizenResponseEnglish: '“Officer, we are consenting adults. Under Article 21 and the Supreme Court ruling in Shafin Jahan, adults have the fundamental right to associate and socialize peacefully. There is no law requiring marriage certificates or parent verification in public.”',
    citizenResponseHindi: '“सर, हम दोनों बालिग (वयस्क) नागरिक हैं। सुप्रीम कोर्ट के फैसलों और आर्टिकल 21 के तहत शांतिपूर्वक साथ बैठना या घूमना हमारा मौलिक अधिकार है। किसी कानून में माता-पिता को फोन करने या शादी का सबूत मांगने का प्रावधान नहीं है।”',
    citizenResponses: {
      en: '“Officer, we are consenting adults. Under Article 21 and the Supreme Court ruling in Shafin Jahan, adults have the fundamental right to associate and socialize peacefully. There is no law requiring marriage certificates or parent verification in public.”',
      hi: '“सर, हम दोनों बालिग (वयस्क) नागरिक हैं। सुप्रीम कोर्ट के फैसलों और आर्टिकल 21 के तहत शांतिपूर्वक साथ बैठना या घूमना हमारा मौलिक अधिकार है। किसी कानून में माता-पिता को फोन करने या शादी का सबूत मांगने का प्रावधान नहीं है।”',
      te: '“సార్, మేము వయోజనులం. ఆర్టికల్ 21 ప్రకారం శాంతియుతంగా కలిసి ఉండటం మా ప్రాథమిక హక్కు. తల్లిదండ్రులకు ఫోన్ చేయమని చట్టంలో లేదు.”',
      ta: '“ஐயா, நாங்கள் இருவரும் மேஜர். அரசியலமைப்பு பிரிவு 21-ன் படி ஒன்றாக நடமாட எங்களுக்கு முழு சுதந்திரம் உள்ளது.”',
      bn: '“স্যার, আমরা প্রাপ্তবয়স্ক। সংবিধানের ২১ অনুচ্ছেদ অনুযায়ী শান্তিতে মেলামেশা করা আমাদের অধিকার। কোনো আইন ভঙ্গ হয়নি।”',
      mr: '“साहेब, आम्ही सज्ञान नागरिक आहोत. कलम २१ नुसार शांततेत फिरणे हा आमचा मूलभूत हक्क आहे. पालकांना फोन करण्याचा नियम नाही.”',
      gu: '“સાહેબ, અમે પુખ્ત વયના છીએ. કલમ ૨૧ હેઠળ શાંતિથી સાથે રહેવું અમારો મૂળભૂત અધિકાર છે.”',
      kn: '“ಸರ್, ನಾವಿಬ್ಬರೂ ವಯಸ್ಕರು. ವಿಧಿ 21 ರ ಪ್ರಕಾರ ಒಟ್ಟಿಗೆ ಓಡಾಡುವುದು ನಮ್ಮ ಸಾಂವಿಧಾನಿಕ ಹಕ್ಕು.”',
      ml: '“സാർ, ഞങ്ങൾ പ്രായപൂർത്തിയായവരാണ്. ആർട്ടിക്കിൾ 21 പ്രകാരം ഒരുമിച്ചു സഞ്ചരിക്കാൻ ഞങ്ങൾക്ക് അവകാശമുണ്ട്.”',
      pa: '“ਸਰ, ਅਸੀਂ ਬਾਲਗ ਹਾਂ। ਧਾਰਾ 21 ਅਧੀਨ ਇਕੱਠੇ ਘੁੰਮਣਾ ਸਾਡਾ ਸੰਵਿਧਾਨਕ ਅਧਿਕਾਰ ਹੈ।”',
      hinglish: '“Sir, hum dono consenting adults hain. Supreme Court ke judgments aur Article 21 ke under adults ko freely roam karne ka right hai. Parents ko call karne ka koi legal provision nahi hai.”',
    },
    legalBasis: 'Article 21 Constitution & Shafin Jahan v. Asokan K.M. (2018)',
    tip: 'Stay composed, do not pay unauthorized on-the-spot hush money, and note officer names.',
    translations: {
      hi: {
        scenario: 'पार्क या होटल में बालिग जोड़े को पुलिस रोके और माता-पिता को फोन करने की धमकी दे',
        policeAsks: '“शादीशुदा हो? चलो अपने माता-पिता का नंबर दो!”',
        tip: 'घबराएं नहीं, रिश्वत न दें। शांतिपूर्वक बताएं कि वयस्क नागरिकों को साथ घूमने की आजादी है।'
      }
    }
  }
];


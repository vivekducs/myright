import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckSquare, Square, AlertOctagon, Printer, Share2, Scale, Info, Volume2 } from 'lucide-react';
import { ThreeDCard } from './ThreeDCard';
import { SupportedLanguage } from '../types';
import { getT, LANGUAGE_OPTIONS } from '../data/translations';

interface DKBasuCardProps {
  language: SupportedLanguage;
}

export const DKBasuCard: React.FC<DKBasuCardProps> = ({ language }) => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [playingNum, setPlayingNum] = useState<number | null>(null);

  const t = getT(language);
  const currentLangObj = LANGUAGE_OPTIONS.find((l) => l.code === language) || LANGUAGE_OPTIONS[0];

  const guidelines = [
    {
      num: 1,
      title: 'Accurate Name & Rank Badge',
      desc: 'The arresting police personnel must wear accurate, visible, and clear identification name tags with their designations.',
      translations: {
        hi: {
          title: 'वर्दी पर नाम व पद का स्पष्ट बैच (Name Tag)',
          desc: 'गिरफ्तारी या पूछताछ करने वाले सभी पुलिसकर्मियों की वर्दी पर नाम और पद का स्पष्ट एवं दृश्यमान बिल्ला होना अनिवार्य है।'
        },
        te: {
          title: 'ఖచ్చితమైన పేరు మరియు హోదా బ్యాడ్జ్',
          desc: 'అరెస్ట్ చేసే పోలీసు అధికారులు తమ పేరు మరియు హోదా స్పష్టంగా కనిపించే బ్యాడ్జ్‌ను తప్పనిసరిగా ధరించాలి.'
        },
        ta: {
          title: 'சரியான பெயர் மற்றும் பதவி பேட்ஜ்',
          desc: 'கைது செய்யும் காவலர்கள் தங்கள் பெயர் மற்றும் பதவியை தெளிவாகக் காட்டும் அடையாள வில்லை அணிந்திருக்க வேண்டும்.'
        },
        bn: {
          title: 'সঠিক নাম এবং পদমর্যাদার ব্যাজ',
          desc: 'গ্রেপ্তারকারী পুলিশ কর্মীদের তাদের নাম ও পদবী সম্বলিত স্পষ্ট পরিচয়পত্র বা নেমপ্লেট পরা বাধ্যতামূলক।'
        },
        mr: {
          title: 'नाव आणि हुद्द्याचा स्पष्ट बॅज',
          desc: 'अटक करणाऱ्या पोलिस कर्मचाऱ्यांच्या गणवेशावर त्यांचे नाव आणि हुद्दा स्पष्टपणे दिसणे बंधनकारक आहे.'
        },
        gu: {
          title: 'સ્પષ્ટ નામ અને પદનો બેજ',
          desc: 'ધરપકડ કરનાર પોલીસકર્મીઓએ તેમના નામ અને પદ દર્શાવતો સ્પષ્ટ બેજ પહેરવો ફરજિયાત છે.'
        },
        kn: {
          title: 'ಸ್ಪಷ್ಟ ಹೆಸರು ಮತ್ತು ಹುದ್ದೆಯ ಬ್ಯಾಡ್ಜ್',
          desc: 'ಬಂಧಿಸುವ ಪೊಲೀಸ್ ಸಿಬ್ಬಂದಿ ತಮ್ಮ ಹೆಸರು ಮತ್ತು ಹುದ್ದೆಯನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ತೋರಿಸುವ ಬ್ಯಾಡ್ಜ್ ಧರಿಸಿರಬೇಕು.'
        },
        ml: {
          title: 'വ്യക്തമായ പേരും പദവി ബാഡ്ജും',
          desc: 'അറസ്റ്റ് ചെയ്യുന്ന പോലീസ് ഉദ്യോഗസ്ഥർ തങ്ങളുടെ പേരും പദവിയും വ്യക്തമായി കാണിക്കുന്ന ബാഡ്ജ് ധരിച്ചിരിക്കണം.'
        },
        pa: {
          title: 'ਸਪਸ਼ਟ ਨਾਮ ਅਤੇ ਅਹੁਦੇ ਦਾ ਬੈਜ',
          desc: 'ਗ੍ਰਿਫ਼ਤਾਰ ਕਰਨ ਵਾਲੇ ਪੁਲਿਸ ਮੁਲਾਜ਼ਮਾਂ ਦੀ ਵਰਦੀ \'ਤੇ ਨਾਮ ਅਤੇ ਅਹੁਦੇ ਦਾ ਬੈਜ ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ।'
        },
        hinglish: {
          title: 'Accurate Name & Rank Badge',
          desc: 'Arrest karne wale police officer ki uniform par name tag aur rank designation clearly visible hona mandatory hai.'
        }
      }
    },
    {
      num: 2,
      title: 'Preparation of Official Arrest Memo',
      desc: 'Police MUST prepare an Arrest Memo at the spot stating the exact time and date of arrest. It must be attested by at least one independent witness and counter-signed by the arrested person.',
      translations: {
        hi: {
          title: 'घटनास्थल पर आधिकारिक अरेस्ट मेमो तैयार करना',
          desc: 'पुलिस को मौके पर ही अरेस्ट मेमो तैयार करना होगा जिसमें गिरफ्तारी की सटीक तारीख व समय दर्ज हो और कम से कम एक स्थानीय स्वतंत्र गवाह व गिरफ्तार व्यक्ति के हस्ताक्षर हों।'
        },
        te: {
          title: 'అధికారిక అరెస్ట్ మెమో తయారీ',
          desc: 'అరెస్ట్ చేసిన వెంటనే సమయం, తేదీ పేర్కొంటూ అరెస్ట్ మెమో తయారు చేసి, ఒక స్వతంత్ర సాక్షి మరియు అరెస్ట్ అయిన వ్యక్తి సంతకం తీసుకోవాలి.'
        },
        ta: {
          title: 'அதிகாரப்பூர்வ கைது மெமோ தயாரித்தல்',
          desc: 'கைது செய்யப்படும் இடத்தில் தேதி, நேரம் குறிப்பிட்டு மெமோ தயாரிக்கப்பட்டு, சாட்சி மற்றும் கைதானவரின் கையொப்பம் பெறப்பட வேண்டும்.'
        },
        bn: {
          title: 'ঘটনাস্থলে অফিসিয়াল অ্যারেস্ট মেমো তৈরি',
          desc: 'গ্রেপ্তারের সময় ও তারিখ উল্লেখ করে মেমো তৈরি করতে হবে এবং স্বাধীন সাক্ষীর স্বাক্ষর নিতে হবে।'
        },
        mr: {
          title: 'घटनास्थळी अधिकृत अरेस्ट मेमो तयार करणे',
          desc: 'अटकेची तारीख व वेळ नमूद करून एका स्वतंत्र साक्षीदाराच्या सहीसह अरेस्ट मेमो तयार करणे बंधनकारक आहे.'
        },
        gu: {
          title: 'અધિકૃત અરેસ્ટ મેમો બનાવવો',
          desc: 'ધરપકડના સ્થળે જ તારીખ અને સમય નોંધીને સ્વતંત્ર સાક્ષીની સહી સાથે અરેસ્ટ મેમો બનાવવો જરૂરી છે.'
        },
        kn: {
          title: 'ಅಧಿಕೃತ ಅರೆಸ್ಟ್ ಮೆಮೊ ತಯಾರಿಕೆ',
          desc: 'ಸ್ಥಳದಲ್ಲೇ ಬಂಧನದ ಸಮಯ ಮತ್ತು ದಿನಾಂಕ ನಮೂದಿಸಿ ಸಾಕ್ಷಿಯ ಸಹಿಯೊಂದಿಗೆ ಅರೆಸ್ಟ್ ಮೆಮೊ ತಯಾರಿಸಬೇಕು.'
        },
        ml: {
          title: 'ഔദ്യോഗിക അറസ്റ്റ് മെമ്മോ തയ്യാറാക്കൽ',
          desc: 'അറസ്റ്റ് ചെയ്ത സമയം, തീയതി എന്നിവ രേഖപ്പെടുത്തി സാക്ഷിയുടെ ഒപ്പോടെ അറസ്റ്റ് മെമ്മോ തയ്യാറാക്കണം.'
        },
        pa: {
          title: 'ਮੌਕੇ \'ਤੇ ਅਰੈਸਟ ਮੈਮੋ ਤਿਆਰ ਕਰਨਾ',
          desc: 'ਗ੍ਰਿਫ਼ਤਾਰੀ ਦਾ ਸਮਾਂ ਅਤੇ ਮਿਤੀ ਦਰਜ ਕਰਕੇ ਗਵਾਹ ਦੇ ਦਸਤਖ਼ਤਾਂ ਨਾਲ ਅਰੈਸਟ ਮੈਮੋ ਬਣਾਉਣਾ ਲਾਜ਼ਮੀ ਹੈ।'
        },
        hinglish: {
          title: 'Official Arrest Memo preparation on the spot',
          desc: 'Police ko spot par hi date & time ke saath Arrest Memo banana hoga jisme local witness aur arrestee ke sign honge.'
        }
      }
    },
    {
      num: 3,
      title: 'Right to Inform Family / Friend',
      desc: 'The arrested person is entitled to have one friend, relative, or person interested in their welfare informed of their arrest and place of detention within 8 to 12 hours.',
      translations: {
        hi: {
          title: 'परिवार या मित्र को तुरंत सूचना देने का अधिकार',
          desc: 'गिरफ्तार व्यक्ति को अधिकार है कि उसकी गिरफ्तारी और हिरासत स्थल की सूचना 8 से 12 घंटे के भीतर उसके किसी रिश्तेदार या मित्र को दी जाए।'
        },
        te: {
          title: 'కుటుంబానికి లేదా స్నేహితునికి సమాచారం ఇచ్చే హక్కు',
          desc: 'అరెస్ట్ మరియు కస్టడీ ప్రదేశం గురించి 8 నుండి 12 గంటలలోపు కుటుంబ సభ్యులకు లేదా స్నేహితులకు తెలియజేయాలి.'
        },
        ta: {
          title: 'குடும்பத்தினருக்கு தகவல் தெரிவிக்கும் உரிமை',
          desc: 'கைது மற்றும் காவல் வைக்கப்பட்டுள்ள இடம் குறித்து 8 முதல் 12 மணி நேரத்திற்குள் குடும்பத்தினர் அல்லது நண்பருக்கு தெரிவிக்க வேண்டும்.'
        },
        bn: {
          title: 'পরিবার বা বন্ধুকে অবহিত করার অধিকার',
          desc: '৮ থেকে ১২ ঘণ্টার মধ্যে গ্রেপ্তারের স্থান ও তথ্য পরিবার বা বন্ধুকে জানাতে হবে।'
        },
        mr: {
          title: 'कुटुंबीय किंवा मित्राला कळवण्याचा हक्क',
          desc: '८ ते १२ तासांच्या आत अटक आणि कोठडीच्या ठिकाणाची माहिती नातेवाईकांना देणे आवश्यक आहे.'
        },
        gu: {
          title: 'પરિવાર કે મિત્રને જાણ કરવાનો અધિકાર',
          desc: '૮ થી ૧૨ કલાકમાં ધરપકડ અને કસ્ટડીના સ્થળની જાણ પરિવારજનને કરવી ફરજિયાત છે.'
        },
        kn: {
          title: 'ಕುಟುಂಬ ಅಥವಾ ಸ್ನೇಹಿತರಿಗೆ ಮಾಹಿತಿ ನೀಡುವ ಹಕ್ಕು',
          desc: '8 ರಿಂದ 12 ಗಂಟೆಗಳ ಒಳಗೆ ಬಂಧನ ಮತ್ತು ಸ್ಥಳದ ಮಾಹಿತಿಯನ್ನು ಕುಟುಂಬಕ್ಕೆ ತಿಳಿಸಬೇಕು.'
        },
        ml: {
          title: 'കുടുംബത്തെയോ സുഹൃത്തിനെയോ അറിയിക്കാനുള്ള അവകാശം',
          desc: '8 മുതൽ 12 മണിക്കൂറിനുള്ളിൽ അറസ്റ്റ് വിവരവും സ്ഥലവും ബന്ധുക്കളെ അറിയിക്കണം.'
        },
        pa: {
          title: 'ਪਰਿਵਾਰ ਜਾਂ ਦੋਸਤ ਨੂੰ ਸੂਚਿਤ ਕਰਨ ਦਾ ਅਧਿਕਾਰ',
          desc: '8 ਤੋਂ 12 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ ਗ੍ਰਿਫ਼ਤਾਰੀ ਦੀ ਸੂਚਨਾ ਪਰਿਵਾਰ ਨੂੰ ਦੇਣੀ ਲਾਜ਼ਮੀ ਹੈ।'
        },
        hinglish: {
          title: 'Right to inform family or lawyer',
          desc: 'Arrestee ke family ya friend ko 8 se 12 hours ke andar arrest aur detention station ki info dena mandatory hai.'
        }
      }
    },
    {
      num: 4,
      title: 'Entry in Station General Diary (GD)',
      desc: 'An entry must be made in the official police station diary stating who was informed of the arrest and the names of police officers who have custody of the arrestee.',
      translations: {
        hi: {
          title: 'थाने की जनरल डायरी (GD) में अनिवार्य प्रविष्टि',
          desc: 'थाने के रोजनामचे (GD) में दर्ज होना चाहिए कि किसे सूचना दी गई और किन पुलिसकर्मियों के पास आरोपी की कस्टडी है।'
        },
        te: {
          title: 'స్టేషన్ జనరల్ డైరీ (GD) లో నమోదు',
          desc: 'అరెస్ట్ సమాచారం ఎవరికి ఇచ్చారు మరియు ఏ పోలీసుల కస్టడీలో ఉన్నారో స్టేషన్ డైరీలో రాయాలి.'
        },
        ta: {
          title: 'காவல் நிலைய பொது டைரியில் (GD) பதிவு செய்தல்',
          desc: 'யாருக்கு தகவல் தெரிவிக்கப்பட்டது மற்றும் யாருடைய பாதுகாப்பில் உள்ளார் என்பது குறித்து பதிவு செய்ய வேண்டும்.'
        },
        bn: {
          title: 'থানার জেনারেল ডায়েরিতে (GD) এন্ট্রি',
          desc: 'কাকে তথ্য জানানো হয়েছে এবং কার হেফাজতে রয়েছে তা জিডিতে লিখতে হবে।'
        },
        mr: {
          title: 'ठाण्याच्या जनरल डायरीत (GD) नोंद',
          desc: 'माहिती कोणाला दिली आणि कोठडी कोणाकडे आहे याची नोंद स्टेशन डायरीत करणे आवश्यक आहे.'
        },
        gu: {
          title: 'સ્ટેશન જનરલ ડાયરી (GD) માં એન્ટ્રી',
          desc: 'કોને જાણ કરવામાં આવી તેની સ્ટેશન ડાયરીમાં નોંધ કરવી જરૂરી છે.'
        },
        kn: {
          title: 'ಠಾಣೆಯ ಜನರಲ್ ಡೈರಿಯಲ್ಲಿ (GD) ನಮೂದು',
          desc: 'ಯಾರಿಗೆ ಮಾಹಿತಿ ನೀಡಲಾಗಿದೆ ಎಂಬುದನ್ನು ಜನರಲ್ ಡೈರಿಯಲ್ಲಿ ನಮೂದಿಸಬೇಕು.'
        },
        ml: {
          title: 'ജനറൽ ഡയറിയിൽ (GD) രേഖപ്പെടുത്തൽ',
          desc: 'ആർക്കാണ് വിവരം നൽകിയതെന്നും ആരുടെ കസ്റ്റഡിയിലാണെന്നും സ്റ്റേഷൻ ഡയറിയിൽ രേഖപ്പെടുത്തണം.'
        },
        pa: {
          title: 'ਜਨਰਲ ਡਾਇਰੀ (GD) ਵਿੱਚ ਐਂਟਰੀ',
          desc: 'ਕਿਸਨੂੰ ਸੂਚਨਾ ਦਿੱਤੀ ਗਈ ਹੈ, ਇਸਦੀ ਜਨਰਲ ਡਾਇਰੀ ਵਿੱਚ ਐਂਟਰੀ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।'
        },
        hinglish: {
          title: 'Entry in Police Station GD',
          desc: 'Station diary (GD) mein clearly note hona chahiye ki kis relative ko inform kiya gaya aur custody kiske paas hai.'
        }
      }
    },
    {
      num: 5,
      title: 'Physical & Medical Inspection Memo',
      desc: 'The arrested person should be examined at the time of arrest and major/minor injuries recorded in an "Inspection Memo" signed by both the arrestee and officer.',
      translations: {
        hi: {
          title: 'शारीरिक व मेडिकल निरीक्षण मेमो (Inspection Memo)',
          desc: 'गिरफ्तारी के समय शरीर पर मौजूद चोटों को इंस्पेक्शन मेमो में दर्ज किया जाएगा और दोनों पक्ष इस पर हस्ताक्षर करेंगे।'
        },
        te: {
          title: 'శారీరక & వైద్య పరీక్ష మెమో',
          desc: 'అరెస్ట్ సమయంలో శరీర గాయాలను ఇన్‌స్పెక్షన్ మెమోలో నమోదు చేసి ఇరువైపులా సంతకాలు చేయాలి.'
        },
        ta: {
          title: 'மருத்துவ ஆய்வு மெமோ',
          desc: 'கைது செய்யப்படும் போது உடலில் உள்ள காயங்கள் ஆய்வு மெமோவில் பதிவு செய்யப்பட வேண்டும்.'
        },
        bn: {
          title: 'শারীরিক ও মেডিকেল পরিদর্শন মেমো',
          desc: 'গ্রেপ্তারের সময় শরীরের ক্ষত বা আঘাত পরিদর্শন মেমোতে রেকর্ড করতে হবে।'
        },
        mr: {
          title: 'शारीरिक व वैद्यकीय तपासणी मेमो',
          desc: 'अटकेच्या वेळी शरीरावरील जखमांची नोंद इन्स्पेक्शन मेमोमध्ये करणे आवश्यक आहे.'
        },
        gu: {
          title: 'શારીરિક અને તબીબી તપાસ મેમો',
          desc: 'ધરપકડ સમયે શરીરે થયેલી ઈજાઓની નોંધ મેમોમાં કરવી ફરજિયાત છે.'
        },
        kn: {
          title: 'ದೈಹಿಕ ಮತ್ತು ವೈದ್ಯಕೀಯ ಪರಿಶೀಲನಾ ಮೆಮೊ',
          desc: 'ಬಂಧನದ ಸಮಯದಲ್ಲಿ ಗಾಯಗಳನ್ನು ತಪಾಸಣಾ ಮೆಮೊದಲ್ಲಿ ದಾಖಲಿಸಬೇಕು.'
        },
        ml: {
          title: 'മെഡിക്കൽ പരിശോധനാ മെമ്മോ',
          desc: 'അറസ്റ്റ് സമയത്തുള്ള മുറിവുകൾ ഇൻസ്പെക്ഷൻ മെമ്മോയിൽ രേഖപ്പെടുത്തണം.'
        },
        pa: {
          title: 'ਸਰੀਰਕ ਤੇ ਮੈਡੀਕਲ ਜਾਂਚ ਮੈਮੋ',
          desc: 'ਗ੍ਰਿਫ਼ਤਾਰੀ ਸਮੇਂ ਸਰੀਰ \'ਤੇ ਮੌਜੂਦ ਸੱਟਾਂ ਦਾ ਇੰਸਪੈਕਸ਼ਨ ਮੈਮੋ ਬਣਾਇਆ ਜਾਵੇਗਾ।'
        },
        hinglish: {
          title: 'Physical Injury & Inspection Memo',
          desc: 'Arrest ke time body par existing injuries ka Inspection Memo banega jisse custody violence verify ho sake.'
        }
      }
    },
    {
      num: 6,
      title: 'Medical Checkup Every 48 Hours',
      desc: 'The arrestee must undergo a medical examination by a trained doctor on the panel of approved doctors every 48 hours during detention in custody.',
      translations: {
        hi: {
          title: 'हिरासत के दौरान हर 48 घंटे में मेडिकल जांच',
          desc: 'हिरासत के दौरान हर 48 घंटे में अनुमोदित डॉक्टर द्वारा गिरफ्तार व्यक्ति की पूरी मेडिकल जांच कराना अनिवार्य है।'
        },
        te: {
          title: 'ప్రతి 48 గంటలకు వైద్య పరీక్ష',
          desc: 'కస్టడీలో ఉన్న సమయంలో ప్రతి 48 గంటలకు ఒకసారి వైద్యుడి చేత వైద్య పరీక్షలు నిర్వహించాలి.'
        },
        ta: {
          title: 'ஒவ்வொரு 48 மணி நேரத்திற்கும் மருத்துவ பரிசோதனை',
          desc: 'காவலில் இருக்கும் போது ஒவ்வொரு 48 மணி நேரத்திற்கும் தகுதிவாய்ந்த மருத்துவரால் பரிசோதிக்கப்பட வேண்டும்.'
        },
        bn: {
          title: 'প্রতি ৪৮ ঘণ্টায় মেডিকেল চেকআপ',
          desc: 'হেফাজতে থাকাকালীন প্রতি ৪৮ ঘণ্টায় অনুমোদিত ডাক্তার দ্বারা স্বাস্থ্য পরীক্ষা করাতে হবে।'
        },
        mr: {
          title: 'दर ४८ तासांनी वैद्यकीय तपासणी',
          desc: 'कोठडीत असताना दर ४८ तासांनी डॉक्टरांकडून वैद्यकीय तपासणी करणे अनिवार्य आहे.'
        },
        gu: {
          title: 'દર ૪૮ કલાકે મેડિકલ તપાસ',
          desc: 'કસ્ટડી દરમિયાન દર ૪૮ કલાકે માન્ય ડોક્ટર પાસે તબીબી તપાસ કરાવવી ફરજિયાત છે.'
        },
        kn: {
          title: 'ಪ್ರತಿ 48 ಗಂಟೆಗಳಿಗೊಮ್ಮೆ ವೈದ್ಯಕೀಯ ತಪಾಸಣೆ',
          desc: 'ಕಸ್ಟಡಿಯಲ್ಲಿದ್ದಾಗ ಪ್ರತಿ 48 ಗಂಟೆಗಳಿಗೊಮ್ಮೆ ವೈದ್ಯಕೀಯ ಪರೀಕ್ಷೆ ನಡೆಸಬೇಕು.'
        },
        ml: {
          title: 'ഓരോ 48 മണിക്കൂറിലും മെഡിക്കൽ പരിശോധന',
          desc: 'കസ്റ്റഡിയിലുള്ള വ്യക്തിയെ ഓരോ 48 മണിക്കൂറിലും ഡോക്ടർ പരിശോധിച്ച് റിപ്പോർട്ട് നൽകണം.'
        },
        pa: {
          title: 'ਹਰ 48 ਘੰਟੇ ਬਾਅਦ ਮੈਡੀਕਲ ਜਾਂਚ',
          desc: 'ਹਿਰਾਸਤ ਦੌਰਾਨ ਹਰ 48 ਘੰਟਿਆਂ ਬਾਅਦ ਡਾਕਟਰ ਤੋਂ ਮੈਡੀਕਲ ਕਰਵਾਉਣਾ ਲਾਜ਼ਮੀ ਹੈ।'
        },
        hinglish: {
          title: 'Medical checkup every 48 hours',
          desc: 'Custody ke time har 48 hours mein approved doctor dwara medical examination mandatory hai.'
        }
      }
    },
    {
      num: 7,
      title: 'Copies Sent to Area Magistrate',
      desc: 'Copies of all arrest documents including the Arrest Memo must be sent to the Illaqa (Area) Magistrate for their official record.',
      translations: {
        hi: {
          title: 'इलाका मजिस्ट्रेट को अरेस्ट मेमो की प्रति भेजना',
          desc: 'अरेस्ट मेमो और जब्ती के सभी दस्तावेजों की प्रतियां इलाका मजिस्ट्रेट के आधिकारिक रिकॉर्ड के लिए भेजी जानी चाहिए।'
        },
        te: {
          title: 'మేజిస్ట్రేట్‌కు పత్రాల కాపీలు పంపడం',
          desc: 'అరెస్ట్ మెమోతో సహా అన్ని పత్రాల కాపీలను అధికారిక రికార్డు కోసం ఏరియా మేజిస్ట్రేట్‌కు పంపాలి.'
        },
        ta: {
          title: 'நீதித்துறை நடுவருக்கு ஆவண நகல்கள் அனுப்புதல்',
          desc: 'கைது மெமோ உட்பட அனைத்து ஆவணங்களின் நகல்களும் அப்பகுதி மாஜிஸ்திரேட்டுக்கு அனுப்பப்பட வேண்டும்.'
        },
        bn: {
          title: 'এলাকা ম্যাজিস্ট্রেটের কাছে নথির অনুলিপি পাঠানো',
          desc: 'অ্যারেস্ট মেমোসহ সব নথির কপি সংশ্লিষ্ট ম্যাজিস্ট্রেটের কাছে পাঠাতে হবে।'
        },
        mr: {
          title: 'दंडाधिकाऱ्यांना कागदपत्रांची प्रत पाठवणे',
          desc: 'अरेस्ट मेमोसह सर्व कागदपत्रांच्या प्रती स्थानिक दंडाधिकाऱ्यांकडे पाठवणे आवश्यक आहे.'
        },
        gu: {
          title: 'મેજિસ્ટ્રેટને દસ્તાવેજોની નકલ મોકલવી',
          desc: 'અરેસ્ટ મેમો સહિત તમામ દસ્તાવેજો વિસ્તારના મેજિસ્ટ્રેટને મોકલવા જરૂરી છે.'
        },
        kn: {
          title: 'ಮ್ಯಾಜಿಸ್ಟ್ರೇಟ್‌ಗೆ ದಾಖಲೆಗಳ ಪ್ರತಿ ಕಳುಹಿಸುವುದು',
          desc: 'ಅರೆಸ್ಟ್ ಮೆಮೊ ಪ್ರತಿಗಳನ್ನು ಸಂಬಂಧಪಟ್ಟ ಮ್ಯಾಜಿಸ್ಟ್ರೇಟ್‌ಗೆ ಕಳುಹಿಸಬೇಕು.'
        },
        ml: {
          title: 'മജിസ്ട്രേറ്റിന് രേഖകൾ അയക്കുക',
          desc: 'അറസ്റ്റ് മെമ്മോ ഉൾപ്പെടെയുള്ള എല്ലാ രേഖകളുടെയും പകർപ്പുകൾ മജിസ്ട്രേറ്റിന് അയക്കണം.'
        },
        pa: {
          title: 'ਮੈਜਿਸਟ੍ਰੇਟ ਨੂੰ ਕਾਪੀਆਂ ਭੇਜਣਾ',
          desc: 'ਸਾਰੇ ਗ੍ਰਿਫ਼ਤਾਰੀ ਦਸਤਾਵੇਜ਼ਾਂ ਦੀਆਂ ਕਾਪੀਆਂ ਇਲਾਕਾ ਮੈਜਿਸਟ੍ਰੇਟ ਨੂੰ ਭੇਜੀਆਂ ਜਾਣਗੀਆਂ।'
        },
        hinglish: {
          title: 'Copies sent to Area Magistrate',
          desc: 'Arrest memo aur documents ki official copies Area Magistrate ke record ke liye submit karna mandatory hai.'
        }
      }
    },
    {
      num: 8,
      title: 'Right to Meet Legal Counsel',
      desc: 'The arrested person may be permitted to meet and consult with an advocate of their choice during interrogation, though not throughout the entire questioning (Sec 41D CrPC).',
      translations: {
        hi: {
          title: 'पूछताछ के दौरान अपने वकील से मिलने का अधिकार',
          desc: 'गिरफ्तार व्यक्ति को पूछताछ के दौरान अपनी पसंद के वकील से परामर्श करने की अनुमति है (धारा 41D सीआरपीसी)।'
        },
        te: {
          title: 'న్యాయవాదిని కలిసే హక్కు',
          desc: 'విచారణ సమయంలో తన న్యాయవాదితో మాట్లాడే హక్కు నిందితుడికి ఉంది (సెక్షన్ 41D).'
        },
        ta: {
          title: 'வழக்கறிஞரை சந்திக்கும் உரிமை',
          desc: 'விசாரணையின் போது தனது விருப்பப்படி வழக்கறிஞரை சந்தித்து ஆலோசனை பெற உரிமை உண்டு.'
        },
        bn: {
          title: 'আইনজীবীর সাথে দেখা করার অধিকার',
          desc: 'জিজ্ঞাসাবাদের সময় নিজের আইনজীবীর সাথে পরামর্শ করার অধিকার রয়েছে (ধারা ৪১ডি)।'
        },
        mr: {
          title: 'वकिलाचा सल्ला घेण्याचा हक्क',
          desc: 'चौकशी दरम्यान स्वतःच्या वकिलाचा सल्ला घेण्याचा अधिकार आहे (कलम ४१D).'
        },
        gu: {
          title: 'વકીલને મળવાનો અધિકાર',
          desc: 'પૂછપરછ દરમિયાન પોતાની પસંદગીના વકીલ સાથે સલાહ લેવાની મંજૂરી છે.'
        },
        kn: {
          title: 'ವಕೀಲರನ್ನು ಭೇಟಿ ಮಾಡುವ ಹಕ್ಕು',
          desc: 'ವಿಚಾರಣೆಯ ಸಮಯದಲ್ಲಿ ವಕೀಲರ ಸಲಹೆ ಪಡೆಯಲು ಅವಕಾಶವಿದೆ.'
        },
        ml: {
          title: 'അഭിഭാഷകനെ കാണാനുള്ള അവകാശം',
          desc: 'ചോദ്യം ചെയ്യൽ വേളയിൽ സ്വന്തം അഭിഭാഷകനുമായി സംസാരിക്കാൻ അനുവാദമുണ്ട്.'
        },
        pa: {
          title: 'ਵਕੀਲ ਨਾਲ ਮੁਲਾਕਾਤ ਦਾ ਅਧਿਕਾਰ',
          desc: 'ਪੁੱਛਗਿੱਛ ਦੌਰਾਨ ਆਪਣੇ ਵਕੀਲ ਨਾਲ ਸਲਾਹ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਹੈ।'
        },
        hinglish: {
          title: 'Right to meet legal advocate',
          desc: 'Interrogation ke dauran apni choice ke advocate se meet karne ka right guaranteed hai (Sec 41D CrPC).'
        }
      }
    },
    {
      num: 9,
      title: 'Police Control Room Notification',
      desc: 'A Police Control Room must be set up at all district and state headquarters, and information regarding the arrest and place of custody must be communicated within 12 hours.',
      translations: {
        hi: {
          title: 'जिला पुलिस कंट्रोल रूम को 12 घंटे में सूचना',
          desc: 'सभी जिला व राज्य मुख्यालयों के कंट्रोल रूम को गिरफ्तारी और हिरासत के स्थान की सूचना 12 घंटे के भीतर दी जानी चाहिए।'
        },
        te: {
          title: 'పోలీస్ కంట్రోల్ రూమ్‌కు సమాచారం',
          desc: 'అరెస్ట్ మరియు కస్టడీ సమాచారాన్ని 12 గంటల్లోగా జిల్లా పోలీస్ కంట్రోల్ రూమ్‌కు తెలియజేయాలి.'
        },
        ta: {
          title: 'காவல் கட்டுப்பாட்டு அறைக்கு தகவல்',
          desc: 'கைது மற்றும் காவல் பற்றிய தகவலை 12 மணி நேரத்திற்குள் கட்டுப்பாட்டு அறைக்கு தெரிவிக்க வேண்டும்.'
        },
        bn: {
          title: 'পুলিশ কন্ট্রোল রুমে বিজ্ঞপ্তি পাঠানো',
          desc: '১২ ঘণ্টার মধ্যে গ্রেপ্তার ও হেফাজতের তথ্য কন্ট্রোল রুমে পাঠাতে হবে।'
        },
        mr: {
          title: 'पोलिस नियंत्रण कक्षाला सूचना',
          desc: '१२ तासांच्या आत अटक आणि कोठडीची माहिती जिल्हा नियंत्रण कक्षाला देणे आवश्यक आहे.'
        },
        gu: {
          title: 'પોલીસ કંટ્રોલ રૂમને જાણ કરવી',
          desc: '૧૨ કલાકમાં ધરપકડ અને કસ્ટડીની માહિતી કંટ્રોલ રૂમને આપવી ફરજિયાત છે.'
        },
        kn: {
          title: 'ಪೊಲೀಸ್ ನಿಯಂತ್ರಣ ಕೊಠಡಿಗೆ ಮಾಹಿತಿ',
          desc: '12 ಗಂಟೆಗಳ ಒಳಗೆ ಬಂಧನದ ಮಾಹಿತಿಯನ್ನು ನಿಯಂತ್ರಣ ಕೊಠಡಿಗೆ ತಿಳಿಸಬೇಕು.'
        },
        ml: {
          title: 'പോലീസ് കൺട്രോൾ റൂമിൽ വിവരം അറിയിക്കുക',
          desc: '12 മണിക്കൂറിനുള്ളിൽ അറസ്റ്റ് വിവരം ജില്ലാ കൺട്രോൾ റൂമിൽ അറിയിക്കണം.'
        },
        pa: {
          title: 'ਕੰਟਰੋਲ ਰੂਮ ਨੂੰ 12 ਘੰਟਿਆਂ \'ਚ ਸੂਚਨਾ',
          desc: 'ਗ੍ਰਿਫ਼ਤਾਰੀ ਦੀ ਜਾਣਕਾਰੀ 12 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ ਕੰਟਰੋਲ ਰੂਮ ਨੂੰ ਭੇਜੀ ਜਾਵੇਗੀ।'
        },
        hinglish: {
          title: 'Police Control Room notification',
          desc: '12 hours ke andar arrest aur custody place ki info District Police Control Room ko transmit karna mandatory hai.'
        }
      }
    },
    {
      num: 10,
      title: 'Notice Board Display at Station',
      desc: 'The details of the arrest and persons detained must be prominently displayed on the notice board at the police control room / station.',
      translations: {
        hi: {
          title: 'कंट्रोल रूम व थाने के नोटिस बोर्ड पर सार्वजनिक प्रदर्शन',
          desc: 'हिरासत में लिए गए व्यक्तियों के नाम और विवरण को थाने एवं कंट्रोल रूम के नोटिस बोर्ड पर सार्वजनिक रूप से प्रदर्शित किया जाना चाहिए।'
        },
        te: {
          title: 'స్టేషన్ నోటీస్ బోర్డుపై వివరాల ప్రదర్శన',
          desc: 'అరెస్ట్ అయిన వ్యక్తుల వివరాలను కంట్రోల్ రూమ్ మరియు స్టేషన్ నోటీస్ బోర్డుపై స్పష్టంగా ప్రదర్శించాలి.'
        },
        ta: {
          title: 'அறிவிப்பு பலகையில் தகவல் காட்சிப்படுத்தல்',
          desc: 'கைதானவர்களின் விவரங்கள் காவல் நிலைய தகவல் பலகையில் வெளிப்படையாக வைக்கப்பட வேண்டும்.'
        },
        bn: {
          title: 'থানার নোটিশ বোর্ডে বিবরণ প্রদর্শন',
          desc: 'আটক ব্যক্তিদের নাম ও বিবরণ নোটিশ বোর্ডে দৃশ্যমানভাবে প্রদর্শন করতে হবে।'
        },
        mr: {
          title: 'सूचना फलकावर माहिती प्रदर्शित करणे',
          desc: 'अटक केलेल्या व्यक्तींचे नाव आणि तपशील ठाण्याच्या नोटीस बोर्डवर लावणे आवश्यक आहे.'
        },
        gu: {
          title: 'નોટિસ બોર્ડ પર વિગતો દર્શાવવી',
          desc: 'ધરપકડ કરાયેલ વ્યક્તિઓની વિગતો સ્ટેશનના નોટિસ બોર્ડ પર મૂકવી ફરજિયાત છે.'
        },
        kn: {
          title: 'ಸೂಚನಾ ಫಲಕದಲ್ಲಿ ವಿವರ ಪ್ರದರ್ಶನ',
          desc: 'ಬಂಧಿತರ ವಿವರಗಳನ್ನು ಠಾಣೆಯ ನೋಟಿಸ್ ಬೋರ್ಡ್‌ನಲ್ಲಿ ಪ್ರದರ್ಶಿಸಬೇಕು.'
        },
        ml: {
          title: 'നോട്ടീസ് ബോർഡിൽ വിവരങ്ങൾ പ്രദർശിപ്പിക്കുക',
          desc: 'അറസ്റ്റിലായ വ്യക്തികളുടെ വിവരങ്ങൾ സ്റ്റേഷൻ നോട്ടീസ് ബോർഡിൽ പ്രദർശിപ്പിക്കണം.'
        },
        pa: {
          title: 'ਨੋਟਿਸ ਬੋਰਡ \'ਤੇ ਵੇਰਵਾ ਲਗਾਉਣਾ',
          desc: 'ਗ੍ਰਿਫ਼ਤਾਰ ਕੀਤੇ ਵਿਅਕਤੀਆਂ ਦਾ ਵੇਰਵਾ ਨੋਟਿਸ ਬੋਰਡ \'ਤੇ ਲਗਾਇਆ ਜਾਵੇਗਾ।'
        },
        hinglish: {
          title: 'Notice Board display at station',
          desc: 'Station aur Control Room ke notice board par detained persons ke names & arrest timing public display honi chahiye.'
        }
      }
    },
    {
      num: 11,
      title: 'Departmental & Contempt Penalties for Police Breach',
      desc: 'Failure to comply with these 11 requirements renders the concerned police officers liable to departmental action as well as contempt of court in High Court / Supreme Court.',
      translations: {
        hi: {
          title: 'उल्लंघन करने वाले पुलिसकर्मियों पर अवमानना (Contempt) व दंडात्मक कार्रवाई',
          desc: 'इन 11 नियमों का उल्लंघन करने वाले पुलिस अधिकारियों के विरुद्ध विभागीय कार्रवाई के साथ-साथ हाईकोर्ट व सुप्रीम कोर्ट में न्यायालय की अवमानना का मुकदमा चलाया जा सकता है।'
        },
        te: {
          title: 'ఉల్లంఘించిన పోలీసులపై కోర్టు ధిక్కార చర్యలు',
          desc: 'ఈ 11 నిబంధనలను పాటించని పోలీసులపై శాఖాపరమైన చర్యలతో పాటు హైకోర్టు/సుప్రీం కోర్టులో కోర్టు ధిక్కార చర్యలు తీసుకుంటారు.'
        },
        ta: {
          title: 'விதிமீறும் காவலர்கள் மீது நீதிமன்ற அவமதிப்பு நடவடிக்கை',
          desc: 'இந்த 11 விதிகளை மீறும் காவலர்கள் மீது துறை ரீதியான நடவடிக்கை மற்றும் நீதிமன்ற அவமதிப்பு வழக்கு தொடரலாம்.'
        },
        bn: {
          title: 'নিয়ম লঙ্ঘনকারী পুলিশের বিরুদ্ধে আদালত অবমাননার শাস্তি',
          desc: 'এই ১১টি নিয়ম না মানলে সংশ্লিষ্ট পুলিশ কর্মকর্তার বিরুদ্ধে বিভাগীয় ও আদালত অবমাননার ব্যবস্থা নেওয়া হবে।'
        },
        mr: {
          title: 'नियम मोडणाऱ्या पोलिसांवर कोर्टाचा अवमान खटला',
          desc: 'या ११ नियमांचे उल्लंघन करणाऱ्या पोलिसांवर खातेनिहाय कारवाई व न्यायालयाचा अवमान खटला दाखल केला जाऊ शकतो.'
        },
        gu: {
          title: 'ઉલ્લંઘન કરનાર પોલીસ સામે કોર્ટના તિરસ્કારની કાર્યવાહી',
          desc: 'આ ૧૧ નિયમોનું પાલન ન કરનાર પોલીસ અધિકારીઓ સામે ખાતાકીય અને અદાલતી કાર્યવાહી થશે.'
        },
        kn: {
          title: 'ನಿಯಮ ಉಲ್ಲಂಘಿಸುವ ಪೊಲೀಸರ ವಿರುದ್ಧ ನ್ಯಾಯಾಂಗ ನಿಂದನೆ ಕ್ರಮ',
          desc: 'ಈ ನಿಯಮಗಳನ್ನು ಪಾಲಿಸದ ಅಧಿಕಾರಿಗಳ ವಿರುದ್ಧ ಇಲಾಖಾ ತನಿಖೆ ಮತ್ತು ನ್ಯಾಯಾಂಗ ನಿಂದನೆ ಕ್ರಮ ಜರುಗಿಸಲಾಗುತ್ತದೆ.'
        },
        ml: {
          title: 'ലംഘിക്കുന്ന പോലീസുകാർക്കെതിരെ കോടതി അലക്ഷ്യ നടപടി',
          desc: 'ഈ 11 നിയമങ്ങൾ പാലിക്കാത്ത ഉദ്യോഗസ്ഥർക്കെതിരെ വകുപ്പുതല നടപടിയും കോടതി അലക്ഷ്യ കേസും ഉണ്ടാകും.'
        },
        pa: {
          title: 'ਨਿਯਮ ਤੋੜਨ ਵਾਲੇ ਪੁਲਿਸ ਵਾਲਿਆਂ \'ਤੇ ਅਦਾਲਤ ਦੀ ਮਾਣਹਾਨੀ ਕੇਸ',
          desc: 'ਇਹਨਾਂ 11 ਨਿਯਮਾਂ ਦੀ ਉਲੰਘਣਾ ਕਰਨ \'ਤੇ ਪੁਲਿਸ ਅਧਿਕਾਰੀਆਂ ਖ਼ਿਲਾਫ਼ ਸਖ਼ਤ ਕਾਰਵਾਈ ਅਤੇ ਅਦਾਲਤ ਦੀ ਮਾਣਹਾਨੀ ਦਾ ਕੇਸ ਚੱਲੇਗਾ।'
        },
        hinglish: {
          title: 'Contempt of Court & Penalties for violation',
          desc: 'In 11 rules ka violation karne par police officers par departmental disciplinary action + High Court / Supreme Court mein Contempt proceedings chalegi.'
        }
      }
    }
  ];

  const toggleCheck = (idx: number) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleSpeak = (idx: number, text: string) => {
    if ('speechSynthesis' in window) {
      if (playingNum === idx) {
        window.speechSynthesis.cancel();
        setPlayingNum(null);
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = currentLangObj.speechCode || 'en-IN';
      utterance.rate = 0.92;
      utterance.onend = () => setPlayingNum(null);
      utterance.onerror = () => setPlayingNum(null);
      setPlayingNum(idx);
      window.speechSynthesis.speak(utterance);
    }
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = Math.round((completedCount / guidelines.length) * 100);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5CB90]/60 pb-5">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#458393] text-white shadow-xs">
              Landmark Supreme Court Safeguard
            </span>
            <span className="text-xs font-bold text-[#34A99D] px-3 py-0.5 rounded-full bg-[#34A99D]/15 border border-[#34A99D]/30">
              D.K. Basu v. State of WB (AIR 1997 SC 610)
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A3841] tracking-tight">
            {t.dkBasuTitle}
          </h2>
          <p className="text-sm text-[#458393] font-bold mt-1">
            {t.dkBasuSubtitle}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFF3C8] hover:bg-[#E5CB90] border-2 border-[#E5CB90] text-[#1A3841] font-black text-xs shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4 text-[#458393]" />
            <span>{t.printDoc}</span>
          </button>
        </div>
      </div>

      {/* Progress Bar & Status */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#FFF3C8] via-[#FFF3C8] to-[#E5CB90]/40 border-2 border-[#E5CB90] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 w-full sm:w-auto">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#34A99D]/20 flex items-center justify-center text-[#34A99D]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-black text-base text-[#1A3841]">
              Police Compliance Audit: {completedCount} / 11 Checked
            </span>
          </div>
          <p className="text-xs text-[#458393] font-bold pl-10">
            Violation of these mandatory steps is grounds for immediate bail and Contempt of Court proceedings.
          </p>
        </div>

        <div className="w-full sm:w-56 bg-[#E5CB90]/40 rounded-full h-4 border-2 border-[#E5CB90] overflow-hidden p-0.5 shadow-inner">
          <div
            className="bg-gradient-to-r from-[#34A99D] to-[#458393] h-full rounded-full transition-all duration-500 shadow-sm"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 11 Guidelines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {guidelines.map((item) => {
          const isChecked = !!checkedItems[item.num];
          const tr = (item.translations as any)?.[language];
          const activeTitle = tr?.title || item.title;
          const activeDesc = tr?.desc || item.desc;
          const isPlaying = playingNum === item.num;

          return (
            <ThreeDCard key={item.num} className="cursor-pointer group" onClick={() => toggleCheck(item.num)}>
              <div className={`h-full p-5 rounded-3xl border-2 transition-all duration-300 flex items-start gap-4 hover:shadow-xl hover:-translate-y-1 ${
                isChecked
                  ? 'bg-emerald-50/95 border-emerald-400 shadow-md ring-2 ring-emerald-200'
                  : 'bg-[#FFF3C8] border-[#E5CB90] hover:border-[#34A99D] hover:bg-[#E5CB90]/25'
              }`}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCheck(item.num);
                  }}
                  className="mt-0.5 text-[#458393] hover:text-[#34A99D] transition-transform hover:scale-110 shrink-0 cursor-pointer"
                >
                  {isChecked ? (
                    <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-xs">
                      <CheckSquare className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full border-2 border-[#458393] hover:border-[#34A99D] flex items-center justify-center bg-white/50" />
                  )}
                </button>

                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-full bg-[#458393] text-[#FFF3C8] flex items-center justify-center text-xs font-black shrink-0 shadow-xs">
                        {item.num}
                      </span>
                      <h3 className="font-black text-sm text-[#1A3841] group-hover:text-[#34A99D] transition-colors leading-snug">
                        {activeTitle}
                      </h3>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSpeak(item.num, `${activeTitle}. ${activeDesc}`);
                      }}
                      className="w-8 h-8 rounded-full bg-[#E5CB90]/60 hover:bg-[#E5CB90] text-[#1A3841] transition-all flex items-center justify-center shrink-0 hover:scale-110 shadow-xs cursor-pointer"
                      title="Listen audio in selected language"
                    >
                      <Volume2 className={`w-4 h-4 ${isPlaying ? 'text-red-600 animate-spin' : 'text-[#458393]'}`} />
                    </button>
                  </div>
                  <p className="text-xs text-[#458393] font-bold leading-relaxed pl-9">
                    {activeDesc}
                  </p>
                </div>
              </div>
            </ThreeDCard>
          );
        })}
      </div>

      {/* Supreme Court Warning Box */}
      <div className="p-5 rounded-3xl bg-amber-50 border-2 border-amber-300 shadow-sm flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-amber-200/80 flex items-center justify-center text-amber-900 shrink-0">
          <Info className="w-6 h-6" />
        </div>
        <div className="text-xs text-amber-950 font-semibold leading-relaxed">
          <span className="font-black block text-sm text-amber-900 mb-0.5">Legal Precedent & Punishment for Police Violation:</span>
          Under paragraph 36 of the D.K. Basu judgment, any failure by police officials to fulfill these conditions renders them liable to be proceeded against for Contempt of Court, in addition to statutory departmental penalties and Section 166 IPC / BNSS for disobeying law.
        </div>
      </div>
    </div>
  );
};

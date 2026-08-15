import { ScriptDialogue } from '../types';

export const SCRIPTS_DATA: ScriptDialogue[] = [
  {
    id: 'script-traffic-stop',
    scenario: 'Traffic police stopped you and demands your phone or keys',
    category: 'traffic',
    policeAsks: '“Give me your keys right now and show me your phone!”',
    citizenResponseEnglish: '“Namaste Officer. With respect, snatching the ignition key is not permitted under the Motor Vehicles Act. I am happily presenting my Driving License and RC digitally through the government DigiLocker app on this screen.”',
    citizenResponseHindi: '“नमस्ते सर, मोटर व्हीकल एक्ट के तहत गाड़ी की चाबी निकालना उचित नहीं है। मैं डिजिलॉकर ऐप पर अपने सभी अधिकृत दस्तावेज आपको अभी दिखा रहा हूँ।”',
    legalBasis: 'Rule 139 Central Motor Vehicles Rules & MVA guidelines',
    tip: 'Keep your hands visible, maintain a steady polite voice, and keep hazard lights on.'
  },
  {
    id: 'script-phone-privacy',
    scenario: 'Police asks you to unlock WhatsApp or photos at a checkpoint',
    category: 'phone_privacy',
    policeAsks: '“Unlock your phone, let me see your chats.”',
    citizenResponseEnglish: '“Officer, under the Supreme Court Puttaswamy judgment on Article 21, my digital communications are private. Unless you have a formal Section 91 notice or search warrant in a registered FIR, I am not obliged to unlock it.”',
    citizenResponseHindi: '“सर, सुप्रीम कोर्ट के पुट्टास्वामी फैसले और आर्टिकल 21 के तहत मेरा मोबाइल फोन व्यक्तिगत है। बिना किसी आधिकारिक सर्च वारंट या केस के मैं इसे अनलॉक करने के लिए बाध्य नहीं हूँ।”',
    legalBasis: 'Article 21 (Right to Privacy) & Section 91 CrPC',
    tip: 'Never shout or physically snatch the phone back. Politely request their name and rank badge.'
  },
  {
    id: 'script-arrest-grounds',
    scenario: 'Police officer says “You are coming with us to the police station right now”',
    category: 'arrest',
    policeAsks: '“Sit in the police jeep, we are arresting you!”',
    citizenResponseEnglish: '“Officer, under Article 22(1) of the Constitution and Section 41B CrPC, please inform me of the specific grounds of arrest and prepare the D.K. Basu Arrest Memo with a witness signature before we leave.”',
    citizenResponseHindi: '“सर, संविधान के आर्टिकल 22(1) और डी.के. बसु गाइडलाइंस के तहत मुझे गिरफ्तारी का कारण बताएं, अरेस्ट मेमो तैयार करें और मुझे अपने परिवार व वकील से बात करने की अनुमति दें।”',
    legalBasis: 'Article 22(1), Section 41B CrPC & D.K. Basu Landmark Ruling',
    tip: 'Do not run or physically resist. Demand the memo and note badge numbers.'
  },
  {
    id: 'script-fir-refusal',
    scenario: 'Duty officer at the police station refuses to file your FIR',
    category: 'fir',
    policeAsks: '“This is not our jurisdiction / We will not write an FIR for this.”',
    citizenResponseEnglish: '“Sir, under the Supreme Court’s 5-Judge Constitution Bench ruling in Lalita Kumari v. Govt of UP, registering an FIR is mandatory for cognizable complaints. If jurisdiction is an issue, please register a Zero FIR and provide me a signed carbon copy.”',
    citizenResponseHindi: '“सर, सुप्रीम कोर्ट के ललिता कुमारी फैसले के अनुसार संज्ञेय अपराध में एफआईआर दर्ज करना अनिवार्य है। यदि यह आपका क्षेत्राधिकार नहीं है, तो कृपया ‘जीरो एफआईआर’ दर्ज करें और मुझे उसकी फ्री कॉपी दें।”',
    legalBasis: 'Section 154 CrPC & Lalita Kumari v. Govt. of UP (2014)',
    tip: 'Carry two printed copies of your complaint and get an acknowledgment stamp on one copy.'
  },
  {
    id: 'script-recording-public',
    scenario: 'Police officer threatens you: “Put that camera away or I will file a case!”',
    category: 'fundamental_rights',
    policeAsks: '“Stop recording! Who gave you permission to film the police?”',
    citizenResponseEnglish: '“Officer, I am standing at a safe distance on a public road without obstructing your lawful duty. Recording public servants in public spaces is protected under Article 19(1)(a) for mutual transparency.”',
    citizenResponseHindi: '“सर, मैं सुरक्षित दूरी से रिकॉर्ड कर रहा हूँ और आपकी ड्यूटी में कोई बाधा नहीं डाल रहा। सार्वजनिक स्थान पर रिकॉर्डिंग आर्टिकल 19(1)(a) के तहत नागरिक का अधिकार है।”',
    legalBasis: 'Article 19(1)(a) Freedom of Speech & Public Servant Transparency',
    tip: 'Never enter the officer’s personal space or block traffic.'
  },
  {
    id: 'script-home-search',
    scenario: 'Police arrive at your doorstep demanding to search the premises',
    category: 'search',
    policeAsks: '“Open the door, we are searching your house right now!”',
    citizenResponseEnglish: '“Good day Officer. Please show the Search Warrant issued by the Magistrate, or the Section 165 CrPC recording of emergency grounds. We also request two independent neighbors as Panch witnesses, and that officers allow a personal search before entering.”',
    citizenResponseHindi: '“सर, कृपया मजिस्ट्रेट द्वारा जारी सर्च वारंट दिखाएं। धारा 100 सीआरपीसी के तहत दो स्थानीय स्वतंत्र गवाहों की मौजूदगी में और आपकी तलाशी के बाद ही घर की तलाशी शुरू की जा सकती है।”',
    legalBasis: 'Section 100 & Section 165 CrPC',
    tip: 'Keep calm and ensure a Panchanama inventory list is made for every single article touched.'
  }
];

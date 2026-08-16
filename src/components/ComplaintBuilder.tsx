import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ChevronRight, ChevronLeft, Download, ShieldCheck, AlertCircle, Copy, Check } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { getT } from '../utils/translations';
import { triggerLightHaptic, triggerHeavyHaptic } from '../utils/haptics';
import { jsPDF } from 'jspdf';

interface ComplaintBuilderProps {
  language: SupportedLanguage;
}

type Step = 'type' | 'details' | 'incident' | 'preview';

interface FormData {
  type: 'general' | 'theft' | 'harassment' | 'cyber' | 'other';
  applicantName: string;
  applicantAddress: string;
  applicantPhone: string;
  incidentDate: string;
  incidentTime: string;
  incidentLocation: string;
  description: string;
  suspectInfo: string;
}

export const ComplaintBuilder: React.FC<ComplaintBuilderProps> = ({ language }) => {
  const t = getT(language);
  const [currentStep, setCurrentStep] = useState<Step>('type');
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    type: 'general',
    applicantName: '',
    applicantAddress: '',
    applicantPhone: '',
    incidentDate: '',
    incidentTime: '',
    incidentLocation: '',
    description: '',
    suspectInfo: '',
  });

  const STEPS: Step[] = ['type', 'details', 'incident', 'preview'];
  const currentIndex = STEPS.indexOf(currentStep);

  const handleNext = () => {
    if (currentIndex < STEPS.length - 1) {
      triggerLightHaptic();
      setCurrentStep(STEPS[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      triggerLightHaptic();
      setCurrentStep(STEPS[currentIndex - 1]);
    }
  };

  const generateComplaintText = () => {
    const dateStr = new Date().toLocaleDateString();
    
    return `To,
The Station House Officer (SHO),
[Insert Police Station Name],
[Insert City/District]

Date: ${dateStr}

Subject: Complaint regarding ${formData.type === 'theft' ? 'theft/burglary' : formData.type === 'harassment' ? 'harassment and public nuisance' : formData.type === 'cyber' ? 'cybercrime/online fraud' : 'an incident'} that occurred on ${formData.incidentDate}.

Respected Sir/Madam,

I, ${formData.applicantName || '[Your Name]'}, residing at ${formData.applicantAddress || '[Your Address]'}, would like to bring to your attention an incident that took place on ${formData.incidentDate || '[Date]'} at approximately ${formData.incidentTime || '[Time]'} at ${formData.incidentLocation || '[Location]'}.

Incident Details:
${formData.description || '[Provide a detailed chronological description of the event. State only facts.]'}

${formData.suspectInfo ? `Suspect/Accused Information (if any):\n${formData.suspectInfo}` : ''}

I request you to kindly register a First Information Report (FIR) under the appropriate sections of the Bharatiya Nyaya Sanhita (BNS) / relevant laws and initiate an immediate investigation into this matter. I am willing to cooperate fully with the investigation.

Thanking you,

Yours sincerely,
(Signature)

Name: ${formData.applicantName || '[Your Name]'}
Contact Number: ${formData.applicantPhone || '[Your Phone]'}
Address: ${formData.applicantAddress || '[Your Address]'}`;
  };

  const handleCopy = () => {
    triggerLightHaptic();
    navigator.clipboard.writeText(generateComplaintText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPDF = () => {
    triggerHeavyHaptic();
    const doc = new jsPDF();
    const text = generateComplaintText();
    
    doc.setFontSize(12);
    
    // Split text to fit within A4 margins
    const splitText = doc.splitTextToSize(text, 170); 
    
    doc.text(splitText, 20, 20);
    doc.save(`Complaint_Draft_${Date.now()}.pdf`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 pb-20">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 mb-4">
          <FileText className="w-8 h-8 text-teal-700" />
        </div>
        <h2 className="text-3xl font-black text-slate-900">Official Complaint Draft Builder</h2>
        <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
          Answer a few questions to generate a legally sound, correctly formatted complaint draft. You can print this and submit it to the police station.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="relative pt-2">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-slate-200">
          <div style={{ width: `${((currentIndex + 1) / STEPS.length) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-600 transition-all duration-500"></div>
        </div>
        <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
          <span className={currentIndex >= 0 ? 'text-teal-600' : ''}>Type</span>
          <span className={currentIndex >= 1 ? 'text-teal-600' : ''}>Your Details</span>
          <span className={currentIndex >= 2 ? 'text-teal-600' : ''}>Incident</span>
          <span className={currentIndex >= 3 ? 'text-teal-600' : ''}>Draft</span>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden min-h-[400px] flex flex-col">
        <div className="p-6 sm:p-10 flex-1">
          <AnimatePresence mode="wait">
            {/* Step 1: Type */}
            {currentStep === 'type' && (
              <motion.div
                key="step-type"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-6">What is this complaint regarding?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'general', label: 'General Complaint / Dispute', desc: 'Non-emergency disputes, threats, or general issues' },
                    { id: 'theft', label: 'Theft / Burglary / Lost Item', desc: 'Stolen vehicle, lost documents, house break-in' },
                    { id: 'harassment', label: 'Harassment / Assault', desc: 'Physical assault, public nuisance, stalking' },
                    { id: 'cyber', label: 'Cybercrime / Fraud', desc: 'Financial fraud, identity theft, online harassment' }
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setFormData({ ...formData, type: type.id as any })}
                      className={`p-4 rounded-2xl border-2 text-left transition-all ${formData.type === type.id ? 'border-teal-600 bg-teal-50 shadow-md' : 'border-slate-200 hover:border-teal-300 hover:bg-slate-50'}`}
                    >
                      <div className="font-bold text-slate-800 mb-1">{type.label}</div>
                      <div className="text-sm text-slate-500">{type.desc}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Personal Details */}
            {currentStep === 'details' && (
              <motion.div
                key="step-details"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Your Details (Applicant)</h3>
                <div className="space-y-4 max-w-xl">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={formData.applicantName}
                      onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full p-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Contact Number</label>
                    <input
                      type="tel"
                      value={formData.applicantPhone}
                      onChange={(e) => setFormData({ ...formData, applicantPhone: e.target.value })}
                      placeholder="e.g. +91 9876543210"
                      className="w-full p-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Residential Address</label>
                    <textarea
                      value={formData.applicantAddress}
                      onChange={(e) => setFormData({ ...formData, applicantAddress: e.target.value })}
                      placeholder="Complete residential address"
                      rows={3}
                      className="w-full p-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none resize-none"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Incident Details */}
            {currentStep === 'incident' && (
              <motion.div
                key="step-incident"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Incident Information</h3>
                <div className="space-y-4 max-w-2xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Date of Incident</label>
                      <input
                        type="date"
                        value={formData.incidentDate}
                        onChange={(e) => setFormData({ ...formData, incidentDate: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Time (Approx)</label>
                      <input
                        type="time"
                        value={formData.incidentTime}
                        onChange={(e) => setFormData({ ...formData, incidentTime: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Exact Location of Incident</label>
                    <input
                      type="text"
                      value={formData.incidentLocation}
                      onChange={(e) => setFormData({ ...formData, incidentLocation: e.target.value })}
                      placeholder="e.g. Near Metro Station Gate 2, Connaught Place"
                      className="w-full p-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Description of Events (Facts Only)</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe what happened chronologically. Stick to facts."
                      rows={5}
                      className="w-full p-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none resize-y"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Details of Accused/Suspects (If known)</label>
                    <input
                      type="text"
                      value={formData.suspectInfo}
                      onChange={(e) => setFormData({ ...formData, suspectInfo: e.target.value })}
                      placeholder="Name, appearance, vehicle number, etc. Leave blank if unknown."
                      className="w-full p-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Preview & Download */}
            {currentStep === 'preview' && (
              <motion.div
                key="step-preview"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-slate-800">Your Complaint Draft</h3>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copied!' : 'Copy Text'}
                  </button>
                </div>
                
                <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 font-mono text-sm whitespace-pre-wrap text-slate-800 max-h-[500px] overflow-y-auto">
                  {generateComplaintText()}
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 shrink-0" />
                  <p className="text-sm text-yellow-800 font-medium">
                    <strong>Next Steps:</strong> Take 2 printouts of this draft. Sign both copies. Submit one to the Duty Officer at the police station and get the second copy stamped (Daily Diary entry) as your proof of submission.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Navigation */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:px-10 flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-6 py-2.5 font-bold rounded-xl text-slate-600 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </button>

          {currentIndex < STEPS.length - 1 ? (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-2.5 font-bold rounded-xl bg-teal-600 hover:bg-teal-700 text-white shadow-md transition-colors"
            >
              Continue
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-6 py-2.5 font-bold rounded-xl bg-green-600 hover:bg-green-700 text-white shadow-md transition-colors cursor-pointer"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Copy, Check, ShieldAlert, X, AlertTriangle, ExternalLink, MessageCircleWarning, Plus, Trash2, MapPin } from 'lucide-react';
import { EMERGENCY_CONTACTS } from '../data/legalData';
import { SupportedLanguage } from '../types';
import { getT } from '../data/translations';

interface CustomContact {
  id: string;
  name: string;
  number: string;
}

interface EmergencyBarProps {
  isOpen: boolean;
  onClose: () => void;
  language: SupportedLanguage;
}

export const EmergencyBar: React.FC<EmergencyBarProps> = ({ isOpen, onClose, language }) => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);
  const [customContacts, setCustomContacts] = useState<CustomContact[]>([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const t = getT(language);

  React.useEffect(() => {
    const saved = localStorage.getItem('myright_sos_contacts');
    if (saved) {
      try {
        setCustomContacts(JSON.parse(saved));
      } catch(e) {}
    }
  }, []);

  const saveContacts = (contacts: CustomContact[]) => {
    setCustomContacts(contacts);
    localStorage.setItem('myright_sos_contacts', JSON.stringify(contacts));
  };

  const handleAddContact = () => {
    if (!newName.trim() || !newNumber.trim()) return;
    if (customContacts.length >= 3) {
      alert("You can only add up to 3 SOS contacts.");
      return;
    }
    const updated = [...customContacts, { id: crypto.randomUUID(), name: newName.trim(), number: newNumber.trim() }];
    saveContacts(updated);
    setNewName('');
    setNewNumber('');
  };

  const handleDeleteContact = (id: string) => {
    saveContacts(customContacts.filter(c => c.id !== id));
  };

  const handleSOSAlert = () => {
    if (customContacts.length === 0) {
      alert("Please add at least one emergency contact first.");
      return;
    }
    
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setIsLocating(false);
        const { latitude, longitude } = pos.coords;
        const mapsLink = `https://maps.google.com/?q=${latitude},${longitude}`;
        const message = `EMERGENCY SOS! I need help immediately. My current location is: ${mapsLink}`;
        
        const numbers = customContacts.map(c => c.number).join(',');
        // For Android/iOS sms protocol
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const separator = isIOS ? '&' : '?';
        window.location.href = `sms:${numbers}${separator}body=${encodeURIComponent(message)}`;
      },
      (error) => {
        setIsLocating(false);
        console.error("GPS Error:", error);
        alert("Could not get your location. Ensure GPS is enabled.");
        
        // Fallback without location
        const message = `EMERGENCY SOS! I need help immediately, but my GPS is off. Please contact me!`;
        const numbers = customContacts.map(c => c.number).join(',');
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const separator = isIOS ? '&' : '?';
        window.location.href = `sms:${numbers}${separator}body=${encodeURIComponent(message)}`;
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  };

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  return (
    <>
      {/* Rapid Emergency Helpline Banner in Page */}
      <section className="bg-gradient-to-r from-[#458393] via-[#34A99D] to-[#1A3841] text-[#FFF3C8] py-4 px-4 sm:px-6 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-red-600 flex items-center justify-center text-white shadow-md shrink-0 animate-bounce ring-2 ring-white/30">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-sm sm:text-base tracking-tight text-[#FFF3C8]">
                  {t.emergencyTitle}
                </span>
                <span className="bg-red-500/30 text-white text-[10px] uppercase font-black px-3 py-0.5 rounded-full border border-red-400/40">
                  Govt of India
                </span>
              </div>
              <p className="text-xs text-[#E5CB90] font-bold">
                {t.emergencySubtitle}
              </p>
            </div>
          </div>

          {/* Helpline Quick Chips - Circular & Interactive */}
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {EMERGENCY_CONTACTS.slice(0, 4).map((c) => (
              <div
                key={c.number}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF3C8]/15 hover:bg-[#FFF3C8]/25 border border-[#E5CB90]/40 transition-all hover:scale-105 shadow-2xs"
              >
                <span className="text-xs font-black text-[#FFF3C8]">{c.name.split(' ')[0]}:</span>
                <a
                  href={`tel:${c.number}`}
                  className="text-sm font-black text-[#E5CB90] hover:underline tracking-wider"
                >
                  {c.number}
                </a>
                <button
                  onClick={() => handleCopy(c.number)}
                  title="Copy number"
                  className="w-6 h-6 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-[#FFF3C8] cursor-pointer transition-colors"
                >
                  {copiedNumber === c.number ? <Check className="w-3.5 h-3.5 text-green-300" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Full SOS Emergency Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A3841]/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-2xl bg-[#FFF3C8] rounded-[36px] border-4 border-red-500/80 shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-red-600 to-rose-700 p-6 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-7 h-7 text-yellow-300 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black tracking-tight">EMERGENCY SOS & LEGAL ASSISTANCE</h3>
                    <p className="text-xs text-red-100 font-semibold">
                      Immediate protocol for police confrontation or unlawful detention
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full hover:bg-white/20 text-white transition-colors flex items-center justify-center cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-5 max-h-[75vh] overflow-y-auto">
                
                {/* Personal SOS Contacts Section */}
                <div className="p-5 rounded-3xl bg-white border-2 border-red-200 shadow-sm space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-black text-[#1A3841] flex items-center gap-2">
                        <MessageCircleWarning className="w-5 h-5 text-red-600" />
                        My SOS Contacts
                      </h4>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Save up to 3 trusted contacts (Stored Locally)</p>
                    </div>
                    
                    <button
                      onClick={handleSOSAlert}
                      disabled={isLocating || customContacts.length === 0}
                      className="px-4 py-2 bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-xs rounded-xl shadow-lg shadow-red-500/30 flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLocating ? <MapPin className="w-4 h-4 animate-bounce" /> : <MessageCircleWarning className="w-4 h-4 animate-pulse" />}
                      {isLocating ? 'Locating...' : 'SEND SOS MSG'}
                    </button>
                  </div>

                  {customContacts.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {customContacts.map(contact => (
                        <div key={contact.id} className="p-3 bg-red-50 rounded-xl border border-red-100 flex justify-between items-center group">
                          <div className="overflow-hidden">
                            <p className="font-bold text-xs text-red-900 truncate">{contact.name}</p>
                            <p className="font-black text-sm text-red-700">{contact.number}</p>
                          </div>
                          <button onClick={() => handleDeleteContact(contact.id)} className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-100 rounded-lg">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {customContacts.length < 3 && (
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input 
                        type="text" 
                        placeholder="Name (e.g. Brother)" 
                        value={newName} 
                        onChange={e => setNewName(e.target.value)}
                        className="flex-1 px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                      />
                      <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        value={newNumber} 
                        onChange={e => setNewNumber(e.target.value)}
                        className="flex-1 px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                      />
                      <button 
                        onClick={handleAddContact}
                        disabled={!newName.trim() || !newNumber.trim()}
                        className="px-4 py-2 bg-slate-800 text-white font-bold text-sm rounded-xl hover:bg-slate-700 transition-colors disabled:bg-slate-300 flex items-center justify-center gap-1 shrink-0"
                      >
                        <Plus className="w-4 h-4" /> Add
                      </button>
                    </div>
                  )}
                </div>

                {/* Immediate Rule Reminder */}
                <div className="p-5 rounded-3xl bg-red-50 border-2 border-red-200 flex items-start gap-3 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-5 h-5 text-red-700" />
                  </div>
                  <div className="text-xs text-red-900 leading-relaxed font-bold space-y-1">
                    <p className="font-black text-sm text-red-950">Immediate Checklist for Police Detention:</p>
                    <p>1. Stay calm. State clearly: “I am cooperating, please tell me the grounds of arrest under Article 22(1).”</p>
                    <p>2. You have the statutory right to make 1 phone call to a family member or advocate.</p>
                    <p>3. Do NOT sign blank papers or unread confessions.</p>
                  </div>
                </div>

                {/* Helpline Numbers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {EMERGENCY_CONTACTS.map((item) => (
                    <div
                      key={item.number}
                      className="p-4 rounded-3xl bg-white border-2 border-[#E5CB90] shadow-sm flex items-center justify-between hover:border-[#34A99D] hover:shadow-md transition-all group"
                    >
                      <div>
                        <span className="text-xs font-black text-[#1A3841] block">{item.name}</span>
                        <span className="text-lg font-black text-red-600 tracking-wide">{item.number}</span>
                        <p className="text-[11px] text-[#458393] font-bold leading-tight mt-0.5">{item.description}</p>
                      </div>

                      <div className="flex flex-col gap-2 shrink-0 ml-3">
                        <a
                          href={`tel:${item.number}`}
                          className="px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-black flex items-center justify-center gap-1.5 shadow-xs hover:scale-105 transition-transform"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call</span>
                        </a>
                        <button
                          onClick={() => handleCopy(item.number)}
                          className="px-3 py-1 rounded-full bg-[#E5CB90]/40 text-[#1A3841] text-[10px] font-black hover:bg-[#E5CB90] cursor-pointer text-center"
                        >
                          {copiedNumber === item.number ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* NALSA Portal Link */}
                <div className="p-5 rounded-3xl bg-[#34A99D]/15 border-2 border-[#34A99D] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-bold text-[#1A3841]">
                  <div>
                    <span className="font-black block text-sm">Need Free Legal Aid?</span>
                    <span className="text-[#458393]">NALSA provides free advocates under Article 39A for eligible citizens & arrested individuals.</span>
                  </div>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#458393] hover:bg-[#34A99D] text-white text-xs font-black flex items-center justify-center gap-1.5 shrink-0 shadow-md hover:scale-105 transition-all"
                  >
                    <span>NALSA Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

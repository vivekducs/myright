import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckSquare, Square, AlertOctagon, Printer, Share2, Scale, Info } from 'lucide-react';
import { ThreeDCard } from './ThreeDCard';

export const DKBasuCard: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const guidelines = [
    {
      num: 1,
      title: 'Accurate Name & Rank Badge',
      desc: 'The arresting police personnel must wear accurate, visible, and clear identification name tags with their designations.',
    },
    {
      num: 2,
      title: 'Preparation of Official Arrest Memo',
      desc: 'Police MUST prepare an Arrest Memo at the spot stating the exact time and date of arrest. It must be attested by at least one independent witness (family member or respectable local citizen) and counter-signed by the arrested person.',
    },
    {
      num: 3,
      title: 'Right to Inform Family / Friend',
      desc: 'The arrested person is entitled to have one friend, relative, or person interested in their welfare informed of their arrest and place of detention within 8 to 12 hours.',
    },
    {
      num: 4,
      title: 'Entry in Station General Diary (GD)',
      desc: 'An entry must be made in the official police station diary stating who was informed of the arrest and the names of police officers who have custody of the arrestee.',
    },
    {
      num: 5,
      title: 'Physical & Medical Inspection Memo',
      desc: 'The arrested person should be examined at the time of arrest and major/minor injuries recorded in an "Inspection Memo" signed by both the arrestee and officer.',
    },
    {
      num: 6,
      title: 'Medical Checkup Every 48 Hours',
      desc: 'The arrestee must undergo a medical examination by a trained doctor on the panel of approved doctors every 48 hours during detention in custody.',
    },
    {
      num: 7,
      title: 'Copies Sent to Area Magistrate',
      desc: 'Copies of all arrest documents including the Arrest Memo must be sent to the Illaqa (Area) Magistrate for their official record.',
    },
    {
      num: 8,
      title: 'Right to Meet Legal Counsel',
      desc: 'The arrested person may be permitted to meet and consult with an advocate of their choice during interrogation, though not throughout the entire questioning (Sec 41D CrPC).',
    },
    {
      num: 9,
      title: 'Police Control Room Notification',
      desc: 'A Police Control Room must be set up at all district and state headquarters, and information regarding the arrest and place of custody must be communicated within 12 hours.',
    },
    {
      num: 10,
      title: 'Notice Board Display at Station',
      desc: 'The details of the arrest and persons detained must be prominently displayed on the notice board at the police control room / station.',
    },
    {
      num: 11,
      title: 'Departmental & Contempt Penalties for Police Breach',
      desc: 'Failure to comply with these 11 requirements renders the concerned police officers liable to departmental action as well as contempt of court in High Court / Supreme Court.',
    },
  ];

  const toggleCheck = (idx: number) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = Math.round((completedCount / guidelines.length) * 100);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5CB90]/60 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#458393] text-white">
              Landmark Supreme Court Safeguard
            </span>
            <span className="text-xs font-bold text-[#34A99D]">
              D.K. Basu v. State of West Bengal (AIR 1997 SC 610)
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3841] tracking-tight">
            The 11 Mandatory D.K. Basu Arrest Guidelines Checklist
          </h2>
          <p className="text-sm text-[#458393] font-medium">
            Use this interactive compliance checklist if you or an acquaintance is faced with police arrest or detention in India.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FFF3C8] hover:bg-[#E5CB90] border border-[#E5CB90] text-[#1A3841] font-bold text-xs shadow-xs transition-colors"
          >
            <Printer className="w-4 h-4 text-[#458393]" />
            <span>Print Checklist</span>
          </button>
        </div>
      </div>

      {/* Progress Bar & Status */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#FFF3C8] to-[#E5CB90]/40 border border-[#E5CB90] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 w-full sm:w-auto">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#34A99D]" />
            <span className="font-extrabold text-sm text-[#1A3841]">
              Police Compliance Audit: {completedCount} of 11 Requirements Checked
            </span>
          </div>
          <p className="text-xs text-[#458393] font-medium">
            If the police violate any of these mandatory steps, it is grounds for immediate bail and Contempt of Court proceedings.
          </p>
        </div>

        <div className="w-full sm:w-48 bg-[#FFF3C8] rounded-full h-3.5 border border-[#E5CB90] overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#34A99D] to-[#458393] h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 11 Guidelines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {guidelines.map((item, idx) => {
          const isChecked = !!checkedItems[idx];
          return (
            <ThreeDCard key={item.num} className="cursor-pointer" onClick={() => toggleCheck(idx)}>
              <div className={`h-full p-5 rounded-2xl border transition-all flex items-start gap-3.5 ${
                isChecked
                  ? 'bg-emerald-50/80 border-emerald-300 shadow-sm'
                  : 'bg-[#FFF3C8] border-[#E5CB90] hover:bg-[#E5CB90]/25'
              }`}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCheck(idx);
                  }}
                  className="mt-0.5 text-[#458393] hover:text-[#34A99D] transition-colors shrink-0"
                >
                  {isChecked ? (
                    <CheckSquare className="w-6 h-6 text-emerald-600" />
                  ) : (
                    <Square className="w-6 h-6 text-[#458393]" />
                  )}
                </button>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#458393] text-[#FFF3C8] flex items-center justify-center text-xs font-black shrink-0">
                      {item.num}
                    </span>
                    <h3 className="font-extrabold text-sm text-[#1A3841] leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#458393] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </ThreeDCard>
          );
        })}
      </div>

      {/* Supreme Court Warning Box */}
      <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
        <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-950 font-medium leading-relaxed">
          <span className="font-bold block text-sm text-amber-900">Legal Precedent & Punishment for Police Violation:</span>
          Under paragraph 36 of the D.K. Basu judgment, any failure by police officials to fulfill these conditions renders them liable to be proceeded against for Contempt of Court, in addition to statutory departmental penalties and Section 166 IPC / BNS for disobeying law.
        </div>
      </div>
    </div>
  );
};

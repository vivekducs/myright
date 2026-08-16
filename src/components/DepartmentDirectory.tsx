import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  ExternalLink,
  Phone,
  Search,
  CheckCircle2,
  Shield,
  FileText,
  Globe,
  ArrowRight,
  Filter
} from 'lucide-react';
import { DepartmentLink, SupportedLanguage, DetailPageTarget } from '../types';
import { OFFICIAL_DEPARTMENTS } from '../data/departmentData';
import { getT } from '../data/translations';

interface DepartmentDirectoryProps {
  language: SupportedLanguage;
  onSelectTarget: (target: DetailPageTarget) => void;
}

export const DepartmentDirectory: React.FC<DepartmentDirectoryProps> = ({
  language,
  onSelectTarget,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const t = getT(language);

  const categories = [
    { id: 'all', label: t.allDepartmentsCat },
    { id: 'police', label: t.policeHomeAffairsCat },
    { id: 'traffic', label: t.trafficTransportCat },
    { id: 'cyber', label: t.cyberCrimeCat },
    { id: 'legal_aid', label: t.legalAidCat },
    { id: 'human_rights', label: t.humanRightsCat },
    { id: 'women_child', label: t.womenChildSafetyCat },
    { id: 'rti_vigilance', label: t.rtiVigilanceCat },
  ];

  const filteredDepts = OFFICIAL_DEPARTMENTS.filter((dept) => {
    const matchesCategory = selectedCategory === 'all' || dept.category === selectedCategory;
    const localizedName = dept.translations?.[language]?.name || dept.name;
    const localizedDesc = dept.translations?.[language]?.description || dept.description;
    const matchesSearch =
      searchQuery.trim() === '' ||
      localizedName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      localizedDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.ministryOrAuthority.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (dept.helplineNumber && dept.helplineNumber.includes(searchQuery));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="p-6 sm:p-10 rounded-[36px] bg-[#FFF3C8] border-3 border-[#34A99D] shadow-lg space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#34A99D] text-white shadow-xs">
            {t.officialGovDirectory}
          </span>
          <span className="px-3.5 py-1 rounded-full text-xs font-black bg-[#E5CB90]/80 text-[#1A3841] border border-[#E5CB90]">
            {t.verifiedGovPortals}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-[#1A3841] tracking-tight">
          {t.departmentsTitle}
        </h1>
        <p className="text-sm sm:text-base text-[#458393] font-bold max-w-3xl leading-relaxed">
          {t.departmentsSubtitle}
        </p>

        {/* Search Bar */}
        <div className="relative pt-2">
          <Search className="w-5 h-5 absolute left-4.5 top-5.5 text-[#458393]" />
          <input
            id="department-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchDeptsPlaceholder}
            className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border-2 border-[#E5CB90] focus:border-[#34A99D] focus:ring-4 focus:ring-[#34A99D]/20 outline-hidden text-sm font-bold text-[#1A3841] placeholder:text-[#458393]/60 transition-all shadow-xs"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`dept-cat-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[#458393] text-[#FFF3C8] shadow-md scale-105'
                  : 'bg-[#FFF3C8] hover:bg-[#E5CB90]/60 text-[#1A3841] border border-[#E5CB90]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Department Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDepts.map((dept) => {
          const localizedName = dept.translations?.[language]?.name || dept.name;
          const localizedDesc = dept.translations?.[language]?.description || dept.description;

          return (
            <motion.div
              key={dept.id}
              whileHover={{ y: -4 }}
              className="p-6 rounded-[32px] bg-[#FFF3C8] border-2 border-[#E5CB90] hover:border-[#34A99D] transition-all hover:shadow-xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Badge and Helpline */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#34A99D]/15 text-[#34A99D] border border-[#34A99D]/30 text-[11px] font-black uppercase tracking-wider">
                    {dept.verifiedGovBadge}
                  </span>
                  {dept.helplineNumber && (
                    <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-black">
                      ☎ {dept.helplineNumber}
                    </span>
                  )}
                </div>

                {/* Name & Ministry */}
                <div>
                  <h3 className="text-lg font-black text-[#1A3841] leading-tight">
                    {localizedName}
                  </h3>
                  <p className="text-xs text-[#458393] font-bold mt-1">
                    {dept.ministryOrAuthority}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-[#1A3841] font-semibold leading-relaxed line-clamp-3">
                  {localizedDesc}
                </p>

                {/* Services Provided Preview */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[10px] font-black uppercase text-[#458393] tracking-wide">
                    Citizen Services:
                  </div>
                  <div className="space-y-1">
                    {dept.servicesProvided.slice(0, 2).map((srv, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] font-bold text-[#1A3841]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#34A99D] shrink-0" />
                        <span className="truncate">{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-3 border-t border-[#E5CB90]/70">
                <button
                  id={`open-dept-detail-${dept.id}`}
                  onClick={() => onSelectTarget({ type: 'department', id: dept.id })}
                  className="w-full py-2.5 px-4 rounded-full bg-[#458393] hover:bg-[#34A99D] text-white text-xs font-black flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer hover:scale-[1.02]"
                >
                  <span>{t.openDetailPage}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={dept.portalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 px-3 rounded-full bg-white hover:bg-[#E5CB90]/40 border border-[#E5CB90] text-[#1A3841] text-[11px] font-black flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Launch Portal</span>
                    <ExternalLink className="w-3 h-3 text-[#458393]" />
                  </a>

                  {dept.helplineNumber && (
                    <a
                      href={`tel:${dept.helplineNumber}`}
                      className="py-2 px-3 rounded-full bg-red-600 hover:bg-red-700 text-white text-[11px] font-black flex items-center gap-1 transition-colors"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{dept.helplineNumber}</span>
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

      {filteredDepts.length === 0 && (
        <div className="p-12 text-center rounded-3xl bg-[#FFF3C8] border-2 border-[#E5CB90] space-y-2">
          <p className="text-base font-black text-[#1A3841]">No government departments match your query.</p>
          <p className="text-xs text-[#458393]">Try clearing search keywords or selecting "All Departments".</p>
        </div>
      )}
    </div>
  );
};

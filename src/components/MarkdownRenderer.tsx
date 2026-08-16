import React, { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ExternalLink, Shield, Scale, ChevronRight, Copy, Check, Info } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);

  const handleCopyCode = (codeText: string, index: number) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  return (
    <div className={`markdown-body text-[#1A3841] text-xs sm:text-sm leading-relaxed space-y-3 ${className}`}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-base sm:text-lg font-black text-[#1A3841] border-b border-[#E5CB90]/70 pb-1.5 mt-3.5 mb-2.5 flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#34A99D] shrink-0" />
              <span>{children}</span>
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-sm sm:text-base font-black text-[#1A3841] border-b border-[#E5CB90]/50 pb-1 mt-3 mb-2 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#458393] shrink-0" />
              <span>{children}</span>
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xs sm:text-sm font-black text-[#458393] mt-2.5 mb-1.5 uppercase tracking-wide flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34A99D]" />
              <span>{children}</span>
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xs font-bold text-[#1A3841] mt-2 mb-1">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="mb-2 leading-relaxed text-[#1A3841] text-xs sm:text-sm">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-black text-[#1A3841] bg-[#E5CB90]/40 px-1 py-0.5 rounded-sm">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic font-semibold text-[#1A3841]/90">
              {children}
            </em>
          ),
          ul: ({ children }) => (
            <ul className="space-y-1.5 my-2.5 pl-1">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="space-y-1.5 my-2.5 pl-2 list-decimal list-inside space-y-1.5">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="flex items-start gap-2 text-xs sm:text-sm text-[#1A3841] leading-relaxed">
              <span className="text-[#34A99D] mt-1 shrink-0">
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
              <span className="flex-1 min-w-0">{children}</span>
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="p-3.5 my-2.5 rounded-2xl bg-[#FFF3C8]/90 border-l-4 border-[#34A99D] text-xs sm:text-sm font-medium text-[#1A3841] shadow-2xs">
              <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#458393] mb-1">
                <Info className="w-3.5 h-3.5 text-[#34A99D]" />
                <span>Statutory Note / Script</span>
              </div>
              <div className="italic font-semibold leading-relaxed">
                {children}
              </div>
            </blockquote>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-0.5 my-0.5 rounded-md bg-[#34A99D]/15 text-[#1A3841] hover:bg-[#34A99D]/30 border border-[#34A99D]/30 font-bold text-xs transition-colors underline decoration-[#34A99D]"
            >
              <span>{children}</span>
              <ExternalLink className="w-3 h-3 text-[#34A99D]" />
            </a>
          ),
          hr: () => (
            <hr className="my-3 border-t-2 border-[#E5CB90]/60" />
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-3 rounded-2xl border-2 border-[#E5CB90] shadow-2xs">
              <table className="w-full text-left text-xs border-collapse bg-white">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-[#E5CB90]/50 text-[#1A3841] font-black border-b-2 border-[#E5CB90]">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-[#E5CB90]/40">
              {children}
            </tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-[#FFF3C8]/40 transition-colors">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="p-2.5 text-xs font-black text-[#1A3841]">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="p-2.5 text-xs font-semibold text-[#1A3841]">
              {children}
            </td>
          ),
          code: ({ className: codeClassName, children }) => {
            const isCodeBlock = codeClassName?.includes('language-');
            const codeString = String(children).replace(/\n$/, '');

            if (isCodeBlock) {
              return (
                <div className="relative my-3 rounded-2xl bg-[#1A3841] text-white p-3.5 font-mono text-xs overflow-x-auto shadow-md">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/15 text-[10px] text-[#E5CB90] font-black uppercase">
                    <span>Legal Citation / Script Code</span>
                    <button
                      onClick={() => handleCopyCode(codeString, 1)}
                      className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                    >
                      {copiedCodeIndex === 1 ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedCodeIndex === 1 ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="font-mono text-xs text-[#FFF3C8] whitespace-pre-wrap break-words">
                    {children}
                  </pre>
                </div>
              );
            }
            return (
              <code className="px-1.5 py-0.5 rounded-md bg-[#E5CB90]/40 font-mono text-[11px] font-bold text-[#1A3841] border border-[#E5CB90]">
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
};


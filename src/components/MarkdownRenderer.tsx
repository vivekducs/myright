import React from 'react';
import Markdown from 'react-markdown';
import { ExternalLink, Shield, Scale, ChevronRight } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  return (
    <div className={`markdown-body text-[#1A3841] text-xs sm:text-sm leading-relaxed space-y-3 ${className}`}>
      <Markdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-base sm:text-lg font-black text-[#1A3841] border-b border-[#E5CB90]/60 pb-1 mt-3 mb-2 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-[#34A99D] shrink-0" />
              <span>{children}</span>
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-sm sm:text-base font-black text-[#1A3841] border-b border-[#E5CB90]/40 pb-1 mt-2.5 mb-1.5 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#458393] shrink-0" />
              <span>{children}</span>
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xs sm:text-sm font-black text-[#458393] mt-2 mb-1 uppercase tracking-wide">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xs font-bold text-[#1A3841] mt-1.5 mb-0.5">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="mb-2 leading-relaxed text-[#1A3841]">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-black text-[#1A3841] bg-[#E5CB90]/30 px-1 py-0.5 rounded-sm">
              {children}
            </strong>
          ),
          ul: ({ children }) => (
            <ul className="space-y-1.5 my-2 pl-2 border-l-2 border-[#34A99D]/40">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="space-y-1.5 my-2 pl-2 list-decimal list-inside border-l-2 border-[#458393]/40">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="flex items-start gap-1.5 text-xs sm:text-sm">
              <span className="text-[#34A99D] mt-1 shrink-0">
                <ChevronRight className="w-3 h-3" />
              </span>
              <span className="flex-1">{children}</span>
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="p-3 my-2 rounded-2xl bg-[#FFF3C8]/80 border-l-4 border-[#34A99D] text-xs sm:text-sm font-medium text-[#1A3841] shadow-2xs">
              {children}
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
          code: ({ children }) => (
            <code className="px-1.5 py-0.5 rounded-md bg-stone-100 font-mono text-[11px] text-[#1A3841] border border-stone-300">
              {children}
            </code>
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
};

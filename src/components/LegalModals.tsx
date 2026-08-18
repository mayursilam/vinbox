import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-zinc-200 relative overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-5">
          <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
              Legal &amp; Compliance
            </span>
            <h3 className="text-xl font-bold text-zinc-900">
              Privacy Policy &amp; Data Security
            </h3>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-zinc-600 leading-relaxed">
          <p>
            <strong>Effective Date:</strong> January 1, 2026
          </p>
          <p>
            At <strong>Vinbox</strong> ({COMPANY_INFO.location}), we treat all client files, source design packages, translation memories, and proprietary business collateral with the highest degree of confidentiality and data security.
          </p>
          
          <h4 className="font-bold text-zinc-900 text-sm pt-2">1. Client Asset Confidentiality</h4>
          <p>
            All files submitted for desktop publishing (including InDesign packages, fonts, graphics, and translation exports) are processed solely for the fulfillment of agreed-upon localization deliverables. We never share, publish, or use client source assets for any purpose outside the contracted scope.
          </p>

          <h4 className="font-bold text-zinc-900 text-sm pt-2">2. Strict Bilateral NDA Enforcement</h4>
          <p>
            We execute standard or custom mutual Non-Disclosure Agreements (NDAs) with language service providers, advertising agencies, and corporate clients prior to file transfers. All internal DTP operators in our Pune facility are legally bound by stringent confidentiality agreements.
          </p>

          <h4 className="font-bold text-zinc-900 text-sm pt-2">3. Data Retention &amp; Secure Disposal</h4>
          <p>
            Project files are archived on encrypted, access-restricted storage for 90 days following final delivery to accommodate client revisions, after which they can be permanently expunged upon client request.
          </p>

          <h4 className="font-bold text-zinc-900 text-sm pt-2">4. Inquiries &amp; Compliance Contact</h4>
          <p>
            For questions regarding privacy, security credentials, or data handling, reach out directly to our Data Protection Officer at <a href={`mailto:${COMPANY_INFO.email}`} className="text-indigo-600 font-semibold underline">{COMPANY_INFO.email}</a>.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};

export const TermsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-zinc-200 relative overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-5">
          <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
              Agency Terms
            </span>
            <h3 className="text-xl font-bold text-zinc-900">
              Terms of Service &amp; SLA
            </h3>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-zinc-600 leading-relaxed">
          <p>
            <strong>Standard Service Level Agreement (SLA):</strong>
          </p>
          <p>
            Vinbox provides specialized desktop publishing and localized layout services in accordance with ISO 9001:2015 and ISO 17100 standard quality guidelines.
          </p>

          <h4 className="font-bold text-zinc-900 text-sm pt-2">1. Scope &amp; Estimates</h4>
          <p>
            All formal project quotations detail the agreed-upon source files, target language deliverables, turnaround schedule, and pre-press output formats (e.g. PDF/X-1a or PDF/X-4).
          </p>

          <h4 className="font-bold text-zinc-900 text-sm pt-2">2. Quality Assurance &amp; Revisions</h4>
          <p>
            Each deliverable undergoes dual-pass technical and linguistic QA. In the event of typographical or alignment discrepancies attributed to our typesetting, revisions are performed free of charge within 14 business days of file delivery.
          </p>

          <h4 className="font-bold text-zinc-900 text-sm pt-2">3. Font &amp; Asset Licensing</h4>
          <p>
            Clients must ensure they have licensed any proprietary corporate fonts or source artwork provided for formatting. Vinbox utilizes verified open-source (Google Fonts, Noto) or client-authorized fonts.
          </p>

          <h4 className="font-bold text-zinc-900 text-sm pt-2">4. Payment &amp; Agency Retainers</h4>
          <p>
            Standard payment terms for vetted language service providers and marketing agencies are Net-30 from invoice issuance, supported via international wire, ACH, and SWIFT.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};

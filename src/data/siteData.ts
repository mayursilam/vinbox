import { ServiceItem, PortfolioItem, ScriptFamily, TestimonialItem, FaqItem } from '../types';

export const COMPANY_INFO = {
  name: 'Vinbox',
  tagline: 'Multilingual Desktop Publishing & Localisation Services',
  location: 'Pune, Maharashtra, India',
  fullAddress: 'Level 4, Synergy Commercial Hub, Baner High Street, Pune 411045, Maharashtra, India',
  email: 'projects@vinbox.in',
  inquiryEmail: 'hello@vinbox.in',
  phone: '+91 20 6789 0123',
  whatsapp: '+91 98230 11456',
  workingHours: 'Mon – Sat: 08:30 – 21:30 IST (24/6 Global Support covering EST, GMT, CET, JST)',
  experienceYears: '12+',
  languagesCount: '100+',
  projectsCompleted: '5,400+',
  satisfactionRate: '99.8%',
  isoStandards: 'ISO 9001:2015 & ISO 17100 Compliant Workflow',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'multilingual-layout',
    title: 'Multilingual Layout & Typesetting',
    shortDesc: 'Pixel-perfect desktop publishing in Adobe InDesign, Illustrator, and QuarkXPress across Latin, Cyrillic, Indic, and Asian scripts.',
    fullDesc: 'We format translated copy into your source design files while respecting original branding, grid structures, and typographic hierarchy. Our specialists manage text expansion, line breaking, widow/orphan control, and kerning rules for every individual target language.',
    iconName: 'Layout',
    tools: ['Adobe InDesign (CC)', 'Adobe Illustrator', 'QuarkXPress', 'Adobe InCopy'],
    keyDeliverables: [
      'Layer-synchronized native INDD / IDML files',
      'Press-ready high-res CMYK PDFs with bleed and crop marks',
      'Optimized digital interactive PDFs with intact bookmarks & hyperlinks',
      'Embedded font package with open-license or client-licensed typefaces'
    ],
    popularFor: 'Marketing brochures, corporate annual reports, product catalogs, brand guidelines'
  },
  {
    id: 'rtl-bidirectional',
    title: 'RTL & Bidirectional Formatting (Arabic & Hebrew)',
    shortDesc: 'Expert right-to-left layout mirroring, numeral adaptation, and bidirectional text flow for Middle Eastern and North African markets.',
    fullDesc: 'RTL localization requires complete structural mirroring—flipping page geometry, table columns, bullet lists, callout pointers, and imagery while maintaining English brand marks and SKU codes in correct LTR direction. We ensure zero text truncation and authentic typography.',
    iconName: 'FlipHorizontal',
    tools: ['InDesign ME (Middle Eastern)', 'Illustrator ME', 'World-Ready Composer'],
    keyDeliverables: [
      'Mirrored page geometry and layout grids',
      'Correct Arabic Nastaliq, Naskh & Modern Kufic font rendering',
      'Flipped infographics, table hierarchies, and diagram callouts',
      'Verified Eastern Arabic / Hindi numerals or Western digits per market'
    ],
    popularFor: 'GCC regional packaging, Middle Eastern user manuals, banking brochures, safety leaflets'
  },
  {
    id: 'technical-manuals',
    title: 'Technical Documentation & FrameMaker DTP',
    shortDesc: 'High-volume technical manual formatting, FrameMaker to InDesign conversions, and structured XML/DITA publishing.',
    fullDesc: 'Handling massive 500+ page technical manuals, service guides, and automotive schematics. We preserve cross-references, index markers, conditional text tags, table of contents, and figure numbering across dozens of language variants simultaneously.',
    iconName: 'FileText',
    tools: ['Adobe FrameMaker', 'DITA / XML', 'PTC Arbortext', 'RoboHelp', 'MS Word'],
    keyDeliverables: [
      'Synchronized multi-volume book files (.book / .fm)',
      'Automated index, TOC, and cross-reference re-generation',
      'Single-sourcing conditional text layout management',
      'Validation of ISO/ANSI warning symbols and standard hazard banners'
    ],
    popularFor: 'Automotive service manuals, medical device IFUs, heavy machinery guides, appliance handbooks'
  },
  {
    id: 'graphics-artwork',
    title: 'Graphic & Artwork Localization',
    shortDesc: 'Vector graphics text extraction, layered artwork adaptation, screenshot replacement, and localized packaging prepress.',
    fullDesc: 'We de-embed non-editable text from flattened raster and vector files, recreate editable source layers in Adobe Illustrator & Photoshop, replace software UI screenshots with native language captures, and adapt packaging dielines to comply with regional regulatory labeling.',
    iconName: 'Palette',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'CorelDRAW'],
    keyDeliverables: [
      'Rebuilt layered AI/PSD files with localized live text',
      'Native OS and application localized screenshot replacements',
      'Packaging dieline adjustments with regulatory barcode integration',
      'Multi-lingual vector icon libraries and technical schematic callouts'
    ],
    popularFor: 'FMCG packaging, consumer electronics boxes, software UI documentation, retail POS displays'
  },
  {
    id: 'elearning-digital',
    title: 'E-Learning & Digital Collateral Formatting',
    shortDesc: 'Localizing digital courses, interactive presentations, Canva decks, and slide layouts without breaking interactive triggers.',
    fullDesc: 'We format interactive e-learning modules in Articulate Storyline, Adobe Captivate, and PPTX decks. We adjust text boxes to accommodate language expansion, re-sync audio cue points, and verify that navigation buttons and quiz states retain visual clarity.',
    iconName: 'MonitorPlay',
    tools: ['Articulate Storyline 360', 'Adobe Captivate', 'PowerPoint / Keynote', 'Canva Pro'],
    keyDeliverables: [
      'Localized source course packages (.story / .cptx)',
      'Aligned subtitle timings and voiceover sync markers',
      'Interactive quiz and button state re-alignment for expanded text',
      'HTML5 SCORM-compliant publish packages'
    ],
    popularFor: 'Corporate compliance training, global sales enablement decks, software onboarding courses'
  },
  {
    id: 'prepress-qa',
    title: 'Pre-Press QA & Linguistic DTP Inspection',
    shortDesc: 'Rigorous pre-flight quality checks, font license compliance, color separation (CMYK/Pantone), and native DTP proofing.',
    fullDesc: 'Our dedicated QA team conducts exhaustive two-pass inspections: a technical preflight pass (checking overprint, trapping, image resolution, color profiles, bleed boundaries) and a linguistic DTP pass (verifying missing accents, improper hyphenation, character corruption, and baseline alignment).',
    iconName: 'ShieldCheck',
    tools: ['Adobe Acrobat Pro Preflight', 'PitStop Pro', 'FlightCheck', 'InDesign Live Preflight'],
    keyDeliverables: [
      'Certified PDF/X-1a and PDF/X-4 print-ready output',
      'Detailed DTP QA Checklist sign-off report',
      'Zero corrupted glyph or font-substitution certification',
      'Side-by-side comparison overlays against approved translation memories'
    ],
    popularFor: 'Pharmaceutical packaging, luxury print magazines, high-stakes trade show collateral'
  }
];

export const SCRIPT_FAMILIES_DATA: ScriptFamily[] = [
  {
    id: 'indic',
    name: 'Indic & South Asian (Hindi, Marathi, Tamil, Bengali)',
    scripts: ['Devanagari (Hindi, Marathi)', 'Tamil', 'Telugu', 'Bengali', 'Gujarati', 'Kannada', 'Malayalam'],
    expansionFactor: '+15% to +25% vertical & horizontal expansion',
    specialHandling: [
      'Complex conjunct consonants (Matras) requiring Unicode OpenType engines',
      'Vertical ascender/descender clearance to prevent text clipping',
      'Custom baseline shift adjustments for headline typography',
      'Strict prevention of improper syllable splitting at line breaks'
    ],
    sampleOriginal: 'Precision Engineering for Global Industries',
    sampleLocalized: 'वैश्विक उद्योगों के लिए सटीक अभियांत्रिकी (Devanagari / Hindi)',
    fontNotes: 'Optimized with Noto Sans Devanagari, Mangal, Kohinoor, and custom licensed Indian typefaces.'
  },
  {
    id: 'rtl',
    name: 'Right-To-Left (Arabic, Hebrew, Urdu, Farsi)',
    scripts: ['Arabic (Modern Standard & Gulf)', 'Hebrew', 'Urdu', 'Persian / Farsi'],
    expansionFactor: '-10% to +15% length variance with complete layout mirroring',
    specialHandling: [
      'Full horizontal mirroring of columns, tables, headers, and tabs',
      'Bidirectional handling preserving LTR brand names and serial numbers',
      'Kashida justification and ligature spacing for formal Arabic',
      'Correct right-aligned punctuation and bracket positioning'
    ],
    sampleOriginal: 'Authorized Service Center and Warranty Guide',
    sampleLocalized: 'مركز الخدمة المعتمد ودليل الضمان (Arabic Standard)',
    fontNotes: 'Rendered using InDesign ME World-Ready Composer with Frutiger LT Arabic, GE SS, and Dubai Font.'
  },
  {
    id: 'cjk',
    name: 'East Asian (Japanese, Simplified/Traditional Chinese, Korean)',
    scripts: ['Japanese (Kanji, Hiragana, Katakana)', 'Chinese Simplified (Mandarin)', 'Chinese Traditional (Cantonese/Taiwan)', 'Korean (Hangul)'],
    expansionFactor: '-20% to -35% compression (vertical box re-balancing required)',
    specialHandling: [
      'Kinsoku Shori rules to eliminate illegal line start/end characters',
      'Tate-chū-yoko (horizontal in vertical) typesetting for numerical indices',
      'Ruby / Furigana phonetic pronunciation character annotations',
      'Proper whitespace management without Latin word-spacing gaps'
    ],
    sampleOriginal: 'High Performance Thermal Management Systems',
    sampleLocalized: '高性能熱管理システム (Japanese) / 高性能热管理系统 (Simp. Chinese)',
    fontNotes: 'Crafted with Morisawa, Source Han Sans, Hiragino Kaku Gothic, and MS YaHei.'
  },
  {
    id: 'european-cyrillic',
    name: 'European & Cyrillic (German, French, Spanish, Russian)',
    scripts: ['German', 'French', 'Spanish', 'Italian', 'Russian (Cyrillic)', 'Polish', 'Greek', 'Turkish'],
    expansionFactor: '+25% to +40% expansion in German, French, and Slavic languages',
    specialHandling: [
      'Managing extreme compound words (e.g. German multi-syllable terms)',
      'Language-specific hyphenation dictionaries and soft hyphen insertion',
      'Preservation of French non-breaking spaces before colons and guillemets (« »)',
      'Accented diacritics check across Polish (ą, ę, ś) and Turkish (ğ, ı, ş)'
    ],
    sampleOriginal: 'Integrated Environmental Management Policy',
    sampleLocalized: 'Integrierte Umweltmanagementrichtlinie (German, +35% length)',
    fontNotes: 'Full Latin Extended and Cyrillic character set compliance using Helvetica Neue, Din Pro, and Proxima Nova.'
  },
  {
    id: 'southeast-asian',
    name: 'Southeast Asian (Thai, Vietnamese, Khmer, Burmese)',
    scripts: ['Thai', 'Vietnamese', 'Khmer (Cambodian)', 'Burmese (Myanmar)'],
    expansionFactor: '+10% to +30% with multi-tier vertical accent stacking',
    specialHandling: [
      'Thai non-spaced continuous text requiring intelligent dictionary line-breaking',
      'Multi-level tone marks (Mai Ek, Mai Tho) requiring extra leading/line height',
      'Vietnamese complex double-diacritics (ấ, ề, ỗ, ự) without font fallback clipping',
      'Khmer script subscript consonant stack positioning'
    ],
    sampleOriginal: 'Operating Instructions and Safety Precautions',
    sampleLocalized: 'คู่มือการใช้งานและข้อควรระวังเพื่อความปลอดภัย (Thai)',
    fontNotes: 'Executed using Cordia New, DB Helvethaica, Prompt, and Noto Sans Thai.'
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'case-1',
    title: '420-Page Heavy Machinery Service Manual',
    clientType: 'Global Automotive & Equipment Manufacturer',
    category: 'Technical Manuals',
    languages: ['German', 'Spanish', 'French', 'Russian', 'Arabic (RTL)', 'Japanese', 'Hindi'],
    toolsUsed: ['Adobe FrameMaker', 'Adobe InDesign CC', 'Illustrator', 'SDL Trados Studio'],
    pageCount: '420 pages × 7 languages (2,940 total pages)',
    turnaround: '9 business days',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    challenge: 'Original FrameMaker book contained over 1,800 technical CAD callouts, complex electrical wiring schematics, and tight tabular data. German text expanded by 34%, while Arabic required complete right-to-left layout reversal including mirrored schematic pointer arrows.',
    solution: 'Vinbox deployed a 4-person DTP pod in Pune. We created unified master paragraph styles with dynamic auto-leading for Indic and Arabic, mirrored CAD vector layers in Illustrator, and regenerated automated multi-language index and cross-reference tables.',
    results: [
      '100% first-pass approval from client engineering review board',
      'Delivered 2 days ahead of scheduled product launch',
      'Saved client 40% in internal production costs compared to Western DTP bureaus'
    ]
  },
  {
    id: 'case-2',
    title: 'Luxury Cosmetic Packaging & Compliance Dielines',
    clientType: 'European Skincare Brand & Global Marketing Agency',
    category: 'Packaging & Retail',
    languages: ['Arabic (GCC Regulatory)', 'Hebrew', 'Japanese', 'Korean', 'Traditional Chinese'],
    toolsUsed: ['Adobe Illustrator CC', 'ESKO ArtiosCAD', 'Photoshop'],
    pageCount: '64 unique product SKUs & cartons',
    turnaround: '5 business days',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    challenge: 'Strict regulatory packaging laws in the UAE and Japan required precise legal ingredient listings, barcode placements, and certification marks to fit on compact 50ml dropper bottles without altering the clean minimalist brand identity.',
    solution: 'Rebuilt vector packaging master files with localized type layers. Micro-adjusted kerning, tracking, and baseline shifts for Arabic Nastaliq and Japanese Kanji while maintaining 100% legibility under 5pt regulatory micro-print standards.',
    results: [
      'Flawless pre-press validation in Dubai and Tokyo customs clearance',
      'Zero color shift or plate misalignment across CMYK + 3 Pantone spot inks',
      'Turned into an ongoing monthly retainer for all seasonal SKU releases'
    ]
  },
  {
    id: 'case-3',
    title: 'Enterprise SaaS Marketing Collateral & Whitepapers',
    clientType: 'Silicon Valley Cloud Platform',
    category: 'Marketing & Collateral',
    languages: ['German', 'French', 'Italian', 'Brazilian Portuguese', 'Japanese', 'Simplified Chinese'],
    toolsUsed: ['Adobe InDesign CC', 'Figma', 'Adobe InCopy', 'Phrase TMS'],
    pageCount: '12 multi-page case studies & 3 flagship whitepapers',
    turnaround: '72 hours rush turnaround',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80',
    challenge: 'High-visibility marketing collateral featuring isometric tech illustrations, client quote callout boxes, and multi-tier pricing comparison tables that broke when translated into longer European text.',
    solution: 'Engineered responsive layout grids in InDesign CC. Adapted graphic elements and card containers dynamically so German and Portuguese translations flowed naturally without clipping or awkward empty spaces.',
    results: [
      'Enabled simultaneous worldwide product launch across 6 major regions',
      'Provided web-optimized and press-ready PDFs within 72 hours',
      'Recognized as preferred Global DTP partner for all marketing sprints'
    ]
  },
  {
    id: 'case-4',
    title: 'Interactive Medical E-Learning Certification Modules',
    clientType: 'Healthcare Education Provider',
    category: 'E-Learning & Digital',
    languages: ['Spanish (LatAm)', 'Portuguese', 'Turkish', 'Arabic', 'Thai', 'Vietnamese'],
    toolsUsed: ['Articulate Storyline 360', 'Adobe Photoshop', 'PowerPoint'],
    pageCount: '18 modules (approx. 450 interactive slides)',
    turnaround: '12 business days',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    challenge: 'Clinical terminology slides contained precise medical diagrams with labeled anatomical parts, timed voiceover cues, and interactive drag-and-drop knowledge checks that failed in Thai and Arabic scripts.',
    solution: 'Re-flowed text containers in Storyline, re-anchored trigger states, adjusted character tracking for Southeast Asian tone marks, and mirrored slide progression workflows for Middle Eastern learners.',
    results: [
      'Over 25,000 healthcare professionals certified across 8 international regions',
      'Zero audio-to-text timing desynchronization errors',
      'Perfect SCORM 2004 LMS compliance across all language exports'
    ]
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'File Intake & Font Audit',
    desc: 'We analyze source package files (INDD, AI, FrameMaker, Figma), perform font licensing checks, identify complex text expansion risks, and review translation memory/IDML handoffs.'
  },
  {
    number: '02',
    title: 'IDML Ingestion & Typesetting',
    desc: 'Our DTP specialists import localized bilingual files, apply language-specific typographical rules (hyphenation, line breaks, RTL mirroring), and re-balance visual grids.'
  },
  {
    number: '03',
    title: 'Dual-Pass Linguistic & Preflight QA',
    desc: 'Every file passes through an automated preflight check for overprint and bleed, followed by a meticulous side-by-side DTP review against approved bilingual source scripts.'
  },
  {
    number: '04',
    title: 'Final Delivery & Packaged Assets',
    desc: 'We deliver clean, organized native source packages (INDD + linked assets + fonts) along with certified high-resolution print-ready PDFs and interactive web-optimized digital outputs.'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'Vinbox has been our go-to multilingual DTP partner in Pune for over 4 years. Whether we throw a 600-page FrameMaker manual in 14 languages or a rush InDesign catalog for Arabic and Japanese, their turnaround and typographic accuracy are unmatched in the industry.',
    author: 'Marcus Vance',
    role: 'Director of Localization Operations',
    company: 'VerbaGlobal Language Solutions',
    location: 'London & Zurich',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    id: 'test-2',
    quote: 'Finding a DTP vendor who truly understands Middle Eastern RTL layout mirroring and Indic font conjuncts used to take us weeks of painful back-and-forth. Vinbox delivers pristine, ready-to-print PDFs on the very first pass. They are an indispensable extension of our production team.',
    author: 'Elena Rostova',
    role: 'Senior Project Manager',
    company: 'Apex Media & Translation Agency',
    location: 'Berlin, Germany',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    id: 'test-3',
    quote: 'Their Pune time zone gives our US agency a tremendous overnight advantage. We upload translation files at 5 PM Pacific Time and wake up to fully formatted InDesign files and signed-off QA checklists at 8 AM. Flawless communication and exceptional pricing.',
    author: 'David K. Lindqvist',
    role: 'VP of Creative Services',
    company: 'OmniBrand Global Communications',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Process & Tools',
    question: 'Which desktop publishing applications and file formats do you support?',
    answer: 'We support all major professional DTP and design suites: Adobe InDesign (all CC versions & legacy CS), Adobe Illustrator, Adobe Photoshop, Adobe FrameMaker (Structured & Unstructured), QuarkXPress, Figma, Articulate Storyline, Adobe Captivate, Microsoft Office (Word, PowerPoint, Excel), CorelDRAW, PageMaker, and XML/DITA.'
  },
  {
    id: 'faq-2',
    category: 'Process & Tools',
    question: 'Can you work directly with CAT tool exports such as SDL Trados, memoQ, and Phrase?',
    answer: 'Yes! We frequently handle bilingual IDML, XLIFF, MQXLIFF, and TTX files. We can extract translatable text from your layout, hand it over cleanly for CAT tool translation, and import the target bilingual files back into InDesign without breaking underlying paragraph styles or master items.'
  },
  {
    id: 'faq-3',
    category: 'General',
    question: 'How do you handle text expansion and contraction during translation?',
    answer: 'Different languages have unique spatial requirements. For example, German or Russian often expands by 25–40% compared to English, whereas Japanese or Chinese contracts by 20–30%. Our DTP experts adjust typographic leading, character tracking, column widths, vertical container margins, and baseline grids without compromising the original design intent.'
  },
  {
    id: 'faq-4',
    category: 'Quality & Security',
    question: 'How do you ensure font licensing and avoid missing glyph / tofu characters?',
    answer: 'We maintain extensive font libraries covering verified OpenType, Google Fonts, Noto Script collections, and commercial font licenses. When client brand guidelines require custom fonts, we verify language glyph coverage before typesetting and can suggest approved typographical substitutes that preserve your brand identity.'
  },
  {
    id: 'faq-5',
    category: 'Quality & Security',
    question: 'Do you sign Non-Disclosure Agreements (NDAs) to protect sensitive client data?',
    answer: 'Absolutely. We handle confidential pre-release product manuals, medical documentation, and proprietary marketing collateral daily. We sign strict bilateral NDAs, enforce secure encrypted file transfers (SFTP/cloud), and maintain isolated workspace access controls.'
  },
  {
    id: 'faq-6',
    category: 'Pricing & Delivery',
    question: 'What is your standard turnaround time and how does pricing work?',
    answer: 'Standard projects (under 50 pages) are delivered within 24 to 48 hours. For high-volume technical manuals (300+ pages), we provide scaled pod teams to meet rigid launch deadlines. Pricing can be structured per-page, per-hour, or on a dedicated monthly capacity retainer based on your agency needs.'
  }
];

export const TOOL_COMPATIBILITY_BADGES = [
  'Adobe InDesign CC',
  'Adobe FrameMaker',
  'Adobe Illustrator',
  'Adobe Photoshop',
  'QuarkXPress',
  'Figma',
  'Articulate Storyline',
  'SDL Trados',
  'memoQ',
  'Phrase TMS',
  'PDF/X-4 Certified',
  'XML / DITA'
];

export const TRUST_STATS = [
  { value: '12+', label: 'Years of DTP Excellence', detail: 'Serving global agencies & LSPs since 2012' },
  { value: '100+', label: 'Languages & Scripts', detail: 'LTR, RTL, Indic, CJK, Cyrillic, and SE Asian' },
  { value: '5,400+', label: 'Completed Publications', detail: 'Catalogs, manuals, packaging & digital decks' },
  { value: '99.8%', label: 'First-Pass QA Acceptance', detail: 'Dual-stage linguistic & preflight sign-off' }
];

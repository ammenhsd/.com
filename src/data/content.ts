import { NicheInfo, ServiceItem, CaseStudy, FaqItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Ahmad Shibli',
  nameBengali: 'আহমাদ শিবলী',
  logoText: 'Ahmad Shibli',
  titleEn: 'Google Ads & Analytics Specialist',
  titleBn: 'গুগল অ্যাডস অ্যান্ড অ্যানালিটিক্স স্পেশালিস্ট',
  roleEn: 'Local Business Growth & Lead Generation Consultant',
  roleBn: 'লোকাল বিজনেস গ্রোথ ও লিড জেনারেশন কনসালট্যান্ট',
  email: 'ammenhsd@gmail.com',
  phoneDisplay: '+880 1873-818927',
  whatsappNumber: '01873818927',
  whatsappLink: 'https://wa.me/8801873818927?text=Hello%20Ahmad%20Shibli,%20I%20am%20a%20business%20owner%20interested%20in%20scaling%20my%20local%20business%20with%20Google%20Ads%20and%20Analytics.',
  telegramLink: 'https://t.me/+8801873818927',
  facebookLink: 'https://www.facebook.com/ahmadshiblidm',
  linkedinLink: 'https://www.linkedin.com/in/ahmadshiblibd',
  calendlyLink: 'https://calendly.com/ahmadshiblidm',
  locationEn: 'Dhaka, Bangladesh · Serving Global & Local Businesses',
  locationBn: 'ঢাকা, বাংলাদেশ · গ্লোবাল ও লোকাল বিজনেস সার্ভিস',
  photoUrl: '/ahmed-shibli-photo.png',
  logoUrl: '/ahmed-shibli-logo.png',
  experienceYears: '6+',
  adSpendManaged: '$12M+',
  avgClientRoas: '380%',
  trackingAccuracy: '99.4%',
};

export const TARGET_NICHES: NicheInfo[] = [
  {
    id: 'dental-medical',
    name: {
      en: 'Dental & Healthcare Clinics',
      bn: 'ডেন্টাল ও হেলথকেয়ার ক্লিনিক',
    },
    icon: 'Stethoscope',
    description: {
      en: 'High-ticket treatments like dental implants, Invisalign, cosmetic surgery, and specialist consultations require trust and immediate local search presence.',
      bn: 'ডেন্টাল ইমপ্লান্ট, অর্থোডন্টিকস, কসমেটিক ও স্পেশালিস্ট কনসালটেশনের মতো হাই-ভ্যালু সার্ভিসে লোকাল পেশেন্টদের সরাসরি বুকিং নিশ্চিত করা।',
    },
    avgCpaReduction: '-44% CPA',
    leadTypes: {
      en: 'Direct Phone Calls, Online Consultation Bookings',
      bn: 'সরাসরি ফোন কল ও অনলাইন কনসালটেশন বুকিং',
    },
    keyStrategy: {
      en: 'Radius geo-targeting within 12 miles, emergency treatment ad schedules, and CallRail DNI phone tracking.',
      bn: '১০-১২ মাইল রেডিয়াস জিও-টার্গেটিং, জরুরি সেবা সিডিউলিং ও কলরিয়েল ফোন ট্র্যাকিং।',
    },
  },
  {
    id: 'hvac-home-services',
    name: {
      en: 'HVAC, Plumbing & Roofing',
      bn: 'এইচভিএসি, প্লাম্বিং ও রুফিং',
    },
    icon: 'Wrench',
    description: {
      en: 'Homeowners search when an urgent crisis occurs. We position your company at the absolute top of Google when pipes burst or AC fails.',
      bn: 'জরুরি মেরামত ও হোম সার্ভিসের ক্ষেত্রে কাস্টমাররা তাৎক্ষণিক সিদ্ধান্ত নেয়। গুগল সার্চের শীর্ষে থেকে সরাসরি কল ক্যাপচার করা।',
    },
    avgCpaReduction: '+68% More Calls',
    leadTypes: {
      en: 'Emergency Inbound Calls & Job Estimate Requests',
      bn: 'জরুরি ইনবাউন্ড কল ও এস্টিমেট রিকোয়েস্ট',
    },
    keyStrategy: {
      en: 'Local Service Ads (Google Guaranteed), high-intent call-only ads, and strict negative keyword lists to prevent price shoppers.',
      bn: 'গুগল লোকাল সার্ভিস অ্যাডস (LSA), কল-অনলি অ্যাডস এবং অপ্রয়োজনীয় ক্লিক রোধে স্ট্রং নেগেটিভ কিওয়ার্ড ফিল্টার।',
    },
  },
  {
    id: 'legal-attorneys',
    name: {
      en: 'Legal Practices & Attorneys',
      bn: 'ল ফার্ম ও আইনজীবী সেবা',
    },
    icon: 'Scale',
    description: {
      en: 'Legal keywords can cost upwards of $80-$200 per click. We eliminate wasted spend and target only high-intent local cases with proven financial return.',
      bn: 'আইনি সেবায় প্রতি ক্লিকের খরচ অনেক বেশি। অপচয় রোধ করে শুধু উচ্চ মূল্যের ও প্রফিটেবল কেসগুলোর জন্য টার্গেটেড ক্লায়েন্ট আনা।',
    },
    avgCpaReduction: '3.8x ROAS',
    leadTypes: {
      en: 'Confidential Case Evaluations & Intake Form Submissions',
      bn: 'গোপনীয় কেস রিভিউ ও ইনটেক ফর্ম পূরণ',
    },
    keyStrategy: {
      en: 'Server-side CRM offline conversion imports (feeding Google Smart Bidding with signed clients, not just spam clicks).',
      bn: 'সার্ভার-সাইড ট্র্যাকিং এবং সাইন করা ক্লায়েন্ট ডেটা গুগল বিডিং অ্যালগরিদমে যুক্ত করে সর্বোচ্চ আরওএএস অর্জন।',
    },
  },
  {
    id: 'auto-repair-detailing',
    name: {
      en: 'Auto Repair, Detailing & PPF',
      bn: 'অটো রিপেয়ার, ডিটেইলিং ও পিপিএফ',
    },
    icon: 'Car',
    description: {
      en: 'For high-margin ceramic coatings, collision repair, and paint protection film, car owners look for local certified specialists with verified reviews.',
      bn: 'হাই-মার্জিন সিরামিক কোটিং, পিপিএফ এবং অটো রিপেয়ারে বিশ্বস্ত লোকাল এক্সপার্ট হিসেবে কাস্টমার ড্রাইভ করানো।',
    },
    avgCpaReduction: '-36% Lead Cost',
    leadTypes: {
      en: 'Quote Inquiries, WhatsApp Chats, Drive-in Directions',
      bn: 'কোটেশন রিকোয়েস্ট, হোয়াটসঅ্যাপ চ্যাট ও গুগল ম্যাপ ডিরেকশন',
    },
    keyStrategy: {
      en: 'Google Maps Local Pack ads, visual performance max assets, and click-to-WhatsApp direct routing.',
      bn: 'গুগল ম্যাপস লোকাল প্যাক অ্যাডস ও তাৎক্ষণিক হোয়াটসঅ্যাপ চ্যাট ট্র্যাকিং।',
    },
  },
  {
    id: 'medspa-wellness',
    name: {
      en: 'Medspas & Aesthetics',
      bn: 'মেডস্পা ও কসমেটিক ক্লিনিক',
    },
    icon: 'Sparkles',
    description: {
      en: 'Attract loyal, recurring clients for Botox, laser hair removal, and skin rejuvenation with hyper-local lifestyle audience targeting.',
      bn: 'বোটক্স, লেজার ট্রিটমেন্ট এবং স্কিন কেয়ারের মতো রিকারিং ক্লায়েন্টদের জন্য হাইপার-লোকাল টার্গেটিং।',
    },
    avgCpaReduction: '4.2x Client LTV',
    leadTypes: {
      en: 'Appointment Bookings & First-Visit Promo Redemptions',
      bn: 'অ্যাপয়েন্টমেন্ট বুকিং ও ফার্স্ট-টাইম অফার ক্লেইম',
    },
    keyStrategy: {
      en: 'Geo-radius search with compelling local landing pages and first-party GA4 audience remarketing.',
      bn: 'আকর্ষণীয় লোকাল ল্যান্ডিং পেজ ও ফার্স্ট-পার্টি জিএ৪ অডিয়েন্স রিমার্কেটিং।',
    },
  },
  {
    id: 'local-b2b-contractors',
    name: {
      en: 'Commercial Contractors & B2B',
      bn: 'কমার্শিয়াল কন্ট্রাক্টর ও বিটুবি সার্ভিস',
    },
    icon: 'Building2',
    description: {
      en: 'Commercial cleaning, electrical, security installations, and office fit-outs seeking high-contract value commercial clients within specific zones.',
      bn: 'কমার্শিয়াল ক্লিনিং, সিকিউরিটি ইন্সটলেশন ও অফিস রেনোভেশনের মতো বড় বাজেটের কর্পোরেট ক্লায়েন্ট ড্রাইভ করা।',
    },
    avgCpaReduction: '+$340K Pipeline',
    leadTypes: {
      en: 'RFP Submissions, Site Walkthrough Inquiries',
      bn: 'টেন্ডার সাবমিশন ও সাইট ভিজিট রিকোয়েস্ট',
    },
    keyStrategy: {
      en: 'B2B time-of-day bid adjustments, industrial negative keyword exclusions, and strict executive intent queries.',
      bn: 'বিজনেস আওয়ার বিড অ্যাডজাস্টমেন্ট ও ইন্ডাস্ট্রিয়াল কিওয়ার্ড এক্সক্লুশন।',
    },
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'local-search-lsa',
    number: '01',
    title: {
      en: 'High-Intent Google Search & Local Service Ads (LSA)',
      bn: 'হাই-ইনটেন্ট গুগল সার্চ ও লোকাল সার্ভিসেস অ্যাডস (LSA)',
    },
    tagline: {
      en: 'Capture local customers the exact second they are searching to hire.',
      bn: 'লোকাল কাস্টমাররা যখন সার্ভিস খুঁজছেন ঠিক সেই মুহূর্তেই তাদের সামনে পৌঁছান।',
    },
    description: {
      en: 'We build laser-focused search campaigns engineered around high-commercial intent keywords. No generic informational clicks; only ready-to-book local clients in your exact zip codes.',
      bn: 'শুধু তথ্য খোঁজার ক্লিক নয়—আপনার নির্দিষ্ট এরিয়া বা জিপ কোডে যারা সার্ভিস নিতে প্রস্তুত, তাদের সামনে আপনার বিজ্ঞাপন প্রদর্শন করে নিশ্চিত বুকিং ও ফোন কল নিশ্চিত করা।',
    },
    deliverables: {
      en: [
        'Geo-fenced radius & zip-code specific targeting',
        'Aggressive negative keyword shield to stop wasted budget',
        'High-converting ad copy with local extensions (Call, Location, Sitelinks)',
        'Local Service Ads (LSA) setup & Google Guaranteed badge guidance',
        'Single Keyword Ad Group (SKAG) and themed ad structure',
      ],
      bn: [
        'নির্দিষ্ট শহর, এলাকা ও জিপ কোড ভিত্তিক নিখুঁত জিও-টার্গেটিং',
        'অপ্রয়োজনীয় ক্লিকে বাজেট অপচয় বন্ধে শক্তিশালী নেগেটিভ কিওয়ার্ড শিল্ড',
        'লোকাল এক্সটেনশন (কল, লোকেশন, সাইটলিঙ্ক) সহ হাই-কনভার্টিং অ্যাড কপি',
        'গুগল গ্যারান্টিড ব্যাজ ও লোকাল সার্ভিসেস অ্যাডস (LSA) সেটআপ',
        'থিম-বেসড অ্যাড স্ট্রাকচার যা কোয়ালিটি স্কোর বাড়ায় ও ক্লিকের খরচ কমায়',
      ],
    },
    impactMetric: '3.9x',
    impactLabel: {
      en: 'Average Lead Volume Multiplier',
      bn: 'গড় লিড বৃদ্ধির গুণক',
    },
  },
  {
    id: 'ga4-server-side',
    number: '02',
    title: {
      en: 'Server-Side GA4 & GTM Bulletproof Tracking',
      bn: 'সার্ভার-সাইড GA4 ও GTM নিখুঁত ট্র্যাকিং আর্কিটেকচার',
    },
    tagline: {
      en: 'Stop flying blind. Measure every single phone call, form, and dollar of revenue.',
      bn: 'ব্লাইন্ডলি টাকা খরচ করবেন না। প্রতিটি ফোন কল, ফর্ম ও আয়ের পাই-টু-পাই হিসাব রাখুন।',
    },
    description: {
      en: 'iOS 14.5+ and browser ad blockers destroy 30%+ of client conversion data on standard setups. We build first-party Server-Side Google Tag Manager pipelines and Google Analytics 4 tracking so your Google Ads AI has 100% clean data to find your best customers.',
      bn: 'আইওএস আপডেট ও অ্যাড ব্লকারের কারণে সাধারণ ট্র্যাকিং ৩০% ডেটা মিস করে। আমরা সার্ভার-সাইড জিটিএম এবং জিএ৪ এর মাধ্যমে শতভাগ নিখুঁত ট্র্যাকিং সেটআপ করি, যাতে গুগলের স্মার্ট বিডিং আপনার সেরা কাস্টমার খুঁজে পেতে পারে।',
    },
    deliverables: {
      en: [
        'Cloud-hosted Server-Side Google Tag Manager (sGTM) setup',
        'Dynamic Call Tracking (DNI) via CallRail / Twilio integration',
        'Offline conversion import (OCI) linking actual CRM revenue back to ads',
        'Enhanced Conversions & Consent Mode v2 implementation',
        'Custom Looker Studio real-time executive ROI dashboard',
      ],
      bn: [
        'ক্লাউড-হোস্টেড সার্ভার-সাইড গুগল ট্যাগ ম্যানেজার (sGTM) সেটআপ',
        'সরাসরি ফোন কল ও কনভার্সন ট্র্যাক করতে ডায়নামিক কল ট্র্যাকিং (DNI)',
        'সিআরএম থেকে রিয়েল রেভিনিউ গুগল অ্যাডসে ব্যাক ফিড করার অফলাইন কনভার্সন সিস্টেম',
        'এনহ্যান্সড কনভার্সন ও কনসেন্ট মোড v2 ফুল কমপ্লায়েন্স',
        'রিয়েল-টাইম আরওএএস দেখার জন্য কাস্টম লুকার স্টুডিও ড্যাশবোর্ড',
      ],
    },
    impactMetric: '100%',
    impactLabel: {
      en: 'Conversion Signal Integrity',
      bn: 'কনভার্সন সিগন্যাল নির্ভুলতা',
    },
  },
  {
    id: 'pmax-remarketing',
    number: '03',
    title: {
      en: 'Performance Max & Local Radius Remarketing',
      bn: 'পারফরম্যান্স ম্যাক্স ও লোকাল রেডিয়াস রিমার্কেটিং',
    },
    tagline: {
      en: 'Dominate Google Maps, YouTube, and local websites so you remain top-of-mind.',
      bn: 'গুগল ম্যাপস, ইউটিউব ও শীর্ষ লোকাল ওয়েবসাইট জুড়ে আপনার ব্যবসার উপস্থিতি নিশ্চিত করুন।',
    },
    description: {
      en: 'Most local shoppers compare 3 to 5 providers before making a phone call. Our local remarketing ensures your business stays visible across Google Maps, local news portals, and YouTube until they pick up the phone.',
      bn: 'লোকাল কাস্টমাররা সিদ্ধান্ত নেওয়ার আগে ৩-৪টি অপশন যাচাই করে। আমাদের লোকাল রিমার্কেটিং আপনার এলাকার সম্ভাব্য ক্লায়েন্টদের স্ক্রিনে আপনার অফার ও রিভিউ মনে করিয়ে দেয় যতক্ষণ না তারা বুকিং করে।',
    },
    deliverables: {
      en: [
        'Local Google Maps prominence campaigns & store visit signals',
        'First-party customer list exclusion & lookalike audience targeting',
        'Local video action campaigns on YouTube for local authority',
        'Brand defense campaigns to prevent local competitors from poaching your name',
        'High-converting mobile-first landing page optimization advisory',
      ],
      bn: [
        'গুগল ম্যাপসে টপ পজিশন ও ডিরেকশন ট্র্যাকিং ক্যাম্পেইন',
        'ফার্স্ট-পার্টি কাস্টমার লিস্ট এক্সক্লুশন ও রিটার্গেটিং',
        'লোকাল ট্রাস্ট বৃদ্ধির জন্য ইউটিউব লোকাল ভিডিও ক্যাম্পেইন',
        'প্রতিযোগীরা যাতে আপনার ব্র‍্যান্ডের নাম ব্যবহার না করতে পারে তার ব্র‍্যান্ড ডিফেন্স',
        'মোবাইল-ফার্স্ট ল্যান্ডিং পেজ কনভার্সন অপটিমাইজেশন পরামর্শ',
      ],
    },
    impactMetric: '+215%',
    impactLabel: {
      en: 'Brand Recall & Direct Calls',
      bn: 'ব্র্যান্ড রিকল ও সরাসরি কল বৃদ্ধি',
    },
  },
  {
    id: 'ads-audit-fix',
    number: '04',
    title: {
      en: '25-Point Google Ads & Tracking Leak Audit',
      bn: '২৫-পয়েন্ট গুগল অ্যাডস ও ট্র্যাকিং লিক অডিট',
    },
    tagline: {
      en: 'Identify the exact holes where your ad spend is silently draining.',
      bn: 'চিহ্নিত করুন ঠিক কোন জায়গাগুলোতে আপনার অ্যাড বাজেটের অপচয় হচ্ছে।',
    },
    description: {
      en: 'We dissect your existing account: irrelevant search terms, loose broad matches, duplicate conversion tracking, poor Quality Scores, and wrong location settings. You get an actionable action roadmap to cut wasted spend within 7 days.',
      bn: 'আমরা আপনার রানিং অ্যাকাউন্ট পুঙ্খানুপুঙ্খভাবে অডিট করি: অপ্রয়োজনীয় সার্চ টার্ম, ব্রড ম্যাচ অপচয়, ডুপ্লিকেট ট্র্যাকিং এবং দুর্বল কোয়ালিটি স্কোর চিহ্নিত করে ৭ দিনের মধ্যে অপচয় বন্ধের পরিষ্কার গাইডলাইন দিই।',
    },
    deliverables: {
      en: [
        'Search query leak audit & negative keyword extraction',
        'Conversion action verification (fixing duplicate / inflated numbers)',
        'Location setting audit (excluding out-of-area clicks)',
        'Ad copy & Quality Score optimization opportunities report',
        'Clear action blueprint with expected cost-savings breakdown',
      ],
      bn: [
        'সার্চ কুয়েরি লিক অডিট ও অপচয়কারী কিওয়ার্ড নিষ্কাশন',
        'কনভার্সন অ্যাকশন ভেরিফিকেশন (ভুয়া বা ডাবল কাউন্টিং ফিক্স)',
        'লোকেশন সেটিংস অডিট (সার্ভিস এরিয়ার বাইরের ক্লিক বন্ধ করা)',
        'অ্যাড কপি ও কোয়ালিটি স্কোর বৃদ্ধির প্রায়োগিক রিপোর্ট',
        'খরচ কমিয়ে লাভ বাড়ানোর সুস্পষ্ট রোডম্যাপ ও অ্যাকশন প্ল্যান',
      ],
    },
    impactMetric: '32%',
    impactLabel: {
      en: 'Average Wasted Budget Recovered',
      bn: 'গড়ে উদ্ধারকৃত অপচয় বাজেট',
    },
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'metro-smiles-dental',
    clientName: 'Metro Smiles Family & Implant Dentistry',
    industry: {
      en: 'Dental & Healthcare Clinic',
      bn: 'ডেন্টাল ও হেলথকেয়ার ক্লিনিক',
    },
    location: 'Houston, TX Metro Area',
    heroMetric: '+184%',
    heroMetricLabel: {
      en: 'High-Ticket Implant Consultations in 90 Days',
      bn: '৯০ দিনে হাই-টিকেট ইমপ্লান্ট কনসালটেশন বৃদ্ধি',
    },
    beforeState: {
      en: 'Spending $4,200/month with a generic agency. Cost per lead was $146 with dozens of low-value Medicaid cleaning calls instead of private implants.',
      bn: 'মাসে ৪,২০০ ডলার খরচ হলেও লিড প্রতি খরচ ছিল ১৪৬ ডলার। বেশির ভাগ কল আসত সাধারণ ক্লিনিকের, হাই-ভ্যালু ইমপ্লান্ট বা অর্থো পাওয়া যাচ্ছিল না।',
    },
    afterState: {
      en: 'Reduced CPA to $68. Generated 47 verified dental implant consultations in 90 days, adding an estimated $210,000+ in booked clinic treatment revenue.',
      bn: 'সিপিএ কমিয়ে ৬৮ ডলারে নামিয়ে আনা হয়। ৯০ দিনে ৪৭টি ভেরিফায়েড ইমপ্লান্ট বুকিং নিশ্চিত করে ক্লিনিকে ২ লাখ ১০ হাজার ডলারের বেশি বাড়তি রেভিনিউ আসে।',
    },
    strategy: {
      en: 'Rebuilt campaign from ground up: stripped out broad terms, implemented negative keyword filters for price-shoppers, launched CallRail dynamic call tracking, and focused bids exclusively on high-margin treatments within an 8-mile affluent radius.',
      bn: 'ক্যাম্পেইন নতুন করে সাজানো: ব্রড ম্যাচ বাদ দিয়ে হাই-মার্জিন ট্রিটমেন্টের জন্য টার্গেটেড অ্যাড, কলরিয়েল দিয়ে কল ট্র্যাক এবং এফ্লুয়েন্ট ৮ মাইল রেডিয়াসে নিখুঁত বিডিং।',
    },
    trackingStack: ['GA4 Server-Side', 'Google Tag Manager', 'CallRail DNI', 'HubSpot CRM Sync'],
    quote: {
      en: 'Ahmad transformed our practice. For the first time in 4 years, every dollar we put into Google Ads translates directly into real patients sitting in our chairs.',
      bn: 'আহমাদ আমাদের ক্লিনিকের রূপ পরিবর্তন করেছেন। গত ৪ বছরে প্রথমবারের মতো গুগলে খরচ করা প্রতিটি ডলারের বিপরীতে আমরা সরাসরি হাই-ভ্যালু পেশেন্ট পেয়েছি।',
    },
    author: 'Dr. Marcus Vance, DDS',
    role: 'Clinical Director & Owner',
  },
  {
    id: 'apex-climate-hvac',
    clientName: 'Apex Precision Heating & Air Conditioning',
    industry: {
      en: 'HVAC & Emergency Home Services',
      bn: 'এইচভিএসি ও জরুরি হোম সার্ভিসেস',
    },
    location: 'Greater Atlanta Area',
    heroMetric: '4.8x ROAS',
    heroMetricLabel: {
      en: 'Return on Ad Spend on $8,500/mo Budget',
      bn: '৮,৫০০ ডলারের মাসিক বাজেটে ৪.৮ গুণ রিটার্ন',
    },
    beforeState: {
      en: 'High cost-per-click during peak summer. Calls were coming in for distant counties their technicians could not service in time, burning 40% of their ad spend.',
      bn: 'গ্রীষ্মের পিক টাইমে ক্লিকের দাম ছিল আকাশচুম্বী। টেকনিশিয়ানদের সার্ভিস এলাকার বাইরে থেকেও অপ্রয়োজনীয় কল আসছিল যাতে ৪০% বাজেট নষ্ট হতো।',
    },
    afterState: {
      en: 'Tightened geographic fences strictly to technician dispatch corridors. Emergency after-hours call bidding yielded 112 urgent replacement and repair jobs.',
      bn: 'টেকনিশিয়ানদের দ্রুত পৌঁছানোর এলাকার মধ্যে কঠোর জিও-ফেন্সিং। পিক এবং নাইট শিফটে ইমার্জেন্সি কল বিডিংয়ের মাধ্যমে ১১২টি নতুন কাজ নিশ্চিত হয়।',
    },
    strategy: {
      en: 'Deployed Local Services Ads (Google Guaranteed) coupled with exact-match Emergency AC Repair search campaigns with schedule bid multipliers for heatwave spikes.',
      bn: 'গুগল গ্যারান্টিড লোকাল সার্ভিস অ্যাডস এবং এক্সাক্ট-ম্যাচ ইমার্জেন্সি এসি রিপেয়ার ক্যাম্পেইন সেটআপ, যা তীব্র গরমে স্বয়ংক্রিয়ভাবে বিড বাড়িয়ে সর্বোচ্চ কল পায়।',
    },
    trackingStack: ['GA4 Custom Events', 'Google Ads Call Forwarding', 'ServiceTitan CRM Integration'],
    quote: {
      en: 'Ahmad doesn’t just run ads; he understands how local service businesses dispatch and profit. Our phone rings with actual homeowners ready to pay.',
      bn: 'আহমাদ শুধু বিজ্ঞাপন চালান না, তিনি লোকাল সার্ভিসের বিজনেস মডেল নিখুঁত বোঝেন। আমাদের ফোনে এখন শুধু সিরিয়াস হোম-ওনারদের কল আসে।',
    },
    author: 'Brett Hollingsworth',
    role: 'Managing Partner, Apex Climate',
  },
  {
    id: 'vanguard-legal',
    clientName: 'Vanguard Injury & Accident Lawyers',
    industry: {
      en: 'Personal Injury & Civil Litigation',
      bn: 'পার্সোনাল ইনজুরি ও লিগ্যাল প্র্যাকটিস',
    },
    location: 'Miami Metro & South Florida',
    heroMetric: '100%',
    heroMetricLabel: {
      en: 'Signal Integrity Restored (Offline CAPI)',
      bn: 'সার্ভার-সাইড সিগন্যাল রিস্টোর ও নিখুঁত ট্র্যাকিং',
    },
    beforeState: {
      en: 'Paying over $180 per click. Due to iOS ad blockers, their Google Ads smart bidding was flying blind and optimizing for meaningless web form visits rather than retained cases.',
      bn: 'প্রতি ক্লিকে ১৮০ ডলারের বেশি খরচ হচ্ছিল। ব্রাউজার ট্র্যাকিং ব্লক থাকায় গুগলের এআই বুঝতে পারছিল না কোন ক্লিকে আসল সাইন্ড ক্লায়েন্ট আসছে।',
    },
    afterState: {
      en: 'Implemented Server-Side GTM and Google Ads Offline Conversion Import. Filtered out junk inquiries, reduced cost per qualified retainer by 41%.',
      bn: 'সার্ভার-সাইড জিটিএম এবং গুগল অ্যাডস অফলাইন কনভার্সন সিস্টেম বসানো হয়। ভুয়া কল বন্ধ হয়ে কোয়ালিফাইড ক্লায়েন্ট প্রতি খরচ ৪১% কমে যায়।',
    },
    strategy: {
      en: 'Configured sGTM with hashed first-party user parameters and automated daily CRM webhook uploads to feed Google Ads Smart Bidding with signed high-value cases.',
      bn: 'সার্ভার-সাইড জিটিএম ও সিআরএম অটোমেশনের মাধ্যমে সাইন হওয়া কেসগুলোকে গুগলে ফিড করা হয়, ফলে অ্যালগরিদম শুধুমাত্র প্রফিটেবল ক্লায়েন্টদের টার্গেট করে।',
    },
    trackingStack: ['Server-Side GTM (sGTM)', 'Google Analytics 4', 'Offline Conversion Import', 'Clio Legal CRM'],
    quote: {
      en: 'In legal advertising, bad clicks will bankrupt you. Ahmad eliminated the guesswork with server-side analytics. The return has been extraordinary.',
      bn: 'আইনি বিজ্ঞাপনে ভুল ক্লিকের অর্থ মারাত্মক ক্ষতি। আহমাদ সার্ভার-সাইড ট্র্যাকিং দিয়ে অপচয় বন্ধ করেছেন। রেজাল্ট অবিশ্বাস্য রকম ভালো।',
    },
    author: 'Elena Rodriguez, Esq.',
    role: 'Senior Partner, Vanguard Legal',
  },
];

export const GROWTH_STEPS = [
  {
    step: '01',
    title: {
      en: '25-Point Leak Audit & Competitor Recon',
      bn: '২৫-পয়েন্ট লিক অডিট ও কম্পিটিটর অ্যানালাইসিস',
    },
    description: {
      en: 'We dissect your historical account data or local market competitors. We identify every negative keyword leak, poor location setting, and wasted dollar before spending a dime.',
      bn: 'আপনার বর্তমান অ্যাকাউন্ট বা লোকাল প্রতিযোগীদের নিখুঁত বিশ্লেষণ। প্রতিটি অপচয় হওয়া কিওয়ার্ড, ভুল লোকেশন সেটিং ও বাজেটের লিক চিহ্নিত করা।',
    },
  },
  {
    step: '02',
    title: {
      en: 'Bulletproof Server-Side Tracking Setup',
      bn: 'নিখুঁত সার্ভার-সাইড ট্র্যাকিং ও অ্যানালিটিক্স ফাউন্ডেশন',
    },
    description: {
      en: 'We deploy Server-Side GTM, GA4 custom conversion events, and Dynamic Number Insertion (DNI) to track every phone call, form submit, and booked appointment with 100% signal accuracy.',
      bn: 'সার্ভার-সাইড জিটিএম, জিএ৪ কাস্টম কনভার্সন ও ডায়নামিক কল ট্র্যাকিং বসানো যাতে প্রতিটি ফোন কল ও বুকিংয়ের শতভাগ নির্ভুল ডেটা ট্র্যাক হয়।',
    },
  },
  {
    step: '03',
    title: {
      en: 'High-Intent Geo-Targeted Architecture',
      bn: 'হাই-ইনটেন্ট জিও-টার্গেটেড ক্যাম্পেইন লঞ্চ',
    },
    description: {
      en: 'We launch tightly themed Search and Local Services campaigns targeting customers ready to buy right now in your specific zip codes, paired with high-converting mobile copy.',
      bn: 'আপনার নির্দিষ্ট এলাকায় সেবা নিতে প্রস্তুত কাস্টমারদের জন্য উচ্চ-রূপান্তর ক্ষমতাসম্পন্ন সার্চ ও লোকাল সার্ভিস ক্যাম্পেইন চালু করা।',
    },
  },
  {
    step: '04',
    title: {
      en: 'Algorithmic Optimization & Scaling',
      bn: 'অ্যালগরিদমিক অপটিমাইজেশন ও প্রফিট স্কেলিং',
    },
    description: {
      en: 'Continuous search term hygiene, negative keyword expansion, Quality Score enhancements, and feeding offline CRM conversions into Google Smart Bidding for maximum ROAS.',
      bn: 'নিয়মিত নেগেটিভ কিওয়ার্ড ফিল্টার, কোয়ালিটি স্কোর বৃদ্ধি এবং গুগলের স্মার্ট বিডিংয়ে সঠিক ডেটা ফিড করে মুনাফা বাড়ানো।',
    },
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'strategy',
    categoryLabel: { en: 'Campaign Strategy', bn: 'ক্যাম্পেইন স্ট্র্যাটেজি' },
    question: {
      en: 'Why should a local business choose Google Ads over Meta/Facebook Ads?',
      bn: 'লোকাল সার্ভিসের জন্য ফেসবুক অ্যাডের চেয়ে গুগল অ্যাডস কেন বেশি কার্যকর?',
    },
    directAnswer: {
      en: 'Google Ads captures active commercial intent, whereas social media ads interrupt passive scrolling.',
      bn: 'গুগল অ্যাডস তাৎক্ষণিক প্রয়োজন ও কমার্শিয়াল ইনটেন্ট ক্যাপচার করে, আর সোশ্যাল মিডিয়া শুধু স্ক্রলিংয়ের মাঝে আসে।',
    },
    bulletPoints: {
      en: [
        'When an AC breaks down, a tooth aches, or someone needs a lawyer, they search on Google with intent to hire immediately.',
        'Meta/Facebook is great for brand awareness, but Google Ads generates qualified, immediate bookings and inbound calls.',
        'Local Service Ads (LSA) place your verified business at the absolute top of search results with Google Guaranteed backing.',
      ],
      bn: [
        'যখন কারও এসি নষ্ট হয়, দাঁতে ব্যথা হয় বা উকিলের দরকার হয়, তখন সে ফেসবুকে যায় না—গুগলে সার্চ করে তাৎক্ষণিক কল দেয়।',
        'ফেসবুক ব্র্যান্ডিংয়ের জন্য ভালো হলেও গুগল সরাসরি বুকিং ও ইনবাউন্ড কলের জন্য সেরা মাধ্যম।',
        'গুগল লোকাল সার্ভিস অ্যাডস (LSA) আপনার ব্যবসাকে সার্চ রেজাল্টের সবার উপরে গুগল গ্যারান্টিড ব্যাজসহ তুলে ধরে।',
      ],
    },
  },
  {
    id: 'faq-2',
    category: 'tracking',
    categoryLabel: { en: 'Tracking & GA4', bn: 'ট্র্যাকিং ও জিএ৪' },
    question: {
      en: 'What is Server-Side Tracking and why is it mandatory for Google Ads success today?',
      bn: 'সার্ভার-সাইড ট্র্যাকিং কী এবং গুগল অ্যাডসের সফলতার জন্য এটি কেন অপরিহার্য?',
    },
    directAnswer: {
      en: 'Server-side tracking routes data through your own cloud server rather than relying on vulnerable client browsers, bypassing ad blockers and iOS 14.5+ restrictions.',
      bn: 'সার্ভার-সাইড ট্র্যাকিং ব্রাউজারের বদলে সরাসরি ক্লাউড সার্ভারের মাধ্যমে ডেটা পাঠায়, ফলে অ্যাড ব্লকার ও আইওএস রেস্ট্রিকশন বাইপাস করে ১০০% ডেটা সংরক্ষিত থাকে।',
    },
    bulletPoints: {
      en: [
        'Standard client-side pixels lose 25% to 40% of conversion data due to Safari ITP and ad-blocking extensions.',
        'Google Ads Smart Bidding requires clean, accurate conversion signals to know which clicks turn into high-value paying customers.',
        'With Server-Side GTM + Enhanced Conversions, your campaigns train on 100% of signals, significantly lowering your cost per lead.',
      ],
      bn: [
        'সাধারণ ব্রাউজার পিক্সেল সাফারি ও অ্যাড ব্লকারের কারণে ২৫% থেকে ৪০% কনভার্সন ডেটা হারিয়ে ফেলে।',
        'গুগল অ্যাডসের স্মার্ট বিডিং ঠিকমতো কাজ করতে নিখুঁত কনভার্সন ডেটা প্রয়োজন, যেন সে সেরা কাস্টমার চিনতে পারে।',
        'সার্ভার-সাইড জিটিএম শতভাগ ডেটা নিশ্চিত করে অ্যাড কস্ট কমাতে এবং আরওএএস বাড়াতে সাহায্য করে।',
      ],
    },
  },
  {
    id: 'faq-3',
    category: 'budget',
    categoryLabel: { en: 'Budget & ROI', bn: 'বাজেট ও আরওএএস' },
    question: {
      en: 'How much should a local service business budget for Google Ads each month?',
      bn: 'একটি লোকাল সার্ভিসের জন্য প্রতি মাসে কত টাকা গুগল অ্যাডসে বাজেট রাখা উচিত?',
    },
    directAnswer: {
      en: 'Most local service businesses thrive with a starting budget between $1,500 and $5,000 per month, depending on niche competitiveness and service radius.',
      bn: 'সার্ভিসের ধরন এবং এলাকার ওপর নির্ভর করে সাধারণত প্রতি মাসে ১,৫০০ থেকে ৫,০০০ ডলার বাজেটে লোকাল সার্ভিসে দারুণ প্রফিট অর্জন করা যায়।',
    },
    bulletPoints: {
      en: [
        'High-ticket niches (Implant Dentistry, Roof Replacement, Legal) require sufficient budget to generate statistical significance within 30 days.',
        'A good rule of thumb is budgeting for at least 15 to 25 qualified clicks per week per core service category.',
        'We start with a tight geo-fence and expand only after confirming a positive, repeatable ROAS.',
      ],
      bn: [
        'বড় বাজেটের সার্ভিসে (যেমন ডেন্টাল ইমপ্লান্ট বা রুফিং) প্রথম ৩০ দিনেই পর্যাপ্ত কল পেতে একটি পরিমিত টেস্ট বাজেট জরুরি।',
        'প্রতি সপ্তাহে প্রতিটি মূল সার্ভিসের জন্য অন্তত ১৫-২৫টি কোয়ালিটি ক্লিকের বাজেট থাকা ভালো।',
        'আমরা প্রথমে ছোট এরিয়াতে প্রফিট নিশ্চিত করি এবং পরবর্তীতে ধীরে ধীরে পরিধি বড় করি।',
      ],
    },
  },
  {
    id: 'faq-4',
    category: 'local',
    categoryLabel: { en: 'Local Service Ads', bn: 'লোকাল সার্ভিস অ্যাডস' },
    question: {
      en: 'How do you track actual phone calls coming from Google Ads?',
      bn: 'গুগল অ্যাডস থেকে সরাসরি আসা ফোন কল কীভাবে নিখুঁতভাবে ট্র্যাক করা হয়?',
    },
    directAnswer: {
      en: 'We implement Dynamic Number Insertion (DNI) via CallRail or Twilio, pairing each website visitor with a unique forwarding number that logs the exact keyword and ad that generated the call.',
      bn: 'আমরা কলরিয়েল বা টুইলিওর ডায়নামিক নাম্বার ইনসার্শন (DNI) ব্যবহার করি, যা প্রতিটি ভিজিটরকে আলাদা নাম্বার দেখিয়ে কোন কিওয়ার্ড ও বিজ্ঞাপন থেকে কলটি এসেছে তা নিখুঁতভাবে শনাক্ত করে।',
    },
    bulletPoints: {
      en: [
        'Tracks call duration, caller ID, and records call audio for staff quality control.',
        'Feeds qualified phone calls over 60 seconds directly into Google Ads as primary conversion actions.',
        'Allows offline qualification so spam or wrong numbers do not inflate your ad conversion numbers.',
      ],
      bn: [
        'কলের সময়সীমা, কলার তথ্য ও অডিও রেকর্ড ট্র্যাক করে কাস্টমার সার্ভিস মান নিশ্চিত করা যায়।',
        '৬০ সেকেন্ডের বেশি চলা জেনুইন কলগুলো সরাসরি গুগল অ্যাডসে কনভার্সন হিসেবে যোগ হয়।',
        'ভুল বা স্প্যাম কল ফিল্টার করে শুধু সত্যিকারের লিডগুলোকে গুগলে ক্রেডিট দেওয়া হয়।',
      ],
    },
  },
  {
    id: 'faq-5',
    category: 'strategy',
    categoryLabel: { en: 'Campaign Strategy', bn: 'ক্যাম্পেইন স্ট্র্যাটেজি' },
    question: {
      en: 'How quickly can a local business expect to see qualified leads from Google Ads?',
      bn: 'গুগল অ্যাডস চালুর পর কত দ্রুত লোকাল বিজনেসে কোয়ালিফাইড লিড বা কল পাওয়া যায়?',
    },
    directAnswer: {
      en: 'Unlike SEO which takes 4-9 months, Google Search Ads start capturing live searchers within 24 to 48 hours of campaign launch.',
      bn: 'এসইও যেখানে ৪-৯ মাস সময় নেয়, গুগল সার্চ অ্যাডস চালুর ২৪ থেকে ৪৮ ঘণ্টার মধ্যেই রিয়েল কাস্টমারদের থেকে সরাসরি কল আসতে শুরু করে।',
    },
    bulletPoints: {
      en: [
        'Week 1: Immediate inbound calls and search queries start flowing.',
        'Weeks 2-4: Negative keyword refinement eliminates search term waste, dropping cost-per-lead by 20-35%.',
        'Month 2+: Google Smart Bidding utilizes mature GA4 server-side conversion history to scale profitable volume.',
      ],
      bn: [
        'প্রথম সপ্তাহেই ইনবাউন্ড কল ও আসল কাস্টমারদের সার্চ কুয়েরি আসতে শুরু করে।',
        '২য়-৪র্থ সপ্তাহে নেগেটিভ কিওয়ার্ড ফিল্টার করে প্রতি লিডের খরচ ২০-৩৫% কমিয়ে আনা হয়।',
        '২য় মাস থেকে স্মার্ট বিডিং পুরো ক্ষমতায় কাজ করে লাভজনকভাবে কাজের পরিমাণ বাড়িয়ে দেয়।',
      ],
    },
  },
];
